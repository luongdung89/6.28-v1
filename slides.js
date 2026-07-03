const slides = [
    // Slide 1
    {
        id: 1,
        content: `
        <div class="top-center-layout abs-element" style="top: 30%; width: 100%;">
            <div class="title editable draggable typewriter-effect" style="font-size: 30pt; color: var(--text-main);">Bài 6.28</div>
            <div class="title editable draggable typewriter-effect" style="font-size: 50pt; margin-top: 20px;">Dùng AI thế nào để học chủ động hơn?</div>
        </div>
        `
    },
    // Slide 2
    {
        id: 2,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">MỤC TIÊU BÀI HỌC</div>
        </div>
        <div class="split-layout abs-element" style="top: 25%; width: 100%; display: flex; justify-content: center; gap: 30px; padding: 0 50px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: left;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 26pt; margin-bottom: 20px;"><i class="fas fa-brain"></i> Kiến thức</h3>
                <div class="body-text editable draggable list-item"><i class="fas fa-check" style="color: var(--primary-blue);"></i> Hiểu vai trò của AI trong học tập.</div>
                <div class="body-text editable draggable list-item"><i class="fas fa-check" style="color: var(--primary-blue);"></i> Hiểu nguyên tắc sử dụng AI đúng cách.</div>
                <div class="body-text editable draggable list-item"><i class="fas fa-check" style="color: var(--primary-blue);"></i> Phân biệt học chủ động và phụ thuộc AI.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: left;">
                <h3 class="editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;"><i class="fas fa-tools"></i> Kỹ năng</h3>
                <div class="body-text editable draggable list-item"><i class="fas fa-check" style="color: var(--primary-purple);"></i> Phân tích cách sử dụng AI.</div>
                <div class="body-text editable draggable list-item"><i class="fas fa-check" style="color: var(--primary-purple);"></i> Xây dựng quy trình học chủ động cùng AI.</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: left;">
                <h3 class="editable draggable" style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;"><i class="fas fa-heart"></i> Thái độ</h3>
                <div class="body-text editable draggable list-item"><i class="fas fa-check" style="color: #00ffcc;"></i> Không phụ thuộc AI.</div>
                <div class="body-text editable draggable list-item"><i class="fas fa-check" style="color: #00ffcc;"></i> Chủ động trong học tập.</div>
            </div>
        </div>
        `
    },
    // Slide 3
    {
        id: 3,
        content: `
        <div class="center-layout abs-element dashboard-card" style="width: 70%; height: 70%; border-color: var(--primary-purple);">
            <div class="title editable draggable" style="font-size: 35pt; color: var(--primary-purple); margin-bottom: 30px;"><i class="fas fa-id-badge"></i> PHÂN VAI</div>
            <div class="body-text editable draggable" style="text-align: left; line-height: 1.6;">
                <p><strong>Vai trò:</strong> Chuyên gia công nghệ.</p>
                <p>Học sinh đóng vai chuyên gia công nghệ nhận nhiệm vụ từ Viện nghiên cứu công nghệ Novastar điều tra các lỗi khi học sinh sử dụng AI trong học tập.</p>
                <br>
                <p><strong>Nhiệm vụ:</strong></p>
                <ul>
                    <li>Điều tra nguyên nhân.</li>
                    <li>Phân tích dữ liệu.</li>
                    <li>Thiết kế quy trình học chủ động.</li>
                    <li>Kích hoạt hệ thống học tập chủ động với AI.</li>
                </ul>
            </div>
        </div>
        `
    },
    // Slide 4
    {
        id: 4,
        content: `
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center;">
            <div class="title editable draggable" style="font-size: 40pt; color: #ffeb3b; margin-bottom: 20px;"><i class="fas fa-question-circle"></i> CÂU HỎI LỚN</div>
            <div class="body-text editable draggable" style="font-size: 30pt;">Làm thế nào để sử dụng AI hỗ trợ học tập mà không phụ thuộc vào AI?</div>
        </div>
        <div class="abs-element" style="top: 60%; left: 10%; width: 80%; display: flex; justify-content: space-around; align-items: center;">
            <div class="body-text editable draggable" style="font-size: 28pt; color: #ff3333;">🤖 AI làm hộ</div>
            <div class="title" style="font-size: 60pt; color: #ffeb3b;">VS</div>
            <div class="body-text editable draggable" style="font-size: 28pt; color: #00ffcc;">🧠 AI hỗ trợ học</div>
        </div>
        `
    },
    // Slide 5
    {
        id: 5,
        content: `
        <!-- Background image generated by AI -->
        <div class="abs-element slide-bg" style="background-image: url('slide5_bg_1783060482508.png');"></div>
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%; z-index: 2;">
            <div class="title editable draggable" style="color: #ff3333; font-size: 50pt; text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000;"><i class="fas fa-exclamation-triangle"></i> CẢNH BÁO KHẨN CẤP</div>
        </div>
        <div class="center-layout abs-element dashboard-card warning-box flash-text" style="width: 70%; border-color: #ff3333; background: rgba(255, 0, 0, 0.2); z-index: 2;">
            <div class="body-text editable draggable" style="font-size: 35pt; color: #fff; text-align: center;">
                ⚠ THÔNG BÁO KHẨN:<br><br>Một học sinh vừa sử dụng AI không đúng cách.
            </div>
        </div>
        `,
        isWarningSlide: true // custom flag for slide specific logic in app.js
    },
    // Slide 6
    {
        id: 6,
        content: `
        <div class="center-layout abs-element" style="top: 30%; width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 25pt; margin-bottom: 10px;">Giai đoạn 1</div>
            <div class="title editable draggable" style="font-size: 50pt; margin-bottom: 30px;">MỞ KHÓA NHIỆM VỤ</div>
            <div class="body-text editable draggable" style="font-size: 28pt; max-width: 80%; margin: 0 auto;">Khám phá tình huống sử dụng AI sai cách và tìm hiểu nguyên nhân bạn Bách bị điểm kém.</div>
        </div>
        `
    },
    // Slide 7
    {
        id: 7,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 40px; padding: 0 100px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; margin-bottom: 20px;">Dụng cụ</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-pen-nib"></i></div>
                <div class="body-text editable draggable">Giấy, bút</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-purple); font-size: 30pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-user-friends"></i></div>
                <div class="body-text editable draggable">Nhóm 2</div>
            </div>
        </div>
        `
    },
    // Slide 8
    {
        id: 8,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; align-items: center; padding: 0 20px;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 1:</strong><br>Lắng nghe tình huống của bạn Bách.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 2:</strong><br>Thảo luận nhóm và trả lời câu hỏi.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 3:</strong><br>Chia sẻ ý kiến trước lớp.</div>
            </div>
        </div>
        `
    },
    // Slide 9
    {
        id: 9,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="color: #ff3333;">THÔNG BÁO KHẨN</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px;">Thảo luận nhóm và đưa ra nhận định ban đầu về tình huống.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 25%; left: 5%; width: 70%; max-height: 60%; overflow-y: auto; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 18pt;">
                <p>Bạn Bách là học sinh lớp 6 tại một trường học tại thành phố Hồ Chí Minh. Bách được giao bài tập làm văn môn Ngữ văn 6 kể về một trải nghiệm đáng nhớ của bản thân.</p>
                <br>
                <p>Bách đã dùng AI để viết hộ. AI tạo ra một bài văn rất hay về việc đi trượt tuyết ở Sapa vào mùa đông. Bách chép nguyên bài văn và nộp cho thầy. Tuy nhiên thầy giáo lại cho Bách điểm kém và phê bình Bách trước lớp.</p>
                <hr style="border-color: rgba(0,210,255,0.2); margin: 15px 0;">
                <p style="color: #ffeb3b;"><strong>Câu hỏi thảo luận:</strong></p>
                <ol style="margin-left: 20px;">
                    <li>Tại sao bài văn của Bách rất hay nhưng thầy giáo lại cho điểm kém và phê bình Bách?</li>
                    <li>Tại sao thầy giáo phát hiện ra bài văn của Bách là bài chép từ AI?</li>
                </ol>
            </div>
        </div>
        <div class="abs-element timer-container" style="top: 35%; right: 5%; width: 25%; text-align: center;">
            <div class="timer-display" data-time="300">05:00</div>
            <div class="timer-controls">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    // Slide 10
    {
        id: 10,
        content: `
        <div class="center-layout abs-element" style="width: 100%;">
            <div class="title editable draggable">ĐÁP ÁN</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: left; border-color: #00ffcc;">
            <div class="body-text editable draggable" style="line-height: 1.8;">
                <p><i class="fas fa-check-circle" style="color: #00ffcc;"></i> Thầy giáo cho điểm kém và phê bình Bách vì <strong>Bách đã dùng AI để viết hộ bài văn</strong>.</p>
                <br>
                <p><i class="fas fa-check-circle" style="color: #00ffcc;"></i> Thầy giáo phát hiện ra vì bài viết không đúng trải nghiệm thật, nội dung không đúng thực tế, thông tin trượt tuyết ở Sapa vào mùa đông là thông tin AI tạo ra không chính xác.</p>
            </div>
        </div>
        `
    },
    // Slide 11
    {
        id: 11,
        content: `
        <div class="center-layout abs-element" style="top: 30%; width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 25pt; margin-bottom: 10px;">Giai đoạn 2</div>
            <div class="title editable draggable" style="font-size: 50pt; margin-bottom: 30px;">NHẬN YÊU CẦU TỪ KHÁCH HÀNG</div>
            <div class="body-text editable draggable" style="font-size: 28pt; max-width: 80%; margin: 0 auto;">Tiếp nhận nhiệm vụ nghiên cứu cách học chủ động với AI từ Viện nghiên cứu công nghệ Novastars.</div>
        </div>
        <div class="abs-element" style="top: 65%; left: 50%; transform: translateX(-50%); font-size: 80pt; color: var(--primary-blue); opacity: 0.8;">
            <i class="fas fa-envelope-open-text"></i>
        </div>
        `
    },
    // Slide 12
    {
        id: 12,
        content: `
        <div class="abs-element slide-bg" style="background-image: url('slide12_bg_1783060492868.png'); opacity: 0.3;"></div>
        <div class="top-center-layout abs-element" style="top: 15%; width: 100%; z-index: 2;">
            <div class="title editable draggable">NHIỆM VỤ CHI TIẾT</div>
        </div>
        <div class="center-layout abs-element" style="top: 45%; left: 50%; transform: translate(-50%, -50%); z-index: 2;">
            <button class="interactive-btn" id="btn-show-task" style="font-size: 24pt; padding: 20px 40px; border-radius: 10px; background: rgba(0, 210, 255, 0.1); border: 2px solid var(--primary-blue); color: var(--primary-blue); cursor: pointer; transition: all 0.3s; box-shadow: 0 0 15px rgba(0, 210, 255, 0.5);">XEM CHI TIẾT 📁</button>
        </div>
        
        <!-- Modal Popup Content (Hidden by default, shown via JS) -->
        <div id="task-modal" class="modal-overlay hidden" style="position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.8); z-index: 10; display: flex; justify-content: center; align-items: center; opacity: 0; pointer-events: none; transition: opacity 0.3s;">
            <div class="dashboard-card modal-content" style="width: 80%; max-width: 1000px; background: var(--bg-dark); border: 2px solid var(--primary-purple); box-shadow: 0 0 50px rgba(122, 0, 255, 0.4); padding: 40px; position: relative;">
                <button id="btn-close-task" style="position: absolute; top: 15px; right: 20px; background: none; border: none; color: #ff3333; font-size: 30pt; cursor: pointer;">&times;</button>
                <div class="title" style="font-size: 35pt; color: var(--primary-purple); margin-bottom: 20px; text-align: center;"><i class="fas fa-envelope-open"></i> THÔNG ĐIỆP TỪ NOVASTARS</div>
                <div class="body-text" style="font-size: 22pt; line-height: 1.6; text-align: left;">
                    <p>Trung tâm AI đang phát triển phiên bản AI hỗ trợ học tập mới. Tuy nhiên hệ thống liên tục ghi nhận học sinh sử dụng AI sai cách.</p>
                    <br>
                    <p>Các chuyên gia công nghệ hãy nghiên cứu cách học chủ động với AI, không phụ thuộc AI thông qua các câu hỏi điều tra:</p>
                    <ul style="margin-left: 30px; margin-top: 10px; color: var(--primary-blue);">
                        <li>Vai trò của AI là gì?</li>
                        <li>Nên dùng AI hỗ trợ những việc gì?</li>
                        <li>Sử dụng AI như thế nào để không bị phụ thuộc?</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    },
    // Slide 13
    {
        id: 13,
        content: `
        <div class="center-layout abs-element" style="top: 30%; width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 25pt; margin-bottom: 10px;">Giai đoạn 3</div>
            <div class="title editable draggable" style="font-size: 50pt; margin-bottom: 30px;">THU THẬP DỮ LIỆU</div>
            <div class="body-text editable draggable" style="font-size: 28pt; max-width: 80%; margin: 0 auto;">Xác định đâu là việc AI nên hỗ trợ và vai trò thực sự của AI thông qua dữ liệu thu thập được.</div>
        </div>
        <div class="abs-element" style="top: 65%; left: 50%; transform: translateX(-50%); font-size: 80pt; color: #00ffcc; opacity: 0.8;">
            <i class="fas fa-database"></i>
        </div>
        `
    },
    // Slide 14
    {
        id: 14,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 40px; padding: 0 100px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; margin-bottom: 20px;">Dụng cụ</h3>
                <div class="title" style="font-size: 50pt; margin-bottom: 20px;">
                    <span style="color: #00ffcc;">🟢</span> &nbsp; <span style="color: #ff3333;">🔴</span>
                </div>
                <div class="body-text editable draggable" style="font-size: 18pt;">Nhận thẻ ý kiến từ giáo viên<br>(Thẻ màu xanh và thẻ màu đỏ)</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-purple); font-size: 30pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-user"></i></div>
                <div class="body-text editable draggable">Cá nhân</div>
            </div>
        </div>
        `
    },
    // Slide 15
    {
        id: 15,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; align-items: center; padding: 0 20px;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 1:</strong><br>Quan sát từng hành động.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 2:</strong><br>Giơ thẻ:<br>🟢 Nên hoặc 🔴 Không nên.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 3:</strong><br>Giải thích lựa chọn.</div>
            </div>
        </div>
        `
    },
    // Slide 16
    {
        id: 16,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">AI HAY KHÔNG?</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px;">Quan sát các hành động và giơ thẻ ý kiến phân loại để tìm ra danh sách hành động phù hợp.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 25%; left: 5%; width: 70%; text-align: left; position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; font-size: 30pt;">
                <span style="color: #00ffcc;">🟢</span> <span style="color: #ff3333;">🔴</span>
            </div>
            <div class="body-text editable draggable" style="font-size: 22pt;">
                <p style="color: var(--primary-blue); font-weight: bold; margin-bottom: 15px;">Phân loại các hành động sau:</p>
                <ol style="margin-left: 30px; line-height: 1.8;">
                    <li>AI viết hộ bài văn.</li>
                    <li>AI giải thích bài.</li>
                    <li>AI gợi ý dàn ý.</li>
                    <li>AI góp ý bài viết.</li>
                    <li>AI kiểm tra lỗi.</li>
                    <li>AI gợi ý từ vựng.</li>
                </ol>
            </div>
        </div>
        <div class="abs-element timer-container" style="top: 35%; right: 5%; width: 25%; text-align: center;">
            <div class="timer-display" data-time="480">08:00</div>
            <div class="timer-controls">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    // Slide 17
    {
        id: 17,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">TỔNG KẾT</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 20%; left: 15%; width: 70%; height: 70%; text-align: left; display: flex; flex-direction: column; justify-content: center;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <p style="color: var(--primary-blue); font-weight: bold; font-size: 28pt; margin-bottom: 20px;">Bảng phân loại kết quả:</p>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 22pt;">
                    <tr>
                        <th style="border: 2px solid var(--primary-blue); padding: 15px; color: #00ffcc; text-align: center; width: 50%;">🟢 AI nên</th>
                        <th style="border: 2px solid var(--primary-blue); padding: 15px; color: #ff3333; text-align: center; width: 50%;">🔴 AI không nên</th>
                    </tr>
                    <tr>
                        <td style="border: 2px solid var(--primary-blue); padding: 15px; text-align: center;">✔ Giải thích<br>✔ Gợi ý<br>✔ Góp ý</td>
                        <td style="border: 2px solid var(--primary-blue); padding: 15px; text-align: center;">✘ Làm hộ<br>✘ Viết hộ</td>
                    </tr>
                </table>
                <hr style="border-color: rgba(0, 210, 255, 0.3); margin: 20px 0;">
                <p style="color: #ffeb3b; font-size: 30pt; text-align: center; margin-top: 20px;">
                    <i class="fas fa-lightbulb"></i> <strong>Thông điệp chính:</strong><br>
                    AI hỗ trợ việc học chứ không học thay người học.
                </p>
            </div>
        </div>
        `
    },
    // Slide 18
    {
        id: 18,
        content: `
        <div class="center-layout abs-element" style="top: 30%; width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 25pt; margin-bottom: 10px;">Giai đoạn 4</div>
            <div class="title editable draggable" style="font-size: 50pt; margin-bottom: 30px;">PHÂN TÍCH THÔNG TIN</div>
            <div class="body-text editable draggable" style="font-size: 28pt; max-width: 80%; margin: 0 auto;">Các chuyên gia cùng phân tích vì sao lạm dụng AI gây hậu quả và rút ra nguyên tắc sử dụng AI đúng cách.</div>
        </div>
        <div class="abs-element" style="top: 65%; left: 50%; transform: translateX(-50%); font-size: 80pt; color: #ff00ff; opacity: 0.8;">
            <i class="fas fa-chart-network"></i>
        </div>
        `
    },
    // Slide 19
    {
        id: 19,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 40px; padding: 0 100px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; margin-bottom: 20px;">Dụng cụ</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-pen-square"></i></div>
                <div class="body-text editable draggable">Giấy, bút</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-purple); font-size: 30pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i></div>
                <div class="body-text editable draggable">Nhóm 4</div>
            </div>
        </div>
        `
    },
    // Slide 20
    {
        id: 20,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; align-items: center; padding: 0 20px;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 1:</strong><br>Quan sát bảng phân tích.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 2:</strong><br>Thảo luận và hoàn thành bảng phân tích nguyên nhân – kết quả.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 3:</strong><br>Thảo luận đề xuất cách làm khác.</div>
            </div>
        </div>
        `
    },
    // Slide 21
    {
        id: 21,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUYỆN GÌ XẢY RA?</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px;">Thảo luận và hoàn thành bảng nguyên nhân - kết quả cùng câu hỏi mở rộng.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 25%; left: 5%; width: 70%; text-align: left; position: relative;">
            <div style="position: absolute; top: 15px; right: 20px; font-size: 40pt; color: rgba(0, 210, 255, 0.4);">
                <i class="fas fa-search"></i>
            </div>
            <div class="body-text editable draggable" style="font-size: 20pt;">
                <p style="color: var(--primary-blue); font-weight: bold; margin-bottom: 15px;">Hoàn thành bảng:</p>
                <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 18pt;">
                        <tr>
                            <th style="border: 1px solid var(--primary-blue); padding: 10px; color: #ffeb3b; text-align: center; width: 50%;">Việc Bách làm</th>
                            <th style="border: 1px solid var(--primary-blue); padding: 10px; color: #ffeb3b; text-align: center; width: 50%;">Điều xảy ra</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px;">Yêu cầu AI viết hộ bài văn</td>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px; text-align: center;"><span style="color: #ff3333;">?</span></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px;">Chép nguyên bài AI</td>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px; text-align: center;"><span style="color: #ff3333;">?</span></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px;">Không kiểm tra nội dung</td>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px; text-align: center;"><span style="color: #ff3333;">?</span></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px;">Nộp bài</td>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px; text-align: center;"><span style="color: #ff3333;">?</span></td>
                        </tr>
                    </table>
                </div>
                <hr style="border-color: rgba(0, 210, 255, 0.3); margin: 15px 0;">
                <p style="color: #00ffcc;"><strong>Trả lời câu hỏi:</strong> Nếu là Bách, em sẽ làm gì khác?</p>
            </div>
        </div>
        <div class="abs-element timer-container" style="top: 35%; right: 5%; width: 25%; text-align: center;">
            <div class="timer-display" data-time="480">08:00</div>
            <div class="timer-controls">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    // Slide 22
    {
        id: 22,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">TỔNG KẾT</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 20%; left: 15%; width: 70%; height: 70%; text-align: left; display: flex; flex-direction: column; justify-content: center;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <p style="color: #aaa; font-style: italic;">(Bảng phân tích nguyên nhân kết quả đã hoàn thành).</p>
                <table style="width: 100%; border-collapse: collapse; font-size: 16pt; margin-top: 15px; margin-bottom: 15px;">
                    <tr>
                        <th style="border: 1px solid var(--primary-blue); padding: 5px; color: #ffeb3b; text-align: center; width: 40%;">Việc Bách làm</th>
                        <th style="border: 1px solid var(--primary-blue); padding: 5px; color: #ffeb3b; text-align: center; width: 60%;">Điều xảy ra</th>
                    </tr>
                    <tr>
                        <td style="border: 1px solid var(--primary-blue); padding: 5px;">Yêu cầu AI viết hộ</td>
                        <td style="border: 1px solid var(--primary-blue); padding: 5px;">Không hiểu đề bài, AI viết không đúng trải nghiệm thật.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid var(--primary-blue); padding: 5px;">Chép nguyên bài AI</td>
                        <td style="border: 1px solid var(--primary-blue); padding: 5px;">Không rèn luyện được kỹ năng viết.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid var(--primary-blue); padding: 5px;">Không kiểm tra</td>
                        <td style="border: 1px solid var(--primary-blue); padding: 5px;">Có thể sai thông tin, câu văn không hợp lứa tuổi.</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid var(--primary-blue); padding: 5px;">Nộp bài</td>
                        <td style="border: 1px solid var(--primary-blue); padding: 5px;">Bị cô giáo phát hiện và nhận điểm kém.</td>
                    </tr>
                </table>
                <p style="color: var(--primary-blue); font-weight: bold; font-size: 28pt; margin-bottom: 10px;">Nguyên tắc sử dụng AI đúng cách:</p>
                <ul style="list-style-type: none; margin-left: 20px;">
                    <li><span style="color: #00ffcc;">✔</span> Hỏi để hiểu</li>
                    <li><span style="color: #00ffcc;">✔</span> Không chép</li>
                    <li><span style="color: #00ffcc;">✔</span> Tự làm</li>
                </ul>
                <hr style="border-color: rgba(0, 210, 255, 0.3); margin: 20px 0;">
                <p style="color: #ffeb3b; font-size: 30pt; text-align: center; margin-top: 20px;">
                    <i class="fas fa-bullhorn"></i> <strong>Thông điệp chính:</strong><br>
                    Muốn học chủ động với AI, hãy hỏi để hiểu chứ không hỏi để chép.
                </p>
            </div>
        </div>
        `
    },
    // Slide 23
    {
        id: 23,
        content: `
        <div class="center-layout abs-element" style="top: 30%; width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 25pt; margin-bottom: 10px;">Giai đoạn 5</div>
            <div class="title editable draggable" style="font-size: 50pt; margin-bottom: 30px;">ĐÓNG GÓI THUẬT TOÁN</div>
            <div class="body-text editable draggable" style="font-size: 28pt; max-width: 80%; margin: 0 auto;">Giải quyết sự cố hệ thống bị lỗi và sắp xếp lại các khối lệnh của "Thuật toán học tập".</div>
        </div>
        <div class="abs-element" style="top: 65%; left: 50%; transform: translateX(-50%); font-size: 80pt; color: #00d2ff; opacity: 0.8; display: flex; gap: 20px;">
            <i class="fas fa-cubes"></i> <i class="fas fa-project-diagram"></i>
        </div>
        `
    },
    // Slide 24
    {
        id: 24,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 40px; padding: 0 100px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; margin-bottom: 20px;">Dụng cụ</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-pencil-alt"></i></div>
                <div class="body-text editable draggable">Giấy, bút</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-purple); font-size: 30pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i></div>
                <div class="body-text editable draggable">Nhóm 4</div>
            </div>
        </div>
        `
    },
    // Slide 25
    {
        id: 25,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; align-items: center; padding: 0 20px;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 5px; text-align: center; height: 220px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 1:</strong><br>Quan sát các mảnh ghép thuật toán.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 20pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 5px; text-align: center; height: 220px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 2:</strong><br>Loại bỏ những bước làm học sinh phụ thuộc AI.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 20pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 5px; text-align: center; height: 220px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 3:</strong><br>Sắp xếp các bước còn lại theo trình tự hợp lý.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 20pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 5px; text-align: center; height: 220px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 4:</strong><br>Giải thích lý do lựa chọn.</div>
            </div>
        </div>
        `
    },
    // Slide 26
    {
        id: 26,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">MẢNH GHÉP THUẬT TOÁN</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px;">Loại bỏ thẻ sai và sắp xếp các thẻ thuật toán học tập chủ động theo đúng trình tự.</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 25%; left: 5%; width: 70%; padding: 20px; border-color: #ff3333; position: relative;">
            <div class="flash-text" style="color: #ff3333; font-weight: bold; font-size: 18pt; text-align: center; margin-bottom: 15px;">
                <i class="fas fa-exclamation-triangle"></i> CẢNH BÁO: Thuật toán AI bị lỗi! Kéo thả thẻ đúng vào sơ đồ bên dưới.
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 30px;">
                <div class="alg-block draggable" style="z-index: 10;">Nêu điều mình chưa hiểu.</div>
                <div class="alg-block draggable" style="z-index: 10;">Nhờ AI giải thích.</div>
                <div class="alg-block draggable" style="z-index: 10;">Tự làm.</div>
                <div class="alg-block draggable" style="z-index: 10;">Nhờ AI góp ý.</div>
                <div class="alg-block draggable" style="z-index: 10;">Chép nguyên bài AI.</div>
                <div class="alg-block draggable" style="z-index: 10;">Nộp bài ngay.</div>
                <div class="alg-block draggable" style="z-index: 10;">Không cần đọc lại.</div>
                <div class="alg-block draggable" style="z-index: 10;">Bỏ qua bước tự làm.</div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                <div class="drop-zone" style="border: 2px dashed #00ffcc; width: 22%; height: 80px; display: flex; align-items: center; justify-content: center; position: relative;">
                    <span style="position: absolute; top: -25px; color: #00ffcc; font-size: 14pt;">Bước 1</span>
                </div>
                <i class="fas fa-arrow-right" style="color: #00ffcc;"></i>
                <div class="drop-zone" style="border: 2px dashed #00ffcc; width: 22%; height: 80px; display: flex; align-items: center; justify-content: center; position: relative;">
                    <span style="position: absolute; top: -25px; color: #00ffcc; font-size: 14pt;">Bước 2</span>
                </div>
                <i class="fas fa-arrow-right" style="color: #00ffcc;"></i>
                <div class="drop-zone" style="border: 2px dashed #00ffcc; width: 22%; height: 80px; display: flex; align-items: center; justify-content: center; position: relative;">
                    <span style="position: absolute; top: -25px; color: #00ffcc; font-size: 14pt;">Bước 3</span>
                </div>
                <i class="fas fa-arrow-right" style="color: #00ffcc;"></i>
                <div class="drop-zone" style="border: 2px dashed #00ffcc; width: 22%; height: 80px; display: flex; align-items: center; justify-content: center; position: relative;">
                    <span style="position: absolute; top: -25px; color: #00ffcc; font-size: 14pt;">Bước 4</span>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="top: 35%; right: 5%; width: 25%; text-align: center;">
            <div class="timer-display" data-time="480">08:00</div>
            <div class="timer-controls">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        <style>
            .alg-block {
                padding: 10px 15px; background: rgba(0, 210, 255, 0.1); border: 1px solid var(--primary-blue); 
                border-radius: 5px; font-size: 16pt; cursor: pointer; text-align: center; min-width: 150px;
            }
        </style>
        `
    },
    // Slide 27
    {
        id: 27,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">TỔNG KẾT</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 80%; height: 70%; text-align: left; display: flex; flex-direction: column; justify-content: center;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <p style="color: var(--primary-blue); font-weight: bold; font-size: 28pt; margin-bottom: 20px; text-align: center;">Thuật toán đúng gồm:</p>
                
                <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 15px; margin-bottom: 30px;">
                    <div style="background: rgba(0, 255, 204, 0.1); border: 2px solid #00ffcc; padding: 15px; border-radius: 8px;">1. Nêu điều chưa hiểu</div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc;"></i>
                    <div style="background: rgba(0, 255, 204, 0.1); border: 2px solid #00ffcc; padding: 15px; border-radius: 8px;">2. Nhờ AI giải thích</div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc;"></i>
                    <div style="background: rgba(0, 255, 204, 0.1); border: 2px solid #00ffcc; padding: 15px; border-radius: 8px;">3. Tự làm</div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc;"></i>
                    <div style="background: rgba(0, 255, 204, 0.1); border: 2px solid #00ffcc; padding: 15px; border-radius: 8px;">4. Nhờ AI góp ý</div>
                </div>

                <hr style="border-color: rgba(0, 210, 255, 0.3); margin: 20px 0;">
                <p style="color: #ffeb3b; font-size: 28pt; text-align: center; margin-top: 20px;">
                    <i class="fas fa-microchip"></i> <strong>Thông điệp chính:</strong><br>
                    Muốn học chủ động, AI chỉ xuất hiện ở những bước hỗ trợ chứ không thay thế việc học.
                </p>
            </div>
        </div>
        `
    },
    // Slide 28
    {
        id: 28,
        content: `
        <div class="center-layout abs-element" style="top: 30%; width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 25pt; margin-bottom: 10px;">Giai đoạn 6</div>
            <div class="title editable draggable" style="font-size: 50pt; margin-bottom: 30px;">THỬ NGHIỆM QUY TRÌNH</div>
            <div class="body-text editable draggable" style="font-size: 28pt; max-width: 80%; margin: 0 auto;">Thuật toán đã hoàn thành. Bây giờ các chuyên gia sẽ thử nghiệm trên một nhiệm vụ học tập thực tế.</div>
        </div>
        <div class="abs-element" style="top: 65%; left: 50%; transform: translateX(-50%); font-size: 80pt; color: #00ffcc; opacity: 0.8;">
            <i class="fas fa-flask"></i> <i class="fas fa-laptop-code" style="margin-left: 20px;"></i>
        </div>
        `
    },
    // Slide 29
    {
        id: 29,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">CHUẨN BỊ</div>
        </div>
        <div class="split-layout abs-element" style="top: 30%; width: 100%; display: flex; justify-content: center; gap: 40px; padding: 0 100px;">
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-blue); font-size: 30pt; margin-bottom: 20px;">Dụng cụ</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-clipboard-list"></i></div>
                <div class="body-text editable draggable">Giấy, bút</div>
            </div>
            <div class="dashboard-card hover-glow" style="flex: 1; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center;">
                <h3 class="editable draggable" style="color: var(--primary-purple); font-size: 30pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div class="title" style="font-size: 60pt; margin-bottom: 20px;"><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i><i class="fas fa-user"></i></div>
                <div class="body-text editable draggable">Nhóm 4</div>
            </div>
        </div>
        `
    },
    // Slide 30
    {
        id: 30,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 40%; width: 100%; display: flex; justify-content: center; align-items: center; padding: 0 20px;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 1:</strong><br>Đọc tình huống.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 2:</strong><br>Điền các thông tin để xây dựng thuật toán học các môn học với AI.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable"><strong>Bước 3:</strong><br>Trình bày kết quả.</div>
            </div>
        </div>
        `
    },
    // Slide 31
    {
        id: 31,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">THỰC HÀNH VỚI AI</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px;">Điền thông tin áp dụng thuật toán vào tình huống viết bài văn cụ thể.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 25%; left: 5%; width: 70%; text-align: left; position: relative;">
            <div style="position: absolute; top: 15px; right: 20px; font-size: 30pt; color: rgba(255, 255, 255, 0.4);">
                <i class="fas fa-square-root-alt"></i> <i class="fas fa-atom" style="margin-left: 10px;"></i> <i class="fas fa-globe-americas" style="margin-left: 10px;"></i>
            </div>
            <div class="body-text editable draggable" style="font-size: 20pt;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 15px;">Tình huống: Em chuẩn bị viết bài văn kể về một lần em giúp đỡ người khác.</p>
                <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px;">
                    <p style="text-align: center; font-weight: bold; color: var(--primary-blue); margin-bottom: 10px;">Hoàn thành bảng:</p>
                    <table style="width: 100%; border-collapse: collapse; font-size: 18pt;">
                        <tr>
                            <th style="border: 1px solid var(--primary-blue); padding: 10px; color: #00ffcc; text-align: left; width: 40%;">Bước thuật toán</th>
                            <th style="border: 1px solid var(--primary-blue); padding: 10px; color: #00ffcc; text-align: center; width: 60%;">Áp dụng vào tình huống</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px;">1. Nêu điều mình chưa hiểu</td>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px; text-align: center;"><input type="text" placeholder="Nhập vào đây..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 18pt; width: 90%; font-family: inherit; outline: none;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px;">2. Nhờ AI giải thích/gợi ý</td>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px; text-align: center;"><input type="text" placeholder="Nhập vào đây..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 18pt; width: 90%; font-family: inherit; outline: none;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px;">3. Tự làm</td>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px; text-align: center;"><input type="text" placeholder="Nhập vào đây..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 18pt; width: 90%; font-family: inherit; outline: none;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px;">4. Nhờ AI góp ý</td>
                            <td style="border: 1px solid var(--primary-blue); padding: 10px; text-align: center;"><input type="text" placeholder="Nhập vào đây..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 18pt; width: 90%; font-family: inherit; outline: none;"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="top: 35%; right: 5%; width: 25%; text-align: center;">
            <div class="timer-display" data-time="480">08:00</div>
            <div class="timer-controls">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    // Slide 32
    {
        id: 32,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">ĐÁP ÁN</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 80%; height: 65%; text-align: left; display: flex; flex-direction: column; justify-content: center; border-color: #00ffcc;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.8;">
                <p style="color: var(--primary-blue); font-weight: bold; margin-bottom: 15px;">Kết quả mẫu các bước thực hiện nhiệm vụ ở tình huống trên:</p>
                <ul style="list-style-type: none; margin-left: 10px;">
                    <li style="margin-bottom: 10px;"><strong>Bước 1:</strong> Mình chưa biết mở bài thế nào.</li>
                    <li style="margin-bottom: 10px;"><strong>Bước 2:</strong> "Hãy gợi ý cho mình 3 cách mở bài về một lần giúp đỡ người khác."</li>
                    <li style="margin-bottom: 10px;"><strong>Bước 3:</strong> Chọn một cách phù hợp và tự viết bằng lời văn của mình.</li>
                    <li style="margin-bottom: 10px;"><strong>Bước 4:</strong> "Đây là bài của mình. Hãy góp ý xem phần nào cần chỉnh sửa."</li>
                </ul>
                <hr style="border-color: rgba(0, 255, 204, 0.3); margin: 15px 0;">
                <p style="color: #ffeb3b; font-size: 26pt; text-align: center; margin-top: 15px;">
                    <i class="fas fa-star"></i> AI giúp em học tốt hơn khi em <strong>chủ động suy nghĩ và thực hành</strong>.
                </p>
            </div>
        </div>
        `
    },
    // Slide 33
    {
        id: 33,
        content: `
        <div class="center-layout abs-element" style="top: 30%; width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 25pt; margin-bottom: 10px;">Giai đoạn 7</div>
            <div class="title editable draggable" style="font-size: 50pt; margin-bottom: 30px;">NHẬT KÍ CHUYÊN GIA</div>
            <div class="body-text editable draggable" style="font-size: 28pt; max-width: 80%; margin: 0 auto;">Nhìn nhận lại quá trình làm việc của mình với AI.</div>
        </div>
        <div class="abs-element" style="top: 65%; left: 50%; transform: translateX(-50%); font-size: 80pt; color: #ffeb3b; opacity: 0.8;">
            <i class="fas fa-book"></i> <i class="fas fa-user-circle" style="margin-left: 20px;"></i>
        </div>
        `
    },
    // Slide 34
    {
        id: 34,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">NHẬT KÍ CHUYÊN GIA AI</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px;">Hoàn thành phiếu nhật kí Reflection cá nhân.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 25%; left: 5%; width: 70%; text-align: left; position: relative;">
            <div style="position: absolute; top: 15px; right: 20px; font-size: 40pt; color: rgba(255, 235, 59, 0.4);">
                <i class="fas fa-user-tie"></i>
            </div>
            <div class="body-text editable draggable" style="font-size: 22pt;">
                <p style="color: var(--primary-blue); font-weight: bold; margin-bottom: 15px;">Hoàn thành nhật kí:</p>
                <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary-purple);">
                    <p style="margin-bottom: 15px;">✍️ Điều em học được hôm nay là...</p>
                    <p style="margin-bottom: 15px;">✍️ Từ nay em sẽ thay đổi cách dùng AI như thế nào?</p>
                    <p>✍️ Điều em còn băn khoăn là...</p>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="top: 35%; right: 5%; width: 25%; text-align: center;">
            <div class="timer-display" data-time="180">03:00</div>
            <div class="timer-controls">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    // Slide 35
    {
        id: 35,
        content: `
        <div class="center-layout abs-element" style="top: 30%; width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 25pt; margin-bottom: 10px;">Giai đoạn 8</div>
            <div class="title editable draggable" style="font-size: 50pt; margin-bottom: 30px;">VẬN HÀNH HỆ THỐNG</div>
            <div class="body-text editable draggable" style="font-size: 28pt; max-width: 80%; margin: 0 auto;">Hệ thống học tập chủ động với AI đã hoàn thành. Để kích hoạt hệ thống, mỗi chuyên gia cần đưa ra cam kết sử dụng AI đúng cách.</div>
        </div>
        <div class="abs-element" style="top: 65%; left: 50%; transform: translateX(-50%); font-size: 80pt; color: #00ffcc; opacity: 0.8;">
            <i class="fas fa-server"></i> <i class="fas fa-power-off" style="margin-left: 20px;"></i>
        </div>
        `
    },
    // Slide 36
    {
        id: 36,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">BẢN CAM KẾT HÀNH ĐỘNG</div>
            <div class="subtitle editable draggable" style="font-size: 16pt; margin-top: 5px; color: #ffeb3b;">KÍCH HOẠT CAM KẾT - Hệ thống học tập chủ động với AI đã hoàn thành. Để kích hoạt hệ thống, mỗi chuyên gia cần đưa ra cam kết sử dụng AI đúng cách.</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 70%; height: 75%; text-align: left; position: relative;">
            <div class="body-text editable draggable" style="font-size: 20pt;">
                <p style="color: var(--primary-blue); font-weight: bold; margin-bottom: 15px;">Trong tuần tới em sẽ:</p>
                <div class="checkbox-group" style="margin-left: 20px; line-height: 1.8;">
                    <label class="custom-checkbox"><input type="checkbox"><span class="checkmark"></span> Hỏi AI để hiểu bài.</label><br>
                    <label class="custom-checkbox"><input type="checkbox"><span class="checkmark"></span> Tự suy nghĩ trước khi hỏi AI.</label><br>
                    <label class="custom-checkbox"><input type="checkbox"><span class="checkmark"></span> Tự hoàn thành bài bằng lời của mình.</label><br>
                    <label class="custom-checkbox"><input type="checkbox"><span class="checkmark"></span> Nhờ AI góp ý sau khi hoàn thành.</label><br>
                    <label class="custom-checkbox"><input type="checkbox"><span class="checkmark"></span> Không sao chép nguyên văn câu trả lời của AI.</label>
                </div>
            </div>
            
            <div style="position: absolute; bottom: 30px; right: 30px; text-align: center;">
                <div style="margin-bottom: 10px;">
                    <input type="text" id="class-name-input" placeholder="Nhập tên lớp..." style="padding: 10px; font-size: 18pt; background: rgba(0,0,0,0.5); border: 1px solid var(--primary-blue); color: #fff; border-radius: 5px; width: 250px; text-align: center;">
                </div>
                <button id="btn-commit" class="interactive-btn" style="font-size: 20pt; padding: 15px 30px; background: rgba(0, 255, 204, 0.2); border: 2px solid #00ffcc; color: #00ffcc; cursor: pointer; border-radius: 8px;">CAM KẾT</button>
            </div>
            <!-- Container for stamp -->
            <div id="stamp-container" style="position: absolute; bottom: 80px; right: 40px; pointer-events: none; opacity: 0; transform: scale(3) rotate(-20deg); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                <div style="border: 5px solid #ff3333; color: #ff3333; font-size: 30pt; font-weight: bold; padding: 10px 20px; border-radius: 10px; background: rgba(255, 255, 255, 0.9);">ĐÃ CAM KẾT</div>
            </div>
        </div>
        `
    },
    // Slide 37
    {
        id: 37,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable">TỔNG KẾT</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 70%; height: 70%; text-align: left; display: flex; flex-direction: column; justify-content: center; border-color: var(--primary-purple);">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <ul style="list-style-type: disc; margin-left: 30px;">
                    <li style="margin-bottom: 15px;">AI là công cụ hỗ trợ học tập, <strong>không thay thế người học</strong>.</li>
                    <li style="margin-bottom: 15px; color: #ffeb3b;">Muốn học chủ động với AI, hãy <strong>hỏi để hiểu chứ không hỏi để chép</strong>.</li>
                    <li>Quy trình học chủ động gồm 4 bước:<br>
                        <span style="color: #00ffcc; font-size: 22pt;">(1) Nêu điều mình chưa hiểu<br>
                        (2) Nhờ AI giải thích hoặc gợi ý<br>
                        (3) Tự làm<br>
                        (4) Nhờ AI góp ý</span>
                    </li>
                </ul>
            </div>
        </div>
        `
    },
    // Slide 38
    {
        id: 38,
        content: `
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%; z-index: 2;">
            <div class="title editable draggable" style="color: #ffeb3b; font-size: 40pt;"><i class="fas fa-award"></i> CHỨNG NHẬN HOÀN THÀNH NHIỆM VỤ</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 15px; max-width: 80%; margin-left: auto; margin-right: auto;">Chúc mừng các chuyên gia công nghệ đã xuất sắc kích hoạt thành công hệ thuật toán học tập chủ động cùng AI.</div>
        </div>
        <div class="center-layout abs-element" style="z-index: 2; width: 60%; text-align: center;">
            <div style="background: rgba(0, 0, 0, 0.6); padding: 40px; border: 3px solid #ffeb3b; border-radius: 15px; box-shadow: 0 0 30px rgba(255, 235, 59, 0.4);">
                <input type="text" id="team-name-input" placeholder="Nhập tên nhóm..." style="width: 80%; padding: 20px; font-size: 30pt; background: transparent; border: none; border-bottom: 3px dashed #00d2ff; color: #fff; text-align: center; outline: none; margin-bottom: 30px;">
                <br>
                <button id="btn-finish" class="interactive-btn" style="font-size: 25pt; padding: 15px 40px; background: #ffeb3b; color: #000; border: none; border-radius: 10px; cursor: pointer; font-weight: bold; box-shadow: 0 0 20px rgba(255, 235, 59, 0.6);">HOÀN THÀNH</button>
            </div>
        </div>
        <div class="abs-element" style="bottom: 20px; right: 30px; font-size: 50pt; color: #ff3333; opacity: 0.8; z-index: 1;">
            <i class="fas fa-stamp"></i>
        </div>
        `
    }
];
