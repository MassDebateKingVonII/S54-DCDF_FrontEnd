"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to get/set font size for main.page-content
 * Persists to localStorage automatically
 */
export function useFontSize() {
    // Initialize state from localStorage immediately
    const initial = typeof window !== "undefined" ? localStorage.getItem("fontSizePercent") || "100" : "100";
    const [fontSize, setFontSize] = useState(initial);

    useEffect(() => {
        const apply = () => {
            const mainContent = document.querySelector("main.page-content");
            if (!mainContent) return;
            const base = 16; // px
            mainContent.style.fontSize = (base * fontSize) / 100 + "px";
        };

        apply(); // apply immediately

        // Also apply whenever fontSize changes
    }, [fontSize]);

    // Update localStorage whenever fontSize changes
    useEffect(() => {
        localStorage.setItem("fontSizePercent", fontSize);
    }, [fontSize]);

    return [fontSize, setFontSize];
}
