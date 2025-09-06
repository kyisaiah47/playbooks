"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function EstatePlanning() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Estate Planning</h1>
        <p className="text-muted-foreground">Protect your assets and ensure your wishes are carried out.</p>
      </div>

      <Tabs defaultValue="essential-documents" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="essential-documents" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Essential Documents</span>
            <span className="sm:hidden">Documents</span>
          </TabsTrigger>
          <TabsTrigger value="will-trust-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Will & Trust Planning</span>
            <span className="sm:hidden">Will/Trust</span>
          </TabsTrigger>
          <TabsTrigger value="tax-strategies" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Tax Strategies</span>
            <span className="sm:hidden">Tax</span>
          </TabsTrigger>
          <TabsTrigger value="beneficiary-planning" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Beneficiary Planning</span>
            <span className="sm:hidden">Beneficiary</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="essential-documents">
          <GuidedNotePage
            title="Essential Estate Planning Documents"
            description="Create and maintain the fundamental documents for estate planning"
            sections={[
              {
                title: "Will & Testament",
                prompts: [
                  "What assets and property should be addressed in your will?",
                  "Who do you want to name as executor of your estate?",
                  "What specific bequests do you want to make to individuals or charities?",
                  "How do you want to distribute the remainder of your estate?",
                  "What guardianship arrangements are needed if you have minor children?"
                ],
                examples: [
                  "Real estate, personal property, bank accounts, investments not covered by beneficiary designations",
                  "Reliable family member, trusted friend, or professional executor/attorney",
                  "Family heirlooms, specific dollar amounts, charitable donations, personal items with sentimental value",
                  "Equal shares to children, percentage allocations, contingent beneficiaries",
                  "Name primary and backup guardians for minor children, consider financial arrangements"
                ]
              },
              {
                title: "Powers of Attorney",
                prompts: [
                  "Who should you name as your financial power of attorney?",
                  "What powers and limitations should your financial POA have?",
                  "Should you have a separate healthcare power of attorney?",
                  "When should your powers of attorney become effective?",
                  "What safeguards and oversight should you include?"
                ],
                examples: [
                  "Trusted spouse, adult child, or family member who understands your values",
                  "Full authority vs. limited powers, real estate transactions, investment decisions",
                  "Healthcare POA for medical decisions when you can't make them yourself",
                  "Immediately effective vs. springing (effective only when incapacitated)",
                  "Require co-agents, accounting requirements, regular reporting to family"
                ]
              },
              {
                title: "Healthcare Directives",
                prompts: [
                  "What are your preferences for end-of-life medical care?",
                  "In what circumstances would you want life-sustaining treatment?",
                  "What are your wishes regarding organ donation and autopsy?",
                  "How should your healthcare proxy make decisions on your behalf?",
                  "What comfort care and quality of life preferences do you have?"
                ],
                examples: [
                  "Preferences for artificial life support, feeding tubes, resuscitation attempts",
                  "Terminal illness, permanent unconsciousness, dementia progression scenarios",
                  "Organ donation registration, tissue donation, autopsy for medical research",
                  "Follow your stated wishes, consider your values, consult with family",
                  "Pain management, home vs. hospital care, spiritual care preferences"
                ]
              },
              {
                title: "Document Management & Updates",
                prompts: [
                  "Where will you store your original estate planning documents?",
                  "Who should have copies of your estate planning documents?",
                  "How often should you review and update your estate plan?",
                  "What life events should trigger estate plan updates?",
                  "How will you ensure your family can access important documents?"
                ],
                examples: [
                  "Safe deposit box, home safe, attorney's office, fireproof filing cabinet",
                  "Attorney, executor, healthcare proxy, close family members",
                  "Review every 3-5 years or after major life events",
                  "Marriage, divorce, birth, death, major asset changes, relocation",
                  "Document location list, key holder instructions, digital access information"
                ]
              }
            ]}
            tips={[
              "Review and update your estate plan every 3-5 years or after major life changes",
              "Make sure your executor and healthcare proxy know their responsibilities",
              "Store original documents safely but ensure trusted people can access them",
              "Don't use your safe deposit box as the only storage location for your will",
              "Consider hiring an estate planning attorney for complex situations"
            ]}
          />
        </TabsContent>

        <TabsContent value="will-trust-planning">
          <GuidedNotePage
            title="Will & Trust Planning Strategies"
            description="Understand when and how to use wills and trusts in estate planning"
            sections={[
              {
                title: "Will vs. Trust Decision",
                prompts: [
                  "Do you need a will, trust, or both for your estate planning goals?",
                  "What are the advantages and disadvantages of wills vs. trusts?",
                  "What factors determine whether a trust makes sense for your situation?",
                  "How do wills and trusts work together in a comprehensive estate plan?",
                  "What are the costs of creating and maintaining wills vs. trusts?"
                ],
                examples: [
                  "Most people need a will, trusts beneficial for larger estates or specific goals",
                  "Wills: simpler/cheaper but go through probate; Trusts: avoid probate but more complex",
                  "Estate size, privacy concerns, minor children, incapacity planning, tax considerations",
                  "Will covers items not in trust, trust handles major assets and ongoing management",
                  "Wills: $300-1500; Trusts: $1500-5000+ plus ongoing administration costs"
                ]
              },
              {
                title: "Revocable Living Trust Benefits",
                prompts: [
                  "What assets should you consider transferring to a revocable living trust?",
                  "How does a revocable trust help with incapacity planning?",
                  "What are the privacy benefits of using a revocable trust?",
                  "How does trust administration work after your death?",
                  "What are the limitations and downsides of revocable trusts?"
                ],
                examples: [
                  "Real estate, investment accounts, business interests - leave IRAs/401ks with beneficiary designations",
                  "Successor trustee can manage assets immediately without court involvement",
                  "Trust assets avoid public probate process, keeping family finances private",
                  "Successor trustee distributes assets according to trust terms without court supervision",
                  "Doesn't save taxes, requires ongoing maintenance, more complex than simple will"
                ]
              },
              {
                title: "Irrevocable Trust Strategies",
                prompts: [
                  "When might you consider irrevocable trusts for estate planning?",
                  "What are the tax benefits and drawbacks of irrevocable trusts?",
                  "How do irrevocable life insurance trusts (ILITs) work?",
                  "What charitable trust strategies might benefit your estate plan?",
                  "How do you balance control with tax benefits in irrevocable trust planning?"
                ],
                examples: [
                  "Estate tax reduction, asset protection, charitable giving, generation-skipping",
                  "Remove assets from estate for tax purposes but lose control and access",
                  "Own life insurance outside estate, provide liquidity while reducing estate taxes",
                  "Charitable remainder trusts for income, charitable lead trusts for family transfers",
                  "Give up control to achieve tax benefits - requires careful consideration"
                ]
              },
              {
                title: "Trust Administration & Management",
                prompts: [
                  "Who should serve as trustee for your trusts?",
                  "What are the responsibilities and duties of a trustee?",
                  "How should trust distributions be structured?",
                  "What provisions should you include for changing circumstances?",
                  "How can you provide guidance to trustees for discretionary decisions?"
                ],
                examples: [
                  "Individual trustee (family), corporate trustee (bank), or combination",
                  "Invest assets, make distributions, file tax returns, maintain records, communicate with beneficiaries",
                  "Mandatory distributions, discretionary distributions, staged distributions by age/milestones",
                  "Power to substitute trustees, distribution committee, trust protector provisions",
                  "Statement of wishes, family mission statement, regular family meetings"
                ]
              }
            ]}
            tips={[
              "Consider a revocable living trust if you own real estate in multiple states",
              "Don't create a trust without funding it - transfer assets to the trust",
              "Choose trustees carefully - they'll be managing assets and making important decisions",
              "Build flexibility into your trust provisions to handle changing circumstances",
              "Work with an experienced estate planning attorney for trust planning"
            ]}
          />
        </TabsContent>

        <TabsContent value="tax-strategies">
          <GuidedNotePage
            title="Estate Tax Planning Strategies"
            description="Minimize estate taxes and maximize wealth transfer to beneficiaries"
            sections={[
              {
                title: "Federal Estate Tax Planning",
                prompts: [
                  "Will your estate be subject to federal estate taxes?",
                  "How can you use the annual gift tax exclusion to reduce your taxable estate?",
                  "What strategies can help you maximize your lifetime estate tax exemption?",
                  "Should you consider generation-skipping transfer tax planning?",
                  "How can you use valuation discounts to reduce estate taxes?"
                ],
                examples: [
                  "Federal exemption ~$13 million per person, but may decrease in future",
                  "$18,000 per recipient per year (2024), unlimited between spouses if both US citizens",
                  "Annual gifting, charitable giving, grantor trusts, family limited partnerships",
                  "Direct transfers to grandchildren may trigger additional tax, plan carefully",
                  "Family business interests, real estate partnerships, minority interest discounts"
                ]
              },
              {
                title: "State Estate Tax Considerations",
                prompts: [
                  "Does your state impose estate or inheritance taxes?",
                  "How do state estate tax exemptions compare to federal exemptions?",
                  "Should you consider relocating to a state with no estate tax?",
                  "How do state estate taxes affect your overall estate planning strategy?",
                  "What planning strategies work for states with lower exemptions?"
                ],
                examples: [
                  "About 12 states have estate taxes, 6 have inheritance taxes",
                  "State exemptions often much lower than federal - $1-5 million range",
                  "Consider total tax burden, cost of living, family proximity, not just estate taxes",
                  "May need more aggressive planning for state taxes even if not federal",
                  "Annual gifting programs, charitable giving, irrevocable trusts more important"
                ]
              },
              {
                title: "Charitable Giving Strategies",
                prompts: [
                  "What charitable giving strategies can reduce your estate taxes?",
                  "How do charitable remainder trusts work for estate planning?",
                  "Should you consider donor-advised funds for charitable giving?",
                  "What are the benefits of charitable lead trusts for wealthy families?",
                  "How can you balance charitable giving with family wealth transfer goals?"
                ],
                examples: [
                  "Outright gifts, charitable remainder trusts, donor-advised funds, private foundations",
                  "Provide income for life, remainder to charity, get income tax deduction",
                  "Immediate tax deduction, grow funds tax-free, distribute to charities over time",
                  "Gift asset to trust, income goes to charity, remainder to family at reduced gift tax",
                  "Set aside percentage for charity, use tax savings to benefit family"
                ]
              },
              {
                title: "Advanced Tax Planning Techniques",
                prompts: [
                  "Should you consider grantor trusts for estate tax planning?",
                  "How can family limited partnerships help with estate planning?",
                  "What role does life insurance play in estate tax planning?",
                  "Should you consider qualified personal residence trusts (QPRTs)?",
                  "How can you use installment sales for estate planning benefits?"
                ],
                examples: [
                  "Grantor pays income taxes, allowing trust assets to grow tax-free",
                  "Transfer business/real estate at discounted values, maintain control",
                  "Provide liquidity for estate taxes, wealth transfer outside of estate",
                  "Transfer residence at reduced gift value, continue living there for term",
                  "Sell assets to family members over time, freeze estate value"
                ]
              }
            ]}
            tips={[
              "Start estate tax planning early - many strategies take time to be effective",
              "Use annual gift tax exclusions consistently to reduce your taxable estate",
              "Consider both federal and state estate tax implications in your planning",
              "Don't let tax planning override your primary goals for family and philanthropy",
              "Work with experienced tax and estate planning professionals for complex strategies"
            ]}
          />
        </TabsContent>

        <TabsContent value="beneficiary-planning">
          <GuidedNotePage
            title="Beneficiary Designation Planning"
            description="Optimize beneficiary designations across all accounts and policies"
            sections={[
              {
                title: "Retirement Account Beneficiaries",
                prompts: [
                  "Who should you name as beneficiaries for your retirement accounts?",
                  "Should you name primary and contingent beneficiaries for each account?",
                  "How do spouse vs. non-spouse beneficiary rules differ for retirement accounts?",
                  "Should you consider naming a trust as beneficiary of retirement accounts?",
                  "How often should you review and update retirement account beneficiaries?"
                ],
                examples: [
                  "Spouse for tax benefits, children as contingent, avoid naming estate",
                  "Primary gets assets if alive, contingent gets assets if primary dies first",
                  "Spouses can roll over to own IRA, non-spouses must take distributions over 10 years",
                  "Trust beneficial for minor children or beneficiaries who need asset protection",
                  "Review after major life events: marriage, divorce, birth, death"
                ]
              },
              {
                title: "Life Insurance Beneficiaries",
                prompts: [
                  "How should you structure beneficiary designations for life insurance policies?",
                  "Should you name per stirpes or per capita beneficiaries?",
                  "What happens if your primary beneficiary dies before you?",
                  "Should you consider naming a trust as life insurance beneficiary?",
                  "How can you provide flexibility in life insurance beneficiary planning?"
                ],
                examples: [
                  "Specific individuals or percentages, avoid naming your estate as beneficiary",
                  "Per stirpes: children's shares go to their children; per capita: divide equally among survivors",
                  "Proceeds go to contingent beneficiaries, or to estate if none named",
                  "Trust provides control over distributions, protection for minor or spendthrift beneficiaries",
                  "Give trustee discretion, allow beneficiary substitutions, include broad powers"
                ]
              },
              {
                title: "Investment Account Beneficiaries",
                prompts: [
                  "Should you use transfer-on-death (TOD) designations for investment accounts?",
                  "How do beneficiary designations coordinate with your will and trust?",
                  "What are the advantages of TOD designations over will provisions?",
                  "Should you name multiple beneficiaries for investment accounts?",
                  "How do you handle beneficiary designations for jointly-owned accounts?"
                ],
                examples: [
                  "TOD designations avoid probate and provide immediate access to funds",
                  "Beneficiary designations override will provisions - ensure coordination",
                  "TOD avoids probate, faster access, maintains privacy, lower costs",
                  "Multiple beneficiaries with specific percentages, include contingent beneficiaries",
                  "Joint accounts typically pass to surviving owner, then to named beneficiaries"
                ]
              },
              {
                title: "Beneficiary Planning Strategy",
                prompts: [
                  "How should you coordinate beneficiary designations across all your accounts?",
                  "What contingency planning should you include in beneficiary designations?",
                  "How can you provide for minor children through beneficiary planning?",
                  "Should you include specific instructions or restrictions for beneficiaries?",
                  "How will you communicate your beneficiary decisions to family members?"
                ],
                examples: [
                  "Ensure consistent approach across all accounts, avoid conflicting designations",
                  "Name multiple levels of contingent beneficiaries, include charity as final contingent",
                  "Name trust as beneficiary, designate guardian, include age-based distribution provisions",
                  "Letter of instruction, trust provisions, specific use restrictions",
                  "Family meetings, written explanations, copy of beneficiary forms for reference"
                ]
              }
            ]}
            tips={[
              "Beneficiary designations override your will - keep them updated and coordinated",
              "Name contingent beneficiaries in case your primary beneficiaries predecease you",
              "Never name your estate as beneficiary unless absolutely necessary",
              "Review beneficiary designations after every major life event",
              "Keep copies of beneficiary designation forms with your estate planning documents"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}