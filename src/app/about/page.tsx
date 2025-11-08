"use client";

import { AboutHeroVideo } from "@/components/about-hero-video";
import { AboutHero } from "@/components/about-hero";
import { AboutLogos } from "@/components/about-logos";
import { AboutFaq } from "@/components/about-faq";
import { PageLayout } from "@/components/layout";

export default function AboutPage() {
	return (
		<PageLayout>
			<AboutHeroVideo />
			<AboutLogos />
			<AboutHero />
			<AboutFaq />
		</PageLayout>
	);
}
