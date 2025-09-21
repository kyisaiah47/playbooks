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
import { ChangelogWidget } from "@/components/changelog/changelog-widget"
import { useAuth } from "@/contexts/auth-context"
import {
	Heart,
	Home,
	Briefcase,
	Target,
	Search,
	Command,
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

							<ThemeSelector />
						</div>

						{/* Center - Navigation */}
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<NavigationMenu className="pointer-events-auto" viewport={false}>
								<NavigationMenuList className="space-x-2">
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
														<Link href="/articles">
															<div className="text-sm leading-none font-medium">Articles</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																In-depth guidance and insights
															</p>
														</Link>
													</NavigationMenuLink>
													<NavigationMenuLink asChild>
														<Link href="/templates">
															<div className="text-sm leading-none font-medium">Templates</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																150+ templates for life's moments
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{/* Platform dropdown */}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent hover:text-foreground">Platform</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[200px] gap-4">
												<li>
													<NavigationMenuLink asChild>
														<Link href="/prompts">
															<div className="text-sm leading-none font-medium">Prompts</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																15,000+ reflection prompts
															</p>
														</Link>
													</NavigationMenuLink>
													<NavigationMenuLink asChild>
														<Link href="/reflections">
															<div className="text-sm leading-none font-medium">Reflections</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																Guided reflection system
															</p>
														</Link>
													</NavigationMenuLink>
													<NavigationMenuLink asChild>
														<Link href="/workspaces">
															<div className="text-sm leading-none font-medium">Workspaces</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																Split-screen planning interface
															</p>
														</Link>
													</NavigationMenuLink>
												</li>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>

									{/* Company dropdown */}
									<NavigationMenuItem>
										<NavigationMenuTrigger className="!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent hover:text-foreground">Company</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[200px] gap-4">
												<li>
													<NavigationMenuLink asChild>
														<Link href="/about">
															<div className="text-sm leading-none font-medium">About</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																Our mission and team
															</p>
														</Link>
													</NavigationMenuLink>
													<NavigationMenuLink asChild>
														<Link href="/faq">
															<div className="text-sm leading-none font-medium">FAQ</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																Common questions and answers
															</p>
														</Link>
													</NavigationMenuLink>
													<NavigationMenuLink asChild>
														<Link href="/partners">
															<div className="text-sm leading-none font-medium">Partners</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																Collaboration and partnerships
															</p>
														</Link>
													</NavigationMenuLink>
													<NavigationMenuLink asChild>
														<Link href="/axiom-engine">
															<div className="text-sm leading-none font-medium">Axiom Engine</div>
															<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																Our AI system for life guidance
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
						<div className="flex items-center space-x-3">
							<Button
								variant="outline"
								size="sm"
								onClick={() => {
									const event = new KeyboardEvent('keydown', {
										key: 'k',
										metaKey: true,
										ctrlKey: false
									});
									document.dispatchEvent(event);
								}}
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