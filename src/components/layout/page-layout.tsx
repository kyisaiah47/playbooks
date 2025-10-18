"use client"

import { useEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { RecentlyUsedStrip, RecentlyUsedFooter } from "@/components/recently-used-strip";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

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
	const { isLoggedIn } = useAuth();

	// Initialize Lenis smooth scrolling site-wide
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

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
						<span className="hidden sm:inline">{isLoggedIn ? "Open App" : "Try Demo"}</span>
					</a>
				</Button>
			</div>
		</div>
	);
}