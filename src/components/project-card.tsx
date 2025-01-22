import type { Project } from "@/lib/projects";
import Image from "next/image";

export function ProjectCard({ project: p }: { project: Project }) {
	return (
		<div
			key={p.name}
			className="flex h-full max-h-[500px] w-full flex-col rounded-2xl "
		>
			<div className="h-[300px] w-full overflow-hidden rounded-2xl">
				{p.image ? (
					<Image
						src={p.image}
						alt="project-image"
						width={400}
						height={400}
						className="h-full w-full object-cover"
					/>
				) : null}
			</div>
			<div className="mt-5 flex flex-grow flex-col justify-between gap-1 ">
				<div className="flex flex-col gap-1">
					<h2 className="font-bold text-base tracking-tight">{p.name}</h2>
					<p className="text-base">{p.shortDescription}</p>
				</div>
				<div className="mt-2 text-sm">{p.location}</div>
			</div>
		</div>
	);
}
