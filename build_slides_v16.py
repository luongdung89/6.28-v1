import json

slides = []

# SLIDE 1
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="font-weight: bold; font-size: 16pt; margin-bottom: 20px;">Bài 6.28</div>
            <div class="title editable draggable typewriter-effect" style="font-size: 44pt;">Dùng AI thế nào để học chủ động hơn?</div>
        </div>
""")

# SLIDE 2
slides.append("""
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
""")

# SLIDE 3
slides.append("""
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center; border-color: var(--primary-purple);">
            <div class="title editable draggable" style="font-size: 36pt; margin-bottom: 20px; color: #ffeb3b;">Chuyên gia Công nghệ AI</div>
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.6;">
                Nhiệm vụ: Điều tra nguyên nhân học sinh phụ thuộc AI và xây dựng quy trình sử dụng AI đúng cách.
            </div>
        </div>
""")

# SLIDE 4
slides.append("""
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center; border-color: #ffeb3b;">
            <div class="title editable draggable" style="font-size: 26pt; margin-bottom: 20px; color: #00ffcc;">CÂU HỎI LỚN</div>
            <div class="body-text editable draggable" style="font-size: 24pt; font-weight: bold; line-height: 1.6;">
                Làm thế nào để sử dụng AI để học tốt hơn mà không phụ thuộc vào AI?
            </div>
        </div>
""")

# SLIDE 5
slides.append("""
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
""")

# SLIDE 6
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">Giai đoạn 1</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Mở khoá nhiệm vụ</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Phân tích tình huống của bạn Bách để tìm nguyên nhân bị giáo viên phê bình.</div>
        </div>
""")

# SLIDE 7
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Nhóm 2
                </div>
            </div>
        </div>
""")

# SLIDE 8
slides.append("""
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
""")

# SLIDE 9
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">Điều tra sự cố AI</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Quan sát tình huống, thảo luận và tìm nguyên nhân.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 10%; width: 80%; height: auto; padding: 30px; text-align: left; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.6;">
                Bạn Bách được giao viết bài văn kể về một trải nghiệm đáng nhớ.<br>
                Vì sắp đến giờ nộp bài nên Bách nhờ AI viết hộ.<br>
                AI viết một bài văn rất hay kể về chuyến đi trượt tuyết ở Sa Pa.<br>
                Tuy nhiên, giáo viên lại cho Bách điểm không tốt và phê bình Bách trước lớp.
                <hr style="border-color: rgba(0, 210, 255, 0.3); margin: 20px 0;">
                <p style="color: #ffeb3b;"><strong>Câu hỏi:</strong></p>
                <ol style="margin-left: 30px; font-size: 24pt; line-height: 1.5;">
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
""")

# SLIDE 10
slides.append("""
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
""")

# SLIDE 11
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">Giai đoạn 2</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Nhận yêu cầu từ khách hàng</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Tiếp nhận yêu cầu từ khách hàng<br>để xác định vấn đề cần giải quyết.</div>
        </div>
""")

# SLIDE 12
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 26pt;">HỒ SƠ NHIỆM VỤ</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: center; position: absolute;">
            <div class="body-text editable draggable" style="font-size: 18pt; text-align: center; display: flex; justify-content: center; width: 100%;">
                <button onclick="document.getElementById('task-modal').style.display='flex'" class="interactive-btn" style="font-size: 20pt; padding: 15px 30px; background: rgba(0, 255, 204, 0.2); border: 2px solid #00ffcc; color: #00ffcc; cursor: pointer; border-radius: 8px;"><i class="fas fa-folder-open"></i> TRUY CẬP HỒ SƠ</button>
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
""")

# SLIDE 13
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">Giai đoạn 3</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Thu thập dữ liệu</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Phân loại các cách sử dụng AI để tìm ra những việc AI nên hỗ trợ người học.</div>
        </div>
""")

# SLIDE 14
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Bộ thẻ thông tin</li>
                    <li style="margin-bottom: 10px;">✔ Giấy</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Nhóm 4
                </div>
            </div>
        </div>
""")

# SLIDE 15
slides.append("""
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
""")

# SLIDE 16
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">AI nên làm gì:</div>
            <div class="subtitle editable draggable" style="font-size: 28pt; margin-top: 10px; color: #00ffcc;">Đọc các thẻ và phân loại vào đúng&nbsp;nhóm.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 220px; left: 5%; width: 90%; height: 460px; text-align: left; position: absolute; padding: 25px 35px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.3;">
                <p style="color: #ffeb3b; font-weight: bold; text-align: center; margin-bottom: 15px; font-size: 20pt;">Hãy đọc các thẻ thông tin dưới đây và phân loại vào đúng hai nhóm:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 20px;">
                    <div class="alg-block draggable" style="z-index: 10; padding: 8px 16px; background: rgba(0,210,255,0.2); border: 1px solid #00d2ff; border-radius: 5px; font-size: 15pt;">AI giúp giải thích bài</div>
                    <div class="alg-block draggable" style="z-index: 10; padding: 8px 16px; background: rgba(0,210,255,0.2); border: 1px solid #00d2ff; border-radius: 5px; font-size: 15pt;">Viết hộ bài văn</div>
                    <div class="alg-block draggable" style="z-index: 10; padding: 8px 16px; background: rgba(0,210,255,0.2); border: 1px solid #00d2ff; border-radius: 5px; font-size: 15pt;">Kiểm tra đáp án</div>
                    <div class="alg-block draggable" style="z-index: 10; padding: 8px 16px; background: rgba(0,210,255,0.2); border: 1px solid #00d2ff; border-radius: 5px; font-size: 15pt;">Cho mình dàn ý</div>
                    <div class="alg-block draggable" style="z-index: 10; padding: 8px 16px; background: rgba(0,210,255,0.2); border: 1px solid #00d2ff; border-radius: 5px; font-size: 15pt;">Làm luôn bài tập</div>
                    <div class="alg-block draggable" style="z-index: 10; padding: 8px 16px; background: rgba(0,210,255,0.2); border: 1px solid #00d2ff; border-radius: 5px; font-size: 15pt;">Gợi ý từ vựng</div>
                    <div class="alg-block draggable" style="z-index: 10; padding: 8px 16px; background: rgba(0,210,255,0.2); border: 1px solid #00d2ff; border-radius: 5px; font-size: 15pt;">Đặt câu hỏi để mình tự trả lời</div>
                    <div class="alg-block draggable" style="z-index: 10; padding: 8px 16px; background: rgba(0,210,255,0.2); border: 1px solid #00d2ff; border-radius: 5px; font-size: 15pt;">Kể hộ trải nghiệm</div>
                </div>
                <div style="display: flex; justify-content: space-around; margin-top: 15px;">
                    <div class="drop-zone" style="width: 45%; min-height: 160px; border: 3px dashed #00ffcc; border-radius: 10px; padding: 15px; position: relative;">
                        <span style="position: absolute; top: -18px; left: 10px; background: var(--bg-dark); color: #00ffcc; font-weight: bold; padding: 0 10px; font-size: 15pt;">AI NÊN HỖ TRỢ</span>
                    </div>
                    <div class="drop-zone" style="width: 45%; min-height: 160px; border: 3px dashed #ff3333; border-radius: 10px; padding: 15px; position: relative;">
                        <span style="position: absolute; top: -18px; left: 10px; background: var(--bg-dark); color: #ff3333; font-weight: bold; padding: 0 10px; font-size: 15pt;">KHÔNG NÊN YÊU CẦU AI</span>
                    </div>
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
""")

# SLIDE 17
slides.append("""
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
""")

# SLIDE 18
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">Giai đoạn 4</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Phân tích thông tin</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Phân tích các câu lệnh và chỉnh sửa để AI hỗ trợ học tập thay vì làm thay.</div>
        </div>
""")

# SLIDE 19
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Phiếu câu lệnh</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Nhóm 2
                </div>
            </div>
        </div>
""")

# SLIDE 20
slides.append("""
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
""")

# SLIDE 21
slides.append("""
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
""")

# SLIDE 22
slides.append("""
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
""")

# SLIDE 23
slides.append("""
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
""")

# SLIDE 24
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">Giai đoạn 5</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Đóng gói thuật toán</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Hoàn thiện quy trình học chủ động cùng AI để chuẩn bị đưa vào thử nghiệm.</div>
        </div>
""")

# SLIDE 25
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Phiếu sơ đồ quy trình</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Nhóm 4
                </div>
            </div>
        </div>
""")

# SLIDE 26
slides.append("""
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
""")

# SLIDE 27
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 40pt;">Lắp ráp quy trình học chủ động</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Sắp xếp các mảnh ghép thuật toán học tập chủ động với AI theo đúng trình tự:</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 260px; left: 10%; width: 80%; height: 420px; text-align: left; position: absolute; padding: 20px 25px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 18pt; line-height: 1.3;">
                <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 25px;">
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.4); border: 2px solid var(--primary-purple); padding: 6px 16px; border-radius: 8px; color: #fff; font-size: 16pt;">Nêu điều mình chưa hiểu</div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.4); border: 2px solid var(--primary-purple); padding: 6px 16px; border-radius: 8px; color: #fff; font-size: 16pt;">Nhờ AI giải thích</div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.4); border: 2px solid var(--primary-purple); padding: 6px 16px; border-radius: 8px; color: #fff; font-size: 16pt;">Tự làm</div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.4); border: 2px solid var(--primary-purple); padding: 6px 16px; border-radius: 8px; color: #fff; font-size: 16pt;">Nhờ AI góp ý</div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.4); border: 2px solid var(--primary-purple); padding: 6px 16px; border-radius: 8px; color: #fff; font-size: 16pt;">Chép nguyên bài AI</div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.4); border: 2px solid var(--primary-purple); padding: 6px 16px; border-radius: 8px; color: #fff; font-size: 16pt;">Nộp bài ngay</div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.4); border: 2px solid var(--primary-purple); padding: 6px 16px; border-radius: 8px; color: #fff; font-size: 16pt;">Không cần đọc lại</div>
                    <div class="alg-block draggable" style="background: rgba(122, 0, 255, 0.4); border: 2px solid var(--primary-purple); padding: 6px 16px; border-radius: 8px; color: #fff; font-size: 16pt;">Bỏ qua bước tự làm</div>
                </div>
                <div style="display: flex; justify-content: space-around; align-items: stretch; margin-top: 10px;">
                    <div class="drop-zone" style="flex: 1; min-height: 160px; margin: 0 10px; border: 2px dashed #00ffcc; border-radius: 10px; padding: 10px; background: rgba(0, 255, 204, 0.1); display: flex; align-items: center; justify-content: flex-start; flex-direction: column;">
                        <h4 style="color: #00ffcc; text-align: center; margin-bottom: 8px; font-size: 18pt; width: 100%;">Bước 1</h4>
                    </div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 24pt; display: flex; align-items: center;"></i>
                    <div class="drop-zone" style="flex: 1; min-height: 160px; margin: 0 10px; border: 2px dashed #00ffcc; border-radius: 10px; padding: 10px; background: rgba(0, 255, 204, 0.1); display: flex; align-items: center; justify-content: flex-start; flex-direction: column;">
                        <h4 style="color: #00ffcc; text-align: center; margin-bottom: 8px; font-size: 18pt; width: 100%;">Bước 2</h4>
                    </div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 24pt; display: flex; align-items: center;"></i>
                    <div class="drop-zone" style="flex: 1; min-height: 160px; margin: 0 10px; border: 2px dashed #00ffcc; border-radius: 10px; padding: 10px; background: rgba(0, 255, 204, 0.1); display: flex; align-items: center; justify-content: flex-start; flex-direction: column;">
                        <h4 style="color: #00ffcc; text-align: center; margin-bottom: 8px; font-size: 18pt; width: 100%;">Bước 3</h4>
                    </div>
                    <i class="fas fa-arrow-right" style="color: #00ffcc; font-size: 24pt; display: flex; align-items: center;"></i>
                    <div class="drop-zone" style="flex: 1; min-height: 160px; margin: 0 10px; border: 2px dashed #00ffcc; border-radius: 10px; padding: 10px; background: rgba(0, 255, 204, 0.1); display: flex; align-items: center; justify-content: flex-start; flex-direction: column;">
                        <h4 style="color: #00ffcc; text-align: center; margin-bottom: 8px; font-size: 18pt; width: 100%;">Bước 4</h4>
                    </div>
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
""")

# SLIDE 28
slides.append("""
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
""")

# SLIDE 29
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">Giai đoạn 6</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Thử nghiệm quy trình</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Áp dụng quy trình học chủ động cùng AI để giải quyết một tình huống học tập.</div>
        </div>
""")

# SLIDE 30
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">CHUẨN BỊ</div>
        </div>
        <div class="center-layout abs-element" style="width: 80%; display: flex; justify-content: space-between; top: 55%;">
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #00ffcc; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #00ffcc; font-size: 26pt; margin-bottom: 20px;">Dụng cụ</h3>
                <ul style="font-size: 24pt; color: #fff; list-style: none; padding: 0;">
                    <li style="margin-bottom: 10px;">✔ Phiếu tình huống</li>
                    <li>✔ Bút</li>
                </ul>
            </div>
            <div class="dashboard-card" style="width: 48%; height: 300px; text-align: center; border-color: #ffeb3b; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="color: #ffeb3b; font-size: 26pt; margin-bottom: 20px;">Hình thức tổ chức</h3>
                <div style="font-size: 30pt; font-weight: bold; color: #fff;">
                    Cá nhân
                </div>
            </div>
        </div>
""")

# SLIDE 31
slides.append("""
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
""")

# SLIDE 32
slides.append("""
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
""")

# SLIDE 33
slides.append("""
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
""")

# SLIDE 34
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">Giai đoạn 7</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Nhật kí chuyên gia</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Tổng kết kết quả sau khi thử nghiệm quy trình và ghi lại những điều đã học được.</div>
        </div>
""")

# SLIDE 35
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">Hoàn thành Nhật kí chuyên gia</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Hoàn thành Nhật kí chuyên gia sau khi kết thúc các nhiệm vụ.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 230px; left: 10%; width: 80%; height: 450px; text-align: left; position: absolute; padding: 30px 40px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 22pt; line-height: 1.4; width: 100%;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 25px; font-size: 24pt;">Nhật kí chuyên gia</p>
                <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 20px; width: 100%;">
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Điều em học được hôm nay:</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Thay đổi cách dùng AI:</span>
                        <input type="text" placeholder="Nhập câu trả lời..." style="background: transparent; border: none; border-bottom: 2px dashed #00ffcc; color: #00ffcc; font-size: 20pt; flex-grow: 1; outline: none; margin-left: 15px;">
                    </li>
                    <li style="display: flex; align-items: center; width: 100%;">
                        <span style="font-weight: bold; white-space: nowrap; font-size: 20pt; width: 480px; flex-shrink: 0;">• Điều em còn băn khoăn:</span>
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
""")

# SLIDE 36
slides.append("""
        <div class="center-layout abs-element" style="width: 100%; text-align: center;">
            <div class="subtitle editable draggable" style="color: var(--primary-purple); font-size: 26pt; margin-bottom: 10px;">Giai đoạn 8</div>
            <div class="title editable draggable" style="font-size: 32pt; margin-bottom: 30px;">Vận hành hệ thống</div>
            <div class="body-text editable draggable" style="font-size: 24pt; max-width: 80%; margin: 0 auto;">Lập kế hoạch áp dụng quy trình học chủ động cùng AI vào thực tế học tập và đưa hệ thống học chủ động vào vận hành.</div>
        </div>
""")

# SLIDE 37
slides.append("""
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 44pt;">THỬ THÁCH</div>
            <div class="subtitle editable draggable" style="font-size: 24pt; margin-top: 10px; color: #00ffcc;">Hãy vận hành hệ thống học chủ động cùng AI bằng cách áp dụng vào một môn học trong tuần tới.</div>
        </div>
        <div class="abs-element dashboard-card chat-box" style="top: 260px; left: 10%; width: 80%; height: 420px; text-align: left; position: absolute; padding: 30px 40px; box-sizing: border-box;">
            <div class="body-text editable draggable" style="font-size: 20pt; line-height: 1.4;">
                <p style="color: #ffeb3b; font-weight: bold; margin-bottom: 10px;">Thử thách "Học chủ động cùng AI"</p>
                <p style="margin-bottom: 8px;">Trong tuần này, hãy chọn một môn học (Toán, Khoa học, Tiếng Anh, Lịch sử, Địa lí,...) và áp dụng quy trình học chủ động cùng AI.</p>
                <p style="margin-bottom: 8px;">Thực hiện đầy đủ 4 bước:</p>
                <ul style="list-style-type: disc; margin-left: 30px; font-size: 18pt;">
                    <li style="margin-bottom: 5px;">Nêu điều em chưa hiểu.</li>
                    <li style="margin-bottom: 5px;">Nhờ AI giải thích hoặc gợi ý.</li>
                    <li style="margin-bottom: 5px;">Tự hoàn thành bài.</li>
                    <li>Nhờ AI góp ý.</li>
                </ul>
            </div>
        </div>
""")

# SLIDE 38
slides.append("""
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
""")

# SLIDE 39
slides.append("""
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
""")

# SLIDE 40
slides.append("""
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
        <div class="abs-element" style="bottom: 40px; right: 40px; transform: rotate(-15deg); border: 4px solid #ff3333; color: #ff3333; font-size: 16pt; font-weight: bold; padding: 8px 12px; border-radius: 8px; text-align: center; background: rgba(255, 255, 255, 0.05); z-index: 5; font-family: 'Inter', sans-serif;">
            <div>VIỆN NGHIÊN CỨU</div>
            <div style="font-size: 13pt; border-top: 2px solid #ff3333; margin-top: 4px; padding-top: 4px;">NOVASTARS</div>
        </div>
""")

with open('slides.js', 'w', encoding='utf-8') as f:
    f.write('const slides = [\n')
    for i, content in enumerate(slides):
        f.write('    {\n')
        f.write(f'        id: {i+1},\n')
        f.write('        content: `')
        f.write(content)
        f.write('`\n')
        f.write('    }')
        if i < len(slides) - 1:
            f.write(',')
        f.write('\n')
    f.write('];\n')

print(f"Generated {len(slides)} slides successfully.")
