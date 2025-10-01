// /assets/js/settings/renderSidebar.js

const fopModule = {
    title: "Settings",
    banner: "/assets/images/settings/banner.jpg",
    menu: [
        { type: "link", label: "Profile", href: "/settings/profile" },
        { type: "link", label: "Appearance", href: "/settings/appearance" },
        { type: "link", label: "", href: "/fop/references" },
    ],
};

// --- Usage ---
renderSidebar(fopModule); // fopModule defined elsewhere
highlightActiveLink();
