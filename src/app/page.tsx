import { MemberCard } from "@/components/member-card";
import { ProjectCard } from "@/components/project-card";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { institutions, otherTrusts } from "@/data/institutions";
import {
	educationBoardMembers,
	members,
	workingCommittee,
} from "@/data/members";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

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

			<div className="flex h-fit w-full flex-col gap-6 p-4 md:p-20 md:pt-10">
				{/* <h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl">
					What we do
				</h3> */}
				<div className="space-y-14">
					<div className="space-y-4" id="council-members">
						<div className="grid h-60 w-full gap-8 grid-cols-1 md:grid-cols-4 ">
							{categories.map((c) => (
								<Link href={c.href} key={c.name} className="h-full w-full">
									<Card className="h-full w-full flex flex-col items-center justify-center gap-5 hover:translate-y-[-10px] transition-all duration-300 p-6">
										<Image
											src={c.icon}
											alt={c.name}
											width={100}
											height={100}
											className="object-contain"
										/>
										{c.name}
									</Card>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
