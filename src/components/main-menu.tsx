// components/main-menu.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

// Helper component for list items within NavigationMenuContent
const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

// Mobile menu item component

export function MainMenu() {
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
		<div className="max-w-screen-lg px-4 py-1 flex items-center gap-10 max-md:justify-between mx-auto ">
			{/* Logo */}
			<Link href={"/"}>
				<Image
					src={"/logo.png"}
					alt="MOSC Logo"
					width={80}
					height={80}
					className="h-[80px] md:h-[120px] object-contain"
				/>
			</Link>

			{/* Desktop Navigation */}
			<NavigationMenu className="hidden lg:flex lg:w-fit">
				<NavigationMenuList>
					{/* Chief Administrators */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>Chief Administrators</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								<ListItem
									href="/administrators"
									title="HG Geevarghese Mar Coorilos"
								>
									Brief description or role of HG Geevarghese Mar Coorilos.
								</ListItem>
								<ListItem
									href="/administrators"
									title="HG Dr Geevarghese Mar Theophilos"
								>
									Brief description or role of HG Dr Geevarghese Mar Theophilos.
								</ListItem>
								<ListItem href="/administrators" title="Fr Thomas K Chacko">
									Brief description or role of Fr Thomas K Chacko.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Executive Committee */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>Executive Committee</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-4 md:w-[400px]">
								<ListItem href="/administrators" title="Fr Abraham Joseph" />
								<ListItem href="/administrators" title="Mr. Abraham Easo" />
								<ListItem
									href="/administrators"
									title="Mr. Daniel Binu Varghese"
								/>
								<ListItem
									href="/administrators"
									title="Mr. Febin Varghese Sabu"
								/>
								<ListItem
									href="/administrators"
									title="Mr. Siju T Thankachan"
								/>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* Board Members */}
					<NavigationMenuItem>
						<Link href="/administrators" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Board Members
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					{/* Education Board Members */}
					<NavigationMenuItem>
						<Link href="/administrators" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Education Board Members
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					{/* Affiliated Trusts */}
					<NavigationMenuItem>
						<NavigationMenuTrigger>Affiliated Trusts</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
								{/* Schools Section */}
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<a
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											href="/affiliated-trusts/schools"
										>
											<div className="mb-2 mt-4 text-lg font-medium">
												Schools
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Our network of educational institutions providing
												quality learning.
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem
									href="/affiliated-trusts/schools/st-marys-english-high-school-valsad"
									title="St Mary's English High School, Valsad"
								/>
								<ListItem
									href="/affiliated-trusts/schools/st-marys-multipurpose-school-junior-college-vashi"
									title="St Mary's Multipurpose School & Junior College, Vashi"
								/>
								<ListItem
									href="/affiliated-trusts/schools/st-marys-tejaswini-school-vashi"
									title="St Mary's Tejaswini School (fully free), Vashi"
								/>
								<ListItem
									href="/affiliated-trusts/schools/st-marys-jnp-school-jnpt-uran"
									title="St Mary's JNP School, JNPT, Uran"
								/>
								<ListItem
									href="/affiliated-trusts/schools/st-thomas-english-school-kalyan"
									title="St Thomas English School, Kalyan"
								/>
								<ListItem
									href="/affiliated-trusts/schools/st-marys-icse-school-koperkhairne"
									title="St Mary's ICSE School, Koperkhairne"
								/>
								<ListItem
									href="/affiliated-trusts/schools/dr-mar-theophilus-school-dhanori-pune"
									title="Dr Mar Theophilus School, Dhanori, Pune"
								/>
								<ListItem
									href="/affiliated-trusts/schools/st-thomas-public-school-khadki-pune"
									title="St Thomas Public School, Khadki, Pune"
								/>
								<ListItem
									href="/affiliated-trusts/schools/st-marys-school-dhule"
									title="St Mary's School, Dhule"
								/>

								{/* VES Trust Section */}
								<li className="row-span-2">
									<NavigationMenuLink asChild>
										<a
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											href="/affiliated-trusts/ves-trust"
										>
											<div className="mb-2 mt-4 text-lg font-medium">
												VES Trust (Vishweshwar Education Society's)
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Our premier institutes for higher education.
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem
									href="/affiliated-trusts/ves-trust/indira-institute-of-business-management-sanpada"
									title="Indira Institute of Business Management (IIBM), Sanpada"
								/>
								<ListItem
									href="/affiliated-trusts/ves-trust/western-college-of-commerce-business-management-sanpada"
									title="Western College of Commerce & Business Management (WCCBM), Sanpada"
								/>
								<ListItem
									href="/affiliated-trusts/ves-trust/dr-mar-theophilus-institute-of-management-studies-sanpada"
									title="Dr Mar Theophilus Institute of Management Studies (DMTIMS), Sanpada"
								/>

								{/* Individual Trusts */}
								<ListItem
									href="/affiliated-trusts/gregorian-public-school-roha"
									title="Gregorian Public School, Roha"
									className="col-span-2"
								/>
								<ListItem
									href="/affiliated-trusts/bombay-orthodox-diocesan-council"
									title="Bombay Orthodox Diocesan Council"
									className="col-span-2"
								/>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			{/* Mobile Menu */}
			<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
				<SheetTrigger asChild className="lg:hidden">
					<Button variant="ghost" className="[&_svg]:size-6">
						<Menu className="h-12 w-12 object-contain" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="w-80 overflow-y-auto">
					<div className="flex flex-col space-y-4 mt-6">
						{/* Chief Administrators */}
						<Collapsible>
							<CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-left font-medium hover:bg-accent rounded-md">
								Chief Administrators
								<ChevronDown className="h-4 w-4" />
							</CollapsibleTrigger>
							<CollapsibleContent className="space-y-2 mt-2 ml-4">
								<MobileMenuItem href="/administrators">
									HG Geevarghese Mar Coorilos
								</MobileMenuItem>
								<MobileMenuItem href="/administrators">
									HG Dr Geevarghese Mar Theophilos
								</MobileMenuItem>
								<MobileMenuItem href="/administrators">
									Fr Thomas K Chacko
								</MobileMenuItem>
							</CollapsibleContent>
						</Collapsible>

						{/* Executive Committee */}
						<Collapsible>
							<CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-left font-medium hover:bg-accent rounded-md">
								Executive Committee
								<ChevronDown className="h-4 w-4" />
							</CollapsibleTrigger>
							<CollapsibleContent className="space-y-2 mt-2 ml-4">
								<MobileMenuItem href="/administrators">
									Fr Abraham Joseph
								</MobileMenuItem>
								<MobileMenuItem href="/administrators">
									Mr. Abraham Easo
								</MobileMenuItem>
								<MobileMenuItem href="/administrators">
									Mr. Daniel Binu Varghese
								</MobileMenuItem>
								<MobileMenuItem href="/administrators">
									Mr. Febin Varghese Sabu
								</MobileMenuItem>
								<MobileMenuItem href="/administrators">
									Mr. Siju T Thankachan
								</MobileMenuItem>
							</CollapsibleContent>
						</Collapsible>

						{/* Board Members */}
						<MobileMenuItem href="/administrators" className="font-medium">
							Board Members
						</MobileMenuItem>

						{/* Education Board Members */}
						<MobileMenuItem href="/administrators" className="font-medium">
							Education Board Members
						</MobileMenuItem>

						{/* Affiliated Trusts */}
						<Collapsible>
							<CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-left font-medium hover:bg-accent rounded-md">
								Affiliated Trusts
								<ChevronDown className="h-4 w-4" />
							</CollapsibleTrigger>
							<CollapsibleContent className="space-y-2 mt-2 ml-4">
								{/* Schools Section */}
								<div className="border-l-2 border-muted-foreground/20 pl-4 space-y-2">
									<MobileMenuItem
										href="/affiliated-trusts/schools"
										className="font-medium text-primary"
									>
										Schools
									</MobileMenuItem>
									<div className="ml-4 space-y-1">
										<MobileMenuItem href="/affiliated-trusts/schools/st-marys-english-high-school-valsad">
											St Mary's English High School, Valsad
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/schools/st-marys-multipurpose-school-junior-college-vashi">
											St Mary's Multipurpose School & Junior College, Vashi
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/schools/st-marys-tejaswini-school-vashi">
											St Mary's Tejaswini School (fully free), Vashi
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/schools/st-marys-jnp-school-jnpt-uran">
											St Mary's JNP School, JNPT, Uran
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/schools/st-thomas-english-school-kalyan">
											St Thomas English School, Kalyan
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/schools/st-marys-icse-school-koperkhairne">
											St Mary's ICSE School, Koperkhairne
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/schools/dr-mar-theophilus-school-dhanori-pune">
											Dr Mar Theophilus School, Dhanori, Pune
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/schools/st-thomas-public-school-khadki-pune">
											St Thomas Public School, Khadki, Pune
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/schools/st-marys-school-dhule">
											St Mary's School, Dhule
										</MobileMenuItem>
									</div>
								</div>

								{/* VES Trust Section */}
								<div className="border-l-2 border-muted-foreground/20 pl-4 space-y-2">
									<MobileMenuItem
										href="/affiliated-trusts/ves-trust"
										className="font-medium text-primary"
									>
										VES Trust (Vishweshwar Education Society's)
									</MobileMenuItem>
									<div className="ml-4 space-y-1">
										<MobileMenuItem href="/affiliated-trusts/ves-trust/indira-institute-of-business-management-sanpada">
											Indira Institute of Business Management (IIBM), Sanpada
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/ves-trust/western-college-of-commerce-business-management-sanpada">
											Western College of Commerce & Business Management (WCCBM),
											Sanpada
										</MobileMenuItem>
										<MobileMenuItem href="/affiliated-trusts/ves-trust/dr-mar-theophilus-institute-of-management-studies-sanpada">
											Dr Mar Theophilus Institute of Management Studies
											(DMTIMS), Sanpada
										</MobileMenuItem>
									</div>
								</div>

								{/* Individual Trusts */}
								<MobileMenuItem href="/affiliated-trusts/gregorian-public-school-roha">
									Gregorian Public School, Roha
								</MobileMenuItem>
								<MobileMenuItem href="/affiliated-trusts/bombay-orthodox-diocesan-council">
									Bombay Orthodox Diocesan Council
								</MobileMenuItem>
							</CollapsibleContent>
						</Collapsible>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
