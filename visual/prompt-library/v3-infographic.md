---
id: "prompt-v3-infographic"
loai: "system"
tieu_de: "Prompt Template V3 — Sơ đồ/Infographic Công cụ Tư duy"
---

# V3 — SƠ ĐỒ / INFOGRAPHIC CÔNG CỤ TƯ DUY & FRAMEWORK

Dùng cho: trực quan hóa Thinking Tools (ma trận, sơ đồ, chuỗi bước) và Framework. Lắp khối theo [_master-blocks.md](_master-blocks.md): STYLE dùng **biến thể infographic**, FORMAT dùng `FMT-INFOGRAPHIC`, CONSTRAINT dùng **bản không nhân vật**.

## Khung SCENE BLOCK

```
SCENE: A {loại sơ đồ: 2x2 matrix / fishbone diagram / chain of 5 linked questions / flowchart...} infographic. {Mô tả cấu trúc: số ô/nhánh/bước, quan hệ giữa chúng}. Each {ô/nhánh} has a distinct bright color and one simple outlined icon: {liệt kê icon từng ô}. Clean layout, generous spacing, designed to be read when projected in a classroom. {Câu palette theme nếu sơ đồ gắn với bài thuộc theme}.
```

## Khung TEXT IN IMAGE

```
TEXT IN IMAGE (đổi chữ tại đây):
- Title at top: "{TÊN CÔNG CỤ}"
- {nhãn trục/cột/hàng nếu có}: "{...}"
- {nhãn từng ô/nhánh/bước}: "{...}"
Render all Vietnamese text exactly as written, with correct diacritics, in a clean bold font, highly legible.
```

**Quy tắc:**
- Độ đọc rõ là ưu tiên tuyệt đối: layout trước, trang trí sau. Test thu nhỏ 25% vẫn đọc được.
- Mỗi ô/nhánh: 1 màu riêng + 1 icon + nhãn ngắn (≤ 4 từ). Giải thích dài để giáo viên nói, không nhét vào ảnh.
- Không chèn nhân vật trừ khi công cụ cần minh họa hành vi.
- Tên nhãn lấy nguyên văn từ trang công cụ trong `thinking-tool/` — thuật ngữ phải khớp với bài học.
- Icon mô tả bằng hình đơn giản, phổ quát (flame, calendar, handshake, trash bin, question mark, arrow...).

## Gợi ý cấu trúc cho các công cụ hay dùng

| Công cụ | Cấu trúc SCENE | Icon gợi ý |
|---------|----------------|-----------|
| Eisenhower Matrix | `a large 2x2 grid` | flame / calendar / handshake / trash bin |
| Fishbone (xương cá) | `a fishbone diagram: a horizontal spine pointing to a fish head on the right, with 4-6 angled bones` | fish head = vấn đề; mỗi xương 1 icon nhóm nguyên nhân |
| 5 Whys | `a descending chain of 5 linked question cards connected by arrows, ending in a root-cause card at the bottom` | question mark ×5, root/seedling ở đáy |
| SWOT | `a 2x2 grid` | muscle / crack / sun / storm cloud |
| Thang đo cảm xúc | `a vertical thermometer scale with 5 color zones` | emoji mặt theo mức |

## Ví dụ hoàn chỉnh (Ma trận Eisenhower — bài thuộc theme Kĩ sư)

```
STYLE: Comic-style infographic with bold dark outlines and flat cel-shaded colors. Simplified and clean: readability first, decoration second. No screentones, no gradients, no textures.

SCENE: An Eisenhower Matrix infographic: a large 2x2 grid drawn with bold comic outlines. Each quadrant has a distinct bright color and one simple outlined icon: quadrant 1 (top-left) a flame icon, quadrant 2 (top-right) a calendar icon, quadrant 3 (bottom-left) a handshake icon, quadrant 4 (bottom-right) a trash-bin icon. Clean layout, generous spacing, designed to be read when projected in a classroom. Dominant colors: warm orange and blue-grey over a warm cream base.

TEXT IN IMAGE (đổi chữ tại đây):
- Title at top: "MA TRẬN EISENHOWER"
- Column headers: "KHẨN CẤP" (left), "KHÔNG KHẨN CẤP" (right)
- Row headers: "QUAN TRỌNG" (top), "KHÔNG QUAN TRỌNG" (bottom)
- Quadrant 1 label: "LÀM NGAY"
- Quadrant 2 label: "LÊN LỊCH"
- Quadrant 3 label: "NHỜ HỖ TRỢ"
- Quadrant 4 label: "LOẠI BỎ"
Render all Vietnamese text exactly as written, with correct diacritics, in a clean bold font, highly legible.

FORMAT: 16:9 widescreen, diagram centered, high contrast between text and background, readable when projected in a classroom.

CONSTRAINTS: School-appropriate, friendly and bright mood. Not photorealistic, not 3D render, no watermark, no extra text beyond the TEXT IN IMAGE list.
```
