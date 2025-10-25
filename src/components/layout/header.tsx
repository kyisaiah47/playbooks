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
	LogOut,
	User,
	FileText,
	BookOpen,
	Calendar,
	CheckSquare,
	Clock,
	BookMarked,
	Network,
	BarChart3,
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
	const [isMobile, setIsMobile] = React.useState(false)
	const pathname = usePathname()
	const { isLoggedIn, user, logout } = useAuth()

	React.useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768) // md breakpoint
		}

		// Initial check
		handleResize()

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const scrollProgress = Math.min(scrollY / 100, 1)
	const isScrolled = scrollY > 10
	// Disable shrinking effect on mobile
	const headerWidth = isMobile ? 100 : (100 - (scrollProgress * 30)) // Goes from 100% to 70%
	const borderRadius = isMobile ? 0 : (scrollProgress * 16) // Goes from 0 to 16px
	const backgroundOpacity = scrollProgress * 0.8
	const isHomePage = pathname === "/"

	return (
		<header className={cn(
			"fixed z-50 w-full border-b transition-colors duration-300",
			isScrolled && isHomePage ? "bg-background" : "border-transparent"
		)}>
			<nav className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between relative">
						{/* Left side - Logo and Theme */}
						<div className="flex items-center space-x-2 md:space-x-4">
							<Link href="/" className="flex items-center space-x-2">
								<Image
									src="/brand/templata-logo.svg"
									alt="Templata"
									width={28}
									height={28}
									className="dark:invert"
								/>
								<div className="flex items-center gap-2 md:gap-3">
									<span className="font-bold text-xl md:text-2xl">Templata</span>
									<span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
										Beta
									</span>
								</div>
							</Link>

							<div className="hidden md:block">
								<ThemeSelector />
							</div>
						</div>

						{/* Center - Desktop Navigation */}
						<div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
							<NavigationMenu className="pointer-events-auto">
								<NavigationMenuList className="space-x-2">
									{/* Features Dropdown */}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent hover:text-foreground px-4 py-2 text-sm font-medium">
											Features
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
												<Link
													href="/features/notes"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<FileText className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Notes</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														Capture thoughts and insights during your transition
													</p>
												</Link>
												<Link
													href="/features/library"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<BookOpen className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Library</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														Your personal collection of saved resources
													</p>
												</Link>
												<Link
													href="/features/calendar"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<Calendar className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Calendar</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														Schedule and plan your transition work
													</p>
												</Link>
												<Link
													href="/features/tasks"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<CheckSquare className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Tasks</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														Turn reflection into actionable steps
													</p>
												</Link>
												<Link
													href="/features/timeline"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<Clock className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Timeline</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														Visualize your journey chronologically
													</p>
												</Link>
												<Link
													href="/features/daily"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<Calendar className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Daily</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														Daily notes for consistent progress
													</p>
												</Link>
												<Link
													href="/features/journal"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<BookMarked className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Journal</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														Process emotions through private writing
													</p>
												</Link>
												<Link
													href="/features/graph"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<Network className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Graph</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														See connections across your work
													</p>
												</Link>
												<Link
													href="/features/analytics"
													className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div className="flex items-center gap-2 mb-2">
														<BarChart3 className="h-4 w-4 text-primary" />
														<div className="text-sm font-medium leading-none">Analytics</div>
													</div>
													<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
														Track progress with data and insights
													</p>
												</Link>
											</div>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{/* How It Works */}
									<NavigationMenuItem>
										<NavigationMenuLink asChild className="!bg-transparent hover:!bg-transparent focus:!bg-transparent hover:text-foreground px-4 py-2 text-sm font-medium">
											<Link href="/how-it-works">
												How It Works
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>

									{/* Community */}
									<NavigationMenuItem>
										<NavigationMenuLink asChild className="!bg-transparent hover:!bg-transparent focus:!bg-transparent hover:text-foreground px-4 py-2 text-sm font-medium">
											<Link href="/community">
												Community
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>

									{/* About */}
									<NavigationMenuItem>
										<NavigationMenuLink asChild className="!bg-transparent hover:!bg-transparent focus:!bg-transparent hover:text-foreground px-4 py-2 text-sm font-medium">
											<Link href="/about">
												About
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>

									{/* Demo */}
									<NavigationMenuItem>
										<NavigationMenuLink asChild className="!bg-transparent hover:!bg-transparent focus:!bg-transparent hover:text-foreground px-4 py-2 text-sm font-medium">
											<Link href="/app">
												Demo
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>

						{/* Right side - Actions */}
						<div className="flex items-center space-x-2 md:space-x-3">

							{/* Desktop User Actions */}
							<div className="hidden md:flex items-center space-x-3">
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

							{/* Mobile Get Started Button (only when not logged in) */}
							{!isLoggedIn && (
								<Button
									variant="outline"
									size="sm"
									className="md:hidden text-sm"
									asChild
								>
									<Link href="/login">Get Started</Link>
								</Button>
							)}
						</div>
					</div>
			</nav>
		</header>
	)
}