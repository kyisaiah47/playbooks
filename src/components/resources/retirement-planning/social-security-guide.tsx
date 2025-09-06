"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Calculator,
  Clock,
  DollarSign,
  Users
} from "lucide-react"

export function SocialSecurityGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Social Security Benefits Guide</h1>
        <p className="text-xl text-muted-foreground">
          Maximize your Social Security benefits with smart claiming strategies
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Government Benefits</Badge>
          <Badge variant="outline">Claiming Strategy</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Social Security at a Glance
          </CardTitle>
          <CardDescription>
            Key numbers and timelines you need to know
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">35 Years</div>
              <p className="text-sm text-muted-foreground">Highest earning years used</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8%/Year</div>
              <p className="text-sm text-muted-foreground">Delayed retirement credits</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$3,822</div>
              <p className="text-sm text-muted-foreground">Max monthly benefit (2024)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Benefits Are Calculated */}
      <Card>
        <CardHeader>
          <CardTitle>How Your Benefits Are Calculated</CardTitle>
          <CardDescription>Understanding the formula behind your monthly payments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Lifetime Earnings Record</h4>
                    <p className="text-sm text-muted-foreground">
                      Social Security uses your highest 35 years of earnings (adjusted for inflation). If you worked fewer than 35 years, zeros are included in the calculation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Average Indexed Monthly Earnings (AIME)</h4>
                    <p className="text-sm text-muted-foreground">
                      Your highest 35 years are averaged and divided by 420 months (35 years × 12 months) to get your AIME.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Primary Insurance Amount (PIA)</h4>
                    <p className="text-sm text-muted-foreground">
                      A progressive formula is applied to your AIME: 90% of first $1,174, 32% of $1,174-$7,078, and 15% above $7,078 (2024 bend points).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Final Benefit Amount</h4>
                    <p className="text-sm text-muted-foreground">
                      Your PIA is adjusted based on when you claim benefits. This becomes your monthly Social Security payment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Calculator className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">Check Your Earnings Record</h4>
                <p className="text-sm text-blue-700">
                  Create a my Social Security account at ssa.gov to view your earnings history and get benefit estimates. Check annually for errors and report any missing earnings.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Claiming Ages and Strategies */}
      <Card>
        <CardHeader>
          <CardTitle>When to Claim: Ages and Impact</CardTitle>
          <CardDescription>Timing your claim can increase or decrease your lifetime benefits</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            
            {/* Early Claiming */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-center mb-3">
                <div className="text-lg font-bold text-red-700">Age 62</div>
                <Badge variant="destructive" className="text-xs">Early Claiming</Badge>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Benefit:</strong> 75% of full amount
                </div>
                <div className="text-sm">
                  <strong>Pros:</strong> Immediate income, hedge against program changes
                </div>
                <div className="text-sm">
                  <strong>Cons:</strong> Permanently reduced benefits, earnings test applies
                </div>
              </div>
            </div>

            {/* Full Retirement Age */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-center mb-3">
                <div className="text-lg font-bold text-green-700">Age 67</div>
                <Badge className="text-xs">Full Benefits</Badge>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Benefit:</strong> 100% of full amount
                </div>
                <div className="text-sm">
                  <strong>Pros:</strong> Full benefits, no earnings test
                </div>
                <div className="text-sm">
                  <strong>Cons:</strong> Must wait for full amount, may not maximize lifetime benefits
                </div>
              </div>
            </div>

            {/* Delayed Claiming */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-center mb-3">
                <div className="text-lg font-bold text-blue-700">Age 70</div>
                <Badge variant="secondary" className="text-xs">Delayed Credits</Badge>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Benefit:</strong> 132% of full amount
                </div>
                <div className="text-sm">
                  <strong>Pros:</strong> Maximum benefits, 8% annual increase
                </div>
                <div className="text-sm">
                  <strong>Cons:</strong> Risk of not living to receive benefits, delayed income
                </div>
              </div>
            </div>
          </div>

          {/* Break-Even Analysis */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Break-Even Analysis</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h5 className="font-semibold text-sm mb-2">Age 62 vs Age 67</h5>
                <p className="text-sm text-muted-foreground">
                  Break-even around age 78-79. If you live beyond age 79, waiting until 67 provides more lifetime benefits.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h5 className="font-semibold text-sm mb-2">Age 67 vs Age 70</h5>
                <p className="text-sm text-muted-foreground">
                  Break-even around age 82-83. If you live beyond age 83, delaying until 70 maximizes lifetime benefits.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spousal and Survivor Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Spousal and Survivor Benefits
          </CardTitle>
          <CardDescription>Maximizing benefits for married couples</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Spousal Benefits:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Up to 50% of higher earner's full benefit</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Available even if spouse never worked</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Can claim earliest at age 62 (reduced)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No delayed retirement credits beyond FRA</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Survivor Benefits:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Up to 100% of deceased spouse's benefit</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Available as early as age 60 (reduced)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Can switch between own and survivor benefit</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Includes delayed retirement credits if applicable</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Star className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800">Optimal Married Couple Strategy</h4>
                <p className="text-sm text-green-700">
                  Often optimal: Lower earner claims at FRA, higher earner delays until 70. This maximizes the higher survivor benefit and provides current income.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax Considerations */}
      <Card>
        <CardHeader>
          <CardTitle>Social Security Tax Implications</CardTitle>
          <CardDescription>Understanding how your benefits may be taxed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Social Security benefits may be subject to federal income tax depending on your "combined income" (adjusted gross income + nontaxable interest + 50% of SS benefits).
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Individual Filers:</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Combined income under $25,000</span>
                  <Badge variant="outline">0% taxed</Badge>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">$25,000 - $34,000</span>
                  <Badge variant="secondary">50% taxed</Badge>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Over $34,000</span>
                  <Badge variant="destructive">85% taxed</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Married Filing Jointly:</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Combined income under $32,000</span>
                  <Badge variant="outline">0% taxed</Badge>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">$32,000 - $44,000</span>
                  <Badge variant="secondary">50% taxed</Badge>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Over $44,000</span>
                  <Badge variant="destructive">85% taxed</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Tax Planning Strategy</h4>
                <p className="text-sm text-yellow-700">
                  Consider Roth conversions in early retirement to reduce future RMDs and keep combined income below Social Security taxation thresholds.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Working in Retirement */}
      <Card>
        <CardHeader>
          <CardTitle>Working While Receiving Benefits</CardTitle>
          <CardDescription>How work affects your Social Security payments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Before Full Retirement Age:</h4>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <strong>2024 Limit:</strong> $22,320/year
                  </div>
                  <div className="text-sm">
                    <strong>Penalty:</strong> $1 reduction for every $2 over limit
                  </div>
                  <div className="text-sm">
                    <strong>Year you reach FRA:</strong> $59,520 limit, $1 for every $3 over
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">At/After Full Retirement Age:</h4>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <strong>Earnings Limit:</strong> None
                  </div>
                  <div className="text-sm">
                    <strong>Benefit Reduction:</strong> None
                  </div>
                  <div className="text-sm">
                    <strong>Note:</strong> Previous reductions are restored
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">Good News About Withheld Benefits</h4>
                <p className="text-sm text-blue-700">
                  Benefits withheld due to the earnings test aren't lost forever. Once you reach full retirement age, your benefit is recalculated to account for the months benefits were withheld.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Common Social Security Mistakes
          </CardTitle>
          <CardDescription>Avoid these costly errors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Claiming Too Early</h4>
              <p className="text-sm text-red-700">
                Claiming at 62 permanently reduces benefits by 25-30%. Only do this if you absolutely need the income or have serious health concerns.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Not Checking Earnings Record</h4>
              <p className="text-sm text-orange-700">
                Errors in your earnings record can reduce benefits. Check annually and report missing or incorrect earnings promptly.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Ignoring Spousal Benefits</h4>
              <p className="text-sm text-yellow-700">
                Married couples should coordinate claiming strategies. Sometimes it's optimal for one spouse to claim early while the other delays.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Not Planning for Taxes</h4>
              <p className="text-sm text-purple-700">
                Many retirees are surprised that Social Security is taxable. Plan withdrawal strategies to minimize the tax impact on benefits.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Optimize Your Social Security Strategy</CardTitle>
          <CardDescription>Take action to maximize your lifetime benefits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Plan My Claiming Strategy
            </Button>
            <Button variant="outline">
              <DollarSign className="h-4 w-4 mr-2" />
              Estimate My Benefits
            </Button>
            <Button variant="outline">
              <Clock className="h-4 w-4 mr-2" />
              Check Earnings Record
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}