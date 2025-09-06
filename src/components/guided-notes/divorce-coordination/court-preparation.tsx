"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CourtPreparation() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Court Preparation & Litigation</h1>
        <p className="text-muted-foreground">Prepare effectively for court hearings and trial proceedings.</p>
      </div>

      <Tabs defaultValue="court-process" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="court-process" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Court Process</span>
            <span className="sm:hidden">Process</span>
          </TabsTrigger>
          <TabsTrigger value="testimony" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Testimony</span>
            <span className="sm:hidden">Testify</span>
          </TabsTrigger>
          <TabsTrigger value="evidence" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Evidence</span>
            <span className="sm:hidden">Evidence</span>
          </TabsTrigger>
          <TabsTrigger value="trial-day" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Trial Day</span>
            <span className="sm:hidden">Trial</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="court-process">
          <GuidedNotePage
            title="Understanding Court Procedures"
            description="Learn how divorce court proceedings work"
            sections={[
              {
                title: "Court System Overview",
                prompts: [
                  "How does the divorce court process work in your jurisdiction?",
                  "What types of hearings might occur during your divorce?",
                  "Who are the key players in your court proceedings?",
                  "What are the typical timelines for court proceedings?",
                  "How do court rules and procedures affect your case?"
                ],
                examples: [
                  "Filing, service, response, discovery, settlement conferences, trial",
                  "Temporary hearings, status conferences, settlement conferences, trial, post-judgment hearings",
                  "Judge, court clerk, bailiff, court reporter, your attorney, opposing attorney",
                  "Temporary hearings: 30-60 days, trial: 6-18 months from filing",
                  "Deadlines, filing requirements, evidence rules, courtroom etiquette"
                ]
              },
              {
                title: "Temporary Hearings",
                prompts: [
                  "What issues are decided at temporary hearings?",
                  "How should you prepare for temporary hearing testimony?",
                  "What evidence is most important for temporary orders?",
                  "How do temporary orders affect the final divorce outcome?",
                  "What happens if you violate temporary court orders?"
                ],
                examples: [
                  "Temporary custody, support, use of marital residence, restraining orders",
                  "Brief, factual testimony about immediate needs and circumstances",
                  "Income documentation, custody schedules, safety concerns, immediate needs",
                  "Set precedent and status quo that often influences final orders",
                  "Contempt of court, fines, jail time, negative impact on final case"
                ]
              },
              {
                title: "Discovery and Pre-Trial",
                prompts: [
                  "What is the discovery process and how does it work?",
                  "What information will you need to provide to the court?",
                  "How do depositions and interrogatories work?",
                  "What happens during pre-trial conferences?",
                  "How can you use discovery to strengthen your case?"
                ],
                examples: [
                  "Formal process to obtain information and documents from other party",
                  "Financial affidavits, asset disclosures, parenting plans, witness lists",
                  "Sworn testimony outside court, written questions requiring written answers",
                  "Judge encourages settlement, sets trial dates, resolves procedural issues",
                  "Uncover hidden assets, establish credibility issues, gather supporting evidence"
                ]
              },
              {
                title: "Settlement vs Trial",
                prompts: [
                  "What are the advantages and disadvantages of settling vs going to trial?",
                  "How do you know when to accept a settlement offer?",
                  "What happens if settlement negotiations fail?",
                  "How do you prepare for the possibility of trial?",
                  "What factors should influence your decision to settle or proceed to trial?"
                ],
                examples: [
                  "Settlement: control, cost savings, privacy; Trial: neutral decision, precedent, discovery",
                  "Compare offer to likely trial outcome, consider legal costs and emotional toll",
                  "Case proceeds to trial, final preparations, witness preparation, evidence organization",
                  "Witness preparation, exhibit organization, trial strategy with attorney",
                  "Strength of case, cost of trial, emotional impact, children's interests, time factors"
                ]
              }
            ]}
            tips={[
              "Follow all court orders precisely - violations can seriously damage your case",
              "Dress professionally and behave respectfully in all court appearances",
              "Be prepared but don't be afraid to ask your attorney questions about procedures",
              "Keep detailed records of compliance with court orders and any violations by your spouse",
              "Consider settlement seriously - trials are expensive, time-consuming, and unpredictable"
            ]}
          />
        </TabsContent>

        <TabsContent value="testimony">
          <GuidedNotePage
            title="Testifying Effectively in Court"
            description="Prepare to give clear, credible testimony"
            sections={[
              {
                title: "Testimony Preparation",
                prompts: [
                  "How should you prepare for testifying in court?",
                  "What topics will you likely need to testify about?",
                  "How do you organize your thoughts and memories for testimony?",
                  "What documents should you review before testifying?",
                  "How do you practice testimony without over-rehearsing?"
                ],
                examples: [
                  "Review case facts, practice with attorney, organize key documents, manage emotions",
                  "Income, assets, debts, parenting capabilities, marital history, future plans",
                  "Timeline of events, key facts, supporting documents, honest assessment of weaknesses",
                  "Financial records, correspondence, photographs, calendars, medical records",
                  "Know your story but sound natural, prepare for likely questions, practice staying calm"
                ]
              },
              {
                title: "Direct Examination",
                prompts: [
                  "What is direct examination and how does it work?",
                  "How should you answer your attorney's questions?",
                  "What tone and demeanor should you maintain during direct examination?",
                  "How do you handle sensitive or embarrassing topics?",
                  "What if you don't remember specific details or dates?"
                ],
                examples: [
                  "Your attorney asks questions to present your side of the story",
                  "Listen carefully, answer only what's asked, speak clearly and loud enough",
                  "Professional, honest, composed but not robotic, show appropriate emotion",
                  "Be honest, don't minimize if asked directly, focus on facts not blame",
                  "Say 'I don't recall' if you truly don't remember, don't guess or make up answers"
                ]
              },
              {
                title: "Cross-Examination",
                prompts: [
                  "What is cross-examination and how should you prepare for it?",
                  "How do you handle aggressive or hostile questioning?",
                  "What tactics might opposing counsel use during cross-examination?",
                  "How do you maintain credibility under cross-examination?",
                  "What if you're asked about prior inconsistent statements?"
                ],
                examples: [
                  "Opposing attorney tries to undermine your testimony or credibility",
                  "Stay calm, listen to entire question, answer only what's asked, don't argue",
                  "Leading questions, rapid-fire questions, attempts to anger or confuse you",
                  "Tell the truth, admit mistakes if caught, don't be defensive or argumentative",
                  "Acknowledge if you misspoke earlier, explain any differences honestly"
                ]
              },
              {
                title: "Courtroom Behavior",
                prompts: [
                  "How should you conduct yourself in the courtroom?",
                  "What do you do when you're not testifying?",
                  "How should you address the judge and attorneys?",
                  "What about body language and non-verbal communication?",
                  "How do you handle emotional moments during testimony?"
                ],
                examples: [
                  "Professional demeanor, respectful to all parties, follow courtroom rules",
                  "Listen quietly, take notes, avoid reactions to opposing testimony",
                  "'Your Honor' for judge, 'counsel' or name for attorneys, stand when judge enters",
                  "Make eye contact, sit up straight, avoid fidgeting or distracting gestures",
                  "Take a moment to compose yourself, it's okay to show appropriate emotion"
                ]
              }
            ]}
            tips={[
              "Tell the truth - credibility is your most important asset in court",
              "Listen carefully to questions and answer only what's asked",
              "Don't argue with opposing counsel or try to explain unless asked",
              "If you don't understand a question, it's okay to ask for clarification",
              "Practice testimony with your attorney but remain natural and authentic"
            ]}
          />
        </TabsContent>

        <TabsContent value="evidence">
          <GuidedNotePage
            title="Evidence and Documentation"
            description="Organize and present evidence effectively"
            sections={[
              {
                title: "Types of Evidence",
                prompts: [
                  "What types of evidence are important in divorce cases?",
                  "How do you organize documents for court presentation?",
                  "What makes evidence admissible in court?",
                  "How do you authenticate documents and records?",
                  "What about digital evidence like emails, texts, and social media?"
                ],
                examples: [
                  "Financial records, custody-related documents, photographs, witness testimony, expert reports",
                  "Chronological binders, exhibit tabs, copies for all parties and court",
                  "Relevant to case issues, authentic, reliable source, proper foundation laid",
                  "Witness testimony about how document was created or obtained",
                  "Screenshots, printed emails, social media posts - need to establish authenticity"
                ]
              },
              {
                title: "Financial Evidence",
                prompts: [
                  "What financial documents are most important for your case?",
                  "How do you present complex financial information clearly?",
                  "What about evidence of hidden or dissipated assets?",
                  "How do you handle business valuation evidence?",
                  "What role do expert witnesses play in presenting financial evidence?"
                ],
                examples: [
                  "Tax returns, bank statements, investment accounts, property appraisals, business records",
                  "Summary charts, timelines, before-and-after comparisons, expert testimony",
                  "Bank transfers, lifestyle vs reported income, asset searches, forensic accounting",
                  "Professional appraisals, financial statements, tax returns, comparables",
                  "Appraisers, forensic accountants, business valuators provide expert opinions"
                ]
              },
              {
                title: "Custody-Related Evidence",
                prompts: [
                  "What evidence supports your position on child custody?",
                  "How do you document your parenting involvement and capabilities?",
                  "What about evidence of your spouse's parenting issues?",
                  "How do you present evidence about children's needs and preferences?",
                  "What role do custody evaluations play in presenting evidence?"
                ],
                examples: [
                  "School records, medical records, activity participation, parenting time logs",
                  "Photos, calendars, school communications, medical appointments, activity involvement",
                  "Documented incidents, police reports, school concerns, medical issues",
                  "Guardian ad litem reports, child therapist input, school counselor observations",
                  "Professional evaluation with recommendations, psychological testing, home studies"
                ]
              },
              {
                title: "Witness Testimony",
                prompts: [
                  "What witnesses might testify in your case?",
                  "How do you prepare witnesses for testimony?",
                  "What makes witness testimony effective?",
                  "How do you handle hostile or reluctant witnesses?",
                  "What about expert witnesses vs lay witnesses?"
                ],
                examples: [
                  "Friends, family, coworkers, teachers, doctors, neighbors who observed relevant facts",
                  "Review facts they observed, practice testimony, explain court procedures",
                  "First-hand observations, specific examples, consistent with other evidence",
                  "Subpoena if necessary, prepare for difficult cross-examination",
                  "Experts give opinions based on expertise, lay witnesses testify about observations"
                ]
              }
            ]}
            tips={[
              "Start organizing evidence early in the case - don't wait until trial",
              "Make sure all evidence is relevant to the legal issues in your case",
              "Keep original documents safe and use copies for working files",
              "Work with your attorney to understand evidence rules and requirements",
              "Quality of evidence matters more than quantity - focus on your strongest points"
            ]}
          />
        </TabsContent>

        <TabsContent value="trial-day">
          <GuidedNotePage
            title="Trial Day Preparation and Performance"
            description="Navigate the trial day successfully"
            sections={[
              {
                title: "Trial Day Logistics",
                prompts: [
                  "How should you prepare for trial day practically?",
                  "What should you bring to court on trial day?",
                  "How early should you arrive and what happens when you get there?",
                  "What about meals, breaks, and managing trial day stress?",
                  "How do you handle media attention or public interest in your case?"
                ],
                examples: [
                  "Good night's sleep, professional clothing, review key documents, arrange childcare",
                  "Documents, exhibits, notes, contact information, snacks, phone charger",
                  "Arrive 30 minutes early, check in with clerk, final preparation with attorney",
                  "Light breakfast, stay hydrated, use breaks wisely, manage anxiety techniques",
                  "Avoid media, limit social media, ask attorney about any publicity concerns"
                ]
              },
              {
                title: "Trial Proceedings",
                prompts: [
                  "How does a divorce trial typically proceed?",
                  "What happens during opening statements?",
                  "How long might your trial last?",
                  "What is your role when your attorney is presenting the case?",
                  "How do you handle unexpected developments during trial?"
                ],
                examples: [
                  "Opening statements, plaintiff's case, defendant's case, closing arguments, decision",
                  "Attorney outlines what evidence will prove, not argument but preview",
                  "Simple cases: 1 day, complex cases: several days over weeks or months",
                  "Take notes, help locate documents, provide factual clarification as needed",
                  "Stay calm, trust your attorney's judgment, don't react visibly to surprises"
                ]
              },
              {
                title: "Judge's Decision Process",
                prompts: [
                  "How do judges make decisions in divorce trials?",
                  "What factors will the judge consider most heavily?",
                  "When will you receive the judge's decision?",
                  "What happens if you disagree with the judge's ruling?",
                  "How are trial decisions implemented and enforced?"
                ],
                examples: [
                  "Apply law to facts presented, consider credibility of witnesses, weigh evidence",
                  "Legal standards for custody, property division, support; credibility of parties",
                  "Some decide immediately, others take days or weeks to issue written decision",
                  "Appeal process available but expensive, limited grounds, high bar for success",
                  "Formal judgment entered, becomes legally binding, enforcement mechanisms available"
                ]
              },
              {
                title: "Post-Trial Considerations",
                prompts: [
                  "What happens immediately after trial concludes?",
                  "How do you handle the emotional aftermath of trial?",
                  "What steps are needed to implement the court's decision?",
                  "How do you transition to post-divorce life after trial?",
                  "What ongoing legal obligations exist after trial?"
                ],
                examples: [
                  "Await decision if not immediate, debrief with attorney, begin implementation planning",
                  "Allow time to process, seek emotional support, focus on moving forward",
                  "Asset transfers, custody orders, support payments, document modifications",
                  "Establish new routines, update legal documents, focus on healing and rebuilding",
                  "Comply with court orders, modification procedures if circumstances change"
                ]
              }
            ]}
            tips={[
              "Trust in your preparation - you and your attorney have worked hard to present your case",
              "Stay professional and respectful regardless of how the trial unfolds",
              "Remember that the judge's decision is based on law and evidence, not emotions",
              "Focus on the future and moving forward rather than dwelling on trial outcomes",
              "Have realistic expectations - no one gets everything they want in a divorce trial"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}