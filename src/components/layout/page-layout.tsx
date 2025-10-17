"use client"

import { Header } from "./header";
import { Footer } from "./footer";
import { RecentlyUsedStrip, RecentlyUsedFooter } from "@/components/recently-used-strip";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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
			{includeHeader && <Header />}

			{includeHeader && includeHeaderPadding && (
				<div className="pt-24" />
			)}

			{children}

			{includeFooter && <Footer />}

			{/* Recently Used Footer - shows as sticky footer */}
			<RecentlyUsedFooter />

			{/* Floating Demo Button */}
			<div className="fixed bottom-8 right-8 z-50">
				<Button
					size="lg"
					variant="outline"
					asChild
					className="bg-background hover:bg-background/80 flex items-center gap-2"
				>
					<a href="/app">
						<Play className="h-5 w-5" />
						<span className="hidden sm:inline">Try Demo</span>
					</a>
				</Button>
			</div>
		</div>
	);
}