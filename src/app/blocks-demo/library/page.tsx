"use client";

import { LibraryHero } from "@/components/library-hero";
import { ResourcesLibrary } from "@/components/resources-library";
import { PageLayout } from "@/components/layout";

export default function LibraryPage() {
	return (
		<PageLayout>
			<LibraryHero />
			<ResourcesLibrary />
		</PageLayout>
	);
}
