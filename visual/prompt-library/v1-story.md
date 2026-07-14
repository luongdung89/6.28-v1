---
id: "prompt-v1-story"
loai: "system"
tieu_de: "Prompt Template V1 — Minh họa Câu chuyện/Tình huống"
---

# V1 — MINH HỌA CÂU CHUYỆN / TÌNH HUỐNG

Dùng cho: cảnh nhập vai, cảnh truyện, tình huống cảm xúc trên slide. Lắp khối theo [_master-blocks.md](_master-blocks.md). Chỉ viết mới phần SCENE (và TEXT nếu có khung thoại).

## Khung SCENE BLOCK

```
SCENE: {Nhóm nhân vật} {hành động chính, cụ thể từng người làm gì} in {bối cảnh — lớp học/sân trường/nhà/…}. {Cảm xúc chủ đạo: curious, excited, worried, relieved...}. {1-2 đạo cụ theme nổi bật}. Background: {2-3 chi tiết nền, đơn giản hơn nhân vật}. {Câu palette theme}.
```

**Quy tắc:** tối đa 5 nhân vật/khung; mỗi nhân vật phải có hành động riêng (không đứng hàng ngang nhìn camera); cảm xúc phải gọi tên rõ trong prompt; "vụ án"/tình huống luôn tươi sáng, không gây sợ.

## Câu mở SCENE theo 5 theme (thay vào đầu SCENE)

| Theme | Câu mở gợi ý |
|-------|--------------|
| Thám tử | `...students role-playing as young detectives, investigating {đối tượng} with magnifying glasses and clue notebooks...` |
| Phóng viên | `...students role-playing as school reporters, one holding a microphone interviewing {đối tượng}, one taking notes, one holding a camera...` |
| Bác sĩ | `...students role-playing as young doctors in open white coats over their uniforms, examining a {hồ sơ/mô hình} with a stethoscope and clipboard...` |
| Giáo viên | `...students role-playing as little teachers, one standing at a green chalkboard with a pointer explaining to seated classmates...` |
| Kĩ sư | `...students role-playing as young engineers in yellow hard hats, gathered around a large blueprint on the desk...` |

## Ví dụ hoàn chỉnh (bài 8.01 — Thám tử, tiết 8.001)

```
STYLE: Clean comic line-art illustration. Bold consistent dark outlines, flat cel-shaded colors with minimal shading (maximum one flat shadow layer). Manga-influenced but natural body proportions (not chibi), expressive faces and lively poses. Bright energetic school-friendly palette. No screentones, no gradients, no textures.

CHARACTERS: Four Vietnamese junior-high students aged 13-14 with natural Vietnamese features and BLACK HAIR only. Two boys and two girls. They wear white school uniform shirts. Over the uniform: brown detective caps and toy detective badges. Varied heights, body types and BLACK hairstyles (one girl with a ponytail, one girl with short hair and round glasses, one tall boy, one boy with wavy black hair).

SCENE: The four students role-playing as young detectives, investigating a "personal history timeline" pinned on the classroom wall - old photos and drawings connected by yarn strings. The girl with glasses examines a photo with a magnifying glass, the tall boy pins a new clue card, the other two discuss excitedly over a clue notebook. Mood: curious and excited. Background: green chalkboard, wooden desks, warm afternoon light from the window. Dominant colors: deep navy and warm yellow over a warm cream base.

TEXT IN IMAGE: none.

FORMAT: 16:9 widescreen, eye-level view, main action centered, upper-left area kept visually calm for a slide title to be added later.

CONSTRAINTS: All characters have BLACK hair only (mandatory - no dyed, brown or blonde hair). Natural Vietnamese features. Gender-balanced group. Wholesome, school-appropriate, friendly and bright mood - nothing scary or violent. No gender stereotypes in role assignment. Not photorealistic, not 3D render, no watermark, no extra text beyond the TEXT IN IMAGE list.
```
