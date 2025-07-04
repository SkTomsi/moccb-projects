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
					<div className="flex w-full justify-evenly items-center pt-5 gap-4 max-w-3xl mx-auto text-sm max-sm:px-5">
						<Link
							href={"#council-members"}
							className="flex items-center gap-2  tracking-tight font-medium"
						>
							Council Members
						</Link>
						<Link
							href={"#education-board"}
							className="flex items-center gap-2  tracking-tight font-medium"
						>
							Education Board
						</Link>
						<Link href={"/"}>
							<Image
								src={"/logo.png"}
								alt="MOSC Logo"
								width={100}
								height={100}
								className="h-[120px] object-contain"
							/>
						</Link>
						<Link
							href={"#institutions"}
							className="flex items-center gap-2  tracking-tight font-medium"
						>
							Institutions
						</Link>
						<Link
							href={"#community-services"}
							className="flex items-center gap-2  tracking-tight font-medium"
						>
							Community Services
						</Link>
					</div>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
