"use client"

import { SidebarIcon, CalendarIcon, Clock, Badge } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge as BadgeComponent } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { ThemeSelector } from "@/components/theme-selector"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Wedding Planning
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center space-x-3">
          <BadgeComponent variant="secondary" className="text-sm hidden sm:flex">
            <CalendarIcon className="mr-1 h-3 w-3" />
            June 15, 2024
          </BadgeComponent>
          <BadgeComponent variant="outline" className="text-sm hidden sm:flex">
            <Clock className="mr-1 h-3 w-3" />
            142 days left
          </BadgeComponent>
          <div className="flex items-center space-x-2">
            <ThemeSelector />
          </div>
        </div>
      </div>
    </header>
  )
}
