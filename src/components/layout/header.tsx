"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
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
	ChevronDown,
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
	const [showFeaturesDropdown, setShowFeaturesDropdown] = React.useState(false)
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
	const isHomePage = pathname === "/"

	const features = [
		{
			href: "/features/notes",
			icon: FileText,
			title: "Notes",
			description: "Capture thoughts and insights during your transition"
		},
		{
			href: "/features/library",
			icon: BookOpen,
			title: "Library",
			description: "Your personal collection of saved resources"
		},
		{
			href: "/features/calendar",
			icon: Calendar,
			title: "Calendar",
			description: "Schedule and plan your transition work"
		},
		{
			href: "/features/tasks",
			icon: CheckSquare,
			title: "Tasks",
			description: "Turn reflection into actionable steps"
		},
		{
			href: "/features/timeline",
			icon: Clock,
			title: "Timeline",
			description: "Visualize your journey chronologically"
		},
		{
			href: "/features/daily",
			icon: Calendar,
			title: "Daily",
			description: "Daily notes for consistent progress"
		},
		{
			href: "/features/journal",
			icon: BookMarked,
			title: "Journal",
			description: "Process emotions through private writing"
		},
		{
			href: "/features/graph",
			icon: Network,
			title: "Graph",
			description: "See connections across your work"
		},
		{
			href: "/features/analytics",
			icon: BarChart3,
			title: "Analytics",
			description: "Track progress with data and insights"
		},
	]

	return (
		<>
			<header className={cn(
				"fixed top-0 z-50 w-full border-b transition-colors duration-300",
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
							<div className="flex items-center space-x-2 pointer-events-auto">
								{/* Features Dropdown */}
								<button
									onMouseEnter={() => setShowFeaturesDropdown(true)}
									onMouseLeave={() => setShowFeaturesDropdown(false)}
									className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
								>
									Features
									<ChevronDown className="h-4 w-4" />
								</button>

								{/* How It Works */}
								<Link
									href="/how-it-works"
									className="px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
								>
									How It Works
								</Link>

								{/* Community */}
								<Link
									href="/community"
									className="px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
								>
									Community
								</Link>

								{/* About */}
								<Link
									href="/about"
									className="px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
								>
									About
								</Link>

								{/* Demo */}
								<Link
									href="/app"
									className="px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
								>
									Demo
								</Link>
							</div>
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

			{/* Full-Width Features Dropdown */}
			<div
				onMouseEnter={() => setShowFeaturesDropdown(true)}
				onMouseLeave={() => setShowFeaturesDropdown(false)}
				className={cn(
					"fixed top-[73px] left-0 right-0 z-40 bg-background border-b shadow-lg transition-all duration-200",
					showFeaturesDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
				)}
			>
				<div className="container mx-auto px-4 py-8">
					<div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
						{features.map((feature) => {
							const Icon = feature.icon
							return (
								<Link
									key={feature.href}
									href={feature.href}
									className="group flex items-start gap-3 p-4 rounded-lg hover:bg-accent transition-colors"
									onClick={() => setShowFeaturesDropdown(false)}
								>
									<div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
										<Icon className="h-5 w-5 text-primary" />
									</div>
									<div className="flex-1 min-w-0">
										<div className="text-sm font-semibold mb-1">{feature.title}</div>
										<p className="text-xs text-muted-foreground leading-relaxed">
											{feature.description}
										</p>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}
