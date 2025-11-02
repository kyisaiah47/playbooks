"use client"

import { useEffect, useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { RecentlyUsedStrip, RecentlyUsedFooter } from "@/components/recently-used-strip";
import { Navbar18 } from "@/components/navbar18";
import { Button } from "@/components/ui/button";
import { Play, Menu } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
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
	const pathname = usePathname();
	const [isMobile, setIsMobile] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const isHomePage = pathname === "/";

	// Check if mobile
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Initialize Lenis smooth scrolling site-wide
	// useEffect(() => {
	// 	const lenis = new Lenis({
	// 		duration: 1.2,
	// 		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	// 		orientation: 'vertical',
	// 		smoothWheel: true,
	// 		wheelMultiplier: 1,
	// 		touchMultiplier: 2,
	// 	});

	// 	function raf(time: number) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}
	// 	requestAnimationFrame(raf);

	// 	return () => {
	// 		lenis.destroy();
	// 	};
	// }, []);

	return (
		<div className="min-h-screen bg-transparent">
			{includeHeader && <Navbar18 />}

			{children}

			{/* {includeFooter && <Footer />} */}

			{/* Recently Used Footer - shows as sticky footer */}
			{/* <RecentlyUsedFooter /> */}

			{/* Floating Demo Button - Hidden on mobile */}
			{/* <div className={cn("fixed bottom-8 right-8 z-50", isMobile && "hidden")}>
				<Button
					size="lg"
					asChild
					className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20 border border-yellow-500/20 flex items-center gap-2"
				>
					<a href="/app">
						<Play className="h-5 w-5" />
						<span className="hidden sm:inline">{isLoggedIn ? "Open App" : "Try Demo"}</span>
					</a>
				</Button>
			</div> */}

			{/* Mobile Split FAB */}
			{/* {isMobile && (
				<Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
					<div className="fixed bottom-6 right-6 z-50 flex items-center bg-background border rounded-lg shadow-lg overflow-hidden">
						<DrawerTrigger asChild>
							<Button
								size="lg"
								variant="ghost"
								className="rounded-l-md rounded-r-none border-r h-14 w-14"
							>
								<Menu className="h-5 w-5" />
							</Button>
						</DrawerTrigger>
						<Link href="/app">
							<Button
								size="lg"
								className="rounded-r-md rounded-l-none h-14 w-14 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 hover:bg-yellow-500/20"
							>
								<Play className="h-5 w-5" />
							</Button>
						</Link>
					</div>
					<DrawerContent className="max-h-[85vh]">
						<DrawerHeader>
							<DrawerTitle>Menu</DrawerTitle>
						</DrawerHeader>
						<div className="flex flex-col gap-1 px-4 pb-4">
							<Link
								href="/guides"
								className="px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								Guides
							</Link>
							<Link
								href="/library"
								className="px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								Library
							</Link>
							<Link
								href="/how-it-works"
								className="px-3 py-3 text-base font-medium hover:bg-accent rounded-md transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								How It Works
							</Link>
						</div>
					</DrawerContent>
				</Drawer>
			)} */}
		</div>
	);
}