"use client";

import clsx from "clsx";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
		name: "The Leadership",
		href: "/the-leadership",
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
	{
		name: "Contact Us",
		href: "/contact-us",
	},
];

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
		<div
			className={clsx(
				"w-full sticky top-0 z-50 bg-white transition-all duration-300 ease-out",
				isScrolled === true && "shadow-xs",
			)}
		>
			<header
				className={clsx("bg-white rounded-full  top-0 z-50 w-full md:px-5")}
			>
				<div className="px-5 py-4 flex items-center justify-between">
					<Link href={"/"}>
						<div className="flex items-center space-x-2">
							<Image
								className={clsx(
									"size-[80px] object-contain text-base",
									isScrolled === true && "size-[20px] text-xs",
								)}
								src={"/logo.png"}
								alt="MOSC Logo"
								width={120}
								height={120}
							/>
							<p className="md:text-base text-xs font-bold tracking-tight uppercase">
								The Malankara Orthodox Church <br />
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
								<Button variant="ghost" className=" px-4 m-0">
									<Menu className="h-6 w-6 object-contain" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className=" overflow-y-auto">
								<div className="flex flex-col space-y-2 mt-12 px-2">
									{NAV_MENU.map((i) => (
										<MobileMenuItem
											key={i.name}
											href={i.href}
											className="text-base"
										>
											{i.name}
										</MobileMenuItem>
									))}
								</div>
							</SheetContent>
						</Sheet>

						<div className="hidden md:block">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button>Contribute</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem className="text-sm">
										Donate
									</DropdownMenuItem>
									<DropdownMenuItem>Volunteer or Intern</DropdownMenuItem>
									<DropdownMenuItem>Work with Us</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
