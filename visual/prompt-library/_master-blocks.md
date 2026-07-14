---
id: "prompt-master-blocks"
loai: "system"
tieu_de: "Thư viện Prompt — Master Blocks (khối chuẩn copy nhanh)"
---

# MASTER BLOCKS — KHỐI PROMPT CHUẨN (COPY NHANH)

File này để copy nhanh các khối cố định khi lắp prompt. Bản quy định đầy đủ (và là bản chuẩn nếu có khác biệt): [system-ai-visual-art-direction-skill.md](../../system-ai-visual-art-direction-skill.md).

**Thứ tự lắp prompt:** `STYLE → CHARACTERS → SCENE → TEXT IN IMAGE → FORMAT → CONSTRAINTS`
Chỉ SCENE và TEXT IN IMAGE viết mới cho từng ảnh. Muốn đổi chữ trong ảnh: chỉ sửa TEXT IN IMAGE.

---

## STYLE BLOCK (khóa cứng)

**Cho ảnh có nhân vật (V1, V2):**

```
STYLE: Clean comic line-art illustration. Bold consistent dark outlines, flat cel-shaded colors with minimal shading (maximum one flat shadow layer). Manga-influenced but natural body proportions (not chibi), expressive faces and lively poses. Bright energetic school-friendly palette. No screentones, no gradients, no textures.
```

**Cho sơ đồ/icon/badge (V3, V4):**

```
STYLE: Comic-style infographic with bold dark outlines and flat cel-shaded colors. Simplified and clean: readability first, decoration second. No screentones, no gradients, no textures.
```

## CHARACTER BLOCK (template điền — ảnh có nhân vật)

```
CHARACTERS: {số lượng} Vietnamese junior-high students aged {11-12|12-13|13-14|14-15} with natural Vietnamese features and BLACK HAIR only. {phân bổ giới: two boys and two girls...}. They wear white school uniform shirts {with red neck scarves — chỉ lớp 6-7}. Over the uniform: {trang phục theme}. Varied heights, body types and BLACK hairstyles ({short hair, ponytail, braids...}). {đặc điểm riêng để đồng bộ 3 tiết: one girl wears round glasses...}.
```

## TEXT IN IMAGE (template)

```
TEXT IN IMAGE (đổi chữ tại đây):
- {vị trí}: "{CHUỖI TIẾNG VIỆT}"
- {vị trí}: "{CHUỖI TIẾNG VIỆT}"
Render all Vietnamese text exactly as written, with correct diacritics, in a bold comic-style font that stays highly legible.
```

Ảnh không chữ: `TEXT IN IMAGE: none.`

## FORMAT BLOCK (chọn 1 preset)

```
FMT-STORY:       FORMAT: 16:9 widescreen, eye-level view, main action centered, upper-left area kept visually calm for a slide title to be added later.
FMT-STEPS:       FORMAT: 16:9 widescreen, horizontal comic-strip layout with numbered panels connected by arrows, generous white space, large readable text.
FMT-INFOGRAPHIC: FORMAT: 16:9 widescreen, diagram centered, high contrast between text and background, readable when projected in a classroom.
FMT-BADGE:       FORMAT: 1:1 square, emblem centered on a plain very-light background, clean silhouette readable at small size.
FMT-BACKGROUND:  FORMAT: 16:9 widescreen, decorative details pushed to the edges, large calm central area reserved for slide content.
```

## CONSTRAINT BLOCK (khóa cứng)

**Cho ảnh có nhân vật:**

```
CONSTRAINTS: All characters have BLACK hair only (mandatory - no dyed, brown or blonde hair). Natural Vietnamese features. Gender-balanced group. Wholesome, school-appropriate, friendly and bright mood - nothing scary or violent. No gender stereotypes in role assignment. Not photorealistic, not 3D render, no watermark, no extra text beyond the TEXT IN IMAGE list.
```

**Cho ảnh không nhân vật:**

```
CONSTRAINTS: School-appropriate, friendly and bright mood. Not photorealistic, not 3D render, no watermark, no extra text beyond the TEXT IN IMAGE list.
```

## PALETTE THEO THEME (chèn 1 câu vào cuối SCENE BLOCK)

```
Thám tử:    Dominant colors: deep navy and warm yellow over a warm cream base.
Phóng viên: Dominant colors: vivid red and cream white over a warm cream base.
Bác sĩ:     Dominant colors: fresh mint green and white over a warm cream base.
Giáo viên:  Dominant colors: fresh leaf green and soft cream over a warm cream base.
Kĩ sư:      Dominant colors: warm orange and blue-grey over a warm cream base.
```
