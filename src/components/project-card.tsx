import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Button } from "./ui/button";

export function ProjectCard({ project: p }: { project: Project }) {
	return (
		<Link
			href={`/projects/${p.slug}`}
			className="hover:translate-y-[-10px] transition-all duration-300 ease-out group hover:shadow-[0px_4px_0px_0px_(--tw-shadow-color)] shadow-primary"
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
						<p className="text-base text-muted-foreground">
							{p.shortDescription}
						</p>
					</div>
					<div className="text-sm text-muted-foreground flex items-center justify-between">
						{p.location}
						<Button
							className="opacity-0 group-hover:opacity-100 w-fit transition-all duration-300 ease-out"
							variant={"link"}
						>
							Read More
							<ArrowRight className="h-6 w-6" />
						</Button>
					</div>
				</div>
			</div>
		</Link>
	);
}
