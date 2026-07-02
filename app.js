document.addEventListener('DOMContentLoaded', () => {
    window.onerror = function(msg, url, lineNo, columnNo, error) {
        alert("Lỗi JS: " + msg + "\nDòng: " + lineNo);
        return false;
    };
    const LOCAL_STORAGE_KEY = 'ai_lesson_slides_data_v2';
    let slideData = [];
    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    let isEditMode = false;
    let isFullscreen = false;

    // Load data from localStorage or use default
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
        slideData = JSON.parse(savedData);
        // If the number of slides changed in default data, merge it
        if (slideData.length !== slides.length) {
            slideData = [...slides];
            saveData();
        }
    } else {
        slideData = [...slides];
    }

    // DOM Elements
    const slideContentEl = document.getElementById('slide-content');
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
        
        // Save current slide edits if in edit mode
        if (isEditMode) {
            saveCurrentSlideDOM();
        }

        currentSlideIndex = index;
        currentSlideEl.textContent = currentSlideIndex + 1;
        slideSelectorEl.value = currentSlideIndex;
        
        renderSlide();
    }

    btnPrev.addEventListener('click', () => goToSlide(currentSlideIndex - 1));
    btnNext.addEventListener('click', () => goToSlide(currentSlideIndex + 1));
    slideSelectorEl.addEventListener('change', (e) => goToSlide(parseInt(e.target.value)));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!isEditMode) {
            if (e.key === 'ArrowRight' || e.key === ' ') goToSlide(currentSlideIndex + 1);
            if (e.key === 'ArrowLeft') goToSlide(currentSlideIndex - 1);
        }
    });

    // Render Slide
    function renderSlide() {
        // Clear current
        slideContentEl.innerHTML = '';
        
        // Create slide container
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide active';
        slideDiv.innerHTML = slideData[currentSlideIndex].content;
        slideContentEl.appendChild(slideDiv);

        setupInteractions(slideDiv);
        updateEditModeUI();
    }

    // Interaction setups (Timers, Scratch masks, Checkboxes, Nav targets)
    function setupInteractions(container) {
        // Nav targets
        container.querySelectorAll('.nav-target').forEach(el => {
            el.addEventListener('click', () => {
                if (!isEditMode) goToSlide(parseInt(el.getAttribute('data-target')) - 1);
            });
        });

        // Timers
        container.querySelectorAll('.timer').forEach(el => {
            let time = parseInt(el.getAttribute('data-time'));
            let initialTime = time;
            let interval = null;
            let isRunning = false;
            
            const updateDisplay = () => {
                let m = Math.floor(time / 60).toString().padStart(2, '0');
                let s = (time % 60).toString().padStart(2, '0');
                el.textContent = `${m}:${s}`;
            };
            // Initial display (in case it got saved in middle)
            if(!el.textContent.includes(':')) updateDisplay();

            el.addEventListener('click', () => {
                if (isEditMode) return;
                if (isRunning) {
                    clearInterval(interval);
                    isRunning = false;
                } else {
                    isRunning = true;
                    interval = setInterval(() => {
                        time--;
                        if (time <= 0) {
                            time = 0;
                            clearInterval(interval);
                            isRunning = false;
                            el.style.color = '#ff0000';
                            el.style.textShadow = '0 0 30px #ff0000';
                            // Alert sound or blink
                            let blink = 0;
                            let blinkInterval = setInterval(() => {
                                el.style.opacity = blink % 2 === 0 ? 0 : 1;
                                blink++;
                                if (blink > 5) clearInterval(blinkInterval);
                            }, 300);
                        }
                        updateDisplay();
                    }, 1000);
                }
            });
        });

        // Checkboxes in Slide 40
        container.querySelectorAll('.checklist-item').forEach(el => {
            el.addEventListener('click', () => {
                if (isEditMode) return;
                const icon = el.querySelector('i');
                if (icon.classList.contains('fa-square')) {
                    icon.classList.remove('fa-square', 'far');
                    icon.classList.add('fa-check-square', 'fas');
                    icon.style.color = 'var(--primary-blue)';
                } else {
                    icon.classList.remove('fa-check-square', 'fas');
                    icon.classList.add('fa-square', 'far');
                    icon.style.color = 'inherit';
                }
            });
        });

        // Cycle colors on click
        container.querySelectorAll('.interactive-cycle').forEach(el => {
            el.addEventListener('click', () => {
                if (isEditMode) return;
                const state = parseInt(el.getAttribute('data-state') || '0');
                const nextState = (state + 1) % 3; // 0: neutral, 1: green, 2: red
                el.setAttribute('data-state', nextState);
                if (nextState === 0) {
                    el.style.backgroundColor = 'rgba(0,210,255,0.2)';
                    el.style.borderColor = 'var(--primary-blue)';
                    el.style.color = 'inherit';
                } else if (nextState === 1) {
                    el.style.backgroundColor = 'rgba(0,255,0,0.2)';
                    el.style.borderColor = '#00ff00';
                    el.style.color = '#00ff00';
                } else if (nextState === 2) {
                    el.style.backgroundColor = 'rgba(255,50,50,0.2)';
                    el.style.borderColor = '#ff3333';
                    el.style.color = '#ff3333';
                }
            });
        });

        // Reveal answers on click
        container.querySelectorAll('.interactive-reveal').forEach(el => {
            el.addEventListener('click', () => {
                if (isEditMode) return;
                el.style.opacity = '1';
                el.style.color = '#00ff00';
                el.innerHTML = el.getAttribute('data-answer') || 'Đã mở';
                el.style.cursor = 'default';
            });
        });
        container.querySelectorAll('.scratch-overlay').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                if (isEditMode) return;
                // Simple hover scratch effect
                if (e.buttons === 1 || e.type === 'mouseenter') {
                    el.style.opacity -= 0.1;
                    if (el.style.opacity <= 0) {
                        el.classList.add('revealed');
                    }
                }
            });
            el.addEventListener('click', () => {
                if (!isEditMode) el.classList.add('revealed');
            });
        });

        // Checkboxes in Slide 40
        container.querySelectorAll('.checklist-item').forEach(el => {
            el.addEventListener('click', () => {
                if (isEditMode) return;
                const icon = el.querySelector('i');
                if (icon.classList.contains('fa-square')) {
                    icon.classList.remove('fa-square', 'far');
                    icon.classList.add('fa-check-square', 'fas');
                    icon.style.color = 'var(--primary-blue)';
                } else {
                    icon.classList.remove('fa-check-square', 'fas');
                    icon.classList.add('fa-square', 'far');
                    icon.style.color = 'inherit';
                }
            });
        });

        // Slide 38 fade in items
        let fadeIndex = 0;
        const fadeItems = container.querySelectorAll('.fade-in-item');
        if (fadeItems.length > 0 && currentSlideIndex === 37) {
            container.addEventListener('click', (e) => {
                if (isEditMode || e.target.closest('.toolbar')) return;
                if (fadeIndex < fadeItems.length) {
                    fadeItems[fadeIndex].style.opacity = 1;
                    fadeIndex++;
                }
            });
        }

        // Slide 39 Unlock
        const unlockTrigger = container.querySelector('#unlock-trigger');
        const answerBlock = container.querySelector('#answer-block');
        if (unlockTrigger && answerBlock) {
            unlockTrigger.addEventListener('click', () => {
                if (isEditMode) return;
                unlockTrigger.innerHTML = '<i class="fas fa-lock-open"></i>';
                unlockTrigger.style.transform = 'scale(1.5) rotate(10deg)';
                unlockTrigger.style.color = '#00ff00';
                
                setTimeout(() => {
                    unlockTrigger.style.opacity = 0;
                    answerBlock.style.opacity = 1;
                    answerBlock.style.transform = 'translateY(0)';
                    answerBlock.style.pointerEvents = 'auto';
                }, 500);
            });
        }

        // Slide 40 Commit Button
        const commitBtn = container.querySelector('#commit-btn');
        const commitStamp = container.querySelector('#commit-stamp');
        if (commitBtn && commitStamp) {
            commitBtn.addEventListener('click', () => {
                if (isEditMode) return;
                commitStamp.style.opacity = 1;
                commitStamp.style.transform = 'translate(-50%, -50%) scale(1) rotate(-15deg)';
                // Play sound logic here if needed
            });
        }

        // Slide 41 Finish Confetti
        const finishBtn = container.querySelector('#finish-btn');
        const confettiContainer = container.querySelector('#confetti-container');
        if (finishBtn && confettiContainer) {
            finishBtn.addEventListener('click', () => {
                if (isEditMode) return;
                for (let i = 0; i < 100; i++) {
                    const confetti = document.createElement('div');
                    confetti.style.position = 'absolute';
                    confetti.style.width = '10px';
                    confetti.style.height = '10px';
                    confetti.style.backgroundColor = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 6)];
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '-10px';
                    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
                    confettiContainer.appendChild(confetti);

                    // Animate falling
                    let top = -10;
                    let speed = Math.random() * 5 + 2;
                    let inter = setInterval(() => {
                        top += speed;
                        confetti.style.top = top + 'px';
                        if (top > window.innerHeight) {
                            clearInterval(inter);
                            confetti.remove();
                        }
                    }, 20);
                }
            });
        }
    }

    // Edit Mode Logic
    btnEditMode.addEventListener('click', () => {
        isEditMode = !isEditMode;
        if (isEditMode) {
            document.body.classList.add('edit-mode');
            btnEditMode.classList.add('active');
            btnSave.classList.remove('hidden');
        } else {
            document.body.classList.remove('edit-mode');
            btnEditMode.classList.remove('active');
            btnSave.classList.add('hidden');
            saveCurrentSlideDOM();
        }
        updateEditModeUI();
    });

    function updateEditModeUI() {
        const editables = document.querySelectorAll('.editable');
        const draggables = document.querySelectorAll('.draggable, .abs-element');

        editables.forEach(el => {
            if (isEditMode) {
                el.setAttribute('contenteditable', 'true');
                // Prevent clicking links or causing triggers while editing
                el.addEventListener('click', stopPropagationInEdit);
            } else {
                el.removeAttribute('contenteditable');
                el.removeEventListener('click', stopPropagationInEdit);
            }
        });

        draggables.forEach(el => {
            if (isEditMode) {
                makeDraggable(el);
            } else {
                removeDraggable(el);
            }
        });
    }

    function stopPropagationInEdit(e) {
        if (isEditMode) e.stopPropagation();
    }

    // Dragging Logic
    let activeDragEl = null;
    let initialX, initialY, currentX, currentY, xOffset = 0, yOffset = 0;

    function makeDraggable(el) {
        el.onmousedown = dragStart;
    }
    
    function removeDraggable(el) {
        el.onmousedown = null;
    }

    function dragStart(e) {
        if (!isEditMode || e.target.getAttribute('contenteditable') === 'true') return; // Don't drag if clicking text to edit
        
        activeDragEl = e.currentTarget;
        
        // Use current inline transform or top/left
        const style = window.getComputedStyle(activeDragEl);
        if (activeDragEl.style.transform) {
            const matrix = new WebKitCSSMatrix(style.transform);
            xOffset = matrix.m41;
            yOffset = matrix.m42;
        } else {
            xOffset = 0;
            yOffset = 0;
        }

        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        document.onmouseup = dragEnd;
        document.onmousemove = drag;
    }

    function drag(e) {
        if (!activeDragEl) return;
        e.preventDefault();
        
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        
        // Instead of transform, let's update top/left if it's abs-element, else use transform
        if (activeDragEl.classList.contains('abs-element')) {
            // Calculate percentage based on parent
            const parentRect = document.getElementById('slide-content').getBoundingClientRect();
            // Need to handle scaling correctly, but for simplicity we just adjust top/left px or %
            // If it's absolute, just offset it by pixels
            let currentTop = parseFloat(activeDragEl.style.top) || 0;
            let currentLeft = parseFloat(activeDragEl.style.left) || 0;
            
            // Simpler drag for absolute elements without dealing with transform matrix complexity
            // Just applying transform:
            activeDragEl.style.transform = `translate(${currentX}px, ${currentY}px)`;
        } else {
            activeDragEl.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        activeDragEl = null;
        document.onmouseup = null;
        document.onmousemove = null;
    }

    // Saving data
    btnSave.addEventListener('click', () => {
        saveCurrentSlideDOM();
        saveData();
        alert('Đã lưu thay đổi!');
    });

    function saveCurrentSlideDOM() {
        const slideHtml = slideContentEl.querySelector('.slide').innerHTML;
        slideData[currentSlideIndex].content = slideHtml;
    }

    function saveData() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(slideData));
    }

    // Fullscreen Mode
    btnPresentMode.addEventListener('click', () => {
        isFullscreen = !isFullscreen;
        if (isFullscreen) {
            document.body.classList.add('fullscreen-mode');
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
        } else {
            document.body.classList.remove('fullscreen-mode');
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            document.body.classList.remove('fullscreen-mode');
            isFullscreen = false;
        }
    });

    // Resize window handling to maintain 16:9 inner scale if necessary
    function resizeFrame() {
        const frame = document.getElementById('presentation-frame');
        const content = document.getElementById('slide-content');
        
        // Remove scale transform since CSS percentages handle responsiveness
        content.style.transform = 'none';
    }
    
    window.addEventListener('resize', resizeFrame);
    
    // Init
    renderSlide();
    resizeFrame();
});
