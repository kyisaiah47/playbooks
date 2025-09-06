"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function OperationsSetup() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Operations & Systems Setup</h1>
        <p className="text-muted-foreground">Establish the operational foundation and systems needed to run your business efficiently.</p>
      </div>

      <Tabs defaultValue="core-operations" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="core-operations" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Core Operations</span>
            <span className="sm:hidden">Core</span>
          </TabsTrigger>
          <TabsTrigger value="systems-tools" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Systems & Tools</span>
            <span className="sm:hidden">Systems</span>
          </TabsTrigger>
          <TabsTrigger value="processes" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Processes</span>
            <span className="sm:hidden">Process</span>
          </TabsTrigger>
          <TabsTrigger value="scaling" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Scaling Operations</span>
            <span className="sm:hidden">Scaling</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="core-operations">
          <GuidedNotePage
            title="Core Operations Setup"
            description="Establish the fundamental operations needed to deliver your products or services"
            sections={[
              {
                title: "Business Infrastructure",
                prompts: [
                  "What physical space and equipment do you need to operate?",
                  "What technology infrastructure is required for your business?",
                  "How will you handle inventory, supplies, or materials management?",
                  "What communication systems will you use internally and with customers?",
                  "What financial systems do you need for accounting and payments?"
                ],
                examples: [
                  "Home office setup, co-working space, warehouse, retail location, manufacturing facility",
                  "Computers, internet, phone systems, security software, backup systems, cloud storage",
                  "Inventory tracking software, supplier relationships, storage solutions, reorder systems",
                  "Email, phone system, video conferencing, project management, customer support platform",
                  "Accounting software, payment processing, invoicing system, expense tracking, banking"
                ]
              }
            ]}
            tips={[
              "Start with essential systems and upgrade as you grow",
              "Choose scalable solutions that can grow with your business",
              "Document all operational procedures from the beginning"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}