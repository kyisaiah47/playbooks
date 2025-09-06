"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VendorCoordination() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vendor Coordination & Management</h1>
        <p className="text-muted-foreground">Successfully coordinate with all your event vendors.</p>
      </div>

      <Tabs defaultValue="vendor-selection" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="vendor-selection" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Vendor Selection</span>
            <span className="sm:hidden">Selection</span>
          </TabsTrigger>
          <TabsTrigger value="contract-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Contract Management</span>
            <span className="sm:hidden">Contracts</span>
          </TabsTrigger>
          <TabsTrigger value="coordination-communication" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Communication</span>
            <span className="sm:hidden">Comm</span>
          </TabsTrigger>
          <TabsTrigger value="timeline-logistics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Timeline Logistics</span>
            <span className="sm:hidden">Timeline</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vendor-selection">
          <GuidedNotePage
            title="Vendor Research & Selection Process"
            description="Find and choose the right vendors for your event"
            sections={[
              {
                title: "Vendor Research Strategy",
                prompts: [
                  "What types of vendors do you need for your specific event?",
                  "How will you research and identify potential vendors in your area?",
                  "What criteria will you use to evaluate different vendor options?",
                  "How many quotes will you get for each major service category?",
                  "What resources will you use to verify vendor reputation and quality?"
                ],
                examples: [
                  "Caterer, photographer, DJ/band, florist, rental company, transportation, day-of coordinator",
                  "Online directories, Google reviews, social media, referrals from friends, venue recommendations",
                  "Price, quality, experience, availability, personality fit, insurance, backup plans",
                  "Get at least 3 quotes for major expenses (venue, catering, photography), 2 quotes for smaller services",
                  "Read Google/Yelp reviews, check Better Business Bureau, ask for recent client references, view portfolios"
                ]
              },
              {
                title: "Vendor Interview Process",
                prompts: [
                  "What key questions will you ask each type of vendor?",
                  "How will you assess vendor reliability and professionalism?",
                  "What red flags should you watch for during vendor meetings?",
                  "How will you evaluate vendor portfolios and previous work?",
                  "What trial runs or tastings will you arrange before booking?"
                ],
                examples: [
                  "Experience with your event type, availability, pricing breakdown, what's included, backup plans",
                  "Prompt email responses, organized presentation materials, clear contracts, professional references",
                  "Pressure tactics, vague pricing, no references, poor communication, unrealistic promises",
                  "Look for events similar to yours, quality consistency, style match, recent work examples",
                  "Catering tastings, photographer engagement shoots, DJ music samples, florist consultations"
                ]
              },
              {
                title: "Vendor Comparison and Decision Making",
                prompts: [
                  "How will you systematically compare vendor quotes and proposals?",
                  "What factors beyond price should influence your vendor decisions?",
                  "How will you handle vendor negotiations and final pricing?",
                  "What is your timeline for making vendor decisions and bookings?",
                  "How will you communicate decisions to vendors you don't choose?"
                ],
                examples: [
                  "Create comparison spreadsheet with price, services included, experience, availability",
                  "Quality of work, personality compatibility, reliability, flexibility, emergency backup procedures",
                  "Ask about package deals, off-season discounts, payment plan options, matching competitor prices",
                  "Book priority vendors (venue, caterer) first, then secondary vendors, finalize all 60+ days before event",
                  "Polite, prompt responses thanking for time and keeping door open for future events"
                ]
              },
              {
                title: "Vendor Onboarding Process",
                prompts: [
                  "What information will you provide to each vendor when you book them?",
                  "How will you introduce vendors to each other and coordinate collaboration?",
                  "What vendor contact list will you create and maintain?",
                  "How will you establish communication preferences with each vendor?",
                  "What initial timeline and logistics information do vendors need?"
                ],
                examples: [
                  "Event date/time, venue details, guest count estimate, key contacts, initial timeline, special requirements",
                  "Provide contact lists to all vendors, facilitate intro calls for key collaborations like catering + venue",
                  "Spreadsheet with vendor type, company name, contact person, phone, email, contract status",
                  "Email vs phone preferences, response time expectations, meeting schedule, emergency contacts",
                  "Setup/breakdown times, venue access rules, load-in procedures, parking information, day-of timeline"
                ]
              }
            ]}
            tips={[
              "Book your most important vendors (venue, caterer) first as they may influence other choices",
              "Always get quotes in writing and ask what's included vs. what costs extra",
              "Check vendor insurance and business licenses before signing contracts",
              "Meet vendors in person when possible to assess personality fit and professionalism",
              "Keep backup vendor options identified in case your first choices fall through"
            ]}
          />
        </TabsContent>

        <TabsContent value="contract-management">
          <GuidedNotePage
            title="Vendor Contracts & Legal Management"
            description="Manage contracts, payments, and legal aspects of vendor relationships"
            sections={[
              {
                title: "Contract Review and Negotiation",
                prompts: [
                  "What key terms should you review carefully in each vendor contract?",
                  "How will you negotiate contract terms that protect your interests?",
                  "What happens if vendors need to cancel or if you need to change plans?",
                  "How do you handle contract disputes or disagreements with vendors?",
                  "What contract terms are non-negotiable vs. flexible for your event?"
                ],
                examples: [
                  "Services provided, payment schedule, cancellation policies, liability coverage, force majeure clauses",
                  "Request payment plans, negotiate cancellation terms, add quality guarantees, specify exactly what's included",
                  "Understand refund policies, require vendor backup plans, know your rights for service failures",
                  "Document issues in writing, reference specific contract terms, escalate through proper channels",
                  "Non-negotiable: date/time, basic services, payment amounts; Flexible: setup details, minor service changes"
                ]
              },
              {
                title: "Payment Management and Scheduling",
                prompts: [
                  "What payment schedule will you establish with each vendor?",
                  "How will you track payment due dates and amounts across all vendors?",
                  "What payment methods offer the best protection and cash flow management?",
                  "How will you handle payment disputes or invoice discrepancies?",
                  "What documentation will you maintain for all vendor payments?"
                ],
                examples: [
                  "Typical: 25-50% deposit at booking, balance 1-7 days before event, some vendors require payment day-of",
                  "Calendar reminders, spreadsheet with due dates, automatic alerts, regular review meetings",
                  "Credit cards offer dispute protection, checks provide paper trail, wire transfers for large amounts",
                  "Compare invoice to contract, document discrepancies in writing, resolve before event date",
                  "Keep all receipts, bank statements, contracts, email confirmations, payment method records"
                ]
              },
              {
                title: "Insurance and Liability Considerations",
                prompts: [
                  "What insurance requirements should your vendors meet?",
                  "How will you verify vendor insurance coverage and business licenses?",
                  "What liability issues should you consider for your specific event type?",
                  "How does venue insurance interact with vendor insurance coverage?",
                  "What happens if a vendor's insurance lapses or they don't meet requirements?"
                ],
                examples: [
                  "General liability $1-2M, professional liability, auto insurance for transportation vendors",
                  "Request certificates of insurance, verify coverage dates, confirm you're listed as additional insured",
                  "Food safety for caterers, equipment safety for rentals, auto liability for transport, liquor liability",
                  "Venue may require all vendors to carry insurance and name venue as additional insured",
                  "Don't allow vendor to work without proper insurance, have backup vendors ready, verify before event"
                ]
              },
              {
                title: "Contract Changes and Modifications",
                prompts: [
                  "What process will you follow for making changes to vendor contracts?",
                  "How will you handle guest count changes that affect vendor services?",
                  "What happens when you need to add or remove services from existing contracts?",
                  "How will you manage vendor change requests and additional charges?",
                  "What approval process will you use for contract modifications?"
                ],
                examples: [
                  "All changes in writing via email or contract amendment, both parties sign modified terms",
                  "Most vendors allow 10% guest count change, major changes may require renegotiation",
                  "Get new pricing for additions, negotiate removal credits, update contracts with new scope",
                  "Require advance notice for changes, get written quotes for additions, approve before work begins",
                  "Co-planner approval required, budget impact assessment, vendor confirmation in writing"
                ]
              }
            ]}
            tips={[
              "Read every contract thoroughly and ask questions about anything that's unclear",
              "Get all verbal agreements added to written contracts before signing",
              "Keep organized files of all contracts, payments, and correspondence with vendors",
              "Verify vendor insurance and licenses before signing contracts, not just before the event",
              "Build change order procedures into your initial contracts to handle modifications smoothly"
            ]}
          />
        </TabsContent>

        <TabsContent value="coordination-communication">
          <GuidedNotePage
            title="Vendor Communication & Coordination"
            description="Maintain effective communication and coordination among all vendors"
            sections={[
              {
                title: "Communication Systems and Protocols",
                prompts: [
                  "What communication system will you use to coordinate with all vendors?",
                  "How often will you check in with vendors during the planning process?",
                  "What information-sharing system will you establish among vendors?",
                  "How will you handle urgent communications and emergency contact?",
                  "What communication schedule will you establish leading up to the event?"
                ],
                examples: [
                  "Email threads, group messaging apps, shared documents, regular phone check-ins",
                  "Monthly check-ins during early planning, weekly during final month, daily during final week",
                  "Shared contact list, group email for updates, vendor intro meetings, collaborative timeline",
                  "Emergency contact numbers for all vendors, backup contacts, escalation procedures",
                  "90 days out: major update, 30 days: detailed coordination, 7 days: final confirmations, day-of: active coordination"
                ]
              },
              {
                title: "Vendor Coordination Meetings",
                prompts: [
                  "When and how will you hold vendor coordination meetings?",
                  "Which vendors need to coordinate directly with each other?",
                  "What agenda and topics should vendor meetings cover?",
                  "How will you follow up on meeting action items and decisions?",
                  "What vendors require site visits or venue walkthroughs together?"
                ],
                examples: [
                  "Monthly phone calls early on, in-person meeting 30 days before, final walkthrough 1 week before",
                  "Caterer + venue, florist + rental company, DJ + photographer, all vendors for timeline coordination",
                  "Timeline review, setup logistics, contact information, problem-solving, emergency procedures",
                  "Email summary of meeting, assign action items, set deadlines, schedule follow-up check-ins",
                  "Caterer needs kitchen tour, florist needs setup space assessment, DJ needs electrical/sound check"
                ]
              },
              {
                title: "Information Management and Documentation",
                prompts: [
                  "What vendor information database will you maintain?",
                  "How will you track vendor progress and completed tasks?",
                  "What documentation will you share with vendors about the event?",
                  "How will you handle vendor questions and information requests?",
                  "What backup communication plans do you have for vendor coordination?"
                ],
                examples: [
                  "Master spreadsheet with contacts, contracts, payments, timelines, special requirements",
                  "Task tracking system, regular progress check-ins, milestone confirmations, completion verification",
                  "Event timeline, venue details, guest count updates, special requirements, contact lists",
                  "Designate single point of contact, establish response time expectations, maintain FAQ document",
                  "Backup contact person, alternative communication methods, vendor emergency contacts"
                ]
              },
              {
                title: "Problem Resolution and Conflict Management",
                prompts: [
                  "How will you handle conflicts or disagreements between vendors?",
                  "What escalation process will you use for vendor issues?",
                  "How will you resolve scheduling conflicts or logistical problems?",
                  "What backup plans do you have if vendor communication breaks down?",
                  "How will you maintain professional relationships while resolving issues?"
                ],
                examples: [
                  "Mediate discussions between vendors, refer to contracts for resolution, make executive decisions when needed",
                  "Direct communication first, escalate to supervisors, involve venue coordinator, legal counsel if necessary",
                  "Flexible timing, alternative solutions, compromise on requirements, bring in additional resources",
                  "Have alternative vendors identified, venue coordinator can step in, day-of coordinator handles issues",
                  "Stay calm and professional, focus on solutions not blame, document agreements in writing"
                ]
              }
            ]}
            tips={[
              "Establish clear communication preferences and response time expectations with each vendor",
              "Create a master contact list and share it with all vendors for better coordination",
              "Hold at least one in-person coordination meeting with key vendors before the event",
              "Document all important conversations and decisions in writing via email",
              "Designate a point person to handle vendor coordination if you want to focus on other aspects"
            ]}
          />
        </TabsContent>

        <TabsContent value="timeline-logistics">
          <GuidedNotePage
            title="Timeline Coordination & Event Day Logistics"
            description="Coordinate vendor schedules and manage event day logistics"
            sections={[
              {
                title: "Vendor Timeline Development",
                prompts: [
                  "How will you create a master timeline that coordinates all vendor activities?",
                  "What setup and breakdown time does each vendor require?",
                  "How will you sequence vendor arrivals and activities to avoid conflicts?",
                  "What buffer time will you build in for delays and unexpected issues?",
                  "How will you communicate the final timeline to all vendors?"
                ],
                examples: [
                  "Work backwards from event start time, coordinate dependent activities, account for venue restrictions",
                  "Caterer: 3-4 hours setup, DJ: 1-2 hours, florist: 2-3 hours, photographer: varies throughout",
                  "Venue setup first, then decor/florals, then catering setup, finally tech/entertainment setup",
                  "Add 30 minutes buffer between major activities, have contingency plans for delays",
                  "Detailed timeline document shared 1 week before, day-of timeline cards for each vendor"
                ]
              },
              {
                title: "Venue Access and Logistics Coordination",
                prompts: [
                  "How will you coordinate vendor access to the venue?",
                  "What loading and parking arrangements do vendors need?",
                  "How will you manage vendor storage and staging areas?",
                  "What venue rules and restrictions do vendors need to follow?",
                  "How will you handle vendor security and identification on event day?"
                ],
                examples: [
                  "Stagger arrival times, coordinate with venue manager, provide venue contact information",
                  "Loading dock reservations, vendor parking areas, equipment cart access, elevator reservations",
                  "Designate prep areas, storage closets, equipment staging zones, vendor break areas",
                  "Noise restrictions, setup limitations, cleaning requirements, prohibited items, safety protocols",
                  "Vendor identification badges, check-in procedures, venue staff coordination, security protocols"
                ]
              },
              {
                title: "Day-of Coordination and Management",
                prompts: [
                  "Who will serve as the main point of contact for vendors on event day?",
                  "How will you handle vendor questions and issues during the event?",
                  "What communication system will you use for real-time coordination?",
                  "How will you manage vendor payments and final details on event day?",
                  "What vendor appreciation and relationship-building will you do?"
                ],
                examples: [
                  "Designated day-of coordinator, venue manager, trusted family member with authority to make decisions",
                  "Single point person for vendor questions, clear escalation procedures, problem-solving protocols",
                  "Walkie-talkies, group text messages, venue staff communication system, emergency contacts",
                  "Pre-arranged payments when possible, have checks/cash ready, final headcount confirmations",
                  "Thank you notes, tips for exceptional service, referrals to other clients, positive online reviews"
                ]
              },
              {
                title: "Post-Event Vendor Coordination",
                prompts: [
                  "What cleanup and breakdown coordination is needed after the event?",
                  "How will you handle vendor equipment pickup and final details?",
                  "What follow-up communication will you have with vendors?",
                  "How will you handle any post-event issues or vendor concerns?",
                  "What vendor feedback and evaluation will you complete?"
                ],
                examples: [
                  "Coordinate breakdown timing, protect rental items, ensure proper cleanup, secure valuable items",
                  "Equipment pickup schedules, final headcount for caterer, breakdown supervision, damage assessments",
                  "Thank you emails, payment confirmations, referral requests, feedback sharing",
                  "Address issues promptly in writing, reference contracts for dispute resolution, maintain professional tone",
                  "Rate vendor performance, write reviews, ask for feedback on planning process, maintain relationships"
                ]
              }
            ]}
            tips={[
              "Create a detailed day-of timeline and share it with all vendors at least one week before the event",
              "Designate one person as the vendor point of contact to avoid confusion on event day",
              "Build buffer time into your vendor timeline to account for delays and unexpected issues",
              "Confirm all final details with vendors 48-72 hours before the event",
              "Show appreciation to vendors with thank you notes and positive reviews after successful events"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}