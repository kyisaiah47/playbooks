import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { FeedbackModal } from "@/components/feedback-modal"

export function Footer() {
	return (
		<footer className="border-t">
			<div className="container mx-auto max-w-7xl px-4 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Image
								src="/shift.svg"
								alt="Templata"
								width={24}
								height={24}
								className="dark:invert"
							/>
							<span className="font-bold text-xl">Templata</span>
						</div>
						<p className="text-muted-foreground">
							Skip the blank page. Start with proven templates for life&apos;s
							biggest moments.
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Templates</h4>
						<ul className="space-y-2 text-muted-foreground">
							<li>
								<Link
									href="/templates"
									className="hover:text-foreground transition-colors"
								>
									Browse Templates
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Home Buying
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Job Search
								</Link>
							</li>
							<li>
								<Link
									href="/templates"
									className="hover:text-foreground transition-colors"
								>
									View All
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Company</h4>
						<ul className="space-y-2 text-muted-foreground">
							<li>
								<Link
									href="/about"
									className="hover:text-foreground transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="hover:text-foreground transition-colors"
								>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Resources</h4>
						<ul className="space-y-2 text-muted-foreground">
							<li>
								<Link
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Community
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-foreground transition-colors"
								>
									Privacy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col lg:flex-row items-center justify-between gap-4">
					<div className="flex flex-col lg:flex-row items-center gap-4">
						<p className="text-sm text-muted-foreground">
							© 2024 Templata. Organize your life with templates.
						</p>
						<div className="flex items-center gap-1 text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
							<span className="w-2 h-2 bg-green-500 rounded-full"></span>
							<span>Your data is private. No ads, no resale.</span>
						</div>
					</div>
					<div className="flex items-center space-x-4 text-sm text-muted-foreground">
						<Link
							href="#"
							className="hover:text-foreground transition-colors"
						>
							Privacy
						</Link>
						<Link
							href="#"
							className="hover:text-foreground transition-colors"
						>
							Terms
						</Link>
						<FeedbackModal>
							<button className="hover:text-foreground transition-colors flex items-center gap-1">
								💬 Feedback
							</button>
						</FeedbackModal>
					</div>
				</div>
			</div>
		</footer>
	)
}