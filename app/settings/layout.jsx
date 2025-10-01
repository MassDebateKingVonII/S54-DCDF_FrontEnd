import Link from "next/link";
import Head from "next/head";
import Sidebar from "@components/Sidebar.jsx";
import MobileSidebar from "@components/MobileSidebar.jsx";

// Data
import Settings_sidebar from "@data/settings/sidebar.json";
import Settings_sidebar_Mobile from "@data/settings/sidebar_Mobile.json";

export default function SettingsLayout({ children }) {
    return (
        <>
            <Head>
                <title>Settings</title>
                <meta name="description" content="Fundamentals of Programming Tutorial" />
                <link rel="stylesheet" href="/assets/css/settings/main.css"/>
            </Head>
            {/* Mobile Sidebar */}
            <MobileSidebar data={Settings_sidebar_Mobile} />

            <div className="container-lg">
                <div className="row mt-3">
                    {/* Desktop Sidebar */}
                    <Sidebar data={Settings_sidebar} />

                    {/* Page content */}
                    <div className="col-lg-9 col-md-12 col-sm-12 mt-3 mb-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}