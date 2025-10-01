"use client";

import { useEffect } from "react";

export default function BootstrapLoader({ children }) {
    useEffect(() => {
        // dynamically import Bootstrap JS on client only
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return children;
}

