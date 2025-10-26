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
	const timeoutRef = React.useRef<NodeJS.Timeout>()

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

	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
		setShowFeaturesDropdown(true)
	}

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setShowFeaturesDropdown(false)
		}, 150)
	}

	const features = [
		{
			href: "/docs?section=notes",
			icon: FileText,
			title: "Notes",
			description: "Capture thoughts and insights"
		},
		{
			href: "/docs?section=library",
			icon: BookOpen,
			title: "Library",
			description: "Saved resources and readings"
		},
		{
			href: "/docs?section=calendar",
			icon: Calendar,
			title: "Calendar",
			description: "Plan and schedule events"
		},
		{
			href: "/docs?section=tasks",
			icon: CheckSquare,
			title: "Tasks",
			description: "Track what needs doing"
		},
		{
			href: "/docs?section=timeline",
			icon: Clock,
			title: "Timeline",
			description: "View everything chronologically"
		},
		{
			href: "/docs?section=daily",
			icon: Calendar,
			title: "Daily",
			description: "Daily notes and logging"
		},
		{
			href: "/docs?section=journal",
			icon: BookMarked,
			title: "Journal",
			description: "Private writing space"
		},
		{
			href: "/docs?section=graph",
			icon: Network,
			title: "Graph",
			description: "Visualize connections"
		},
		{
			href: "/docs?section=analytics",
			icon: BarChart3,
			title: "Analytics",
			description: "Track progress and patterns"
		},
	]

	return (
		<>
			<header className={cn(
				"fixed top-0 z-50 w-full transition-colors duration-300",
				isScrolled ? "bg-background border-b" : "border-b border-transparent",
				showFeaturesDropdown && "border-transparent"
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
								{/* Templata Dropdown */}
								<div
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									className="relative"
								>
									<button
										className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
									>
										Templata
										<ChevronDown className="h-4 w-4" />
									</button>
								</div>

								{/* How It Works */}
								<Link
									href="/how-it-works"
									className="px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
								>
									How It Works
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
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={cn(
					"fixed top-[57px] left-0 right-0 z-40 transition-all duration-200",
					showFeaturesDropdown ? "opacity-100 visible" : "opacity-0 invisible"
				)}
			>
				<div className="bg-background border-b shadow-sm">
					<div className="container mx-auto px-8 py-8">
						<div className="max-w-5xl mx-auto">
							<div className="grid grid-cols-[1fr_auto] gap-12">
								{/* Left side - Features */}
								<div>
									<div className="mb-6">
										<h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Features</h3>
									</div>
									<div className="grid grid-cols-3 gap-x-12 gap-y-1">
										{features.map((feature) => (
											<Link
												key={feature.href}
												href={feature.href}
												className="group block py-2 hover:bg-accent/30 px-2 -mx-2 rounded transition-colors"
												onClick={() => setShowFeaturesDropdown(false)}
											>
												<div className="text-[15px] font-medium mb-0.5 text-foreground">
													{feature.title}
												</div>
												<p className="text-xs text-muted-foreground leading-relaxed">
													{feature.description}
												</p>
											</Link>
										))}
									</div>
								</div>

								{/* Right side - Get Started */}
								<div className="border-l pl-8 w-[240px]">
									<div className="mb-6">
										<h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Get Started</h3>
									</div>
									<div className="space-y-4">
										<Link
											href="/signup"
											className="block group"
											onClick={() => setShowFeaturesDropdown(false)}
										>
											<div className="text-[15px] font-medium mb-0.5 text-foreground group-hover:text-primary transition-colors">
												Create account
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												Access all guides and save your work
											</p>
										</Link>
										<Link
											href="/docs"
											className="block group"
											onClick={() => setShowFeaturesDropdown(false)}
										>
											<div className="text-[15px] font-medium mb-0.5 text-foreground group-hover:text-primary transition-colors">
												Documentation
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												Learn how to use Templata
											</p>
										</Link>
										<Link
											href="/how-it-works"
											className="block group"
											onClick={() => setShowFeaturesDropdown(false)}
										>
											<div className="text-[15px] font-medium mb-0.5 text-foreground group-hover:text-primary transition-colors">
												How it works
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												See how to use guides and workspaces
											</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
