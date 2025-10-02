"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileSidebar({ data }) {
    const { title, banner, menu, offcanvasId = "mobileSidebar", tutorialPrefix = "" } = data;

    const [isMobile, setIsMobile] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const currentPath = usePathname();

    const isActive = (href, type = "link") => {
        if (type === "link") {
            return href === currentPath;
        } else if (type === "dropdown") {
            return menu
                .find((item) => item.type === "dropdown" && item.href === href)
                ?.items.some((sub) => sub.href === currentPath);
        }
        return false;
    };

    // Detect mobile
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 992);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Show button only when scrolled past 50vh and scrolling up
    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const triggerY = window.innerHeight * 0.5;

            if (currentScrollY > triggerY && currentScrollY < lastScrollY) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMobile]);

    if (!isMobile) return null;

    return (
        <>
            {showButton && (
                <button
                    type="button"
                    className="btn btn-primary d-lg-none ms-2 fw-bold shadow-lg mt-3"
                    style={{
                        fontSize: "1.2rem",
                        padding: "0.6rem 1rem",
                        borderRadius: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        position: "fixed",
                        bottom: "20px", // float at bottom
                        right: "20px",
                        zIndex: 3200,
                    }}
                    data-bs-toggle="offcanvas"
                    data-bs-target={`#${offcanvasId}`}
                    aria-controls={offcanvasId}
                >
                    <i className="bi bi-layout-sidebar"></i>
                </button>
            )}

            <div
                className="sidebar-offcanvas offcanvas offcanvas-start"
                tabIndex="-1"
                id={offcanvasId}
                aria-labelledby={`${offcanvasId}Label`}
            >
                <div className="offcanvas-header">
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body p-0">
                    <a className="navbar-brand w-100 text-center mb-3" href="#">
                        <img src={banner} className="img-fluid w-100" alt="Banner" />
                        <h3 className="mt-2">{title}</h3>
                    </a>

                    <div className="nav flex-column nav-pills w-100">
                        {menu.map((item, i) => {
                            if (item.type === "link") {
                                return (
                                    <Link
                                        key={i}
                                        className={`nav-link w-100 ${isActive(item.href, "link") ? "active" : ""}`}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            } else if (item.type === "dropdown") {
                                return (
                                    <div key={i} className="nav-item w-100 dropdown">
                                        <a
                                            className={`nav-link dropdown-toggle w-100 text-start ${
                                                isActive(item.href, "dropdown") ? "active" : ""
                                            }`}
                                            href="#"
                                            id={item.id}
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {item.label}
                                        </a>
                                        <ul className="dropdown-menu w-100 scrollable-dropdown" aria-labelledby={item.id}>
                                            {item.items.map((sub, si) => (
                                                <li key={si}>
                                                    <Link
                                                        className={`dropdown-item ${currentPath === sub.href ? "active" : ""}`}
                                                        href={sub.href}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
