// app/layout.jsx

import Script from "next/script";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Bootstrap JS
import BootstrapLoader from "@components/BootstrapLoader.jsx";
import Navbar from "@components/Navbar.jsx";
import Footer from "@components/Footer.jsx";

import FontSizeWrapper from "@components/appearance/FontSizeWrapper.jsx";

import './globals.css';

// Import Theme
import { ThemeProvider } from "@components/appearance/ThemeProvider.jsx";

export const metadata = {
	title: 'S54 - DCDF',
	description: 'Homepage',
	icons: {
		icon: '/favicon.ico',
	},
	charset: 'UTF-8'
};

// Export viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
	
	return (
		<html lang="en">
			<body>
				<BootstrapLoader>
					<ThemeProvider>
						<Navbar />
							<FontSizeWrapper>
								<main className="page-content">
									{children}
								</main>
							</FontSizeWrapper>
						<Footer />
					</ThemeProvider>
				</BootstrapLoader>

				{/* JS scripts */}
				<Script src="/assets/js/utils/prism.js" strategy="beforeInteractive" />

				<Script src="/assets/js/utils/collapseButton.js" strategy="afterInteractive" />
			</body>
		</html>
	);
}
