import { MemberCard } from "@/components/member-card";
import { ProjectCard } from "@/components/project-card";
import { institutions, otherTrusts } from "@/data/institutions";
import {
	educationBoardMembers,
	members,
	workingCommittee,
} from "@/data/members";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex h-screen w-full flex-col items-center gap-10">
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
			<div className="flex h-fit w-full flex-col gap-6 p-4 md:p-20">
				<h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl">
					Administration
				</h3>
				<div className="space-y-14">
					<div className="space-y-4" id="council-members">
						<p className="text-xl font-medium tracking-tight">
							Council Members
						</p>
						<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
							{members.map((p) => (
								<MemberCard member={p} key={p.name} />
							))}
						</div>
					</div>
					<div className="space-y-4" id="education-board">
						<p className="text-xl font-medium tracking-tight">
							Education Board
						</p>
						<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
							{educationBoardMembers.map((p) => (
								<MemberCard member={p} key={p.name} />
							))}
						</div>
					</div>
					<div className="space-y-4" id="working-committee">
						<p className="text-xl font-medium tracking-tight">
							Executive Members - Working Committee
						</p>
						<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
							{workingCommittee.map((p) => (
								<MemberCard member={p} key={p.name} />
							))}
						</div>
					</div>
				</div>
			</div>
			<div
				className="flex h-fit w-full flex-col gap-10 p-4 md:p-20"
				id="institutions"
			>
				<h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl">
					Other Trusts
				</h3>
				<div className="grid h-fit w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
					{otherTrusts.map((p) => (
						<ProjectCard project={p} key={p.name} />
					))}
				</div>
			</div>
			<div
				className="flex h-fit w-full flex-col gap-10 p-4 md:p-20"
				id="institutions"
			>
				<h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl">
					Institutions
				</h3>
				<div className="grid h-fit w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
					{institutions.map((p) => (
						<ProjectCard project={p} key={p.name} />
					))}
				</div>
			</div>
			<div
				className="flex h-fit w-full flex-col gap-10 p-4 md:p-20"
				id="community-services"
			>
				<h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl">
					Community Services
				</h3>
				<div className="grid h-fit w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((p) => (
						<ProjectCard project={p} key={p.name} />
					))}
				</div>
			</div>
		</div>
	);
}
