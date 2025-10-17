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
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeSelector } from "@/components/theme-selector"
import { useAuth } from "@/contexts/auth-context"
import {
	Heart,
	Home,
	Briefcase,
	Target,
	LogOut,
	User
} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
	const [scrollY, setScrollY] = React.useState(0)
	const pathname = usePathname()
	const { isLoggedIn, user, logout } = useAuth()

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
	const isHomePage = pathname === "/"

	return (
		<header>
			<nav className="fixed z-50 w-full px-4">
				<div
					className={cn(
						"mx-auto mt-4 transition-all duration-300 ease-out",
						isScrolled && isHomePage ? "border backdrop-blur-lg" : "border-transparent"
					)}
					style={{
						width: isHomePage ? `${headerWidth}%` : '100%',
						borderRadius: isHomePage ? `${borderRadius}px` : '0px',
						backgroundColor: isScrolled && isHomePage ? `rgba(var(--background-rgb), ${backgroundOpacity})` : 'transparent',
						paddingTop: '16px',
						paddingBottom: '16px',
						paddingLeft: isHomePage ? `${24 - scrollProgress * 8}px` : '24px',
						paddingRight: isHomePage ? `${24 - scrollProgress * 8}px` : '24px'
					}}
				>
					<div className="flex items-center justify-between relative">
						{/* Left side - Logo and Theme */}
						<div className="flex items-center space-x-4">
							<Link href="/" className="flex items-center space-x-2">
								<Image
									src="/brand/templata-logo.svg"
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

							<ThemeSelector />
						</div>

						{/* Center - Navigation */}
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<NavigationMenu className="pointer-events-auto" viewport={false}>
								<NavigationMenuList className="space-x-2">
									{/* Templates */}
									<NavigationMenuItem>
										<NavigationMenuLink asChild className="!bg-transparent hover:!bg-transparent focus:!bg-transparent hover:text-foreground px-4 py-2 text-sm font-medium">
											<Link href="/templates">
												Templates
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>

									{/* Articles */}
									<NavigationMenuItem>
										<NavigationMenuLink asChild className="!bg-transparent hover:!bg-transparent focus:!bg-transparent hover:text-foreground px-4 py-2 text-sm font-medium">
											<Link href="/articles">
												Articles
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>

						{/* Right side - Actions */}
						<div className="flex items-center space-x-3">
							{isLoggedIn ? (
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline" size="sm" className="flex items-center gap-2">
											<User className="h-4 w-4" />
											<span className="hidden sm:inline">{user?.email}</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem onClick={logout} className="flex items-center gap-2">
											<LogOut className="h-4 w-4" />
											<span>Logout</span>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							) : (
								<Button
									variant="outline"
									size="sm"
									className="text-base font-medium"
									asChild
								>
									<Link href="/login">Get Started</Link>
								</Button>
							)}
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}