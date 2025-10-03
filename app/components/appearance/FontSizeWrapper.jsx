// app/components/FontSizeWrapper.jsx
"use client";

import { useFontSize } from "@components/appearance/FontSize.jsx";

export default function FontSizeWrapper({ children }) {
    useFontSize(); // just triggers font size application
    return <>{children}</>;
}
