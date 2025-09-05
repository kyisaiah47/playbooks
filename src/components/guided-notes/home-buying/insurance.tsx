"use client"

import { GuidedNotePage } from "@/components/guided-note-page"

export function Insurance() {
  return (
    <GuidedNotePage
      title="Homeowners Insurance"
      description="Secure the right insurance coverage to protect your investment and satisfy lender requirements."
      sections={[
        {
          title: "Coverage Types & Limits",
          prompts: [
            "What types of coverage do you need for your home and location?",
            "How much dwelling coverage should you carry?",
            "What personal property and liability limits make sense for your situation?",
            "Do you need additional coverage for high-value items?"
          ],
          examples: [
            "Standard HO-3 policy, flood insurance in flood zone, earthquake coverage",
            "Replacement cost of $350k home, not just purchase price of $320k",
            "$100k personal property, $300k liability for family with assets",
            "Jewelry rider for engagement ring, art coverage for paintings"
          ]
        },
        {
          title: "Shopping & Comparison",
          prompts: [
            "Which insurance companies should you get quotes from?",
            "How do you compare policies beyond just the premium cost?",
            "What discounts might you qualify for?",
            "How does bundling with auto insurance affect your rates?"
          ],
          examples: [
            "State Farm, Allstate, USAA, regional carriers, online-only companies",
            "Compare deductibles, coverage limits, excluded perils, claim service",
            "Security system, smoke detectors, new roof, claim-free history",
            "Save 15% bundling home/auto vs separate policies"
          ]
        },
        {
          title: "Timing & Requirements",
          prompts: [
            "When do you need to have insurance in place for closing?",
            "What documentation does your lender require?",
            "How do you handle the transition if you're selling another home?",
            "What happens if you can't get coverage approved before closing?"
          ],
          examples: [
            "Policy effective at closing, binder letter 7 days before",
            "Insurance binder naming lender, proof of payment, coverage amounts",
            "Overlap policies by 30 days, or schedule precise timing transition",
            "Delay closing, find alternative insurer, or consider different property"
          ]
        },
        {
          title: "Cost Management",
          prompts: [
            "How can you reduce your insurance premiums without sacrificing coverage?",
            "What deductible amount balances savings with out-of-pocket risk?",
            "Should you escrow insurance payments or pay directly?",
            "How often should you review and update your coverage?"
          ],
          examples: [
            "Higher deductible, security upgrades, shop annually, maintain good credit",
            "$1,000 deductible saves $200/year vs $500 deductible",
            "Escrow for convenience, direct pay for potential savings and control",
            "Annual review, after major improvements, every 3-5 years minimum"
          ]
        }
      ]}
      tips={[
        "Get quotes early in your home search to factor insurance costs into budget",
        "Replacement cost coverage is usually worth the extra premium over actual cash value",
        "Don't just choose the cheapest policy - research the company's claim handling",
        "Take photos/video of your belongings for personal property claims",
        "Review coverage annually and after major home improvements",
        "Consider umbrella policy if you have significant assets to protect"
      ]}
    />
  )
}