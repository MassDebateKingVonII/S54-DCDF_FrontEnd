"use client";

import Head from "next/head";
import Image from "next/image";

import { useTheme } from "@components/appearance/ThemeProvider.jsx";
import { useFontSize } from "@components/appearance/FontSize.jsx";

export default function Settings_Appearance() {
    const { theme, setTheme } = useTheme();
    const [fontSize, setFontSize] = useFontSize();

    const cards = [
        { key: "system", label: "System Default", img: "/assets/images/settings/default_theme.webp" },
        { key: "light", label: "Light Mode", img: "/assets/images/settings/light_theme.jpg" },
        { key: "dark", label: "Dark Mode", img: "/assets/images/settings/dark_theme.jpg" },
    ];

    return (
        <>
        <Head>
            <link rel="stylesheet" href="/assets/css/settings/main.css"></link>
        </Head>
        <div>
            <h1 className="my-4">Appearance</h1>
            <p>Manage settings for your learning experience on this website!</p>
            <hr />

            <section>
                <div className="row g-4">
                    <h5>Interface Themes</h5>
                    <p className="mb-0 mt-2">This theme will be applied to the entire website and all its pages!</p>

                    {cards.map((c, i) => (
                        <div key={i} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                            <div
                                className={`card h-100 theme-selector-card ${theme === c.key ? "border-primary shadow-lg" : ""}`}
                                onClick={() => setTheme(c.key)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card-header">
                                    <div className="card-title">
                                        <h5 className="text-center">{c.label}</h5>
                                    </div>
                                </div>
                                <Image
                                    height={300}
                                    width={400}
                                    alt={c.label}
                                    className="card-img-bottom img-fluid"
                                    src={c.img}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr />
            {/* Font Size */}
            <div className="mt-3 mb-5">
                <label htmlFor="fontSizeSelect" className="form-label fw-bold">
                    Font Size
                </label>
                <select className="form-select w-auto" 
                value={fontSize}
                id="fontSizeSelect" 
                defaultValue={100}
                onChange={(e) => setFontSize(e.target.value)}>
                    <option value="90">90%</option>
                    <option value="95">95%</option>
                    <option value="100">
                        100% (Default)
                    </option>
                    <option value="105">105%</option>
                    <option value="110">110%</option>
                </select>
            </div>
        </div>
        </>
    );
}
