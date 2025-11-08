"use client";

import { LandingHero } from "@/components/landing-hero";
import { LandingAbout } from "@/components/landing-about";
import { LandingFeatures } from "@/components/landing-features";
import { LandingTestimonials } from "@/components/landing-testimonials";
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
			<LandingTestimonials />
			<LandingStats />
			<LandingTechStack />
			<LandingIntegrations />

			{/* More blocks will be added here */}
		</PageLayout>
	);
}
