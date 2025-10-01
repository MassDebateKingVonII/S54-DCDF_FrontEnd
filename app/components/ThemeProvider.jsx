"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("system");

    // Load saved theme on first render
    useEffect(() => {
        const saved = localStorage.getItem("theme") || "system";
        setTheme(saved);
    }, []);

    // Apply theme to body
    useEffect(() => {
        if (theme === "system") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.body.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
        } else {
            document.body.setAttribute("data-bs-theme", theme);
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
