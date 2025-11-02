"use client";

import { HeroAnimatedText } from "@/components/hero-animated-text";
import { AboutCompanyStory } from "@/components/about-company-story";
import { TestimonialsWithFeatures } from "@/components/testimonials-with-features";
import { StatsRadar } from "@/components/stats-radar";
import { TechStackPreview } from "@/components/tech-stack-preview";
import { IntegrationsNetwork } from "@/components/integrations-network";
import { PageLayout } from "@/components/layout";

export default function BlocksDemoPage() {
	return (
		<PageLayout>
			<HeroAnimatedText />
			<AboutCompanyStory />
			<TestimonialsWithFeatures />
			<StatsRadar />
			<TechStackPreview />
			<IntegrationsNetwork />

			{/* More blocks will be added here */}
		</PageLayout>
	);
}
