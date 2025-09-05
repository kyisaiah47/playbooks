"use client"

export function ClosingGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Complete Closing Guide</h1>
        <p className="text-muted-foreground">Everything you need to know about the final steps of your home purchase from contract to keys.</p>
      </div>

      {/* Closing Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">30-Day Closing Timeline</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">Week 1</h3>
              <div className="text-sm space-y-2">
                <div>• Submit mortgage application</div>
                <div>• Order appraisal</div>
                <div>• Schedule home inspection</div>
                <div>• Get homeowner&apos;s insurance quotes</div>
                <div>• Submit required documents to lender</div>
              </div>
            </div>
            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">Week 2</h3>
              <div className="text-sm space-y-2">
                <div>• Review inspection report</div>
                <div>• Request repairs or credits</div>
                <div>• Appraisal completed</div>
                <div>• Submit additional loan documents</div>
                <div>• Title company begins title search</div>
              </div>
            </div>
            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">Week 3</h3>
              <div className="text-sm space-y-2">
                <div>• Loan processing and underwriting</div>
                <div>• Resolve any loan conditions</div>
                <div>• Purchase homeowner&apos;s insurance</div>
                <div>• Schedule utilities transfer</div>
                <div>• Prepare for final walkthrough</div>
              </div>
            </div>
            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">Week 4</h3>
              <div className="text-sm space-y-2">
                <div>• Receive Clear to Close</div>
                <div>• Review Closing Disclosure</div>
                <div>• Final walkthrough</div>
                <div>• Arrange closing funds</div>
                <div>• Closing day - sign papers & get keys!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Documents */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Important Closing Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Pre-Closing Documents</h3>
            
            <div className="bg-background rounded p-4 border">
              <h4 className="font-medium text-primary mb-2">Closing Disclosure (CD)</h4>
              <div className="text-sm space-y-1">
                <div>• Received 3 business days before closing</div>
                <div>• Shows final loan terms and closing costs</div>
                <div>• Compare to initial Loan Estimate</div>
                <div>• Review for any unexpected changes</div>
              </div>
            </div>

            <div className="bg-background rounded p-4 border">
              <h4 className="font-medium text-primary mb-2">Final Loan Approval</h4>
              <div className="text-sm space-y-1">
                <div>• &quot;Clear to Close&quot; from your lender</div>
                <div>• All loan conditions satisfied</div>
                <div>• Funding approved and ready</div>
                <div>• Interest rate locked and confirmed</div>
              </div>
            </div>

            <div className="bg-background rounded p-4 border">
              <h4 className="font-medium text-primary mb-2">Title Insurance Policy</h4>
              <div className="text-sm space-y-1">
                <div>• Protects against title defects</div>
                <div>• Lender&apos;s and owner&apos;s policies</div>
                <div>• Title search results and exceptions</div>
                <div>• Survey and property boundaries</div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Closing Day Documents</h3>
            
            <div className="bg-background rounded p-4 border">
              <h4 className="font-medium text-primary mb-2">HUD-1 Settlement Statement</h4>
              <div className="text-sm space-y-1">
                <div>• Itemizes all closing costs</div>
                <div>• Shows money flow between parties</div>
                <div>• Matches your Closing Disclosure</div>
                <div>• Final accounting of the transaction</div>
              </div>
            </div>

            <div className="bg-background rounded p-4 border">
              <h4 className="font-medium text-primary mb-2">Deed & Mortgage Documents</h4>
              <div className="text-sm space-y-1">
                <div>• Warranty deed transferring ownership</div>
                <div>• Promissory note (your loan agreement)</div>
                <div>• Deed of trust or mortgage lien</div>
                <div>• Truth in Lending Act disclosures</div>
              </div>
            </div>

            <div className="bg-background rounded p-4 border">
              <h4 className="font-medium text-primary mb-2">Additional Paperwork</h4>
              <div className="text-sm space-y-1">
                <div>• Homeowner&apos;s insurance policy</div>
                <div>• Property tax pro-rations</div>
                <div>• HOA documents (if applicable)</div>
                <div>• Keys, garage remotes, security codes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Costs Breakdown */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Closing Costs Breakdown</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <p className="text-sm mb-4">Typical closing costs range from 2-5% of the purchase price. Here&apos;s what to expect:</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Lender Fees</h3>
              <div className="bg-background rounded p-4 border">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Loan Origination Fee:</span>
                    <span>0.5-1% of loan amount</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Appraisal Fee:</span>
                    <span>$400-$800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Credit Report:</span>
                    <span>$25-$50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flood Certification:</span>
                    <span>$15-$25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax Service Fee:</span>
                    <span>$50-$100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Underwriting Fee:</span>
                    <span>$300-$900</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Third-Party Fees</h3>
              <div className="bg-background rounded p-4 border">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Title Insurance:</span>
                    <span>0.5-1% of loan amount</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Attorney/Escrow Fee:</span>
                    <span>$500-$1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home Inspection:</span>
                    <span>$300-$700</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Survey:</span>
                    <span>$300-$700</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recording Fees:</span>
                    <span>$25-$250</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transfer Tax:</span>
                    <span>Varies by location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold mb-3">Prepaid Items</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Homeowner&apos;s Insurance:</span>
                  <span>1 year premium</span>
                </div>
                <div className="flex justify-between">
                  <span>Property Taxes:</span>
                  <span>2-6 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Mortgage Interest:</span>
                  <span>Daily rate to month end</span>
                </div>
                <div className="flex justify-between">
                  <span>PMI Premium:</span>
                  <span>1-2 months</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded p-4">
              <h3 className="font-semibold mb-3">Example: $400,000 Purchase</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lender Fees:</span>
                  <span>$3,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Third-Party Fees:</span>
                  <span>$2,800</span>
                </div>
                <div className="flex justify-between">
                  <span>Prepaid Items:</span>
                  <span>$4,500</span>
                </div>
                <div className="flex justify-between font-medium border-t pt-2">
                  <span>Total Closing Costs:</span>
                  <span>$10,500 (2.6%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Walkthrough */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Final Walkthrough Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">What to Check</h3>
            <div className="bg-background rounded p-4 border">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Property condition:</strong> No new damage since inspection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Repairs completed:</strong> All agreed-upon fixes done properly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Included items:</strong> All fixtures and appliances present</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Utilities working:</strong> Electricity, water, heat, AC operational</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Clean condition:</strong> Property left in broom-clean condition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Access items:</strong> All keys, remotes, security codes ready</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Common Issues</h3>
            <div className="bg-background rounded p-4 border">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-destructive">•</span>
                  <span><strong>Damage from moving:</strong> Scratched floors, damaged walls</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive">•</span>
                  <span><strong>Incomplete repairs:</strong> Shoddy or unfinished work</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive">•</span>
                  <span><strong>Missing items:</strong> Appliances or fixtures taken</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive">•</span>
                  <span><strong>Utility problems:</strong> No power, water, or heat</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive">•</span>
                  <span><strong>Dirty condition:</strong> Property not cleaned as agreed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-destructive">•</span>
                  <span><strong>Access issues:</strong> Missing keys or garage remotes</span>
                </li>
              </ul>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded text-xs">
              <strong>Important:</strong> Document any issues with photos and notify your agent immediately
            </div>
          </div>
        </div>
      </section>

      {/* Closing Day Process */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Closing Day: Step by Step</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Before the Closing</h3>
              <div className="bg-background rounded p-4 border">
                <ul className="space-y-2 text-sm">
                  <li>• Review closing disclosure one final time</li>
                  <li>• Arrange certified funds or wire transfer</li>
                  <li>• Bring photo ID and any required documents</li>
                  <li>• Confirm closing time and location</li>
                  <li>• Prepare questions for closing agent</li>
                  <li>• Plan to be available for 1-2 hours</li>
                </ul>
              </div>

              <h3 className="font-semibold">Documents You&apos;ll Sign</h3>
              <div className="bg-background rounded p-4 border">
                <ul className="space-y-1 text-sm">
                  <li>• Promissory note (15+ pages)</li>
                  <li>• Deed of trust/mortgage (10+ pages)</li>
                  <li>• Truth in Lending disclosures</li>
                  <li>• Right of rescission notice</li>
                  <li>• Occupancy affidavit</li>
                  <li>• Various state and federal disclosures</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">At the Closing Table</h3>
              <div className="bg-background rounded p-4 border">
                <ul className="space-y-2 text-sm">
                  <li>• Review and sign all loan documents</li>
                  <li>• Verify all numbers match closing disclosure</li>
                  <li>• Ask questions about anything unclear</li>
                  <li>• Receive copies of important documents</li>
                  <li>• Provide certified funds for closing costs</li>
                  <li>• Get keys and celebrate your new home!</li>
                </ul>
              </div>

              <h3 className="font-semibold">What to Bring</h3>
              <div className="bg-background rounded p-4 border">
                <ul className="space-y-1 text-sm">
                  <li>• Photo identification (driver&apos;s license)</li>
                  <li>• Certified check or wire confirmation</li>
                  <li>• Proof of homeowner&apos;s insurance</li>
                  <li>• Copy of purchase agreement</li>
                  <li>• Any required additional documents</li>
                  <li>• Questions written down in advance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Closing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">After Closing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Immediate Tasks (First 30 Days)</h3>
            <div className="bg-background rounded p-4 border">
              <ul className="space-y-2 text-sm">
                <li>• Change locks or rekey existing locks</li>
                <li>• Update address with post office, banks, employers</li>
                <li>• Transfer utility services to your name</li>
                <li>• Update voter registration and driver&apos;s license</li>
                <li>• Locate circuit breakers, water shut-off, gas shut-off</li>
                <li>• Install smoke detector batteries</li>
                <li>• Schedule any immediate repairs or improvements</li>
                <li>• File homestead exemption for property taxes</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Important Documents to Keep</h3>
            <div className="bg-background rounded p-4 border">
              <ul className="space-y-2 text-sm">
                <li>• Original deed and mortgage documents</li>
                <li>• Title insurance policy</li>
                <li>• Closing disclosure and settlement statement</li>
                <li>• Home inspection report</li>
                <li>• Appraisal report</li>
                <li>• Homeowner&apos;s insurance policy</li>
                <li>• Property survey</li>
                <li>• Warranty documents for appliances/systems</li>
              </ul>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded text-xs">
              <strong>Tip:</strong> Store documents in fireproof safe or safety deposit box
            </div>
          </div>
        </div>
      </section>

      {/* Potential Issues */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Common Closing Issues & Solutions</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Financing Issues</h3>
              <div className="bg-background rounded p-4 border">
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Appraisal low:</strong> Renegotiate price or bring extra cash</li>
                  <li>• <strong>Last-minute conditions:</strong> Provide additional documentation quickly</li>
                  <li>• <strong>Rate lock expires:</strong> Extend lock or accept new rate</li>
                  <li>• <strong>Funding delays:</strong> May need to delay closing 1-2 days</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Property Issues</h3>
              <div className="bg-background rounded p-4 border">
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Title problems:</strong> Resolve liens or ownership issues</li>
                  <li>• <strong>Repair not completed:</strong> Hold money in escrow until done</li>
                  <li>• <strong>Survey discrepancies:</strong> May need new survey or boundary agreement</li>
                  <li>• <strong>Insurance issues:</strong> Resolve before closing or find new insurer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tips */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Key Closing Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• <strong>Review everything carefully</strong> - don&apos;t rush through documents</li>
              <li>• <strong>Ask questions</strong> - closing agents expect and welcome them</li>
              <li>• <strong>Bring a calculator</strong> - verify all numbers add up correctly</li>
              <li>• <strong>Stay flexible</strong> - minor delays are common and usually resolved quickly</li>
            </ul>
            <ul className="space-y-2">
              <li>• <strong>Don&apos;t wire money</strong> without confirming instructions by phone</li>
              <li>• <strong>Keep documents organized</strong> - you&apos;ll refer to them for years</li>
              <li>• <strong>Take your time</strong> - this is the biggest purchase of your life</li>
              <li>• <strong>Celebrate responsibly</strong> - you did it! You&apos;re a homeowner!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}