const slides = [
    // 1. MỞ ĐẦU BÀI HỌC
    {
        id: 1,
        content: `
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%;">
            <div class="title editable draggable">Bài 6.28: Dùng AI thế nào để học chủ động hơn?</div>
            <div class="subtitle editable draggable">Chủ đề: Sử dụng AI trong học tập</div>
        </div>
        <div class="split-layout abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; gap: 30px; padding: 0 50px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: left;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 26pt; margin-bottom: 20px;">Kiến thức</h3>
                <div class="body-text editable draggable list-item"><i class="fas fa-check"></i> Hiểu vai trò của AI trong học tập.</div>
                <div class="body-text editable draggable list-item"><i class="fas fa-check"></i> Hiểu nguyên tắc sử dụng AI đúng cách.</div>
                <div class="body-text editable draggable list-item"><i class="fas fa-check"></i> Phân biệt học chủ động và phụ thuộc AI.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: left;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 26pt; margin-bottom: 20px;">Kỹ năng</h3>
                <div class="body-text editable draggable list-item"><i class="fas fa-check"></i> Phân tích cách sử dụng AI.</div>
                <div class="body-text editable draggable list-item"><i class="fas fa-check"></i> Xây dựng quy trình học chủ động cùng AI.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: left;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 26pt; margin-bottom: 20px;">Thái độ</h3>
                <div class="body-text editable draggable list-item"><i class="fas fa-check"></i> Không phụ thuộc AI.</div>
                <div class="body-text editable draggable list-item"><i class="fas fa-check"></i> Chủ động trong học tập.</div>
            </div>
        </div>
        `
    },
    // 2. TIẾN TRÌNH BÀI HỌC
    {
        id: 2,
        content: `
        <div class="top-left-layout abs-element" style="top: 5%; left: 5%;">
            <div class="title editable draggable">TIẾN TRÌNH BÀI HỌC</div>
        </div>
        <div class="abs-element" style="top: 40%; left: 10%; width: 80%; display: flex; justify-content: space-between; align-items: center;">
            <div class="dashboard-card hover-glow nav-target" data-target="3" style="cursor: pointer; flex: 1; text-align: center; margin: 0 20px;">
                <h2 class="title editable draggable" style="font-size: 30pt;">Tiết 1</h2>
                <div class="body-text editable draggable" style="margin-top: 15px;">KHÁM PHÁ CÙNG AI</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 40pt; color: var(--primary-purple);"></i>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; margin: 0 20px; opacity: 0.5;">
                <h2 class="title editable draggable" style="font-size: 30pt;">Tiết 2</h2>
                <div class="body-text editable draggable" style="margin-top: 15px;">PHÒNG CHIẾN LƯỢC AI</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 40pt; color: var(--primary-purple);"></i>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; margin: 0 20px; opacity: 0.5;">
                <h2 class="title editable draggable" style="font-size: 30pt;">Tiết 3</h2>
                <div class="body-text editable draggable" style="margin-top: 15px;">DIỄN ĐÀN CHUYÊN GIA AI</div>
            </div>
        </div>
        `
    },
    // 3. TIẾT 1
    {
        id: 3,
        content: `
        <div class="top-center-layout abs-element" style="top: 15%; width: 100%;">
            <div class="title editable draggable">TIẾT 1: KHÁM PHÁ CÙNG AI</div>
            <div class="subtitle editable draggable">Chuyên gia AI EduLab</div>
        </div>
        <div class="abs-element" style="top: 50%; left: 25%; width: 50%; height: 300px; perspective: 1000px;">
            <div class="flip-card" style="width: 100%; height: 100%;">
                <div class="flip-card-inner" style="position: relative; width: 100%; height: 100%; text-align: center;">
                    <div class="flip-card-front dashboard-card" style="display: flex; justify-content: center; align-items: center;">
                        <h2 class="title editable draggable" style="font-size: 35pt;"><i class="fas fa-id-card"></i> THÔNG TIN NHIỆM VỤ</h2>
                        <p style="margin-top: 10px; font-style: italic;">(Di chuột để xem chi tiết)</p>
                    </div>
                    <div class="flip-card-back dashboard-card" style="border-color: var(--primary-purple);">
                        <div class="body-text editable draggable" style="text-align: left;">
                            <p><strong>Vai trò học sinh:</strong> Là chuyên gia được Trung tâm AI mời điều tra các lỗi khi học sinh sử dụng AI trong học tập.</p>
                            <br>
                            <p><strong>Nhiệm vụ:</strong></p>
                            <ul>
                                <li>Điều tra nguyên nhân</li>
                                <li>Phân tích dữ liệu</li>
                                <li>Thiết kế quy trình học chủ động</li>
                                <li>Kích hoạt hệ thống học tập chủ động với AI</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    },
    // 4. CÂU HỎI LỚN
    {
        id: 4,
        content: `
        <div class="top-left-layout abs-element" style="top: 5%; left: 5%;">
            <div class="title editable draggable">CÂU HỎI LỚN</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 40%; left: 10%; width: 25%; text-align: center; border-color: #ff3333;">
            <div class="title" style="font-size: 50pt; color: #ff3333;"><i class="fas fa-robot"></i></div>
            <div class="body-text editable draggable" style="margin-top: 20px;">AI làm hộ</div>
        </div>
        <div class="abs-element" style="top: 40%; left: 40%; width: 20%; text-align: center;">
            <div class="title editable draggable" style="font-size: 80pt; color: #fff; text-shadow: 0 0 30px var(--primary-blue);">?</div>
            <div class="body-text editable draggable highlight-box" style="margin-top: -10px; font-weight: bold;">Làm thế nào để sử dụng AI hỗ trợ học tập mà không phụ thuộc vào AI?</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 40%; right: 10%; width: 25%; text-align: center; border-color: #00ff00;">
            <div class="title" style="font-size: 50pt; color: #00ff00;"><i class="fas fa-brain"></i></div>
            <div class="body-text editable draggable" style="margin-top: 20px;">AI hỗ trợ học</div>
        </div>
        `
    },
    // 5. GĐ1
    {
        id: 5,
        content: `
        <div class="center-layout abs-element" style="width: 100%; height: 100%;">
            <div class="title editable draggable" style="font-size: 60pt;"><i class="fas fa-unlock-alt"></i> GĐ1</div>
            <div class="subtitle editable draggable" style="font-size: 40pt; margin-top: 30px; color: var(--text-main);">MỞ KHÓA NHIỆM VỤ</div>
        </div>
        `
    },
    // 6. GĐ1 - CHUẨN BỊ
    {
        id: 6,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 50px; padding: 0 100px;">
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-tools"></i> Dụng cụ</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">- Giấy, bút</div>
            </div>
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-users"></i> Hình thức tổ chức</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">
                    <i class="fas fa-user"></i><i class="fas fa-user"></i> Nhóm 2
                </div>
            </div>
        </div>
        `
    },
    // 7. GĐ1 - QUY TRÌNH THỰC HIỆN
    {
        id: 7,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
            <div class="subtitle editable draggable">Các bước thực hiện như sau:</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; gap: 30px; padding: 0 50px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">1</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Lắng nghe tình huống của bạn Bách.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">2</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Thảo luận nhóm và trả lời câu hỏi.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">3</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Chia sẻ ý kiến trước lớp.</div>
            </div>
        </div>
        `
    },
    // 8. GĐ1 - THÔNG BÁO KHẨN
    {
        id: 8,
        content: `
        <div class="top-center-layout abs-element" style="top: 2%; width: 100%;">
            <div class="title editable draggable" style="color: #ff3333; font-size: 50pt;"><i class="fas fa-exclamation-triangle"></i> THÔNG BÁO KHẨN</div>
            <div class="subtitle editable draggable" style="color: #ffaa33;">Một học sinh vừa sử dụng AI không đúng cách.</div>
        </div>
        <div class="abs-element warning-box" style="top: 25%; left: 5%; width: 90%; text-align: left;">
            <div class="body-text editable draggable">
                <strong>Đề bài:</strong> Bạn Bách dùng AI viết bài văn và bị giáo viên chấm điểm kém và phê bình.<br><br>
                Bạn Bách là học sinh lớp 6 tại một trường học tại thành phố Hồ Chí Minh. Bách được giao bài tập làm văn môn Ngữ văn 6 kể về một trải nghiệm đáng nhớ của bản thân. Bách đã dùng AI để viết hộ. AI tạo ra một bài văn rất hay về việc đi trượt tuyết ở Sapa vào mùa đông. Bách chép nguyên bài văn và nộp cho thầy. Tuy nhiên thầy giáo lại cho Bách điểm kém và phê bình Bách trước lớp.<br><br>
                <strong>Câu hỏi thảo luận:</strong><br>
                1. Tại sao bài văn của Bách rất hay nhưng thầy giáo lại cho điểm kém và phê bình Bách?<br>
                2. Tại sao thầy giáo phát hiện ra bài văn của Bách là bài chép từ AI?<br><br>
                <strong>Sản phẩm:</strong> Một nhận định ban đầu về tình huống.
            </div>
        </div>
        <div class="abs-element" style="bottom: 5%; width: 100%; text-align: center;">
            <div class="timer editable draggable" data-time="300">05:00</div>
            <p style="font-size: 14pt;">(Click vào đồng hồ để đếm ngược)</p>
        </div>
        `
    },
    // 9. GĐ1 - KẾT QUẢ / ĐÁNH GIÁ
    {
        id: 9,
        content: `
        <div class="top-left-layout abs-element" style="top: 5%; left: 5%;">
            <div class="title editable draggable">BÁO CÁO KẾT QUẢ</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 25%; left: 5%; width: 90%;">
            <div class="body-text editable draggable">
                <strong>Kết quả:</strong><br>
                - Thầy giáo cho điểm kém và phê bình Bách vì Bách đã dùng AI để viết hộ bài văn.<br>
                - Thầy giáo phát hiện ra vì bài viết không đúng trải nghiệm thật, nội dung không đúng thực tế, thông tin trượt tuyết ở Sapa vào mùa đông là thông tin AI tạo ra không chính xác.
            </div>
        </div>
        <div class="abs-element scratch-mask" style="bottom: 15%; left: 10%; width: 80%;">
            <div class="highlight-box body-text editable draggable" style="font-weight: bold; font-size: 26pt;">
                Thông điệp chính: Không phải AI gây ra vấn đề, mà là cách sử dụng AI.
            </div>
            <div class="scratch-overlay">Di chuột để mở khóa thông điệp</div>
        </div>
        `
    },
    // 10. GĐ2
    {
        id: 10,
        content: `
        <div class="center-layout abs-element" style="width: 100%; height: 100%;">
            <div class="title editable draggable" style="font-size: 60pt;"><i class="fas fa-envelope-open-text"></i> GĐ2</div>
            <div class="subtitle editable draggable" style="font-size: 40pt; margin-top: 30px; color: var(--text-main);">NHẬN YÊU CẦU TỪ KHÁCH HÀNG</div>
        </div>
        `
    },
    // 11. GĐ2 - MỞ NHIỆM VỤ
    {
        id: 11,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">MỞ NHIỆM VỤ</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 25%; left: 10%; width: 80%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 26pt; line-height: 1.8;">
                <strong>Đề bài:</strong> Trung tâm AI đang phát triển phiên bản AI hỗ trợ học tập mới. Tuy nhiên hệ thống liên tục ghi nhận học sinh sử dụng AI sai cách. Các chuyên gia công nghệ hãy nghiên cứu cách học chủ động với AI, không phụ thuộc AI.<br><br>
                <strong>Câu hỏi điều tra:</strong><br>
                - Vai trò của AI là gì?<br>
                - Nên dùng AI hỗ trợ những việc gì?<br>
                - Sử dụng AI như thế nào để không bị phụ thuộc?
            </div>
        </div>
        `
    },
    // 12. GĐ3
    {
        id: 12,
        content: `
        <div class="center-layout abs-element" style="width: 100%; height: 100%;">
            <div class="title editable draggable" style="font-size: 60pt;"><i class="fas fa-database"></i> GĐ3</div>
            <div class="subtitle editable draggable" style="font-size: 40pt; margin-top: 30px; color: var(--text-main);">THU THẬP DỮ LIỆU</div>
            <div class="body-text editable draggable dashboard-card" style="margin-top: 40px; max-width: 80%;">
                Trung tâm AI đã thu thập được nhiều dữ liệu về cách học sinh sử dụng AI. Nhiệm vụ của các chuyên gia là xác định: Đâu là việc AI nên hỗ trợ? Vai trò của AI là gì?
            </div>
        </div>
        `
    },
    // 13. GĐ3 - CHUẨN BỊ
    {
        id: 13,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 50px; padding: 0 100px;">
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-tools"></i> Dụng cụ</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">- Nhận thẻ ý kiến từ giáo viên</div>
            </div>
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-user"></i> Hình thức tổ chức</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">
                    <i class="fas fa-user"></i> Cá nhân
                </div>
            </div>
        </div>
        `
    },
    // 14. GĐ3 - QUY TRÌNH THỰC HIỆN
    {
        id: 14,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
            <div class="subtitle editable draggable">Các bước thực hiện như sau:</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; gap: 30px; padding: 0 50px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">1</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Quan sát từng hành động.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">2</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Giơ thẻ: <span style="color: #00ff00;">🟢 Nên</span> hoặc <span style="color: #ff3333;">🔴 Không nên</span>.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">3</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Giải thích lựa chọn.</div>
            </div>
        </div>
        `
    },
    // 15. GĐ3 - AI HAY KHÔNG?
    {
        id: 15,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">AI HAY KHÔNG?</div>
            <div class="subtitle editable draggable">Phân loại các hành động sử dụng AI</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 25%; left: 5%; width: 90%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 26pt; line-height: 1.8;">
                <strong>Đề bài: Phân loại:</strong><br>
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 15px;">
                    <span class="interactive-cycle" style="cursor:pointer; padding: 10px 20px; background: rgba(0,210,255,0.2); border-radius: 8px;">AI viết hộ bài văn</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 10px 20px; background: rgba(0,210,255,0.2); border-radius: 8px;">AI giải thích bài</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 10px 20px; background: rgba(0,210,255,0.2); border-radius: 8px;">AI gợi ý dàn ý</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 10px 20px; background: rgba(0,210,255,0.2); border-radius: 8px;">AI góp ý bài viết</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 10px 20px; background: rgba(0,210,255,0.2); border-radius: 8px;">AI kiểm tra lỗi</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 10px 20px; background: rgba(0,210,255,0.2); border-radius: 8px;">AI gợi ý từ vựng</span>
                </div>
                <br>
                <strong>Sản phẩm:</strong> Danh sách hành động phù hợp.
            </div>
        </div>
        <div class="abs-element" style="bottom: 5%; width: 100%; text-align: center;">
            <div class="timer editable draggable" data-time="480">08:00</div>
            <p style="font-size: 14pt;">(Click vào đồng hồ để đếm ngược)</p>
        </div>
        `
    },
    // 16. GĐ3 - KẾT QUẢ / ĐÁNH GIÁ
    {
        id: 16,
        content: `
        <div class="top-left-layout abs-element" style="top: 5%; left: 5%;">
            <div class="title editable draggable">BÁO CÁO KẾT QUẢ</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 25%; left: 5%; width: 90%;">
            <div class="body-text editable draggable" style="font-size: 26pt;">
                <strong>Kết quả: Bảng phân loại</strong><br><br>
                <div style="color: #00ff00; margin-bottom: 10px;">✔ <strong>AI nên:</strong> Giải thích, Gợi ý, Góp ý.</div>
                <div style="color: #ff3333;">✘ <strong>AI không nên:</strong> Làm hộ, Viết hộ.</div>
            </div>
        </div>
        <div class="abs-element scratch-mask" style="bottom: 15%; left: 10%; width: 80%;">
            <div class="highlight-box body-text editable draggable" style="font-weight: bold; font-size: 26pt;">
                Thông điệp chính: AI hỗ trợ việc học chứ không học thay người học.
            </div>
            <div class="scratch-overlay">Di chuột để mở khóa thông điệp</div>
        </div>
        `
    },
    // 17. GĐ4
    {
        id: 17,
        content: `
        <div class="center-layout abs-element" style="width: 100%; height: 100%;">
            <div class="title editable draggable" style="font-size: 60pt;"><i class="fas fa-chart-line"></i> GĐ4</div>
            <div class="subtitle editable draggable" style="font-size: 40pt; margin-top: 30px; color: var(--text-main);">PHÂN TÍCH THÔNG TIN</div>
            <div class="body-text editable draggable dashboard-card" style="margin-top: 40px; max-width: 80%;">
                Các chuyên gia cùng phân tích vì sao lạm dụng AI gây hậu quả.
            </div>
        </div>
        `
    },
    // 18. GĐ4 - CHUẨN BỊ
    {
        id: 18,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 50px; padding: 0 100px;">
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-tools"></i> Dụng cụ</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">- Giấy, bút</div>
            </div>
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-users"></i> Hình thức tổ chức</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">
                    <i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i> Nhóm 4
                </div>
            </div>
        </div>
        `
    },
    // 19. GĐ4 - QUY TRÌNH THỰC HIỆN
    {
        id: 19,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
            <div class="subtitle editable draggable">Các bước thực hiện như sau:</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; gap: 30px; padding: 0 50px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">1</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Quan sát bảng phân tích.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">2</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Thảo luận và hoàn thành bảng phân tích nguyên nhân – kết quả.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">3</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Thảo luận đề xuất cách làm khác.</div>
            </div>
        </div>
        `
    },
    // 20. GĐ4 - CHUYỆN GÌ XẢY RA?
    {
        id: 20,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUYỆN GÌ XẢY RA?</div>
            <div class="subtitle editable draggable">Hoàn thành bảng phân tích nguyên nhân - kết quả</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 25%; left: 5%; width: 90%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.6;">
                <strong>Đề bài: Hoàn thành bảng:</strong><br>
                <ul style="margin-left: 40px;">
                    <li>Yêu cầu AI viết hộ bài văn <i class="fas fa-arrow-right" style="color: var(--primary-purple);"></i> Điều xảy ra: <span class="interactive-reveal" data-answer="Không có kỹ năng viết" style="color: #ffaa33; cursor:pointer;">?</span></li>
                    <li>Chép nguyên bài AI <i class="fas fa-arrow-right" style="color: var(--primary-purple);"></i> Điều xảy ra: <span class="interactive-reveal" data-answer="Thầy cô phát hiện" style="color: #ffaa33; cursor:pointer;">?</span></li>
                    <li>Không kiểm tra nội dung <i class="fas fa-arrow-right" style="color: var(--primary-purple);"></i> Điều xảy ra: <span class="interactive-reveal" data-answer="Thông tin sai lệch" style="color: #ffaa33; cursor:pointer;">?</span></li>
                    <li>Nộp bài <i class="fas fa-arrow-right" style="color: var(--primary-purple);"></i> Điều xảy ra: <span class="interactive-reveal" data-answer="Bị điểm kém, phê bình" style="color: #ffaa33; cursor:pointer;">?</span></li>
                </ul>
                <br>
                <strong>Câu hỏi phụ:</strong> Nếu là Bách, em sẽ làm gì khác?<br>
                <strong>Sản phẩm:</strong> Bảng nguyên nhân - kết quả.
            </div>
        </div>
        <div class="abs-element" style="bottom: 5%; width: 100%; text-align: center;">
            <div class="timer editable draggable" data-time="480">08:00</div>
            <p style="font-size: 14pt;">(Click vào đồng hồ để đếm ngược)</p>
        </div>
        `
    },
    // 21. GĐ4 - KẾT QUẢ / ĐÁNH GIÁ
    {
        id: 21,
        content: `
        <div class="top-left-layout abs-element" style="top: 5%; left: 5%;">
            <div class="title editable draggable">BÁO CÁO KẾT QUẢ</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 20%; left: 5%; width: 90%;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.6;">
                <strong>Kết quả:</strong> Bảng phân tích nguyên nhân kết quả đã hoàn thành.<br>
                Nguyên tắc sử dụng AI đúng cách:<br>
                <div style="color: #00d2ff; margin-top: 10px;">
                    <i class="fas fa-check-circle"></i> Hỏi để hiểu &nbsp;&nbsp;
                    <i class="fas fa-check-circle"></i> Không chép &nbsp;&nbsp;
                    <i class="fas fa-check-circle"></i> Tự làm
                </div>
            </div>
        </div>
        <div class="abs-element scratch-mask" style="bottom: 15%; left: 10%; width: 80%;">
            <div class="highlight-box body-text editable draggable" style="font-weight: bold; font-size: 26pt;">
                Thông điệp chính: Muốn học chủ động với AI, hãy hỏi để hiểu chứ không hỏi để chép.
            </div>
            <div class="scratch-overlay">Di chuột để mở khóa thông điệp</div>
        </div>
        `
    },
    // 22. GĐ5
    {
        id: 22,
        content: `
        <div class="center-layout abs-element" style="width: 100%; height: 100%;">
            <div class="title editable draggable" style="font-size: 60pt;"><i class="fas fa-code-branch"></i> GĐ5</div>
            <div class="subtitle editable draggable" style="font-size: 40pt; margin-top: 30px; color: var(--text-main);">ĐÓNG GÓI THUẬT TOÁN</div>
            <div class="body-text editable draggable dashboard-card" style="margin-top: 40px; max-width: 80%;">
                Sau khi hoàn thành điều tra, Trung tâm AI gửi đến các nhóm một "Thuật toán học tập" nhưng hệ thống đã bị lỗi, các bước bị xáo trộn. Các chuyên gia hãy nhanh chóng giải thuật toán này.
            </div>
        </div>
        `
    },
    // 23. GĐ5 - CHUẨN BỊ
    {
        id: 23,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 50px; padding: 0 100px;">
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-tools"></i> Dụng cụ</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">- Giấy, bút</div>
            </div>
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-users"></i> Hình thức tổ chức</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">
                    <i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i> Nhóm 4
                </div>
            </div>
        </div>
        `
    },
    // 24. GĐ5 - QUY TRÌNH THỰC HIỆN
    {
        id: 24,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
            <div class="subtitle editable draggable">Các bước thực hiện như sau:</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; gap: 20px; padding: 0 20px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">1</div>
                <div class="body-text editable draggable" style="margin-top: 20px; font-size: 20pt;">Quan sát các mảnh ghép thuật toán.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">2</div>
                <div class="body-text editable draggable" style="margin-top: 20px; font-size: 20pt;">Loại bỏ những bước làm học sinh phụ thuộc AI.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">3</div>
                <div class="body-text editable draggable" style="margin-top: 20px; font-size: 20pt;">Sắp xếp các bước còn lại theo trình tự hợp lý.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">4</div>
                <div class="body-text editable draggable" style="margin-top: 20px; font-size: 20pt;">Giải thích lý do lựa chọn.</div>
            </div>
        </div>
        `
    },
    // 25. GĐ5 - MẢNH GHÉP THUẬT TOÁN
    {
        id: 25,
        content: `
        <div class="top-center-layout abs-element" style="top: 2%; width: 100%;">
            <div class="title editable draggable">MẢNH GHÉP THUẬT TOÁN</div>
            <div class="subtitle editable draggable">Sắp xếp các mảnh ghép thuật toán học tập chủ động với AI theo đúng trình tự</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 25%; left: 5%; width: 90%; text-align: left; border-color: #ffaa33;">
            <h3 style="color: #ff3333; text-align: center; margin-bottom: 15px;"><i class="fas fa-exclamation-triangle"></i> Thuật toán AI bị lỗi! Các khối lệnh đang bị xáo trộn.</h3>
            <div class="body-text editable draggable" style="font-size: 22pt;">
                <strong>Đề bài:</strong> Sắp xếp các thẻ hành động:<br>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 15px 0;">
                    <span class="interactive-cycle" style="cursor:pointer; padding: 5px 15px; border: 1px solid var(--primary-blue); border-radius: 5px;">Nêu điều mình chưa hiểu</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 5px 15px; border: 1px solid var(--primary-blue); border-radius: 5px;">Nhờ AI giải thích</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 5px 15px; border: 1px solid var(--primary-blue); border-radius: 5px;">Tự làm</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 5px 15px; border: 1px solid var(--primary-blue); border-radius: 5px;">Nhờ AI góp ý</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 5px 15px; border: 1px solid #ff3333; border-radius: 5px;">Chép nguyên bài AI</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 5px 15px; border: 1px solid #ff3333; border-radius: 5px;">Nộp bài ngay</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 5px 15px; border: 1px solid #ff3333; border-radius: 5px;">Không cần đọc lại</span>
                    <span class="interactive-cycle" style="cursor:pointer; padding: 5px 15px; border: 1px solid #ff3333; border-radius: 5px;">Bỏ qua bước tự làm</span>
                </div>
                <strong>Sản phẩm:</strong> Một quy trình học chủ động cùng AI.
            </div>
        </div>
        <div class="abs-element" style="bottom: 5%; width: 100%; text-align: center;">
            <div class="timer editable draggable" data-time="480">08:00</div>
            <p style="font-size: 14pt;">(Click vào đồng hồ để đếm ngược)</p>
        </div>
        `
    },
    // 26. GĐ5 - KẾT QUẢ / ĐÁNH GIÁ
    {
        id: 26,
        content: `
        <div class="top-left-layout abs-element" style="top: 5%; left: 5%;">
            <div class="title editable draggable">BÁO CÁO KẾT QUẢ</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 20%; left: 5%; width: 90%;">
            <div class="body-text editable draggable" style="font-size: 26pt;">
                <strong>Kết quả:</strong> Thuật toán đúng gồm:<br><br>
                <div style="display: flex; justify-content: center; align-items: center; gap: 15px; font-weight: bold; color: var(--primary-blue);">
                    <span>✔ Nêu điều chưa hiểu</span>
                    <i class="fas fa-arrow-right"></i>
                    <span>✔ Nhờ AI giải thích</span>
                    <i class="fas fa-arrow-right"></i>
                    <span>✔ Tự làm</span>
                    <i class="fas fa-arrow-right"></i>
                    <span>✔ Nhờ AI góp ý</span>
                </div>
            </div>
        </div>
        <div class="abs-element scratch-mask" style="bottom: 15%; left: 10%; width: 80%;">
            <div class="highlight-box body-text editable draggable" style="font-weight: bold; font-size: 26pt;">
                Thông điệp chính: Muốn học chủ động, AI chỉ xuất hiện ở những bước hỗ trợ chứ không thay thế việc học.
            </div>
            <div class="scratch-overlay">Di chuột để mở khóa thông điệp</div>
        </div>
        `
    },
    // 27. GĐ6
    {
        id: 27,
        content: `
        <div class="center-layout abs-element" style="width: 100%; height: 100%;">
            <div class="title editable draggable" style="font-size: 60pt;"><i class="fas fa-flask"></i> GĐ6</div>
            <div class="subtitle editable draggable" style="font-size: 40pt; margin-top: 30px; color: var(--text-main);">THỬ NGHIỆM QUY TRÌNH</div>
            <div class="body-text editable draggable dashboard-card" style="margin-top: 40px; max-width: 80%;">
                Thuật toán đã hoàn thành. Bây giờ các chuyên gia sẽ thử nghiệm trên một nhiệm vụ học tập thực tế.
            </div>
        </div>
        `
    },
    // 28. GĐ6 - CHUẨN BỊ
    {
        id: 28,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 50px; padding: 0 100px;">
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-tools"></i> Dụng cụ</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">- Giấy, bút</div>
            </div>
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-users"></i> Hình thức tổ chức</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">
                    <i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i> Nhóm 4
                </div>
            </div>
        </div>
        `
    },
    // 29. GĐ6 - QUY TRÌNH THỰC HIỆN
    {
        id: 29,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
            <div class="subtitle editable draggable">Các bước thực hiện như sau:</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; gap: 30px; padding: 0 50px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">1</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Đọc tình huống.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">2</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Điền các thông tin để xây dựng thuật toán học các môn học với AI.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">3</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Trình bày kết quả.</div>
            </div>
        </div>
        `
    },
    // 30. GĐ6 - THỰC HÀNH VỚI AI
    {
        id: 30,
        content: `
        <div class="top-center-layout abs-element" style="top: 2%; width: 100%;">
            <div class="title editable draggable">THỰC HÀNH VỚI AI</div>
            <div class="subtitle editable draggable">Xây dựng thuật toán học tập cho tình huống cụ thể</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 20%; left: 5%; width: 90%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 22pt; line-height: 1.5;">
                <div style="text-align: center; font-size: 40pt; margin-bottom: 10px; color: var(--primary-purple);">
                    <i class="fas fa-calculator"></i> <i class="fas fa-microscope"></i> <i class="fas fa-globe-americas"></i>
                </div>
                <strong>Đề bài:</strong> Tình huống: Em chuẩn bị viết bài văn kể về một lần em giúp đỡ người khác. Hoàn thành bảng:<br>
                <ul style="margin-left: 40px; margin-top: 10px;">
                    <li>Nêu điều mình chưa hiểu <i class="fas fa-arrow-right" style="color: var(--primary-blue);"></i> Em sẽ làm gì?: <span class="interactive-reveal" data-answer="Chưa biết mở bài" style="color: #ffaa33; cursor:pointer;">...</span></li>
                    <li>Nhờ AI giải thích/gợi ý <i class="fas fa-arrow-right" style="color: var(--primary-blue);"></i> Em sẽ làm gì?: <span class="interactive-reveal" data-answer="Hỏi: Gợi ý 3 cách mở bài" style="color: #ffaa33; cursor:pointer;">...</span></li>
                    <li>Tự làm <i class="fas fa-arrow-right" style="color: var(--primary-blue);"></i> Em sẽ làm gì?: <span class="interactive-reveal" data-answer="Chọn 1 cách và tự viết" style="color: #ffaa33; cursor:pointer;">...</span></li>
                    <li>Nhờ AI góp ý <i class="fas fa-arrow-right" style="color: var(--primary-blue);"></i> Em sẽ làm gì?: <span class="interactive-reveal" data-answer="Hỏi: Nhờ AI nhận xét" style="color: #ffaa33; cursor:pointer;">...</span></li>
                </ul>
                <br>
                <strong>Sản phẩm:</strong> Một quy trình sử dụng AI cho tình huống cụ thể.
            </div>
        </div>
        <div class="abs-element" style="bottom: 2%; width: 100%; text-align: center;">
            <div class="timer editable draggable" data-time="480">08:00</div>
            <p style="font-size: 14pt;">(Click vào đồng hồ để đếm ngược)</p>
        </div>
        `
    },
    // 31. GĐ6 - KẾT QUẢ / ĐÁNH GIÁ
    {
        id: 31,
        content: `
        <div class="top-left-layout abs-element" style="top: 5%; left: 5%;">
            <div class="title editable draggable">BÁO CÁO KẾT QUẢ</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 15%; left: 5%; width: 90%;">
            <div class="body-text editable draggable" style="font-size: 22pt; line-height: 1.6;">
                <strong>Kết quả: Kết quả mẫu các bước thực hiện nhiệm vụ ở tình huống trên:</strong><br>
                - <strong>Bước 1:</strong> Mình chưa biết mở bài thế nào.<br>
                - <strong>Bước 2:</strong> "Hãy gợi ý cho mình 3 cách mở bài về một lần giúp đỡ người khác."<br>
                - <strong>Bước 3:</strong> Chọn một cách phù hợp và tự viết bằng lời văn của mình.<br>
                - <strong>Bước 4:</strong> "Đây là bài của mình. Hãy góp ý xem phần nào cần chỉnh sửa."
            </div>
        </div>
        <div class="abs-element scratch-mask" style="bottom: 10%; left: 10%; width: 80%;">
            <div class="highlight-box body-text editable draggable" style="font-weight: bold; font-size: 26pt;">
                Thông điệp chính: AI giúp em học tốt hơn khi em chủ động suy nghĩ và thực hành.
            </div>
            <div class="scratch-overlay">Di chuột để mở khóa thông điệp</div>
        </div>
        `
    },
    // 32. GĐ7
    {
        id: 32,
        content: `
        <div class="center-layout abs-element" style="width: 100%; height: 100%;">
            <div class="title editable draggable" style="font-size: 60pt;"><i class="fas fa-book-open"></i> GĐ7</div>
            <div class="subtitle editable draggable" style="font-size: 40pt; margin-top: 30px; color: var(--text-main);">NHẬT KÍ CHUYÊN GIA</div>
            <div class="body-text editable draggable dashboard-card" style="margin-top: 40px; max-width: 80%;">
                Các chuyên gia hãy tự nhìn nhận lại quá trình làm việc của mình với AI.
            </div>
        </div>
        `
    },
    // 33. GĐ7 - CHUẨN BỊ
    {
        id: 33,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 50px; padding: 0 100px;">
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-tools"></i> Dụng cụ</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">- Phiếu Reflection</div>
            </div>
            <div class="dashboard-card" style="flex: 1;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; text-align: center; border-bottom: 1px solid var(--primary-blue); padding-bottom: 20px; margin-bottom: 20px;"><i class="fas fa-user"></i> Hình thức tổ chức</h3>
                <div class="body-text editable draggable list-item" style="justify-content: center;">
                    <i class="fas fa-user"></i> Cá nhân
                </div>
            </div>
        </div>
        `
    },
    // 34. GĐ7 - QUY TRÌNH THỰC HIỆN
    {
        id: 34,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
            <div class="subtitle editable draggable">Các bước thực hiện như sau:</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; gap: 50px; padding: 0 100px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">1</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Nhận phiếu tự nhìn nhận cá nhân.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center;">
                <div class="title" style="font-size: 40pt;">2</div>
                <div class="body-text editable draggable" style="margin-top: 20px;">Thảo luận, tự suy ngẫm độc lập và hoàn thành các câu hỏi trong nhật ký.</div>
            </div>
        </div>
        `
    },
    // 35. GĐ7 - NHẬT KÍ CHUYÊN GIA AI
    {
        id: 35,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">NHẬT KÍ CHUYÊN GIA AI</div>
            <div class="subtitle editable draggable">Hoàn thành các câu hỏi tự ngẫm</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 25%; left: 10%; width: 80%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 26pt; line-height: 1.8;">
                <strong>Đề bài: Hoàn thành nhật kí:</strong><br>
                - Điều em học được hôm nay là...<br>
                - Từ nay em sẽ thay đổi cách dùng AI như thế nào?<br>
                - Điều em còn băn khoăn là...<br><br>
                <strong>Sản phẩm:</strong> Phiếu Reflection.
            </div>
        </div>
        <div class="abs-element" style="bottom: 5%; width: 100%; text-align: center;">
            <div class="timer editable draggable" data-time="180">03:00</div>
            <p style="font-size: 14pt;">(Click vào đồng hồ để đếm ngược)</p>
        </div>
        `
    },
    // 36. GĐ8
    {
        id: 36,
        content: `
        <div class="center-layout abs-element" style="width: 100%; height: 100%;">
            <div class="title editable draggable" style="font-size: 60pt;"><i class="fas fa-power-off"></i> GĐ8</div>
            <div class="subtitle editable draggable" style="font-size: 40pt; margin-top: 30px; color: var(--text-main);">VẬN HÀNH HỆ THỐNG</div>
            <div class="body-text editable draggable dashboard-card" style="margin-top: 40px; max-width: 80%;">
                Hệ thống học tập chủ động với AI đã hoàn thành. Để kích hoạt hệ thống, mỗi chuyên gia cần đưa ra cam kết sử dụng AI đúng cách.
            </div>
        </div>
        `
    },
    // 37. GĐ8 - KÍCH HOẠT CAM KẾT
    {
        id: 37,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">KÍCH HOẠT CAM KẾT</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 30%; left: 10%; width: 80%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 26pt; text-align: center;">
                <strong>Đề bài:</strong> Đọc kỹ và chuẩn bị tích chọn các điều khoản cam kết để kích hoạt hệ thống học tập chủ động cùng AI trong tuần tới.
            </div>
            <div style="text-align: center; margin-top: 40px;">
                <button class="nav-target" data-target="40" style="font-size: 24pt; padding: 20px 40px; background: var(--primary-purple); display: inline-block;">SẴN SÀNG</button>
            </div>
        </div>
        `
    },
    // 38. TỔNG KẾT TIẾT HỌC
    {
        id: 38,
        content: `
        <div class="top-left-layout abs-element" style="top: 5%; left: 5%;">
            <div class="title editable draggable">HÔM NAY CHÚNG TA HỌC ĐƯỢC</div>
        </div>
        <div class="abs-element" style="top: 25%; left: 15%; width: 70%; display: flex; flex-direction: column; gap: 20px;">
            <div class="dashboard-card list-item fade-in-item" style="font-size: 26pt; opacity: 0; cursor: pointer; transition: opacity 0.5s;">
                <i class="fas fa-star" style="font-size: 30pt; color: #ffaa33;"></i> 
                <span class="editable draggable">AI là công cụ hỗ trợ học tập, không thay thế người học.</span>
            </div>
            <div class="dashboard-card list-item fade-in-item" style="font-size: 26pt; opacity: 0; cursor: pointer; transition: opacity 0.5s;">
                <i class="fas fa-star" style="font-size: 30pt; color: #ffaa33;"></i> 
                <span class="editable draggable">Muốn học chủ động với AI, hãy hỏi để hiểu chứ không hỏi để chép.</span>
            </div>
            <div class="dashboard-card list-item fade-in-item" style="font-size: 26pt; opacity: 0; cursor: pointer; transition: opacity 0.5s;">
                <i class="fas fa-star" style="font-size: 30pt; color: #ffaa33;"></i> 
                <span class="editable draggable">Quy trình học chủ động gồm 4 bước: Nêu điều mình chưa hiểu -> Nhờ AI giải thích hoặc gợi ý -> Tự làm -> Nhờ AI góp ý.</span>
            </div>
        </div>
        <div class="abs-element" style="bottom: 5%; width: 100%; text-align: center;">
            <div class="body-text editable draggable" style="font-style: italic; color: #a78bfa; font-size: 20pt;">
                (Click vào giữa màn hình để hiển thị từng nội dung) <br>
                AI không học thay em. AI chỉ giúp em học tốt hơn khi em biết suy nghĩ, đặt câu hỏi và tự hoàn thành bài học của mình.
            </div>
        </div>
        `
    },
    // 39. TRẢ LỜI CÂU HỎI LỚN
    {
        id: 39,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">GIẢI MÃ CÂU HỎI LỚN</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 20%; left: 15%; width: 70%; text-align: center;">
            <div class="body-text editable draggable" style="font-size: 28pt;">
                Làm thế nào để sử dụng AI hỗ trợ học tập mà không phụ thuộc vào AI?
            </div>
        </div>
        <div class="abs-element" style="top: 45%; width: 100%; display: flex; justify-content: center;">
            <div id="unlock-trigger" style="font-size: 60pt; color: #ffaa33; cursor: pointer; transition: all 0.5s;">
                <i class="fas fa-lock"></i>
            </div>
        </div>
        <div id="answer-block" class="abs-element dashboard-card" style="top: 55%; left: 10%; width: 80%; text-align: center; opacity: 0; transform: translateY(20px); transition: all 0.8s; pointer-events: none; border-color: #00ff00;">
            <div class="body-text editable draggable" style="font-size: 26pt; font-weight: bold; color: #00d2ff;">
                Sử dụng AI để giải thích, gợi ý và góp ý, không dùng AI để làm hộ.<br><br>
                Luôn thực hiện quy trình: Nêu điều chưa hiểu -> Nhờ AI giải thích/gợi ý -> Tự làm -> Nhờ AI góp ý.<br><br>
                Chủ động suy nghĩ và chịu trách nhiệm về sản phẩm học tập của mình.
            </div>
        </div>
        `
    },
    // 40. BẢN CAM KẾT
    {
        id: 40,
        content: `
        <div class="top-center-layout abs-element" style="top: 2%; width: 100%;">
            <div class="title editable draggable">BẢN CAM KẾT</div>
            <div class="subtitle editable draggable">Cam kết học chủ động cùng AI trong tuần tới</div>
        </div>
        <div class="abs-element" style="top: 20%; left: 20%; width: 60%; height: 75%; background: rgba(255,255,255,0.9); border-radius: 10px; color: #000; padding: 40px; box-shadow: 0 0 30px rgba(255,255,255,0.3); position: relative;">
            <h2 style="text-align: center; margin-bottom: 30px; color: #333;">ĐIỀU KHOẢN CAM KẾT</h2>
            <div style="font-size: 22pt; line-height: 1.8; margin-left: 20px;">
                <div class="checklist-item" style="cursor: pointer;"><i class="far fa-square"></i> <span class="editable draggable">Hỏi AI để hiểu bài.</span></div>
                <div class="checklist-item" style="cursor: pointer;"><i class="far fa-square"></i> <span class="editable draggable">Tự suy nghĩ trước khi hỏi AI.</span></div>
                <div class="checklist-item" style="cursor: pointer;"><i class="far fa-square"></i> <span class="editable draggable">Tự hoàn thành bài bằng lời của mình.</span></div>
                <div class="checklist-item" style="cursor: pointer;"><i class="far fa-square"></i> <span class="editable draggable">Nhờ AI góp ý sau khi hoàn thành.</span></div>
                <div class="checklist-item" style="cursor: pointer;"><i class="far fa-square"></i> <span class="editable draggable">Không sao chép nguyên văn câu trả lời của AI.</span></div>
            </div>
            
            <div style="position: absolute; bottom: 40px; left: 40px;">
                <p>Chữ ký:</p>
                <div class="signature-box editable draggable" style="width: 200px; height: 60px; border-bottom: 2px dashed #666; margin-top: 10px; cursor: text;"></div>
            </div>
            
            <div style="position: absolute; bottom: 40px; right: 40px;">
                <button id="commit-btn" style="background: #ff3333; color: white; padding: 15px 30px; font-size: 20pt; border-radius: 8px; border: none; cursor: pointer; box-shadow: 0 5px 15px rgba(255,50,50,0.4);">Cam kết</button>
            </div>
            
            <div id="commit-stamp" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(5); opacity: 0; color: rgba(255,0,0,0.5); font-size: 80pt; font-weight: bold; border: 10px solid rgba(255,0,0,0.5); border-radius: 20px; padding: 20px; pointer-events: none; transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-transform: uppercase; transform-origin: center;">
                Đã cam kết
            </div>
        </div>
        `
    },
    // 41. KHEN THƯỞNG
    {
        id: 41,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 50pt; color: #ffaa33; text-shadow: 0 0 20px rgba(255, 170, 51, 0.6);"><i class="fas fa-award"></i> CHỨNG NHẬN HOÀN THÀNH NHIỆM VỤ</div>
            <div class="subtitle editable draggable">Cảm ơn sự nỗ lực làm việc của các chuyên gia AI EduLab!</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 30%; left: 10%; width: 80%; height: 50%; border-color: #ffaa33; background: rgba(255, 170, 51, 0.1); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <div class="body-text editable draggable" style="font-size: 30pt; font-weight: bold; line-height: 1.5;">
                Tuyên dương nhóm chuyên gia:<br>
                <div class="editable draggable" style="display: inline-block; min-width: 300px; border-bottom: 2px dashed #ffaa33; padding: 10px; margin: 20px 0; color: #fff;">[Nhập tên nhóm/cá nhân]</div><br>
                đã xuất sắc bẻ khóa thuật toán và kích hoạt hệ thống học tập chủ động thành công!
            </div>
            <div style="position: absolute; bottom: 30px; right: 30px; text-align: right;">
                <div style="width: 100px; height: 100px; border: 4px solid #ffaa33; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-left: auto; color: #ffaa33; font-weight: bold; transform: rotate(-15deg);">AI CENTER</div>
                <div class="editable draggable" style="margin-top: 10px; font-family: 'Brush Script MT', cursive; font-size: 24pt;">Giám đốc AI</div>
            </div>
        </div>
        <div class="abs-element" style="bottom: 5%; width: 100%; text-align: center;">
            <button id="finish-btn" style="background: var(--primary-purple); font-size: 24pt; padding: 15px 40px; display: inline-block;">Hoàn thành</button>
        </div>
        <div id="confetti-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 100;"></div>
        `
    }
];
