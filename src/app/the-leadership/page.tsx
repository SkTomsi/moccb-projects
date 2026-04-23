import { MemberCard } from "@/components/member-card";
import {
	educationBoardMembers,
	members,
	workingCommittee,
} from "@/data/members";

export default function AdminPage() {
	return (
		<div className="flex h-fit w-full flex-col gap-6 p-4 md:p-20 items-center">
			<h3 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl text-center	">
				Meet the Leadership
			</h3>
			<div className="space-y-14 md:mt-5">
				<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
					<div className="col-span-2 md:col-span-3 lg:col-span-6 flex flex-col items-center justify-center space-y-5">
						<p className="text-base text-muted-foreground font-bold uppercase border rounded-2xl px-4 py-1">
							Out Patron
						</p>
						<MemberCard
							member={{
								name: "H.H. Baselios Marthoma Mathews III",
								image: "/bava-thirumeni.png",
							}}	
							className="text-center"
						/>
					</div>
				</div>
				<div className="space-y-4" id="council-members">
					<p className="text-xl font-medium tracking-tight">Management Board</p>
					<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
						{workingCommittee.map((p) => (
							<MemberCard member={p} key={p.name} />
						))}
					</div>
				</div>
				<div className="space-y-4" id="education-board">
					<div className="space-y-1">
						<p className="text-xl font-medium tracking-tight">
							Council Members
						</p>
						<p className="text-base font-medium text-muted-foreground">
							Along with the Management Board these are the council members
						</p>
					</div>
					<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
						{members.map((p) => (
							<MemberCard member={p} key={p.name} />
						))}
					</div>
				</div>
				<div className="space-y-4" id="education-board">
					<div className="space-y-1">
						<p className="text-xl font-medium tracking-tight">Advisory board</p>
						<p className="text-base font-medium text-muted-foreground">
							Along with the Management Board this is the advisory board
						</p>
					</div>
					<div className="grid h-fit w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
						{educationBoardMembers.map((p) => (
							<MemberCard member={p} key={p.name} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
