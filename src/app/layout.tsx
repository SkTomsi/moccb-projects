import { MainMenu } from "@/components/main-menu";
import { ThemeProvider } from "@/components/providers/theme";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
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
			<body className={`${geistSans.className} antialiased`}>
				<ThemeProvider
					attribute={"class"}
					enableSystem={false}
					defaultTheme="light"
				>
					<MainMenu />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
