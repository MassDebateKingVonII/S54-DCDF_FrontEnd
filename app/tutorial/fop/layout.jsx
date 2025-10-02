import Head from "next/head";
import Sidebar from "@components/Sidebar.jsx";
import MobileSidebar from "@components/MobileSidebar.jsx";

// Data
import FOP_sidebar from "@data/fop/sidebar.json";
import FOP_sidebar_Mobile from "@data/fop/sidebar_Mobile.json";

// CSS

export default function FopTutLayout({ children }) {
    return (
        <>
            <Head>
                <title>FOP - Tutorial</title>
                <meta name="description" content="Fundamentals of Programming Tutorial" />
            </Head>

            {/* Mobile Sidebar */}
            <MobileSidebar data={FOP_sidebar_Mobile} />

            <div className="container-lg">
                <div className="row mt-3">
                    {/* Desktop Sidebar */}
                    <Sidebar data={FOP_sidebar} />

                    {/* Page content */}
                    <div className="col-lg-9 col-md-12 col-sm-12 mt-3 mb-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
