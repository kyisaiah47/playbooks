import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { FeedbackModal } from "@/components/feedback-modal"

export function Footer() {
	return (
		<footer className="border-t">
			<div className="container mx-auto max-w-7xl px-4 py-12">
				<div className="flex flex-col md:flex-row items-start justify-between gap-8">
					{/* Logo and tagline */}
					<div className="space-y-4 max-w-md">
						<div className="flex items-center space-x-2">
							<Image
								src="/brand/templata-logo.svg"
								alt="Templata"
								width={24}
								height={24}
								className="dark:invert"
							/>
							<span className="font-bold text-xl">Templata</span>
						</div>
						<p className="text-muted-foreground">
							Skip the blank page. Start with proven guides for life&apos;s
							biggest moments.
						</p>
					</div>

					{/* Simple navigation links */}
					<div className="flex flex-col items-end gap-4">
						<div className="flex items-start gap-8 text-muted-foreground">
							<Link
								href="/guides"
								className="hover:text-foreground transition-colors"
							>
								Guides
							</Link>
							<Link
								href="/readings"
								className="hover:text-foreground transition-colors"
							>
								Readings
							</Link>
						</div>
						<a
							href="https://www.producthunt.com/products/templata"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-orange-500/20 bg-orange-500/10 hover:bg-orange-500/20 transition-colors group"
						>
							<svg className="w-5 h-5 text-orange-500" viewBox="0 0 40 40" fill="currentColor">
								<path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.822 0-16-7.178-16-16S11.178 4 20 4s16 7.178 16 16-7.178 16-16 16z"/>
								<path d="M21.5 11h-7v18h4v-6h3c3.59 0 6.5-2.91 6.5-6.5S25.09 11 21.5 11zm0 9h-3v-5h3c1.93 0 3.5 1.57 3.5 3.5S23.43 20 21.5 20z"/>
							</svg>
							<div className="flex flex-col items-start">
								<span className="text-xs text-muted-foreground">Featured on</span>
								<span className="text-sm font-semibold text-foreground">Product Hunt</span>
							</div>
						</a>
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col lg:flex-row items-center justify-between gap-4">
					<div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
						<p className="text-sm text-muted-foreground">
							© 2025 Templata. Organize your life with guides.
						</p>
						<div className="flex items-center gap-1 text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
							<span className="w-2 h-2 bg-green-500 rounded-full"></span>
							<span className="hidden sm:inline">Your data is private. No ads, no resale.</span>
							<span className="sm:hidden">Privacy first</span>
						</div>
					</div>
					<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
						<Link
							href="/privacy"
							className="hover:text-foreground transition-colors"
						>
							Privacy
						</Link>
						<Link
							href="/terms"
							className="hover:text-foreground transition-colors"
						>
							Terms
						</Link>
						<Link
							href="/changelog"
							className="hover:text-foreground transition-colors"
						>
							Changelog
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}