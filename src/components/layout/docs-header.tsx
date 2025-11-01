"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeSelector } from "@/components/theme-selector"
import { useAuth } from "@/contexts/auth-context"
import { Search, LogOut, User, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DocsHeader() {
	const { isLoggedIn, user, logout } = useAuth()
	const pathname = usePathname()

	const pageLabel = pathname?.startsWith('/guides') ? 'Guides' :
	                 pathname?.startsWith('/library') ? 'Library' : 'Docs'

	return (
		<header className="fixed z-50 w-full border-b border-border bg-background">
			<nav className="container mx-auto px-4 py-3">
				<div className="flex items-center gap-6">
					{/* Left side - Logo and Page Selector */}
					<div className="flex items-center gap-4">
						<Link href="/" className="flex items-center gap-2">
							<Image
								src="/brand/templata-logo.svg"
								alt="Templata"
								width={24}
								height={24}
								className="dark:invert"
							/>
							<span className="font-bold text-lg">Templata</span>
						</Link>

						<div className="h-4 w-px bg-border" />

						<DropdownMenu>
							<DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
								{pageLabel}
								<ChevronDown className="h-3.5 w-3.5" />
							</DropdownMenuTrigger>
							<DropdownMenuContent align="start">
								<DropdownMenuItem asChild>
									<Link href="/docs" className="w-full cursor-pointer">
										Docs
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/guides" className="w-full cursor-pointer">
										Guides
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/library" className="w-full cursor-pointer">
										Library
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					{/* Center - Search */}
					<div className="hidden md:flex flex-1 max-w-md">
						<button className="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-muted-foreground border border-border rounded-md hover:border-primary/50 transition-colors">
							<Search className="h-4 w-4" />
							<span>Search...</span>
							<kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
								<span className="text-xs">⌘</span>K
							</kbd>
						</button>
					</div>

					{/* Right side - Theme, Auth */}
					<div className="flex items-center gap-3 ml-auto">
						<ThemeSelector />

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
							<Button variant="outline" size="sm" asChild>
								<Link href="/login">Get Started</Link>
							</Button>
						)}
					</div>
				</div>
			</nav>
		</header>
	)
}
