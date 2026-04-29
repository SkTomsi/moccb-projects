import { ProjectCard } from "@/components/project-card";
import { SCHOOLS } from "@/data/schools";

export default function SchoolPage() {
	return (
		<div
			className="flex h-fit w-full flex-col gap-10 p-4 md:p-20 max-w-7xl mx-auto"
			id="institutions"
		>
			<h3 className="w-full font-extrabold text-center text-3xl text-black/95 tracking-tighter md:text-4xl">
				Our Schools
			</h3>
			<div className="grid h-fit w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
				{SCHOOLS.map((p) => (
					<ProjectCard project={p} key={p.name} />
				))}
			</div>
		</div>
	);
}
