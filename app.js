document.addEventListener('DOMContentLoaded', () => {
    const LOCAL_STORAGE_KEY = 'ai_lesson_slides_data_38_v32';
    let slideData = [];
    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    let isEditMode = false;
    let isFullscreen = false;

    // Load data from localStorage or use default
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        try {
            let parsed = JSON.parse(savedData);
            if (parsed && parsed.length === totalSlides) {
                slideData = parsed;
            } else {
                slideData = JSON.parse(JSON.stringify(slides));
                saveData();
            }
        } catch(e) {
            slideData = JSON.parse(JSON.stringify(slides));
            saveData();
        }
    } else {
        slideData = JSON.parse(JSON.stringify(slides));
    }

    // DOM Elements
    const slideContentEl = document.getElementById('slide-content');
    const presentationFrame = document.getElementById('presentation-frame');

    // Initialization
    const currentSlideEl = document.getElementById('current-slide');
    const totalSlidesEl = document.getElementById('total-slides');
    const slideSelectorEl = document.getElementById('slide-selector');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnEditMode = document.getElementById('btn-edit-mode');
    const btnSave = document.getElementById('btn-save');
    const btnPresentMode = document.getElementById('btn-present-mode');
    const appContainer = document.getElementById('app-container');

    // Initialize slide selector
    totalSlidesEl.textContent = totalSlides;
    function getSlideRange(slideIndex) {
        if (slideIndex < 40) {
            return { start: 0, end: Math.min(39, totalSlides - 1), length: Math.min(40, totalSlides), tiet: 1 };
        } else if (slideIndex < 83) {
            return { start: 40, end: Math.min(82, totalSlides - 1), length: Math.min(43, totalSlides - 40), tiet: 2 };
        } else {
            return { start: 83, end: totalSlides - 1, length: Math.max(0, totalSlides - 83), tiet: 3 };
        }
    }

    function rebuildSlideSelector(tiet) {
        const range = getSlideRange(tiet === 1 ? 0 : (tiet === 2 ? 40 : 83));
        const oldVal = slideSelectorEl.value;
        slideSelectorEl.innerHTML = '';
        for (let i = range.start; i <= range.end; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = `Slide ${i - range.start + 1}`;
            slideSelectorEl.appendChild(opt);
        }
        if (oldVal >= range.start && oldVal <= range.end) {
            slideSelectorEl.value = oldVal;
        }
    }

    // Initialize Tiet buttons
    const btnTiet1 = document.getElementById('btn-tiet-1');
    const btnTiet2 = document.getElementById('btn-tiet-2');
    const btnTiet3 = document.getElementById('btn-tiet-3');
    
    if (btnTiet1) btnTiet1.addEventListener('click', () => goToSlide(0, true));
    if (btnTiet2) btnTiet2.addEventListener('click', () => goToSlide(40, true));
    if (btnTiet3) btnTiet3.addEventListener('click', () => goToSlide(83, true));

    // Scaling logic for accurate pt rendering like PowerPoint
    function resizeSlide() {
        const baseWidth = 1280;
        const baseHeight = 720;
        
        slideContentEl.style.width = baseWidth + 'px';
        slideContentEl.style.height = baseHeight + 'px';
        slideContentEl.style.position = 'absolute';
        slideContentEl.style.left = '50%';
        slideContentEl.style.top = '50%';
        slideContentEl.style.transformOrigin = 'center center';
        
        const scaleX = presentationFrame.clientWidth / baseWidth;
        const scaleY = presentationFrame.clientHeight / baseHeight;
        const scale = Math.min(scaleX, scaleY);
        
        slideContentEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }

    window.addEventListener('resize', resizeSlide);
    // Call once to set initial scale
    resizeSlide();

    // Navigation logic
    function goToSlide(index, isTietSwitch = false) {
        if (index < 0 || index >= totalSlides) return;
        
        // Save current slide data if in edit mode before leaving
        if (isEditMode) {
            updateCurrentSlideData();
        }

        const oldRange = getSlideRange(currentSlideIndex);
        currentSlideIndex = index;
        const newRange = getSlideRange(currentSlideIndex);
        
        const tietChanged = (oldRange.tiet !== newRange.tiet);
        
        if (isTietSwitch || tietChanged || slideSelectorEl.options.length === 0) {
            rebuildSlideSelector(newRange.tiet);
            renderSidebar();
        }
        
        renderSlide();
        
        // Update UI
        currentSlideEl.textContent = currentSlideIndex - newRange.start + 1;
        totalSlidesEl.textContent = newRange.length;
        slideSelectorEl.value = currentSlideIndex;
        
        btnPrev.disabled = currentSlideIndex === newRange.start;
        btnNext.disabled = currentSlideIndex === newRange.end;
        
        updateActivityProgress();
    }

    // Expose goToSlide globally for sidebar click navigation
    window.goToSlide = goToSlide;

    function updateActivityProgress() {
        const currentRange = getSlideRange(currentSlideIndex);
        const progressPercentage = Math.round(((currentSlideIndex - currentRange.start + 1) / currentRange.length) * 100);
        const progressFill = document.getElementById('progress-fill');
        const progressPercentageEl = document.getElementById('progress-percentage');
        
        if (progressFill) progressFill.style.width = `${progressPercentage}%`;
        if (progressPercentageEl) progressPercentageEl.textContent = `${progressPercentage}%`;
        
        // Update Tiet navigation active states
        if (btnTiet1 && btnTiet2 && btnTiet3) {
            btnTiet1.classList.toggle('active', currentRange.tiet === 1);
            btnTiet2.classList.toggle('active', currentRange.tiet === 2);
            btnTiet3.classList.toggle('active', currentRange.tiet === 3);
        }

        // Update Left Sidebar items active states
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            const idx = parseInt(item.getAttribute('data-slide-index'), 10);

            if (currentSlideIndex === idx) {
                item.classList.add('active');
                // Scroll the active item into view inside the sidebar
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Timer variables
    let currentTimerInterval = null;

    function renderSlide() {
        // Clear previous timers if any
        if (currentTimerInterval) {
            clearInterval(currentTimerInterval);
            currentTimerInterval = null;
        }

        const slide = slideData[currentSlideIndex];
        slideContentEl.innerHTML = slide.content;
        slideContentEl.setAttribute('data-slide-id', slide.id);

        const draggables = slideContentEl.querySelectorAll('.draggable');
        draggables.forEach(el => {
            el.style.cursor = 'move';
            el.addEventListener('mousedown', dragStart);
        });

        // Apply edit mode if active
        if (isEditMode) {
            enableEditModeOnElements();
        } else {
            disableEditModeOnElements();
        }

        // --- SPECIFIC SLIDE INTERACTIONS ---
        
        // Typewriter effect on lesson start slides
        if ((currentSlideIndex === 0 || currentSlideIndex === 40 || currentSlideIndex === 83) && !isEditMode) {
            const twElements = slideContentEl.querySelectorAll('.typewriter-effect');
            twElements.forEach(el => {
                const text = el.textContent || '';
                el.textContent = '';
                let i = 0;
                function type() {
                    if (i < text.length) {
                        el.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, 50);
                    }
                }
                setTimeout(type, 300); // slight delay before typing starts
            });
        }

        // Warning Slide Flash Warning Animation
        if (slide.isWarningSlide && !isEditMode) {
            const warningBox = slideContentEl.querySelector('.warning-box');
            let flashes = 0;
            const flashInterval = setInterval(() => {
                if(warningBox) {
                    warningBox.style.background = flashes % 2 === 0 ? 'rgba(255, 0, 0, 0.8)' : 'rgba(255, 0, 0, 0.2)';
                    flashes++;
                    if(flashes >= 6) {
                        clearInterval(flashInterval);
                        warningBox.style.background = 'rgba(255, 0, 0, 0.2)';
                    }
                }
            }, 500);
        }

        // Modal Popups (Generic support for Slide 12, Tiet 2 / Tiet 3 task modals)
        const taskModal = slideContentEl.querySelector('#task-modal, #tiet2-task-modal, #tiet3-task-modal');
        const btnShowTask = slideContentEl.querySelector('#btn-show-task, #tiet2-btn-show-task, #tiet3-btn-show-task');
        const btnCloseTask = slideContentEl.querySelector('#btn-close-task, #tiet2-btn-close-task, #tiet3-btn-close-task');
        
        if (btnShowTask && taskModal && btnCloseTask) {
            btnShowTask.addEventListener('click', () => {
                taskModal.style.display = 'flex';
                taskModal.classList.remove('hidden');
                taskModal.style.opacity = '1';
                taskModal.style.pointerEvents = 'auto';
            });
            btnCloseTask.addEventListener('click', () => {
                taskModal.style.opacity = '0';
                taskModal.style.pointerEvents = 'none';
                setTimeout(() => {
                    taskModal.classList.add('hidden');
                    taskModal.style.display = 'none';
                }, 300);
            });
        }

        // Checkbox & Stamp (Slide 39 / Tiết 3 Cam kết)
        const btnCommit = slideContentEl.querySelector('#btn-commit, #tiet3-btn-commit');
        const stampContainer = slideContentEl.querySelector('#stamp-container, #tiet3-stamp-container');
        const classNameInput = slideContentEl.querySelector('#class-name-input, #tiet3-class-name-input');
        
        if (btnCommit && stampContainer && classNameInput) {
            btnCommit.addEventListener('click', () => {
                if (classNameInput.value.trim() === '') {
                    alert("Vui lòng nhập tên lớp trước khi cam kết!");
                    return;
                }
                stampContainer.style.opacity = '1';
                stampContainer.style.transform = 'scale(1) rotate(-20deg)';
            });
        }

        // Finish & Confetti (Slide 40, Tiet 2 finish, Tiet 3 finish)
        const btnFinish = slideContentEl.querySelector('#btn-finish, #tiet2-btn-finish, #tiet3-btn-finish');
        const teamNameInput = slideContentEl.querySelector('#team-name-input, #tiet2-team-name-input, #tiet3-team-name-input');
        
        if (btnFinish) {
            btnFinish.addEventListener('click', () => {
                if (teamNameInput && teamNameInput.value.trim() === '') {
                    alert("Vui lòng nhập tên nhóm!");
                    return;
                }
                if (window.confetti) {
                    var duration = 3 * 1000;
                    var animationEnd = Date.now() + duration;
                    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

                    var interval = setInterval(function() {
                        var timeLeft = animationEnd - Date.now();
                        if (timeLeft <= 0) {
                            return clearInterval(interval);
                        }
                        var particleCount = 50 * (timeLeft / duration);
                        window.confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
                    }, 250);
                }
            });

            if (teamNameInput) {
                teamNameInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        btnFinish.click();
                    }
                });
            }
        }

        // Timers Logic (Generic container search)
        const timerContainer = slideContentEl.querySelector('.timer-container');
        if (timerContainer) {
            const timerDisplay = timerContainer.querySelector('.timer-display');
            const btnStart = timerContainer.querySelector('.start-btn');
            const btnPause = timerContainer.querySelector('.pause-btn');
            const btnReset = timerContainer.querySelector('.reset-btn');
            
            if (timerDisplay && btnStart && btnPause && btnReset) {
                const totalTime = parseInt(timerDisplay.getAttribute('data-time'), 10);
                let timeRemaining = totalTime;
                let isRunning = false;

                function updateDisplay() {
                    let m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
                    let s = (timeRemaining % 60).toString().padStart(2, '0');
                    timerDisplay.textContent = m + ':' + s;
                    
                    if (timeRemaining <= 10) {
                        timerDisplay.style.color = '#ff3333';
                    } else {
                        timerDisplay.style.color = 'var(--primary-blue)';
                    }
                }

                function tick() {
                    if (timeRemaining > 0) {
                        timeRemaining--;
                        updateDisplay();
                    } else {
                        clearInterval(currentTimerInterval);
                        isRunning = false;
                        // Time's up effect
                        let flashes = 0;
                        const alarmInterval = setInterval(() => {
                            slideContentEl.style.backgroundColor = flashes % 2 === 0 ? 'rgba(255,0,0,0.4)' : 'transparent';
                            flashes++;
                            if (flashes >= 6) {
                                  clearInterval(alarmInterval);
                                  slideContentEl.style.backgroundColor = 'transparent';
                            }
                        }, 300);
                    }
                }

                btnStart.addEventListener('click', () => {
                    if (!isRunning && timeRemaining > 0) {
                        isRunning = true;
                        currentTimerInterval = setInterval(tick, 1000);
                    }
                });

                btnPause.addEventListener('click', () => {
                    if (isRunning) {
                        clearInterval(currentTimerInterval);
                        isRunning = false;
                    }
                });

                btnReset.addEventListener('click', () => {
                    clearInterval(currentTimerInterval);
                    isRunning = false;
                    timeRemaining = totalTime;
                    updateDisplay();
                });

                // Init display
                updateDisplay();
            }
        }
        
        // Run slide layout QA check
        auditSlideLayout();
    }

    function auditSlideLayout() {
        // Wait a small delay to let styling and font scaling settle
        setTimeout(() => {
            const slide = slideData[currentSlideIndex];
            if (!slide) return;
            const title = slideContentEl.querySelector('.title');
            const subtitle = slideContentEl.querySelector('.subtitle');
            const cards = slideContentEl.querySelectorAll('.dashboard-card');
            
            if (title && subtitle) {
                const titleRect = title.getBoundingClientRect();
                const subRect = subtitle.getBoundingClientRect();
                
                // 1. Check title and subtitle overlap
                if (titleRect.bottom > subRect.top + 2) {
                    console.warn(`%c[QA Agent] Slide ${currentSlideIndex + 1} (ID: ${slide.id}) - Cảnh báo: Tiêu đề đè lên Phụ đề!`, "color: #ffaa00; font-weight: bold;");
                }
                
                // 2. Check subtitle and cards overlap
                cards.forEach((card, idx) => {
                    const cardRect = card.getBoundingClientRect();
                    if (subRect.bottom > cardRect.top + 2) {
                        console.warn(`%c[QA Agent] Slide ${currentSlideIndex + 1} (ID: ${slide.id}) - Cảnh báo: Phụ đề đè lên Khung nội dung!`, "color: #ff3333; font-weight: bold;");
                    }
                });
            }
        }, 400);
    }

    // Event Listeners for Navigation
    btnPrev.addEventListener('click', () => goToSlide(currentSlideIndex - 1));
    btnNext.addEventListener('click', () => goToSlide(currentSlideIndex + 1));
    slideSelectorEl.addEventListener('change', (e) => {
        goToSlide(parseInt(e.target.value, 10));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only if not editing text
        if (e.target.isContentEditable || e.target.tagName === 'INPUT') return;
        
        if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
            goToSlide(currentSlideIndex + 1);
        } else if (e.key === 'ArrowLeft') {
            goToSlide(currentSlideIndex - 1);
        }
    });

    // --- EDIT MODE LOGIC ---
    let draggedElement = null;
    let offsetX = 0, offsetY = 0;

    function enableEditModeOnElements() {
        const editables = slideContentEl.querySelectorAll('.editable');
        editables.forEach(el => {
            el.contentEditable = true;
            el.classList.add('editing-active');
        });

        const draggables = slideContentEl.querySelectorAll('.draggable');
        draggables.forEach(el => {
            el.style.cursor = 'move';
            el.addEventListener('mousedown', dragStart);
        });
    }

    function disableEditModeOnElements() {
        const editables = slideContentEl.querySelectorAll('.editable');
        editables.forEach(el => {
            el.contentEditable = false;
            el.classList.remove('editing-active');
        });
    }

    function dragStart(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
        
        let target = e.target;
        while (target && !target.classList.contains('draggable')) {
            if (target === slideContentEl) return; // Didn't find
            target = target.parentElement;
        }

        if (target) {
            // Only allow dragging if in edit mode, OR if it's explicitly a game piece (.alg-block)
            if (!isEditMode && !target.classList.contains('alg-block')) return;

            draggedElement = target;
            const rect = draggedElement.getBoundingClientRect();
            const parentRect = slideContentEl.getBoundingClientRect();
            
            // If it's not absolute, make it absolute relative to slideContentEl
            if (window.getComputedStyle(draggedElement).position !== 'absolute') {
                // Calculate current position relative to slideContentEl in percentages
                const leftPercent = ((rect.left - parentRect.left) / parentRect.width) * 100;
                const topPercent = ((rect.top - parentRect.top) / parentRect.height) * 100;
                
                // Append to slideContentEl so it isn't clipped by parent
                slideContentEl.appendChild(draggedElement);
                
                draggedElement.style.position = 'absolute';
                draggedElement.style.left = leftPercent + '%';
                draggedElement.style.top = topPercent + '%';
                draggedElement.style.margin = '0';
            }

            // Recalculate rect after potential DOM changes
            const newRect = draggedElement.getBoundingClientRect();
            offsetX = e.clientX - newRect.left;
            offsetY = e.clientY - newRect.top;
            
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', dragEnd);
        }
    }

    function drag(e) {
        if (!draggedElement) return;
        e.preventDefault();
        
        const parentRect = slideContentEl.getBoundingClientRect();
        
        let newX = e.clientX - parentRect.left - offsetX;
        let newY = e.clientY - parentRect.top - offsetY;

        // Convert to percentages for responsiveness
        const leftPercent = (newX / parentRect.width) * 100;
        const topPercent = (newY / parentRect.height) * 100;

        draggedElement.style.left = leftPercent + '%';
        draggedElement.style.top = topPercent + '%';
        draggedElement.style.transform = 'none'; // Clear any centering transforms if dragged
    }

    function dragEnd(e) {
        if (!draggedElement) return;

        // Snapping logic for specific drop zones
        const dropZones = document.querySelectorAll('.snap-center');
        
        dropZones.forEach(zone => {
            const rect = zone.getBoundingClientRect();
            // Check if mouse is over this drop zone
            if (e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                
                const parentRect = slideContentEl.getBoundingClientRect();
                const zoneCenterX = rect.left + rect.width / 2;
                const zoneCenterY = rect.top + rect.height / 2;
                
                const draggedRect = draggedElement.getBoundingClientRect();
                
                const newX = zoneCenterX - parentRect.left - (draggedRect.width / 2);
                const newY = zoneCenterY - parentRect.top - (draggedRect.height / 2);
                
                const leftPercent = (newX / parentRect.width) * 100;
                const topPercent = (newY / parentRect.height) * 100;
                
                draggedElement.style.left = leftPercent + '%';
                draggedElement.style.top = topPercent + '%';
            }
        });

        draggedElement = null;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', dragEnd);
    }

    btnEditMode.addEventListener('click', () => {
        isEditMode = !isEditMode;
        if (isEditMode) {
            btnEditMode.classList.add('active');
            btnSave.classList.remove('hidden');
            enableEditModeOnElements();
        } else {
            btnEditMode.classList.remove('active');
            btnSave.classList.add('hidden');
            disableEditModeOnElements();
        }
    });

    btnSave.addEventListener('click', () => {
        updateCurrentSlideData();
        saveData();
        alert("Đã lưu thiết kế slide!");
    });

    const btnResetCache = document.getElementById('btn-reset-cache');
    if (btnResetCache) {
        btnResetCache.addEventListener('click', () => {
            if (confirm("Bạn có muốn khôi phục slides về phiên bản gốc không? (Tất cả chỉnh sửa đã lưu trước đây của bạn sẽ bị xóa)")) {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
                location.reload();
            }
        });
    }

    function updateCurrentSlideData() {
        // Clean up classes before saving
        const clone = slideContentEl.cloneNode(true);
        const editables = clone.querySelectorAll('.editable');
        editables.forEach(el => {
            el.contentEditable = false;
            el.classList.remove('editing-active');
        });
        
        slideData[currentSlideIndex].content = clone.innerHTML;
    }

    function saveData() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(slideData));
    }

    // --- FULLSCREEN LOGIC ---
    btnPresentMode.addEventListener('click', toggleFullScreen);

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            appContainer.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            isFullscreen = false;
            document.body.classList.remove('presentation-mode');
        } else {
            isFullscreen = true;
            document.body.classList.add('presentation-mode');
        }
        // Force recalculate scaling after UI changes
        setTimeout(resizeSlide, 50);
        setTimeout(resizeSlide, 200);
    });

    function getSlideTitle(content, slideIndex) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const titleEl = tempDiv.querySelector('.title');
        if (titleEl) {
            // Remove icon tags
            const icons = titleEl.querySelectorAll('i');
            icons.forEach(icon => icon.remove());
            return titleEl.innerText.replace(/<[^>]*>/g, '').replace(/\r?\n|\r/g, ' ').trim();
        }
        return `Slide ${slideIndex + 1}`;
    }

    function renderSidebar() {
        const sidebarMenu = document.querySelector('.sidebar-menu');
        if (!sidebarMenu) return;
        sidebarMenu.innerHTML = '';
        
        const currentRange = getSlideRange(currentSlideIndex);
        let phases = [];
        
        if (currentRange.tiet === 1) {
            phases = [
                { title: "MỞ ĐẦU", start: 0, end: 4 },
                { title: "GĐ 1: MỞ KHOÁ NHIỆM VỤ", start: 5, end: 9 },
                { title: "GĐ 2: Nhận yêu cầu", start: 10, end: 11 },
                { title: "GĐ 3: Thu thập dữ liệu", start: 12, end: 16 },
                { title: "GĐ 4: Phân tích thông tin", start: 17, end: 22 },
                { title: "GĐ 5: Đóng gói thuật toán", start: 23, end: 27 },
                { title: "GĐ 6: Thử nghiệm quy trình", start: 28, end: 32 },
                { title: "GĐ 7: Nhật kí chuyên gia", start: 33, end: 34 },
                { title: "GĐ 8: VẬN HÀNH HỆ THỐNG", start: 35, end: 39 }
            ];
        } else if (currentRange.tiet === 2) {
            phases = [
                { title: "MỞ ĐẦU BÀI HỌC", start: 40, end: 43 },
                { title: "GĐ 1: MỞ KHOÁ NHIỆM VỤ", start: 44, end: 53 },
                { title: "GĐ 2: NHẬN THÁCH THỨC", start: 54, end: 55 },
                { title: "GĐ 3: THU THẬP BẰNG CHỨNG", start: 56, end: 62 },
                { title: "GĐ 4: XÂY DỰNG LẬP LUẬN", start: 63, end: 67 },
                { title: "GĐ 5: DỰ DOÁN PHẢN BIỆN", start: 68, end: 72 },
                { title: "GĐ 6: HOÀN THIỆN HỒ SƠ", start: 73, end: 77 },
                { title: "GĐ 7: NHẬT KÝ CHUYÊN GIA", start: 78, end: 79 },
                { title: "GĐ 8: VẬN HÀNH HỆ THỐNG", start: 80, end: 82 }
            ];
        } else {
            phases = [
                { title: "MỞ ĐẦU BÀI HỌC", start: 83, end: 86 },
                { title: "GĐ 1: NHẬN LUẬT TRANH BIỆN", start: 87, end: 89 },
                { title: "GĐ 2: DIỄN TẬP", start: 90, end: 94 },
                { title: "GĐ 3: TRANH BIỆN & CHẤT VẤN", start: 95, end: 101 },
                { title: "GĐ 4: HỘI ĐỒNG KẾT LUẬN", start: 102, end: 107 },
                { title: "GĐ 5: NHẬT KÝ CHUYÊN GIA", start: 108, end: 109 },
                { title: "GĐ 6: CAM KẾT CHUYÊN GIA", start: 110, end: 111 },
                { title: "KHEN THƯỞNG VINH DANH", start: 112, end: 112 }
            ];
        }

        phases.forEach(phase => {
            // Section Header
            const header = document.createElement('div');
            header.className = 'menu-section-header';
            header.textContent = phase.title;
            sidebarMenu.appendChild(header);

            // Section Slides
            for (let i = phase.start; i <= phase.end; i++) {
                if (i >= totalSlides) break;
                
                const slide = slideData[i];
                const title = getSlideTitle(slide.content, i);
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.setAttribute('data-slide-index', i);
                menuItem.onclick = () => goToSlide(i);
                
                const relativeIndex = i - currentRange.start + 1;
                menuItem.innerHTML = `<span class="menu-text" title="${title}">${relativeIndex}. ${title}</span>`;
                sidebarMenu.appendChild(menuItem);
            }
        });
    }

    // --- ANAGRAM INTERACTIVE GAME LOGIC ---
    function resetAnagramGame(gameContainer) {
        const slots = gameContainer.querySelectorAll('.slot');
        const letterBlocks = gameContainer.querySelectorAll('.letter-block');
        const feedback = gameContainer.querySelector('.game-feedback');
        
        slots.forEach(slot => {
            slot.textContent = '';
            slot.className = 'slot';
            slot.removeAttribute('data-letter-id');
        });
        
        const pool = gameContainer.querySelector('.letter-pool');
        const expectedWord = gameContainer.getAttribute('data-word');
        if (pool && expectedWord) {
            const blocksArray = Array.from(letterBlocks);
            let isSorted = true;
            let tries = 0;
            
            while (isSorted && tries < 10) {
                for (let i = blocksArray.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    const temp = blocksArray[i];
                    blocksArray[i] = blocksArray[j];
                    blocksArray[j] = temp;
                }
                tries++;
                
                // Check if it spells the target word
                const shuffledSpelling = blocksArray.map(b => b.getAttribute('data-letter')).join('');
                if (shuffledSpelling !== expectedWord) {
                    isSorted = false;
                }
            }
            
            pool.innerHTML = '';
            blocksArray.forEach(block => {
                block.classList.remove('used');
                pool.appendChild(block);
            });
        } else {
            letterBlocks.forEach(block => {
                block.classList.remove('used');
            });
        }
        
        if (feedback) {
            feedback.textContent = '';
            feedback.style.color = '';
        }
    }

    function checkAnagramAnswer(gameContainer) {
        const slots = gameContainer.querySelectorAll('.slot');
        const feedback = gameContainer.querySelector('.game-feedback');
        const expectedWord = gameContainer.getAttribute('data-word');
        
        let allFilled = true;
        let spelledWord = '';
        slots.forEach(slot => {
            if (!slot.classList.contains('filled')) {
                allFilled = false;
            } else {
                spelledWord += slot.textContent;
            }
        });
        
        if (!allFilled) return;
        
        const cleanSpelled = spelledWord.replace(/\s+/g, '').toUpperCase();
        const cleanExpected = expectedWord.replace(/\s+/g, '').toUpperCase();
        
        // Helper to strip diacritics/accents for robust fallback matching
        const normalizeStr = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/Đ/g, "D");
        
        if (cleanSpelled === cleanExpected || normalizeStr(cleanSpelled) === normalizeStr(cleanExpected)) {
            slots.forEach(slot => {
                slot.classList.add('correct');
                slot.classList.remove('incorrect');
            });
            if (feedback) {
                feedback.textContent = '🎉 CHÍNH XÁC!';
                feedback.style.color = '#00ffcc';
            }
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.7 }
                });
            }
        } else {
            slots.forEach(slot => {
                slot.classList.add('incorrect');
                setTimeout(() => slot.classList.remove('incorrect'), 500);
            });
            if (feedback) {
                feedback.textContent = '❌ CHƯA ĐÚNG, HÃY THỬ LẠI!';
                feedback.style.color = '#ff3333';
            }
        }
    }

    document.addEventListener('click', (e) => {
        // 1. Handle Letter Block Click
        const letterBlock = e.target.closest('.letter-block');
        if (letterBlock && !letterBlock.classList.contains('used')) {
            const gameContainer = letterBlock.closest('.anagram-game');
            if (gameContainer) {
                const slots = gameContainer.querySelectorAll('.slot');
                let targetSlot = null;
                for (let slot of slots) {
                    if (!slot.classList.contains('filled')) {
                        targetSlot = slot;
                        break;
                    }
                }
                
                if (targetSlot) {
                    const letter = letterBlock.getAttribute('data-letter');
                    targetSlot.textContent = letter;
                    targetSlot.classList.add('filled');
                    const allBlocks = Array.from(gameContainer.querySelectorAll('.letter-block'));
                    targetSlot.setAttribute('data-letter-id', letterBlock.innerText + '_' + allBlocks.indexOf(letterBlock));
                    letterBlock.classList.add('used');
                    
                    checkAnagramAnswer(gameContainer);
                }
            }
            return;
        }

        // 2. Handle Slot Click (to return letter to pool)
        const slot = e.target.closest('.slot');
        if (slot && slot.classList.contains('filled')) {
            const gameContainer = slot.closest('.anagram-game');
            if (gameContainer) {
                if (slot.classList.contains('correct')) return;
                
                const letterId = slot.getAttribute('data-letter-id');
                const letterBlocks = gameContainer.querySelectorAll('.letter-block');
                
                const parts = letterId.split('_');
                const blockIdx = parseInt(parts[parts.length - 1], 10);
                if (letterBlocks[blockIdx]) {
                    letterBlocks[blockIdx].classList.remove('used');
                }
                
                slot.textContent = '';
                slot.classList.remove('filled', 'incorrect');
                slot.removeAttribute('data-letter-id');
                
                const feedback = gameContainer.querySelector('.game-feedback');
                if (feedback) {
                    feedback.textContent = '';
                    feedback.style.color = '';
                }
                
                gameContainer.querySelectorAll('.slot').forEach(s => s.classList.remove('incorrect'));
            }
            return;
        }

        // 3. Handle Reset Anagram Game Button
        const resetBtn = e.target.closest('.reset-game-btn');
        if (resetBtn) {
            const gameContainer = resetBtn.closest('.anagram-game');
            if (gameContainer) {
                resetAnagramGame(gameContainer);
            }
            return;
        }

        // 4. Handle MCQ Option Button Click
        const optionBtn = e.target.closest('.option-btn');
        if (optionBtn) {
            const optionsContainer = optionBtn.closest('.interactive-options');
            if (optionsContainer) {
                if (optionsContainer.classList.contains('solved')) return;
                
                const correctOpt = optionsContainer.getAttribute('data-correct');
                const selectedOpt = optionBtn.getAttribute('data-opt');
                const card = optionsContainer.closest('.chat-box');
                const blank = card ? card.querySelector('.answer-blank') : null;
                
                if (selectedOpt === correctOpt) {
                    optionBtn.classList.add('correct');
                    optionsContainer.classList.add('solved');
                    
                    if (blank) {
                        const text = optionBtn.textContent.replace(/^[A-C]\.\s*/, '');
                        blank.textContent = text;
                        blank.style.color = '#00ffcc';
                    }
                    
                    if (typeof confetti === 'function') {
                        confetti({
                            particleCount: 20,
                            spread: 40,
                            origin: { y: 0.8 }
                        });
                    }
                } else {
                    optionBtn.classList.add('interactive-btn-error'); // fallback error class if incorrect
                    optionBtn.classList.add('incorrect');
                    setTimeout(() => optionBtn.classList.remove('incorrect'), 500);
                }
            }
        }
    });

    // Auto-save on page exit or refresh
    window.addEventListener('beforeunload', () => {
        if (isEditMode) {
            updateCurrentSlideData();
            saveData();
        }
    });

    // Initial render
    renderSidebar();
    goToSlide(0, true);
});
