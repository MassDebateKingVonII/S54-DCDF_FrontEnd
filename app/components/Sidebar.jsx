"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Sidebar({ data }) {
    const { title, banner, menu } = data;
    const pathname = usePathname(); // current route

    useEffect(() => {
        const navLinks = document.querySelectorAll(
            "#left-navbar-navigation a.nav-link, #left-navbar-navigation .dropdown-item"
        );

        navLinks.forEach(link => link.classList.remove("active"));

        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href === pathname) {
                link.classList.add("active");
                const parentDropdown = link.closest(".dropdown");
                if (parentDropdown) {
                    parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
                }
            }
        });
    }, [pathname]); // run whenever the route changes

    return (
        <div
            id="sidebar"
            className="col-md-3 d-none d-lg-block d-xl-block d-xxl-block"
        >
            <div id="left-navbar-navigation" className="position-sticky top-0 p-2">
                <div className="navbar-brand w-100 text-center mb-3">
                    <img src={banner} alt={title} className="img-fluid w-100" />
                    <h3 className="mt-3 fw-semibold">{title}</h3>
                    <hr />
                </div>

                <div className="nav flex-column nav-pills w-100" role="tablist">
                    {menu.map((item) => {
                        if (item.type === "link") {
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="nav-link border rounded mb-1 w-100"
                                >
                                    {item.label}
                                </Link>
                            );
                        } else if (item.type === "dropdown") {
                            return (
                                <div
                                    key={item.id}
                                    className="nav-item w-100 border rounded mb-1 dropdown"
                                >
                                    <a
                                        className="nav-link dropdown-toggle w-100 text-start"
                                        href="#"
                                        id={item.id}
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {item.label}
                                    </a>
                                    <ul
                                        className="dropdown-menu w-100"
                                        aria-labelledby={item.id}
                                    >
                                        {item.items.map((sub) => (
                                            <li key={sub.href}>
                                                <Link
                                                    className="dropdown-item"
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
    );
}
