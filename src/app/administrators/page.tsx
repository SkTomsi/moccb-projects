import { MemberCard } from "@/components/member-card";
import {
	educationBoardMembers,
	members,
	workingCommittee,
} from "@/data/members";

export default function AdminPage() {
	return (
		<div>
			<div className="flex h-fit w-full flex-col gap-6 p-4 md:p-20">
				<h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl">
					Administration
				</h3>
				<div className="space-y-14">
					<div className="space-y-4" id="council-members">
						<p className="text-xl font-medium tracking-tight">
							Council Members
						</p>
						<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
							{members.map((p) => (
								<MemberCard member={p} key={p.name} />
							))}
						</div>
					</div>
					<div className="space-y-4" id="education-board">
						<p className="text-xl font-medium tracking-tight">
							Education Board
						</p>
						<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
							{educationBoardMembers.map((p) => (
								<MemberCard member={p} key={p.name} />
							))}
						</div>
					</div>
					<div className="space-y-4" id="working-committee">
						<p className="text-xl font-medium tracking-tight">
							Executive Members - Working Committee
						</p>
						<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
							{workingCommittee.map((p) => (
								<MemberCard member={p} key={p.name} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
