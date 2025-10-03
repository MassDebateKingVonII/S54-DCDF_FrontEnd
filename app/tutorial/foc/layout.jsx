// Analytics
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Head from "next/head";
import Sidebar from "@components/Sidebar.jsx";
import MobileSidebar from "@components/MobileSidebar.jsx";

// Data
import FOC_sidebar from "@data/foc/sidebar.json";
import FOC_sidebar_Mobile from "@data/foc/sidebar_Mobile.json";

// CSS

export default function FopTutLayout({ children }) {
    return (
        <>
            <Head>
                <title>FOC - Tutorial</title>
                <meta name="description" content="Fundamentals of Computing Tutorial" />
            </Head>

            {/* Mobile Sidebar */}
            <MobileSidebar data={FOC_sidebar_Mobile}/>

            <div className="container-lg">
                <div className="row mt-3">
                    {/* Desktop Sidebar */}
                    <Sidebar data={FOC_sidebar} />

                    {/* Page content */}
                    <div className="col-lg-9 col-md-12 col-sm-12 mt-3 mb-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
