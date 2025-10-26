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
							Wikipedia × Notion for life planning.
						</p>
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col lg:flex-row items-center justify-between gap-4">
					<div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
						<p className="text-sm text-muted-foreground">
							© 2025 Templata. Wikipedia × Notion for life planning.
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