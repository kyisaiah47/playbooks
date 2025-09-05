"use client"

export function MortgageGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Complete Mortgage Guide</h1>
        <p className="text-muted-foreground">Everything you need to know about home loans, rates, and qualification requirements.</p>
      </div>

      {/* Loan Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Types of Home Loans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">Conventional Loans (80% of purchases)</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Down Payment:</strong> 3-20%</div>
                <div><strong>Credit Score:</strong> 620+ (ideal 740+)</div>
                <div><strong>PMI:</strong> Required if down payment &lt; 20%</div>
                <div><strong>Loan Limits:</strong> $766,550 (2024, varies by area)</div>
                <div><strong>Best For:</strong> Strong credit, stable income</div>
              </div>
            </div>

            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">FHA Loans (16% of purchases)</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Down Payment:</strong> 3.5%</div>
                <div><strong>Credit Score:</strong> 580+ (500+ with 10% down)</div>
                <div><strong>MIP:</strong> Required for life of loan (most cases)</div>
                <div><strong>Loan Limits:</strong> Lower than conventional</div>
                <div><strong>Best For:</strong> First-time buyers, lower credit scores</div>
              </div>
            </div>

            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">VA Loans (2% of purchases)</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Down Payment:</strong> $0</div>
                <div><strong>Credit Score:</strong> No minimum (lender dependent)</div>
                <div><strong>PMI:</strong> None</div>
                <div><strong>Funding Fee:</strong> 2.3% (can be financed)</div>
                <div><strong>Best For:</strong> Eligible veterans and service members</div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">USDA Loans (2% of purchases)</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Down Payment:</strong> $0</div>
                <div><strong>Credit Score:</strong> 640+</div>
                <div><strong>Location:</strong> Rural and suburban areas only</div>
                <div><strong>Income Limits:</strong> 115% of median area income</div>
                <div><strong>Best For:</strong> Rural buyers, moderate income</div>
              </div>
            </div>

            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">Jumbo Loans</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Loan Amount:</strong> Above conforming limits</div>
                <div><strong>Down Payment:</strong> 10-20%</div>
                <div><strong>Credit Score:</strong> 700+</div>
                <div><strong>Rates:</strong> Often higher than conventional</div>
                <div><strong>Best For:</strong> High-value properties</div>
              </div>
            </div>

            <div className="bg-background rounded p-4 border">
              <h3 className="font-semibold text-primary mb-2">Portfolio Loans</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Source:</strong> Local banks and credit unions</div>
                <div><strong>Flexibility:</strong> More lenient qualification</div>
                <div><strong>Terms:</strong> Vary by lender</div>
                <div><strong>Rates:</strong> Often competitive</div>
                <div><strong>Best For:</strong> Unique financial situations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rates & Terms */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Understanding Interest Rates & Terms</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Fixed vs Adjustable Rates</h3>
              
              <div className="bg-background rounded p-4 border">
                <h4 className="font-medium text-primary mb-2">Fixed Rate Mortgages (90% of loans)</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Rate:</strong> Never changes</div>
                  <div><strong>Payment:</strong> Same every month</div>
                  <div><strong>Terms:</strong> 15, 20, 30 years common</div>
                  <div><strong>Best For:</strong> Long-term stability, rising rate environment</div>
                </div>
              </div>

              <div className="bg-background rounded p-4 border">
                <h4 className="font-medium text-primary mb-2">Adjustable Rate Mortgages (ARMs)</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Initial Rate:</strong> Fixed for 3, 5, 7, or 10 years</div>
                  <div><strong>Adjustments:</strong> Based on market index</div>
                  <div><strong>Caps:</strong> Limit rate increases</div>
                  <div><strong>Best For:</strong> Short-term ownership, falling rates</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Loan Term Comparison</h3>
              
              <div className="bg-primary/5 border border-primary/20 rounded p-4">
                <h4 className="font-medium mb-3">$400,000 Loan at 6.5% Rate</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span><strong>30-Year:</strong></span>
                    <span>$2,528/month, $509,924 total interest</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>15-Year:</strong></span>
                    <span>$3,487/month, $227,577 total interest</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    15-year saves $282,347 in interest but costs $959/month more
                  </div>
                </div>
              </div>

              <div className="bg-background rounded p-4 border">
                <h4 className="font-medium text-primary mb-2">Choosing Your Term</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>30-Year:</strong> Lower payments, more flexibility</div>
                  <div><strong>15-Year:</strong> Less interest, faster equity building</div>
                  <div><strong>Consider:</strong> Other financial goals, cash flow needs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Requirements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Qualification Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Credit Score Requirements</h3>
            <div className="space-y-3">
              <div className="bg-background rounded p-3 border">
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span><strong>740+:</strong></span>
                    <span className="text-emerald-600">Best rates</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>680-739:</strong></span>
                    <span className="text-primary">Good rates</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>620-679:</strong></span>
                    <span className="text-orange-500">Higher rates</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Below 620:</strong></span>
                    <span className="text-destructive">Limited options</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Each 20-point increase can save 0.1-0.25% in rate
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Debt-to-Income Ratio</h3>
            <div className="space-y-3">
              <div className="bg-background rounded p-3 border">
                <div className="text-sm space-y-2">
                  <div><strong>Front-End DTI:</strong> Housing payment ÷ gross income</div>
                  <div><strong>Target:</strong> ≤ 28%</div>
                  <div><strong>Back-End DTI:</strong> All debt ÷ gross income</div>
                  <div><strong>Target:</strong> ≤ 36-43%</div>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded p-3">
                <div className="text-xs">
                  <div><strong>Example:</strong> $8,000 monthly income</div>
                  <div>Max housing: $2,240 (28%)</div>
                  <div>Max total debt: $3,440 (43%)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Employment & Assets</h3>
            <div className="space-y-3">
              <div className="bg-background rounded p-3 border">
                <div className="text-sm space-y-2">
                  <div><strong>Employment:</strong> 2 years stable history</div>
                  <div><strong>Assets:</strong> 2-6 months reserves</div>
                  <div><strong>Down Payment:</strong> Seasoned 60+ days</div>
                  <div><strong>Gift Funds:</strong> Allowed with letter</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Self-employed borrowers need 2 years tax returns
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs & Fees */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Mortgage Costs & Fees</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Upfront Costs</h3>
              <div className="bg-background rounded p-4 border space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Loan Origination Fee:</span>
                  <span>0.5-1% of loan</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Appraisal:</span>
                  <span>$400-800</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Credit Report:</span>
                  <span>$25-50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Title Insurance:</span>
                  <span>0.5-1% of loan</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Attorney/Escrow:</span>
                  <span>$500-1,500</span>
                </div>
                <div className="flex justify-between text-sm font-medium border-t pt-2">
                  <span>Total Closing Costs:</span>
                  <span>2-5% of loan amount</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Ongoing Costs</h3>
              <div className="bg-background rounded p-4 border space-y-3">
                <div className="text-sm space-y-2">
                  <div><strong>Principal & Interest:</strong> Your base payment</div>
                  <div><strong>Property Taxes:</strong> 0.5-2.5% of home value annually</div>
                  <div><strong>Homeowners Insurance:</strong> $800-2,000+ annually</div>
                  <div><strong>PMI/MIP:</strong> 0.3-1.5% of loan annually</div>
                  <div><strong>HOA Fees:</strong> $200-800+ monthly (if applicable)</div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded p-3 mt-3">
                  <div className="text-xs">
                    <div><strong>PITI Example ($400k loan):</strong></div>
                    <div>P&I: $2,528, Taxes: $500, Insurance: $150</div>
                    <div><strong>Total: $3,178/month</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Shopping Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Rate Shopping Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Where to Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Banks:</strong> Wells Fargo, Chase, Bank of America</li>
              <li>• <strong>Credit Unions:</strong> Often best rates for members</li>
              <li>• <strong>Online Lenders:</strong> Rocket Mortgage, Better.com</li>
              <li>• <strong>Mortgage Brokers:</strong> Shop multiple lenders</li>
              <li>• <strong>Local Lenders:</strong> Community banks, personal service</li>
              <li>• <strong>Builder Preferred:</strong> May offer incentives</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Shopping Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Shop within 14-45 day window to minimize credit impact</li>
              <li>• Compare APR, not just interest rate</li>
              <li>• Get written loan estimates for comparison</li>
              <li>• Ask about rate locks (30-60 days)</li>
              <li>• Don&apos;t just focus on rate - consider service quality</li>
              <li>• Read reviews and ask for referrals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Approval Process */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Pre-Approval Process</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-background rounded p-4 border text-center">
              <div className="text-primary font-bold text-lg mb-2">Step 1</div>
              <h4 className="font-semibold mb-2">Gather Documents</h4>
              <div className="text-sm text-muted-foreground">
                Tax returns, pay stubs, bank statements, ID
              </div>
            </div>
            <div className="bg-background rounded p-4 border text-center">
              <div className="text-primary font-bold text-lg mb-2">Step 2</div>
              <h4 className="font-semibold mb-2">Submit Application</h4>
              <div className="text-sm text-muted-foreground">
                Complete application with chosen lender
              </div>
            </div>
            <div className="bg-background rounded p-4 border text-center">
              <div className="text-primary font-bold text-lg mb-2">Step 3</div>
              <h4 className="font-semibold mb-2">Credit Check</h4>
              <div className="text-sm text-muted-foreground">
                Lender pulls credit report and verifies info
              </div>
            </div>
            <div className="bg-background rounded p-4 border text-center">
              <div className="text-primary font-bold text-lg mb-2">Step 4</div>
              <h4 className="font-semibold mb-2">Get Pre-Approval</h4>
              <div className="text-sm text-muted-foreground">
                Letter shows exact loan amount approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tips */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Key Mortgage Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• <strong>Improve your credit score</strong> before applying</li>
              <li>• <strong>Save for a larger down payment</strong> to reduce PMI</li>
              <li>• <strong>Don&apos;t max out your budget</strong> - keep room for surprises</li>
              <li>• <strong>Lock your rate</strong> once you find a property</li>
            </ul>
            <ul className="space-y-2">
              <li>• <strong>Read the fine print</strong> on all loan documents</li>
              <li>• <strong>Avoid major purchases</strong> during the loan process</li>
              <li>• <strong>Keep employment stable</strong> until after closing</li>
              <li>• <strong>Consider refinancing</strong> if rates drop significantly</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}