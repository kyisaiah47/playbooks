"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HealthcarePlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Healthcare Planning</h1>
        <p className="text-muted-foreground">Plan for healthcare needs and costs throughout retirement.</p>
      </div>

      <Tabs defaultValue="medicare-planning" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="medicare-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Medicare Planning</span>
            <span className="sm:hidden">Medicare</span>
          </TabsTrigger>
          <TabsTrigger value="healthcare-costs" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Healthcare Costs</span>
            <span className="sm:hidden">Costs</span>
          </TabsTrigger>
          <TabsTrigger value="insurance-strategies" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Insurance Strategies</span>
            <span className="sm:hidden">Insurance</span>
          </TabsTrigger>
          <TabsTrigger value="long-term-care" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Long-Term Care</span>
            <span className="sm:hidden">LTC</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="medicare-planning">
          <GuidedNotePage
            title="Medicare Planning & Enrollment"
            description="Navigate Medicare options and enrollment for comprehensive healthcare coverage"
            sections={[
              {
                title: "Medicare Basics & Eligibility",
                prompts: [
                  "What are the different parts of Medicare and what does each cover?",
                  "When are you eligible for Medicare and what are the enrollment deadlines?",
                  "What happens if you miss your initial enrollment period?",
                  "How does Medicare coordinate with employer health insurance?",
                  "What documentation do you need for Medicare enrollment?"
                ],
                examples: [
                  "Part A (hospital), Part B (medical), Part C (Advantage), Part D (prescription drugs)",
                  "Age 65 or disability after 24 months; 7-month initial enrollment period around 65th birthday",
                  "Late enrollment penalties for Part B and D that continue for life",
                  "Employer coverage may delay enrollment without penalty if creditable coverage",
                  "Birth certificate, Social Security card, current insurance information"
                ]
              },
              {
                title: "Medicare Supplement vs. Advantage Plans",
                prompts: [
                  "What's the difference between Medicare Supplement and Medicare Advantage plans?",
                  "Which option provides better coverage and value for your situation?",
                  "How do costs compare between Supplement and Advantage plans?",
                  "What are the trade-offs in provider networks and coverage areas?",
                  "Can you switch between Supplement and Advantage plans later?"
                ],
                examples: [
                  "Supplement works with Original Medicare, Advantage replaces Original Medicare",
                  "Supplement offers more provider choice, Advantage often includes extras like dental",
                  "Supplement has higher premiums but predictable costs, Advantage has lower premiums but variable costs",
                  "Supplement works nationwide, Advantage plans are regional with provider networks",
                  "Limited ability to switch from Advantage to Supplement due to underwriting"
                ]
              },
              {
                title: "Prescription Drug Coverage",
                prompts: [
                  "How does Medicare Part D prescription drug coverage work?",
                  "What factors should you consider when choosing a Part D plan?",
                  "How do you avoid the Part D late enrollment penalty?",
                  "What is the Medicare prescription drug 'donut hole' and how does it affect costs?",
                  "How often can you change your Part D plan?"
                ],
                examples: [
                  "Standalone Part D with Original Medicare, or included in Medicare Advantage",
                  "Formulary coverage of your drugs, pharmacy networks, monthly premiums, deductibles",
                  "Enroll when first eligible unless you have creditable prescription coverage",
                  "Coverage gap where you pay more until reaching catastrophic coverage threshold",
                  "Annual Open Enrollment October 15 - December 7, some special enrollment situations"
                ]
              },
              {
                title: "Medicare Costs & Budgeting",
                prompts: [
                  "What are the standard Medicare premiums, deductibles, and copays?",
                  "How do Medicare premiums adjust based on your income (IRMAA)?",
                  "What additional costs should you budget for that Medicare doesn't cover?",
                  "How can you get help paying for Medicare costs if you have limited income?",
                  "What strategies can help you manage Medicare premium surcharges?"
                ],
                examples: [
                  "Part B premium ~$175/month, Part A deductible ~$1,600, various copays and coinsurance",
                  "Higher earners pay surcharges based on income from 2 years prior",
                  "Dental, vision, hearing aids, long-term care not covered by Original Medicare",
                  "Medicare Savings Programs, Extra Help for Part D, Medicaid for dual eligibles",
                  "Manage income in years before Medicare, consider Roth conversions timing"
                ]
              }
            ]}
            tips={[
              "Enroll in Medicare during your initial enrollment period to avoid lifetime penalties",
              "Compare Medicare Supplement plans annually - benefits are standardized but prices vary",
              "Keep creditable prescription coverage to avoid Part D penalties",
              "Consider Medicare Advantage if you want bundled coverage and don't mind networks",
              "Plan for Medicare premium surcharges if you're a higher-income retiree"
            ]}
          />
        </TabsContent>

        <TabsContent value="healthcare-costs">
          <GuidedNotePage
            title="Healthcare Cost Planning"
            description="Estimate and budget for healthcare expenses throughout retirement"
            sections={[
              {
                title: "Retirement Healthcare Cost Estimates",
                prompts: [
                  "How much should you budget for healthcare costs in retirement?",
                  "What healthcare expenses typically increase with age?",
                  "How do healthcare costs vary by geographic location?",
                  "What's the difference between Medicare-covered and out-of-pocket healthcare costs?",
                  "How should you factor inflation into healthcare cost planning?"
                ],
                examples: [
                  "Average retiree may spend $300,000+ on healthcare over retirement",
                  "Prescription drugs, specialist visits, medical equipment, home care services",
                  "Urban vs. rural costs, regional Medicare Advantage availability, provider networks",
                  "Medicare covers ~60% of costs, remainder is premiums, deductibles, uncovered services",
                  "Healthcare inflation typically exceeds general inflation by 2-3% annually"
                ]
              },
              {
                title: "Health Savings Account Strategy",
                prompts: [
                  "How can you maximize HSA benefits for retirement healthcare costs?",
                  "What HSA contribution and investment strategies work best for retirement?",
                  "How do HSA withdrawal rules change after age 65?",
                  "Should you pay current medical expenses from HSA or save for retirement?",
                  "How does HSA planning coordinate with other retirement accounts?"
                ],
                examples: [
                  "Triple tax advantage: deductible contributions, tax-free growth, tax-free medical withdrawals",
                  "Max out contributions annually, invest for long-term growth like retirement account",
                  "No penalty for non-medical withdrawals after 65, just ordinary income tax",
                  "Pay current expenses out-of-pocket if possible, let HSA grow for retirement",
                  "Use HSA first for medical expenses in retirement before touching other accounts"
                ]
              },
              {
                title: "Managing Healthcare Expenses",
                prompts: [
                  "What strategies can help control healthcare costs in retirement?",
                  "How can you shop for better prices on medical services and prescriptions?",
                  "What preventive care should you prioritize to avoid larger future costs?",
                  "How can you appeal denied insurance claims or negotiate medical bills?",
                  "What resources are available to help manage prescription drug costs?"
                ],
                examples: [
                  "Stay healthy, use generic drugs, choose in-network providers, compare prices",
                  "Price transparency tools, GoodRx for prescriptions, medical tourism for procedures",
                  "Annual checkups, screenings, vaccinations, dental/vision care, healthy lifestyle",
                  "Understand appeals process, negotiate payment plans, ask for financial hardship discounts",
                  "Medicare Part D Extra Help, pharmaceutical assistance programs, generic alternatives"
                ]
              },
              {
                title: "Healthcare Financial Planning",
                prompts: [
                  "How should healthcare costs factor into your retirement savings goals?",
                  "What portion of your retirement budget should be allocated to healthcare?",
                  "How can you create a separate healthcare emergency fund?",
                  "Should you consider relocating to reduce healthcare costs in retirement?",
                  "How will you adjust your healthcare spending as your needs change with age?"
                ],
                examples: [
                  "Add 15-20% to retirement savings goals to account for healthcare costs",
                  "15-20% of retirement budget for healthcare, increasing with age",
                  "Separate savings account or HSA specifically for healthcare emergencies",
                  "Consider states with lower healthcare costs, better Medicare Advantage options",
                  "Budget more for later retirement years when healthcare needs typically increase"
                ]
              }
            ]}
            tips={[
              "Healthcare costs are often underestimated in retirement planning - budget conservatively",
              "Maximize HSA contributions if eligible - it's the best retirement account for medical expenses",
              "Stay healthy to control costs - invest in preventive care and healthy lifestyle",
              "Shop around for medical services and prescriptions - prices vary significantly",
              "Plan for increasing healthcare costs as you age through retirement"
            ]}
          />
        </TabsContent>

        <TabsContent value="insurance-strategies">
          <GuidedNotePage
            title="Insurance Strategies for Retirement"
            description="Evaluate insurance needs and strategies for retirement security"
            sections={[
              {
                title: "Health Insurance Bridge Planning",
                prompts: [
                  "What health insurance options exist if you retire before age 65?",
                  "How long can you continue employer health coverage through COBRA?",
                  "What are the pros and cons of ACA marketplace health plans for early retirees?",
                  "Should you consider short-term or association health plans?",
                  "How can you estimate the cost of health insurance during early retirement?"
                ],
                examples: [
                  "COBRA, ACA marketplace, spouse's employer plan, early retiree health benefits",
                  "18-36 months depending on qualifying event and plan specifics",
                  "ACA plans may be cheaper than COBRA, income-based subsidies available",
                  "Short-term plans are cheaper but provide limited coverage and protections",
                  "$800-2000/month for individual coverage, varies by age, location, coverage level"
                ]
              },
              {
                title: "Life Insurance in Retirement",
                prompts: [
                  "Do you still need life insurance in retirement?",
                  "What factors determine your life insurance needs as you age?",
                  "Should you keep or convert employer life insurance benefits?",
                  "What are the pros and cons of permanent vs. term life insurance for retirees?",
                  "How can life insurance be used for estate planning purposes?"
                ],
                examples: [
                  "Need decreases as dependents become independent and debts are paid off",
                  "Spouse's financial security, outstanding debts, estate tax planning, final expenses",
                  "Employer coverage often expensive to continue, may have conversion options",
                  "Term is cheaper but temporary, permanent provides lifelong coverage with cash value",
                  "Provide liquidity for estate taxes, equalize inheritances, provide tax-free income"
                ]
              },
              {
                title: "Disability & Income Protection",
                prompts: [
                  "Do you need disability insurance coverage in retirement?",
                  "What income protection strategies should you consider for early retirement?",
                  "How does Social Security disability coordinate with retirement planning?",
                  "What happens to employer disability benefits when you retire?",
                  "Should you consider critical illness or accident insurance?"
                ],
                examples: [
                  "Less needed in retirement when not dependent on earned income",
                  "Adequate savings, spouse's income, part-time work capabilities",
                  "SSDI converts to retirement benefits at full retirement age",
                  "Coverage typically ends with employment, may have conversion options",
                  "Can help with unexpected medical costs but evaluate against comprehensive coverage"
                ]
              },
              {
                title: "Property & Liability Insurance",
                prompts: [
                  "How should your homeowners/renters insurance change in retirement?",
                  "What auto insurance considerations exist for retirees?",
                  "Should you increase your umbrella liability coverage in retirement?",
                  "What insurance considerations exist if you relocate in retirement?",
                  "How can you save on property and liability insurance as a retiree?"
                ],
                examples: [
                  "May need less personal property coverage, consider increased liability limits",
                  "Lower mileage discounts, defensive driving courses, may need less coverage if car paid off",
                  "Higher net worth may warrant increased liability protection",
                  "Research insurance costs in new locations, different weather/crime risks",
                  "Bundle policies, increase deductibles, shop around annually, take advantage of senior discounts"
                ]
              }
            ]}
            tips={[
              "Review all insurance needs annually as your situation changes in retirement",
              "Don't cancel life insurance abruptly - analyze your actual coverage needs first",
              "COBRA can be expensive but may bridge you to Medicare or other coverage",
              "Consider increasing liability coverage as your assets grow in retirement",
              "Shop for insurance regularly - rates and needs change significantly over time"
            ]}
          />
        </TabsContent>

        <TabsContent value="long-term-care">
          <GuidedNotePage
            title="Long-Term Care Planning"
            description="Plan for potential long-term care needs and costs in retirement"
            sections={[
              {
                title: "Long-Term Care Needs Assessment",
                prompts: [
                  "What are the chances you'll need long-term care during retirement?",
                  "What types of long-term care services might you need?",
                  "How much does long-term care cost in your area?",
                  "What factors increase or decrease your likelihood of needing long-term care?",
                  "How long might you need long-term care services?"
                ],
                examples: [
                  "70% chance of needing some long-term care, women more likely than men",
                  "Home care, adult day services, assisted living, nursing home care",
                  "$50,000-100,000+ annually depending on location and level of care needed",
                  "Health status, family history, lifestyle choices, gender, age",
                  "Average 3 years for men, 3.7 years for women, but highly variable"
                ]
              },
              {
                title: "Long-Term Care Funding Options",
                prompts: [
                  "What are your options for paying for long-term care?",
                  "How much will Medicare and health insurance cover for long-term care?",
                  "What is Medicaid's role in long-term care coverage?",
                  "Should you purchase long-term care insurance?",
                  "What self-funding strategies exist for long-term care costs?"
                ],
                examples: [
                  "Self-pay, long-term care insurance, Medicaid, family support, hybrid life/LTC policies",
                  "Medicare covers short-term skilled care only, not custodial long-term care",
                  "Medicaid covers long-term care for those who qualify financially",
                  "Traditional LTC insurance, hybrid life/LTC, hybrid annuity/LTC policies",
                  "Dedicated savings account, HSA funds, home equity, retirement account distributions"
                ]
              },
              {
                title: "Long-Term Care Insurance",
                prompts: [
                  "What does long-term care insurance cover and what are the typical costs?",
                  "What features should you look for in a long-term care insurance policy?",
                  "At what age should you consider purchasing long-term care insurance?",
                  "What alternatives exist to traditional long-term care insurance?",
                  "How do you evaluate whether long-term care insurance is worth the cost?"
                ],
                examples: [
                  "$2,000-5,000 annual premiums for meaningful coverage, covers home/facility care",
                  "Inflation protection, elimination period, benefit period, daily/monthly benefit amount",
                  "Age 50-65 optimal, harder to qualify and more expensive as you age",
                  "Hybrid life insurance with LTC rider, annuities with LTC benefits",
                  "Compare premiums to self-insurance costs, consider family history and risk tolerance"
                ]
              },
              {
                title: "Long-Term Care Planning Strategies",
                prompts: [
                  "How can you plan for long-term care while maintaining independence?",
                  "What home modifications might help you age in place?",
                  "How should you involve family members in long-term care planning?",
                  "What legal documents are important for long-term care planning?",
                  "How can you research and evaluate long-term care options in your area?"
                ],
                examples: [
                  "Healthy lifestyle, home modifications, care coordination services, technology aids",
                  "Grab bars, ramps, wider doorways, accessible bathrooms, emergency alert systems",
                  "Discuss preferences, expectations, financial arrangements, care coordination roles",
                  "Powers of attorney, healthcare directives, HIPAA authorizations, care preferences",
                  "Visit facilities, research agencies, check ratings and reviews, understand costs and services"
                ]
              }
            ]}
            tips={[
              "Start long-term care planning early - options decrease and costs increase with age",
              "Consider a combination of strategies rather than relying on just one funding source",
              "Involve family members in planning discussions to align expectations",
              "Research long-term care costs in your area to understand the financial impact",
              "Don't assume Medicare will cover long-term care - it provides very limited coverage"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}