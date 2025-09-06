"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FinancialDisclosure() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financial Disclosure & Documentation</h1>
        <p className="text-muted-foreground">Gather and document all assets, debts, and financial information.</p>
      </div>

      <Tabs defaultValue="assets" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="assets" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Assets</span>
            <span className="sm:hidden">Assets</span>
          </TabsTrigger>
          <TabsTrigger value="debts" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Debts</span>
            <span className="sm:hidden">Debts</span>
          </TabsTrigger>
          <TabsTrigger value="income" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Income</span>
            <span className="sm:hidden">Income</span>
          </TabsTrigger>
          <TabsTrigger value="documentation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Documentation</span>
            <span className="sm:hidden">Docs</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="assets">
          <GuidedNotePage
            title="Asset Inventory and Valuation"
            description="Identify and value all marital and separate assets"
            sections={[
              {
                title: "Real Estate Assets",
                prompts: [
                  "What real estate do you and your spouse own together or separately?",
                  "What is the current market value of each property?",
                  "What are the outstanding mortgage balances on each property?",
                  "How will you determine accurate property values for divorce purposes?",
                  "What are the tax implications of keeping vs. selling real estate?"
                ],
                examples: [
                  "Primary residence, vacation homes, rental properties, undeveloped land",
                  "Recent appraisals, comparative market analysis, online estimates as starting point",
                  "Get payoff statements from all lenders, include any home equity loans",
                  "Professional appraisal, broker price opinions, recent sales of comparable properties",
                  "Capital gains tax on sale, property tax reassessment, mortgage qualification for buyout"
                ]
              },
              {
                title: "Financial Accounts",
                prompts: [
                  "What bank accounts, investment accounts, and retirement plans do you have?",
                  "Which accounts are individual vs. joint vs. in spouse's name only?",
                  "What are the current balances and how have they changed recently?",
                  "Are there any accounts your spouse might not know about?",
                  "What happens to retirement accounts in divorce?"
                ],
                examples: [
                  "Checking, savings, CDs, brokerage accounts, 401k, IRA, pension plans, HSAs",
                  "Document ownership and beneficiary designations for each account",
                  "Get statements for last 12 months to show trends and large transactions",
                  "Full disclosure required - hiding assets is illegal and costly if discovered",
                  "401k/IRA may need QDRO for division, pension plans have specific rules"
                ]
              },
              {
                title: "Personal Property",
                prompts: [
                  "What valuable personal property needs to be inventoried?",
                  "How will you determine the value of personal items?",
                  "What items have sentimental value beyond their monetary worth?",
                  "Are there any collections, art, or specialty items to consider?",
                  "How should household furnishings and everyday items be handled?"
                ],
                examples: [
                  "Vehicles, jewelry, electronics, furniture, tools, sporting equipment",
                  "Used/resale value, not replacement cost - check similar items online",
                  "Wedding rings, family heirlooms, photos, children's items",
                  "Art collections, wine, antiques, musical instruments, hobby equipment",
                  "Often divided by agreement rather than formal valuation due to low resale value"
                ]
              },
              {
                title: "Business and Other Assets",
                prompts: [
                  "Does either spouse own a business or professional practice?",
                  "Are there any unusual or complex assets to consider?",
                  "What intellectual property rights might have value?",
                  "Are there any trust funds or inheritance issues?",
                  "What about cryptocurrency or other digital assets?"
                ],
                examples: [
                  "Sole proprietorships, partnerships, corporations, professional practices",
                  "Stock options, deferred compensation, lawsuit settlements, insurance policies",
                  "Patents, copyrights, royalties, licensing agreements",
                  "Beneficiary rights, inherited property, trust distributions",
                  "Bitcoin, other cryptocurrencies, digital accounts, online businesses"
                ]
              }
            ]}
            tips={[
              "Get current statements for all accounts and recent valuations for major assets",
              "Consider hiring appraisers for valuable items like real estate, businesses, or collections",
              "Remember that marital assets are typically those acquired during marriage",
              "Some assets may need special handling like QDROs for retirement accounts",
              "Be thorough but proportionate - don't spend $5,000 to value $1,000 worth of furniture"
            ]}
          />
        </TabsContent>

        <TabsContent value="debts">
          <GuidedNotePage
            title="Debt Inventory and Responsibility"
            description="Document all debts and determine responsibility"
            sections={[
              {
                title: "Secured Debts",
                prompts: [
                  "What mortgages, car loans, and other secured debts do you have?",
                  "What are the current balances and monthly payments for each secured debt?",
                  "Who is legally responsible for each secured debt?",
                  "What happens to secured debts if you can't agree on who takes them?",
                  "How do secured debts affect your ability to keep related assets?"
                ],
                examples: [
                  "Home mortgages, car loans, boat loans, equipment financing, jewelry loans",
                  "Get payoff statements and payment history for all secured debts",
                  "Check loan documents for joint vs individual responsibility",
                  "Court may assign debt to whoever keeps the asset, or order sale",
                  "Must qualify for mortgage refinance to buy out spouse's share of house"
                ]
              },
              {
                title: "Credit Cards and Unsecured Debt",
                prompts: [
                  "What credit card debt exists in your name, spouse's name, or jointly?",
                  "What other unsecured debts need to be addressed?",
                  "When were these debts incurred and for what purposes?",
                  "How will you protect yourself from future debt your spouse might incur?",
                  "What happens if your spouse doesn't pay debts they're assigned?"
                ],
                examples: [
                  "Individual and joint credit cards, store cards, personal loans, lines of credit",
                  "Medical bills, student loans, family loans, business debts, tax debt",
                  "Distinguish between marital expenses vs individual purchases or gambling",
                  "Remove spouse as authorized user, freeze joint accounts if necessary",
                  "You may still be legally liable even if divorce decree assigns debt to spouse"
                ]
              },
              {
                title: "Tax Obligations",
                prompts: [
                  "Are there any unpaid income taxes, property taxes, or other tax debts?",
                  "How will you handle tax refunds or liabilities from joint returns?",
                  "What are the implications of filing jointly vs separately during divorce?",
                  "Are there any tax issues related to asset division or support payments?",
                  "Do you need professional tax advice for your divorce?"
                ],
                examples: [
                  "Federal and state income taxes, property taxes, business taxes, penalties",
                  "File injured spouse claim if needed, allocate refunds/liabilities appropriately",
                  "Joint filing may be better financially but creates shared liability",
                  "Asset transfers usually tax-free between spouses, alimony is taxable income",
                  "Complex situations need CPA advice: business ownership, significant assets, tax debt"
                ]
              },
              {
                title: "Hidden or Unknown Debts",
                prompts: [
                  "How can you discover debts your spouse might have hidden?",
                  "What steps should you take if you find undisclosed debts?",
                  "Are there any contingent liabilities to consider?",
                  "How do business debts affect your personal financial situation?",
                  "What ongoing debt monitoring should you do during divorce?"
                ],
                examples: [
                  "Credit reports, bank statements, mail screening, asset searches if suspicious",
                  "Inform your attorney immediately, may affect settlement negotiations",
                  "Cosigned loans, business guarantees, potential lawsuit liabilities",
                  "Personal guarantees on business loans, spouse's professional liability",
                  "Monitor credit reports monthly, watch for new accounts or inquiries"
                ]
              }
            ]}
            tips={[
              "Get credit reports for both spouses to identify all accounts and recent activity",
              "Distinguish between individual debts vs marital debts when determining responsibility",
              "Consider closing joint accounts to prevent new debt accumulation during divorce",
              "Remember that creditors aren't bound by divorce decrees - both spouses may remain liable",
              "Factor debt service into post-divorce budgeting and support calculations"
            ]}
          />
        </TabsContent>

        <TabsContent value="income">
          <GuidedNotePage
            title="Income Documentation and Analysis"
            description="Document all sources of income for support calculations"
            sections={[
              {
                title: "Employment Income",
                prompts: [
                  "What is your current gross and net income from employment?",
                  "How stable is your employment and what are your future prospects?",
                  "What benefits do you receive through your employer?",
                  "Are there any changes in employment or income expected?",
                  "What documentation do you need to prove your income?"
                ],
                examples: [
                  "Base salary, overtime, bonuses, commissions, tips, per diems",
                  "Job security, potential promotions, industry stability, education/training needs",
                  "Health insurance, retirement contributions, life insurance, flexible spending accounts",
                  "Job changes, retirement, disability, return to work after time off",
                  "Pay stubs, W-2s, employment contracts, recent tax returns, employer verification letter"
                ]
              },
              {
                title: "Self-Employment and Business Income",
                prompts: [
                  "What income do you receive from self-employment or business ownership?",
                  "How do you calculate your true income from business operations?",
                  "What business expenses are legitimate vs personal use?",
                  "How has your business income changed over the past few years?",
                  "What documentation proves your business income?"
                ],
                examples: [
                  "Net business income after legitimate expenses, draws from business accounts",
                  "Gross receipts minus actual business expenses, not accounting depreciation",
                  "Office rent vs home office personal use, business vs personal vehicle expenses",
                  "Look at 3-5 year trend, seasonal variations, economic factors",
                  "Tax returns with Schedule C or K-1, profit/loss statements, bank deposit records"
                ]
              },
              {
                title: "Investment and Other Income",
                prompts: [
                  "What income do you receive from investments, rentals, or other sources?",
                  "How consistent and predictable are these income sources?",
                  "What expenses are associated with generating this income?",
                  "How might divorce affect your investment or rental income?",
                  "Are there any one-time or unusual income items to consider?"
                ],
                examples: [
                  "Dividends, interest, rental income, royalties, pension distributions, Social Security",
                  "Dividends may vary, rental income depends on occupancy, interest rates fluctuate",
                  "Property management, maintenance, taxes, investment fees",
                  "Asset division may reduce investment income, rental property might be sold",
                  "Inheritance, lawsuit settlements, stock option exercises, retirement account distributions"
                ]
              },
              {
                title: "Income Capacity and Imputation",
                prompts: [
                  "What is your earning capacity if different from current income?",
                  "Are there reasons your income is artificially low or high right now?",
                  "What education, skills, or experience affect your earning potential?",
                  "How might the court view your income for support purposes?",
                  "What steps could increase your income in the future?"
                ],
                examples: [
                  "Underemployed by choice, recent graduate, return to workforce after child-rearing",
                  "Voluntary reduced hours, job change timing, temporary disability, seasonal work",
                  "Advanced degrees, professional licenses, specialized skills, work history",
                  "Court may impute income based on capacity rather than actual earnings",
                  "Additional training, job search, career change, return to previous field"
                ]
              }
            ]}
            tips={[
              "Gather at least 3 years of tax returns and recent pay stubs for income verification",
              "Be prepared to explain any significant changes in income over recent years",
              "Consider both spouses' income when evaluating support and asset division scenarios",
              "Document any temporary reductions in income due to job changes or other factors",
              "Think about post-divorce income changes and how they might affect your financial situation"
            ]}
          />
        </TabsContent>

        <TabsContent value="documentation">
          <GuidedNotePage
            title="Financial Documentation and Record Keeping"
            description="Organize and protect important financial documents"
            sections={[
              {
                title: "Essential Document Collection",
                prompts: [
                  "What financial documents do you need to gather for your attorney?",
                  "How far back should your financial records go?",
                  "Where are important documents currently stored?",
                  "What documents might be in your spouse's possession or control?",
                  "How will you organize documents for easy access during divorce?"
                ],
                examples: [
                  "Tax returns, bank statements, investment statements, pay stubs, property deeds, insurance policies",
                  "Generally 3-5 years, longer for real estate purchases or major financial events",
                  "Home safe, bank safety deposit box, attorney's office, online accounts, filing cabinets",
                  "Joint account statements, business records, insurance policies, investment documents",
                  "Chronological files, digital scans with cloud backup, summary spreadsheets"
                ]
              },
              {
                title: "Document Security and Access",
                prompts: [
                  "How will you protect important documents during the divorce process?",
                  "What documents should you copy before your spouse knows about the divorce?",
                  "How can you access documents that are in your spouse's control?",
                  "What online account access do you have and how will you preserve it?",
                  "How will you ensure you have backup copies of everything?"
                ],
                examples: [
                  "Copies in secure location, digital scans with encryption, attorney's vault",
                  "Tax returns, financial statements, property records, before passwords are changed",
                  "Discovery process through attorneys, subpoenas to financial institutions",
                  "Change passwords on individual accounts, document joint account access",
                  "Multiple copies in different locations, cloud storage with security, attorney copies"
                ]
              },
              {
                title: "Financial Discovery Process",
                prompts: [
                  "What financial information will you need to request from your spouse?",
                  "How does the formal discovery process work in your case?",
                  "What happens if your spouse doesn't provide required financial information?",
                  "Are there third parties you'll need to get financial information from?",
                  "How will you verify the accuracy and completeness of financial disclosures?"
                ],
                examples: [
                  "Account statements, tax returns, business records, loan applications, employment records",
                  "Interrogatories, document requests, depositions, subpoenas for records",
                  "Court can compel production, impose sanctions, draw negative inferences",
                  "Banks, employers, accountants, business partners, insurance companies",
                  "Cross-reference documents, look for discrepancies, follow paper trails, use forensic accountant if needed"
                ]
              },
              {
                title: "Expert Professional Help",
                prompts: [
                  "When do you need a forensic accountant or valuation expert?",
                  "What other financial professionals might help with your case?",
                  "How do you choose qualified experts for divorce purposes?",
                  "What will financial experts cost and is it worth the investment?",
                  "How do you work effectively with financial professionals during divorce?"
                ],
                examples: [
                  "Complex businesses, suspected hidden assets, high-net-worth cases, disputed income",
                  "Appraisers, CPAs, financial planners, actuaries for pension valuations",
                  "Divorce experience, professional credentials, local court familiarity, good references",
                  "Costs $150-500+ per hour, justified if assets at stake exceed costs significantly",
                  "Provide organized records, ask good questions, understand their role vs your attorney's"
                ]
              }
            ]}
            tips={[
              "Start gathering financial documents as soon as you decide to pursue divorce",
              "Make copies of everything and store them in a secure location your spouse can't access",
              "Be thorough with financial disclosure - hiding assets will backfire if discovered",
              "Consider using financial professionals for complex situations or high-value assets",
              "Keep detailed records of all financial transactions during the divorce process"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}