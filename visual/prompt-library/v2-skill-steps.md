---
id: "prompt-v2-skill-steps"
loai: "system"
tieu_de: "Prompt Template V2 — Hướng dẫn Kỹ năng Từng bước"
---

# V2 — HƯỚNG DẪN KỸ NĂNG TỪNG BƯỚC (SKILL STEPS)

Dùng cho: công thức kỹ năng (Canonical Skills), quy trình thao tác trong giáo án. Lắp khối theo [_master-blocks.md](_master-blocks.md), FORMAT dùng `FMT-STEPS`.

## Khung SCENE BLOCK

```
SCENE: A {số bước}-step skill instruction chart drawn as a comic strip, panels connected by arrows, each panel showing one Vietnamese junior-high student demonstrating the step: Panel 1 - {hành động cụ thể, quan sát được}; Panel 2 - {hành động}; Panel 3 - {hành động}. {Nếu theo theme: nhân vật mặc trang phục theme}. Uncluttered, easy to read from the back of a classroom. {Câu palette theme}.
```

## Khung TEXT IN IMAGE

```
TEXT IN IMAGE (đổi chữ tại đây):
- Title at top: "{TÊN KỸ NĂNG IN HOA}"
- Panel 1 label: "1. {TÊN BƯỚC}"
- Panel 2 label: "2. {TÊN BƯỚC}"
- Panel 3 label: "3. {TÊN BƯỚC}"
Render all Vietnamese text exactly as written, with correct diacritics, in a bold comic-style font that stays highly legible.
```

**Quy tắc:**
- Tối đa 4 bước/ảnh — kỹ năng dài hơn thì tách thành 2 ảnh (ghi rõ "Phần 1/2" trong tiêu đề).
- Mỗi panel đúng 1 nhân vật + 1 hành động **quan sát được** (không vẽ "đang suy nghĩ" chung chung — vẽ hành vi: viết, chỉ tay, phân loại thẻ, giơ thẻ...).
- Nhân vật giữa các panel nên xen kẽ nam/nữ.
- Tên bước lấy NGUYÊN VĂN từ công thức kỹ năng trong giáo án/frontmatter (trường `Canonical Skill Candidates`) — không tự diễn đạt lại.

## Biến thể theme

Mặc định V2 dùng nhân vật mặc đồng phục thường (kỹ năng là thứ học sinh dùng ngoài đời thật, không chỉ trong vai diễn). Chỉ thêm trang phục theme khi giáo án yêu cầu gắn bước kỹ năng với bối cảnh nhập vai (ví dụ "Phác đồ điều trị" của theme Bác sĩ → panel đầu có thể là bác sĩ nhí cầm bảng phác đồ).

## Ví dụ hoàn chỉnh (kỹ năng "Tự kiểm toán đặc điểm cá nhân" — bài 8.01)

```
STYLE: Clean comic line-art illustration. Bold consistent dark outlines, flat cel-shaded colors with minimal shading (maximum one flat shadow layer). Manga-influenced but natural body proportions (not chibi), expressive faces and lively poses. Bright energetic school-friendly palette. No screentones, no gradients, no textures.

CHARACTERS: Three Vietnamese junior-high students aged 13-14 with natural Vietnamese features and BLACK HAIR only, mixed genders (girl, boy, girl). They wear white school uniform shirts. Varied BLACK hairstyles (ponytail, short hair, braids).

SCENE: A 3-step skill instruction chart drawn as a comic strip, panels connected by arrows, each panel showing one student demonstrating the step: Panel 1 - a girl writing a list of five personal traits on paper; Panel 2 - a boy sorting trait cards into two groups on a desk; Panel 3 - a girl confidently pointing at one chosen action card and smiling. Uncluttered, easy to read from the back of a classroom. Dominant colors: deep navy and warm yellow over a warm cream base.

TEXT IN IMAGE (đổi chữ tại đây):
- Title at top: "TỰ KIỂM TOÁN ĐẶC ĐIỂM CÁ NHÂN"
- Panel 1 label: "1. LIỆT KÊ"
- Panel 2 label: "2. PHÂN LOẠI"
- Panel 3 label: "3. ĐỊNH VỊ TỰ QUYẾT"
Render all Vietnamese text exactly as written, with correct diacritics, in a bold comic-style font that stays highly legible.

FORMAT: 16:9 widescreen, horizontal comic-strip layout with numbered panels connected by arrows, generous white space, large readable text.

CONSTRAINTS: All characters have BLACK hair only (mandatory - no dyed, brown or blonde hair). Natural Vietnamese features. Gender-balanced group. Wholesome, school-appropriate, friendly and bright mood - nothing scary or violent. No gender stereotypes in role assignment. Not photorealistic, not 3D render, no watermark, no extra text beyond the TEXT IN IMAGE list.
```
