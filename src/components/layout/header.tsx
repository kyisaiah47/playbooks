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
							<NavigationMenu className="pointer-events-auto" viewport={false}>
								<NavigationMenuList className="space-x-2">
									{/* Company dropdown */}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent hover:text-foreground">Company</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
												<li className="row-span-4">
													<NavigationMenuLink asChild>
														<Link
															href="/manifesto"
															className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
														>
															<div className="mb-2 mt-4 text-lg font-medium">
																Our Manifesto
															</div>
															<p className="text-sm leading-tight text-muted-foreground">
																The blank page is dead. Here's our blueprint for the first encyclopedia of living — and why you'll never stare at an empty screen again.
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<Link href="/about">
															<div className="text-sm font-medium leading-none">About</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Our mission and team
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<Link href="/faq">
															<div className="text-sm font-medium leading-none">FAQ</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Common questions and answers
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<Link href="/partners">
															<div className="text-sm font-medium leading-none">Partners</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Collaboration and partnerships
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
												<li>
													<NavigationMenuLink asChild>
														<Link href="/axiom-engine">
															<div className="text-sm font-medium leading-none">Axiom Engine</div>
															<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																Our AI system for life guidance
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{/* Preview - standalone */}
									<NavigationMenuItem>
										<NavigationMenuLink asChild className="!bg-transparent hover:!bg-transparent focus:!bg-transparent hover:text-foreground px-4 py-2 text-sm font-medium">
											<Link href="/preview">
												Preview
											</Link>
										</NavigationMenuLink>
									</NavigationMenuItem>

									{/* Browse dropdown */}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent hover:text-foreground">Browse</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[200px] gap-4">
												<li>
													<NavigationMenuLink asChild>
														<Link href="/templates">
															<div className="text-sm leading-none font-medium">Templates</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																1,298 templates for life's moments
															</p>
														</Link>
													</NavigationMenuLink>
													<NavigationMenuLink asChild>
														<Link href="/articles">
															<div className="text-sm leading-none font-medium">Articles</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																In-depth guidance and insights
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
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
				</div>
			</nav>
		</header>
	)
}