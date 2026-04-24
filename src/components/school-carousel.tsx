"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function SchoolCarouselSection() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true }),
	);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="px-4 w-full pt-20">
			<div className="w-full relative md:gap-8 gap-4 md:py-12 md:px-14 py-8 px-3 flex flex-col min-h-full bg-secondary rounded-4xl">
				<div className="md:px-10 px-5">
					<Badge>Our Schools</Badge>
					<div>
						{/* <h1 className="text-4xl font-bold text-balance"></h1> */}
					</div>
				</div>
				<Carousel
					plugins={[plugin.current]}
					opts={{
						loop: true,
					}}
					className="w-full"
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
					setApi={setApi}
				>
					<div className="md:mask-x-from-88%">
						<CarouselContent>
							{Array.from({ length: 6 }).map((_, index) => (
								<CarouselItem
									key={index}
									className={cn(
										"basis-3/9 transition-opacity max-md:basis-1/1",
										{
											"opacity-30": index !== current - 1,
										},
									)}
								>
									<div className="p-1">
										<Card>
											<CardContent className="flex aspect-square items-center justify-center p-6">
												<span className="text-4xl font-semibold">
													School {index + 1}
												</span>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</div>
					<div className="max-md:hidden">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
			</div>
		</div>
	);
}
