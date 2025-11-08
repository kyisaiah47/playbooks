"use client";

import { LibraryHero } from "@/components/library-hero";
import { LibraryResources } from "@/components/library-resources";
import { PageLayout } from "@/components/layout";

export default function LibraryPage() {
	return (
		<PageLayout>
			<LibraryHero />
			<LibraryResources />
		</PageLayout>
	);
}
