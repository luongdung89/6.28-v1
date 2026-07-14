---
id: "prompt-v4-theme-identity"
loai: "system"
tieu_de: "Prompt Template V4 — Bộ Nhận diện Theme (Badge, Background, Icon)"
---

# V4 — BỘ NHẬN DIỆN THEME (BADGE · BACKGROUND · ICON SET)

Dùng cho: huy hiệu thưởng, background slide, bộ icon theo 5 theme nhập vai. Đây là tài sản **tái sử dụng xuyên khối lớp** — sinh 1 lần/theme, lưu vào kho chung, không sinh lại mỗi bài. Lắp khối theo [_master-blocks.md](_master-blocks.md): STYLE dùng **biến thể infographic**, CONSTRAINT dùng **bản không nhân vật**.

## 4A. Huy hiệu (Badge) — FORMAT `FMT-BADGE`

```
SCENE: A circular achievement badge for a school {theme} role-play program: {biểu tượng trung tâm theo theme} at the center, a ribbon banner across the bottom, small stars around the rim. {Palette theme} color scheme. Sticker-like emblem with a thick outer border, reads clearly at small size on a slide.

TEXT IN IMAGE (đổi chữ tại đây):
- Ribbon banner text: "{TÊN HUY HIỆU}"
Render the Vietnamese text exactly as written, with correct diacritics, in a bold rounded comic font.
```

**Biểu tượng trung tâm theo theme:**

| Theme | Biểu tượng trung tâm | Tên huy hiệu gợi ý (3 cấp) |
|-------|---------------------|---------------------------|
| Thám tử | kính lúp trên dấu vân tay | "THÁM TỬ TẬP SỰ" → "THÁM TỬ CHUYÊN NGHIỆP" → "THÁM TỬ TRƯỞNG" |
| Phóng viên | micro trước quả địa cầu | "PHÓNG VIÊN TẬP SỰ" → "PHÓNG VIÊN HIỆN TRƯỜNG" → "TỔNG BIÊN TẬP" |
| Bác sĩ | ống nghe cuộn quanh chữ thập | "BÁC SĨ TẬP SỰ" → "BÁC SĨ CHUYÊN KHOA" → "TRƯỞNG KHOA" |
| Giáo viên | quyển sách mở + phấn viết | "GIÁO VIÊN TẬP SỰ" → "GIÁO VIÊN CHỦ NHIỆM" → "HIỆU TRƯỞNG NHÍ" |
| Kĩ sư | bánh răng + cờ lê chéo | "KĨ SƯ TẬP SỰ" → "KĨ SƯ TRƯỞNG DỰ ÁN" → "TỔNG CÔNG TRÌNH SƯ" |

## 4B. Background slide — FORMAT `FMT-BACKGROUND`

```
SCENE: A decorative slide background for a school {theme} role-play program. Scattered {theme} motifs drawn as small comic line-art doodles along the edges and corners: {liệt kê 4-5 mô-típ theme}. The large central area stays plain warm cream, completely clear for slide content. Motifs use light, low-contrast versions of {palette theme} so they never compete with foreground text.

TEXT IN IMAGE: none.
```

**Mô-típ theo theme:** Thám tử (kính lúp, dấu vân tay, dấu chân, đèn pin, dấu hỏi) · Phóng viên (micro, máy ảnh, cuộn báo, bong bóng thoại, chữ PRESS trên thẻ) · Bác sĩ (ống nghe, chữ thập, nhiệt kế, băng cứu thương, trái tim) · Giáo viên (sách, phấn, thước, bảng xanh mini, ngôi sao) · Kĩ sư (bánh răng, cờ lê, bản vẽ, thước ê-ke, bóng đèn).

## 4C. Bộ icon theme (dùng cho slide/game) — FORMAT `FMT-BADGE`

```
SCENE: A set of {số lượng} matching flat comic-style icons for a school {theme} role-play program, arranged in a grid on a plain very-light background: {liệt kê từng icon}. All icons share the same bold outline weight, corner rounding and {palette theme} color scheme.

TEXT IN IMAGE: none.
```

**Quy tắc:** cả bộ icon phải sinh trong **1 ảnh duy nhất** (grid) để AI giữ đồng nhất độ dày nét — sau đó cắt rời từng icon; cần thêm icon mới thì đính kèm ảnh bộ cũ làm tham chiếu.

## Ví dụ hoàn chỉnh (Badge "Thám tử tập sự")

```
STYLE: Comic-style infographic with bold dark outlines and flat cel-shaded colors. Simplified and clean: readability first, decoration second. No screentones, no gradients, no textures.

SCENE: A circular achievement badge for a school detective role-play program: a magnifying glass over a fingerprint at the center, a ribbon banner across the bottom, small stars around the rim. Deep navy and vivid yellow color scheme. Sticker-like emblem with a thick outer border, reads clearly at small size on a slide.

TEXT IN IMAGE (đổi chữ tại đây):
- Ribbon banner text: "THÁM TỬ TẬP SỰ"
Render the Vietnamese text exactly as written, with correct diacritics, in a bold rounded comic font.

FORMAT: 1:1 square, emblem centered on a plain very-light background, clean silhouette readable at small size.

CONSTRAINTS: School-appropriate, friendly and bright mood. Not photorealistic, not 3D render, no watermark, no extra text beyond the TEXT IN IMAGE list.
```
