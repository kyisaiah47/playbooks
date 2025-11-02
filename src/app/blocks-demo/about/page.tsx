"use client";

import { AboutHeroVideo } from "@/components/about-hero-video";
import { AboutHero } from "@/components/about-hero";
import { CompanyLogos } from "@/components/company-logos";
import { PageLayout } from "@/components/layout";

export default function AboutPage() {
	return (
		<PageLayout>
			<AboutHeroVideo />
			<CompanyLogos />
			<AboutHero />
			{/* More blocks will be added here */}
		</PageLayout>
	);
}
