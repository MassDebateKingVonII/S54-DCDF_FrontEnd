// -----------------------------
// THEME CORE LOGIC (runs on all pages)
// -----------------------------
function setThemeClass(theme) {
    if (theme === 'dark') {
        document.body.setAttribute('data-bs-theme', 'dark');
    } else if (theme === 'light') {
        document.body.setAttribute('data-bs-theme', 'light');
    } else if (theme === 'system') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.setAttribute('data-bs-theme', 'dark');
        } else {
            document.body.setAttribute('data-bs-theme', 'light');
        }
    }
}


function applyTheme(theme) {
    setThemeClass(theme);
    localStorage.setItem('theme', theme);
}

// Restore theme immediately (for all pages)
let savedTheme = localStorage.getItem('theme') || 'system';
applyTheme(savedTheme);

// -----------------------------
// UI CARD LOGIC (runs only if cards exist)
// -----------------------------
function setupThemeCards(activeTheme) {
    const themeCards = document.querySelectorAll('.theme-selector-card');
    if (themeCards.length === 0) return; // no cards here → skip

    // Highlight active card
    themeCards.forEach(card => {
        card.classList.toggle('active', card.dataset.theme === activeTheme);

        card.addEventListener('click', () => {
            let theme = card.dataset.theme;
            applyTheme(theme);

            // Update highlight
            themeCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
}

// Initialize cards if they exist
setupThemeCards(savedTheme);
