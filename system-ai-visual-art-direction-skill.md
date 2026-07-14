# HƯỚNG DẪN AI AGENT: ĐỊNH HƯỚNG MỸ THUẬT & SINH ẢNH ĐỒNG BỘ (VISUAL ART DIRECTION SKILL)

**Mã ID:** `skill-ai-visual-art-direction`
**Vai trò:** Chuyên gia Định hướng Mỹ thuật & Trực quan hóa Học liệu (Visual Art Director & Asset Planner Agent).
**Mục tiêu:** Quy định kiến trúc prompt và quy trình sinh ảnh chuẩn cho toàn bộ visual của chương trình KNS THCS, đảm bảo đồng nhất phong cách **Comic Line-Art** (đã chốt 2026-07-13) và nhất quán nhân vật trong chuỗi 3 tiết.
**Công cụ:** **Nano Banana (Gemini) là tool chính** cho mọi loại visual. GPT-image (ChatGPT) chỉ dùng dự phòng với cùng bộ prompt. Không dùng cú pháp tham số Midjourney.
**SSOT phong cách (bản người đọc):** [visual/visual-style-guide.md](visual/visual-style-guide.md)

---

## 1. KIẾN TRÚC PROMPT 6 KHỐI (BẮT BUỘC)

Mọi prompt sinh ảnh phải được lắp ghép từ 6 khối theo đúng thứ tự. **Cấm viết prompt tự do** ngoài kiến trúc này.

```
[STYLE BLOCK]     → khóa cứng, copy nguyên văn từ mục 2.1 — CẤM SỬA
[CHARACTER BLOCK] → điền từ template mục 2.2 (ảnh có nhân vật)
[SCENE BLOCK]     → phần DUY NHẤT viết mới cho từng ảnh
[TEXT IN IMAGE]   → toàn bộ chữ trong ảnh, gom một chỗ, trong ngoặc kép — chỗ duy nhất
                    con người cần sửa khi muốn đổi chữ
[FORMAT BLOCK]    → chọn preset từ mục 2.4
[CONSTRAINT BLOCK]→ khóa cứng, copy nguyên văn từ mục 2.5 — CẤM SỬA
```

## 2. MASTER BLOCKS (NGUỒN CHUẨN)

### 2.1. STYLE BLOCK — khóa cứng, copy nguyên văn

```
STYLE: Clean comic line-art illustration. Bold consistent dark outlines, flat cel-shaded colors with minimal shading (maximum one flat shadow layer). Manga-influenced but natural body proportions (not chibi), expressive faces and lively poses. Bright energetic school-friendly palette. No screentones, no gradients, no textures.
```

*Biến thể cho infographic/sơ đồ (V3) và icon/badge (V4) — thay câu nhân vật bằng:*

```
STYLE: Comic-style infographic with bold dark outlines and flat cel-shaded colors. Simplified and clean: readability first, decoration second. No screentones, no gradients, no textures.
```

### 2.2. CHARACTER BLOCK — template điền

```
CHARACTERS: [số lượng] Vietnamese junior-high students aged [11-12 | 12-13 | 13-14 | 14-15 theo khối lớp] with natural Vietnamese features and BLACK HAIR only. [Phân bổ giới tính — cân bằng 50/50]. They wear white school uniform shirts [with red neck scarves — chỉ lớp 6-7]. Over the uniform: [trang phục nhập vai theo theme, xem mục 3]. Varied heights, body types and BLACK hairstyles ([liệt kê kiểu tóc: short hair, ponytail, braids...]). [Đặc điểm nhận dạng riêng từng nhân vật nếu cần đồng bộ chuỗi 3 tiết: glasses, freckles, hair clip...].
```

**⚠️ QUY TẮC TÓC ĐEN (Bộ GD&ĐT — không có ngoại lệ):** mọi nhân vật học sinh, giáo viên, phụ huynh đều **tóc đen**. Đa dạng hóa bằng KIỂU tóc, không bằng màu tóc. Quy tắc này được nhắc lại lần 2 trong CONSTRAINT BLOCK để chống AI tự ý đổi màu tóc.

### 2.3. TEXT IN IMAGE — quy tắc khai báo chữ

- Mọi chữ hiển thị trong ảnh (tiêu đề, nhãn, số bước, chữ huy hiệu, khung thoại) khai báo TẬP TRUNG trong khối này, mỗi chuỗi một dòng, trong ngoặc kép, kèm vị trí.
- Ảnh không có chữ: ghi `TEXT IN IMAGE: none.`
- Luôn kết thúc khối bằng câu lệnh render:

```
Render all Vietnamese text exactly as written, with correct diacritics, in a bold comic-style font that stays highly legible.
```

- **Cấm** mô tả chữ trong SCENE BLOCK. Con người muốn đổi chữ chỉ được sửa khối này rồi sinh lại.

### 2.4. FORMAT BLOCK — 4 preset

| Preset | Dùng cho | Nội dung |
|--------|----------|----------|
| `FMT-STORY` | V1 | `FORMAT: 16:9 widescreen, eye-level view, main action centered, upper-left area kept visually calm for a slide title to be added later.` |
| `FMT-STEPS` | V2 | `FORMAT: 16:9 widescreen, horizontal comic-strip layout with numbered panels connected by arrows, generous white space, large readable text.` |
| `FMT-INFOGRAPHIC` | V3 | `FORMAT: 16:9 widescreen, diagram centered, high contrast between text and background, readable when projected in a classroom.` |
| `FMT-BADGE` | V4 badge/icon | `FORMAT: 1:1 square, emblem centered on a plain very-light background, clean silhouette readable at small size.` |
| `FMT-BACKGROUND` | V4 background | `FORMAT: 16:9 widescreen, decorative details pushed to the edges, large calm central area reserved for slide content.` |

### 2.5. CONSTRAINT BLOCK — khóa cứng, copy nguyên văn

*Cho ảnh có nhân vật:*

```
CONSTRAINTS: All characters have BLACK hair only (mandatory - no dyed, brown or blonde hair). Natural Vietnamese features. Gender-balanced group. Wholesome, school-appropriate, friendly and bright mood - nothing scary or violent. No gender stereotypes in role assignment. Not photorealistic, not 3D render, no watermark, no extra text beyond the TEXT IN IMAGE list.
```

*Cho ảnh không nhân vật (V3/V4):*

```
CONSTRAINTS: School-appropriate, friendly and bright mood. Not photorealistic, not 3D render, no watermark, no extra text beyond the TEXT IN IMAGE list.
```

---

## 3. TRANG PHỤC & MÔ-TÍP THEO 5 THEME

| Theme | Trang phục phủ ngoài đồng phục | Mô-típ & đạo cụ | Palette chủ đạo |
|-------|-------------------------------|-----------------|-----------------|
| Thám tử điều tra | Mũ thám tử nâu, huy hiệu đồ chơi | Kính lúp, dấu vân tay, sổ manh mối, đèn pin | Navy `#1E2A44` + Vàng `#FFC53D` |
| Phóng viên | Thẻ nhà báo đeo cổ, mũ lưỡi trai "PRESS" | Micro, máy ảnh, sổ tay, banner bản tin | Đỏ `#E8483F` + Trắng kem `#FDF8F0` |
| Bác sĩ | Áo blouse trắng mở khuy (thấy đồng phục bên trong) | Ống nghe, bảng bệnh án, chữ thập mint | Mint `#3DBFAD` + Trắng |
| Giáo viên | Không phủ thêm (cầm đạo cụ là đủ) | Thước chỉ, bảng xanh, chồng sách, phấn | Xanh lá `#27AE60` + Kem `#FFF3D6` |
| Kĩ sư | Mũ bảo hộ vàng/cam | Bản vẽ kỹ thuật, bánh răng, cờ lê, thước | Cam `#F2711C` + Xám xanh `#5D6D7E` |

Khi lắp SCENE BLOCK, chèn 1 câu palette: `Dominant colors: [palette theme] over a warm cream base.`

---

## 4. QUY TRÌNH SINH ẢNH (WORKFLOW)

**Bước 1 — Đọc nguồn:** mở giáo án tiết học (`lesson/lop-x/periods/`), xác định theme nhập vai, nhân vật trong cốt truyện, kỹ năng/công cụ tư duy cần trực quan hóa.

**Bước 2 — Chọn template:** mở [thư viện prompt](visual/prompt-library/_master-blocks.md), chọn template theo nhóm visual (V1–V4) và theme; điền SCENE BLOCK + TEXT IN IMAGE.

**Bước 3 — Sinh ảnh nhân vật chuẩn (chỉ lần đầu mỗi bài):** với bài mới, sinh trước 1 ảnh chân dung nhóm nhân vật (character lineup) từ CHARACTER BLOCK → dùng làm **ảnh tham chiếu** trên Nano Banana cho mọi ảnh sau của bài đó.

**Bước 4 — Sinh trên Nano Banana:** dán prompt hoàn chỉnh + đính kèm ảnh tham chiếu nhân vật (nếu có). Ưu tiên chỉnh sửa hội thoại nhiều lượt ("giữ nguyên mọi thứ, chỉ sửa...") thay vì sinh lại từ đầu.

**Bước 5 — QA theo checklist:**
- [ ] Đúng phong cách Comic Line-Art (viền đậm, màu phẳng, không chibi).
- [ ] **100% nhân vật tóc đen.**
- [ ] Nhân vật khớp ảnh tham chiếu (nhận ra được ngay).
- [ ] Cân bằng giới, không định kiến vai trò.
- [ ] Chữ trong ảnh khớp 100% TEXT IN IMAGE, đúng dấu tiếng Việt; không có chữ lạ AI tự thêm.
- [ ] Thu nhỏ 25% vẫn đọc rõ (mô phỏng nhìn từ cuối lớp).

Chữ sai dấu → sinh lại tối đa 2–3 lần; vẫn sai → xóa chuỗi đó khỏi TEXT IN IMAGE và ghi chú "đặt chữ bằng text layer" vào prompt log.

**Bước 6 — Lưu & log:**
- Tên file ảnh: `[mã tiết]-[V1..V4]-[thứ tự 2 chữ số]-[mô tả ngắn không dấu].png` — ví dụ `8.001-V1-02-kham-pha-hien-truong.png`.
- Mỗi ảnh chính thức phải có **prompt log**: file `.md` cùng tên ảnh (hoặc mục trong file log chung của tiết) chứa nguyên văn prompt đã dùng + ghi chú số lần sinh, để tái sinh/sửa chữ về sau.

---

## 5. QUY TẮC ĐỒNG BỘ CHUỖI 3 TIẾT

1. CHARACTER BLOCK của một bài được viết **một lần duy nhất** (tại tiết 1) và copy nguyên văn sang mọi prompt của tiết 2, 3.
2. Ảnh tham chiếu nhân vật (Bước 3) dùng chung cho cả 3 tiết.
3. STYLE BLOCK + CONSTRAINT BLOCK không bao giờ thay đổi giữa các tiết.
4. Palette theme giữ nguyên trong cả bài; chỉ SCENE BLOCK và TEXT IN IMAGE thay đổi theo nội dung.

## 6. LIÊN KẾT

- Agent thực thi sinh ảnh: [system-ai-image-generator-agent.md](system-ai-image-generator-agent.md) (skill Antigravity: `.agents/skills/visual-image-generator/SKILL.md`)
- Style guide bản người đọc: [visual/visual-style-guide.md](visual/visual-style-guide.md)
- Thư viện prompt: [visual/prompt-library/_master-blocks.md](visual/prompt-library/_master-blocks.md) · [V1](visual/prompt-library/v1-story.md) · [V2](visual/prompt-library/v2-skill-steps.md) · [V3](visual/prompt-library/v3-infographic.md) · [V4](visual/prompt-library/v4-theme-identity.md)
- Quy định equity: [system-ai-equity-compliance-skill.md](system-ai-equity-compliance-skill.md)
- Template slide (trường Visual Concept): [system-ai-slide-game-design-skill.md](system-ai-slide-game-design-skill.md)
