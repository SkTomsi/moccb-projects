import Link from "next/link";
import { MemberCard } from "@/components/member-card";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	educationBoardMembers,
	members,
	workingCommittee,
} from "@/data/members";

export default function AboutUsPage() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 className="w-full font-extrabold text-3xl text-black/95 tracking-tighter md:text-4xl text-center pt-20 py-6">
				About Us
			</h1>

			<div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
				<Card className="h-full">
					<CardHeader>
						<CardTitle className="text-2xl">Our Mission</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">
							The Malankara Orthodox Church Council of Bombay (MOSC) is
							dedicated to fostering spiritual growth, community service, and
							preserving the rich heritage of the Malankara Orthodox Syrian
							Church in the Mumbai region.
						</p>
						<p>
							We strive to create a welcoming environment for all believers
							while engaging in charitable activities that serve the broader
							community.
						</p>
					</CardContent>
				</Card>

				<Card className="h-full">
					<CardHeader>
						<CardTitle className="text-2xl">Our Vision</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">
							To be a beacon of faith and service in Bombay, strengthening the
							Orthodox Christian community through worship, education, and
							outreach programs that reflect Christ's love.
						</p>
						<p className="mb-4">
							We envision a vibrant community where traditions are upheld, youth
							are empowered, and everyone finds a place to grow spiritually.
						</p>
						<Button variant="outline" asChild>
							<Link href="/community-services">
								Learn More About Our Services
							</Link>
						</Button>
					</CardContent>
				</Card>
			</div>

			<div className="mt-12">
				<Card>
					<CardHeader>
						<CardTitle className="text-2xl">Our History</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="mb-4">
							Established in [year], the Malankara Orthodox Church Council of
							Bombay has grown from a small fellowship to a thriving community
							serving hundreds of families across Mumbai and surrounding areas.
						</p>
						<p>
							Throughout our history, we have remained committed to the
							apostolic faith, ecumenical dialogue, and humanitarian service,
							following the footsteps of St. Thomas the Apostle who brought
							Christianity to India in 52 AD.
						</p>
					</CardContent>
				</Card>
			</div>
			<div className="flex h-fit w-full flex-col gap-6 mt-16 items-center">
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
						<p className="text-xl font-medium tracking-tight">
							Management Board
						</p>
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
							<p className="text-xl font-medium tracking-tight">
								Advisory board
							</p>
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
		</div>
	);
}
