"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function ClosingProcess() {
  return (
    <GuidedNotePage
      title="Closing Process"
      description="Navigate the final steps of your home purchase from contract to keys."
      sections={[
        {
          title: "Pre-Closing Preparation",
          prompts: [
            "What documents do you need to bring to closing?",
            "How should you prepare financially for closing day?",
            "What final inspections or walkthroughs should you do?",
            "Who are the key people involved in your closing?"
          ],
          examples: [
            "Photo ID, certified funds, insurance binder, employment verification",
            "Wire down payment, have certified check for closing costs ready",
            "Final walkthrough 24-48 hours before closing, re-check agreed repairs",
            "Title agent, lender, real estate agents, attorney (in some states)"
          ]
        },
        {
          title: "Closing Costs Breakdown",
          prompts: [
            "What closing costs should you expect to pay?",
            "How do closing costs differ from your initial estimates?",
            "What fees can you negotiate or shop for?",
            "How do seller concessions affect your closing costs?"
          ],
          examples: [
            "2-3% of purchase price: title insurance, appraisal, attorney fees",
            "Compare Closing Disclosure to Loan Estimate for any changes",
            "Shop for title insurance, attorney fees, home warranty",
            "Seller pays $5k closing costs reduces your out-of-pocket by $5k"
          ]
        },
        {
          title: "Document Review",
          prompts: [
            "What key documents will you sign at closing?",
            "What should you review carefully before signing?",
            "What happens if you find errors in closing documents?",
            "How long does the typical closing appointment take?"
          ],
          examples: [
            "Promissory note, deed of trust, closing disclosure, title documents",
            "Loan terms match approval, property description, names spelled correctly",
            "Stop closing, correct errors, reschedule if major issues found",
            "1-2 hours for straightforward closings, longer for complex transactions"
          ]
        },
        {
          title: "Post-Closing Steps",
          prompts: [
            "What should you do immediately after closing?",
            "How do you handle utilities and address changes?",
            "What documents should you keep safe long-term?",
            "What follow-up items need attention in the first month?"
          ],
          examples: [
            "Change locks, update address, set up utilities, get spare keys made",
            "Transfer utilities to your name, forward mail, update voter registration",
            "Deed, mortgage documents, title policy, survey, inspection reports",
            "Property tax appeals, homestead exemption, maintenance schedule setup"
          ]
        }
      ]}
      tips={[
        "Review Closing Disclosure 3 days before closing for any surprises",
        "Bring certified funds or arrange wire transfer - personal checks usually not accepted",
        "Do final walkthrough to ensure property is in agreed-upon condition",
        "Don't make major purchases or change jobs between approval and closing",
        "Keep all closing documents in a safe place - you'll need them for taxes and refinancing",
        "Take photos of any issues found during final walkthrough for documentation"
      ]}
    />
  )
}