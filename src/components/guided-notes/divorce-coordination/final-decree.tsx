"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FinalDecree() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Final Decree & Moving Forward</h1>
        <p className="text-muted-foreground">Finalize your divorce and plan for your new life ahead.</p>
      </div>

      <Tabs defaultValue="decree-review" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="decree-review" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Decree Review</span>
            <span className="sm:hidden">Review</span>
          </TabsTrigger>
          <TabsTrigger value="implementation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Implementation</span>
            <span className="sm:hidden">Execute</span>
          </TabsTrigger>
          <TabsTrigger value="transition" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Transition</span>
            <span className="sm:hidden">Transition</span>
          </TabsTrigger>
          <TabsTrigger value="future-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Future Planning</span>
            <span className="sm:hidden">Future</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="decree-review">
          <GuidedNotePage
            title="Understanding Your Final Divorce Decree"
            description="Review and understand all provisions of your final divorce decree"
            sections={[
              {
                title: "Decree Components",
                prompts: [
                  "What are the main sections of your divorce decree?",
                  "How should you review the decree for accuracy and completeness?",
                  "What happens if there are errors or omissions in the decree?",
                  "How do you ensure all agreements are properly reflected?",
                  "What deadlines and requirements are specified in the decree?"
                ],
                examples: [
                  "Property division, custody/parenting plan, support orders, name changes, attorney fees",
                  "Check all names, dates, amounts, account numbers, addresses against agreements",
                  "File motion to correct within 30 days, may need attorney assistance",
                  "Compare final decree to settlement agreement or trial testimony",
                  "Asset transfer deadlines, QDRO preparation, refinancing requirements"
                ]
              },
              {
                title: "Legal Obligations",
                prompts: [
                  "What legal obligations does the decree create for each party?",
                  "How are support payments structured and when do they start?",
                  "What custody and parenting time requirements are established?",
                  "What property transfers must be completed and by when?",
                  "What happens if either party violates decree provisions?"
                ],
                examples: [
                  "Support payments, property transfers, custody compliance, debt payments",
                  "Monthly amounts, payment dates, duration, automatic adjustments",
                  "Custody schedule, decision-making authority, communication requirements",
                  "Real estate deeds, account transfers, QDRO completion, personal property division",
                  "Contempt proceedings, enforcement actions, modification of terms"
                ]
              },
              {
                title: "Rights and Protections",
                prompts: [
                  "What rights does the decree establish for you?",
                  "What protections exist if your ex-spouse doesn't comply?",
                  "How do you enforce decree provisions?",
                  "What remedies are available for violations?",
                  "How does the decree affect your legal status?"
                ],
                examples: [
                  "Property ownership, parenting time, support payments, name restoration",
                  "Court enforcement, contempt powers, garnishment, asset seizure",
                  "Motion for contempt, enforcement actions through court system",
                  "Fines, jail time, wage garnishment, asset liens, attorney fee awards",
                  "Single status restored, ability to remarry, independent financial decisions"
                ]
              },
              {
                title: "Modification Provisions",
                prompts: [
                  "What provisions can be modified after the divorce?",
                  "Under what circumstances can modifications be requested?",
                  "What parts of the decree are permanent and can't be changed?",
                  "How do you request modifications when needed?",
                  "What role do changed circumstances play in modifications?"
                ],
                examples: [
                  "Child support, custody arrangements, some spousal support orders",
                  "Substantial change in circumstances, job loss, income changes, relocation",
                  "Property division usually final, some support orders may be non-modifiable",
                  "Motion to modify through court, show substantial change in circumstances",
                  "Must be significant, ongoing, and not foreseeable at time of divorce"
                ]
              }
            ]}
            tips={[
              "Read your decree carefully and ask questions about anything you don't understand",
              "Keep certified copies of your decree in multiple safe places",
              "Set up systems to comply with all deadlines and ongoing obligations",
              "Document compliance with decree requirements to protect yourself",
              "Address any errors or concerns immediately while correction is still possible"
            ]}
          />
        </TabsContent>

        <TabsContent value="implementation">
          <GuidedNotePage
            title="Implementing Decree Requirements"
            description="Take the necessary steps to fulfill all decree obligations"
            sections={[
              {
                title: "Asset and Property Transfers",
                prompts: [
                  "What property transfers need to be completed?",
                  "How do you transfer real estate ownership?",
                  "What about transferring financial accounts and investments?",
                  "How do you handle retirement account divisions?",
                  "What documentation is needed for each type of transfer?"
                ],
                examples: [
                  "Home ownership, vehicle titles, bank accounts, investment accounts, personal property",
                  "Quit-claim deeds, title transfers, mortgage assumption or refinancing",
                  "Account transfers, beneficiary changes, investment reallocations",
                  "QDROs for 401k/pension plans, direct trustee-to-trustee transfers for IRAs",
                  "Court orders, identification, account information, transfer forms"
                ]
              },
              {
                title: "Financial Account Changes",
                prompts: [
                  "What changes need to be made to bank and investment accounts?",
                  "How do you handle joint accounts and credit cards?",
                  "What about insurance policies and beneficiary designations?",
                  "How do you establish individual credit after divorce?",
                  "What tax-related changes are needed?"
                ],
                examples: [
                  "Remove ex-spouse from accounts, open individual accounts, change signatures",
                  "Close joint accounts, remove authorized users, pay off or transfer balances",
                  "Update beneficiaries on life insurance, retirement accounts, update coverage",
                  "Apply for individual credit cards, establish credit history, monitor credit reports",
                  "Change filing status, update withholdings, inform accountant of decree terms"
                ]
              },
              {
                title: "Support and Payment Systems",
                prompts: [
                  "How do you set up child support and alimony payments?",
                  "What payment methods are required or preferred?",
                  "How do you track payments made and received?",
                  "What happens if payments are late or missed?",
                  "How do you handle tax implications of support payments?"
                ],
                examples: [
                  "Automatic wage assignments, online payment systems, direct bank transfers",
                  "State payment processing centers, direct payments between parties",
                  "Payment records, receipts, bank records, court payment systems",
                  "Interest accrues, enforcement actions, contempt proceedings",
                  "Support generally not taxable/deductible under current law, consult tax advisor"
                ]
              },
              {
                title: "Custody Implementation",
                prompts: [
                  "How do you begin following the new custody schedule?",
                  "What systems need to be established for co-parenting communication?",
                  "How do you coordinate with schools, doctors, and activities?",
                  "What records should you keep regarding custody compliance?",
                  "How do you handle initial adjustment challenges?"
                ],
                examples: [
                  "Create calendars, establish routines, coordinate with ex-spouse",
                  "Shared calendars, co-parenting apps, email communication protocols",
                  "Provide copies of decree, update emergency contacts, clarify decision-making",
                  "Custody logs, communication records, expenses, any compliance issues",
                  "Give children time to adjust, maintain flexibility, focus on their needs"
                ]
              }
            ]}
            tips={[
              "Create a checklist of all implementation tasks with deadlines",
              "Keep detailed records of all transfers and payments for tax and legal purposes",
              "Don't delay implementation - many decrees have specific deadlines",
              "Get help from professionals (attorneys, accountants, financial advisors) when needed",
              "Notify all relevant parties (banks, schools, employers) about status changes"
            ]}
          />
        </TabsContent>

        <TabsContent value="transition">
          <GuidedNotePage
            title="Navigating Life Transitions"
            description="Adjust to your new life circumstances and routines"
            sections={[
              {
                title: "Emotional Adjustment",
                prompts: [
                  "How are you processing the emotional aspects of finalizing your divorce?",
                  "What support systems do you need during this transition period?",
                  "How do you handle feelings of grief, relief, anxiety, or uncertainty?",
                  "What professional help might benefit you during this transition?",
                  "How do you maintain emotional stability for your children?"
                ],
                examples: [
                  "Allow yourself to grieve the end of marriage while celebrating new beginnings",
                  "Friends, family, support groups, therapists, religious communities",
                  "Normal to have mixed emotions, allow processing time, avoid major decisions initially",
                  "Individual therapy, support groups, life coaching, spiritual counseling",
                  "Consistent routines, open communication, reassurance, professional help if needed"
                ]
              },
              {
                title: "Practical Life Changes",
                prompts: [
                  "What practical changes do you need to make to your daily life?",
                  "How do you establish new routines and living arrangements?",
                  "What about changes to work, school, or community involvement?",
                  "How do you handle changes in social relationships?",
                  "What new skills or knowledge do you need to develop?"
                ],
                examples: [
                  "New address, bank accounts, emergency contacts, household management",
                  "Single parenting schedules, new home organization, personal routines",
                  "Work schedule flexibility, school involvement, community activities",
                  "Some friendships may change, develop new social connections, dating considerations",
                  "Financial management, home maintenance, single parenting, career development"
                ]
              },
              {
                title: "Children's Adjustment",
                prompts: [
                  "How are your children adjusting to the new custody arrangement?",
                  "What signs of stress or difficulty should you watch for?",
                  "How do you help children maintain relationships with both parents?",
                  "What changes in behavior or performance might you see?",
                  "When should you consider professional help for your children?"
                ],
                examples: [
                  "May take 6 months to 2 years for full adjustment to new arrangements",
                  "Changes in sleep, appetite, school performance, behavior, social interactions",
                  "Encourage positive relationship with other parent, avoid negative comments",
                  "Temporary regression, acting out, withdrawal, academic changes often normal",
                  "Persistent problems, significant behavior changes, expressed distress, academic failure"
                ]
              },
              {
                title: "Building New Identity",
                prompts: [
                  "How do you rebuild your identity as a single person?",
                  "What goals and aspirations do you want to pursue now?",
                  "How do you balance personal growth with parenting responsibilities?",
                  "What new relationships and connections do you want to develop?",
                  "How do you maintain hope and optimism for the future?"
                ],
                examples: [
                  "Rediscover personal interests, values, goals separate from marriage",
                  "Career advancement, education, travel, hobbies, community involvement, relationships",
                  "Schedule personal time, involve children in age-appropriate activities",
                  "New friendships, professional networks, romantic relationships when ready",
                  "Focus on growth opportunities, celebrate small victories, seek positive influences"
                ]
              }
            ]}
            tips={[
              "Give yourself time to adjust - major life transitions take time",
              "Focus on creating stability and routine for yourself and your children",
              "Seek support when you need it - you don't have to navigate this alone",
              "Be patient with yourself and your children during the adjustment period",
              "Look forward to new opportunities while honoring what you've been through"
            ]}
          />
        </TabsContent>

        <TabsContent value="future-planning">
          <GuidedNotePage
            title="Planning Your Future"
            description="Set goals and create plans for your post-divorce life"
            sections={[
              {
                title: "Financial Planning",
                prompts: [
                  "What are your short-term and long-term financial goals?",
                  "How do you create a realistic budget for your new situation?",
                  "What changes do you need to make to your retirement planning?",
                  "How do you protect and build your financial security?",
                  "What professional financial advice do you need?"
                ],
                examples: [
                  "Emergency fund, debt reduction, home ownership, children's education, retirement",
                  "Track income vs expenses, adjust spending, prioritize necessities, plan for variables",
                  "Update beneficiaries, adjust contribution levels, recalculate retirement needs",
                  "Insurance coverage, estate planning, investment strategy, credit building",
                  "Financial planner, investment advisor, tax professional, insurance agent"
                ]
              },
              {
                title: "Career and Education",
                prompts: [
                  "How might your career goals change after divorce?",
                  "What education or training could improve your earning potential?",
                  "How do you balance career advancement with parenting responsibilities?",
                  "What networking and professional development opportunities should you pursue?",
                  "How do you handle work-life balance as a single parent?"
                ],
                examples: [
                  "Career change, advancement, increased income, flexible work arrangements",
                  "College degree, professional certification, skills training, continuing education",
                  "Flexible schedules, childcare arrangements, family-friendly employers",
                  "Professional associations, mentoring, conferences, online networking",
                  "Time management, childcare support, setting boundaries, stress management"
                ]
              },
              {
                title: "Personal Growth and Relationships",
                prompts: [
                  "What personal growth goals do you want to pursue?",
                  "How do you want to approach new romantic relationships?",
                  "What friendships and social connections do you want to develop?",
                  "How do you model healthy relationships for your children?",
                  "What activities and interests do you want to explore?"
                ],
                examples: [
                  "Therapy, spiritual growth, physical fitness, creative pursuits, life skills",
                  "Take time to heal first, know your values, introduce carefully to children",
                  "Single parent groups, community activities, professional organizations, shared interests",
                  "Healthy communication, conflict resolution, respect, emotional intelligence",
                  "Hobbies, sports, volunteering, travel, learning, creative expression"
                ]
              },
              {
                title: "Legacy and Long-term Vision",
                prompts: [
                  "What kind of life do you want to build for yourself and your children?",
                  "How do you want to co-parent effectively in the long term?",
                  "What values and principles will guide your future decisions?",
                  "How do you plan for major milestones and life events?",
                  "What legacy do you want to create for your family?"
                ],
                examples: [
                  "Stable, happy home; successful children; personal fulfillment; meaningful relationships",
                  "Respectful communication, child-focused decisions, consistent parenting, conflict resolution",
                  "Integrity, growth, family first, financial responsibility, kindness, resilience",
                  "Children's graduations, weddings; your retirement; grandchildren; family traditions",
                  "Strong, independent children; financial security; positive impact; personal growth"
                ]
              }
            ]}
            tips={[
              "Set realistic goals and break them down into manageable steps",
              "Focus on building the foundation for long-term happiness and success",
              "Remember that healing and rebuilding take time - be patient with the process",
              "Invest in yourself and your future while being present for your children",
              "Create new traditions and memories while honoring positive aspects of your past"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}