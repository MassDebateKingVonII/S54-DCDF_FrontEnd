"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileSidebar({ data }) {
    const { title, banner, menu, offcanvasId = "mobileSidebar", tutorialPrefix = "" } = data;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 992);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const currentPath = usePathname();

    const isActive = (href, type = "link") => {
        if (type === "link") {
            // Exact match for normal links
            return href === currentPath;
        } else if (type === "dropdown") {
            // Highlight dropdown only if currentPath starts with tutorialPrefix and has a number after it
            const prefix = tutorialPrefix.replace(/\/$/, ""); // remove trailing slash
            const regex = new RegExp(`^${prefix}/\\d+$`);
            return regex.test(currentPath);
        }
        return false;
    };

    if (!isMobile) return null;

    return (
        <>
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
            }}
            data-bs-toggle="offcanvas"
            data-bs-target={`#${offcanvasId}`}
            aria-controls={offcanvasId}
        >
            <i className="bi bi-folder-plus" style={{ fontSize: "1.5rem" }}></i>
            Sidebar
        </button>


            <div
                className="offcanvas offcanvas-start"
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
                                        <ul className="dropdown-menu w-100" aria-labelledby={item.id}>
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
