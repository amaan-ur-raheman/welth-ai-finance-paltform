import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Welth - AI Finance Platform",
	description:
		"Welth is an advanced AI-powered finance platform helping you make smarter investment decisions. Get personalized financial insights, portfolio management, and wealth building strategies.",
	keywords:
		"AI finance platform, wealth management, financial planning, investment strategies, portfolio optimization, artificial intelligence investing",
	openGraph: {
		title: "Welth - AI Finance Platform",
		description:
			"Make smarter investment decisions with AI-powered financial insights and portfolio management",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Welth - AI Finance Platform",
		description:
			"Make smarter investment decisions with AI-powered financial insights and portfolio management",
	},
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} antialiased`}>
					<Header />
					<main className="min-h-screen">{children}</main>
					<footer className="bg-blue-50 py-12">
						<div className="container mx-auto px-4 text-center text-gray-600">
							<p>
								© {new Date().getFullYear()} Welth. All rights
								reserved.
							</p>
						</div>
					</footer>
				</body>
			</html>
		</ClerkProvider>
	);
}
