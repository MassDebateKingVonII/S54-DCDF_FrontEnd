"use client"

import { useEffect } from "react";

export default function CodeBlock({ code, language, commandLine = false, showLineNumbers = false }) {
    useEffect(() => {
        // highlight only after client mount
        if (window.Prism) {
            window.Prism.highlightAll();
        }
    }, []);

    // Conditionally build pre class
    const preClassName = `${commandLine ? "command-line " : ""}language-${language} ${showLineNumbers ? "line-numbers" : ""}`.trim();

    return (
        <pre className={preClassName}>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
}
