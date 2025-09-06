"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LegalStructure() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Legal Structure & Registration</h1>
        <p className="text-muted-foreground">Set up your business legally with the right structure, registrations, and compliance framework.</p>
      </div>

      <Tabs defaultValue="business-structure" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="business-structure" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Business Structure</span>
            <span className="sm:hidden">Structure</span>
          </TabsTrigger>
          <TabsTrigger value="registration" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Registration</span>
            <span className="sm:hidden">Register</span>
          </TabsTrigger>
          <TabsTrigger value="compliance" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Compliance</span>
            <span className="sm:hidden">Comply</span>
          </TabsTrigger>
          <TabsTrigger value="protection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Protection</span>
            <span className="sm:hidden">Protect</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="business-structure">
          <GuidedNotePage
            title="Business Structure Selection"
            description="Choose the right legal structure for your business goals and circumstances"
            sections={[
              {
                title: "Entity Type Comparison",
                prompts: [
                  "What are the pros and cons of LLC vs. Corporation for your business?",
                  "How do tax implications differ between entity types?",
                  "What liability protection do you need for your business activities?",
                  "Do you plan to have investors or multiple owners?",
                  "How important is operational flexibility vs. formal structure?"
                ],
                examples: [
                  "LLC: flexible, pass-through taxes, less paperwork vs. Corp: investor-friendly, stock options, more complex",
                  "LLC taxes pass to owners, S-Corp avoids double taxation, C-Corp double taxation but more deductions",
                  "Professional services need strong liability protection, tech startups may have IP risks",
                  "Single owner: LLC or S-Corp, multiple owners: LLC with operating agreement, investors: C-Corp",
                  "LLC allows informal operations, corporations require board meetings, bylaws, formal processes"
                ]
              },
              {
                title: "State Selection",
                prompts: [
                  "Which state should you incorporate or form your LLC in?",
                  "How do state laws and taxes affect your choice?",
                  "What are the filing fees and ongoing costs in different states?",
                  "Do you need to be physically present in the state of formation?",
                  "How will multi-state operations affect your legal structure?"
                ],
                examples: [
                  "Delaware for corporations (favorable law, investor preference), home state for LLCs (simplicity)",
                  "Delaware: corporate-friendly courts, Nevada: privacy, Wyoming: low costs and flexibility",
                  "Delaware: $89 filing + $300 annual fee, Wyoming: $100 filing + $50 annual fee",
                  "Can incorporate remotely, but may need registered agent in formation state",
                  "May need to register as foreign entity in states where you have significant business activity"
                ]
              }
            ]}
            tips={[
              "Consult with attorney or CPA before making final entity decision",
              "Consider future growth plans and investor requirements in your choice",
              "Most small businesses benefit from LLC simplicity unless seeking investment"
            ]}
          />
        </TabsContent>

        <TabsContent value="registration">
          <GuidedNotePage
            title="Business Registration & Setup"
            description="Complete all required registrations and filings to legally operate your business"
            sections={[
              {
                title: "Name Registration",
                prompts: [
                  "What business name will you register and is it available?",
                  "Do you need to file a DBA (Doing Business As) name?",
                  "Should you register trademarks for your business name or logo?",
                  "What domain names and social media handles can you secure?",
                  "How will you protect your brand name from future conflicts?"
                ],
                examples: [
                  "Check state business registry, USPTO trademark database, domain availability",
                  "DBA required if operating under name different from legal entity name",
                  "Trademark for distinctive business names, logos, slogans that identify your business",
                  "Secure .com and key social handles even if not using immediately",
                  "Register trademarks, monitor for infringement, document first use in commerce"
                ]
              },
              {
                title: "Federal & State Filings",
                prompts: [
                  "What EIN (Employer Identification Number) applications do you need?",
                  "Which state and local business registrations are required?",
                  "Do you need sales tax permits or professional licenses?",
                  "What industry-specific registrations or certifications are required?",
                  "How will you stay compliant with ongoing filing requirements?"
                ],
                examples: [
                  "EIN from IRS for tax purposes and bank accounts, even for single-member LLCs",
                  "Articles of incorporation/organization, business license, zoning permits",
                  "Sales tax permit if selling tangible goods, professional licenses for regulated industries",
                  "Food service permits, contractor licenses, import/export registrations",
                  "Calendar reminders for annual reports, tax filings, license renewals"
                ]
              }
            ]}
            tips={[
              "Get EIN immediately after entity formation - you'll need it for everything",
              "Research all required licenses and permits for your specific industry and location",
              "Set up systems to track and meet all ongoing compliance deadlines"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}