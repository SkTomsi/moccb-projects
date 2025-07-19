import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function PartneringTrustsPage() {
	return (
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
	);
}
