function Check-OrphanWords($html) {
    $warnings = @()
    # Match text-containing HTML elements
    $pattern = '(?s)<([a-zA-Z1-6]+)(?:\s+[^>]*)?>([\s\S]*?)<\/\1>'
    $matches = [regex]::Matches($html, $pattern)
    
    foreach ($m in $matches) {
        $tagName = $m.Groups[1].Value.ToLower()
        $innerContent = $m.Groups[2].Value.Trim()
        
        # Only check text-heavy leaf tags
        if ($tagName -in @('div', 'p', 'span', 'li', 'h1', 'h2', 'h3', 'h4', 'td', 'a', 'strong', 'em', 'label')) {
            # Skip block containers that hold other block structures
            if ($innerContent -match '<(div|p|ul|li|ol|table|tr|h[1-6])\b') {
                continue
            }
            
            $cleanText = $innerContent -replace '<[^>br/]+>', ''
            if ($cleanText.ToLower().Contains("br")) {
                $lines = [regex]::Split($cleanText, '<br\s*/?>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
                for ($i = 0; $i -lt $lines.Count; $i++) {
                    $lineText = ($lines[$i] -replace '<[^>]+>', ' ').Trim()
                    $words = [regex]::Split($lineText, '\s+') | Where-Object { $_.Trim() -ne '' }
                    
                    if ($words.Count -eq 1) {
                        $tagStart = $m.Value.SubString(0, $m.Value.IndexOf(">") + 1)
                        $classMatch = [regex]::Match($tagStart, 'class="([^"]+)"')
                        $context = $tagName
                        if ($classMatch.Success) {
                            $context = $classMatch.Groups[1].Value
                        }
                        
                        $lineName = "middle"
                        if ($i -eq 0) { $lineName = "first" }
                        elseif ($i -eq ($lines.Count - 1)) { $lineName = "last" }
                        $warnings += "Element '$context' (<$tagName>) has a manual line break but leaves a single orphan word '$($words[0])' on the $lineName line. Ensure each line has at least 2 words."
                    }
                }
            }
        }
    }
    return $warnings
}

$content = Get-Content -Raw -Encoding UTF8 -Path "slides.js"
$matches = [regex]::Matches($content, 'id:\s*(\d+),\s*content:\s*`([\s\S]*?)`', [System.Text.RegularExpressions.RegexOptions]::Multiline)

$warningsCount = 0
Write-Output "============================================================"
Write-Output "        SLIDE LAYOUT INSPECTOR AGENT - SCAN REPORT"
Write-Output "============================================================"

# Define unicode escaped search targets for cross-platform encoding safety
# "bước"
$kw_buoc = "b" + [char]0x1b0 + [char]0x1a1 + [char]0x301 + "c"
# "điều"
$kw_dieu = [char]0x111 + "i" + [char]0x1ec1 + "u"
# "câu hỏi"
$kw_cauhoi = "c" + [char]0xe2 + "u h" + [char]0x1ecf + "i"
# "thay đổi"
$kw_thaydoi = "thay " + [char]0x111 + [char]0x1ed5 + "i"

$doubleChars = @(
    ([char]0xe2 + [char]0xe2),   # ââ
    ([char]0x103 + [char]0x103), # ăă
    ([char]0xea + [char]0xea),   # êê
    ([char]0xf4 + [char]0xf4),   # ôô
    ([char]0x1a1 + [char]0x1a1), # ơơ
    ([char]0x1b0 + [char]0x1b0), # ưư
    ([char]0x111 + [char]0x111)  # đđ
)

# Regex pattern matching Vietnamese vowels and accented chars using pure ASCII hex codes
$vowelsPattern = "[aeiouy\u00e0-\u00e5\u00e8-\u00eb\u00ec-\u00ed\u00f2-\u00f6\u00f9-\u00fa\u00fd\u0102\u0103\u0110\u0111\u01a0\u01a1\u01af\u01b0\u1ea0-\u1ef9]+"

foreach ($match in $matches) {
    $slideId = $match.Groups[1].Value
    $html = $match.Groups[2].Value
    
    $slideWarnings = @()
    
    $hasTitle = ($html -like '*class="title*' -or $html -like "*class='title*" -or $html -like '*class=\"title*')
    $hasSubtitle = ($html -like '*class="subtitle*' -or $html -like "*class='subtitle*" -or $html -like '*class=\"subtitle*')
    
    # Check for orphan words in any text elements with manual line breaks
    $slideWarnings += Check-OrphanWords $html
    
    if ($hasSubtitle) {
        # Find font size specifically of the subtitle
        $fontSize = 32
        if ($html -match 'class="[^"]*subtitle[^"]*"[^>]*style="[^"]*font-size:\s*(\d+)pt') {
            $fontSize = [int]$Matches[1]
        }
        
        # Subtitle text length
        if ($html -match '(?s)<div[^>]*class="[^"]*subtitle[^"]*"[^>]*>([\s\S]*?)<\/div>') {
            $subText = $Matches[1] -replace '<[^>]+>', ''
            $subText = $subText.Trim()
            $charCount = $subText.Length
            
            if ($fontSize -ge 32 -and $charCount -gt 60) {
                $slideWarnings += "Subtitle is too long ($charCount chars) to have font-size $fontSize`pt. Suggest reducing to 24pt."
            }
        }
    }
    
    if ($hasTitle -and $hasSubtitle) {
        if ($html -match '(?<=^|;|"|''|\s)center-layout(?=$|;|"|''|\s)' -and $html -like '*dashboard-card*') {
            $slideWarnings += "Uses 'center-layout' for dashboard-card on a slide with Title & Subtitle. This will cause overlap. Position absolutely with a top offset (e.g. top: 220px) instead."
        }
        
        # Check only true top property, avoiding border-top, padding-top, margin-top
        $topMatches = [regex]::Matches($html, '(?<=^|;|"|''|\s)top:\s*(\d+)(px|%)')
        foreach ($t in $topMatches) {
            $val = [int]$t.Groups[1].Value
            $unit = $t.Groups[2].Value
            
            if ($html -match "dashboard-card`"[^>]*style=`"[^`"]*top:\s*$val$unit") {
                if ($unit -eq '%' -and $val -lt 28) {
                    $slideWarnings += "Dashboard card 'top: $val`%' is too high. With title & subtitle, it should start at top: 30% or more (or top: 220px+)."
                } elseif ($unit -eq 'px' -and $val -lt 220) {
                    $slideWarnings += "Dashboard card 'top: $val`px' is too high. With title & subtitle, it should start at top: 220px+ (or top: 260px+ if subtitle is long)."
                }
            }
            if ($html -match "chat-box`"[^>]*style=`"[^`"]*top:\s*$val$unit") {
                if ($unit -eq '%' -and $val -lt 28) {
                    $slideWarnings += "Chat box 'top: $val`%' is too high. With title & subtitle, it should start at top: 30% or more (or top: 220px+)."
                } elseif ($unit -eq 'px' -and $val -lt 220) {
                    $slideWarnings += "Chat box 'top: $val`px' is too high. With title & subtitle, it should start at top: 220px+ (or top: 260px+ if subtitle is long)."
                }
            }
        }
    }
    
    # 3. Check step column width overlap risks
    # Check inline widths in slides.js using safe ASCII patterns
    $stepMatches = [regex]::Matches($html, 'width:\s*(\d+)(px|%)[^"]*"[^>]*>(?:•\s*)?([^<]+)<\/span>')
    foreach ($sm in $stepMatches) {
        $val = [int]$sm.Groups[1].Value
        $unit = $sm.Groups[2].Value
        $innerText = $sm.Groups[3].Value.ToLower()
        
        $isStep = $false
        foreach ($kw in @($kw_buoc, $kw_dieu, $kw_cauhoi, $kw_thaydoi)) {
            if ($innerText.Contains($kw)) {
                $isStep = $true
                break
            }
        }
        
        if ($isStep) {
            if ($unit -eq 'px' -and $val -lt 450) {
                $slideWarnings += "Step label span '$($sm.Groups[3].Value)' width ($val`px) is too small inline. Must be at least 450px (recommended 480px) to prevent overlap."
            } elseif ($unit -eq '%' -and $val -lt 40) {
                $slideWarnings += "Step label span '$($sm.Groups[3].Value)' width ($val`%) is too small inline. Must be at least 40% (or fixed 450px+) to prevent overlap."
            }
        }
    }
    
    # Check style.css overrides
    if (Test-Path "style.css") {
        $css = Get-Content -Raw -Encoding UTF8 -Path "style.css"
        if ($css -match "#slide-content\[data-slide-id=`"$slideId`"\].*?span\s*\{\s*[^}]*width:\s*(\d+)(px|%)") {
            $val = [int]$Matches[1]
            $unit = $Matches[2]
            if ($unit -eq 'px' -and $val -lt 450) {
                $slideWarnings += "style.css overrides step label span width to $val`px, which is too small (must be at least 450px to prevent overlap)."
            } elseif ($unit -eq '%' -and $val -lt 40) {
                $slideWarnings += "style.css overrides step label span width to $val`%, which is too small (must be at least 40% to prevent overlap)."
            }
        }
    }
    
    # 4. Spelling/Typo check for Vietnamese words
    # Clean HTML tags
    $cleanText = $html -replace '<style[^>]*>[\s\S]*?<\/style>', ''
    $cleanText = $cleanText -replace '<script[^>]*>[\s\S]*?<\/script>', ''
    $cleanText = $cleanText -replace '<[^>]+>', ' '
    $cleanText = $cleanText.Replace("&nbsp;", " ").Replace("&amp;", "&").Replace("&lt;", "<").Replace("&gt;", ">")
    
    # Find all words using Unicode letter and mark categories
    $words = [regex]::Matches($cleanText, '[\p{L}\p{M}]+')
    foreach ($w in $words) {
        $word = $w.Value.ToLower()
        if ($word.Length -lt 3) { continue }
        
        # Check double-accent telex typos
        foreach ($doubleChar in $doubleChars) {
            if ($word -like "*$doubleChar*") {
                $slideWarnings += "Telex spelling typo detected in word '$($w.Value)': contains double-accent character '$doubleChar'."
                break
            }
        }
        
        # Check if the word contains non-ASCII characters (i.e. is a Vietnamese word)
        if ($word -match '[^\x00-\x7F]') {
            $vowelGroups = [regex]::Matches($word, $vowelsPattern)
            if ($vowelGroups.Count -gt 1) {
                # Check if separated by consonants
                $parts = [regex]::Split($word, $vowelsPattern)
                $consonantCount = 0
                foreach ($p in $parts) {
                    if ($p.Trim() -ne '') { $consonantCount++ }
                }
                if ($consonantCount -ge 1 -and $parts[0] -ne $word) {
                    $slideWarnings += "Spelling error/Telex typo detected in word '$($w.Value)': contains multiple vowel groups separated by consonants."
                }
            }
        }
    }
    
    if ($slideWarnings.Count -gt 0) {
        $warningsCount += $slideWarnings.Count
        Write-Output "`n[⚠️ WARNING] Slide ID $slideId`:"
        foreach ($w in $slideWarnings) {
            Write-Output "  - $w"
        }
    }
}

Write-Output "`n============================================================"
if ($warningsCount -eq 0) {
    Write-Output "  🎉 SUCCESS: No layout overlap or spelling issues detected!"
} else {
    Write-Output "  ❌ FOUND $warningsCount potential layout/spelling warning(s). Please review them."
}
Write-Output "=================================================="
