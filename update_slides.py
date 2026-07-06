import json
import re

with open('slides.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the slide array
match = re.search(r'const slides = (\[.*?\]);', content, re.DOTALL)
if not match:
    print("Could not parse slides.js")
    exit(1)

slides_str = match.group(1)
# evaluate the JS array is hard in python, let's just do text manipulation

# Find Slide 21
slide_21_idx = content.find('id: 21,')
# Find the end of Slide 21
slide_22_idx = content.find('id: 22,')

slide_21b_content = """    {
        id: 22,
        content: `
        <div class="top-center-layout abs-element" style="top: 5%; width: 100%;">
            <div class="title editable draggable" style="font-size: 32pt;">ĐÁP ÁN</div>
        </div>
        <div class="center-layout abs-element dashboard-card" style="width: 80%; text-align: left; border-color: #00ffcc;">
            <div class="body-text editable draggable" style="font-size: 24pt; line-height: 1.8;">
                <ul style="margin-left: 30px; list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 15px;"><span style="color: #ff3333;">❌ Viết hộ mình bài văn</span> ➔ <span style="color: #00ffcc; font-weight: bold;">Gợi ý dàn ý.</span></li>
                    <li style="margin-bottom: 15px;"><span style="color: #ff3333;">❌ Làm hết bài tập Toán</span> ➔ <span style="color: #00ffcc; font-weight: bold;">Giải thích cách làm.</span></li>
                    <li style="margin-bottom: 15px;"><span style="color: #ff3333;">❌ Cho đáp án luôn</span> ➔ <span style="color: #00ffcc; font-weight: bold;">Kiểm tra bài làm.</span></li>
                    <li style="margin-bottom: 15px;"><span style="color: #ff3333;">❌ Trả lời hết câu hỏi</span> ➔ <span style="color: #00ffcc; font-weight: bold;">Đặt câu hỏi để tự trả lời.</span></li>
                </ul>
            </div>
        </div>
        `
    },
"""

# We need to shift IDs for 22..38 to 23..39
new_content_after_21 = content[slide_22_idx:]
# Replace ids
for i in range(38, 21, -1):
    new_content_after_21 = new_content_after_21.replace(f'id: {i},', f'id: {i+1},')

new_full_content = content[:slide_22_idx] + slide_21b_content + new_content_after_21

# Double all pt values to make it larger? The user says "như trong mô tả", let's scale it using CSS instead.
# Actually let's just write this to slides.js
with open('slides.js', 'w', encoding='utf-8') as f:
    f.write(new_full_content)

print("Added Slide 21B and shifted IDs successfully.")
