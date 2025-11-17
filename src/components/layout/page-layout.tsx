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
	includeFooter = true
}: PageLayoutProps) {
	return (
		<div className="min-h-screen bg-transparent">
			{includeHeader && <MarketingHeader />}
			{/* Add padding-top to prevent layout shift from fixed header */}
			<div className={includeHeader ? "pt-24" : ""}>
				{children}
			</div>
			{includeFooter && <MarketingFooter />}
		</div>
	);
}