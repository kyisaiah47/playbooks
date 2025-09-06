"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BudgetPlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Event Budget Planning</h1>
        <p className="text-muted-foreground">Create and manage your event budget effectively.</p>
      </div>

      <Tabs defaultValue="budget-foundation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="budget-foundation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Budget Foundation</span>
            <span className="sm:hidden">Foundation</span>
          </TabsTrigger>
          <TabsTrigger value="cost-allocation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Cost Allocation</span>
            <span className="sm:hidden">Allocation</span>
          </TabsTrigger>
          <TabsTrigger value="cost-management" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Cost Management</span>
            <span className="sm:hidden">Management</span>
          </TabsTrigger>
          <TabsTrigger value="financial-tracking" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Financial Tracking</span>
            <span className="sm:hidden">Tracking</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="budget-foundation">
          <GuidedNotePage
            title="Budget Foundation & Total Planning"
            description="Establish your total event budget and funding sources"
            sections={[
              {
                title: "Total Budget Determination",
                prompts: [
                  "What is your total available budget for this event?",
                  "How will you fund this event (savings, contributions, loans)?",
                  "What factors influence your budget size and limitations?",
                  "How does your guest count impact your total budget needs?",
                  "What's your contingency amount for unexpected expenses?"
                ],
                examples: [
                  "$15,000 corporate event, $8,000 birthday party, $25,000 anniversary celebration",
                  "Personal savings $10K, family contributions $5K, company budget $20K",
                  "Time of year, venue location, guest count, level of formality, special requirements",
                  "Budget per guest: casual $50-100, semi-formal $75-150, formal $100-250+",
                  "Set aside 10-15% of total budget for unexpected costs and last-minute additions"
                ]
              },
              {
                title: "Budget Category Framework",
                prompts: [
                  "What are the main expense categories for your type of event?",
                  "Which categories are absolute necessities vs. nice-to-have additions?",
                  "How will you prioritize spending across different categories?",
                  "What percentage of your budget should go to each major category?",
                  "Which expenses are fixed costs vs. variable based on guest count?"
                ],
                examples: [
                  "Venue, catering, entertainment, decor, photography, invitations, transportation",
                  "Venue and catering are essential, premium bar and elaborate decor are optional",
                  "Rank by importance: venue/catering (highest), then photography, then entertainment, then decor",
                  "Venue 30%, catering 35%, entertainment 10%, photography 10%, decor 8%, misc 7%",
                  "Fixed: venue, photography, entertainment; Variable: catering, bar, favors, rentals"
                ]
              },
              {
                title: "Funding and Payment Planning",
                prompts: [
                  "What payment timeline do your major vendors require?",
                  "How will you schedule payments to manage cash flow?",
                  "What credit options or financing will you use if needed?",
                  "How will you handle deposits and final payments?",
                  "What backup funding sources do you have for overages?"
                ],
                examples: [
                  "Venues often require 50% deposit, 50% final payment; caterers may want payment day-of",
                  "Spread major payments across months, align with income schedule, avoid all payments in one month",
                  "Event-specific credit card with rewards, personal loan, family loan, vendor payment plans",
                  "Deposits typically due at booking, final payments 1-7 days before event",
                  "Emergency fund, credit card, family assistance, reducing guest count or service levels"
                ]
              },
              {
                title: "Regional Cost Considerations",
                prompts: [
                  "How do costs in your area compare to national averages?",
                  "What local factors affect pricing for event services?",
                  "Which vendors in your area offer the best value?",
                  "How can you take advantage of regional pricing opportunities?",
                  "What seasonal pricing variations should you consider?"
                ],
                examples: [
                  "Major cities cost 20-50% more, rural areas may have limited options but lower prices",
                  "Tourism areas cost more during peak season, college towns vary by academic calendar",
                  "Research local vendor reviews, get referrals from recently married couples/event planners",
                  "Off-season bookings, newer vendors building reputation, package deals, weekday events",
                  "Wedding season (May-October) premium, holiday season surcharges, winter discounts"
                ]
              }
            ]}
            tips={[
              "Set your total budget first, then allocate percentages rather than picking vendors first",
              "Get quotes from at least 3 vendors for major expenses before finalizing your budget",
              "Track all expenses in real-time using a spreadsheet or budgeting app",
              "Build in a 10-15% contingency fund for unexpected costs and changes",
              "Consider the timing of payments when setting your budget to manage cash flow"
            ]}
          />
        </TabsContent>

        <TabsContent value="cost-allocation">
          <GuidedNotePage
            title="Smart Cost Allocation & Prioritization"
            description="Allocate your budget effectively across all event categories"
            sections={[
              {
                title: "Venue and Location Budgeting",
                prompts: [
                  "What percentage of your budget should go to venue costs?",
                  "What venue-related expenses beyond the base rental should you budget for?",
                  "How will you evaluate venue value vs. cost?",
                  "What venue amenities can help you save money in other categories?",
                  "How do different venue types impact your overall budget allocation?"
                ],
                examples: [
                  "Typically 25-40% of total budget depending on what's included in venue package",
                  "Security deposits, overtime fees, additional equipment, parking fees, cleaning charges",
                  "Compare total cost per guest including all fees, not just base rental price",
                  "Built-in AV saves equipment rental, included catering kitchen reduces outside costs",
                  "All-inclusive venues cost more upfront but may reduce coordination and vendor costs"
                ]
              },
              {
                title: "Food and Beverage Budget Allocation",
                prompts: [
                  "What style of food service fits your budget and event type?",
                  "How will you budget for different meal service options?",
                  "What bar service level fits your budget and guest expectations?",
                  "How do dietary restrictions and special requests impact food costs?",
                  "What food-related expenses beyond the base catering should you budget for?"
                ],
                examples: [
                  "Cocktail reception $25-50/guest, buffet $35-75/guest, plated dinner $50-125/guest",
                  "Breakfast $15-25, lunch $25-45, dinner $40-100, cocktail party $30-60 per person",
                  "Cash bar $0, limited bar $8-15/guest, open bar premium $15-35/guest",
                  "Vegetarian/vegan adds $5-10/guest, kosher/halal adds $10-20/guest, allergy accommodations vary",
                  "Service charges 18-22%, gratuity, cake cutting fees, corkage fees, late-night snacks"
                ]
              },
              {
                title: "Entertainment and Services Budget",
                prompts: [
                  "What entertainment level fits your event style and budget?",
                  "How will you budget for photography and videography services?",
                  "What audio-visual equipment and services do you need to budget for?",
                  "How much should you allocate for transportation and logistics?",
                  "What professional services (planning, coordination) fit your budget?"
                ],
                examples: [
                  "DJ $800-2500, live band $2000-8000, solo musician $300-800, no entertainment $0",
                  "Photography $1500-5000, videography $2000-6000, both together often discounted 10-20%",
                  "Basic AV $500-1500, professional lighting $800-3000, photo booth $600-1200",
                  "Transportation $200-2000 depending on guest needs, uber/lyft credits, charter bus",
                  "Day-of coordinator $500-1500, partial planning $2000-5000, full planning $3000-10000+"
                ]
              },
              {
                title: "Decor and Detail Budgeting",
                prompts: [
                  "What decoration level matches your vision and budget?",
                  "How will you allocate funds between flowers, linens, and other decor?",
                  "What rentals do you need and how do they fit your budget?",
                  "How can you prioritize decoration spending for maximum visual impact?",
                  "What DIY opportunities can help stretch your decor budget?"
                ],
                examples: [
                  "Minimal decor 5-8% of budget, moderate 10-15%, elaborate 15-25% of total budget",
                  "Flowers 40% of decor budget, linens 20%, lighting 15%, centerpieces 15%, misc 10%",
                  "Table/chair rental $8-15/guest, linen rental $10-25/table, specialty items vary widely",
                  "Focus spending on high-impact areas: entrance, head table, ceremony backdrop, dance floor",
                  "DIY centerpieces, handmade signage, borrowed decor items, bulk flower purchasing"
                ]
              }
            ]}
            tips={[
              "Allocate your budget percentages before getting vendor quotes to stay disciplined",
              "Remember that food and beverage typically make up 40-60% of your total event budget",
              "Consider package deals that bundle services to potentially save 10-20% overall",
              "Prioritize guest experience over decor - people remember great food and entertainment",
              "Keep detailed records of how you allocate funds to learn for future event planning"
            ]}
          />
        </TabsContent>

        <TabsContent value="cost-management">
          <GuidedNotePage
            title="Cost Control & Money-Saving Strategies"
            description="Manage costs effectively and find savings opportunities"
            sections={[
              {
                title: "Vendor Negotiation Strategies",
                prompts: [
                  "How will you negotiate better pricing with event vendors?",
                  "What package deals or bundling opportunities can save money?",
                  "When and how should you ask vendors for discounts?",
                  "What vendor payment terms can help your cash flow?",
                  "How can you leverage multiple quotes to get better pricing?"
                ],
                examples: [
                  "Ask about off-season rates, weekday discounts, package deals, referral discounts",
                  "Photography + videography bundles, venue + catering packages, multi-service vendors",
                  "Book multiple services, pay in full upfront, book during vendor's slow season",
                  "Request extended payment plans, smaller deposits, payment schedules aligned with your income",
                  "Get 3+ quotes for major services, mention competing prices respectfully, ask vendors to match"
                ]
              },
              {
                title: "Strategic Cost-Cutting Decisions",
                prompts: [
                  "Where can you reduce costs without significantly impacting guest experience?",
                  "What services can you eliminate, downgrade, or handle differently?",
                  "How can you reduce guest count to stay within budget?",
                  "What timing or date changes could reduce your overall costs?",
                  "Which elements can you source more affordably without compromising quality?"
                ],
                examples: [
                  "Reduce floral arrangements, choose buffet over plated service, limit bar hours",
                  "Skip videography, reduce photography hours, use playlist instead of live music",
                  "Adults-only event, immediate family only, or streamline guest list to closest relationships",
                  "Sunday vs Saturday, morning vs evening, off-season dates, weekday events",
                  "Wholesale flowers vs florist, grocery store cake vs custom baker, digital vs printed invites"
                ]
              },
              {
                title: "DIY and Alternative Solutions",
                prompts: [
                  "What event elements can you reasonably handle yourself?",
                  "How much time and skill do your DIY projects realistically require?",
                  "What tools, materials, or help do you need for DIY elements?",
                  "How will you ensure DIY elements meet your quality standards?",
                  "What backup plans do you have if DIY projects don't work out?"
                ],
                examples: [
                  "Centerpieces, invitations, favors, basic decorations, playlist creation, simple signage",
                  "Centerpieces: 3-4 hours per 10 tables; Invitations: 6-8 hours for 100 invites including addressing",
                  "Craft supplies, printer access, assembly space, friends/family to help, tutorial videos",
                  "Make samples first, start projects early, have quality control person review everything",
                  "Budget set aside to purchase professionally if DIY fails, enlist reliable backup helpers"
                ]
              },
              {
                title: "Hidden Cost Prevention",
                prompts: [
                  "What hidden fees and extra charges should you watch out for?",
                  "How will you prevent cost overruns and scope creep?",
                  "What contract terms protect you from unexpected expenses?",
                  "How can you avoid last-minute upcharges and rush fees?",
                  "What questions should you ask to uncover all potential costs?"
                ],
                examples: [
                  "Service charges, gratuity requirements, overtime fees, equipment delivery, setup/breakdown costs",
                  "Get detailed written estimates, set change order procedures, require approval for extras over $X",
                  "Fixed pricing contracts, caps on additional charges, clear scope definitions, penalty clauses",
                  "Finalize details early, avoid rush orders, confirm everything in writing well in advance",
                  "Ask 'what's not included?', 'what would cause extra charges?', 'what are your payment terms?'"
                ]
              }
            ]}
            tips={[
              "Always ask vendors about package deals and off-season pricing before booking",
              "Track every expense in real-time to catch budget overruns before they become major problems",
              "Consider what your guests will actually notice and remember when making cost-cutting decisions",
              "Get all pricing and terms in writing to avoid surprises and hidden fees",
              "Start vendor negotiations early when you have more leverage and options"
            ]}
          />
        </TabsContent>

        <TabsContent value="financial-tracking">
          <GuidedNotePage
            title="Budget Tracking & Financial Management"
            description="Monitor expenses and stay on track financially throughout planning"
            sections={[
              {
                title: "Expense Tracking Systems",
                prompts: [
                  "What system will you use to track all event expenses?",
                  "How will you categorize and organize expense information?",
                  "What information should you record for each expense?",
                  "How often will you review and update your budget tracking?",
                  "Who else needs access to budget information and how will you share it?"
                ],
                examples: [
                  "Spreadsheet templates, budgeting apps like Mint/YNAB, event-specific tools like AllSeated",
                  "By vendor type, by payment date, by necessity level, by person responsible",
                  "Vendor name, service description, quote amount, deposit paid, balance due, payment date",
                  "Weekly reviews during peak planning, monthly during early planning, daily final month",
                  "Co-planner, parents/family contributors, wedding party with specific responsibilities"
                ]
              },
              {
                title: "Payment Schedule Management",
                prompts: [
                  "How will you schedule and track all vendor payments?",
                  "What system will you use to ensure payments are made on time?",
                  "How will you coordinate payments with your available funds?",
                  "What documentation will you keep for each payment made?",
                  "How will you handle payment disputes or issues with vendors?"
                ],
                examples: [
                  "Calendar reminders for due dates, automatic bank transfers, payment tracking spreadsheet",
                  "Phone calendar alerts, email reminders, physical calendar, financial app notifications",
                  "Align major payments with paychecks, spread payments across months, save incrementally",
                  "Receipts, bank statements, contracts, email confirmations, payment method records",
                  "Document issues in writing, reference contract terms, escalate through proper channels"
                ]
              },
              {
                title: "Budget Variance Analysis",
                prompts: [
                  "How will you handle it when expenses exceed your planned budget?",
                  "What triggers will prompt you to reassess your overall budget?",
                  "How will you decide what to cut when you need to reduce spending?",
                  "What approval process will you use for budget increases?",
                  "How will you communicate budget changes to other stakeholders?"
                ],
                examples: [
                  "First try to negotiate, then look for savings in other categories, finally consider budget increase",
                  "10% over budget in any category, 5% over total budget, multiple vendor price increases",
                  "Cut nice-to-haves first, reduce guest count second, find alternative vendors third",
                  "Discussion with co-planner/spouse, family meeting for contributed funds, formal approval needed",
                  "Regular updates to contributors, clear explanation of changes and impacts, revised budget shared"
                ]
              },
              {
                title: "Financial Documentation and Records",
                prompts: [
                  "What financial records should you maintain throughout event planning?",
                  "How will you organize receipts, contracts, and payment records?",
                  "What backup systems will you use to protect financial information?",
                  "How will you handle tax implications or business deductions?",
                  "What post-event financial analysis will help with future planning?"
                ],
                examples: [
                  "All contracts, receipts, bank statements, payment confirmations, deposit records, refund documentation",
                  "Physical folder system, digital folder structure, cloud storage, expense tracking app",
                  "Scan physical receipts, backup digital files, email copies to yourself, photo backups",
                  "Keep business event records separate, work with accountant for corporate events, track deductible expenses",
                  "Final cost analysis vs budget, cost per guest breakdown, vendor performance notes, lessons learned"
                ]
              }
            ]}
            tips={[
              "Set up your expense tracking system before making any purchases to capture everything",
              "Review your budget weekly during active planning to catch overruns early",
              "Keep all receipts and payment confirmations even for small purchases",
              "Use automatic payment reminders to avoid late fees and maintain vendor relationships",
              "Document any budget changes and the reasons to help with future event planning"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}