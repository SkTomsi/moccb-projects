"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";

export function CarouselPlugin() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true }),
	);

	return (
		<div className="px-4 w-full pt-20">
			<div className="w-full relative md:gap-8 py-12 px-14  flex flex-col min-h-full bg-secondary rounded-4xl">
				<div className="">
					<Badge>Our Schools</Badge>
					<div>
						<h1 className="text-4xl font-bold text-balance">
							Our Prestigious Schools
						</h1>
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
				>
					<div className="mask-x-from-90%">
						<CarouselContent>
							{Array.from({ length: 6 }).map((_, index) => (
								<CarouselItem key={index} className="basis-1/3">
									<div className="p-1">
										<Card>
											<CardContent className="flex aspect-square items-center justify-center p-6">
												<span className="text-4xl font-semibold">
													{index + 1}
												</span>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</div>
				</Carousel>
			</div>
		</div>
	);
}
