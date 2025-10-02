"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileSidebar({ data }) {
    const { title, banner, menu, offcanvasId = "mobileSidebar" } = data;

    const [isMobile, setIsMobile] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true); // main button visible
    const [peekVisible, setPeekVisible] = useState(false); // arrow peek visible

    const currentPath = usePathname();

    // Detect mobile
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 992);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Initially show button then hide to right after 3s
    useEffect(() => {
        if (!isMobile) return;
        const timer = setTimeout(() => {
            setButtonVisible(false);
            setPeekVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isMobile]);

    // Handle arrow click to show main button again
    const handlePeekClick = () => {
        setButtonVisible(true);
        setPeekVisible(false);

        setTimeout(() => {
            setButtonVisible(false);
            setPeekVisible(true);
        }, 3000);
    };

    if (!isMobile) return null;

    return (
        <>
            {/* Main sidebar button */}
            <button
                type="button"
                className="btn btn-primary d-lg-none shadow-lg floating-btn"
                style={{
                    fontSize: "1.2rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    position: "fixed",
                    bottom: "20px",
                    right: buttonVisible ? "10px" : "-100px", // hide offscreen
                    zIndex: 3200,
                    transition: "right 0.4s ease",
                }}
                data-bs-toggle="offcanvas"
                data-bs-target={`#${offcanvasId}`}
                aria-controls={offcanvasId}
            >
                <i className="bi bi-layout-sidebar"></i>
            </button>

            {/* Peek arrow */}
            {peekVisible && (
                <button
                    type="button"
                    className="btn btn-secondary d-lg-none shadow-lg peek-arrow"
                    onClick={handlePeekClick}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "-3px",
                        zIndex: 3200,
                        borderRadius: "0 0.5rem 0.5rem 0",
                        padding: "0.8rem 0.2rem",
                        fontSize: "0.8rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "opacity 0.3s ease, right 0.4s ease",
                        opacity: 0.2, // initial transparency
                    }}
                >
                    <i className="bi bi-arrow-left"></i>
                </button>
            )}

            {/* Offcanvas sidebar */}
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
                                        className={`nav-link w-100 ${item.href === currentPath ? "active" : ""}`}
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
                                                item.items.some((sub) => sub.href === currentPath) ? "active" : ""
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
