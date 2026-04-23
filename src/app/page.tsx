import { School, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CarouselPlugin } from "@/components/school-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const STATS = [
	{
		name: "Institutions",
		value: "10+",
		icon: <School className="size-14" />,
	},
	{
		name: "Consecutively Global ICSE topper",
		value: "3 Years",
		icon: <Trophy className="size-14" />,
	},
	{
		name: "Students catered",
		value: "10,000+",
		icon: <Users className="size-14" />,
	},
];

export default function Home() {
	return (
		<div className="flex min-h-screen w-full flex-col items-center gap-20 mt-10">
			<div className="w-full h-fit flex flex-col gap-8 items-center justify-center pt-20">
				<div className="space-y-4 items-center flex flex-col">
					<h1 className="font-bold text-5xl md:text-7xl text-balance max-w-md w-full text-center max-md:px-4">
						Together, <br /> we build a brighter future
					</h1>
					<p className="max-w-xl text-center font-medium text-muted-foreground">
						The MOCCB is a registered charitable Trust formed in the year 1982
						along with its sister Trusts, headquartered in Vashi, Navi Mumbai.
					</p>
				</div>
				<Link href={"/about-us"}>
					<Button>Learn more</Button>
				</Link>
			</div>

			<div className="w-full relative px-4 space-y-5">
				<Image
					src={"/st-thomas.jpg"}
					alt="vashi aramana church"
					width={4000}
					height={4000}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="md:h-screen h-100 w-full overflow-hidden rounded-4xl object-cover object-center mask-[linear-gradient(to_top,transparent,black_0%)] lg:h-full lg:object-center -z-10"
				/>
				<div className="w-full rounded-3xl flex flex-col items-center gap-8 bg-secondary lg:px-24 py-8">
					<Badge>The Trust</Badge>
					<div className="flex max-md:flex-col gap-y-16 items-center justify-between w-full">
						{STATS.map((s) => (
							<div
								key={s.name}
								className="flex flex-col items-center gap-2 text-center h-full md:min-w-[14vw]"
							>
								<div className="text-primary">{s.icon}</div>
								<p className="text-6xl font-bold tracking-tight text-primary">
									{s.value}
								</p>
								<h2 className="text-base font-medium">{s.name}</h2>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="max-w-7xl w-full relative space-y-12 md:gap-12 px-4 pt-20 flex flex-col md:flex-row min-h-full">
				<div className="flex flex-col items-start gap-2 sm:py-10">
					<Badge>About Us</Badge>
					<h1 className="text-4xl font-bold text-balance">
						Malankara Orthodox Church Council of Bombay
					</h1>
					<div className="text-muted-foreground space-y-2">
						<p className="font-normal text-sm tracking-normal sm:text-base text-balance">
							The Malankara Orthodox Church Council of Bombay (MOCCB) is a
							registered charitable Trust formed in the year 1982 along with its
							sister Trusts, headquartered in Vashi, Navi Mumbai.
						</p>
						<p className="text-balance font-normal text-sm tracking-normal sm:text-base">
							The MOCCB and its affiliated Trusts have undertaken a range of
							impactful social initiatives
						</p>
					</div>
					<Link href={"/about-us"}>
						<Button variant={"link"} className="p-0">
							Read More
						</Button>
					</Link>
				</div>
				<div className="w-full min-h-full bg-border rounded-2xl max-md:aspect-square" />
			</div>
			<CarouselPlugin />
		</div>
	);
}
