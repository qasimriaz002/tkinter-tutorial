/**
 * js/navigation.js
 * Slide navigation, keyboard controls, progress bar & theme toggle.
 */

let currentSlide = 0;
let slides, totalSlides, progressBar, counter;

function initNavigation() {
    slides      = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    progressBar = document.getElementById('progressBar');
    counter     = document.getElementById('slideCounter');
    updateUI();
}

function updateUI() {
    slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));

    const pct = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${pct}%`;
    counter.innerText = `${currentSlide + 1} / ${totalSlides}`;

    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
}

function changeSlide(dir) {
    const next = currentSlide + dir;
    if (next >= 0 && next < totalSlides) {
        currentSlide = next;
        updateUI();
    }
}

function toggleTheme() {
    const body = document.body;
    const next = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', next);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') changeSlide(1);
    if (e.key === 'ArrowLeft')                   changeSlide(-1);
});

document.addEventListener('DOMContentLoaded', initNavigation);
