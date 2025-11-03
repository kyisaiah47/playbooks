"use client";

import { FeaturesShowcase } from "@/components/features-showcase";
import { FloatingDockNav } from "@/components/floating-dock-nav";
import { PageLayout } from "@/components/layout";

export default function AppPage() {
	return (
		<PageLayout includeHeader={false}>
			<FeaturesShowcase />
			<FloatingDockNav />
			{/* More blocks will be added here */}
		</PageLayout>
	);
}
