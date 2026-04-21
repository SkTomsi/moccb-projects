"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const NAV_MENU = [
	{
		name: "Administrators",
		href: "/administrators",
	},
	{
		name: "Community Services",
		href: "/community-services",
	},
	{
		name: "Partnering Trusts",
		href: "/partnering-trusts",
	},
	{
		name: "About Us",
		href: "/about-us",
	},
];

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	const handleMobileMenuClose = () => {
		setMobileMenuOpen(false);
	};

	const MobileMenuItem = ({
		href,
		children,
		className = "",
	}: {
		href: string;
		children: React.ReactNode;
		className?: string;
	}) => {
		return (
			<Link
				href={href}
				onClick={handleMobileMenuClose}
				className={cn(
					"block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors",
					className,
				)}
			>
				{children}
			</Link>
		);
	};

	return (
		<div className="w-full">
			<header className="bg-white rounded-full sticky top-0 z-50 max-w-6xl mx-auto my-4">
				<div className="px-5 py-4 flex items-center justify-between">
					<Link href={"/"}>
						<div className="flex items-center space-x-2">
							<Image
								className="size-[50px] object-contain "
								src={"/logo.png"}
								alt="MOSC Logo"
								width={80}
								height={80}
							/>
							<p className="md:text-base text-xs font-bold tracking-tight uppercase">
								Malankara Orthodox Church <br />
								Council of Bombay
							</p>
						</div>
					</Link>

					<div className="flex items-center space-x-4">
						{/* Desktop Navigation */}
						<nav className="hidden md:flex md:space-x-4">
							<NavigationMenu>
								<NavigationMenuList>
									{NAV_MENU.map((i) => (
										<NavigationMenuItem key={i.name}>
											<NavigationMenuLink
												asChild
												className={navigationMenuTriggerStyle()}
											>
												<Link href={i.href}>{i.name}</Link>
											</NavigationMenuLink>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>
						</nav>

						{/* Mobile Menu */}
						<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
							<SheetTrigger asChild className="md:hidden">
								<Button variant="ghost" className="[&_svg]:size-6">
									<Menu className="h-6 w-6 object-contain" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-80 overflow-y-auto">
								<div className="flex flex-col space-y-4 mt-6">
									{NAV_MENU.map((i) => (
										<MobileMenuItem key={i.name} href={i.href}>
											{i.name}
										</MobileMenuItem>
									))}
								</div>
							</SheetContent>
						</Sheet>

						<div className="hidden md:block">
							<Button>Contact Us</Button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
