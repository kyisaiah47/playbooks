"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RetirementGoals() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Retirement Goals & Vision</h1>
        <p className="text-muted-foreground">Define your retirement dreams and create specific, measurable goals.</p>
      </div>

      <Tabs defaultValue="lifestyle-vision" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="lifestyle-vision" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Lifestyle Vision</span>
            <span className="sm:hidden">Lifestyle</span>
          </TabsTrigger>
          <TabsTrigger value="financial-goals" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Financial Goals</span>
            <span className="sm:hidden">Financial</span>
          </TabsTrigger>
          <TabsTrigger value="timing-goals" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Timing Goals</span>
            <span className="sm:hidden">Timing</span>
          </TabsTrigger>
          <TabsTrigger value="legacy-goals" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Legacy Goals</span>
            <span className="sm:hidden">Legacy</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lifestyle-vision">
          <GuidedNotePage
            title="Retirement Lifestyle Vision"
            description="Envision your ideal retirement lifestyle and activities"
            sections={[
              {
                title: "Daily Life Vision",
                prompts: [
                  "What does your ideal day in retirement look like from morning to evening?",
                  "Where do you want to live during retirement and why?",
                  "What activities and hobbies do you want to pursue daily?",
                  "How active and mobile do you want to remain?",
                  "What kind of social interaction do you desire in retirement?"
                ],
                examples: [
                  "Reading, gardening, volunteering, travel planning, exercise, time with family",
                  "Stay in current home, downsize locally, move to warmer climate, be near grandchildren",
                  "Golf, painting, cooking, volunteering, learning new skills, home projects",
                  "Daily walks, fitness classes, travel, outdoor activities, maintaining independence",
                  "Regular family gatherings, community involvement, travel groups, hobby clubs"
                ]
              },
              {
                title: "Travel & Recreation Plans",
                prompts: [
                  "What travel experiences do you want to have in retirement?",
                  "How much time and money do you want to spend on travel annually?",
                  "What recreational activities or sports do you want to continue or start?",
                  "Do you want to have a vacation home or spend extended time elsewhere?",
                  "What learning or educational goals do you have for retirement?"
                ],
                examples: [
                  "Visit national parks, international travel, cruise adventures, visit family",
                  "$5,000-15,000 annually, 2-3 major trips plus local weekend getaways",
                  "Golf, tennis, hiking, cycling, swimming, joining recreational leagues",
                  "Beach condo, mountain cabin, RV travel, spending winters in warm climate",
                  "Learn new language, take college courses, master cooking, study history"
                ]
              },
              {
                title: "Work & Purpose",
                prompts: [
                  "Do you want to work part-time or consult during retirement?",
                  "What volunteer work or community service interests you?",
                  "How do you want to stay mentally stimulated and challenged?",
                  "What role do you want to play with family and grandchildren?",
                  "What gives your life meaning and how will you pursue it?"
                ],
                examples: [
                  "Part-time consulting, seasonal work, teaching, starting small business",
                  "Local charities, mentoring youth, environmental causes, political involvement",
                  "Reading, puzzles, games, learning new skills, staying current with technology",
                  "Active grandparent, family historian, hosting gatherings, teaching skills",
                  "Helping others, creative expression, spiritual growth, making a difference"
                ]
              },
              {
                title: "Health & Wellness Goals",
                prompts: [
                  "What health and fitness goals do you have for retirement?",
                  "How will you maintain your physical and mental health?",
                  "What healthcare considerations are important for your retirement location?",
                  "How do you want to prepare for potential health challenges?",
                  "What role will wellness activities play in your retirement?"
                ],
                examples: [
                  "Stay active, maintain healthy weight, prevent chronic conditions, age gracefully",
                  "Regular exercise, healthy diet, social connections, mental stimulation, routine checkups",
                  "Quality healthcare nearby, specialists available, aging-friendly community",
                  "Long-term care insurance, advance directives, emergency plans, home modifications",
                  "Yoga, meditation, walking groups, healthy cooking, stress management"
                ]
              }
            ]}
            tips={[
              "Write down your retirement vision in detail to make it feel real and achievable",
              "Consider both your dreams and practical needs when planning your lifestyle",
              "Think about how your goals might evolve as you age through different retirement phases",
              "Include your spouse/partner in vision planning to align your retirement dreams",
              "Review and adjust your retirement vision annually as your priorities change"
            ]}
          />
        </TabsContent>

        <TabsContent value="financial-goals">
          <GuidedNotePage
            title="Financial Goals & Targets"
            description="Set specific financial targets for your retirement security"
            sections={[
              {
                title: "Income Replacement Goals",
                prompts: [
                  "What percentage of your current income do you want to replace in retirement?",
                  "What will your essential expenses be in retirement?",
                  "How much additional income do you want for discretionary spending?",
                  "What inflation assumptions are you using for long-term planning?",
                  "How will your spending patterns change throughout retirement?"
                ],
                examples: [
                  "70-90% of current income, depending on mortgage payoff and lifestyle changes",
                  "Housing, food, healthcare, insurance, transportation, utilities - typically $40,000-80,000",
                  "Travel, hobbies, gifts, dining out, entertainment - typically $10,000-30,000 annually",
                  "2-3% annual inflation rate for conservative planning",
                  "Higher spending early in retirement, lower spending in later years, healthcare increases"
                ]
              },
              {
                title: "Savings & Asset Goals",
                prompts: [
                  "What total retirement savings amount are you targeting?",
                  "How much do you want in different types of retirement accounts?",
                  "What non-retirement investments do you want to maintain?",
                  "How important is leaving an inheritance versus spending your money?",
                  "What emergency fund do you want to maintain in retirement?"
                ],
                examples: [
                  "$500,000 to $2 million depending on income and lifestyle goals",
                  "401(k)/403(b), IRA, Roth IRA, taxable accounts for tax diversification",
                  "Brokerage account, real estate, collectibles for liquidity and growth",
                  "Balance between enjoying retirement and leaving legacy for family",
                  "6-12 months of expenses in cash for emergencies and market volatility"
                ]
              },
              {
                title: "Debt & Expense Goals",
                prompts: [
                  "What debts do you want to pay off before retirement?",
                  "Do you want to own your home outright when you retire?",
                  "How will you minimize taxes in retirement?",
                  "What major expenses do you anticipate in retirement?",
                  "How will you control healthcare costs in retirement?"
                ],
                examples: [
                  "Mortgage, credit cards, car loans, student loans - start with highest interest rates",
                  "Many prefer mortgage-free retirement for lower expenses and peace of mind",
                  "Roth conversions, tax-loss harvesting, asset location strategies",
                  "Home maintenance, car replacement, travel, healthcare, long-term care",
                  "Medicare supplement insurance, HSA savings, healthy lifestyle choices"
                ]
              },
              {
                title: "Investment & Growth Goals",
                prompts: [
                  "What investment return assumptions are you using for planning?",
                  "How much investment risk are you comfortable with in retirement?",
                  "What asset allocation strategy will you use?",
                  "How will you generate income from your investments?",
                  "What role will annuities or other guaranteed income play?"
                ],
                examples: [
                  "5-7% average annual returns over long term, accounting for inflation",
                  "More conservative allocation as you near and enter retirement",
                  "Age-based allocation: stocks = 100 minus your age, plus bonds and alternatives",
                  "Dividend-paying stocks, bond ladders, systematic withdrawals, bucket strategy",
                  "Immediate or deferred annuities for guaranteed income floor, not entire portfolio"
                ]
              }
            ]}
            tips={[
              "Use the 4% withdrawal rule as a starting point for savings targets",
              "Plan for 25-30 years of retirement when setting savings goals",
              "Consider inflation's impact on your purchasing power over time",
              "Diversify your retirement income sources for security and tax efficiency",
              "Review and adjust your financial goals annually based on market performance"
            ]}
          />
        </TabsContent>

        <TabsContent value="timing-goals">
          <GuidedNotePage
            title="Retirement Timing & Milestones"
            description="Plan your retirement timeline and key milestones"
            sections={[
              {
                title: "Retirement Age Planning",
                prompts: [
                  "At what age do you want to retire and why?",
                  "What factors will influence your retirement timing decision?",
                  "How will Social Security claiming strategies affect your timing?",
                  "What health insurance considerations affect your retirement age?",
                  "Do you want to retire all at once or phase into retirement?"
                ],
                examples: [
                  "Age 62-67 depending on financial readiness, health, and job satisfaction",
                  "Savings accumulation, health status, job market, family needs, market conditions",
                  "Claiming at 62 reduces benefits, waiting until 70 maximizes benefits",
                  "COBRA, ACA marketplace, spouse's coverage, Medicare eligibility at 65",
                  "Gradual reduction in hours, part-time work, consulting, or full retirement"
                ]
              },
              {
                title: "Pre-Retirement Milestones",
                prompts: [
                  "What financial milestones do you want to achieve each year until retirement?",
                  "When do you want to pay off major debts like your mortgage?",
                  "What age-based retirement account opportunities will you maximize?",
                  "When will you start detailed retirement planning and preparation?",
                  "What skills or certifications do you want to develop before retiring?"
                ],
                examples: [
                  "Increase savings by 1-2% annually, reach 50% of goal by age 50, 75% by 55",
                  "Pay off mortgage 5-10 years before retirement to reduce fixed expenses",
                  "Catch-up contributions at 50, maximize employer match, Roth conversions",
                  "Start serious planning 10-15 years before target retirement date",
                  "Develop hobbies into potential income sources, learn new technology"
                ]
              },
              {
                title: "Career Wind-Down Strategy",
                prompts: [
                  "How do you want to transition away from your current career?",
                  "What knowledge transfer or succession planning needs to happen?",
                  "When will you stop taking on new major responsibilities at work?",
                  "How will you maintain professional relationships into retirement?",
                  "What consulting or part-time work opportunities might you pursue?"
                ],
                examples: [
                  "Gradual reduction in responsibilities, mentoring replacement, phased retirement",
                  "Document processes, train successors, maintain good relationships for references",
                  "2-3 years before retirement, focus on completing current projects",
                  "Stay in touch with key colleagues, attend industry events, maintain network",
                  "Leverage expertise in current field, teach, write, or start small business"
                ]
              },
              {
                title: "Early Retirement Considerations",
                prompts: [
                  "If retiring before 65, how will you handle health insurance?",
                  "What are the implications of accessing retirement accounts early?",
                  "How much more do you need to save for early retirement?",
                  "What strategies will you use to bridge income until Social Security?",
                  "How will early retirement affect your Social Security benefits?"
                ],
                examples: [
                  "COBRA extension, ACA marketplace, spouse's plan, or early retiree health plans",
                  "401(k) loans, Rule of 55, IRA conversions, penalty exceptions for hardship",
                  "25-30 times annual expenses instead of typical retirement calculators",
                  "Taxable account withdrawals, Roth IRA contributions, part-time work",
                  "Fewer working years reduces benefit calculation, but can claim at 62"
                ]
              }
            ]}
            tips={[
              "Consider your full retirement age for Social Security when planning timing",
              "Factor in healthcare coverage gaps if retiring before Medicare eligibility",
              "Build flexibility into your retirement timeline for unexpected changes",
              "Start planning at least 10 years before your target retirement date",
              "Consider the emotional and social aspects of leaving your career, not just financial"
            ]}
          />
        </TabsContent>

        <TabsContent value="legacy-goals">
          <GuidedNotePage
            title="Legacy & Estate Planning Goals"
            description="Plan for the legacy you want to leave and estate considerations"
            sections={[
              {
                title: "Inheritance & Wealth Transfer",
                prompts: [
                  "How much money do you want to leave to your heirs?",
                  "What non-financial legacy do you want to leave your family?",
                  "How will you balance spending on yourself versus leaving inheritance?",
                  "What values and life lessons do you want to pass down?",
                  "How do you want to prepare your children for managing inherited wealth?"
                ],
                examples: [
                  "Specific dollar amounts, percentage of estate, or 'die with zero' philosophy",
                  "Family history, traditions, recipes, stories, photo albums, personal items",
                  "Enjoy retirement while ensuring family security, gradual gifting strategies",
                  "Work ethic, financial responsibility, generosity, education importance",
                  "Financial literacy education, gradual responsibility increases, family meetings"
                ]
              },
              {
                title: "Charitable Giving Goals",
                prompts: [
                  "What charitable causes are important to you in retirement?",
                  "How much do you want to give to charity during your lifetime versus after death?",
                  "What tax-efficient charitable giving strategies interest you?",
                  "Do you want to volunteer time in addition to financial contributions?",
                  "How will you research and evaluate charitable organizations?"
                ],
                examples: [
                  "Education, healthcare, religious organizations, environmental causes, local community",
                  "Annual giving during lifetime for tax benefits and immediate impact",
                  "Donor-advised funds, charitable remainder trusts, qualified charitable distributions",
                  "Board service, hands-on volunteering, mentoring, teaching, fundraising",
                  "Charity Navigator, GuideStar, personal visits, financial transparency, impact reports"
                ]
              },
              {
                title: "Estate Planning Essentials",
                prompts: [
                  "What estate planning documents do you need to create or update?",
                  "Who will serve as your executor, trustee, and power of attorney?",
                  "How will you minimize estate taxes and probate costs?",
                  "What specific bequests do you want to make in your will?",
                  "How often will you review and update your estate plan?"
                ],
                examples: [
                  "Will, trust, power of attorney, healthcare directive, HIPAA authorization",
                  "Reliable family member, trusted friend, or professional fiduciary",
                  "Annual gifting, life insurance, trusts, proper beneficiary designations",
                  "Family heirlooms, specific dollar amounts, charitable donations, personal items",
                  "Every 3-5 years or after major life events like marriage, birth, death, divorce"
                ]
              },
              {
                title: "Family Communication & Preparation",
                prompts: [
                  "How will you communicate your estate plans with your family?",
                  "What end-of-life preferences do you want to document and share?",
                  "Where will you store important documents and how will family access them?",
                  "What family traditions or rituals do you want to establish or continue?",
                  "How will you handle potential family conflicts over inheritance?"
                ],
                examples: [
                  "Family meetings, written explanations, discussions about values and decisions",
                  "Living will, DNR orders, funeral preferences, organ donation wishes",
                  "Safe deposit box, home safe, attorney's office, digital password manager",
                  "Annual reunions, holiday celebrations, story-telling, recipe sharing",
                  "Clear communication, equal treatment when possible, mediation if needed"
                ]
              }
            ]}
            tips={[
              "Update your estate plan every 3-5 years or after major life changes",
              "Communicate your wishes clearly to avoid family conflicts later",
              "Consider tax implications when planning charitable giving strategies",
              "Keep important documents organized and accessible to trusted family members",
              "Balance enjoying your retirement with leaving a meaningful legacy"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}