# Slide Layout Quality Assurance Rules

Whenever editing or generating slides in this workspace, the AI assistant (acting as a Slide Layout Inspector Agent) must strictly enforce the following layout rules to prevent overlapping content.

## 1. Title and Subtitle Clearance Rules
- **Short Subtitles (under 10 words / 60 characters):**
  - Subtitle font size should be at most `28pt` to `32pt`.
  - Content card/body text top position must start at least at `top: 220px` or `top: 28%` to avoid overlaps.
- **Long Subtitles (10+ words / 60+ characters):**
  - Subtitle font size **must** be reduced to `24pt` or `22pt`.
  - Content card/body text top position must start at least at `top: 260px` or `top: 35%` to prevent overlap with the wrapped subtitle lines.

## 2. Positioning Constraints
- **Ban `center-layout` on Title+Subtitle Slides:**
  - Do NOT use the `.center-layout` class (which centers content vertically at `top: 50%` and `translateY(-50%)`) for main content cards on slides that also have a title and subtitle.
  - Doing so forces the top of the content card up to ~160px, causing overlap.
  - Instead, use absolute positioning with a fixed top offset (e.g., `style="top: 220px; left: 10%; width: 80%; position: absolute;"`).

## 3. Step Label Width Constraint
- **Step lists with inputs (e.g. Slide 32, Slide 35):**
  - Labels (spans) containing keywords like `Bước`, `Điều`, `Câu hỏi`, `Thay đổi` paired with input elements must have their width set to at least `450px` (ideally `480px`) to prevent `white-space: nowrap` text from overlapping adjacent input fields.
  - This constraint applies both inline in `slides.js` and as overrides in `style.css`.

## 4. Spelling & Telex Typo Auditing
- **Monosyllabic Spelling Check:**
  - Vietnamese words are monosyllabic. Any word containing Vietnamese characters (e.g., accents, `đ`, `ă`, `â`, `ê`, `ô`, `ơ`, `ư`) must contain exactly one vowel group. Multi-vowel group Vietnamese words (e.g., `thôngư`) are flagged as Telex typos.
- **Double Telex Accents:**
  - Double accents resulting from double-keying on Telex keyboard layouts (e.g., `ââ`, `ăă`, `êê`, `ôô`, `ơơ`, `ưư`, `đđ`) are strictly banned.

## 5. Title Orphan Word Wrapping Constraint
- **Manual Line Breaks in Titles:**
  - If a title has a manual line break (`<br>`), it must NOT leave a single "orphan" word on any line. Each line in the title must contain at least 2 words.
  - Do NOT warn about or modify slides that are merely at risk of wrapping without `<br>`; only check and correct actual orphan words when `<br>` is present.

## 6. Automated Quality Auditing
- Before finalizing any slide changes, run the automated checker script `powershell -ExecutionPolicy Bypass -File check_layout.ps1` (or `python check_layout.py`) to inspect the slides for layout, overlapping elements, spelling, and title orphan warnings.
- Manually review slides that trigger alerts and adjust coordinates/texts accordingly.
