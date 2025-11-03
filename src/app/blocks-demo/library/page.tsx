"use client";

import { Hero219 } from "@/components/hero219";
import { ResourcesLibrary } from "@/components/resources-library";
import { PageLayout } from "@/components/layout";

export default function LibraryPage() {
	return (
		<PageLayout>
			<Hero219 />
			<ResourcesLibrary />
		</PageLayout>
	);
}
