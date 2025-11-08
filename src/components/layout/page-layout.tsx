"use client"

import { MarketingHeader } from "@/components/marketing-header";
import { MarketingFooter } from "@/components/marketing-footer";

interface PageLayoutProps {
	children: React.ReactNode;
	includeHeader?: boolean;
	includeFooter?: boolean;
	includeHeaderPadding?: boolean;
}

export function PageLayout({
	children,
	includeHeader = true,
	includeFooter = true,
	includeHeaderPadding = true
}: PageLayoutProps) {
	return (
		<div className="min-h-screen bg-transparent">
			{includeHeader && <MarketingHeader />}
			{children}
			{includeFooter && <MarketingFooter />}
		</div>
	);
}