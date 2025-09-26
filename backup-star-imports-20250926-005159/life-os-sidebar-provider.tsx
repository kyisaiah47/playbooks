import * as React from "react"
import { SidebarProvider } from "@/components/ui/life-os-sidebar"

export function LifeOSSidebarProvider({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      {children}
    </SidebarProvider>
  )
}