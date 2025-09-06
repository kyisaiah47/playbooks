"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function InitialConsultation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Initial Consultation & Getting Started</h1>
        <p className="text-muted-foreground">Plan your first attorney meeting and understand the divorce process.</p>
      </div>

      <Tabs defaultValue="attorney-selection" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="attorney-selection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Attorney Selection</span>
            <span className="sm:hidden">Attorney</span>
          </TabsTrigger>
          <TabsTrigger value="first-meeting" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">First Meeting</span>
            <span className="sm:hidden">Meeting</span>
          </TabsTrigger>
          <TabsTrigger value="process-overview" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Process Overview</span>
            <span className="sm:hidden">Process</span>
          </TabsTrigger>
          <TabsTrigger value="next-steps" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Next Steps</span>
            <span className="sm:hidden">Next</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="attorney-selection">
          <GuidedNotePage
            title="Selecting the Right Attorney"
            description="Find and choose an attorney who fits your needs and case"
            sections={[
              {
                title: "Attorney Research Questions",
                prompts: [
                  "What type of divorce attorney do you need for your situation?",
                  "What experience should your attorney have with cases like yours?",
                  "What's your budget range for legal fees?",
                  "Do you prefer collaborative, mediation, or litigation-focused attorneys?",
                  "What questions will you ask potential attorneys during consultations?"
                ],
                examples: [
                  "Family law specialists with divorce focus, not general practitioners",
                  "Look for experience with high-asset, child custody, or complex financial cases if relevant",
                  "Hourly rates typically $200-600+, retainers $2,500-15,000+ depending on complexity",
                  "Collaborative for amicable splits, mediation for cost-effective, litigation for contested cases",
                  "Ask about their approach, typical case timeline, communication style, and fee structure"
                ]
              },
              {
                title: "Initial Consultation Planning",
                prompts: [
                  "What documents should you bring to the consultation?",
                  "What key questions do you want answered about your case?",
                  "How will you evaluate different attorneys you meet with?",
                  "What red flags should you watch for during consultations?",
                  "How many attorneys should you consult before deciding?"
                ],
                examples: [
                  "Marriage certificate, prenup, financial statements, property deeds, tax returns",
                  "Timeline, costs, likely outcomes, their experience with similar cases, communication process",
                  "Communication style, experience level, fee structure, availability, comfort level",
                  "Pressure to sign immediately, unrealistic promises, poor communication, inexperience",
                  "Consult with 2-3 attorneys to compare approaches and find the best fit"
                ]
              },
              {
                title: "Legal Fee Planning",
                prompts: [
                  "What's your realistic budget for total legal costs?",
                  "How do different fee structures work and which fits your case?",
                  "What additional costs beyond attorney fees should you expect?",
                  "How can you manage and control legal expenses throughout the process?",
                  "What payment arrangements are available for legal fees?"
                ],
                examples: [
                  "Contested divorces average $15,000-30,000+, uncontested $1,500-5,000",
                  "Hourly billing most common, flat fees for simple cases, contingency rare in divorce",
                  "Court filing fees, expert witnesses, mediators, appraisals, document production",
                  "Set communication boundaries, be organized, avoid unnecessary litigation, consider mediation",
                  "Payment plans, retainer agreements, credit options, family loans if necessary"
                ]
              },
              {
                title: "Attorney-Client Relationship",
                prompts: [
                  "What communication style and frequency do you prefer with your attorney?",
                  "How involved do you want to be in case strategy decisions?",
                  "What are your non-negotiable priorities for this divorce?",
                  "How will you maintain a good working relationship with your attorney?",
                  "What happens if you're not satisfied with your attorney's performance?"
                ],
                examples: [
                  "Weekly updates, email vs phone preference, response time expectations",
                  "Some prefer to be consulted on all decisions, others want attorney to handle details",
                  "Child custody, keeping the house, protecting retirement accounts, minimizing conflict",
                  "Be responsive, organized, honest, respectful of their time and expertise",
                  "Discuss concerns directly first, consider mediation, know you can change attorneys if needed"
                ]
              }
            ]}
            tips={[
              "Interview 2-3 attorneys before choosing - most offer free or low-cost consultations",
              "Choose an attorney whose communication style matches your preferences",
              "Ask about their typical case timeline and what factors might extend it",
              "Get fee agreements in writing and understand all potential costs upfront",
              "Trust your instincts - you'll be working closely with this person during a stressful time"
            ]}
          />
        </TabsContent>

        <TabsContent value="first-meeting">
          <GuidedNotePage
            title="Preparing for Your First Attorney Meeting"
            description="Maximize the value of your initial consultation"
            sections={[
              {
                title: "Document Preparation",
                prompts: [
                  "What financial documents should you gather before your first meeting?",
                  "What legal documents related to your marriage should you bring?",
                  "How should you organize your documents for easy reference?",
                  "What information about your spouse should you compile?",
                  "What questions about your situation should you write down in advance?"
                ],
                examples: [
                  "Bank statements, investment accounts, retirement accounts, pay stubs, tax returns, debt statements",
                  "Marriage certificate, prenuptial agreement, previous separation agreements, property deeds",
                  "Create chronological folders, make copies, bring originals for verification",
                  "Full legal name, employer, assets in their name, attorney if they have one",
                  "Timeline expectations, custody concerns, asset division priorities, support questions"
                ]
              },
              {
                title: "Case Background Summary",
                prompts: [
                  "How will you summarize your marriage history and current situation?",
                  "What are the main issues that led to considering divorce?",
                  "What attempts have you made to resolve marital problems?",
                  "How does your spouse view the divorce - are they cooperative or hostile?",
                  "What are your biggest concerns and priorities for the divorce process?"
                ],
                examples: [
                  "Marriage date, major life events, when problems started, current living situation",
                  "Financial disagreements, infidelity, substance abuse, incompatibility, domestic violence",
                  "Marriage counseling, separation periods, individual therapy, family interventions",
                  "Amicable split, contested issues, threatening behavior, already has attorney",
                  "Child welfare, financial security, privacy, timeline, maintaining dignity"
                ]
              },
              {
                title: "Goals and Expectations",
                prompts: [
                  "What are your most important goals for the divorce outcome?",
                  "What would you consider a successful resolution?",
                  "What are you willing to compromise on vs. what's non-negotiable?",
                  "How quickly do you want or need the divorce to be finalized?",
                  "What concerns do you have about the divorce process itself?"
                ],
                examples: [
                  "Primary custody, fair asset division, reasonable support, protect children from conflict",
                  "Both parties financially stable, children's needs met, respectful process",
                  "Flexible on some assets but firm on child custody arrangements",
                  "ASAP for new job, by specific date for remarriage, no rush if amicable",
                  "High legal costs, public proceedings, impact on children, retaliation from spouse"
                ]
              },
              {
                title: "Practical Considerations",
                prompts: [
                  "What's your current living situation and does it need to change?",
                  "How are you managing finances during the separation period?",
                  "What immediate safety concerns do you have, if any?",
                  "How are you handling communication with your spouse currently?",
                  "What support system do you have during this process?"
                ],
                examples: [
                  "Still living together, separated in same house, one moved out, temporary arrangement",
                  "Joint accounts still active, separate accounts opened, who pays what bills",
                  "Domestic violence, threats, harassment, need for restraining order",
                  "Direct conversation, through family, avoiding contact, already through attorneys",
                  "Family members, close friends, therapist, support groups, religious community"
                ]
              }
            ]}
            tips={[
              "Bring a written summary of your situation to help organize your thoughts",
              "Be completely honest with your attorney - they need all facts to represent you effectively",
              "Take notes during the consultation or bring someone to help you remember key points",
              "Ask about next steps and timeline so you know what to expect",
              "Don't be afraid to ask questions - understanding the process reduces anxiety"
            ]}
          />
        </TabsContent>

        <TabsContent value="process-overview">
          <GuidedNotePage
            title="Understanding the Divorce Process"
            description="Learn how divorce works in your jurisdiction"
            sections={[
              {
                title: "Legal Process Steps",
                prompts: [
                  "What are the basic steps in your state's divorce process?",
                  "What forms and paperwork will need to be filed?",
                  "What are the residency and waiting period requirements?",
                  "How does the court system work for divorce cases?",
                  "What happens if your spouse doesn't respond to divorce papers?"
                ],
                examples: [
                  "Petition filing, service of process, response period, discovery, negotiation, trial if needed",
                  "Petition for dissolution, financial disclosures, parenting plan, settlement agreement",
                  "Usually 6-month residency requirement, 30-90 day waiting periods after filing",
                  "Family court judges, clerks, mediation services, case management conferences",
                  "Default judgment possible after proper service and waiting period"
                ]
              },
              {
                title: "Timeline Expectations",
                prompts: [
                  "How long does a typical divorce take in your situation?",
                  "What factors could speed up or delay your divorce?",
                  "What deadlines and court dates should you expect?",
                  "How does the complexity of your case affect the timeline?",
                  "When will temporary orders be put in place if needed?"
                ],
                examples: [
                  "Uncontested: 2-6 months, contested: 6-18 months, complex cases: 1-3+ years",
                  "Cooperation level, asset complexity, child custody disputes, court backlog",
                  "Response deadlines, discovery cutoffs, mediation dates, trial dates",
                  "Simple asset division faster than business valuations or custody evaluations",
                  "Temporary support and custody orders often within 30-60 days"
                ]
              },
              {
                title: "Key Decision Points",
                prompts: [
                  "What major decisions will you need to make during the process?",
                  "When do you have opportunities to settle vs. going to trial?",
                  "How binding are temporary agreements and orders?",
                  "What happens if you change your mind about agreements?",
                  "How do appeals work if you're unhappy with the court's decision?"
                ],
                examples: [
                  "Living arrangements, child custody schedule, asset division, support amounts",
                  "Settlement conferences, mediation opportunities, last chance before trial",
                  "Temporary orders enforceable until final decree, but can be modified",
                  "Agreements can be withdrawn before final approval, harder after signing",
                  "Limited appeal grounds, expensive and time-consuming, better to get it right first time"
                ]
              },
              {
                title: "Rights and Responsibilities",
                prompts: [
                  "What are your rights during the divorce process?",
                  "What obligations do you have to your spouse and children?",
                  "How does divorce affect your legal status and decision-making?",
                  "What protections exist against spouse hiding assets or being vindictive?",
                  "How do you maintain your rights while being fair and reasonable?"
                ],
                examples: [
                  "Fair share of assets, reasonable support, access to children, legal representation",
                  "Financial support, honest disclosure, children's best interests, not wasting assets",
                  "Joint decisions still required for children until custody is decided",
                  "Court orders for disclosure, penalties for hiding assets, restraining orders available",
                  "Document everything, follow court orders, communicate through attorney when needed"
                ]
              }
            ]}
            tips={[
              "Every state has different divorce laws - make sure you understand your local process",
              "Uncontested divorces are much faster and cheaper than contested ones",
              "Temporary orders can provide stability while the divorce is pending",
              "Settlement is usually better than trial for time, cost, and maintaining relationships",
              "Understanding the process helps you make better decisions and feel more in control"
            ]}
          />
        </TabsContent>

        <TabsContent value="next-steps">
          <GuidedNotePage
            title="Next Steps After Initial Consultation"
            description="Plan your immediate actions following your attorney meeting"
            sections={[
              {
                title: "Immediate Action Items",
                prompts: [
                  "What documents do you need to gather based on your attorney's advice?",
                  "What accounts or assets should you secure or document immediately?",
                  "Are there any urgent deadlines or filings that need attention?",
                  "What safety measures should you take if there are concerns?",
                  "How will you organize your divorce-related paperwork and communications?"
                ],
                examples: [
                  "Bank statements, tax returns, property appraisals, employment records, insurance policies",
                  "Take photos of valuables, open individual bank account, secure important documents",
                  "Response deadlines if served, temporary support applications, protective orders",
                  "Change locks, inform children's schools, notify trusted friends and family",
                  "Create dedicated email account, file folders, secure cloud storage for sensitive documents"
                ]
              },
              {
                title: "Communication Strategy",
                prompts: [
                  "How should you communicate with your spouse about the divorce?",
                  "Who needs to be informed about your divorce proceedings?",
                  "What should you share with your children and when?",
                  "How will you handle questions from family, friends, and coworkers?",
                  "What communication boundaries should you establish?"
                ],
                examples: [
                  "Through attorneys if hostile, directly if amicable, written record for important matters",
                  "HR department, children's schools, close family, trusted friends, financial advisors",
                  "Age-appropriate information, reassurance it's not their fault, stable routine",
                  "Simple explanation without details, ask for privacy and support",
                  "No discussions of legal strategy, avoid social media posts, keep it civil"
                ]
              },
              {
                title: "Financial Protection",
                prompts: [
                  "What steps should you take to protect your financial interests?",
                  "How should you handle joint accounts and credit cards?",
                  "What records do you need to maintain during the divorce?",
                  "How will you budget for divorce-related expenses?",
                  "What insurance considerations need immediate attention?"
                ],
                examples: [
                  "Freeze joint accounts if needed, monitor credit reports, protect retirement accounts",
                  "Remove spouse as authorized user, open individual accounts, document expenditures",
                  "All financial transactions, communications with spouse, attorney meetings and costs",
                  "Legal fees, temporary housing costs, child care, reduced household income",
                  "Maintain health insurance, life insurance beneficiaries, property insurance updates"
                ]
              },
              {
                title: "Support System Development",
                prompts: [
                  "What emotional support do you need during this process?",
                  "How will you maintain your physical and mental health?",
                  "What professional help might benefit you and your children?",
                  "How will you maintain stability and routine during the transition?",
                  "What self-care practices will help you cope with stress?"
                ],
                examples: [
                  "Individual therapy, divorce support groups, trusted friends and family",
                  "Regular exercise, proper nutrition, adequate sleep, medical checkups",
                  "Child therapist or counselor, financial planner, career counselor if needed",
                  "Consistent schedules for children, familiar activities, stable living environment",
                  "Meditation, journaling, hobbies, time with friends, professional help"
                ]
              }
            ]}
            tips={[
              "Act quickly on urgent matters but take time for important decisions",
              "Keep detailed records of all communications and financial transactions",
              "Focus on your children's emotional well-being throughout the process",
              "Build a support network before you need it most",
              "Remember that divorce is a process, not a single event - pace yourself accordingly"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}