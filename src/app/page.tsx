import Image from "next/image";

export const categories = [
	{
		name: "Administrators",
		href: "/administrators",
		icon: "/team.png",
	},
	{
		name: "Institutions",
		href: "/institutions",
		icon: "/school.png",
	},
	{
		name: "Community Services",
		href: "/community-services",
		icon: "/social.png",
	},
	{
		name: "Partnering Trusts",
		href: "/partnering-trusts",
		icon: "/trust.png",
	},
];

export default function Home() {
	return (
		<div className="flex h-screen w-full flex-col items-center gap-10 mt-10">
			<div className="flex h-full w-full flex-col items-center gap-2 p-4 md:p-5">
				<div className="relative h-full w-full overflow-hidden rounded-xl bg-black/95">
					<Image
						src={"/st-thomas.jpg"}
						alt="vashi aramana church"
						width={4000}
						height={4000}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="h-screen w-full overflow-hidden rounded-xl object-cover object-center [mask-image:linear-gradient(to_top,transparent,black_60%)] lg:h-full lg:object-center"
					/>
					<div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-10 text-white">
						<h1 className="font-bold text-2xl tracking-tighter md:text-4xl">
							Malankara Orthodox Church Council of Bombay
						</h1>
						<p className="text-pretty font-normal text-sm tracking-normal md:text-base lg:w-1/2">
							The Malankara Orthodox Church Council of Bombay (MOCCB) is a
							registered charitable Trust formed in the year 1982 along with its
							sister Trusts, headquartered in Vashi, Navi Mumbai.
						</p>
						<p className="text-pretty font-normal text-sm tracking-normal md:text-base lg:w-1/2">
							The MOCCB and its affiliated Trusts have undertaken a range of
							impactful social initiatives
						</p>
					</div>
				</div>
			</div>

			<div className="flex h-fit w-full flex-col gap-6 p-4 md:p-20 md:pt-10"></div>
		</div>
	);
}
