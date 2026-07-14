---
id: "visual-prompt-ban-giao"
loai: "system"
tieu_de: "Prompt bàn giao Hệ thống Visual cho team (dán vào Antigravity)"
---

# PROMPT BÀN GIAO HỆ THỐNG VISUAL — GỬI KÈM GÓI FILE

**Cách dùng:** gửi cho thành viên team file `visual-system-handover.zip` + đoạn prompt trong khung. Zip giải nén ra **một thư mục riêng `visual-handover-package/`** — không đè bất cứ file nào của repo họ. Họ dán nguyên văn prompt vào Antigravity, agent của họ sẽ tự cài từng file **có kiểm tra chống ghi đè**.

## Danh sách file cần gửi kèm (10 file)

| # | File | Vai trò |
|---|------|---------|
| 1 | `.agents/skills/visual-image-generator/SKILL.md` | Skill Antigravity — quy trình sinh ảnh 6 bước bằng `generate_image` |
| 2 | `system-ai-visual-art-direction-skill.md` | Đặc tả kiến trúc prompt 6 khối + master blocks (bản AI đọc) |
| 3 | `system-ai-image-generator-agent.md` | Đặc tả agent Họa sĩ AI (định danh, IPO, guardrails) |
| 4 | `system-ai-equity-compliance-skill.md` | Phụ thuộc: tiêu chí công bằng giới/vùng miền cho hình ảnh |
| 5 | `visual/visual-style-guide.md` | Style guide bản người đọc (SSOT phong cách Comic Line-Art) |
| 6 | `visual/prompt-library/_master-blocks.md` | Các khối prompt chuẩn (copy nguyên văn khi lắp prompt) |
| 7 | `visual/prompt-library/v1-story.md` | Template minh họa câu chuyện/tình huống |
| 8 | `visual/prompt-library/v2-skill-steps.md` | Template hướng dẫn kỹ năng từng bước |
| 9 | `visual/prompt-library/v3-infographic.md` | Template sơ đồ/infographic công cụ tư duy |
| 10 | `visual/prompt-library/v4-theme-identity.md` | Template badge/background/icon theo 5 theme |

---

## PROMPT DÁN VÀO ANTIGRAVITY (copy từ đây xuống hết)

```
Tôi gửi kèm file visual-system-handover.zip chứa "Hệ thống sinh ảnh chuẩn hóa — Chương trình Kỹ năng sống THCS" (phong cách Comic Line-Art đã được phê duyệt chính thức). Nhiệm vụ của bạn: CÀI ĐẶT hệ thống này vào repo hiện tại để tôi có thể sinh ảnh học liệu bằng công cụ generate_image theo đúng chuẩn.

Zip giải nén ra một thư mục riêng tên visual-handover-package/ (bên trong giữ nguyên cấu trúc đường dẫn đích). Hãy giải nén vào thư mục tạm hoặc gốc repo đều được — nó KHÔNG đè file nào.

## VAI TRÒ TỪNG FILE

1. `.agents/skills/visual-image-generator/SKILL.md` — Skill Antigravity chính. Biến agent thành "Họa sĩ AI": nhận yêu cầu ảnh → lắp prompt 6 khối → gọi generate_image → tự QA → lưu ảnh + prompt log.
2. `system-ai-visual-art-direction-skill.md` — Đặc tả kỹ thuật mà skill trên tham chiếu: kiến trúc prompt 6 khối (STYLE → CHARACTERS → SCENE → TEXT IN IMAGE → FORMAT → CONSTRAINTS), master blocks khóa cứng, quy trình đồng bộ nhân vật chuỗi 3 tiết, quy ước đặt tên ảnh và prompt log.
3. `system-ai-image-generator-agent.md` — Đặc tả agent (định danh, input/output, guardrails) theo chuẩn wiki của chương trình.
4. `system-ai-equity-compliance-skill.md` — Phụ thuộc bắt buộc: tiêu chí công bằng giới, vùng miền, chống định kiến áp dụng cho hình ảnh. (Nếu repo đã có file này rồi thì giữ bản hiện có, không ghi đè.)
5. `visual/visual-style-guide.md` — Style guide bản người đọc, là NGUỒN CHÂN LÝ DUY NHẤT về phong cách: bảng màu hex, template nhân vật, do's & don'ts.
6. `visual/prompt-library/_master-blocks.md` — Các khối prompt chuẩn để copy nguyên văn.
7-10. `visual/prompt-library/v1-story.md`, `v2-skill-steps.md`, `v3-infographic.md`, `v4-theme-identity.md` — Template prompt cho 4 loại visual (minh họa truyện, hướng dẫn kỹ năng, sơ đồ công cụ tư duy, badge/background theme), mỗi file có ví dụ hoàn chỉnh.

## YÊU CẦU CÀI ĐẶT (QUY TRÌNH CHỐNG GHI ĐÈ — BẮT BUỘC)

1. KHÔNG copy hàng loạt, KHÔNG giải nén đè vào gốc repo. Cài TỪNG FILE MỘT: với mỗi file trong visual-handover-package/, đường dẫn đích = đường dẫn tương đối của file đó bên trong package, tính từ gốc repo (ví dụ package chứa `visual/visual-style-guide.md` → đích là `<gốc repo>/visual/visual-style-guide.md`).
2. Trước khi copy mỗi file, kiểm tra đường dẫn đích:
   - Đích CHƯA tồn tại → tạo thư mục nếu cần và copy file vào.
   - Đích ĐÃ tồn tại, nội dung GIỐNG HỆT → bỏ qua, ghi nhận "đã có sẵn".
   - Đích ĐÃ tồn tại, nội dung KHÁC → TUYỆT ĐỐI KHÔNG ghi đè. Giữ nguyên file hiện có, ghi lại tóm tắt khác biệt, và hỏi tôi quyết định cho từng file đó sau khi cài xong các file còn lại.
3. QUAN TRỌNG về liên kết: các file trỏ nhau bằng đường dẫn tương đối (ví dụ SKILL.md trỏ `../../../system-ai-visual-art-direction-skill.md`) — sai vị trí là gãy liên kết. Nếu repo này buộc phải dùng cấu trúc thư mục khác, cập nhật lại toàn bộ liên kết tương đối trong các file cho khớp và báo tôi biết đã đổi gì.
4. Không sửa nội dung file khi cài (trừ việc sửa đường dẫn nêu ở mục 3 nếu bắt buộc). Đặc biệt CẤM sửa: STYLE BLOCK, CONSTRAINT BLOCK, quy tắc tóc đen.
5. Sau khi cài, xác nhận skill `visual-image-generator` đã được Antigravity nhận diện (nằm ở `.agents/skills/visual-image-generator/SKILL.md`), rồi báo cáo bảng kết quả: file nào đã copy / đã có sẵn / bị xung đột chờ quyết định. Có thể xóa thư mục visual-handover-package/ sau khi cài xong.

## QUY TẮC VẬN HÀNH SAU KHI CÀI (áp dụng cho mọi lần sinh ảnh)

- Chỉ sinh ảnh phong cách Comic Line-Art theo STYLE BLOCK nguyên văn trong `visual/prompt-library/_master-blocks.md`. Không nhận yêu cầu đổi phong cách.
- 100% nhân vật TÓC ĐEN (quy định Bộ GD&ĐT) — ảnh có tóc nâu/vàng/nhuộm phải loại và sinh lại.
- Mọi chữ trong ảnh khai báo tập trung ở khối TEXT IN IMAGE (chuỗi tiếng Việt trong ngoặc kép). Khi cần đổi chữ: chỉ sửa khối này rồi sinh lại.
- Mỗi ảnh chính thức phải lưu prompt log (nguyên văn prompt đã dùng) để người khác tái sinh/đổi chữ được.

## KIỂM TRA NGHIỆM THU

Sau khi cài xong, chạy thử: dùng skill visual-image-generator sinh 1 ảnh badge với TEXT IN IMAGE là "THÁM TỬ TẬP SỰ" (template có sẵn trong `visual/prompt-library/v4-theme-identity.md`, mục Ví dụ hoàn chỉnh — dùng nguyên văn prompt ví dụ đó). Nghiệm thu đạt khi: (a) ảnh đúng phong cách comic viền đậm màu phẳng, (b) chữ "THÁM TỬ TẬP SỰ" hiển thị đúng dấu tiếng Việt, (c) file ảnh và prompt log được lưu đúng quy ước đặt tên. Báo cáo kết quả 3 mục này cho tôi.
```
