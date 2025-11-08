"use client";

import { GuidesHero } from "@/components/guides-hero";
import { GuidesList } from "@/components/guides-list";
import { PageLayout } from "@/components/layout";

export default function GuidesPage() {
	return (
		<PageLayout>
			<GuidesHero />
			<GuidesList />
		</PageLayout>
	);
}
