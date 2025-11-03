"use client";

import { GuidesHero } from "@/components/guides-hero";
import { List3 } from "@/components/list3";
import { PageLayout } from "@/components/layout";

export default function GuidesPage() {
	return (
		<PageLayout>
			<GuidesHero />
			<List3 />
		</PageLayout>
	);
}
