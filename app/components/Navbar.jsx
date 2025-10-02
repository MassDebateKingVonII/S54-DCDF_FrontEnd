"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    // Helper to check if link should be active
    const isActive = (matchPath) => {
        const current = pathname.toLowerCase();
        const match = matchPath.toLowerCase();
        const isRoot = match === "/";
        return isRoot ? current === "/" : current.startsWith(match);
    };

    return (
        <nav
            id="mainNavbar"
            className="navbar navbar-expand-lg container-fluid border-bottom border-2 border-light"
        >
            <div className="container-xxl">
                {/* Brand */}
                <div className="navbar-brand d-flex align-items-center gap-2 w-25">
                    <Link href="/">
                        <Image
                            src="/assets/images/icons/logo.png"
                            alt="Mass Debater Hacker"
                            className="rounded-circle"
                            width={64}
                            height={64}
                        />
                    </Link>
                    <Link href="/" className="d-none d-md-block">
                        <Image
                            src="/assets/images/icons/logo-text.png"
                            alt="Mass Debate"
                            className="img-fluid"
                            width={160}
                            height={40}
                        />
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <div className="d-flex align-items-center gap-2">
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="navbar-nav navbar-grid p-0 m-0 list-unstyled">
                        <li className="nav-item">
                            <Link
                                href="/"
                                className={`nav-link ${isActive("/") ? "active" : ""}`}
                            >
                                Homepage
                            </Link>
                        </li>

                        {/* Year 1 */}
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${
                                    isActive("/year1") ? "active" : ""
                                }`}
                                href="#"
                                id="Year1Dropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Year 1
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="Year1Dropdown"
                            >
                                <li>
                                    <Link
                                        href="/year1/sem1"
                                        className={`dropdown-item ${
                                            isActive("/year1/sem1") ? "active" : ""
                                        }`}
                                    >
                                        Semester 1 <i className="bi bi-arrow-right-circle"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/year1/sem2"
                                        className={`dropdown-item ${
                                            isActive("/year1/sem2") ? "active" : ""
                                        }`}
                                    >
                                        Semester 2 <i className="bi bi-arrow-right-circle"></i>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                            </ul>
                        </li>

                        {/* Year 2 */}
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${
                                    isActive("/year2") ? "active" : ""
                                }`}
                                href="#"
                                id="Year2Dropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Year 2
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="Year2Dropdown"
                            >
                                <li>
                                    <Link
                                        href="/year2/sem1"
                                        className={`dropdown-item ${
                                            isActive("/year2/sem1") ? "active" : ""
                                        }`}
                                    >
                                        <i className="bi bi-1-circle"></i> Semester 1
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/year2/sem2"
                                        className={`dropdown-item ${
                                            isActive("/year2/sem2") ? "active" : ""
                                        }`}
                                    >
                                        <i className="bi bi-2-circle"></i> Semester 2
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                            </ul>
                        </li>

                        {/* Reviews */}
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${
                                    isActive("/review") ? "active" : ""
                                }`}
                                href="#"
                                id="reviewDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Reviews
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="reviewDropdown"
                            >
                                <li>
                                    <Link
                                        href="/review/getReviewsInfo"
                                        className={`dropdown-item ${
                                            isActive("/review/getReviewsInfo") ? "active" : ""
                                        }`}
                                    >
                                        <i className="bi bi-star-half"></i> All Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/review/createReview"
                                        className={`dropdown-item ${
                                            isActive("/review/createReview") ? "active" : ""
                                        }`}
                                    >
                                        <i className="bi bi-chat-square-dots"></i> Create Review
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                            </ul>
                        </li>

                        {/* Wiki */}
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${
                                    isActive("/wiki") ? "active" : ""
                                }`}
                                href="#"
                                id="wikiDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Wiki
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="wikiDropdown"
                            >
                                <li>
                                    <Link
                                        href="/wiki/general"
                                        className={`dropdown-item ${
                                            isActive("/wiki/general") ? "active" : ""
                                        }`}
                                    >
                                        <i className="bi bi-book-half"></i> General
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* Right side */}
                    <ul className="navbar-nav ms-auto navbar-grid">
                        <li className="nav-item col-auto text-center">
                            <div className="input-group mt-2">
                                <input
                                    type="search"
                                    className="form-control"
                                    id="gsearch"
                                    name="gsearch"
                                    placeholder="Search"
                                />
                                <button
                                    className="btn btn-outline-secondary bg-info"
                                    type="submit"
                                >
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </li>

                        <li className="nav-item col-auto text-center">
                            <Link
                                href="/settings/profile"
                                id="settingsButton"
                                className={`nav-link d-flex align-items-center ${
                                    isActive("/settings") ? "active" : ""
                                }`}
                            >
                                <Image
                                    src="/assets/images/icons/cogwheel.png"
                                    alt="Settings"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </li>

                        <li className="nav-item col-auto text-center">
                            <Link
                                href="/login"
                                id="loginButton"
                                className={`nav-link d-flex align-items-center ${
                                    isActive("/login") ? "active" : ""
                                }`}
                            >
                                <Image
                                    src="/assets/images/icons/login.png"
                                    alt="Login"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
