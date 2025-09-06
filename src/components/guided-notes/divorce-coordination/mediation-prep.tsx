"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MediationPrep() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mediation Preparation & Strategy</h1>
        <p className="text-muted-foreground">Prepare effectively for mediation sessions to reach fair agreements.</p>
      </div>

      <Tabs defaultValue="mediation-basics" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="mediation-basics" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Mediation Basics</span>
            <span className="sm:hidden">Basics</span>
          </TabsTrigger>
          <TabsTrigger value="preparation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Preparation</span>
            <span className="sm:hidden">Prep</span>
          </TabsTrigger>
          <TabsTrigger value="negotiation" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Negotiation</span>
            <span className="sm:hidden">Negotiate</span>
          </TabsTrigger>
          <TabsTrigger value="outcomes" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Outcomes</span>
            <span className="sm:hidden">Results</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mediation-basics">
          <GuidedNotePage
            title="Understanding Mediation Process"
            description="Learn how mediation works and what to expect"
            sections={[
              {
                title: "Mediation Overview",
                prompts: [
                  "What is mediation and how does it differ from litigation?",
                  "When is mediation most effective in divorce cases?",
                  "What role does the mediator play in your divorce?",
                  "How do attorneys participate in mediation?",
                  "What are the advantages and disadvantages of mediation?"
                ],
                examples: [
                  "Neutral third party helps negotiate agreements vs judge making decisions",
                  "When both parties willing to negotiate, communicate reasonably, have similar power",
                  "Facilitator, not decision-maker; helps communication and generates options",
                  "May attend sessions, provide legal advice, review agreements before signing",
                  "Pros: cost, speed, privacy, control; Cons: requires cooperation, no binding decisions"
                ]
              },
              {
                title: "Types of Mediation",
                prompts: [
                  "What different mediation formats are available?",
                  "Should you choose evaluative or facilitative mediation?",
                  "What about attorney-assisted vs attorney-absent mediation?",
                  "How do you select the right mediator for your case?",
                  "What credentials should your mediator have?"
                ],
                examples: [
                  "Traditional mediation, online mediation, shuttle mediation, co-mediation",
                  "Evaluative gives opinions on likely outcomes, facilitative focuses on communication",
                  "Attorneys present for advice vs parties negotiate without attorney presence",
                  "Experience with similar cases, communication style, availability, cost",
                  "Family law experience, mediation training, professional credentials, good references"
                ]
              },
              {
                title: "Mediation Ground Rules",
                prompts: [
                  "What ground rules should be established for mediation?",
                  "How will confidentiality be maintained during mediation?",
                  "What happens to information disclosed in mediation?",
                  "How will decisions be made during mediation sessions?",
                  "What if mediation doesn't result in full agreement?"
                ],
                examples: [
                  "Respectful communication, no interrupting, focus on interests not positions",
                  "Mediation communications generally not admissible in court later",
                  "Financial disclosures may be used later, but negotiation positions protected",
                  "Both parties must agree, no decisions imposed by mediator",
                  "Partial agreements can be preserved, remaining issues go to court"
                ]
              },
              {
                title: "Timing and Logistics",
                prompts: [
                  "When in the divorce process should mediation occur?",
                  "How long does mediation typically take?",
                  "How should mediation sessions be structured?",
                  "What materials and documents are needed for mediation?",
                  "How do you handle emotional or difficult topics in mediation?"
                ],
                examples: [
                  "After initial emotions settle but before positions harden too much",
                  "Simple cases: 2-4 sessions, complex cases: 6-12+ sessions over several months",
                  "2-4 hour sessions, breaks as needed, homework between sessions",
                  "Financial disclosures, appraisals, tax returns, proposed parenting plans",
                  "Take breaks, separate sessions if needed, focus on children's needs"
                ]
              }
            ]}
            tips={[
              "Choose a mediator experienced in family law and divorce cases",
              "Prepare thoroughly but remain open to creative solutions",
              "Focus on interests and needs rather than rigid positions",
              "Take breaks when emotions run high or discussions become unproductive",
              "Remember that you can stop mediation and go to court if it's not working"
            ]}
          />
        </TabsContent>

        <TabsContent value="preparation">
          <GuidedNotePage
            title="Preparing for Mediation Sessions"
            description="Get organized and develop your mediation strategy"
            sections={[
              {
                title: "Document and Information Gathering",
                prompts: [
                  "What financial documents should you bring to mediation?",
                  "How should you organize your information for mediation?",
                  "What personal information about children and family needs to be prepared?",
                  "How do you prepare summaries of complex financial situations?",
                  "What questions do you want to ask during mediation?"
                ],
                examples: [
                  "Income statements, asset valuations, debt summaries, tax returns, budgets",
                  "Binders with tabs, digital files, summary sheets, chronological organization",
                  "Children's schedules, school information, medical needs, extracurricular activities",
                  "One-page asset/debt summary, cash flow analysis, property division scenarios",
                  "Clarification on spouse's income, plans for specific assets, parenting concerns"
                ]
              },
              {
                title: "Goal Setting and Priorities",
                prompts: [
                  "What are your top three priorities for the mediation outcome?",
                  "What would constitute a successful mediation for you?",
                  "What are you willing to compromise on to reach agreement?",
                  "What are your absolute deal-breakers or non-negotiables?",
                  "How do you balance short-term needs vs long-term goals?"
                ],
                examples: [
                  "Child custody arrangement, keeping the house, fair share of retirement savings",
                  "Agreements that serve children's best interests and provide financial security",
                  "Specific assets, timing of payments, some lifestyle adjustments",
                  "Anything harmful to children, unfair support arrangements, giving up core assets",
                  "Immediate housing needs vs long-term financial security, children's stability vs flexibility"
                ]
              },
              {
                title: "Understanding Your Spouse's Position",
                prompts: [
                  "What do you think your spouse's main priorities and concerns are?",
                  "Where might you have common ground or shared interests?",
                  "What are your spouse's likely negotiating strategies?",
                  "How can you address your spouse's concerns while meeting your needs?",
                  "What creative solutions might appeal to both of you?"
                ],
                examples: [
                  "Business control, time with children, financial security, avoiding court",
                  "Children's well-being, reasonable living standards, privacy, cost control",
                  "Delay tactics, emotional arguments, unrealistic demands, or collaborative approach",
                  "Structured payments, shared custody, business buyout terms, housing solutions",
                  "House sale with delayed move, shared business ownership, graduated support"
                ]
              },
              {
                title: "Legal Strategy Coordination",
                prompts: [
                  "How will you coordinate with your attorney during mediation?",
                  "What legal advice do you need before mediation starts?",
                  "How will you handle legal questions that arise during mediation?",
                  "What authority do you have to make agreements in mediation?",
                  "How will tentative agreements be documented and reviewed?"
                ],
                examples: [
                  "Pre-mediation strategy sessions, breaks for consultation, post-session debriefs",
                  "Rights and obligations, likely court outcomes, negotiation ranges, deal-breakers",
                  "Recess to consult attorney, or address in follow-up session",
                  "Understand limits, need attorney approval for major decisions",
                  "Written summaries, attorney review before signing, formal agreement drafting"
                ]
              }
            ]}
            tips={[
              "Prepare thoroughly but stay flexible - be ready to consider new options",
              "Bring a positive, problem-solving attitude to mediation sessions",
              "Focus on your interests and needs, not just your initial positions",
              "Prepare financially realistic proposals and backup options",
              "Consider the total package, not just individual issues in isolation"
            ]}
          />
        </TabsContent>

        <TabsContent value="negotiation">
          <GuidedNotePage
            title="Effective Mediation Negotiation"
            description="Develop strategies for productive mediation discussions"
            sections={[
              {
                title: "Communication Strategies",
                prompts: [
                  "How should you communicate effectively during mediation?",
                  "What language and tone will be most productive?",
                  "How do you express your needs without creating defensiveness?",
                  "How should you respond to emotional outbursts or accusations?",
                  "What active listening techniques will help in mediation?"
                ],
                examples: [
                  "'I' statements, focus on interests not positions, ask open-ended questions",
                  "Respectful, business-like, problem-solving rather than blaming or accusatory",
                  "'I need to feel secure about housing' vs 'You're trying to take everything'",
                  "Stay calm, don't take bait, redirect to productive topics, take breaks if needed",
                  "Paraphrase what you heard, ask clarifying questions, acknowledge concerns"
                ]
              },
              {
                title: "Negotiation Techniques",
                prompts: [
                  "What negotiation tactics work best in mediation?",
                  "How do you make compelling offers and proposals?",
                  "When should you make concessions and when should you hold firm?",
                  "How do you handle deadlocks or impasses?",
                  "What role does timing play in mediation negotiations?"
                ],
                examples: [
                  "Interest-based bargaining, principled negotiation, collaborative problem-solving",
                  "Package deals, conditional offers, options that meet both parties' core needs",
                  "Trade-offs that cost you little but benefit spouse, hold firm on priorities",
                  "Take breaks, try different approaches, separate into individual sessions",
                  "Don't rush decisions, allow processing time, but maintain momentum"
                ]
              },
              {
                title: "Problem-Solving Approaches",
                prompts: [
                  "How do you generate creative solutions to difficult issues?",
                  "What brainstorming techniques work in mediation?",
                  "How do you evaluate different options fairly?",
                  "What criteria should you use to judge potential agreements?",
                  "How do you build on partial agreements to reach full settlement?"
                ],
                examples: [
                  "Think outside traditional division, consider timing and structure variations",
                  "List all options before evaluating, build on each other's ideas, 'what if' scenarios",
                  "Cost-benefit analysis, long-term implications, impact on children, practical feasibility",
                  "Meets core needs, financially sustainable, serves children's interests, implementable",
                  "Start with easy issues, use agreements as building blocks, package related issues"
                ]
              },
              {
                title: "Managing Difficult Situations",
                prompts: [
                  "How do you handle power imbalances in mediation?",
                  "What if your spouse is being unreasonable or uncooperative?",
                  "How do you deal with intimidation or manipulation attempts?",
                  "When should you consider ending mediation?",
                  "How do you maintain your emotional equilibrium during difficult sessions?"
                ],
                examples: [
                  "Insist on equal participation, ask mediator to address imbalances, bring attorney",
                  "Stay focused on your goals, don't engage in arguments, ask mediator to intervene",
                  "Call it out calmly, ask for break, insist on respectful communication",
                  "When safety concerns, complete lack of progress, bad faith participation",
                  "Take breaks, focus on long-term goals, remember you control your responses"
                ]
              }
            ]}
            tips={[
              "Stay focused on problem-solving rather than winning or being right",
              "Look for win-win solutions that meet both parties' underlying interests",
              "Don't be afraid to ask for breaks when discussions become unproductive",
              "Consider the mediator as a resource for generating options and managing process",
              "Remember that partial agreements are valuable even if you don't settle everything"
            ]}
          />
        </TabsContent>

        <TabsContent value="outcomes">
          <GuidedNotePage
            title="Mediation Outcomes and Follow-up"
            description="Handle mediation results and implement agreements"
            sections={[
              {
                title: "Evaluating Settlement Offers",
                prompts: [
                  "How do you evaluate whether a proposed settlement is fair?",
                  "What should you do if you need time to consider an offer?",
                  "How do you compare mediation offers to likely court outcomes?",
                  "What questions should you ask about implementation of agreements?",
                  "When should you accept a settlement vs continue negotiating?"
                ],
                examples: [
                  "Compare to your goals, likely court outcome, total financial impact, children's interests",
                  "Ask for recess, take documents home, consult with attorney before deciding",
                  "Consider legal fees, time, stress, unpredictability of trial outcomes",
                  "Timeline, deadlines, what happens if someone doesn't comply, modification procedures",
                  "Accept if meets most important needs, reject if fundamentally unfair or unworkable"
                ]
              },
              {
                title: "Documenting Agreements",
                prompts: [
                  "How should mediation agreements be documented?",
                  "What level of detail should be included in settlement agreements?",
                  "Who drafts the formal divorce documents after mediation?",
                  "How do you ensure agreements are legally enforceable?",
                  "What review process should occur before signing final agreements?"
                ],
                examples: [
                  "Written summary signed at mediation, followed by formal legal documents",
                  "Specific enough to avoid future disputes, implementation steps and deadlines",
                  "Attorneys draft formal settlement agreement and divorce decree",
                  "Court approval, proper legal language, compliance with state law requirements",
                  "Attorney review, time to consider, opportunity to ask questions and clarify"
                ]
              },
              {
                title: "Partial Agreements",
                prompts: [
                  "What if mediation results in only partial agreement?",
                  "How do you handle unresolved issues after mediation?",
                  "Can you return to mediation for remaining issues?",
                  "How do partial agreements affect litigation of remaining issues?",
                  "What happens to confidential mediation discussions if you go to court?"
                ],
                examples: [
                  "Settle agreed issues, litigate remaining disputes, often saves time and money",
                  "Continue mediation, switch mediators, proceed to court on remaining issues",
                  "Yes, either with same or different mediator, may have better success second time",
                  "Narrow issues for trial, may influence judge's view of reasonableness",
                  "Generally protected from disclosure, but partial agreements become binding"
                ]
              },
              {
                title: "Implementation and Follow-up",
                prompts: [
                  "What steps are needed to implement mediation agreements?",
                  "How do you handle compliance issues with mediated agreements?",
                  "What ongoing communication is needed between parties?",
                  "How do you modify mediated agreements if circumstances change?",
                  "What resources exist for post-mediation support and guidance?"
                ],
                examples: [
                  "File documents with court, transfer assets, establish new accounts, update beneficiaries",
                  "Direct communication first, return to mediation, enforcement through court",
                  "Child-related decisions, financial obligations, property transfers, schedule changes",
                  "Mutual agreement best, mediation for disputes, court modification if necessary",
                  "Co-parenting classes, financial advisors, family counselors, legal follow-up"
                ]
              }
            ]}
            tips={[
              "Don't rush into agreements - take time to understand all implications",
              "Get legal review of any settlement before signing final agreements",
              "Build in mechanisms for future dispute resolution and agreement modifications",
              "Focus on creating workable long-term solutions, not just ending the mediation",
              "Remember that mediation agreements must still comply with legal requirements and court approval"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}