// -----------------------------
// FONT SIZE CORE LOGIC (runs everywhere)
// -----------------------------
function applyFontSize(sizePercent) {
    // Only apply to body
    document.body.style.fontSize = sizePercent + "%";
    localStorage.setItem('fontSizePercent', sizePercent);
}

// Restore saved size or fallback to 100%
let savedFontSize = localStorage.getItem('fontSizePercent') || "100";
applyFontSize(savedFontSize);

// -----------------------------
// UI LOGIC (only runs if controls exist)
// -----------------------------
function setupFontSizeControls(activeSize) {
    const fontSizeSelect = document.getElementById('fontSizeSelect');

    if (!fontSizeSelect) return;

    fontSizeSelect.value = activeSize;

    fontSizeSelect.addEventListener('change', () => {
        const size = fontSizeSelect.value;
        applyFontSize(size);
    });
}

// Initialize controls if present
setupFontSizeControls(savedFontSize);
