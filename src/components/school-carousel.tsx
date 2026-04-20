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
			<div className="w-full relative md:gap-8 gap-4 md:py-12 md:px-14 py-8 px-3 flex flex-col min-h-full bg-secondary rounded-4xl">
				<div className="md:px-10 px-5">
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
					<div className="mask-x-from-88%">
						<CarouselContent>
							{Array.from({ length: 6 }).map((_, index) => (
								<CarouselItem key={index} className="md:basis-1/3">
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
