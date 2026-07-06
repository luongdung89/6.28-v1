import re
import os

def check_orphan_words(html):
    warnings = []
    # Match text-containing HTML elements
    matches = re.finditer(r'<([a-zA-Z1-6]+)(?:\s+[^>]*)?>([\s\S]*?)<\/\1>', html)
    for m in matches:
        tag_name = m.group(1).lower()
        inner_content = m.group(2).strip()
        
        # Only check text-heavy leaf tags
        if tag_name in ['div', 'p', 'span', 'li', 'h1', 'h2', 'h3', 'h4', 'td', 'a', 'strong', 'em', 'label']:
            # Skip block containers that hold other block structures to avoid duplicates
            if re.search(r'<(div|p|ul|li|ol|table|tr|h[1-6])\b', inner_content):
                continue
                
            clean_text = re.sub(r'<[^>br/]+>', '', inner_content)
            if 'br' in clean_text.lower():
                lines = re.split(r'<br\s*/?>', clean_text, flags=re.IGNORECASE)
                for idx, line in enumerate(lines):
                    line_text = re.sub(r'<[^>]+>', ' ', line).strip()
                    words = [w for w in re.split(r'\s+', line_text) if w]
                    if len(words) == 1:
                        tag_start = m.group(0)[:m.group(0).find('>')+1]
                        class_match = re.search(r'class=["\']([^"\']+)["\']', tag_start)
                        context = class_match.group(1) if class_match else tag_name
                        
                        line_name = "first" if idx == 0 else "last" if idx == len(lines)-1 else f"line {idx+1}"
                        warnings.append(
                            f"Element '{context}' (<{tag_name}>) has a manual line break but leaves a single orphan word '{words[0]}' on the {line_name} line. Ensure each line has at least 2 words."
                        )
    return warnings

def check_slides():
    if not os.path.exists('slides.js'):
        print("Error: slides.js not found in current directory.")
        return

    with open('slides.js', 'r', encoding='utf-8') as f:
        content = f.read()

    css_content = ""
    if os.path.exists('style.css'):
        with open('style.css', 'r', encoding='utf-8') as f:
            css_content = f.read()

    # Match slide objects
    slides = re.findall(r'id:\s*(\d+),\s*content:\s*`([\s\S]*?)`', content)
    
    if not slides:
        print("Warning: No slides could be parsed from slides.js using regex pattern.")
        return

    warnings_count = 0
    print("=" * 60)
    print("        SLIDE LAYOUT INSPECTOR AGENT - SCAN REPORT")
    print("=" * 60)

    for slide_id, html in slides:
        slide_warnings = []
        
        # Check if it has a title
        has_title = 'class="title' in html or "class='title" in html or "class=\"title" in html
        # Check if it has a subtitle
        has_subtitle = 'class="subtitle' in html or "class='subtitle" in html or "class=\"subtitle" in html
        
        # Check for orphan words in any text elements with manual line breaks
        slide_warnings.extend(check_orphan_words(html))
        
        # Check for subtitle font size and length
        if has_subtitle:
            # Find subtitle font size
            sz_match = re.search(r'font-size:\s*(\d+)pt', html)
            
            # Extract subtitle text
            sub_text_match = re.search(r'<div[^>]*class="[^"]*subtitle[^"]*"[^>]*>([\s\S]*?)<\/div>', html)
            if sub_text_match:
                sub_text = re.sub(r'<[^>]+>', '', sub_text_match.group(1)).strip()
                char_count = len(sub_text)
                
                font_size = int(sz_match.group(1)) if sz_match else 32
                
                if font_size >= 32 and char_count > 60:
                    slide_warnings.append(
                        f"Subtitle is too long ({char_count} chars) to have font-size {font_size}pt. Suggest reducing to 24pt."
                    )

        # Check for layout overlap risks
        if has_title and has_subtitle:
            # If it has both title and subtitle, check if it uses center-layout for a card
            if 'center-layout' in html and 'dashboard-card' in html:
                slide_warnings.append(
                    "Uses 'center-layout' for dashboard-card on a slide with Title & Subtitle. This will cause overlap. Position absolutely with a top offset (e.g. top: 220px) instead."
                )
            
            # Check if absolute card has top <= 25% or top <= 200px
            top_matches = re.findall(r'top:\s*(\d+)(px|%)', html)
            for val_str, unit in top_matches:
                val = int(val_str)
                if unit == '%' and val < 28:
                    slide_warnings.append(
                        f"Dashboard card 'top: {val}%' is too high. With title & subtitle, it should start at top: 30% or more (or top: 220px+)."
                    )
                elif unit == 'px' and val < 220:
                    slide_warnings.append(
                        f"Dashboard card 'top: {val}px' is too high. With title & subtitle, it should start at top: 220px+ (or top: 260px+ if subtitle is long)."
                    )

        # Check for step column width overlap risks (Slide 32/35 layout issues)
        # Check inline styles in slides.js
        step_spans = re.findall(r'width:\s*(\d+)(px|%)[^"]*"[^>]*>(?:•\s*)?(Bước|Điều|Câu hỏi|Thay đổi)[^<]*<\/span>', html)
        for val_str, unit, name in step_spans:
            val = int(val_str)
            if unit == 'px' and val < 450:
                slide_warnings.append(
                    f"Step label span '{name}' width ({val}px) is too small inline. To prevent overlap at 20pt font size, it must be at least 450px (recommended 480px)."
                )
            elif unit == '%' and val < 40:
                slide_warnings.append(
                    f"Step label span '{name}' width ({val}%) is too small inline. To prevent overlap, it must be at least 40% (or fixed 450px+)."
                )

        # Check style.css overrides
        if css_content:
            css_width_match = re.search(r'#slide-content\[data-slide-id="' + slide_id + r'"\].*?span\s*\{\s*[^}]*width:\s*(\d+)(px|%)', css_content, re.DOTALL)
            if css_width_match:
                val = int(css_width_match.group(1))
                unit = css_width_match.group(2)
                if unit == 'px' and val < 450:
                    slide_warnings.append(
                        f"style.css overrides step label span width to {val}px, which is too small (must be at least 450px to prevent overlap)."
                    )
                elif unit == '%' and val < 40:
                    slide_warnings.append(
                        f"style.css overrides step label span width to {val}%, which is too small (must be at least 40% to prevent overlap)."
                    )

        # Spelling/Typo check for Vietnamese words
        text_content = re.sub(r'<style[^>]*>[\s\S]*? </style>', '', html)
        text_content = re.sub(r'<script[^>]*>[\s\S]*? </script>', '', text_content)
        text_content = re.sub(r'<[^>]+>', ' ', text_content)
        text_content = text_content.replace('&nbsp;', ' ').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
        
        words = re.findall(r'[a-zA-Zàáảãạăằắẳẵặâầấẩẫậeèéẻẽẹêềếểễệiìíỉĩịoòóỏõọôồốổỗộơờớởỡợuùúủũụưừứửữựyỳýỷỹỵ\u0300-\u0309\u0323\u031b]+', text_content)
        for word in words:
            word_lower = word.lower()
            if len(word_lower) < 3:
                continue
            
            # Check for double-accent/Telex vowel marker typos (like ââ, ôô, êê, ưư, oo, etc.)
            for double_char in ['ââ', 'ăă', 'êê', 'ôô', 'ơơ', 'ưư', 'đđ']:
                if double_char in word_lower:
                    slide_warnings.append(
                        f"Telex spelling typo detected in word '{word}': contains double-accent character '{double_char}'."
                    )
                    break
            
            # Vietnamese vowel monosyllabic checker
            # Only run check on words that contain Vietnamese-specific characters (to ignore English names like 'caddy' or 'google')
            has_vi_chars = any(c in word_lower for c in 'đăâêôơưáàảãạéèẻẽẹíìỉĩịóòỏõọúùủũụỳýỷỹỵ')
            if has_vi_chars:
                vowels_pattern = r'[aàáảãạăằắẳẵặâầấẩẫậeèéẻẽẹêềếểễệiìíỉĩịoòóỏõọôồốổỗộơờớởỡợuùúủũụưừứửữựyỳýỷỹỵ]+'
                vowel_groups = re.findall(vowels_pattern, word_lower)
                if len(vowel_groups) > 1:
                    parts = re.split(vowels_pattern, word_lower)
                    consonants = [p for p in parts if p]
                    # If vowel groups are separated by consonants, it's a spelling typo (e.g. thôngư)
                    if len(consonants) >= 1 and parts[0] != word_lower:
                        slide_warnings.append(
                            f"Spelling error/Telex typo detected in word '{word}': contains multiple vowel groups {vowel_groups} separated by consonants."
                        )

        if slide_warnings:
            warnings_count += len(slide_warnings)
            print(f"\n[⚠️ WARNING] Slide ID {slide_id}:")
            for w in slide_warnings:
                print(f"  - {w}")

    print("\n" + "=" * 60)
    if warnings_count == 0:
        print("  🎉 SUCCESS: No layout overlap or spelling issues detected!")
    else:
        print(f"  ❌ FOUND {warnings_count} potential layout/spelling warning(s). Please review them.")
    print("=" * 60)

if __name__ == '__main__':
    check_slides()
