import { ProjectCard } from "@/components/project-card";
import { PartnerProjects, projects } from "@/data/projects";

export default function PartneringTrustsPage() {
	return (
		<div
			className="flex h-fit w-full flex-col gap-10 p-4 md:p-20"
			id="community-services"
		>
			<h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl text-center">
				Community Services
			</h3>
			<div className="grid h-fit w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((p) => (
					<ProjectCard project={p} key={p.name} />
				))}
			</div>
			<div className="md:space-y-5 space-y-3">
				<h3 className="text-xl font-medium tracking-tight text-center">
					Projects under a partnering trust
				</h3>
				<div className="grid h-fit w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
					{PartnerProjects.map((p) => (
						<ProjectCard project={p} key={p.name} />
					))}
				</div>
			</div>
		</div>
	);
}
