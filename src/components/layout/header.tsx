"use client"

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
import {
	Heart,
	Home,
	Briefcase,
	Target,
} from "lucide-react"

export function Header() {
	return (
		<header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4">
			<div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-lg">
				<div className="flex h-16 items-center justify-between px-6">
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/shift.svg"
							alt="Templata"
							width={28}
							height={28}
							className="dark:invert"
						/>
						<span className="font-bold text-2xl">Templata</span>
					</Link>

					<NavigationMenu>
						<NavigationMenuList className="space-x-2">
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link
										href="/templates"
										className="text-base font-medium px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
									>
										Browse Templates
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
		</header>
	)
}