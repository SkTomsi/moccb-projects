import { ProjectCard } from "@/components/project-card";
import { otherTrusts, VES_TRUSTS } from "@/data/institutions";

export default function PartneringTrustsPage() {
	return (
		<div
			className="flex h-fit w-full flex-col gap-10 p-4 md:p-20"
			id="institutions"
		>
			<h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl">
				Partnering Trusts
			</h3>
			<div className="grid h-fit w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
				{otherTrusts.map((p) => (
					<ProjectCard project={p} key={p.name} />
				))}
			</div>
			<div className="bg-secondary rounded-2xl space-y-5 md:px-8 md:py-6 px-5 py-5">
				<h3 className="font-bold uppercase text-base ">
					VES Trust Institutions
				</h3>
				<div className="grid h-fit w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
					{VES_TRUSTS.map((p) => (
						<ProjectCard project={p} key={p.name} />
					))}
				</div>
			</div>
		</div>
	);
}
