"use client";

import { StatsChart } from "@/components/stats-chart";
import { FloatingDockNav } from "@/components/floating-dock-nav";
import { PageLayout } from "@/components/layout";

export default function AppPage() {
	return (
		<PageLayout includeHeader={false}>
			<StatsChart />
			<FloatingDockNav />
			{/* More blocks will be added here */}
		</PageLayout>
	);
}
