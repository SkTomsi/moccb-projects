import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PartnerProjects, projects } from "@/data/projects";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getProjectDetails(slug: string) {
	return [...projects, ...PartnerProjects].find((p) => p.slug === slug);
}
