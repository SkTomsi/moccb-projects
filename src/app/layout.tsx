import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import { MainMenu } from "@/components/main-menu";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const grot = Bricolage_Grotesque({
	variable: "--font-grotesque",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://moccb-projects.vercel.app/"),
	title: "MOCCB Projects | Malankara Orthodox Church Council of Bombay",
	description:
		"This is the official website of the Malankara Orthodox Church Council of Bombay projects",
	creator: "Tomcy Thomas",
	authors: [{ name: "Tomcy Thomas", url: "https://sktomsi.lol" }],
	publisher: "Tomcy Thomas",
	alternates: {
		canonical: "/",
	},
	keywords: [
		"Malankara Orthodox Church Council of Bombay",
		"MOCCB",
		"Malankara Orthodox Church",
		"Malankara Orthodox Syrian Church",
		"Orthodox Church",
		"Orthodox",
		"Church",
		"Malankara",
		"Orthodox Syrian",
		"Church Council of Bombay",
		"MOCCB Projects",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${grot.className} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
