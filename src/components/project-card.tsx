import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function ProjectCard({
	project: p,
	className,
	isCarouselItem,
}: {
	project: Project;
	className?: string;
	isCarouselItem?: boolean;
}) {
	return (
		<Link
			href={
				(isCarouselItem && "/schools") || p.website || `/projects/${p.slug}`
			}
			className="group"
		>
			<div
				className={cn(
					"relative overflow-hidden flex flex-col rounded-4xl min-h-full bg-card border border-border shadow-none transition-all duration-300 ease-out hover:shadow-sm",
					className,
				)}
			>
				<div className="relative aspect-4/3 overflow-hidden">
					{p.image ? (
						<img
							src={p.image}
							alt={p.name}
							className="object-cover h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
						/>
					) : (
						<div className="bg-muted w-full h-full" />
					)}
					<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
				</div>
				<div className="relative p-4 flex-col flex items-start justify-between h-full grow space-y-5">
					<div className="space-y-2">
						<h2 className="font-heading text-xl font-bold leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
							{p.name}
						</h2>
						<p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
							{p.shortDescription}
						</p>
						{p.location && (
							<div className="inline-flex items-center text-sm gap-1 font-medium text-primary">
								<MapPin className="h-3 w-3" />
								{p.location}
							</div>
						)}
					</div>

					{p.website ? (
						<Link href={p.website} referrerPolicy="origin" target="_blank">
							<Button variant={"outline"} className="rounded-full h-fit py-2">
								Visit
							</Button>
						</Link>
					) : (
						<Button variant={"outline"} className="rounded-full h-fit py-2">
							Read More
						</Button>
					)}
				</div>
			</div>
		</Link>
	);
}
