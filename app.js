document.addEventListener('DOMContentLoaded', () => {
    const LOCAL_STORAGE_KEY = 'ai_lesson_slides_data_38_v3';
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
    for (let i = 0; i < totalSlides; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Slide ${i + 1}`;
        slideSelectorEl.appendChild(option);
    }

    // Navigation logic
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        
        // Save current slide data if in edit mode before leaving
        if (isEditMode) {
            updateCurrentSlideData();
        }

        currentSlideIndex = index;
        renderSlide();
        
        // Update UI
        currentSlideEl.textContent = currentSlideIndex + 1;
        slideSelectorEl.value = currentSlideIndex;
        
        btnPrev.disabled = currentSlideIndex === 0;
        btnNext.disabled = currentSlideIndex === totalSlides - 1;
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
        
        // Slide 1: Typewriter effect
        if (currentSlideIndex === 0 && !isEditMode) {
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

        // Slide 5: Flash Warning Animation
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

        // Slide 12: Modal Popup
        if (currentSlideIndex === 11) { // Slide 12
            const btnShowTask = slideContentEl.querySelector('#btn-show-task');
            const taskModal = slideContentEl.querySelector('#task-modal');
            const btnCloseTask = slideContentEl.querySelector('#btn-close-task');
            
            if (btnShowTask && taskModal && btnCloseTask) {
                btnShowTask.addEventListener('click', () => {
                    taskModal.classList.remove('hidden');
                    taskModal.style.opacity = '1';
                    taskModal.style.pointerEvents = 'auto';
                });
                btnCloseTask.addEventListener('click', () => {
                    taskModal.style.opacity = '0';
                    taskModal.style.pointerEvents = 'none';
                    setTimeout(() => taskModal.classList.add('hidden'), 300);
                });
            }
        }

        // Slide 36: Checkbox & Stamp
        if (currentSlideIndex === 35) { // Slide 36
            const btnCommit = slideContentEl.querySelector('#btn-commit');
            const stampContainer = slideContentEl.querySelector('#stamp-container');
            const classNameInput = slideContentEl.querySelector('#class-name-input');
            
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
        }

        // Slide 38: Confetti
        if (currentSlideIndex === 37) { // Slide 38
            const btnFinish = slideContentEl.querySelector('#btn-finish');
            const teamNameInput = slideContentEl.querySelector('#team-name-input');
            
            if (btnFinish) {
                btnFinish.addEventListener('click', () => {
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

                // allow enter key on input to trigger button
                if(teamNameInput) {
                    teamNameInput.addEventListener('keypress', function(e) {
                        if (e.key === 'Enter') {
                            btnFinish.click();
                        }
                    });
                }
            }
        }

        // Timers Logic (Slides 9, 16, 21, 26, 31, 34)
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
        
        // Only allow dragging if it has draggable class, or if in edit mode
        if (!isEditMode && !e.target.classList.contains('draggable')) return;
        
        // Find nearest draggable
        let target = e.target;
        while (target && !target.classList.contains('draggable')) {
            if (target === slideContentEl) return; // Didn't find
            target = target.parentElement;
        }

        if (target) {
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

    function updateCurrentSlideData() {
        // Clean up classes before saving
        const clone = slideContentEl.cloneNode(true);
        const editables = clone.querySelectorAll('.editable');
        editables.forEach(el => {
            el.contentEditable = false;
            el.classList.remove('editing-active');
        });
        
        // If typewriter was used, we need to save the final text, which is what is currently there.
        // But we shouldn't save the interval state. cloneNode captures the innerHTML which is good.
        
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
    });

    // Initial render
    goToSlide(0);
});
