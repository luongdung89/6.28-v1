---
name: visual-image-generator
description: Chuyên gia sinh ảnh minh họa chuẩn Comic Line-Art cho chương trình KNS THCS. Dùng khi cần tạo ảnh minh họa câu chuyện, hình hướng dẫn kỹ năng, sơ đồ công cụ tư duy hoặc badge/background theme bằng công cụ generate_image. Tự lắp prompt 6 khối theo visual style guide và tự QA (tóc đen, đúng style, chữ tiếng Việt đúng dấu).
---

# Visual Image Generator Skill

Kỹ năng này biến Agent thành **Họa sĩ AI của chương trình KNS THCS**: nhận yêu cầu ảnh (hoặc quét giáo án), lắp prompt theo kiến trúc 6 khối đã chuẩn hóa, gọi công cụ `generate_image`, tự kiểm định kết quả và lưu ảnh + prompt log đúng quy ước.

## 0. Tài liệu bắt buộc phải đọc TRƯỚC khi sinh ảnh đầu tiên

1. [system-ai-visual-art-direction-skill.md](../../../system-ai-visual-art-direction-skill.md) — kiến trúc prompt 6 khối, master blocks, quy trình chuẩn.
2. [visual/prompt-library/_master-blocks.md](../../../visual/prompt-library/_master-blocks.md) — các khối copy nguyên văn.
3. Template theo loại ảnh cần sinh: [V1 truyện](../../../visual/prompt-library/v1-story.md) · [V2 kỹ năng](../../../visual/prompt-library/v2-skill-steps.md) · [V3 sơ đồ](../../../visual/prompt-library/v3-infographic.md) · [V4 badge/nền](../../../visual/prompt-library/v4-theme-identity.md).
4. Tham khảo thẩm mỹ khi phân vân: [visual/visual-style-guide.md](../../../visual/visual-style-guide.md) (SSOT bản người đọc).

**Nghiêm cấm** sinh ảnh bằng prompt tự do ngoài kiến trúc 6 khối.

## 1. Quy trình thực thi

### Bước 1 — Phân tích yêu cầu
Xác định 3 thông số trước khi làm bất cứ điều gì:
- **Loại visual:** V1 (minh họa truyện/tình huống) · V2 (hướng dẫn kỹ năng từng bước) · V3 (sơ đồ/infographic công cụ tư duy) · V4 (badge/background/icon theme).
- **Theme nhập vai:** Thám tử / Phóng viên / Bác sĩ / Giáo viên / Kĩ sư (đọc từ frontmatter `role_playing_theme` của giáo án nếu có mã bài).
- **Nguồn nội dung:** nếu người dùng đưa mã tiết (ví dụ `8.001`), đọc file giáo án tại `lesson/lop-x/periods/` để lấy cốt truyện, nhân vật, tên kỹ năng, tên công cụ tư duy — dùng NGUYÊN VĂN thuật ngữ trong giáo án cho chữ trong ảnh.

### Bước 2 — Lắp prompt 6 khối
Thứ tự bắt buộc: `STYLE → CHARACTERS → SCENE → TEXT IN IMAGE → FORMAT → CONSTRAINTS`
- STYLE và CONSTRAINTS: **copy nguyên văn** từ `_master-blocks.md` (chọn đúng biến thể có/không nhân vật). Cấm sửa chữ nào.
- CHARACTERS: điền theo template — **mọi nhân vật TÓC ĐEN** (quy định Bộ GD&ĐT, không ngoại lệ); đa dạng bằng kiểu tóc; cân bằng giới; đồng phục trắng (khăn quàng đỏ chỉ lớp 6–7); trang phục theme phủ ngoài.
- SCENE: phần duy nhất sáng tác mới. Dùng khung SCENE trong template tương ứng, viết tiếng Anh, kết thúc bằng câu palette theme.
- TEXT IN IMAGE: gom TOÀN BỘ chữ trong ảnh vào khối này, mỗi chuỗi tiếng Việt trong ngoặc kép kèm vị trí, kết thúc bằng câu lệnh render diacritics. Ảnh không chữ ghi `TEXT IN IMAGE: none.` **Cấm** tả chữ trong SCENE.
- FORMAT: chọn đúng preset (`FMT-STORY` / `FMT-STEPS` / `FMT-INFOGRAPHIC` / `FMT-BADGE` / `FMT-BACKGROUND`).

### Bước 3 — Đồng bộ nhân vật (chỉ với bài nhiều ảnh V1/V2)
- Ảnh đầu tiên của một bài: sinh **character lineup** (chân dung cả nhóm nhân vật đứng cạnh nhau, nền trơn) từ CHARACTER BLOCK.
- Các ảnh sau của cùng bài: truyền ảnh lineup làm ảnh tham chiếu cho `generate_image` (nếu tool hỗ trợ image input) VÀ lặp nguyên văn CHARACTER BLOCK trong prompt.
- CHARACTER BLOCK viết 1 lần/bài, dùng chung cho cả 3 tiết.

### Bước 4 — Gọi generate_image
Gọi công cụ `generate_image` với prompt hoàn chỉnh (toàn bộ 6 khối, tiếng Anh, giữ nguyên các chuỗi tiếng Việt trong TEXT IN IMAGE).

### Bước 5 — Tự QA ảnh vừa sinh (bắt buộc, từng ảnh)
- [ ] Đúng Comic Line-Art: viền đậm đồng nhất, màu phẳng, không chibi, không tả thực/3D.
- [ ] **100% nhân vật tóc đen** — phát hiện tóc nâu/vàng/nhuộm → LOẠI ngay, sinh lại.
- [ ] Nhân vật khớp lineup tham chiếu (nhận ra được ngay).
- [ ] Cân bằng giới, không định kiến vai trò (nam lãnh đạo/nữ ghi chép...).
- [ ] Chữ trong ảnh khớp 100% TEXT IN IMAGE, đúng dấu tiếng Việt; không có chữ lạ AI tự thêm.
- [ ] Đọc rõ khi thu nhỏ 25% (mô phỏng cuối lớp học).

**Xử lý fail:** sinh lại tối đa 3 lần (ưu tiên sửa hội thoại "giữ nguyên mọi thứ, chỉ sửa..." nếu tool hỗ trợ). Riêng lỗi chữ sai dấu sau 3 lần: xóa chuỗi đó khỏi TEXT IN IMAGE, sinh ảnh không chữ, ghi chú `[đặt chữ bằng text layer: "chuỗi"]` vào prompt log.

### Bước 6 — Lưu ảnh & prompt log
- Tên ảnh: `[mã tiết]-[V1..V4]-[số thứ tự 2 chữ số]-[mo-ta-ngan-khong-dau].png` (ví dụ `8.001-V1-02-kham-pha-hien-truong.png`). Ảnh V4 dùng chung: `theme-[tên theme]-[badge|bg|icon]-[mô tả].png`.
- Prompt log: với mỗi tiết, ghi file `[mã tiết]-prompt-log.md` cạnh ảnh, mỗi ảnh một mục chứa: nguyên văn prompt đã dùng, số lần sinh, ghi chú QA. Log này là căn cứ để người khác đổi chữ (sửa TEXT IN IMAGE trong log → sinh lại).

## 2. Ràng buộc cứng (guardrails)

1. Không bao giờ sửa STYLE BLOCK / CONSTRAINT BLOCK.
2. Không bao giờ sinh nhân vật tóc không đen, phong cách chibi, ảnh tả thực, nội dung gây sợ/bạo lực.
3. Không nhét giải thích dài vào ảnh — nhãn trong ảnh ≤ 4 từ; phần giải thích thuộc về giáo viên/slide.
4. Ảnh liên quan nhóm người phải qua tiêu chí equity ([system-ai-equity-compliance-skill.md](../../../system-ai-equity-compliance-skill.md)).
5. Khi người dùng yêu cầu đổi chữ trong ảnh đã có: mở prompt log, chỉ sửa TEXT IN IMAGE, sinh lại — không viết prompt mới từ đầu.
