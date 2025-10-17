"use client"

import { Header } from "./header";
import { Footer } from "./footer";
import { RecentlyUsedStrip, RecentlyUsedFooter } from "@/components/recently-used-strip";
import { FeedbackModal } from "@/components/feedback-modal";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
		<div className="min-h-screen bg-background">
			{includeHeader && <Header />}

			{includeHeader && includeHeaderPadding && (
				<div className="pt-24" />
			)}

			{children}

			{includeFooter && <Footer />}

			{/* Recently Used Footer - shows as sticky footer */}
			<RecentlyUsedFooter />

			{/* Floating Feedback Button */}
			<div className="fixed bottom-8 left-8 z-50">
				<FeedbackModal>
					<Button
						size="lg"
						variant="outline"
						className="bg-background hover:bg-background/80 flex items-center gap-2"
					>
						<MessageCircle className="h-5 w-5" />
						<span className="hidden sm:inline">Feedback</span>
					</Button>
				</FeedbackModal>
			</div>
		</div>
	);
}