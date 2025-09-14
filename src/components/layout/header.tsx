"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ThemeSelector } from "@/components/theme-selector"
import { ChangelogWidget } from "@/components/changelog/changelog-widget"
import {
	Heart,
	Home,
	Briefcase,
	Target,
	Search,
	Command
} from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
	const [scrollY, setScrollY] = React.useState(0)

	React.useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollProgress = Math.min(scrollY / 100, 1)
	const isScrolled = scrollY > 10
	const headerWidth = 100 - (scrollProgress * 30) // Goes from 100% to 70%
	const borderRadius = scrollProgress * 16 // Goes from 0 to 16px
	const backgroundOpacity = scrollProgress * 0.8

	return (
		<header>
			<nav className="fixed z-50 w-full px-4">
				<div
					className="mx-auto mt-4 transition-all duration-300 ease-out border backdrop-blur-lg"
					style={{
						width: `${headerWidth}%`,
						borderRadius: `${borderRadius}px`,
						backgroundColor: `rgba(var(--background-rgb), ${backgroundOpacity})`,
						borderColor: `rgba(var(--border-rgb), ${backgroundOpacity})`,
						padding: `${16 - scrollProgress * 4}px ${24 - scrollProgress * 8}px`
					}}
				>
					<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/shift.svg"
							alt="Templata"
							width={28}
							height={28}
							className="dark:invert"
						/>
						<div className="flex items-center gap-3">
							<span className="font-bold text-2xl">Templata</span>
							<span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
								Beta
							</span>
						</div>
					</Link>

					<NavigationMenu>
						<NavigationMenuList className="space-x-2">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/preview"
										className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
									>
										Preview
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/partners"
										className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
									>
										Partners
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/about"
										className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
									>
										About
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/faq"
										className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
									>
										FAQ
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					<div className="flex items-center space-x-3">
						{/* Search Hint - hide when scrolled */}
						<Button
							variant="outline"
							size="sm"
							className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border-muted-foreground/20 hover:border-primary/50 transition-all"
						>
							<Search className="h-3 w-3" />
							<span className="hidden md:inline">Search</span>
							<div className="flex items-center gap-0.5 text-xs bg-muted/60 px-1.5 py-0.5 rounded">
								<Command className="h-2 w-2" />
								<span>K</span>
							</div>
						</Button>

						<ChangelogWidget variant="bell" />

						<ThemeSelector />
						<Button
							className="text-base font-medium"
							asChild
						>
							<Link href="/login">Get Started</Link>
						</Button>
					</div>
					</div>
				</div>
			</nav>
		</header>
	)
}