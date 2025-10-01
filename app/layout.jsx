// app/layout.jsx

import Head from "next/head";
import Script from "next/script";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Bootstrap JS
import BootstrapLoader from "@components/BootstrapLoader.jsx";

import Navbar from "@components/Navbar.jsx";
import Footer from "@components/Footer.jsx";

import './globals.css';

export const metadata = {
	title: 'S54 - DCDF',
	description: 'Homepage',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({ children }) {
	
	return (
		<html lang="en">
			<>
			<Head>
				<title>FOP - Tutorial</title>
				<meta name="description" content="Fundamentals of Programming Tutorial" />
			</Head>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				{/* Your static CSS from public folder */}
				<link rel="stylesheet" href="/assets/css/utils/prism.css" />
				<link rel="stylesheet" href="/assets/css/utils/icons.css" />
				<link rel="stylesheet" href="/assets/css/utils/top_navbar.css" />
				<link rel="stylesheet" href="/assets/css/utils/document_preview.css" />
				<link rel="stylesheet" href="/assets/css/utils/left_navigation.css" />
				<link rel="stylesheet" href="/assets/css/utils/code_preview.css" />
				<link rel="stylesheet" href="/assets/css/utils/widths.css" />
				<link rel="stylesheet" href="/assets/css/utils/letter_list.css" />
				<link rel="stylesheet" href="/assets/css/index/homepage.css" />
			</head>
			<body>
				<BootstrapLoader>
          			<Navbar />
					<main className="page-content">{children}</main>
					<Footer />
				</BootstrapLoader>

				{/* JS scripts */}
				<Script src="/assets/js/utils/prism.js" strategy="beforeInteractive" />
				<Script src="/assets/js/general/customCodeHighlight.js" strategy="afterInteractive" />
				{/* <Script src="/assets/js/settings/theme.js" strategy="afterInteractive" /> */}
				{/* <Script src="/assets/js/settings/fontSize.js" strategy="afterInteractive" />*/}
			</body>
			</>
		</html>
	);
}
