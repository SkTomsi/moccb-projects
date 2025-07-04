import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { projects } from "../data/projects";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getProjectDetails(slug: string) {
	return projects.find((p) => p.slug === slug);
}
