/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MenuItem {
	title: string;
	links: {
		text: string;
		url: string;
	}[];
}

interface Footer2Props {
	logo?: {
		url: string;
		src: string;
		alt: string;
		title: string;
	};
	className?: string;
	tagline?: string;
	menuItems?: MenuItem[];
	copyright?: string;
	bottomLinks?: {
		text: string;
		url: string;
	}[];
}

const Footer = ({
	logo = {
		src: "/logo.png",
		alt: "blocks for shadcn/ui",
		title: "The Malankara Orthodox Church Council of Bombay",
		url: "https://www.shadcnblocks.com",
	},
	className,
	tagline = "Components made easy.",
	menuItems = [
		{
			title: "Product",
			links: [
				{ text: "Overview", url: "#" },
				{ text: "Pricing", url: "#" },
				{ text: "Marketplace", url: "#" },
				{ text: "Features", url: "#" },
				{ text: "Integrations", url: "#" },
				{ text: "Pricing", url: "#" },
			],
		},
		{
			title: "Company",
			links: [
				{ text: "About", url: "#" },
				{ text: "Team", url: "#" },
				{ text: "Blog", url: "#" },
				{ text: "Careers", url: "#" },
				{ text: "Contact", url: "#" },
				{ text: "Privacy", url: "#" },
			],
		},
		{
			title: "Resources",
			links: [
				{ text: "Help", url: "#" },
				{ text: "Sales", url: "#" },
				{ text: "Advertise", url: "#" },
			],
		},
		{
			title: "Social",
			links: [
				{ text: "Twitter", url: "#" },
				{ text: "Instagram", url: "#" },
				{ text: "LinkedIn", url: "#" },
			],
		},
	],
	copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
	bottomLinks = [
		{ text: "Terms and Conditions", url: "#" },
		{ text: "Privacy Policy", url: "#" },
	],
}: Footer2Props) => {
	return (
		<section className={cn("pt-32 bottom-0 left-0 right-0", className)}>
			<div className="bg-primary py-12">
				<footer>
					<div className="grid grid-cols-2 gap-8 lg:grid-cols-6 px-5 md:px-12">
						<div className="col-span-2 mb-8 lg:mb-0">
							<div className="items-start gap-5 lg:justify-start flex flex-col ">
								<Image
									src={logo.src}
									alt={logo.alt}
									width={120}
									height={120}
									className="grayscale-100"
								/>
								<h3 className="text-white uppercase font-bold w-2/3 text-balance">
									{logo.title}
								</h3>
							</div>
						</div>
						{menuItems.map((section, sectionIdx) => (
							<div key={sectionIdx}>
								<h3 className="mb-4 font-bold text-white">{section.title}</h3>
								<ul className="space-y-4 text-white">
									{section.links.map((link, linkIdx) => (
										<li
											key={linkIdx}
											className="font-normal hover:text-white/90 hover:underline"
										>
											<a href={link.url}>{link.text}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-white md:flex-row md:items-center px-5">
						<p>{copyright}</p>
						<ul className="flex gap-4">
							{bottomLinks.map((link, linkIdx) => (
								<li
									key={linkIdx}
									className=" hover:text-white/90 hover:underline"
								>
									<a href={link.url}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
				</footer>
			</div>
		</section>
	);
};

export default Footer;
