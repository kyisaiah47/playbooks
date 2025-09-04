"use client";

import * as React from "react";
import Link from "next/link";
import {
	Heart,
	Users,
	DollarSign,
	CheckSquare,
	Calendar,
	Settings2,
	LifeBuoy,
	Send,
	UserCheck,
	Building,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	user: {
		name: "Sarah Thompson",
		email: "sarah@wedding.com",
		avatar: "/avatars/sarah.jpg",
	},
	navMain: [
		{
			title: "Overview",
			url: "/",
			icon: Heart,
			isActive: true,
			items: [
				{
					title: "Dashboard",
					url: "/",
				},
				{
					title: "Timeline",
					url: "#timeline",
				},
				{
					title: "Checklist",
					url: "#checklist",
				},
			],
		},
		{
			title: "Vendors",
			url: "#vendors",
			icon: Building,
			items: [
				{
					title: "All Vendors",
					url: "#vendors",
				},
				{
					title: "Photographers",
					url: "#vendors-photo",
				},
				{
					title: "Catering",
					url: "#vendors-catering",
				},
				{
					title: "Florists",
					url: "#vendors-flowers",
				},
			],
		},
		{
			title: "Guest List",
			url: "#guests",
			icon: Users,
			items: [
				{
					title: "All Guests",
					url: "#guests",
				},
				{
					title: "RSVP Tracking",
					url: "#rsvp",
				},
				{
					title: "Seating Chart",
					url: "#seating",
				},
				{
					title: "Invitations",
					url: "#invitations",
				},
			],
		},
		{
			title: "Budget",
			url: "#budget",
			icon: DollarSign,
			items: [
				{
					title: "Overview",
					url: "#budget",
				},
				{
					title: "Expenses",
					url: "#expenses",
				},
				{
					title: "Payments",
					url: "#payments",
				},
				{
					title: "Reports",
					url: "#reports",
				},
			],
		},
		{
			title: "Tasks",
			url: "#tasks",
			icon: CheckSquare,
			items: [
				{
					title: "All Tasks",
					url: "#tasks",
				},
				{
					title: "Calendar View",
					url: "#tasks-calendar",
				},
				{
					title: "By Category",
					url: "#tasks-category",
				},
			],
		},
	],
	navSecondary: [
		{
			title: "Wedding Planner",
			url: "#planner",
			icon: UserCheck,
		},
		{
			title: "Help & Support",
			url: "#support",
			icon: LifeBuoy,
		},
	],
	projects: [
		{
			name: "Sarah & Michael",
			url: "/",
			icon: Heart,
		},
		{
			name: "June 15, 2024",
			url: "#date",
			icon: Calendar,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							asChild
						>
							<Link href="/">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<Heart className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Wedding Hub</span>
									<span className="truncate text-xs">Sarah & Michael</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
				<NavSecondary
					items={data.navSecondary}
					className="mt-auto"
				/>
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
