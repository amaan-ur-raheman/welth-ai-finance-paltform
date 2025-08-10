"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
	const imageRef = useRef();

	useEffect(() => {
		const imageElement = imageRef.current;

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const scrollThreshold = 100;

			if (scrollPosition > scrollThreshold) {
				imageElement.classList.add("scrolled");
			} else {
				imageElement.classList.remove("scrolled");
			}
		};

		window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="py-10 md:py-20 px-4">
			<div className="container mx-auto text-center">
				<h1 className="text-4xl md:text-6xl lg:text-7xl pb-6 gradient-title">
					Manage Your Finances <br /> with Intelligence
				</h1>
				<p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 mx-auto">
					An AI powered financial management platform that helps you
					track analyze, and optimize your spending with real-time
					insights.
				</p>
				<div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
					<Link href="/dashboard">
						<Button className={"w-full md:w-auto px-8 py-3 md:py-4"} size={"lg"}>
							Get Started
						</Button>
					</Link>
					<Link href="/dashboard">
						<Button
							className={"w-full md:w-auto px-8 py-3 md:py-4"}
							size={"lg"}
							variant={"outline"}
						>
							Watch Demo
						</Button>
					</Link>
				</div>
				<div className="hero-image-wrapper">
					<div ref={imageRef} className="hero-image">
						<Image
							src={"/banner.jpeg"}
							alt="banner"
							width={1280}
							height={720}
							className="rounded-lg shadow-2xl border mx-auto"
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
