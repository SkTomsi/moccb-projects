import type { Member } from "@/data/members";
import Image from "next/image";

export function MemberCard({ member: m }: { member: Member }) {
	return (
		<div
			key={m.name}
			className="hover:translate-y-[-10px] transition-all duration-300 ease-out flex h-full max-h-[500px] w-full flex-col rounded-2xl "
		>
			<div className="h-[300px] w-full overflow-hidden rounded-2xl">
				{m.image ? (
					<Image
						src={m.image}
						alt="project-image"
						width={200}
						height={400}
						className="h-full w-full rounded-2xl border border-muted-foreground/20 object-cover"
					/>
				) : (
					<div className="bg-gray-100 w-full h-full" />
				)}
			</div>
			<div className="mt-5 flex flex-grow flex-col">
				<h2 className="font-bold text-base tracking-tight">{m.name}</h2>
				<p className="text-base">{m.location}</p>
				<p className="text-sm mt-1">{m.phone}</p>
			</div>
		</div>
	);
}
