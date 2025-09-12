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
					<div className="flex items-center space-x-2">
						<Image
							src="/shift.svg"
							alt="Templata"
							width={28}
							height={28}
							className="dark:invert"
						/>
						<span className="font-bold text-2xl">Templata</span>
					</div>

					<NavigationMenu>
						<NavigationMenuList className="space-x-2">
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-base font-medium">
									Templates
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid grid-cols-2 gap-6 p-6 w-[500px]">
										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
												Personal Life
											</h4>
											<div className="space-y-3">
												<NavigationMenuLink asChild>
													<Link
														href="/templates"
														className="block group"
													>
														<div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
															<div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
																<Heart className="h-4 w-4 text-muted-foreground" />
															</div>
															<div>
																<div className="font-semibold group-hover:text-primary transition-colors">
																	Browse Templates
																</div>
																<div className="text-sm text-muted-foreground">
																	Complete wedding organization
																</div>
															</div>
														</div>
													</Link>
												</NavigationMenuLink>

												<NavigationMenuLink asChild>
													<Link
														href="#"
														className="block group"
													>
														<div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
															<div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
																<Home className="h-4 w-4 text-muted-foreground" />
															</div>
															<div>
																<div className="font-semibold group-hover:text-primary transition-colors">
																	Home Buying
																</div>
																<div className="text-sm text-muted-foreground">
																	Navigate the home buying process
																</div>
															</div>
														</div>
													</Link>
												</NavigationMenuLink>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
												Career & Business
											</h4>
											<div className="space-y-3">
												<NavigationMenuLink asChild>
													<Link
														href="#"
														className="block group"
													>
														<div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
															<div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
																<Briefcase className="h-4 w-4 text-muted-foreground" />
															</div>
															<div>
																<div className="font-semibold group-hover:text-primary transition-colors">
																	Job Search
																</div>
																<div className="text-sm text-muted-foreground">
																	Track applications & interviews
																</div>
															</div>
														</div>
													</Link>
												</NavigationMenuLink>

												<NavigationMenuLink asChild>
													<Link
														href="#"
														className="block group"
													>
														<div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
															<div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
																<Target className="h-4 w-4 text-muted-foreground" />
															</div>
															<div>
																<div className="font-semibold group-hover:text-primary transition-colors">
																	Business Launch
																</div>
																<div className="text-sm text-muted-foreground">
																	Start your business right
																</div>
															</div>
														</div>
													</Link>
												</NavigationMenuLink>
											</div>
										</div>
									</div>
								</NavigationMenuContent>
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
							variant="ghost"
							className="text-base"
							asChild
						>
							<Link href="/templates">Browse Templates</Link>
						</Button>
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