"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Heart,
  Shield,
  Calendar,
  DollarSign,
  FileText,
  ExternalLink
} from "lucide-react"

export function HealthcareGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Healthcare & Medicare Guide</h1>
        <p className="text-xl text-muted-foreground">
          Navigate healthcare costs and Medicare options for a secure retirement
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Medicare Planning</Badge>
          <Badge variant="outline">Healthcare Costs</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Healthcare Cost Reality Check
          </CardTitle>
          <CardDescription>
            What healthcare costs look like in retirement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$300,000</div>
              <p className="text-sm text-muted-foreground">Avg lifetime healthcare costs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15-20%</div>
              <p className="text-sm text-muted-foreground">Of retirement income</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Age 65</div>
              <p className="text-sm text-muted-foreground">Medicare eligibility</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pre-Medicare Healthcare */}
      <Card>
        <CardHeader>
          <CardTitle>Pre-Medicare Healthcare (Ages 55-65)</CardTitle>
          <CardDescription>Bridging the gap to Medicare eligibility</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Healthcare coverage in early retirement can be expensive. Plan carefully for this potentially costly decade.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Coverage Options:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">COBRA Continuation</h5>
                    <p className="text-sm text-muted-foreground">
                      Extend employer coverage for up to 18 months (36 months in some cases). Expensive but familiar coverage.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">ACA Marketplace Plans</h5>
                    <p className="text-sm text-muted-foreground">
                      Individual market plans with potential subsidies based on income. Open enrollment November 1 - January 15.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Spouse's Employer Plan</h5>
                    <p className="text-sm text-muted-foreground">
                      If married, you may be able to join your spouse's employer-sponsored health plan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm">Short-term Medical Plans</h5>
                    <p className="text-sm text-muted-foreground">
                      Limited coverage for temporary gaps. Not ACA-compliant and may exclude pre-existing conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Cost-Saving Strategies:</h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-blue-600 mt-0.5" />
                  <span className="text-sm text-blue-700">Manage income to qualify for ACA subsidies</span>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="h-4 w-4 text-blue-600 mt-0.5" />
                  <span className="text-sm text-blue-700">Use HSAs for tax-free healthcare spending</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                  <span className="text-sm text-blue-700">Consider higher deductible plans with lower premiums</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-blue-600 mt-0.5" />
                  <span className="text-sm text-blue-700">Time retirement for optimal coverage transitions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Budget Reality</h4>
                <p className="text-sm text-yellow-700">
                  Individual health insurance in your 50s and 60s can cost $1,000-2,000+ per month. Factor this significant expense into your early retirement planning.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medicare Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Medicare: The Four Parts Explained
          </CardTitle>
          <CardDescription>Understanding your Medicare options at age 65</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Part A */}
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  A
                </div>
                <h4 className="font-semibold">Hospital Insurance</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div><strong>Covers:</strong> Hospital stays, skilled nursing, hospice care</div>
                <div><strong>Cost:</strong> Free if you paid Medicare taxes for 10+ years</div>
                <div><strong>Deductible:</strong> $1,632 per benefit period (2024)</div>
              </div>
            </div>

            {/* Part B */}
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  B
                </div>
                <h4 className="font-semibold">Medical Insurance</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div><strong>Covers:</strong> Doctor visits, outpatient care, medical equipment</div>
                <div><strong>Cost:</strong> $174.70/month standard premium (2024)</div>
                <div><strong>Deductible:</strong> $240 annual deductible</div>
              </div>
            </div>

            {/* Part C */}
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  C
                </div>
                <h4 className="font-semibold">Medicare Advantage</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div><strong>Covers:</strong> Parts A + B + often D, extra benefits</div>
                <div><strong>Cost:</strong> Varies by plan, often $0 premium</div>
                <div><strong>Network:</strong> Typically HMO/PPO with provider restrictions</div>
              </div>
            </div>

            {/* Part D */}
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  D
                </div>
                <h4 className="font-semibold">Prescription Drugs</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div><strong>Covers:</strong> Prescription medications</div>
                <div><strong>Cost:</strong> Varies by plan, average ~$40/month</div>
                <div><strong>Penalty:</strong> 1% per month for late enrollment</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">Medicare vs Medicare Advantage</h4>
                <p className="text-sm text-blue-700">
                  Original Medicare (A + B) + Medigap + Part D offers more flexibility but potentially higher costs. Medicare Advantage is often cheaper but with network restrictions and coverage variations.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medicare Enrollment Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Medicare Enrollment: Critical Deadlines</CardTitle>
          <CardDescription>Missing these deadlines can result in permanent penalties</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Initial Enrollment Period (IEP)</h4>
                    <p className="text-sm text-muted-foreground">
                      7-month window: 3 months before your 65th birthday month, your birthday month, and 3 months after. Sign up for Parts A, B, and D.
                    </p>
                    <Badge variant="outline" className="mt-2">No penalty</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Special Enrollment Period (SEP)</h4>
                    <p className="text-sm text-muted-foreground">
                      8-month window after losing employer coverage. Must enroll within this timeframe to avoid penalties. Triggered by retirement or loss of coverage.
                    </p>
                    <Badge variant="outline" className="mt-2">Penalty protection</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">General Enrollment Period</h4>
                    <p className="text-sm text-muted-foreground">
                      January 1 - March 31 annually for those who missed their IEP. Coverage starts July 1. Late enrollment penalties apply permanently.
                    </p>
                    <Badge variant="destructive" className="mt-2">Penalties apply</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Annual Open Enrollment</h4>
                    <p className="text-sm text-muted-foreground">
                      October 15 - December 7 annually. Change Medicare Advantage plans, add/drop Part D, or switch to Original Medicare. Changes effective January 1.
                    </p>
                    <Badge variant="outline" className="mt-2">Plan changes</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-red-800">Late Enrollment Penalties</h4>
                <div className="text-sm text-red-700 space-y-1">
                  <div><strong>Part B:</strong> 10% penalty for each 12-month period you could have had Part B but didn't sign up</div>
                  <div><strong>Part D:</strong> 1% penalty for each month without creditable prescription coverage</div>
                  <div><strong>Duration:</strong> These penalties last for the rest of your life</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medigap Insurance */}
      <Card>
        <CardHeader>
          <CardTitle>Medigap (Medicare Supplement) Insurance</CardTitle>
          <CardDescription>Filling the gaps in Original Medicare coverage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">What Medigap Covers:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Medicare Part A and B deductibles and coinsurance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Excess charges (when doctors charge more than Medicare allows)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Foreign travel emergency coverage (Plans C, D, F, G, M, N)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">First three pints of blood (Plans A-G, M, N)</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Popular Medigap Plans:</h4>
              <div className="space-y-2">
                <div className="p-3 border rounded">
                  <div className="font-semibold text-sm">Plan G (Most Popular)</div>
                  <div className="text-sm text-muted-foreground">Covers everything except Part B deductible (~$150-300/month)</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="font-semibold text-sm">Plan N (Lower Premium)</div>
                  <div className="text-sm text-muted-foreground">Lower premium but copays for doctor visits and ER (~$100-200/month)</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="font-semibold text-sm">High-Deductible Plan G</div>
                  <div className="text-sm text-muted-foreground">Lower premium, $2,700 deductible (~$50-80/month)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Star className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800">Open Enrollment Guarantee</h4>
                <p className="text-sm text-green-700">
                  During your first 6 months on Medicare Part B, you have guaranteed issue rights for any Medigap policy. After this window, you may face medical underwriting and higher premiums.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Healthcare Savings Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-500" />
            Healthcare Savings Strategies
          </CardTitle>
          <CardDescription>Maximizing your healthcare dollars in retirement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Health Savings Account (HSA)</h4>
              <p className="text-sm text-blue-700 mb-2">
                Triple tax advantage: deductible contributions, tax-free growth, tax-free withdrawals for medical expenses.
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 2024 limits: $4,150 individual, $8,300 family</li>
                <li>• Catch-up: Additional $1,000 if 55+</li>
                <li>• Becomes traditional IRA at age 65 for non-medical expenses</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Long-Term Care Planning</h4>
              <p className="text-sm text-green-700 mb-2">
                70% of people over 65 will need long-term care. Average cost: $108,405/year for nursing home.
              </p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Long-term care insurance</li>
                <li>• Hybrid life insurance with LTC rider</li>
                <li>• Self-insuring with dedicated savings</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Medicare Cost Management</h4>
              <p className="text-sm text-purple-700 mb-2">
                Strategic planning can significantly reduce Medicare-related expenses.
              </p>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Choose plans based on your specific medications</li>
                <li>• Consider Medicare Advantage vs Traditional + Medigap</li>
                <li>• Use generic medications when available</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Preventive Care Focus</h4>
              <p className="text-sm text-orange-700 mb-2">
                Medicare covers many preventive services at 100%. Staying healthy is the best cost control.
              </p>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Annual wellness visits and screenings</li>
                <li>• Vaccinations and preventive treatments</li>
                <li>• Chronic disease management</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Healthcare and Medicare Resources</CardTitle>
          <CardDescription>Official sources and helpful tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Medicare.gov</h4>
                <p className="text-sm text-muted-foreground">Official Medicare website with plan finder and enrollment tools</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">State Health Insurance Program (SHIP)</h4>
                <p className="text-sm text-muted-foreground">Free local counseling on Medicare and health insurance options</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Find Local
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Social Security Administration</h4>
                <p className="text-sm text-muted-foreground">Medicare enrollment and Part A entitlement information</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Secure Your Healthcare Future</CardTitle>
          <CardDescription>Take action to protect your health and wealth in retirement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Plan My Healthcare Strategy
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Medicare Plan Comparison
            </Button>
            <Button variant="outline">
              <Heart className="h-4 w-4 mr-2" />
              HSA Calculator
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}