"use client"

import { Header } from "./header";
import { Footer } from "./footer";
import { RecentlyUsedStrip } from "@/components/recently-used-strip";
import { FullscreenCommandPalette } from "@/components/fullscreen-command-palette";
import { useCommandPalette } from "@/hooks/use-command-palette";

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
	const { isOpen, close } = useCommandPalette();

	return (
		<div className="min-h-screen bg-background">
			{includeHeader && <Header />}

			{includeHeader && includeHeaderPadding && (
				<div className="pt-24" />
			)}

			<RecentlyUsedStrip />

			{children}

			{includeFooter && <Footer />}

			{/* Global Command Palette */}
			<FullscreenCommandPalette
				isOpen={isOpen}
				onClose={close}
				mode="all"
				autoFocus={true}
			/>
		</div>
	);
}