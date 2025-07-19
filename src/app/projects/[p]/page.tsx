"use client";

import { getProjectDetails } from "@/lib/utils";
import { MailIcon, MapPin } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProjectsPage() {
	const params = useParams<{ p: string }>();

	const projectDetails = getProjectDetails(params.p);

	if (!projectDetails) {
		return <div>Project not found</div>;
	}

	return (
		<div className="flex h-full w-full flex-col items-center gap-8 pt-5 pb-10">
			<div className="relative z-0 h-[500px] w-full flex-grow overflow-hidden md:h-[500px]">
				<Image
					src={projectDetails?.image ?? ""}
					alt={projectDetails?.name}
					className="h-full w-full object-cover object-center"
				/>
				<div className="absolute top-0 bottom-0 flex h-full w-full items-center justify-center bg-black/55 text-center">
					<p className="font-bold text-3xl text-white md:text-5xl">
						{projectDetails.name}
					</p>
				</div>
			</div>
			<div className="flex w-full max-w-[900px] flex-col gap-8 px-5">
				<div className="flex w-full gap-2 font-bold">
					<MapPin />
					{projectDetails.location}
				</div>
				<div className="flex w-full flex-col gap-2 ">
					{projectDetails?.longDescription.map((desc, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<p key={i}>{desc}</p>
					))}
				</div>
				<div className="flex w-full flex-col gap-2 ">
					<p>For contact and more information, please connect with us at:</p>
					<a
						href="mailto:contact@moccb.org.in"
						className="flex items-center gap-2 font-semibold"
					>
						<MailIcon className="h-4 w-4" strokeWidth={3} />{" "}
						contact@moccb.org.in
					</a>
				</div>
				{typeof projectDetails.locationLink === "string" ? (
					<div>
						<iframe
							title={`${projectDetails.name} location`}
							src={projectDetails.locationLink}
							width="800"
							height="600"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				) : (
					projectDetails.locationLink
				)}
			</div>
		</div>
	);
}
