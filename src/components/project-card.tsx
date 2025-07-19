import type { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ project: p }: { project: Project }) {
	return (
		<Link
			href={`/projects/${p.slug}`}
			className="hover:translate-y-[-10px] transition-all duration-300 ease-out"
		>
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
							className="h-full w-full rounded-2xl border border-muted-foreground/20 object-cover"
						/>
					) : (
						<div className="bg-gray-100 w-full h-full" />
					)}
				</div>
				<div className="mt-5 flex flex-grow flex-col gap-1 ">
					<div className="flex flex-col gap-1">
						<h2 className="font-bold text-base tracking-tight">{p.name}</h2>
						<p className="text-base">{p.shortDescription}</p>
					</div>
					<div className="text-sm">{p.location}</div>
				</div>
			</div>
		</Link>
	);
}
