/**
 * js/navigation.js
 * Slide navigation, keyboard controls, progress bar, theme toggle & drawer.
 */

/* =========================
   SLIDE DATA
   ========================= */
const SLIDE_DATA = [
    { module: 'Foundations',              title: 'Introduction to GUI Programming'  },
    { module: 'Foundations',              title: 'Getting Started with Tkinter'     },
    { module: 'Foundations',              title: 'Architecture Overview'             },
    { module: 'Core Widgets',             title: 'Widget: Label'                    },
    { module: 'Core Widgets',             title: 'Widget: Button'                   },
    { module: 'Core Widgets',             title: 'Widget: Entry'                    },
    { module: 'Core Widgets',             title: 'Widget: Text'                     },
    { module: 'Core Widgets',             title: 'Widget: Frame'                    },
    { module: 'Core Widgets',             title: 'Widget: Canvas'                   },
    { module: 'Core Widgets',             title: 'Widget: Checkbutton'              },
    { module: 'Core Widgets',             title: 'Widget: Radiobutton'              },
    { module: 'Core Widgets',             title: 'Widget: Scale'                    },
    { module: 'Core Widgets',             title: 'Widget: Listbox'                  },
    { module: 'Core Widgets',             title: 'Widget: Spinbox'                  },
    { module: 'Core Widgets',             title: 'Widget: Combobox (ttk)'           },
    { module: 'Core Widgets',             title: 'Widget: Progressbar'              },
    { module: 'Core Widgets',             title: 'Widget: Notebook / Tabs'          },
    { module: 'Layout & Geometry',        title: 'Pack: Expand & Propagate'         },
    { module: 'Layout & Geometry',        title: 'Creating Menus'                   },
    { module: 'Layout & Geometry',        title: 'Geometry: Grid()'                 },
    { module: 'Dialogs & Dynamic UI',     title: 'Message Boxes'                    },
    { module: 'Dialogs & Dynamic UI',     title: 'Dynamic Widget Properties'        },
    { module: 'Dialogs & Dynamic UI',     title: 'Displaying Images'                },
    { module: 'Dialogs & Dynamic UI',     title: 'Image Buttons'                    },
    { module: 'Real-World Projects',      title: 'Calculator'                       },
    { module: 'Real-World Projects',      title: 'Advanced Pack: Responsive Frames' },
    { module: 'Real-World Projects',      title: 'Login Application'                },
    { module: 'Real-World Projects',      title: 'Billing System'                   },
    { module: 'Real-World Projects',      title: 'Advanced Event Handling'          },
    { module: 'Design & Polish',          title: 'UX/UI Design Principles'          },
    { module: 'File Handling & GUI',      title: 'File Handling in Python'          },
    { module: 'File Handling & GUI',      title: 'Connect GUI with File Handling'   },
    { module: 'Advance Concepts',         title: 'Lambda Functions in GUI'          },
    { module: 'Database & GUI',           title: 'Database Basic & SQL'             },
];

/* =========================
   STATE
   ========================= */
let currentSlide = 0;
let slides, totalSlides, progressBar, counter;

/* =========================
   SLIDE LOADER (NEW)
   ========================= */
async function loadSlides() {
    const wrapper = document.querySelector('.slides-wrapper');
    const totalSlidesToLoad = SLIDE_DATA.length; // Should be 30

    // Show loading state
    document.getElementById('slideCounter').innerText = `Loading 0/${totalSlidesToLoad}...`;

    for (let i = 1; i <= totalSlidesToLoad; i++) {
        // Format number: 01, 02, ... 30
        const num = String(i).padStart(2, '0');
        const filePath = `slides/slide-${num}.html`;

        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const html = await response.text();
            wrapper.insertAdjacentHTML('beforeend', html);
        } catch (error) {
            console.error(`Could not load ${filePath}:`, error);
            // Insert a fallback slide so the app doesn't break
            wrapper.insertAdjacentHTML('beforeend', `
                <section class="slide" id="slide-${i}">
                    <div style="text-align:center; padding: 2rem;">
                        <h2>Error Loading Slide ${i}</h2>
                        <p>Could not find file: <code>${filePath}</code></p>
                        <p style="color:red; font-size:0.8rem;">Note: This feature requires a local server (e.g., VS Code Live Server). Double-clicking the html file might block requests.</p>
                    </div>
                </section>
            `);
        }
    }

    // Once all slides are in the DOM, initialize navigation
    initNavigation();
}

/* =========================
   CORE NAVIGATION
   ========================= */
function initNavigation() {
    slides      = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    progressBar = document.getElementById('progressBar');
    counter     = document.getElementById('slideCounter');

    buildDrawer();
    updateUI();
}

function updateUI() {
    slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));

    const pct = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${pct}%`;
    counter.innerText = `${currentSlide + 1} / ${totalSlides}`;

    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;

    updateDrawerActive();
}

function changeSlide(dir) {
    const next = currentSlide + dir;
    if (next >= 0 && next < totalSlides) {
        currentSlide = next;
        updateUI();
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateUI();
    closeDrawer();
}

/* =========================
   THEME
   ========================= */
function toggleTheme() {
    const body = document.body;
    const next = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', next);
}

/* =========================
   DRAWER
   ========================= */
function buildDrawer() {
    const list = document.getElementById('drawerList');
    let lastModule = null;

    SLIDE_DATA.forEach((slide, i) => {
        // Insert module group label when module changes
        if (slide.module !== lastModule) {
            const label = document.createElement('div');
            label.className = 'drawer-module';
            label.textContent = slide.module;
            list.appendChild(label);
            lastModule = slide.module;
        }

        // Slide link button
        const btn = document.createElement('button');
        btn.className = 'drawer-item';
        btn.dataset.index = i;
        btn.innerHTML = `
            <span class="slide-num">${String(i + 1).padStart(2, '0')}</span>
            <span>${slide.title}</span>
        `;
        btn.addEventListener('click', () => goToSlide(i));
        list.appendChild(btn);
    });
}

function updateDrawerActive() {
    document.querySelectorAll('.drawer-item').forEach(btn => {
        btn.classList.toggle('active', Number(btn.dataset.index) === currentSlide);
    });

    // Scroll active item into view inside the drawer
    const activeBtn = document.querySelector('.drawer-item.active');
    if (activeBtn) {
        activeBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
}

function toggleDrawer() {
    const isOpen = document.getElementById('drawer').classList.contains('open');
    isOpen ? closeDrawer() : openDrawer();
}

function openDrawer() {
    document.getElementById('drawer').classList.add('open');
    document.getElementById('drawerOverlay').classList.add('open');
    document.getElementById('drawerToggle').classList.add('open');
    document.getElementById('drawerToggle').setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('drawerOverlay').classList.remove('open');
    document.getElementById('drawerToggle').classList.remove('open');
    document.getElementById('drawerToggle').setAttribute('aria-expanded', 'false');
}

/* =========================
   KEYBOARD
   ========================= */
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') changeSlide(1);
    if (e.key === 'ArrowLeft')                   changeSlide(-1);
    if (e.key === 'Escape')                      closeDrawer();
});

// Start the loader instead of initNavigation directly
document.addEventListener('DOMContentLoaded', loadSlides);