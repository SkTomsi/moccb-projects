import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Button } from "./ui/button";

export function ProjectCard({ project: p }: { project: Project }) {
	return (
		<Link href={`/projects/${p.slug}`} className="group block">
			<div className="relative overflow-hidden flex flex-col rounded-4xl min-h-full bg-card border border-border shadow-none transition-all duration-300 ease-out hover:shadow-sm">
				<div className="relative aspect-4/3 overflow-hidden">
					{p.image ? (
						<Image
							src={p.image}
							alt={p.name}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
						/>
					) : (
						<div className="bg-muted w-full h-full" />
					)}
					<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
				</div>
				<div className="relative p-4 flex-col flex items-start justify-between h-full grow space-y-5">
					<div className="mt-4 space-y-3">
						<h2 className="font-heading text-xl font-bold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
							{p.name}
						</h2>
						<p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
							{p.shortDescription}
						</p>
						<div className="inline-flex items-center text-sm gap-1 font-medium text-primary">
							<MapPin className="h-3 w-3" />
							{p.location}
						</div>
					</div>
					<Button variant={"outline"} className="rounded-full h-fit py-2">
						View Project
					</Button>
				</div>
			</div>
		</Link>
	);
}
