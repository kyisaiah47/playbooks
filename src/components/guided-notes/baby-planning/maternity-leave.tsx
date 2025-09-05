"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function MaternityLeave() {
  return (
    <GuidedNotePage
      title="Maternity Leave Planning"
      description="Navigate maternity leave policies and plan your time away from work effectively."
      sections={[
        {
          title: "Understanding Your Benefits",
          prompts: [
            "What maternity leave policies does your employer offer?",
            "How much paid vs unpaid leave are you entitled to?",
            "What state disability or family leave benefits apply to you?",
            "How will your health insurance coverage continue during leave?",
            "What paperwork and deadlines are required for leave approval?"
          ],
          examples: [
            "12 weeks FMLA, 6 weeks company paid leave, additional unpaid time",
            "6 weeks paid at 100%, 6 weeks at 60% through state disability",
            "California PDI for 6-8 weeks, then PFL for 6-8 weeks bonding time",
            "Employer continues premium payments, employee pays normal portion",
            "FMLA application 30 days prior, doctor certification forms"
          ]
        },
        {
          title: "Financial Planning",
          prompts: [
            "How will reduced income during leave affect your budget?",
            "What expenses will increase with a new baby?",
            "How can you prepare financially before leave begins?",
            "What benefits or assistance programs might help?",
            "How will you handle unexpected expenses during leave?"
          ],
          examples: [
            "Calculate 60% income scenario, adjust monthly budget accordingly",
            "Diapers, formula, childcare prep, medical copays increase by $500/month",
            "Build 3-month emergency fund, pay down debts, prepay bills",
            "WIC benefits, local diaper banks, family assistance programs",
            "Emergency fund, flexible spending account, family loan options"
          ]
        },
        {
          title: "Work Transition Planning",
          prompts: [
            "Who will cover your responsibilities while you&apos;re away?",
            "What projects need completion before leave starts?",
            "How will you document processes for your temporary replacement?",
            "What communication preferences do you have during leave?",
            "How will you plan your return to work transition?"
          ],
          examples: [
            "Train Sarah on client accounts, delegate daily tasks to team",
            "Finish Q3 report, hand off project management to supervisor",
            "Create detailed handover document, record training videos",
            "Emergency contact only, weekly status email, no daily calls",
            "Phased return option, work from home days, pump room access"
          ]
        },
        {
          title: "Personal & Family Considerations",
          prompts: [
            "How long do you want to take for leave and why?",
            "How will your partner&apos;s leave coordinate with yours?",
            "What support system will you have during leave?",
            "How will you maintain professional relationships during leave?",
            "What personal goals do you have for your time off?"
          ],
          examples: [
            "Take full 12 weeks to establish breastfeeding and bonding",
            "Partner takes 2 weeks initially, saves 4 weeks for later",
            "Mom helps first month, postpartum doula for 6 weeks",
            "Attend virtual team meetings monthly, coffee with colleagues",
            "Focus on recovery, establish routines, take parenting classes"
          ]
        }
      ]}
      tips={[
        "Start researching and planning maternity leave benefits by second trimester",
        "Document all your job responsibilities and create detailed handover materials",
        "Discuss expectations with your manager about communication during leave",
        "Build up savings and emergency fund before leave begins",
        "Understand your rights under FMLA and state family leave laws",
        "Keep copies of all leave paperwork and benefit documentation"
      ]}
    />
  )
}