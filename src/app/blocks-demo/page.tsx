"use client";

import { HeroAnimatedText } from "@/components/hero-animated-text";
import { AboutCompanyStory } from "@/components/about-company-story";
import { FeaturesGridCards } from "@/components/features-grid-cards";
import { IntegrationsNetwork } from "@/components/integrations-network";
import { PageLayout } from "@/components/layout";

export default function BlocksDemoPage() {
	return (
		<PageLayout>
			<HeroAnimatedText />
			<AboutCompanyStory />
			<FeaturesGridCards />
			<IntegrationsNetwork />

			{/* More blocks will be added here */}
		</PageLayout>
	);
}
