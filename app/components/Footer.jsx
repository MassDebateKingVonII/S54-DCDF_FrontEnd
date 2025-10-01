"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-center text-lg-start bg-dark text-light border-top border-2 border-light">
            <div className="container py-4">
                <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-md-6 text-md-start mb-3 mb-md-0">
                        <Link
                            href="/"
                            className="d-flex align-items-center text-decoration-none text-light"
                        >
                            <Image
                                src="/assets/images/icons/logo.png"
                                alt="Mass Debater Hacker"
                                className="rounded-circle me-2"
                                width={40}
                                height={40}
                            />
                            <span className="fw-bold">Mass Debate Notes</span>
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="col-md-6 text-md-end">
                        <Link href="#" className="text-light me-3">
                            <i className="bi bi-facebook fs-5"></i>
                        </Link>
                        <Link href="#" className="text-light me-3">
                            <i className="bi bi-twitter fs-5"></i>
                        </Link>
                        <Link href="#" className="text-light me-3">
                            <i className="bi bi-discord fs-5"></i>
                        </Link>
                        <Link href="#" className="text-light">
                            <i className="bi bi-github fs-5"></i>
                        </Link>
                    </div>
                </div>

                <hr className="my-3 border-light" />

                <div className="text-center small text-secondary">
                    © {new Date().getFullYear()} Mass Debate Platform. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
