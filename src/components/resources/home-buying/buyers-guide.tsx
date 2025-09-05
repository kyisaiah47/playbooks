"use client"

export function BuyersGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Complete Home Buying Guide</h1>
        <p className="text-muted-foreground">Your comprehensive walkthrough of the entire home buying process from start to finish.</p>
      </div>

      {/* Pre-Purchase Preparation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Phase 1: Pre-Purchase Preparation</h2>
        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
          <p className="text-sm">Before you start house hunting, prepare your finances and define your needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Financial Preparation</h3>
              <ul className="space-y-2 text-sm">
                <li>• Check and improve your credit score (aim for 620+)</li>
                <li>• Save for down payment (3-20% of purchase price)</li>
                <li>• Calculate debt-to-income ratio (keep below 43%)</li>
                <li>• Gather financial documents (2 years tax returns, pay stubs)</li>
                <li>• Determine your budget including monthly expenses</li>
                <li>• Save for closing costs (2-3% of purchase price)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Define Your Needs</h3>
              <div className="bg-primary/5 border border-primary/20 rounded p-4 space-y-2 text-sm">
                <div><strong>Location:</strong> Commute time, schools, amenities</div>
                <div><strong>Size:</strong> Bedrooms, bathrooms, square footage</div>
                <div><strong>Features:</strong> Garage, yard, home office, storage</div>
                <div><strong>Condition:</strong> Move-in ready vs fixer-upper</div>
                <div><strong>Timeline:</strong> When do you need to move?</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Pre-Approved */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Phase 2: Get Pre-Approved</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <p className="text-sm mb-4">Pre-approval gives you credibility with sellers and helps you understand your exact budget.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-background rounded p-4 border">
                <h3 className="font-semibold mb-2">Shop for Lenders</h3>
                <ul className="text-sm space-y-1">
                  <li>• Contact 3-5 different lenders</li>
                  <li>• Compare interest rates and fees</li>
                  <li>• Consider banks, credit unions, online lenders</li>
                  <li>• Ask about different loan programs</li>
                  <li>• Get recommendations from your realtor</li>
                </ul>
              </div>

              <div className="bg-background rounded p-4 border">
                <h3 className="font-semibold mb-2">Required Documents</h3>
                <ul className="text-sm space-y-1">
                  <li>• Last 2 years of tax returns</li>
                  <li>• Recent pay stubs (30 days)</li>
                  <li>• Bank statements (2-3 months)</li>
                  <li>• Investment account statements</li>
                  <li>• Employment verification letter</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-background rounded p-4 border">
                <h3 className="font-semibold mb-2">Loan Types to Consider</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Conventional (80%):</strong> 3-20% down, good for strong credit</div>
                  <div><strong>FHA (16%):</strong> 3.5% down, good for first-time buyers</div>
                  <div><strong>VA (2%):</strong> $0 down for eligible veterans</div>
                  <div><strong>USDA (2%):</strong> $0 down for rural properties</div>
                </div>
              </div>

              <div className="bg-background rounded p-4 border">
                <h3 className="font-semibold mb-2">Pre-Approval Benefits</h3>
                <ul className="text-sm space-y-1">
                  <li>• Shows sellers you&apos;re serious</li>
                  <li>• Helps you move quickly on good properties</li>
                  <li>• Reveals your exact budget</li>
                  <li>• Identifies potential issues early</li>
                  <li>• Locks in rate for 60-90 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Hunting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Phase 3: House Hunting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Finding Your Realtor</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Interview 2-3 buyer&apos;s agents</li>
              <li>• Look for local market expertise</li>
              <li>• Check recent sales and client reviews</li>
              <li>• Ensure they&apos;re available for your timeline</li>
              <li>• Ask about their buying process</li>
              <li>• Verify they work full-time in real estate</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Search Strategy</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Set up MLS alerts with your agent</li>
              <li>• Browse Zillow, Realtor.com daily</li>
              <li>• Drive through target neighborhoods</li>
              <li>• Visit open houses to see different styles</li>
              <li>• Keep detailed notes and photos</li>
              <li>• Be prepared to act quickly in hot markets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Making an Offer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Phase 4: Making an Offer</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Offer Components</h3>
              <ul className="space-y-2 text-sm">
                <li>• Purchase price</li>
                <li>• Earnest money deposit</li>
                <li>• Financing contingency</li>
                <li>• Inspection contingency</li>
                <li>• Appraisal contingency</li>
                <li>• Closing date</li>
                <li>• What stays with the house</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Competitive Markets</h3>
              <ul className="space-y-2 text-sm">
                <li>• Offer above asking price</li>
                <li>• Larger earnest money</li>
                <li>• Shorter contingency periods</li>
                <li>• Flexible closing date</li>
                <li>• Pre-inspection</li>
                <li>• Escalation clause</li>
                <li>• Personal letter to seller</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Negotiation Points</h3>
              <ul className="space-y-2 text-sm">
                <li>• Purchase price</li>
                <li>• Closing costs</li>
                <li>• Repair requests</li>
                <li>• Home warranty</li>
                <li>• Appliances included</li>
                <li>• Closing timeline</li>
                <li>• Occupancy date</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Under Contract */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Phase 5: Under Contract</h2>
        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
          <p className="text-sm">Once your offer is accepted, you have 30-45 days to complete all contingencies and close.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-background rounded p-4 border">
                <h3 className="font-semibold mb-2">Week 1: Inspections</h3>
                <ul className="text-sm space-y-1">
                  <li>• Schedule home inspection (5-10 days)</li>
                  <li>• Schedule specialized inspections if needed</li>
                  <li>• Review inspection report with agent</li>
                  <li>• Decide on repair requests</li>
                  <li>• Submit inspection contingency removal/requests</li>
                </ul>
              </div>

              <div className="bg-background rounded p-4 border">
                <h3 className="font-semibold mb-2">Week 2: Financing</h3>
                <ul className="text-sm space-y-1">
                  <li>• Submit mortgage application</li>
                  <li>• Order home appraisal</li>
                  <li>• Provide additional documents to lender</li>
                  <li>• Review loan terms and conditions</li>
                  <li>• Get homeowners insurance quotes</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-background rounded p-4 border">
                <h3 className="font-semibold mb-2">Week 3: Final Approval</h3>
                <ul className="text-sm space-y-1">
                  <li>• Receive appraisal results</li>
                  <li>• Complete loan underwriting</li>
                  <li>• Get clear to close from lender</li>
                  <li>• Purchase homeowners insurance</li>
                  <li>• Prepare for final walkthrough</li>
                </ul>
              </div>

              <div className="bg-background rounded p-4 border">
                <h3 className="font-semibold mb-2">Week 4: Closing</h3>
                <ul className="text-sm space-y-1">
                  <li>• Review closing disclosure</li>
                  <li>• Conduct final walkthrough</li>
                  <li>• Arrange closing funds (wire/certified check)</li>
                  <li>• Attend closing appointment</li>
                  <li>• Get keys and celebrate!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Common First-Time Buyer Mistakes</h2>
        <div className="bg-muted/30 border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Financial Mistakes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Not getting pre-approved first</li>
                <li>• Maxing out your budget</li>
                <li>• Forgetting about closing costs and moving expenses</li>
                <li>• Making major purchases before closing</li>
                <li>• Not saving for immediate home repairs</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Search & Offer Mistakes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Falling in love with the first house</li>
                <li>• Not researching the neighborhood thoroughly</li>
                <li>• Skipping the home inspection</li>
                <li>• Making emotional decisions over logical ones</li>
                <li>• Not having a backup plan if deal falls through</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Typical Home Buying Timeline</h2>
          <div className="space-y-3 text-sm">
            <div><strong>1-2 months before:</strong> Check credit, save money, get pre-approved</div>
            <div><strong>House hunting:</strong> 2 weeks to 6 months depending on market</div>
            <div><strong>Under contract:</strong> 30-45 days from accepted offer to closing</div>
            <div><strong>Move-in:</strong> Usually same day as closing or within a few days</div>
          </div>
          <p className="text-sm mt-4 font-medium">
            Remember: Take your time with big decisions, but be prepared to act quickly when you find the right house!
          </p>
        </div>
      </section>
    </div>
  )
}