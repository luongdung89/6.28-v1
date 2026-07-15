const slides = [
    {
        id: 1,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="font-weight: bold; font-size: 16pt; margin-bottom: 20px;">Bài 6.28</div>
            <div class="title editable draggable typewriter-effect" style="font-size: 44pt;">Dùng AI thế nào để học chủ động hơn?</div>
        </div>
        `
    },
    {
        id: 2,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">MỤC TIÊU BÀI HỌC</div>
        </div>
        <div class="center-layout abs-element" style="width: 90%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 31%; height: 400px; border-color: #00ffcc; text-align: left;">
                <h3 style="color: #00ffcc; text-align: center; font-size: 24pt; margin-bottom: 20px;">Kiến thức</h3>
                <ul style="font-size: 18pt; line-height: 1.8; color: #fff; margin-left: 20px;">
                    <li>Hiểu AI có thể hỗ trợ tìm hiểu kiến thức mới.</li>
                    <li>Phân biệt AI hỗ trợ và AI làm thay.</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 31%; height: 400px; border-color: #ffeb3b; text-align: left;">
                <h3 style="color: #ffeb3b; text-align: center; font-size: 24pt; margin-bottom: 20px;">Kỹ năng</h3>
                <ul style="font-size: 18pt; line-height: 1.8; color: #fff; margin-left: 20px;">
                    <li>Biết trao đổi với AI để hỗ trợ học tập.</li>
                    <li>Vận dụng quy trình 4 bước học chủ động cùng AI.</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 31%; height: 400px; border-color: #ff3333; text-align: left;">
                <h3 style="color: #ff3333; text-align: center; font-size: 24pt; margin-bottom: 20px;">Thái độ</h3>
                <ul style="font-size: 18pt; line-height: 1.8; color: #fff; margin-left: 20px;">
                    <li>Sử dụng AI trung thực, không phụ thuộc vào AI.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 3,
        content: `
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center; border-color: var(--primary-purple);">
            <div class="title editable draggable" style="font-size: 36pt; margin-bottom: 20px; color: #ffeb3b;">Chuyên gia Công nghệ AI</div>
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.6;">
                Nhiệm vụ: Điều tra nguyên nhân học sinh phụ thuộc AI và xây dựng quy trình sử dụng AI đúng cách.
            </div>
        </div>
        `
    },
    {
        id: 4,
        content: `
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center; border-color: #ffeb3b;">
            <div class="title editable draggable" style="font-size: 26pt; margin-bottom: 20px; color: #00ffcc;">CÂU HỎI LỚN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; font-weight: bold; line-height: 1.6;">
                Làm thế nào để sử dụng AI để học tốt hơn mà không phụ thuộc vào AI?
            </div>
        </div>
        `
    },
    {
        id: 5,
        content: `
        <div class="abs-element slide-bg" style="background-image: url('assets/slide5_bg.png'); z-index: -1;"></div>
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 26pt; color: #ff3333;">CẢNH BÁO HỆ THỐNG</div>
        </div>
        <div class="center-layout abs-element dashboard-card alert-box" style="width: 80%; text-align: center; border-color: #ff3333; animation: flash-alert 0.5s infinite alternate; background: rgba(50,0,0,0.8);">
            <div class="body-text editable draggable" style="font-size: 20pt; color: #ffeb3b; font-weight: bold; line-height: 1.8;">
                Trung tâm Điều phối Công nghệ phát hiện nhiều học sinh đang dùng AI làm hộ bài tập.<br>
                Hệ thống cảnh báo: "Mức độ phụ thuộc AI đang tăng cao."<br>
                Đội Chuyên gia Công nghệ AI được giao nhiệm vụ điều tra nguyên nhân và xây dựng quy trình giúp học sinh học chủ động cùng AI.
            </div>
        </div>
        <audio autoplay src="https://assets.mixkit.co/sfx/preview/mixkit-warning-alarm-buzzer-991.mp3"></audio>
        <style>
        @keyframes flash-alert { from { box-shadow: 0 0 10px #ff3333; } to { box-shadow: 0 0 50px #ff3333; } }
        </style>
        `
    },
    {
        id: 6,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">GIAI ĐOẠN 1</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Mở khoá nhiệm vụ</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Phân tích tình huống của bạn Bách để tìm nguyên nhân bị giáo viên phê bình.</div>
        </div>
        `
    },
    {
        id: 7,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 24pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 24pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Nhóm 2
                </div>
            </div>
        </div>
        `
    },
    {
        id: 8,
        content: `
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%;">
            <div class="title editable draggable" style="font-size: 26pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="center-layout abs-element" style="width: 90%; display: flex; justify-content: space-between; align-items: center; top: 55%;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 1:</strong><br>Quan sát tình huống.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 2:</strong><br>Thảo luận theo cặp.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 3:</strong><br>Chia sẻ kết quả.</div>
            </div>
        </div>
        `
    },
    {
        id: 9,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">Điều tra sự cố AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Quan sát tình huống, thảo luận và tìm nguyên nhân.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 10%; width: 80%; height: auto; padding: 15px 30px; text-align: left; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.3;">
                Bạn Bách được giao viết bài văn kể về một trải nghiệm đáng nhớ.<br>
                Vì sắp đến giờ nộp bài nên Bách nhờ AI viết hộ.<br>
                AI viết một bài văn rất hay kể về chuyến đi trượt tuyết ở Sa Pa.<br>
                Tuy nhiên, giáo viên lại cho Bách điểm không tốt và phê bình Bách trước lớp.
                <hr style="border-color: rgba(0, 210, 255, 0.3); margin: 10px 0;">
                <p style="color: #ffeb3b; margin-bottom: 5px;"><strong>Câu hỏi:</strong></p>
                <ol style="margin-left: 30px; font-size: 24pt; line-height: 1.3;">
                    <li>Vì sao giáo viên cho Bách điểm không tốt và phê bình Bách?</li>
                    <li>Vì sao giáo viên phát hiện bài văn của Bách là do AI viết hộ?</li>
                </ol>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 5%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center;">
            <div class="timer-display" data-time="300" style="font-family: monospace; font-size: 50pt;">05:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 10,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">KẾT QUẢ</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 85%; text-align: left; border-color: #00ffcc;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <ul style="margin-left: 30px;">
                    <li style="margin-bottom: 15px;">Thầy giáo cho điểm kém và phê bình Bách vì Bách đã dùng AI để viết hộ bài văn.</li>
                    <li>Thầy giáo phát hiện ra vì bài viết không đúng trải nghiệm thật, nội dung không đúng thực tế, thông tin trượt tuyết ở Sa Pa vào mùa đông là thông tin AI tạo ra không chính xác.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 11,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">GIAI ĐOẠN 2</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Nhận yêu cầu từ khách hàng</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Tiếp nhận yêu cầu từ khách hàng<br>để xác định vấn đề cần giải quyết.</div>
        </div>
        `
    },
    {
        id: 12,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 26pt;">HỒ SƠ NHIỆM VỤ</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 18pt; text-align: center; display: flex; justify-content: center; width: 100%;">
                <button onclick="document.getElementById('task-modal').style.display='flex'" class="interactive-btn" style="font-size: 18pt; padding: 15px 30px; background: rgba(0, 255, 204, 0.2); border: 2px solid #00ffcc; color: #00ffcc; cursor: pointer; border-radius: 8px;"><i class="fas fa-folder-open"></i> TRUY CẬP HỒ SƠ</button>
            </div>
        </div>
        <div id="task-modal" class="modal-overlay" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 100; align-items: center; justify-content: center;">
            <div class="dashboard-card" style="width: 80%; text-align: left; background: var(--bg-dark); border-color: #00ffcc; position: relative; padding: 40px;">
                <button onclick="document.getElementById('task-modal').style.display='none'" style="position: absolute; top: 15px; right: 20px; font-size: 24pt; background: transparent; border: none; color: #fff; cursor: pointer;">&times;</button>
                <h2 style="color: #ffeb3b; font-size: 32pt; margin-bottom: 20px; text-align: center;">NHIỆM VỤ 02</h2>
                <div style="font-size: 24pt; line-height: 1.6; color: #fff;">
                    Trung tâm AI đang phát triển phiên bản AI hỗ trợ học tập mới. Tuy nhiên hệ thống liên tục ghi nhận học sinh sử dụng AI sai cách.<br>
                    Các chuyên gia công nghệ hãy nghiên cứu cách học chủ động với AI, không phụ thuộc AI.<br><br>
                    <span style="color: #00ffcc;">Câu hỏi điều tra:</span>
                    <ul style="margin-left: 40px;">
                        <li>Vai trò của AI là gì?</li>
                        <li>Nên dùng AI hỗ trợ những việc gì?</li>
                        <li>Sử dụng AI như thế nào để không bị phụ thuộc?</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 13,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">GIAI ĐOẠN 3</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Thu thập dữ liệu</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Phân loại các cách sử dụng AI để tìm ra những việc AI nên hỗ trợ người học.</div>
        </div>
        `
    },
    {
        id: 14,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 24pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Bộ thẻ thông tin</li>
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 24pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Nhóm 4
                </div>
            </div>
        </div>
        `
    },
    {
        id: 15,
        content: `
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%;">
            <div class="title editable draggable" style="font-size: 26pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="center-layout abs-element" style="width: 90%; display: flex; justify-content: space-between; align-items: center; top: 55%;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 1:</strong><br>Đọc các thẻ thông tin.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 2:</strong><br>Thảo luận và phân loại.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 3:</strong><br>Chia sẻ kết quả.</div>
            </div>
        </div>
        `
    },
    {
        id: 16,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">AI nên làm gì?</div>
            <div class="subtitle editable draggable" style="font-size: 28pt; margin-top: 10px; color: #00ffcc;">Đọc các thẻ và phân loại vào đúng&nbsp;nhóm.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 5%; width: 90%; height: 480px; text-align: left; position: absolute; padding: 15px 35px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.3;">
                <div class="cards-pool" style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 10px; height: 115px; border: 2px dashed rgba(255,255,255,0.15); border-radius: 12px; padding: 6px; box-sizing: border-box; align-items: center; background: rgba(255,255,255,0.02); width: 100%;">
                    <div class="alg-block draggable" style="position: relative; z-index: 10; padding: 0; background: none; border: 2px solid #1e2a44; border-radius: 12px; width: 140px; height: 105px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="assets/6.28-V3-09-the-giai-thich-bai.png" style="position: absolute; width: 116.3%; height: 155%; top: -28%; left: -8.1%; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="position: relative; z-index: 10; padding: 0; background: none; border: 2px solid #1e2a44; border-radius: 12px; width: 140px; height: 105px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="assets/6.28-V3-10-the-viet-ho-bai-van.png" style="position: absolute; width: 116.3%; height: 155%; top: -28%; left: -8.1%; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="position: relative; z-index: 10; padding: 0; background: none; border: 2px solid #1e2a44; border-radius: 12px; width: 140px; height: 105px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="assets/6.28-V3-11-the-kiem-tra-dap-an.png" style="position: absolute; width: 116.3%; height: 155%; top: -28%; left: -8.1%; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="position: relative; z-index: 10; padding: 0; background: none; border: 2px solid #1e2a44; border-radius: 12px; width: 140px; height: 105px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="assets/6.28-V3-12-the-cho-danh-y.png" style="position: absolute; width: 116.3%; height: 155%; top: -28%; left: -8.1%; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="position: relative; z-index: 10; padding: 0; background: none; border: 2px solid #1e2a44; border-radius: 12px; width: 140px; height: 105px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="assets/6.28-V3-13-the-lam-luon-bai-tap.png" style="position: absolute; width: 116.3%; height: 155%; top: -28%; left: -8.1%; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="position: relative; z-index: 10; padding: 0; background: none; border: 2px solid #1e2a44; border-radius: 12px; width: 140px; height: 105px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="assets/6.28-V3-14-the-goi-y-tu-vung.png" style="position: absolute; width: 116.3%; height: 155%; top: -28%; left: -8.1%; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="position: relative; z-index: 10; padding: 0; background: none; border: 2px solid #1e2a44; border-radius: 12px; width: 140px; height: 105px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                        <img src="assets/6.28-V3-15-the-dat-cau-hoi.png" style="position: absolute; width: 116.3%; height: 155%; top: -28%; left: -8.1%; pointer-events: none;" draggable="false">
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                    <div class="drop-zone" id="zone-support" style="width: 48%; height: 260px; min-height: 260px; border: 3px dashed #00ffcc; border-radius: 10px; padding: 10px; position: relative; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-content: flex-start; background: rgba(0, 255, 204, 0.05); box-sizing: border-box;">
                        <span style="position: absolute; top: -18px; left: 10px; background: var(--bg-dark); color: #00ffcc; font-weight: bold; padding: 0 10px; font-size: 15pt;">AI NÊN HỖ TRỢ</span>
                    </div>
                    <div class="drop-zone" id="zone-avoid" style="width: 48%; height: 260px; min-height: 260px; border: 3px dashed #ff3333; border-radius: 10px; padding: 10px; position: relative; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-content: flex-start; background: rgba(255, 51, 51, 0.05); box-sizing: border-box;">
                        <span style="position: absolute; top: -18px; left: 10px; background: var(--bg-dark); color: #ff3333; font-weight: bold; padding: 0 10px; font-size: 15pt;">KHÔNG NÊN YÊU CẦU AI</span>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-top: 15px; gap: 20px; width: 100%;">
                    <button id="btn-check-answers" style="padding: 10px 24px; font-size: 15pt; background: #00ffcc; color: #000; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-family: 'Inter', sans-serif; box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);">KIỂM TRA ĐÁP ÁN</button>
                    <button id="btn-reset-game" style="padding: 10px 24px; font-size: 15pt; background: #ff3333; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-family: 'Inter', sans-serif; display: none;">LÀM LẠI</button>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center;">
            <div class="timer-display" data-time="180" style="font-family: monospace; font-size: 50pt;">03:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 17,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">TỔNG KẾT PHIÊN LÀM VIỆC</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <ul style="margin-left: 30px;">
                    <li style="margin-bottom: 15px;">AI giúp người học hiểu bài và phát triển năng lực.</li>
                    <li>AI không làm thay nhiệm vụ học tập của người học.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 18,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">GIAI ĐOẠN 4</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Phân tích thông tin</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Phân tích các câu lệnh và chỉnh sửa để AI hỗ trợ học tập thay vì làm thay.</div>
        </div>
        `
    },
    {
        id: 19,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 24pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 24pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Nhóm 2
                </div>
            </div>
        </div>
        `
    },
    {
        id: 20,
        content: `
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%;">
            <div class="title editable draggable" style="font-size: 26pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="center-layout abs-element" style="width: 90%; display: flex; justify-content: space-between; align-items: center; top: 55%;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 1:</strong><br>Đọc các câu lệnh.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 2:</strong><br>Viết lại câu lệnh.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 3:</strong><br>Chia sẻ và nhận xét.</div>
            </div>
        </div>
        `
    },
    {
        id: 21,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">Sửa mã lệnh AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Chỉnh sửa các câu lệnh để AI hỗ trợ việc học.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 5%; width: 90%; height: 450px; text-align: left; position: absolute; padding: 25px 30px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 22pt; line-height: 1.4; width: 100%;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 20px; text-align: center; font-size: 24pt;">Đề bài: Hãy biến các câu lệnh "làm hộ" thành câu lệnh "giúp học".</p>
                <div style="display: flex; flex-direction: column; gap: 15px; width: 100%;">
                    <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                        <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 480px; flex-shrink: 0;">1. Viết hộ bài văn</span>
                        <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; margin: 0 30px; flex-shrink: 0;"></i>
                        <input type="text" placeholder="Nhập câu lệnh giúp em tự học..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none;">
                    </div>
                    <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                        <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 480px; flex-shrink: 0;">2. Làm hết bài tập</span>
                        <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; margin: 0 30px; flex-shrink: 0;"></i>
                        <input type="text" placeholder="Nhập câu lệnh giúp em tự học..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none;">
                    </div>
                    <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                        <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 480px; flex-shrink: 0;">3. Cho đáp án luôn</span>
                        <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; margin: 0 30px; flex-shrink: 0;"></i>
                        <input type="text" placeholder="Nhập câu lệnh giúp em tự học..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none;">
                    </div>
                    <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                        <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 480px; flex-shrink: 0;">4. Trả lời hết câu hỏi</span>
                        <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; margin: 0 30px; flex-shrink: 0;"></i>
                        <input type="text" placeholder="Nhập câu lệnh giúp em tự học..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none;">
                    </div>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 5%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center;">
            <div class="timer-display" data-time="600" style="font-family: monospace; font-size: 50pt;">10:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 22,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">KẾT QUẢ</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: left; border-color: #00ffcc;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8; width: 100%;">
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <tr>
                        <th style="border: 2px solid #00ffcc; padding: 10px; color: #ffeb3b;">Câu lệnh ban đầu</th>
                        <th style="border: 2px solid #00ffcc; padding: 10px; color: #ffeb3b;">Câu lệnh học chủ động</th>
                    </tr>
                    <tr>
                        <td style="border: 2px solid #00ffcc; padding: 10px; color: #ff3333;">Viết hộ bài văn</td>
                        <td style="border: 2px solid #00ffcc; padding: 10px; color: #00ffcc;">Gợi ý dàn ý</td>
                    </tr>
                    <tr>
                        <td style="border: 2px solid #00ffcc; padding: 10px; color: #ff3333;">Làm hết bài tập Toán</td>
                        <td style="border: 2px solid #00ffcc; padding: 10px; color: #00ffcc;">Giải thích cách làm</td>
                    </tr>
                    <tr>
                        <td style="border: 2px solid #00ffcc; padding: 10px; color: #ff3333;">Cho đáp án luôn</td>
                        <td style="border: 2px solid #00ffcc; padding: 10px; color: #00ffcc;">Kiểm tra bài làm</td>
                    </tr>
                    <tr>
                        <td style="border: 2px solid #00ffcc; padding: 10px; color: #ff3333;">Trả lời hết câu hỏi</td>
                        <td style="border: 2px solid #00ffcc; padding: 10px; color: #00ffcc;">Đặt câu hỏi để tự trả lời</td>
                    </tr>
                </table>
            </div>
        </div>
        `
    },
    {
        id: 23,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">TỔNG KẾT PHIÊN LÀM VIỆC</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <ul style="margin-left: 30px;">
                    <li style="margin-bottom: 15px;">Muốn học chủ động với AI, hãy hỏi để hiểu.</li>
                    <li style="margin-bottom: 15px;">Không hỏi AI để chép đáp án.</li>
                    <li>AI hỗ trợ quá trình học, không làm thay người học.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 24,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">GIAI ĐOẠN 5</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Đóng gói thuật toán</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Hoàn thiện quy trình học chủ động cùng AI để chuẩn bị đưa vào thử nghiệm.</div>
        </div>
        `
    },
    {
        id: 25,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 24pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 24pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Nhóm 4
                </div>
            </div>
        </div>
        `
    },
    {
        id: 26,
        content: `
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%;">
            <div class="title editable draggable" style="font-size: 26pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="center-layout abs-element" style="width: 90%; display: flex; justify-content: space-between; align-items: center; top: 55%;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 1:</strong><br>Quan sát sơ đồ.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 2:</strong><br>Thảo luận và điền các bước.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 3:</strong><br>Chia sẻ kết quả.</div>
            </div>
        </div>
        `
    },
    {
        id: 27,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 40pt;">Lắp ráp quy trình học chủ động</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px; color: #00ffcc;">Sắp xếp các mảnh ghép thuật toán học tập chủ động với AI theo đúng trình tự:</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 5%; width: 90%; height: 580px; text-align: left; position: absolute; padding: 20px 25px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
            <div class="body-text editable draggable" style="font-size: 16pt; width: 100%;">
                <!-- 6 mảnh ghép kéo thả có hình ảnh -->
                <div id="slide27-cards-pool" style="display: flex; gap: 15px; justify-content: center; margin-bottom: 15px; flex-wrap: nowrap; min-height: 165px; width: 100%;">
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.1); border: 2px solid var(--primary-purple); padding: 4px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 155px; height: 155px; cursor: grab; z-index: 10; box-sizing: border-box;">
                        <img src="assets/6.28-V4-01-neu-dieu-chua-hieu.png?v=2" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.1); border: 2px solid var(--primary-purple); padding: 4px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 155px; height: 155px; cursor: grab; z-index: 10; box-sizing: border-box;">
                        <img src="assets/6.28-V4-02-nho-ai-giai-thich.png?v=2" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.1); border: 2px solid var(--primary-purple); padding: 4px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 155px; height: 155px; cursor: grab; z-index: 10; box-sizing: border-box;">
                        <img src="assets/6.28-V4-03-tu-lam.png?v=2" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.1); border: 2px solid var(--primary-purple); padding: 4px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 155px; height: 155px; cursor: grab; z-index: 10; box-sizing: border-box;">
                        <img src="assets/6.28-V4-04-nho-ai-gop-y.png?v=2" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.1); border: 2px solid var(--primary-purple); padding: 4px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 155px; height: 155px; cursor: grab; z-index: 10; box-sizing: border-box;">
                        <img src="assets/6.28-V4-05-bo-qua-tu-lam.png?v=2" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px; pointer-events: none;" draggable="false">
                    </div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.1); border: 2px solid var(--primary-purple); padding: 4px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 155px; height: 155px; cursor: grab; z-index: 10; box-sizing: border-box;">
                        <img src="assets/6.28-V4-06-chep-nguyen-bai-ai.png?v=2" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px; pointer-events: none;" draggable="false">
                    </div>
                </div>
                <!-- Sơ đồ quy trình 4 ô drop-zone hình vuông ở dưới -->
                <div style="display: flex; justify-content: center; align-items: center; gap: 15px; margin-top: 10px; width: 100%;">
                    <div class="drop-zone" style="width: 165px; height: 165px; border: 2px dashed #00ffcc; border-radius: 8px; padding: 5px; background: rgba(0, 255, 204, 0.05); display: flex; align-items: center; justify-content: center; flex-direction: column; box-sizing: border-box; position: relative;">
                        <span style="color: #00ffcc; font-size: 13pt; font-weight: bold; position: absolute; top: 5px; z-index: 1;">Bước 1</span>
                    </div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; display: flex; align-items: center;"></i>
                    <div class="drop-zone" style="width: 165px; height: 165px; border: 2px dashed #00ffcc; border-radius: 8px; padding: 5px; background: rgba(0, 255, 204, 0.05); display: flex; align-items: center; justify-content: center; flex-direction: column; box-sizing: border-box; position: relative;">
                        <span style="color: #00ffcc; font-size: 13pt; font-weight: bold; position: absolute; top: 5px; z-index: 1;">Bước 2</span>
                    </div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; display: flex; align-items: center;"></i>
                    <div class="drop-zone" style="width: 165px; height: 165px; border: 2px dashed #00ffcc; border-radius: 8px; padding: 5px; background: rgba(0, 255, 204, 0.05); display: flex; align-items: center; justify-content: center; flex-direction: column; box-sizing: border-box; position: relative;">
                        <span style="color: #00ffcc; font-size: 13pt; font-weight: bold; position: absolute; top: 5px; z-index: 1;">Bước 3</span>
                    </div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; display: flex; align-items: center;"></i>
                    <div class="drop-zone" style="width: 165px; height: 165px; border: 2px dashed #00ffcc; border-radius: 8px; padding: 5px; background: rgba(0, 255, 204, 0.05); display: flex; align-items: center; justify-content: center; flex-direction: column; box-sizing: border-box; position: relative;">
                        <span style="color: #00ffcc; font-size: 13pt; font-weight: bold; position: absolute; top: 5px; z-index: 1;">Bước 4</span>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-top: 20px; gap: 20px; width: 100%;">
                    <button id="slide27-btn-check" style="padding: 8px 24px; font-size: 14pt; background: #00ffcc; color: #000; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-family: 'Inter', sans-serif; box-shadow: 0 0 10px rgba(0, 255, 204, 0.3);">KIỂM TRA ĐÁP ÁN</button>
                    <button id="slide27-btn-reset" style="padding: 8px 24px; font-size: 14pt; background: #ff3333; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-family: 'Inter', sans-serif; display: none;">LÀM LẠI</button>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center;">
            <div class="timer-display" data-time="300" style="font-family: monospace; font-size: 50pt;">05:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 28,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">TỔNG KẾT PHIÊN LÀM VIỆC</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <ul style="margin-left: 30px;">
                    <li style="margin-bottom: 15px;">Muốn học chủ động với AI, hãy thực hiện theo quy trình 4 bước.</li>
                    <li>Quy trình giúp AI hỗ trợ hiệu quả mà không làm thay người học.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 29,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">GIAI ĐOẠN 6</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Thử nghiệm quy trình</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Áp dụng quy trình học chủ động cùng AI để giải quyết một tình huống học tập.</div>
        </div>
        `
    },
    {
        id: 30,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 24pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Phiếu tình huống</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 24pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Cá nhân
                </div>
            </div>
        </div>
        `
    },
    {
        id: 31,
        content: `
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%;">
            <div class="title editable draggable" style="font-size: 26pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="center-layout abs-element" style="width: 90%; display: flex; justify-content: space-between; align-items: center; top: 55%;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 1:</strong><br>Đọc tình huống.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 2:</strong><br>Hoàn thành 4 bước trên phiếu.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 150px; display: flex; align-items: center; justify-content: center;">
                <div class="body-text editable draggable" style="font-size: 18pt;"><strong>Bước 3:</strong><br>Chia sẻ kết quả.</div>
            </div>
        </div>
        `
    },
    {
        id: 32,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">Thử nghiệm quy trình<br>học chủ động</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Áp dụng quy trình 4 bước vào tình huống được giao.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 230px; left: 10%; width: 80%; height: 450px; text-align: left; position: absolute; padding: 30px 40px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 22pt; line-height: 1.4; width: 100%;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 15px; font-size: 24pt;">Tình huống: Em sắp viết bài văn: "Kể về người bạn thân."</p>
                <p style="margin-bottom: 15px; font-size: 22pt;">Hãy hoàn thành quy trình:</p>
                <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 15px; width: 100%;">
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Bước 1: Nêu điều chưa hiểu:</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Bước 2: Câu hỏi gửi AI:</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Bước 3: Em tự thực hiện:</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Bước 4: Nhờ AI góp ý:</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                </ul>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center;">
            <div class="timer-display" data-time="420" style="font-family: monospace; font-size: 50pt;">07:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 33,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">KẾT QUẢ</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: left; border-color: #00ffcc;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <p style="margin-bottom: 15px;">Ví dụ:</p>
                <ul style="list-style-type: disc; margin-left: 30px;">
                    <li style="margin-bottom: 10px;">Bước 1: Mình chưa biết mở bài thế nào.</li>
                    <li style="margin-bottom: 10px;">Bước 2: Hãy gợi ý cho mình 3 cách mở bài khi kể về người bạn thân.</li>
                    <li style="margin-bottom: 10px;">Bước 3: Tự viết bài bằng lời văn của mình.</li>
                    <li>Bước 4: Đây là bài của mình, hãy góp ý giúp mình.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 34,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">GIAI ĐOẠN 7</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Nhật ký chuyên gia</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Tổng kết kết quả sau khi thử nghiệm quy trình và ghi lại những điều đã học được.</div>
        </div>
        `
    },
    {
        id: 35,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">Nhật ký chuyên gia</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Hoàn thành Nhật ký chuyên gia sau khi kết thúc các nhiệm vụ.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 230px; left: 10%; width: 80%; height: 450px; text-align: left; position: absolute; padding: 30px 40px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 22pt; line-height: 1.4; width: 100%;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 25px; font-size: 24pt;">Hoàn thành nhật ký của em vào sổ tay:</p>
                <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 20px; width: 100%;">
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Điều em học được hôm nay là...</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Em sẽ sử dụng AI như thế nào...</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Điều em muốn thay đổi là...</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                </ul>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center;">
            <div class="timer-display" data-time="180" style="font-family: monospace; font-size: 50pt;">03:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 36,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">GIAI ĐOẠN 8</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Vận hành hệ thống</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Lập kế hoạch áp dụng quy trình học chủ động cùng AI vào thực tế học tập và đưa hệ thống học chủ động vào vận hành.</div>
        </div>
        `
    },
    {
        id: 37,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">THỬ THÁCH TUẦN</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Hãy vận hành hệ thống học chủ động cùng AI bằng cách áp dụng vào các môn học trong tuần.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 260px; left: 10%; width: 80%; height: 420px; text-align: left; position: absolute; padding: 30px 40px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.4;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 10px;">Thử thách "Học chủ động cùng AI"</p>
                <p style="margin-bottom: 8px;">Trong tuần này, hãy chọn các môn học (Toán, Khoa học, Tiếng Anh, Lịch sử, Địa lí,...) và áp dụng quy trình học chủ động cùng AI.</p>
                <p style="margin-bottom: 8px;">Thực hiện đầy đủ 4 bước:</p>
                <ul style="list-style-type: disc; margin-left: 30px; font-size: 18pt;">
                    <li style="margin-bottom: 5px;">Nêu điều em chưa hiểu.</li>
                    <li style="margin-bottom: 5px;">Nhờ AI giải thích hoặc gợi ý.</li>
                    <li style="margin-bottom: 5px;">Tự hoàn thành bài.</li>
                    <li>Nhờ AI góp ý.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 38,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">TỔNG KẾT PHIÊN LÀM VIỆC</div>
        </div>
        <div class="center-layout abs-element" style="width: 70%; text-align: left;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <ul style="margin-left: 30px;">
                    <li style="margin-bottom: 15px;">AI là công cụ hỗ trợ học tập, không thể thay thế suy nghĩ và trải nghiệm của người học.</li>
                    <li style="margin-bottom: 15px;">Muốn học chủ động với AI, hãy hỏi để hiểu, không hỏi để chép.</li>
                    <li>Quy trình học chủ động cùng AI gồm 4 bước:
                        <ul style="list-style-type: circle; margin-left: 30px; margin-top: 10px; font-size: 22pt; color: #00ffcc;">
                            <li>Nêu điều chưa hiểu.</li>
                            <li>Nhờ AI giải thích hoặc gợi ý.</li>
                            <li>Tự hoàn thành nhiệm vụ học tập.</li>
                            <li>Nhờ AI góp ý để hoàn thiện.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 39,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">BẢN CAM KẾT HÀNH ĐỘNG</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 5px; color: #ffeb3b;">Hãy đưa hệ thống học chủ động cùng AI vào thực tế và cam kết sử dụng AI đúng cách trong học tập.</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 260px; left: 10%; width: 80%; padding: 30px; text-align: left; position: absolute;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 30px;">
                <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.4; width: 62%;">
                    <p style="color: #00ffcc; font-weight: bold; margin-bottom: 15px;">Em cam kết:</p>
                    <div class="checkbox-group" style="margin-left: 10px; line-height: 1.5;">
                        <label class="custom-checkbox" style="font-size: 16pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Chỉ sử dụng AI để hỗ trợ học tập, không nhờ AI làm thay bài tập.</label>
                        <label class="custom-checkbox" style="font-size: 16pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Hỏi AI để hiểu kiến thức, không hỏi để chép đáp án.</label>
                        <label class="custom-checkbox" style="font-size: 16pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Tự hoàn thành bài học bằng khả năng của mình trước khi nhờ AI góp ý.</label>
                        <label class="custom-checkbox" style="font-size: 16pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Sử dụng AI trung thực, có trách nhiệm và đúng mục đích học tập.</label>
                    </div>
                </div>
                
                <div style="width: 35%; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 15px; background: rgba(0,0,0,0.3); padding: 25px 20px; border-radius: 10px; border: 1px dashed var(--primary-blue); box-sizing: border-box;">
                    <div style="margin-bottom: 5px; width: 100%;">
                        <input type="text" id="class-name-input" placeholder="Nhập tên lớp..." style="padding: 10px; font-size: 16pt; background: rgba(0,0,0,0.5); border: 1px solid var(--primary-blue); color: #fff; border-radius: 5px; width: 100%; text-align: center; box-sizing: border-box;">
                    </div>
                    <button id="btn-commit" class="interactive-btn" style="font-size: 18pt; padding: 12px 24px; background: rgba(0, 255, 204, 0.2); border: 2px solid #00ffcc; color: #00ffcc; cursor: pointer; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: center; text-align: center;">CAM KẾT</button>
                </div>
            </div>
            <!-- Container for stamp -->
            <div id="stamp-container" style="position: absolute; bottom: 80px; right: 40px; pointer-events: none; opacity: 0; transform: scale(3) rotate(-20deg); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                <div style="border: 5px solid #ff3333; color: #ff3333; font-size: 30pt; font-weight: bold; padding: 10px 20px; border-radius: 10px; background: rgba(255, 255, 255, 0.9);">ĐÃ CAM KẾT</div>
            </div>
        </div>
        `
    },
    {
        id: 40,
        content: `
        <div class="abs-element" style="background: rgba(0,0,0,0.8); width: 100%; height: 100%; z-index: -1;"></div>
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%; z-index: 2;">
            <div class="title editable draggable" style="color: #ffeb3b; font-size: 36pt;"><i class="fas fa-award"></i> CHỨNG NHẬN HOÀN THÀNH NHIỆM VỤ</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px; max-width: 80%; margin-left: auto; margin-right: auto; line-height: 1.4;">Chúc mừng các Chuyên gia Công nghệ AI đã hoàn thành xuất sắc nhiệm vụ và sẵn sàng vận hành hệ thống học chủ động cùng AI.</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 260px; left: 50%; transform: translateX(-50%); z-index: 2; width: 60%; text-align: center; padding: 25px 30px; box-sizing: border-box; border: 2px solid #ffeb3b;">
            <div style="font-size: 24pt; color: #fff; margin-bottom: 15px; font-weight: bold;">Trao chứng nhận cho</div>
            <div style="display: flex; align-items: center; justify-content: center; font-size: 22pt; color: #fff; gap: 10px;">
                <span>Nhóm:</span>
                <input type="text" id="team-name-input" placeholder="Nhập tên nhóm..." style="width: 250px; padding: 5px 10px; font-size: 22pt; background: transparent; border: none; border-bottom: 2px dashed #00d2ff; color: #fff; text-align: center; outline: none; font-family: 'Inter', sans-serif;">
            </div>
            <div style="margin-top: 25px; display: flex; justify-content: center; width: 100%;">
                <button id="btn-finish" class="interactive-btn" style="font-size: 20pt; padding: 12px 36px; background: #ffeb3b; color: #000; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: 0 0 15px rgba(255, 235, 59, 0.5); display: flex; align-items: center; justify-content: center; text-align: center;">HOÀN THÀNH</button>
            </div>
        </div>
        <div class="abs-element" style="bottom: 40px; right: 40px; transform: rotate(-15deg); border: 4px solid #ff3333; color: #ff3333; font-size: 16pt; font-weight: bold; padding: 8px 12px; border-radius: 8px; text-align: center; background: rgba(255, 255, 255, 0.95); z-index: 5; font-family: 'Inter', sans-serif;">
            <div>VIỆN CÔNG NGHỆ</div>
            <div style="font-size: 13pt; border-top: 2px solid #ff3333; margin-top: 4px; padding-top: 4px;">NOVASTARS</div>
        </div>
        `
    }
,
    {
        id: 41,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="font-weight: bold; font-size: 18pt; margin-bottom: 20px; color: var(--primary-blue);">Bài 6.28</div>
            <div class="title typewriter-effect editable draggable" style="font-size: 44pt; margin-bottom: 20px;">Dùng AI thế nào để học chủ động hơn?</div>
            <div class="body-text editable draggable" style="font-size: 20pt; font-style: italic; color: #ffeb3b;">Tiết 2: PHÒNG CHIẾN LƯỢC CÔNG NGHỆ</div>
        </div>
        `
    },
    {
        id: 42,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">MỤC TIÊU BÀI HỌC</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 5%; width: 90%; display: flex; justify-content: space-between; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 31%; height: 430px; border-color: #00ffcc; text-align: left; padding: 20px; box-sizing: border-box;">
                <h3 style="color: #00ffcc; text-align: center; font-size: 22pt; margin-bottom: 15px;">Kiến thức</h3>
                <ul style="font-size: 16pt; line-height: 1.6; color: #fff; margin-left: 20px;">
                    <li>Ôn tập cách học chủ động cùng AI.</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 31%; height: 430px; border-color: #ffeb3b; text-align: left; padding: 20px; box-sizing: border-box;">
                <h3 style="color: #ffeb3b; text-align: center; font-size: 22pt; margin-bottom: 15px;">Kỹ năng</h3>
                <ul style="font-size: 16pt; line-height: 1.6; color: #fff; margin-left: 20px;">
                    <li style="margin-bottom: 10px;">Rèn luyện cách làm việc nhóm, chia sẻ nhiệm vụ và làm tài liệu tranh luận.</li>
                    <li>Biết cách suy nghĩ phản biện và lập luận rõ ràng.</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 31%; height: 430px; border-color: #ff3333; text-align: left; padding: 20px; box-sizing: border-box;">
                <h3 style="color: #ff3333; text-align: center; font-size: 22pt; margin-bottom: 15px;">Thái độ</h3>
                <ul style="font-size: 16pt; line-height: 1.6; color: #fff; margin-left: 20px;">
                    <li>Tự tin, có trách nhiệm và tôn trọng ý kiến khác biệt của các nhóm bạn.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 43,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">NHẬN NHIỆM VỤ CHUYÊN GIA</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 200px; left: 5%; width: 90%; padding: 40px; border-color: var(--primary-blue); position: absolute; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8; text-align: justify; color: #fff; width: 100%;">
                Chào mừng các Chuyên gia công nghệ! Hôm nay các chuyên gia sẽ cùng làm việc nhóm, thu thập bằng chứng và xây dựng một hồ sơ tranh biện hoàn chỉnh để bảo vệ ý kiến của nhóm mình về việc: <span style="color: #00ffcc; font-weight: bold;">Nên dùng AI trước hay sau khi làm bài để học tốt nhất.</span>
            </div>
        </div>
        `
    },
    {
        id: 44,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ff3333;">CÂU HỎI LỚN</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 180px; left: 15%; width: 70%; padding: 30px; border-color: #ffeb3b; text-align: center; position: absolute; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 24pt; font-weight: bold; line-height: 1.5; color: #ffeb3b; width: 100%;">
                Học sinh nên nhờ AI hỗ trợ nhiều nhất ở giai đoạn nào trong quá trình học để học tập chủ động và hiệu quả nhất?
            </div>
        </div>
        <div class="abs-element" style="top: 410px; left: 50%; transform: translateX(-50%); width: 180px; height: 180px; display: flex; justify-content: center; align-items: center; position: absolute;">
            <svg width="140" height="140" viewBox="0 0 100 100" style="filter: drop-shadow(0px 4px 10px rgba(0,0,0,0.3));">
                <!-- Background Shadow Shape -->
                <path d="M35 35 C35 20, 65 20, 65 35 C65 45, 50 48, 50 60" fill="none" stroke="#10172a" stroke-width="12" stroke-linecap="round"/>
                <circle cx="50" cy="78" r="6" fill="#10172a"/>
                <!-- Main Yellow Question Mark -->
                <path d="M35 35 C35 20, 65 20, 65 35 C65 45, 50 48, 50 60" fill="none" stroke="#ffeb3b" stroke-width="8" stroke-linecap="round"/>
                <circle cx="50" cy="78" r="5" fill="#ffeb3b"/>
                <!-- Highlight inner stroke for Comic style -->
                <path d="M38 32 C38 23, 62 23, 62 32" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            </svg>
        </div>
        `
    },
    {
        id: 45,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 1</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">MỞ KHÓA NHIỆM VỤ</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Giải mã 5 từ khóa để biết AI giúp chúng ta làm gì và thảo luận xem thời điểm nào AI giúp ích nhất.</div>
        </div>
        `
    },
    {
        id: 46,
        isWarningSlide: true,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ff3333;">CẢNH BÁO HỆ THỐNG</div>
        </div>
        <div class="abs-element dashboard-card warning-box alert-box" style="top: 150px; left: 10%; width: 80%; padding: 30px; border-color: #ff3333; background: rgba(50,0,0,0.85); box-shadow: 0 0 30px rgba(255, 0, 0, 0.5); position: absolute; box-sizing: border-box; text-align: center;">
            <div class="body-text editable draggable" style="font-size: 22pt; font-weight: bold; line-height: 1.6; color: #ffeb3b; width: 100%; text-align: justify;">
                Máy chủ của Phòng Chiến lược Công nghệ đột ngột bị lỗi do hai hệ thống trí tuệ nhân tạo (AI) xung đột với nhau. Một bên muốn AI giúp học sinh trước khi làm bài, bên còn lại muốn AI chỉ giúp sau khi làm bài xong. Tranh cãi này làm hệ thống bị khóa! Các Chuyên gia hãy giải mã 5 từ khóa để mở khóa máy chủ và cùng thảo luận xem thời điểm nào trí tuệ nhân tạo (AI) giúp ích nhất.
            </div>
        </div>
        <div class="abs-element" style="top: 430px; left: 50%; transform: translateX(-50%); width: 220px; height: 180px; display: flex; flex-direction: column; align-items: center; position: absolute;">
            <svg width="110" height="90" viewBox="0 0 100 80" style="filter: drop-shadow(0px 4px 15px rgba(255,0,0,0.4));">
                <!-- Light Rays -->
                <path d="M10 20 L25 28 M30 10 L40 22 M70 10 L60 22 M90 20 L75 28" stroke="#ff3333" stroke-width="4" stroke-linecap="round"/>
                <!-- Siren Base Outline -->
                <path d="M20 70 L80 70 L75 50 L25 50 Z" fill="#10172a" stroke="#10172a" stroke-width="8" stroke-linejoin="round"/>
                <!-- Glass Dome Outline -->
                <path d="M25 50 C25 20, 75 20, 75 50 Z" fill="#10172a" stroke="#10172a" stroke-width="8" stroke-linejoin="round"/>
                
                <!-- Glass Dome Fill -->
                <path d="M25 50 C25 20, 75 20, 75 50 Z" fill="#ff3333"/>
                <!-- Inner glow/reflection -->
                <path d="M35 50 C35 30, 65 30, 65 50 Z" fill="#ff9900" opacity="0.7"/>
                <path d="M30 45 C35 30, 45 30, 45 45 Z" fill="#ffffff" opacity="0.5"/>
                
                <!-- Siren Base Fill -->
                <path d="M20 70 L80 70 L75 50 L25 50 Z" fill="#475569" stroke="#10172a" stroke-width="4" stroke-linejoin="round"/>
                <rect x="35" y="58" width="30" height="6" rx="2" fill="#1e293b"/>
            </svg>
            <div style="margin-top: 10px; background: #ff3333; color: #fff; font-family: 'Inter', sans-serif; font-weight: bold; font-size: 15pt; padding: 4px 16px; border-radius: 6px; border: 2px solid #10172a; box-shadow: 0 0 10px rgba(255, 0, 0, 0.5); letter-spacing: 2px; text-transform: uppercase;">CẢNH BÁO</div>
        </div>
        <audio autoplay src="https://assets.mixkit.co/sfx/preview/mixkit-warning-alarm-buzzer-991.mp3"></audio>
        `
    },
    {
        id: 47,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #00ffcc;">CHUẨN BỊ</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 10%; width: 80%; display: flex; justify-content: space-between; gap: 40px; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 32pt; font-weight: bold; color: #fff;">
                    Nhóm 4
                </div>
            </div>
        </div>
        `
    },
    {
        id: 48,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 5%; width: 90%; display: flex; justify-content: space-between; align-items: center; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 5px; text-align: center; height: 320px; display: flex; flex-direction: column; justify-content: center; padding: 15px; border-color: #00ffcc; box-sizing: border-box;">
                <div style="font-size: 22pt; font-weight: bold; color: #00ffcc; margin-bottom: 10px;">Bước 1</div>
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.4;">Quan sát các chữ cái bị xáo trộn trên màn hình.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 20pt; color: var(--primary-blue); margin: 0 5px;"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 5px; text-align: center; height: 320px; display: flex; flex-direction: column; justify-content: center; padding: 15px; border-color: #00ffcc; box-sizing: border-box;">
                <div style="font-size: 22pt; font-weight: bold; color: #00ffcc; margin-bottom: 10px;">Bước 2</div>
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.4;">Thảo luận nhóm giải mã từ khoá và xác định thời điểm sử dụng AI.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 20pt; color: var(--primary-blue); margin: 0 5px;"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 5px; text-align: center; height: 320px; display: flex; flex-direction: column; justify-content: center; padding: 15px; border-color: #ffeb3b; box-sizing: border-box;">
                <div style="font-size: 22pt; font-weight: bold; color: #ffeb3b; margin-bottom: 10px;">Bước 3</div>
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.4;">Thảo luận trả lời câu hỏi thảo luận lớn trên màn hình.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 20pt; color: var(--primary-blue); margin: 0 5px;"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 5px; text-align: center; height: 320px; display: flex; flex-direction: column; justify-content: center; padding: 15px; border-color: #ffeb3b; box-sizing: border-box;">
                <div style="font-size: 22pt; font-weight: bold; color: #ffeb3b; margin-bottom: 10px;">Bước 4</div>
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.4;">Đại diện các nhóm chia sẻ ý kiến của nhóm mình trước lớp.</div>
            </div>
        </div>
        `
    },
    {
        id: 49,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">GỌI CỨU TRỢ AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 10px;">Giải mã từ khóa thứ nhất chỉ hành động AI hỗ trợ khi học.</div>
        </div>
        <div class="abs-element anagram-game" data-word="GIẢITHÍCH" style="top: 170px; left: 10%; width: 80%; position: absolute; box-sizing: border-box;">
            <div class="letters-pool">
                <div class="letter-block" data-letter="T">T</div>
                <div class="letter-block" data-letter="H">H</div>
                <div class="letter-block" data-letter="Í">Í</div>
                <div class="letter-block" data-letter="C">C</div>
                <div class="letter-block" data-letter="H">H</div>
                <div class="letter-block" data-letter="Ả">Ả</div>
                <div class="letter-block" data-letter="I">I</div>
                <div class="letter-block" data-letter="G">G</div>
                <div class="letter-block" data-letter="I">I</div>
            </div>
            <div class="answer-slots">
                <div class="slot" data-index="0"></div>
                <div class="slot" data-index="1"></div>
                <div class="slot" data-index="2"></div>
                <div class="slot" data-index="3"></div>
                <div class="slot" data-index="4"></div>
                <div class="slot" data-index="5"></div>
                <div class="slot" data-index="6"></div>
                <div class="slot" data-index="7"></div>
                <div class="slot" data-index="8"></div>
            </div>
            <div class="game-controls">
                <button class="btn-game reset-game-btn" style="padding: 10px 20px; font-size: 16pt; background: #ff3333; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;"><i class="fas fa-undo"></i> LÀM LẠI</button>
                <div class="game-feedback"></div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 5%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="45" style="font-family: monospace; font-size: 40pt;">00:45</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 50,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">GỌI CỨU TRỢ AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 10px;">Giải mã từ khóa thứ hai chỉ hành động AI hỗ trợ khi học.</div>
        </div>
        <div class="abs-element anagram-game" data-word="GỢIÝ" style="top: 170px; left: 10%; width: 80%; position: absolute; box-sizing: border-box;">
            <div class="letters-pool">
                <div class="letter-block" data-letter="Ý">Ý</div>
                <div class="letter-block" data-letter="I">I</div>
                <div class="letter-block" data-letter="G">G</div>
                <div class="letter-block" data-letter="Ợ">Ợ</div>
            </div>
            <div class="answer-slots">
                <div class="slot" data-index="0"></div>
                <div class="slot" data-index="1"></div>
                <div class="slot" data-index="2"></div>
                <div class="slot" data-index="3"></div>
            </div>
            <div class="game-controls">
                <button class="btn-game reset-game-btn" style="padding: 10px 20px; font-size: 16pt; background: #ff3333; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;"><i class="fas fa-undo"></i> LÀM LẠI</button>
                <div class="game-feedback"></div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 5%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="45" style="font-family: monospace; font-size: 40pt;">00:45</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 51,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">GỌI CỨU TRỢ AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 10px;">Giải mã từ khóa thứ ba chỉ hành động AI hỗ trợ khi học.</div>
        </div>
        <div class="abs-element anagram-game" data-word="KIỂMTRA" style="top: 170px; left: 10%; width: 80%; position: absolute; box-sizing: border-box;">
            <div class="letters-pool">
                <div class="letter-block" data-letter="T">T</div>
                <div class="letter-block" data-letter="R">R</div>
                <div class="letter-block" data-letter="A">A</div>
                <div class="letter-block" data-letter="K">K</div>
                <div class="letter-block" data-letter="I">I</div>
                <div class="letter-block" data-letter="M">M</div>
                <div class="letter-block" data-letter="Ể">Ể</div>
            </div>
            <div class="answer-slots">
                <div class="slot" data-index="0"></div>
                <div class="slot" data-index="1"></div>
                <div class="slot" data-index="2"></div>
                <div class="slot" data-index="3"></div>
                <div class="slot" data-index="4"></div>
                <div class="slot" data-index="5"></div>
                <div class="slot" data-index="6"></div>
            </div>
            <div class="game-controls">
                <button class="btn-game reset-game-btn" style="padding: 10px 20px; font-size: 16pt; background: #ff3333; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;"><i class="fas fa-undo"></i> LÀM LẠI</button>
                <div class="game-feedback"></div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 5%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="45" style="font-family: monospace; font-size: 40pt;">00:45</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 52,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">GỌI CỨU TRỢ AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 10px;">Giải mã từ khóa thứ tư chỉ hành động AI hỗ trợ khi học.</div>
        </div>
        <div class="abs-element anagram-game" data-word="GÓPÝ" style="top: 170px; left: 10%; width: 80%; position: absolute; box-sizing: border-box;">
            <div class="letters-pool">
                <div class="letter-block" data-letter="Ý">Ý</div>
                <div class="letter-block" data-letter="P">P</div>
                <div class="letter-block" data-letter="Ó">Ó</div>
                <div class="letter-block" data-letter="G">G</div>
            </div>
            <div class="answer-slots">
                <div class="slot" data-index="0"></div>
                <div class="slot" data-index="1"></div>
                <div class="slot" data-index="2"></div>
                <div class="slot" data-index="3"></div>
            </div>
            <div class="game-controls">
                <button class="btn-game reset-game-btn" style="padding: 10px 20px; font-size: 16pt; background: #ff3333; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;"><i class="fas fa-undo"></i> LÀM LẠI</button>
                <div class="game-feedback"></div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 5%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="45" style="font-family: monospace; font-size: 40pt;">00:45</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 53,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">GỌI CỨU TRỢ AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 10px;">Giải mã từ khóa thứ năm chỉ hành động AI hỗ trợ khi học.</div>
        </div>
        <div class="abs-element anagram-game" data-word="ÔNTẬP" style="top: 170px; left: 10%; width: 80%; position: absolute; box-sizing: border-box;">
            <div class="letters-pool">
                <div class="letter-block" data-letter="P">P</div>
                <div class="letter-block" data-letter="Ậ">Ậ</div>
                <div class="letter-block" data-letter="T">T</div>
                <div class="letter-block" data-letter="N">N</div>
                <div class="letter-block" data-letter="Ô">Ô</div>
            </div>
            <div class="answer-slots">
                <div class="slot" data-index="0"></div>
                <div class="slot" data-index="1"></div>
                <div class="slot" data-index="2"></div>
                <div class="slot" data-index="3"></div>
                <div class="slot" data-index="4"></div>
            </div>
            <div class="game-controls">
                <button class="btn-game reset-game-btn" style="padding: 10px 20px; font-size: 16pt; background: #ff3333; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;"><i class="fas fa-undo"></i> LÀM LẠI</button>
                <div class="game-feedback"></div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 5%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="45" style="font-family: monospace; font-size: 40pt;">00:45</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 54,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">THẢO LUẬN THỜI ĐIỂM VÀNG</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 5px;">Thảo luận nhóm 4 để đưa ra lựa chọn thời điểm sử dụng AI tốt nhất.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 10%; width: 80%; padding: 30px; text-align: left; position: absolute; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.6; color: #fff;">
                Nếu chỉ được nhờ AI hỗ trợ ở một thời điểm (trước hoặc sau khi làm bài), em sẽ chọn thời điểm nào? Vì sao?
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 5%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="120" style="font-family: monospace; font-size: 40pt;">02:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },

    {
        id: 56,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 2</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">NHẬN THÁCH THỨC</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Nhận nhiệm vụ nhóm và bốc thăm chọn phe tranh luận.</div>
        </div>
        `
    },
    {
        id: 57,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #00ffcc;">HỒ SƠ NHIỆM VỤ</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 150px; left: 10%; width: 80%; height: 420px; border-radius: 12px; border: 2px solid var(--primary-blue); display: flex; align-items: center; justify-content: center; position: absolute; box-sizing: border-box; background: rgba(10, 17, 34, 0.8);">
            <button onclick="document.getElementById('tiet2-task-modal').style.display='flex'" class="interactive-btn" style="font-size: 24pt; padding: 20px 40px; background: rgba(0, 255, 204, 0.3); border: 3px solid #00ffcc; color: #00ffcc; cursor: pointer; border-radius: 10px; font-weight: bold; box-shadow: 0 0 25px rgba(0, 255, 204, 0.6);"><i class="fas fa-folder-open"></i> TRUY CẬP HỒ SƠ</button>
        </div>
        <div id="tiet2-task-modal" class="modal-overlay" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 1000; align-items: center; justify-content: center; padding: 40px; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 90%; max-height: 90%; overflow-y: auto; text-align: left; background: var(--bg-dark); border-color: #00ffcc; position: relative; padding: 35px; box-sizing: border-box;">
                <button onclick="document.getElementById('tiet2-task-modal').style.display='none'" style="position: absolute; top: 15px; right: 25px; font-size: 30pt; background: transparent; border: none; color: #fff; cursor: pointer;">&times;</button>
                <h2 style="color: #ffeb3b; font-size: 28pt; margin-bottom: 20px; text-align: center;">HỒ SƠ TRANH BIỆN CHUYÊN GIA</h2>
                <div style="font-size: 18pt; line-height: 1.5; color: #fff;">
                    <div style="width: 100%;">
                        <p style="color: #00ffcc; font-weight: bold; margin-bottom: 10px; font-size: 20pt;"><i class="fas fa-tasks"></i> Nhiệm vụ:</p>
                        <p style="margin-bottom: 15px; text-align: justify;">Các nhóm xây dựng một Hồ sơ Tranh biện hoàn chỉnh để bảo vệ ý kiến của phe mình.</p>
                        <p style="color: #00ffcc; font-weight: bold; margin-bottom: 10px; font-size: 20pt;"><i class="fas fa-users-cog"></i> Phân vai tranh biện:</p>
                        <ul style="margin-left: 25px; margin-bottom: 15px;">
                            <li><strong>Phe A:</strong> AI nên hỗ trợ trước khi làm bài.</li>
                            <li><strong>Phe B:</strong> AI nên hỗ trợ sau khi làm bài.</li>
                        </ul>
                        <p style="color: #00ffcc; font-weight: bold; margin-bottom: 10px; font-size: 20pt;"><i class="fas fa-file-alt"></i> Hồ sơ gồm 6 phần:</p>
                        <ol style="margin-left: 25px; display: flex; gap: 30px; list-style-position: inside;">
                            <li>Quan điểm</li>
                            <li>Luận điểm</li>
                            <li>Lý do</li>
                            <li>Bằng chứng</li>
                            <li>Phản biện</li>
                            <li>Kết luận</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 58,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 3</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">THU THẬP BẰNG CHỨNG</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Đọc câu lệnh AI của các bạn học sinh, tìm xem câu lệnh giúp ích gì và chọn bằng chứng cho phe mình.</div>
        </div>
        `
    },
    {
        id: 59,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #00ffcc;">CHUẨN BỊ</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 10%; width: 80%; display: flex; justify-content: space-between; gap: 40px; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 22pt; font-weight: bold; color: #fff; line-height: 1.4;">
                    4 Đội<br><span style="font-weight: normal; font-size: 18pt; color: #ffeb3b;">(Đội 1 và 3 thuộc phe A,<br>Đội 2 và 4 thuộc phe B)</span>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 60,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 15%; width: 70%; display: flex; justify-content: space-between; align-items: center; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card process-step" style="width: 45%; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center; padding: 20px; border-color: #00ffcc; box-sizing: border-box;">
                <div style="font-size: 24pt; font-weight: bold; color: #00ffcc; margin-bottom: 15px;">Bước 1</div>
                <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.5;">Thảo luận nhóm để lần lượt phân tích 6 hồ sơ câu lệnh AI và điền từ thích hợp vào chỗ trống.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="width: 45%; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center; padding: 20px; border-color: #ffeb3b; box-sizing: border-box;">
                <div style="font-size: 24pt; font-weight: bold; color: #ffeb3b; margin-bottom: 15px;">Bước 2</div>
                <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.5;">Chọn và gom các hồ sơ phù hợp để xây dựng bộ bằng chứng bảo vệ ý kiến của phe mình.</div>
            </div>
        </div>
        `
    },
    {
        id: 61,
        content: `
        <div class="top-center-layout abs-element" style="top: 3%; width: 100%;">
            <div class="title editable draggable" style="font-size: 28pt;">TÌM KIẾM BẰNG CHỨNG - HỒ SƠ 1 & 2</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; color: #00ffcc; margin-top: 5px;">Thảo luận nhóm để điền từ vào chỗ trống và xác định nhiệm vụ hỗ trợ của AI.</div>
        </div>
        <div class="abs-element" style="top: 135px; left: 5%; width: 90%; display: flex; justify-content: space-between; gap: 30px; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card chat-box" style="width: 48%; height: 410px; padding: 20px; box-sizing: border-box;">
                <h4 style="color: #ffeb3b; font-size: 20pt; margin-bottom: 10px;"><i class="fas fa-file-alt"></i> Hồ sơ 1 (Minh)</h4>
                <p style="font-size: 14pt; line-height: 1.4; font-style: italic; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; margin-bottom: 15px; min-height: 80px;">"Mình sắp học bài về phân số. Hãy giải thích phân số là gì bằng ngôn ngữ dễ hiểu và cho mình 3 ví dụ đơn giản."</p>
                <p style="font-size: 15pt; line-height: 1.5; color: #00ffcc; margin-bottom: 10px;">Câu lệnh giúp Minh: <span class="answer-blank" style="border-bottom: 2px solid #00ffcc; padding: 0 10px; font-weight: bold; color: #fff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <div class="interactive-options" data-correct="A" style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                    <button class="option-btn" data-opt="A">A. Hiểu kiến thức</button>
                    <button class="option-btn" data-opt="B">B. Kiểm tra lỗi</button>
                    <button class="option-btn" data-opt="C">C. Chỉnh sửa bài</button>
                </div>
            </div>
            <div class="dashboard-card chat-box" style="width: 48%; height: 410px; padding: 20px; box-sizing: border-box; border-color: #ffeb3b;">
                <h4 style="color: #ffeb3b; font-size: 20pt; margin-bottom: 10px;"><i class="fas fa-file-alt"></i> Hồ sơ 2 (Lan)</h4>
                <p style="font-size: 14pt; line-height: 1.4; font-style: italic; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; margin-bottom: 15px; min-height: 80px;">"Hãy gợi ý từng bước để mình tự giải bài toán này."</p>
                <p style="font-size: 15pt; line-height: 1.5; color: #00ffcc; margin-bottom: 10px;">Câu lệnh giúp Lan: <span class="answer-blank" style="border-bottom: 2px solid #00ffcc; padding: 0 10px; font-weight: bold; color: #fff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <div class="interactive-options" data-correct="B" style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                    <button class="option-btn" data-opt="A">A. Xem đáp án</button>
                    <button class="option-btn" data-opt="B">B. Định hướng cách làm</button>
                    <button class="option-btn" data-opt="C">C. Chấm điểm bài</button>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="120" style="font-family: monospace; font-size: 36pt;">02:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 62,
        content: `
        <div class="top-center-layout abs-element" style="top: 3%; width: 100%;">
            <div class="title editable draggable" style="font-size: 28pt;">TÌM KIẾM BẰNG CHỨNG - HỒ SƠ 3 & 4</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; color: #00ffcc; margin-top: 5px;">Thảo luận nhóm để điền từ vào chỗ trống và xác định nhiệm vụ hỗ trợ của AI.</div>
        </div>
        <div class="abs-element" style="top: 135px; left: 5%; width: 90%; display: flex; justify-content: space-between; gap: 30px; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card chat-box" style="width: 48%; height: 410px; padding: 20px; box-sizing: border-box;">
                <h4 style="color: #ffeb3b; font-size: 20pt; margin-bottom: 10px;"><i class="fas fa-file-alt"></i> Hồ sơ 3 (Mai)</h4>
                <p style="font-size: 14pt; line-height: 1.4; font-style: italic; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; margin-bottom: 15px; min-height: 80px;">"Đây là bài văn mình đã viết. Hãy góp ý xem mình cần bổ sung hoặc chỉnh sửa ở đâu."</p>
                <p style="font-size: 15pt; line-height: 1.5; color: #00ffcc; margin-bottom: 10px;">Câu lệnh giúp Mai: <span class="answer-blank" style="border-bottom: 2px solid #00ffcc; padding: 0 10px; font-weight: bold; color: #fff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <div class="interactive-options" data-correct="B" style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                    <button class="option-btn" data-opt="A">A. Học bài mới</button>
                    <button class="option-btn" data-opt="B">B. Chỉnh sửa bài</button>
                    <button class="option-btn" data-opt="C">C. Tìm đáp án</button>
                </div>
            </div>
            <div class="dashboard-card chat-box" style="width: 48%; height: 410px; padding: 20px; box-sizing: border-box; border-color: #ffeb3b;">
                <h4 style="color: #ffeb3b; font-size: 20pt; margin-bottom: 10px;"><i class="fas fa-file-alt"></i> Hồ sơ 4 (Nam)</h4>
                <p style="font-size: 14pt; line-height: 1.4; font-style: italic; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; margin-bottom: 15px; min-height: 80px;">"Ngày mai mình kiểm tra môn Lịch sử. Hãy tạo cho mình 5 câu hỏi ôn tập về bài này."</p>
                <p style="font-size: 15pt; line-height: 1.5; color: #00ffcc; margin-bottom: 10px;">Câu lệnh giúp Nam: <span class="answer-blank" style="border-bottom: 2px solid #00ffcc; padding: 0 10px; font-weight: bold; color: #fff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <div class="interactive-options" data-correct="A" style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                    <button class="option-btn" data-opt="A">A. Ôn tập kiến thức</button>
                    <button class="option-btn" data-opt="B">B. Sửa bài làm</button>
                    <button class="option-btn" data-opt="C">C. Tìm lỗi sai</button>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="120" style="font-family: monospace; font-size: 36pt;">02:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 63,
        content: `
        <div class="top-center-layout abs-element" style="top: 3%; width: 100%;">
            <div class="title editable draggable" style="font-size: 28pt;">TÌM KIẾM BẰNG CHỨNG - HỒ SƠ 5 & 6</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; color: #00ffcc; margin-top: 5px;">Thảo luận nhóm để điền từ vào chỗ trống và xác định nhiệm vụ hỗ trợ của AI.</div>
        </div>
        <div class="abs-element" style="top: 135px; left: 5%; width: 90%; display: flex; justify-content: space-between; gap: 30px; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card chat-box" style="width: 48%; height: 410px; padding: 20px; box-sizing: border-box;">
                <h4 style="color: #ffeb3b; font-size: 20pt; margin-bottom: 10px;"><i class="fas fa-file-alt"></i> Hồ sơ 5 (An)</h4>
                <p style="font-size: 14pt; line-height: 1.4; font-style: italic; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; margin-bottom: 15px; min-height: 80px;">"Sau khi xem bài làm văn của mình, hãy nhận xét 3 điểm mình làm tốt và 2 điều mình cần cải thiện cho lần sau."</p>
                <p style="font-size: 15pt; line-height: 1.5; color: #00ffcc; margin-bottom: 10px;">Câu lệnh giúp An: <span class="answer-blank" style="border-bottom: 2px solid #00ffcc; padding: 0 10px; font-weight: bold; color: #fff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <div class="interactive-options" data-correct="B" style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                    <button class="option-btn" data-opt="A">A. Ghi nhớ bài</button>
                    <button class="option-btn" data-opt="B">B. Rút kinh nghiệm</button>
                    <button class="option-btn" data-opt="C">C. Tìm đáp án</button>
                </div>
            </div>
            <div class="dashboard-card chat-box" style="width: 48%; height: 410px; padding: 20px; box-sizing: border-box; border-color: #ffeb3b;">
                <h4 style="color: #ffeb3b; font-size: 20pt; margin-bottom: 10px;"><i class="fas fa-file-alt"></i> Hồ sơ 6 (Hương)</h4>
                <p style="font-size: 14pt; line-height: 1.4; font-style: italic; background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px; margin-bottom: 15px; min-height: 80px;">"Đây là bài toán mình đã làm. Hãy kiểm tra kết quả, nếu sai hãy xem mình sai ở bước nào nhưng chưa cần cho đáp án đúng."</p>
                <p style="font-size: 15pt; line-height: 1.5; color: #00ffcc; margin-bottom: 10px;">Câu lệnh giúp Hương: <span class="answer-blank" style="border-bottom: 2px solid #00ffcc; padding: 0 10px; font-weight: bold; color: #fff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <div class="interactive-options" data-correct="B" style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
                    <button class="option-btn" data-opt="A">A. Học kiến thức</button>
                    <button class="option-btn" data-opt="B">B. Sửa lỗi sai</button>
                    <button class="option-btn" data-opt="C">C. Ôn tập bài</button>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="120" style="font-family: monospace; font-size: 36pt;">02:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 64,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #00ffcc;">BỘ BẰNG CHỨNG HỒ SƠ</div>
        </div>
        <div class="abs-element" style="top: 180px; left: 5%; width: 90%; display: flex; justify-content: space-between; gap: 30px; position: absolute; box-sizing: border-box;">
            <!-- Cột Phe A -->
            <div class="dashboard-card" style="width: 48%; padding: 25px; box-sizing: border-box; border-color: #00ffcc; background: rgba(0, 255, 204, 0.05);">
                <h4 style="color: #00ffcc; font-size: 22pt; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #00ffcc; padding-bottom: 10px;">PHE A (Trước khi làm bài)</h4>
                <ul style="font-size: 16pt; line-height: 1.8; color: #fff; list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 15px;"><i class="fas fa-file-alt" style="color: #00ffcc; margin-right: 10px;"></i> <strong>Hồ sơ 1:</strong> Hiểu kiến thức</li>
                    <li style="margin-bottom: 15px;"><i class="fas fa-file-alt" style="color: #00ffcc; margin-right: 10px;"></i> <strong>Hồ sơ 2:</strong> Định hướng cách làm</li>
                    <li><i class="fas fa-file-alt" style="color: #00ffcc; margin-right: 10px;"></i> <strong>Hồ sơ 4:</strong> Ôn tập kiến thức</li>
                </ul>
            </div>
            <!-- Cột Phe B -->
            <div class="dashboard-card" style="width: 48%; padding: 25px; box-sizing: border-box; border-color: #ff3333; background: rgba(255, 51, 51, 0.05);">
                <h4 style="color: #ff3333; font-size: 22pt; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #ff3333; padding-bottom: 10px;">PHE B (Sau khi làm bài)</h4>
                <ul style="font-size: 16pt; line-height: 1.8; color: #fff; list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 15px;"><i class="fas fa-file-alt" style="color: #ff3333; margin-right: 10px;"></i> <strong>Hồ sơ 3:</strong> Chỉnh sửa bài</li>
                    <li style="margin-bottom: 15px;"><i class="fas fa-file-alt" style="color: #ff3333; margin-right: 10px;"></i> <strong>Hồ sơ 5:</strong> Rút kinh nghiệm</li>
                    <li><i class="fas fa-file-alt" style="color: #ff3333; margin-right: 10px;"></i> <strong>Hồ sơ 6:</strong> Sửa lỗi sai</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 65,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 4</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">XÂY DỰNG LẬP LUẬN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Viết 2 luận điểm của nhóm theo đúng cấu trúc để bảo vệ ý kiến của phe mình.</div>
        </div>
        `
    },
    {
        id: 66,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #00ffcc;">CHUẨN BỊ</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 10%; width: 80%; display: flex; justify-content: space-between; gap: 40px; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 22pt; font-weight: bold; color: #fff; line-height: 1.4;">
                    4 Đội<br><span style="font-weight: normal; font-size: 18pt; color: #ffeb3b;">(Đội 1 và 3 thuộc phe A,<br>Đội 2 và 4 thuộc phe B)</span>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 67,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 20%; width: 60%; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card process-step" style="text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center; padding: 30px; border-color: #00ffcc; box-sizing: border-box;">
                <div style="font-size: 26pt; font-weight: bold; color: #00ffcc; margin-bottom: 20px;">Nhiệm vụ</div>
                <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.6;">Viết 2 luận điểm của nhóm theo cấu trúc: Luận điểm ➔ Lý do ➔ Ví dụ/Bằng chứng.</div>
            </div>
        </div>
        `
    },
    {
        id: 68,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">XÂY DỰNG LẬP LUẬN CHIẾN LƯỢC</div>
            <div class="subtitle editable draggable" style="font-size: 22pt; color: #00ffcc; margin-top: 5px;">Viết 2 luận điểm lớn của nhóm theo đúng cấu trúc mẫu để chứng minh ý kiến của phe mình.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 260px; left: 10%; width: 80%; padding: 25px; text-align: left; position: absolute; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.5;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 15px; font-size: 22pt; text-align: center;">Cấu trúc Luận điểm mẫu:</p>
                <div style="background: rgba(0,0,0,0.4); padding: 15px 25px; border-radius: 8px; border: 1px solid rgba(0, 210, 255, 0.2); margin-bottom: 15px;">
                    <span style="font-weight: bold; color: #00ffcc; font-size: 18pt;">1. Luận điểm chính:</span>
                    <p style="margin-top: 5px; color: #fff; font-size: 16pt; font-style: italic;">(Nêu rõ ý kiến cốt lõi của nhóm)</p>
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 15px 25px; border-radius: 8px; border: 1px solid rgba(0, 210, 255, 0.2); margin-bottom: 15px;">
                    <span style="font-weight: bold; color: #00ffcc; font-size: 18pt;">2. Lý do (Tại sao?):</span>
                    <p style="margin-top: 5px; color: #fff; font-size: 16pt; font-style: italic;">(Giải thích vì sao luận điểm đó lại đúng và quan trọng)</p>
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 15px 25px; border-radius: 8px; border: 1px solid rgba(0, 210, 255, 0.2);">
                    <span style="font-weight: bold; color: #00ffcc; font-size: 18pt;">3. Ví dụ / Bằng chứng:</span>
                    <p style="margin-top: 5px; color: #fff; font-size: 16pt; font-style: italic;">(Dẫn chứng thực tế của học sinh hoặc các hồ sơ phân tích)</p>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="480" style="font-family: monospace; font-size: 36pt;">08:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 69,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="title editable draggable" style="font-size: 44pt; margin-bottom: 20px; color: #ffeb3b;"><i class="fas fa-bullhorn"></i> TRÌNH BÀY KẾT QUẢ</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6; color: #fff;">Các nhóm sẵn sàng đứng lên trình bày 2 luận điểm của nhóm mình trước lớp!</div>
        </div>
        `
    },
    {
        id: 70,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 5</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">DỰ ĐOÁN PHẢN BIỆN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Nghĩ xem đội bạn sẽ hỏi khó nhóm mình câu gì và chuẩn bị trước câu trả lời để bảo vệ ý kiến.</div>
        </div>
        `
    },
    {
        id: 71,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #00ffcc;">CHUẨN BỊ</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 10%; width: 80%; display: flex; justify-content: space-between; gap: 40px; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 22pt; font-weight: bold; color: #fff; line-height: 1.4;">
                    4 Đội<br><span style="font-weight: normal; font-size: 18pt; color: #ffeb3b;">(Đội 1 và 3 thuộc phe A,<br>Đội 2 và 4 thuộc phe B)</span>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 72,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 15%; width: 70%; display: flex; justify-content: space-between; align-items: center; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card process-step" style="width: 45%; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center; padding: 20px; border-color: #00ffcc; box-sizing: border-box;">
                <div style="font-size: 24pt; font-weight: bold; color: #00ffcc; margin-bottom: 15px;">Bước 1</div>
                <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.5;">Thảo luận nhóm và đoán ít nhất 1 câu hỏi phản biện mà đối thủ có thể hỏi.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="width: 45%; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center; padding: 20px; border-color: #ffeb3b; box-sizing: border-box;">
                <div style="font-size: 24pt; font-weight: bold; color: #ffeb3b; margin-bottom: 15px;">Bước 2</div>
                <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.5;">Cùng nghĩ câu trả lời thuyết phục nhất để bảo vệ ý kiến của nhóm.</div>
            </div>
        </div>
        `
    },
    {
        id: 73,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ff3333;">HỎI XOÁY – ĐÁP XOAY</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 5px;">Đoán trước câu hỏi chất vấn của đội bạn và chuẩn bị phương án trả lời.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 260px; left: 5%; width: 90%; height: 380px; padding: 25px 30px; box-sizing: border-box; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.4; width: 100%; display: flex; flex-direction: column; gap: 15px;">
                <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 480px; flex-shrink: 0; color: #ffeb3b;">1. Nếu chúng ta nói:</span>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; margin: 0 20px; flex-shrink: 0;"></i>
                    <input type="text" placeholder="Nhập lập luận chính của phe mình..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none;">
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 480px; flex-shrink: 0; color: #ff3333;">2. Đội khác sẽ phản đối điều gì?:</span>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; margin: 0 20px; flex-shrink: 0;"></i>
                    <input type="text" placeholder="Nhập câu hỏi phản biện của đối thủ..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none;">
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 480px; flex-shrink: 0; color: #00ffcc;">3. Chúng ta trả lời thế nào?:</span>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 20pt; margin: 0 20px; flex-shrink: 0;"></i>
                    <input type="text" placeholder="Nhập cách tự tin trả lời để bảo vệ ý kiến..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none;">
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="300" style="font-family: monospace; font-size: 36pt;">05:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 74,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="title editable draggable" style="font-size: 44pt; margin-bottom: 20px; color: #ffeb3b;"><i class="fas fa-bullhorn"></i> TRÌNH BÀY KẾT QUẢ</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6; color: #fff;">Các nhóm chia sẻ nhanh câu hỏi phản biện và cách giải quyết của nhóm mình trước lớp!</div>
        </div>
        `
    },
    {
        id: 75,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 6</div>
            <div class="title editable draggable" style="font-size: 36pt; margin-bottom: 30px; color: var(--primary-blue);">HOÀN THIỆN HỒ SƠ TRANH BIỆN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Tổng hợp các nội dung đã chuẩn bị vào một hồ sơ hoàn chỉnh và chia việc cho các thành viên trong nhóm.</div>
        </div>
        `
    },
    {
        id: 76,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #00ffcc;">CHUẨN BỊ</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 10%; width: 80%; display: flex; justify-content: space-between; gap: 40px; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy A4</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 320px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 22pt; font-weight: bold; color: #fff; line-height: 1.4;">
                    4 Đội<br><span style="font-weight: normal; font-size: 18pt; color: #ffeb3b;">(Đội 1 và 3 thuộc phe A,<br>Đội 2 và 4 thuộc phe B)</span>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 77,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 5%; width: 90%; display: flex; justify-content: space-between; align-items: center; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center; padding: 15px; border-color: #00ffcc; box-sizing: border-box;">
                <div style="font-size: 22pt; font-weight: bold; color: #00ffcc; margin-bottom: 15px;">Bước 1</div>
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.5;">Tổng hợp các nội dung: Quan điểm, Luận điểm, Lý do, Bằng chứng, Phản biện, Kết luận.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 20pt; color: var(--primary-blue); margin: 0 10px;"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center; padding: 15px; border-color: #00ffcc; box-sizing: border-box;">
                <div style="font-size: 22pt; font-weight: bold; color: #00ffcc; margin-bottom: 15px;">Bước 2</div>
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.5;">Thiết kế áp phích hồ sơ tranh biện hoàn chỉnh lên giấy.</div>
            </div>
            <i class="fas fa-chevron-right" style="font-size: 20pt; color: var(--primary-blue); margin: 0 10px;"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 300px; display: flex; flex-direction: column; justify-content: center; padding: 15px; border-color: #ffeb3b; box-sizing: border-box;">
                <div style="font-size: 22pt; font-weight: bold; color: #ffeb3b; margin-bottom: 15px;">Bước 3</div>
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.5;">Hoàn thành và trưng bày sản phẩm tại khu vực nhóm.</div>
            </div>
        </div>
        `
    },
    {
        id: 78,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">HOÀN THIỆN HỒ SƠ CHIẾN LƯỢC</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 5px;">Viết hồ sơ tranh biện hoàn chỉnh lên giấy.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 10%; width: 80%; padding: 25px 35px; text-align: left; position: absolute; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.5;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 10px; font-size: 22pt; text-align: center;">Thiết kế áp phích hồ sơ chiến lược trên giấy A4 gồm:</p>
                <div style="display: flex; gap: 40px; margin-top: 15px;">
                    <div style="width: 50%;">
                        <ol style="margin-left: 30px; color: #fff; font-size: 18pt; line-height: 1.6;">
                            <li>Tên nhóm</li>
                            <li>Quan điểm</li>
                            <li>Luận điểm</li>
                            <li>Lý do</li>
                        </ol>
                    </div>
                    <div style="width: 50%;">
                        <ol start="5" style="margin-left: 30px; color: #fff; font-size: 18pt; line-height: 1.6;">
                            <li>Bằng chứng</li>
                            <li>Câu hỏi - Câu trả lời phản biện</li>
                            <li>Kết luận</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="420" style="font-family: monospace; font-size: 36pt;">07:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 79,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="title editable draggable" style="font-size: 44pt; margin-bottom: 20px; color: #ffeb3b;"><i class="fas fa-bullhorn"></i> TRÌNH BÀY KẾT QUẢ</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6; color: #fff;">Các nhóm trưng bày áp phích hồ sơ tranh biện lên bảng</div>
        </div>
        `
    },
    {
        id: 80,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 7</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">NHẬT KÝ CHUYÊN GIA</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Tự suy nghĩ và viết nhật ký cá nhân</div>
        </div>
        `
    },
    {
        id: 81,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">NHẬT KÝ CHUYÊN GIA CÔNG NGHỆ</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 5px;">Tự viết nhật ký cá nhân để suy ngẫm về cách em dùng AI khi học.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 260px; left: 5%; width: 90%; height: 380px; padding: 25px 30px; box-sizing: border-box; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.4; width: 100%; display: flex; flex-direction: column; gap: 15px;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 10px; font-size: 22pt; text-align: center;">Hoàn thành 3 câu hỏi sau vào sổ tay:</p>
                <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 620px; flex-shrink: 0; color: #fff;">1. Điều em học được hôm nay là:</span>
                    <input type="text" placeholder="Nhập câu trả lời của em..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 20px;">
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 620px; flex-shrink: 0; color: #fff;">2. Điều em làm tốt hôm nay là:</span>
                    <input type="text" placeholder="Nhập câu trả lời của em..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 20px;">
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 12px 25px; border-radius: 10px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 20pt; white-space: nowrap; width: 620px; flex-shrink: 0; color: #fff;">3. Điều em cần chuẩn bị thêm là:</span>
                    <input type="text" placeholder="Nhập câu trả lời của em..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 20px;">
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="240" style="font-family: monospace; font-size: 36pt;">04:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 82,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 8</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">THỬ THÁCH THỰC TẾ</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Sử dụng AI ở cả hai thời điểm (trước và sau khi làm bài) để tự so sánh xem cách nào hiệu quả hơn.</div>
        </div>
        `
    },
    {
        id: 83,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">CHIẾN DỊCH THỬ NGHIỆM THỰC TẾ AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; color: #00ffcc; margin-top: 5px;">Thực hành tự dùng AI ở nhà ở cả hai thời điểm (Trước và Sau) đối với một môn học trong tuần.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 240px; left: 10%; width: 80%; padding: 25px 35px; text-align: left; position: absolute; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.6; color: #fff;">
                <ul style="margin-left: 25px; margin-bottom: 15px;">
                    <li style="margin-bottom: 10px;">Chọn một môn học (Toán, Văn, Tiếng Anh...) để làm bài tập tuần này.</li>
                    <li style="margin-bottom: 10px;"><strong style="color: #ffeb3b;">Trải nghiệm 1 (Dùng AI trước):</strong> Nhờ AI giải thích lý thuyết hoặc từ vựng khó hiểu trước khi tự làm bài tập. Ghi lại kết quả.</li>
                    <li style="margin-bottom: 10px;"><strong style="color: #ffeb3b;">Trải nghiệm 2 (Dùng AI sau):</strong> Tự giải bài tập trước, sau đó gửi bài nhờ AI kiểm tra lỗi chính tả, ngữ pháp hoặc xem sai ở dòng nào. Ghi lại kết quả.</li>
                    <li><strong style="color: #ffeb3b;">So sánh:</strong> So sánh xem cách nào giúp em tự làm bài tốt và hiểu bài sâu sắc hơn.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 84,
        content: `
        <div class="abs-element" style="background: rgba(0,0,0,0.85); width: 100%; height: 100%; z-index: -1;"></div>
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%; z-index: 2;">
            <div class="title editable draggable" style="color: #ffeb3b; font-size: 36pt;"><i class="fas fa-award"></i> CHỨNG NHẬN HOÀN THÀNH NHIỆM VỤ</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px; max-width: 80%; margin-left: auto; margin-right: auto; line-height: 1.4; color: #fff;">Chúc mừng các nhóm Chuyên gia Công nghệ đã hoàn thành xuất sắc việc xây dựng và hoàn thiện Hồ sơ Tranh biện.</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 260px; left: 50%; transform: translateX(-50%); z-index: 2; width: 60%; text-align: center; padding: 25px 30px; box-sizing: border-box; border: 2px solid #ffeb3b; position: absolute;">
            <div style="font-size: 24pt; color: #fff; margin-bottom: 15px; font-weight: bold;">Trao chứng nhận cho</div>
            <div style="display: flex; align-items: center; justify-content: center; font-size: 22pt; color: #fff; gap: 10px;">
                <span>Nhóm Chuyên gia:</span>
                <input type="text" id="team-name-input" placeholder="Nhập tên nhóm..." style="width: 280px; padding: 5px 10px; font-size: 22pt; background: transparent; border: none; border-bottom: 2px dashed #00d2ff; color: #00ffcc; text-align: center; outline: none; font-family: 'Inter', sans-serif;">
            </div>
            <div style="margin-top: 25px; display: flex; justify-content: center; width: 100%;">
                <button id="btn-finish" class="interactive-btn" style="font-size: 20pt; padding: 12px 36px; background: #ffeb3b; color: #000; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: 0 0 15px rgba(255, 235, 59, 0.5); display: flex; align-items: center; justify-content: center; text-align: center;">HOÀN THÀNH</button>
            </div>
        </div>
        <div class="abs-element" style="bottom: 40px; right: 40px; transform: rotate(-15deg); border: 4px solid #ff3333; color: #ff3333; font-size: 16pt; font-weight: bold; padding: 8px 12px; border-radius: 8px; text-align: center; background: rgba(255, 255, 255, 0.95); z-index: 5; font-family: 'Inter', sans-serif;">
            <div>VIỆN CÔNG NGHỆ</div>
            <div style="font-size: 13pt; border-top: 2px solid #ff3333; margin-top: 4px; padding-top: 4px;">NOVASTARS</div>
        </div>
        `
    },
    {
        id: 85,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="font-weight: bold; font-size: 18pt; margin-bottom: 20px; color: var(--primary-blue);">Bài 6.28</div>
            <div class="title typewriter-effect editable draggable" style="font-size: 44pt; margin-bottom: 20px;">Dùng AI thế nào để học chủ động hơn?</div>
            <div class="body-text editable draggable" style="font-size: 20pt; font-style: italic; color: #ffeb3b;">Tiết 3: DIỄN ĐÀN CHUYÊN GIA CÔNG NGHỆ</div>
        </div>
        `
    },
    {
        id: 86,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">MỤC TIÊU BÀI HỌC</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 5%; width: 90%; display: flex; justify-content: space-between; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 31%; height: 430px; border-color: #00ffcc; text-align: left; padding: 20px; box-sizing: border-box;">
                <h3 style="color: #00ffcc; text-align: center; font-size: 22pt; margin-bottom: 15px;">Kiến thức</h3>
                <ul style="font-size: 16pt; line-height: 1.6; color: #fff; margin-left: 20px;">
                    <li>Hiểu rằng AI có thể hỗ trợ học tập ở nhiều thời điểm khác nhau (trước hoặc sau khi làm bài).</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 31%; height: 430px; border-color: #ffeb3b; text-align: left; padding: 20px; box-sizing: border-box;">
                <h3 style="color: #ffeb3b; text-align: center; font-size: 22pt; margin-bottom: 15px;">Kỹ năng</h3>
                <ul style="font-size: 16pt; line-height: 1.6; color: #fff; margin-left: 20px;">
                    <li style="margin-bottom: 10px;">Trình bày, bảo vệ và phản biện quan điểm bằng lý lẽ, bằng chứng thuyết phục.</li>
                    <li>Ghi chép chọn lọc thông tin, câu hỏi phản biện khi lắng nghe đội bạn trình bày.</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 31%; height: 430px; border-color: #ff3333; text-align: left; padding: 20px; box-sizing: border-box;">
                <h3 style="color: #ff3333; text-align: center; font-size: 22pt; margin-bottom: 15px;">Thái độ</h3>
                <ul style="font-size: 16pt; line-height: 1.6; color: #fff; margin-left: 20px;">
                    <li style="margin-bottom: 10px;">Tôn trọng ý kiến khác biệt, sẵn sàng điều chỉnh quan điểm khi có lập luận thuyết phục.</li>
                    <li>Cam kết sử dụng AI có trách nhiệm.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 87,
        content: `
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center; border-color: var(--primary-purple);">
            <div class="title editable draggable" style="font-size: 36pt; margin-bottom: 20px; color: #ffeb3b;">KÍCH HOẠT HỒ SƠ CHUYÊN GIA</div>
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.8; color: #fff;">
                Chào mừng các Chuyên gia công nghệ, hôm nay các Chuyên gia công nghệ sẽ trình bày, bảo vệ lập trường của đội mình (Phe A hoặc Phe B) và phản biện lập trường của đội bạn về thời điểm sử dụng AI tối ưu nhất (Trước hay Sau khi làm bài) để học chủ động và hiệu quả.
            </div>
        </div>
        `
    },
    {
        id: 88,
        content: `
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center; border-color: #ffeb3b;">
            <div class="title editable draggable" style="font-size: 26pt; margin-bottom: 20px; color: #00ffcc;">CÂU HỎI LỚN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; font-weight: bold; line-height: 1.6;">
                Nên dùng AI hỗ trợ trước hay sau khi làm bài để học tốt nhất?
            </div>
        </div>
        `
    },
    {
        id: 89,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 1</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">NHẬN LUẬT TRANH BIỆN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Giúp học sinh hiểu chủ đề, luật tranh biện, cấu trúc phiên và kích hoạt bộ quy tắc diễn đàn.</div>
        </div>
        `
    },
    {
        id: 90,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ff3333;">CẢNH BÁO HỆ THỐNG</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 10%; width: 80%; position: absolute; box-sizing: border-box;">
            <div class="dashboard-card alert-box" style="width: 100%; height: 400px; border-color: #ff3333; animation: flash-alert 0.5s infinite alternate; background: rgba(50,0,0,0.85); display: flex; flex-direction: column; justify-content: center; padding: 35px; box-sizing: border-box; text-align: center;">
                <div class="body-text editable draggable" style="font-size: 20pt; color: #ffeb3b; font-weight: bold; line-height: 1.8;">
                    Hệ thống điều phối thông tin của diễn đàn bị lỗi tràn bộ nhớ do nhận cùng lúc quá nhiều dữ liệu lập luận trái chiều từ các nhóm.<br><br>
                    Các Chuyên gia công nghệ cần hợp sức kích hoạt lại "Bộ quy tắc diễn đàn" để khôi phục hệ thống!
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 48pt; color: #ff3333; animation: blink-warning 0.8s infinite alternate; text-shadow: 0 0 20px #ff3333;"></i>
                </div>
            </div>
        </div>
        <audio autoplay src="https://assets.mixkit.co/sfx/preview/mixkit-warning-alarm-buzzer-991.mp3"></audio>
        <style>
        @keyframes flash-alert { from { box-shadow: 0 0 15px #ff3333; } to { box-shadow: 0 0 45px #ff3333; } }
        @keyframes blink-warning { from { opacity: 0.3; transform: scale(0.95); } to { opacity: 1; transform: scale(1.05); } }
        </style>
        `
    },
    {
        id: 91,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">LUẬT TRANH BIỆN</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 180px; left: 15%; width: 70%; height: 380px; border-color: var(--primary-blue); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 40px; box-sizing: border-box; text-align: center; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.6; margin-bottom: 40px; color: #fff;">
                Xem Quy tắc tranh biện và Tiêu chí đánh giá của Diễn đàn Chuyên gia.
            </div>
            <button id="btn-show-task" class="interactive-btn" style="font-size: 22pt; padding: 18px 45px; background: rgba(0, 210, 255, 0.1); border: 2px solid var(--primary-blue); color: var(--primary-blue); cursor: pointer; border-radius: 8px; font-weight: bold; box-shadow: 0 0 15px rgba(0, 210, 255, 0.3);">XEM CHI TIẾT</button>
        </div>

        <!-- Modal Popup for Rules and Criteria -->
        <div id="tiet3-task-modal" class="hidden" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(5, 8, 16, 0.95); z-index: 100; display: none; align-items: center; justify-content: center; padding: 40px; box-sizing: border-box;">
            <div class="dashboard-card" style="width: 90%; height: 90%; border-color: var(--primary-blue); background: #0a0f1d; padding: 30px; position: relative; display: flex; flex-direction: column; text-align: left; box-sizing: border-box; overflow-y: auto;">
                <button id="tiet3-btn-close-task" style="position: absolute; top: 20px; right: 20px; background: transparent; border: none; color: #ff3333; font-size: 28pt; cursor: pointer;"><i class="fas fa-times-circle"></i></button>
                <h2 style="color: #ffeb3b; font-size: 28pt; text-align: center; margin-bottom: 20px; border-bottom: 2px dashed rgba(0, 210, 255, 0.3); padding-bottom: 10px;">LUẬT TRANH BIỆN</h2>
                <div style="display: flex; justify-content: space-between; flex-grow: 1; gap: 20px; box-sizing: border-box; align-items: center;">
                    <div style="width: 48%; background: rgba(0,0,0,0.3); padding: 25px; border-radius: 8px; border: 1px solid rgba(122, 0, 255, 0.25); box-sizing: border-box;">
                        <h4 style="color: #ffeb3b; font-size: 18pt; margin-bottom: 15px; text-align: center;"><i class="fas fa-gavel"></i> Quy tắc tranh biện</h4>
                        <ul style="font-size: 14pt; color: #fff; margin-left: 20px; line-height: 1.6;">
                            <li style="margin-bottom: 8px;">Tập trung trao đổi về ý kiến và lập luận.</li>
                            <li style="margin-bottom: 8px;">Tôn trọng ý kiến của các nhóm khác, không công kích cá nhân.</li>
                            <li style="margin-bottom: 8px;">Lắng nghe hết lượt nói của đội bạn, không ngắt lời.</li>
                            <li>Sử dụng ví dụ hoặc tình huống thực tế để bảo vệ quan điểm.</li>
                        </ul>
                    </div>
                    <div style="width: 48%; background: rgba(0,0,0,0.3); padding: 25px; border-radius: 8px; border: 1px solid rgba(255, 51, 51, 0.25); box-sizing: border-box;">
                        <h4 style="color: #ff3333; font-size: 18pt; margin-bottom: 15px; text-align: center;"><i class="fas fa-star"></i> Tiêu chí đánh giá</h4>
                        <ul style="font-size: 14pt; color: #fff; margin-left: 20px; line-height: 1.6;">
                            <li style="margin-bottom: 8px;"><strong>Lập luận rõ ràng:</strong> Nêu ý kiến và giải thích hợp lý.</li>
                            <li style="margin-bottom: 8px;"><strong>Có bằng chứng:</strong> Đưa ra ví dụ/tình huống phù hợp.</li>
                            <li style="margin-bottom: 8px;"><strong>Phản biện hợp lý:</strong> Trả lời đúng câu hỏi nhóm khác.</li>
                            <li><strong>Trình bày tự tin:</strong> Nói rõ ràng, dễ hiểu, đúng giờ.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 92,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 2</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">DIỄN TẬP</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Các nhóm rà soát lại Hồ sơ tranh biện và diễn tập trình bày trước khi tranh biện chính thức.</div>
        </div>
        `
    },
    {
        id: 93,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 350px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; padding: 20px;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 25px;"><i class="fas fa-folder-open"></i> Dụng cụ</h3>
                <ul style="font-size: 22pt; color: #fff; list-style: none; padding: 0; line-height: 1.8;">
                    <li>✔ Hồ sơ tranh biện đã hoàn thiện ở Tiết 2</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 350px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; padding: 20px;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 25px;"><i class="fas fa-users"></i> Hình thức tổ chức</h3>
                <div style="font-size: 22pt; font-weight: bold; color: #fff; line-height: 1.4;">
                    4 Đội<br><span style="font-weight: normal; font-size: 18pt; color: #ffeb3b;">(Đội 1 và 3 thuộc phe A,<br>Đội 2 và 4 thuộc phe B)</span>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 94,
        content: `
        <div class="top-center-layout abs-element" style="top: 8%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="center-layout abs-element" style="width: 90%; display: flex; justify-content: space-between; align-items: center; top: 55%;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 15px; text-align: center; height: 180px; display: flex; align-items: center; justify-content: center; border-color: var(--primary-blue); box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.6; color: #fff;"><strong>Bước 1:</strong><br>Rà soát lập luận và bằng chứng.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 15px; text-align: center; height: 180px; display: flex; align-items: center; justify-content: center; border-color: var(--primary-purple); box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.6; color: #fff;"><strong>Bước 2:</strong><br>Thống nhất nội dung của từng người nói.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 30pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 15px; text-align: center; height: 180px; display: flex; align-items: center; justify-content: center; border-color: #ffeb3b; box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.6; color: #fff;"><strong>Bước 3:</strong><br>Luyện tập trình bày.</div>
            </div>
        </div>
        `
    },
    {
        id: 111,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">CẤU TRÚC ĐỘI HÌNH & VAI TRÒ</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; color: #00ffcc; margin-top: 5px;">Chủ đề: Nên dùng AI trước hay sau khi làm bài để học tốt nhất?</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 5%; width: 90%; display: flex; justify-content: space-between; position: absolute; box-sizing: border-box; height: 420px;">
            <div class="dashboard-card" style="width: 48%; height: 100%; border-color: var(--primary-blue); padding: 25px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 22pt; margin-bottom: 20px; text-align: center;"><i class="fas fa-users"></i> Phân công Đội hình</h3>
                <ul style="font-size: 18pt; color: #fff; line-height: 2; margin-left: 20px;">
                    <li><strong>Phe A:</strong> AI nên hỗ trợ trước khi làm bài.</li>
                    <li><strong>Phe B:</strong> AI nên hỗ trợ sau khi làm bài.</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 100%; border-color: var(--primary-purple); padding: 25px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 22pt; margin-bottom: 20px; text-align: center;"><i class="fas fa-user-tag"></i> Vai trò Thành viên</h3>
                <ul style="font-size: 16pt; color: #fff; line-height: 1.8; margin-left: 20px;">
                    <li style="margin-bottom: 10px;"><strong>Người nói 1:</strong> Giới thiệu lập trường, trình bày luận điểm 1.</li>
                    <li style="margin-bottom: 10px;"><strong>Người nói 2:</strong> Trình bày luận điểm 2, đưa ra ví dụ/bằng chứng.</li>
                    <li><strong>Người nói 3:</strong> Phản biện đối phương, tổng kết lập luận.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 95,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">RÀ SOÁT HỒ SƠ TRANH BIỆN VÀ DIỄN TẬP</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 200px; left: 10%; width: 80%; height: 380px; padding: 25px 40px; box-sizing: border-box; text-align: left; border-color: var(--primary-purple); position: absolute;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.6; color: #fff;">
                <p style="margin-bottom: 10px;"><strong>Kiểm tra rà soát Hồ sơ tranh biện đã chuẩn bị ở tiết trước:</strong></p>
                <ul style="margin-left: 30px; margin-bottom: 20px; list-style-type: square; font-size: 18pt;">
                    <li style="margin-bottom: 6px;">Quan điểm của đội (Phe A hay Phe B).</li>
                    <li style="margin-bottom: 6px;">Luận điểm 1 & Luận điểm 2.</li>
                    <li style="margin-bottom: 6px;">Lý do.</li>
                    <li style="margin-bottom: 6px;">Bằng chứng thực tế.</li>
                    <li style="margin-bottom: 6px;">Nội dung phản biện & phần tổng kết lập luận.</li>
                </ul>
                <p><strong>Luyện tập nói trong nhóm</strong></p>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="420" style="font-family: monospace; font-size: 36pt; color: #00ffcc; font-weight: bold; margin-bottom: 10px;">07:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 96,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 3</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">TRANH BIỆN ĐỒNG ĐỘI VÀ CHẤT VẤN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Các đội thực hiện phiên tranh biện, phản biện và trả lời chất vấn của đội bạn bằng lý lẽ và bằng chứng.</div>
        </div>
        `
    },
    {
        id: 97,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 350px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; padding: 20px;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 25px;"><i class="fas fa-briefcase"></i> Dụng cụ</h3>
                <ul style="font-size: 22pt; color: #fff; list-style: none; padding: 0; line-height: 1.8;">
                    <li style="margin-bottom: 8px;">✔ Hồ sơ tranh biện</li>
                    <li style="margin-bottom: 8px;">✔ Giấy nháp</li>
                    <li>✔ Bút ghi chú</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 350px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; padding: 20px;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 25px;"><i class="fas fa-comments"></i> Hình thức tổ chức</h3>
                <div style="font-size: 24pt; font-weight: bold; color: #fff; line-height: 1.8;">
                    Hai đội đối đầu trực tiếp<br>
                    <span style="color: #00ffcc; font-size: 28pt;">Phe A vs Phe B</span>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 98,
        content: `
        <div class="top-center-layout abs-element" style="top: 8%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 5%; width: 90%; display: flex; justify-content: space-between; align-items: center; position: absolute; box-sizing: border-box; height: 300px;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center; border-color: var(--primary-blue); box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.5; color: #fff;"><strong>Bước 1:</strong><br>Bốc thăm chọn thứ tự tranh biện.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 20pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center; border-color: var(--primary-purple); box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.5; color: #fff;"><strong>Bước 2:</strong><br>Thực hiện tranh biện theo cấu trúc lượt nói.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 20pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center; border-color: #ffeb3b; box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.5; color: #fff;"><strong>Bước 3:</strong><br>Ghi lại các ý phản biện khi đội bạn trình bày.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 20pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 200px; display: flex; align-items: center; justify-content: center; border-color: #ff3333; box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 16pt; line-height: 1.5; color: #fff;"><strong>Bước 4:</strong><br>Trả lời chất vấn và phản biện lại đội bạn.</div>
            </div>
        </div>
        `
    },
    {
        id: 114,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">THỨ TỰ TRANH BIỆN</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; color: #00ffcc; margin-top: 5px;">Các đội chuẩn bị vị trí và sẵn sàng vào trận</div>
        </div>
        <div class="abs-element" style="top: 200px; left: 10%; width: 80%; display: flex; justify-content: space-between; gap: 40px; position: absolute; box-sizing: border-box; height: 380px;">
            <div class="dashboard-card" style="width: 48%; height: 100%; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 30px; box-sizing: border-box; text-align: center;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 30px; font-weight: bold;"><i class="fas fa-gavel"></i> TRẬN 1</h3>
                <div style="font-size: 24pt; color: #fff; font-weight: bold; line-height: 1.8;">
                    Đội 1 Phe A <br>
                    <span style="color: #ff3333; font-size: 20pt;">vs</span> <br>
                    Đội 2 Phe B
                </div>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 100%; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 30px; box-sizing: border-box; text-align: center;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 30px; font-weight: bold;"><i class="fas fa-gavel"></i> TRẬN 2</h3>
                <div style="font-size: 24pt; color: #fff; font-weight: bold; line-height: 1.8;">
                    Đội 3 Phe A <br>
                    <span style="color: #ff3333; font-size: 20pt;">vs</span> <br>
                    Đội 4 Phe B
                </div>
            </div>
        </div>
        `
    },
    {
        id: 99,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">CẤU TRÚC PHIÊN TRANH BIỆN</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 160px; left: 5%; width: 90%; height: 470px; padding: 25px 35px; box-sizing: border-box; text-align: left; border-color: var(--primary-purple); position: absolute; overflow-y: auto;">
            <div style="color: #ffeb3b; font-size: 16pt; font-weight: bold; margin-bottom: 12px; text-transform: uppercase; text-shadow: 0 0 10px rgba(255, 235, 59, 0.2);">
                Cấu trúc lượt nói cho mỗi cặp tranh biện:
            </div>
            
            <div style="display: flex; justify-content: space-between; gap: 30px; box-sizing: border-box; width: 100%; align-items: stretch; margin-bottom: 15px;">
                <div style="width: 48%; background: rgba(0,0,0,0.3); padding: 15px 20px; border-radius: 8px; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box;">
                    <h4 style="color: #00ffcc; font-size: 15pt; margin-top: 0; margin-bottom: 10px; font-weight: bold; border-bottom: 1px solid rgba(0, 210, 255, 0.2); padding-bottom: 5px;">Lượt 1. Trình bày</h4>
                    <ul style="font-size: 13pt; color: #fff; margin-left: 20px; line-height: 1.5; padding: 0; list-style-type: none;">
                        <li style="margin-bottom: 6px;"><i class="fas fa-user" style="color: #00ffcc; margin-right: 8px; font-size: 11pt;"></i>Phe A – Người nói 1</li>
                        <li style="margin-bottom: 6px;"><i class="fas fa-user" style="color: #00ffcc; margin-right: 8px; font-size: 11pt;"></i>Phe A – Người nói 2</li>
                        <li style="margin-bottom: 6px;"><i class="fas fa-user" style="color: #ffeb3b; margin-right: 8px; font-size: 11pt;"></i>Phe B – Người nói 1</li>
                        <li><i class="fas fa-user" style="color: #ffeb3b; margin-right: 8px; font-size: 11pt;"></i>Phe B – Người nói 2</li>
                    </ul>
                </div>
                
                <div style="width: 48%; background: rgba(0,0,0,0.3); padding: 15px 20px; border-radius: 8px; border: 1px solid rgba(255, 235, 59, 0.2); box-sizing: border-box;">
                    <h4 style="color: #ffeb3b; font-size: 15pt; margin-top: 0; margin-bottom: 10px; font-weight: bold; border-bottom: 1px solid rgba(255, 235, 59, 0.2); padding-bottom: 5px;">Lượt 2. Phản biện</h4>
                    <ul style="font-size: 13pt; color: #fff; margin-left: 20px; line-height: 1.5; padding: 0; list-style-type: none;">
                        <li style="margin-bottom: 6px;"><i class="fas fa-question-circle" style="color: #00ffcc; margin-right: 8px; font-size: 11pt;"></i>Phe A – Người 3 đặt câu hỏi</li>
                        <li style="margin-bottom: 6px;"><i class="fas fa-reply" style="color: #ffeb3b; margin-right: 8px; font-size: 11pt;"></i>Phe B – Người 3 trả lời và kết luận</li>
                        <li style="margin-bottom: 6px;"><i class="fas fa-question-circle" style="color: #ffeb3b; margin-right: 8px; font-size: 11pt;"></i>Phe B – Người 3 đặt câu hỏi</li>
                        <li><i class="fas fa-reply" style="color: #00ffcc; margin-right: 8px; font-size: 11pt;"></i>Phe A – Người 3 trả lời và kết luận</li>
                    </ul>
                </div>
            </div>

            <div style="border-top: 1px dashed rgba(255, 255, 255, 0.1); padding-top: 12px; box-sizing: border-box;">
                <div style="color: #00ffcc; font-size: 15pt; font-weight: bold; margin-bottom: 8px;"><i class="fas fa-ear-listen" style="margin-right: 8px;"></i>NHIỆM VỤ KHI LẮNG NGHE:</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px 20px; font-size: 12pt; color: #ddd;">
                    <div><i class="fas fa-check" style="color: #00ffcc; margin-right: 8px; font-size: 10pt;"></i>Ghi chú quan điểm chính của đối phương.</div>
                    <div><i class="fas fa-check" style="color: #00ffcc; margin-right: 8px; font-size: 10pt;"></i>Ghi lại các bằng chứng thuyết phục của họ.</div>
                    <div><i class="fas fa-check" style="color: #00ffcc; margin-right: 8px; font-size: 10pt;"></i>Ghi nhận những điểm em chưa đồng tình.</div>
                    <div><i class="fas fa-check" style="color: #00ffcc; margin-right: 8px; font-size: 10pt;"></i>Chuẩn bị câu hỏi chất vấn.</div>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 112,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">TRẬN TRANH BIỆN 1</div>
            <div class="subtitle editable draggable" style="font-size: 18pt; color: #ccc; margin-top: 8px;">Chủ đề: Nên dùng AI trước hay sau khi làm bài để học tốt nhất?</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 270px; left: 6%; width: 42%; height: 320px; border-color: var(--primary-purple); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px 25px; box-sizing: border-box; text-align: center; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.6; color: #fff; font-weight: bold;">
                Trận tranh biện chính thức giữa:<br>
                <span style="color: #00ffcc; font-size: 24pt;">Đội 1 Phe A</span> và <span style="color: #ffeb3b; font-size: 24pt;">Đội 2 Phe B</span>
            </div>
            <div class="body-text editable draggable" style="font-size: 15pt; margin-top: 12px; line-height: 1.6; color: #ddd;">
                <span style="color: #00ffcc; font-weight: bold;">Phe A:</span> AI nên hỗ trợ trước khi làm bài.<br>
                <span style="color: #ffeb3b; font-weight: bold;">Phe B:</span> AI nên hỗ trợ sau khi làm bài.
            </div>
        </div>
        <img src="assets/6.28-V1-01-tranh-bien-tran-1.png" class="editable draggable" style="top: 270px; left: 52%; width: 42%; height: 320px; border-radius: 8px; border: 2px solid var(--primary-purple); position: absolute; object-fit: cover;" draggable="false">
        <div class="abs-element timer-container" style="bottom: 4%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="600" style="font-family: monospace; font-size: 40pt; color: #00ffcc; font-weight: bold; margin-bottom: 10px;">10:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 113,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">TRẬN TRANH BIỆN 2</div>
            <div class="subtitle editable draggable" style="font-size: 18pt; color: #ccc; margin-top: 8px;">Chủ đề: Nên dùng AI trước hay sau khi làm bài để học tốt nhất?</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 270px; left: 6%; width: 42%; height: 320px; border-color: var(--primary-purple); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px 25px; box-sizing: border-box; text-align: center; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.6; color: #fff; font-weight: bold;">
                Trận tranh biện chính thức giữa:<br>
                <span style="color: #00ffcc; font-size: 24pt;">Đội 3 Phe A</span> và <span style="color: #ffeb3b; font-size: 24pt;">Đội 4 Phe B</span>
            </div>
            <div class="body-text editable draggable" style="font-size: 15pt; margin-top: 12px; line-height: 1.6; color: #ddd;">
                <span style="color: #00ffcc; font-weight: bold;">Phe A:</span> AI nên hỗ trợ trước khi làm bài.<br>
                <span style="color: #ffeb3b; font-weight: bold;">Phe B:</span> AI nên hỗ trợ sau khi làm bài.
            </div>
        </div>
        <img src="assets/6.28-V1-02-tranh-bien-tran-2.png" class="editable draggable" style="top: 270px; left: 52%; width: 42%; height: 320px; border-radius: 8px; border: 2px solid var(--primary-purple); position: absolute; object-fit: cover;" draggable="false">
        <div class="abs-element timer-container" style="bottom: 4%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="600" style="font-family: monospace; font-size: 40pt; color: #00ffcc; font-weight: bold; margin-bottom: 10px;">10:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 100,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">HỘI ĐỒNG CHUYÊN GIA KẾT LUẬN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Tổng hợp các lập luận từ cả hai phe và thống nhất các khuyến nghị sử dụng AI học tập một cách chủ động, hiệu quả.</div>
        </div>
        `
    },
    {
        id: 101,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 350px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; padding: 20px;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 25px;"><i class="fas fa-edit"></i> Dụng cụ</h3>
                <ul style="font-size: 22pt; color: #fff; list-style: none; padding: 0; line-height: 1.8;">
                    <li style="margin-bottom: 8px;">✔ Giấy nháp</li>
                    <li>✔ Bút viết</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 350px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; padding: 20px;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 25px;"><i class="fas fa-users"></i> Hình thức tổ chức</h3>
                <div style="font-size: 22pt; font-weight: bold; color: #fff; line-height: 1.4;">
                    4 Đội<br><span style="font-weight: normal; font-size: 18pt; color: #ffeb3b;">(Đội 1 và 3 thuộc phe A,<br>Đội 2 và 4 thuộc phe B)</span>
                </div>
            </div>
        </div>
        `
    },
    {
        id: 102,
        content: `
        <div class="top-center-layout abs-element" style="top: 10%; width: 100%;">
            <div class="title editable draggable" style="font-size: 28pt;">QUY TRÌNH THỰC HIỆN</div>
        </div>
        <div class="abs-element" style="top: 220px; left: 5%; width: 90%; display: flex; justify-content: space-between; align-items: center; position: absolute; box-sizing: border-box; height: 300px;">
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 180px; display: flex; align-items: center; justify-content: center; border-color: var(--primary-blue); box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 15pt; line-height: 1.5; color: #fff;"><strong>Bước 1:</strong><br>Thảo luận trong nhóm và chọn lọc các ý kiến hợp lý.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 18pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 180px; display: flex; align-items: center; justify-content: center; border-color: var(--primary-purple); box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 15pt; line-height: 1.5; color: #fff;"><strong>Bước 2:</strong><br>Đề xuất khuyến nghị dùng AI học tập.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 18pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 180px; display: flex; align-items: center; justify-content: center; border-color: #ffeb3b; box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 15pt; line-height: 1.5; color: #fff;"><strong>Bước 3:</strong><br>Đại diện các nhóm trình bày ý kiến.</div>
            </div>
            <i class="fas fa-arrow-right" style="font-size: 18pt; color: var(--primary-blue);"></i>
            <div class="dashboard-card process-step" style="flex: 1; margin: 0 10px; text-align: center; height: 180px; display: flex; align-items: center; justify-content: center; border-color: #00ffcc; box-sizing: border-box; padding: 15px;">
                <div class="body-text editable draggable" style="font-size: 15pt; line-height: 1.5; color: #fff;"><strong>Bước 4:</strong><br>Cả lớp thống nhất khuyến nghị chung.</div>
            </div>
        </div>
        `
    },
    {
        id: 103,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">ĐƯA RA KHUYẾN NGHỊ TỔNG KẾT</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; color: #00ffcc; margin-top: 5px;">Thảo luận trong nhóm 4 để rút ra các kết luận</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 220px; left: 10%; width: 80%; height: 350px; padding: 25px 45px; box-sizing: border-box; text-align: left; border-color: var(--primary-purple); position: absolute;">
            <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.6; color: #fff;">
                <p style="color: #00ffcc; font-weight: bold; margin-bottom: 10px; font-size: 20pt;">Câu hỏi thảo luận:</p>
                <ol style="margin-left: 25px;">
                    <li style="margin-bottom: 6px;">Những lập luận nào của mỗi đội là hợp lý và thuyết phục?</li>
                    <li style="margin-bottom: 6px;">AI nên hỗ trợ trước khi làm bài trong những trường hợp nào?</li>
                    <li style="margin-bottom: 6px;">AI nên hỗ trợ sau khi làm bài trong những trường hợp nào?</li>
                    <li style="margin-bottom: 6px;">Nhóm em đề xuất những khuyến nghị nào để sử dụng AI hiệu quả?</li>
                </ol>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="480" style="font-family: monospace; font-size: 36pt; color: #00ffcc; font-weight: bold; margin-bottom: 10px;">08:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 104,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="title editable draggable" style="font-size: 40pt; color: #ffeb3b; margin-bottom: 20px;"><i class="fas fa-bullhorn"></i> TRÌNH BÀY KẾT QUẢ</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6; color: #fff;">Đại diện từng nhóm chia sẻ các đề xuất khuyến nghị sử dụng AI của nhóm mình trước Hội đồng Chuyên gia.</div>
        </div>
        `
    },
    {
        id: 105,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">TỔNG KẾT PHIÊN LÀM VIỆC</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 220px; left: 10%; width: 80%; height: 420px; padding: 30px 45px; box-sizing: border-box; text-align: left; border-color: #00ffcc; position: absolute; overflow-y: auto;">
            <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.8; color: #fff;">
                <p style="color: #ffeb3b; font-weight: bold; font-size: 22pt; margin-bottom: 15px;">Một số khuyến nghị sử dụng AI để học chủ động và hiệu quả:</p>
                <ul style="margin-left: 25px; list-style-type: disc;">
                    <li style="margin-bottom: 10px;"><strong>Tự suy nghĩ trước</strong> khi sử dụng AI khi có thể.</li>
                    <li style="margin-bottom: 10px;"><strong>Dùng AI để giải thích hoặc gợi ý</strong> khi gặp khó khăn.</li>
                    <li style="margin-bottom: 10px;"><strong>Không sao chép nguyên văn</strong> nội dung do AI tạo ra.</li>
                    <li style="margin-bottom: 10px;"><strong>Kiểm tra lại thông tin</strong> AI cung cấp.</li>
                    <li style="margin-bottom: 10px;"><strong>Chịu trách nhiệm</strong> hoàn toàn với bài làm và kết quả học tập của mình.</li>
                </ul>
            </div>
        </div>
        `
    },
    {
        id: 106,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 5</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">NHẬT KÝ CHUYÊN GIA</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Học sinh tự đánh giá nhận thức, thái độ của bản thân và rút ra bài học kinh nghiệm sâu sắc sau phiên tranh biện.</div>
        </div>
        `
    },
    {
        id: 107,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">NHẬT KÝ CHUYÊN GIA CÔNG NGHỆ</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; color: #00ffcc; margin-top: 5px;">Tự đánh giá nhận thức và ghi lại bài học của bản thân</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 5%; width: 90%; height: 380px; padding: 20px 30px; box-sizing: border-box; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.4; width: 100%; display: flex; flex-direction: column; gap: 15px;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 5px; font-size: 20pt; text-align: center;">Hoàn thành nhật ký của em vào sổ tay:</p>
                <div style="background: rgba(0,0,0,0.4); padding: 10px 20px; border-radius: 8px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 16pt; white-space: nowrap; width: 480px; flex-shrink: 0; color: #fff;">1. Trước tranh biện em nghĩ:</span>
                    <input type="text" placeholder="Nhập câu trả lời của em..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 16pt; flex-grow: 1; outline: none; margin-left: 15px;">
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 10px 20px; border-radius: 8px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 16pt; white-space: nowrap; width: 480px; flex-shrink: 0; color: #fff;">2. Sau khi nghe các lập luận em nhận ra:</span>
                    <input type="text" placeholder="Nhập câu trả lời của em..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 16pt; flex-grow: 1; outline: none; margin-left: 15px;">
                </div>
                <div style="background: rgba(0,0,0,0.4); padding: 10px 20px; border-radius: 8px; display: flex; align-items: center; border: 1px solid rgba(0, 210, 255, 0.2); box-sizing: border-box; width: 100%;">
                    <span style="font-weight: bold; font-size: 16pt; white-space: nowrap; width: 480px; flex-shrink: 0; color: #fff;">3. Điều em sẽ thay đổi khi sử dụng AI:</span>
                    <input type="text" placeholder="Nhập câu trả lời của em..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 16pt; flex-grow: 1; outline: none; margin-left: 15px;">
                </div>
            </div>
        </div>
        <div class="abs-element timer-container" style="bottom: 2%; left: 50%; transform: translateX(-50%); width: 400px; text-align: center; position: absolute;">
            <div class="timer-display" data-time="180" style="font-family: monospace; font-size: 36pt; color: #00ffcc; font-weight: bold; margin-bottom: 10px;">03:00</div>
            <div class="timer-controls" style="display: flex; justify-content: center; gap: 20px;">
                <button class="btn-timer start-btn" title="Bắt đầu"><i class="fas fa-play"></i></button>
                <button class="btn-timer pause-btn" title="Tạm dừng"><i class="fas fa-pause"></i></button>
                <button class="btn-timer reset-btn" title="Làm lại"><i class="fas fa-redo"></i></button>
            </div>
        </div>
        `
    },
    {
        id: 108,
        content: `
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 20px;">Giai đoạn 6</div>
            <div class="title editable draggable" style="font-size: 40pt; margin-bottom: 30px; color: var(--primary-blue);">CAM KẾT CHUYÊN GIA</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto; line-height: 1.6;">Chính thức thiết lập cam kết sử dụng AI đúng mục đích, có trách nhiệm và đưa hệ thống vào vận hành thực tế.</div>
        </div>
        `
    },
    {
        id: 109,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt; color: #ffeb3b;">BẢN CAM KẾT HÀNH ĐỘNG</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 200px; left: 10%; width: 80%; padding: 30px; text-align: left; position: absolute; box-sizing: border-box; border-color: var(--primary-purple);">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 30px; box-sizing: border-box; width: 100%;">
                <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.4; width: 62%; box-sizing: border-box;">
                    <p style="color: #00ffcc; font-weight: bold; margin-bottom: 12px; font-size: 20pt;">Sau bài học này, em cam kết thực hiện:</p>
                    <div class="checkbox-group" style="margin-left: 10px; line-height: 1.5;">
                        <label class="custom-checkbox" style="font-size: 15pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Sử dụng AI để hỗ trợ học tập, không nhờ AI làm thay bài tập.</label>
                        <label class="custom-checkbox" style="font-size: 15pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Tự suy nghĩ và hoàn thành bài trước khi sử dụng AI hỗ trợ.</label>
                        <label class="custom-checkbox" style="font-size: 15pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Kiểm tra lại thông tin AI cung cấp trước khi sử dụng.</label>
                        <label class="custom-checkbox" style="font-size: 15pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Trung thực và có trách nhiệm với bài làm của mình.</label>
                        <label class="custom-checkbox" style="font-size: 15pt; margin-bottom: 10px; display: block;"><input type="checkbox"><span class="checkmark"></span> Sử dụng AI đúng mục đích để học tập hiệu quả hơn.</label>
                    </div>
                </div>
                
                <div style="width: 35%; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 15px; background: rgba(0,0,0,0.3); padding: 25px 20px; border-radius: 10px; border: 1px dashed var(--primary-blue); box-sizing: border-box;">
                    <div style="margin-bottom: 5px; width: 100%;">
                        <input type="text" id="class-name-input" placeholder="Nhập tên lớp..." style="padding: 10px; font-size: 16pt; background: rgba(0,0,0,0.5); border: 1px solid var(--primary-blue); color: #fff; border-radius: 5px; width: 100%; text-align: center; box-sizing: border-box; outline: none;">
                    </div>
                    <button id="btn-commit" class="interactive-btn" style="font-size: 18pt; padding: 12px 24px; background: rgba(0, 255, 204, 0.1); border: 2px solid #00ffcc; color: #00ffcc; cursor: pointer; border-radius: 8px; width: 100%; display: flex; align-items: center; justify-content: center; text-align: center; font-weight: bold; box-shadow: 0 0 15px rgba(0, 255, 204, 0.2);">CAM KẾT</button>
                </div>
            </div>
            <!-- Container for stamp -->
            <div id="stamp-container" style="position: absolute; bottom: 60px; right: 40px; pointer-events: none; opacity: 0; transform: scale(3) rotate(-20deg); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 10;">
                <div style="border: 5px solid #ff3333; color: #ff3333; font-size: 30pt; font-weight: bold; padding: 10px 20px; border-radius: 10px; background: rgba(255, 255, 255, 0.95); box-shadow: 0 0 20px rgba(255, 51, 51, 0.4);">ĐÃ CAM KẾT</div>
            </div>
        </div>
        `
    },
    {
        id: 110,
        content: `
        <div class="abs-element" style="background: rgba(0,0,0,0.85); width: 100%; height: 100%; z-index: -1;"></div>
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%; z-index: 2;">
            <div class="title editable draggable" style="color: #ffeb3b; font-size: 36pt;"><i class="fas fa-award"></i> CHỨNG NHẬN HOÀN THÀNH NHIỆM VỤ</div>
            <div class="subtitle editable draggable" style="font-size: 20pt; margin-top: 10px; max-width: 80%; margin-left: auto; margin-right: auto; line-height: 1.4; color: #fff;">Chúc mừng các Chuyên gia Công nghệ đã hoàn thành xuất sắc diễn đàn tranh biện hôm nay!</div>
        </div>
        <div class="abs-element dashboard-card" style="top: 260px; left: 50%; transform: translateX(-50%); z-index: 2; width: 60%; text-align: center; padding: 25px 30px; box-sizing: border-box; border: 2px solid #ffeb3b; position: absolute;">
            <div style="font-size: 24pt; color: #fff; margin-bottom: 15px; font-weight: bold;">Trao chứng nhận cho</div>
            <div style="display: flex; align-items: center; justify-content: center; font-size: 22pt; color: #fff; gap: 10px;">
                <span>Nhóm Chuyên gia:</span>
                <input type="text" id="tiet3-team-name-input" placeholder="Nhập tên nhóm..." style="width: 280px; padding: 5px 10px; font-size: 22pt; background: transparent; border: none; border-bottom: 2px dashed #00d2ff; color: #00ffcc; text-align: center; outline: none; font-family: 'Inter', sans-serif;">
            </div>
            <div style="margin-top: 25px; display: flex; justify-content: center; width: 100%;">
                <button id="tiet3-btn-finish" class="interactive-btn" style="font-size: 20pt; padding: 12px 36px; background: #ffeb3b; color: #000; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; box-shadow: 0 0 15px rgba(255, 235, 59, 0.5); display: flex; align-items: center; justify-content: center; text-align: center;">HOÀN THÀNH</button>
            </div>
        </div>
        <div class="abs-element" style="bottom: 40px; right: 40px; transform: rotate(-15deg); border: 4px solid #ff3333; color: #ff3333; font-size: 16pt; font-weight: bold; padding: 8px 12px; border-radius: 8px; text-align: center; background: rgba(255, 255, 255, 0.95); z-index: 5; font-family: 'Inter', sans-serif;">
            <div>VIỆN CÔNG NGHỆ</div>
            <div style="font-size: 13pt; border-top: 2px solid #ff3333; margin-top: 4px; padding-top: 4px;">NOVASTARS</div>
        </div>
        `
    }
];
