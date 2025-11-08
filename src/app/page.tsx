"use client";

import { LandingHero } from "@/components/landing-hero";
import { LandingAbout } from "@/components/landing-about";
import { LandingFeatures } from "@/components/landing-features";
import { TestimonialsWithFeatures } from "@/components/testimonials-with-features";
import { LandingStats } from "@/components/landing-stats";
import { LandingTechStack } from "@/components/landing-tech-stack";
import { LandingIntegrations } from "@/components/landing-integrations";
import { PageLayout } from "@/components/layout";

export default function HomePage() {
	return (
		<PageLayout>
			<LandingHero />
			<LandingAbout />
			<LandingFeatures />
			<TestimonialsWithFeatures />
			<LandingStats />
			<LandingTechStack />
			<LandingIntegrations />

			{/* More blocks will be added here */}
		</PageLayout>
	);
}
