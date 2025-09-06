"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Calendar,
  Target,
  Clock
} from "lucide-react"

export function RetirementTimeline() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Retirement Planning Timeline</h1>
        <p className="text-xl text-muted-foreground">
          A decade-by-decade guide to preparing for your ideal retirement
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Comprehensive Guide</Badge>
          <Badge variant="outline">Age-Based Strategy</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Retirement Readiness Milestones
          </CardTitle>
          <CardDescription>
            Key targets to hit by different ages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">Age 30</div>
              <p className="text-sm text-muted-foreground">1x annual salary saved</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">Age 40</div>
              <p className="text-sm text-muted-foreground">3x annual salary saved</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">Age 50</div>
              <p className="text-sm text-muted-foreground">6x annual salary saved</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary">Age 60</div>
              <p className="text-sm text-muted-foreground">10x annual salary saved</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 20s and 30s */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Your 20s & 30s: Foundation Building
          </CardTitle>
          <CardDescription>Starting strong with compound interest on your side</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This is your most powerful decade for retirement savings due to compound interest. Even small amounts saved now will grow significantly over 30-40 years.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Priority Actions:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Start 401(k) immediately, aim for employer match</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Build emergency fund (3-6 months expenses)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Open and max Roth IRA if eligible</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Eliminate high-interest debt</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Learn about investing basics</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Savings Targets:</h4>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Age 25:</span>
                    <span className="text-sm font-semibold">0.5x annual salary</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Age 30:</span>
                    <span className="text-sm font-semibold">1x annual salary</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Age 35:</span>
                    <span className="text-sm font-semibold">2x annual salary</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Star className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">Power of Starting Early</h4>
                <p className="text-sm text-blue-700">
                  Someone saving $200/month from age 25-35 (just 10 years) will have more at retirement than someone saving $400/month from age 35-65 (30 years). Start now!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 40s */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-500" />
            Your 40s: Peak Earning & Accelerating
          </CardTitle>
          <CardDescription>Maximizing contributions during your highest earning years</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Focus Areas:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Maximize 401(k) contributions if possible</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Consider backdoor Roth IRA strategies</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Review and optimize investment allocation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Plan for children's college expenses</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Update beneficiaries and estate planning</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Savings Milestone:</h4>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">3x</div>
                  <p className="text-sm text-green-600">Annual salary by age 40</p>
                </div>
              </div>

              <h4 className="font-semibold">Common Challenges:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Competing priorities (mortgage, kids)</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Lifestyle inflation with higher income</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Caring for aging parents</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 50s */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-orange-500" />
            Your 50s: Catch-Up Time
          </CardTitle>
          <CardDescription>Taking advantage of catch-up contributions and final preparations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Catch-Up Opportunities:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">401(k) catch-up: Extra $7,500/year (2024)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">IRA catch-up: Extra $1,000/year (2024)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Consider Roth conversions if in lower tax bracket</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Start thinking about retirement lifestyle</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Review healthcare and long-term care needs</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Target by Age 50:</h4>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-700">6x</div>
                  <p className="text-sm text-orange-600">Annual salary saved</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Reality Check Time</h4>
                    <p className="text-sm text-yellow-700">
                      If behind on savings, now is the time for aggressive catch-up. Consider working a few extra years or reducing retirement expenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 60s and Beyond */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-500" />
            Your 60s & Beyond: Final Preparations
          </CardTitle>
          <CardDescription>Transitioning from accumulation to retirement planning</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Pre-Retirement Tasks:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Finalize retirement date and budget</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Understand Social Security claiming strategies</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Plan healthcare transition and Medicare</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Adjust portfolio to more conservative allocation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Create withdrawal strategy to minimize taxes</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Target by Age 60:</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">10x</div>
                  <p className="text-sm text-red-600">Annual salary saved</p>
                </div>
              </div>

              <h4 className="font-semibold">Key Retirement Ages:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b pb-1">
                  <span>Age 59½:</span>
                  <span>401(k)/IRA withdrawal without penalty</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span>Age 62:</span>
                  <span>Earliest Social Security (reduced)</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span>Age 65:</span>
                  <span>Medicare eligibility begins</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span>Age 67:</span>
                  <span>Full Social Security benefits</span>
                </div>
                <div className="flex justify-between">
                  <span>Age 73:</span>
                  <span>Required minimum distributions</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Retirement Withdrawal Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>Retirement Withdrawal Timeline</CardTitle>
          <CardDescription>Optimizing your retirement income strategy</CardDescription>
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
                    <h4 className="font-semibold">Early Retirement (59½-62)</h4>
                    <p className="text-sm text-muted-foreground">
                      Use taxable accounts and Roth IRA contributions (penalty-free). Consider 401(k) loans or hardship withdrawals if needed.
                    </p>
                    <Badge variant="outline" className="mt-2">Strategy: Bridge to Social Security</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Pre-Medicare (62-65)</h4>
                    <p className="text-sm text-muted-foreground">
                      Access 401(k) and Traditional IRAs penalty-free. Consider delaying Social Security to age 67 or 70 for higher benefits. Plan for healthcare costs.
                    </p>
                    <Badge variant="outline" className="mt-2">Focus: Healthcare Bridge Insurance</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Medicare Eligible (65-70)</h4>
                    <p className="text-sm text-muted-foreground">
                      Healthcare costs reduced with Medicare. Continue optimizing Social Security timing. Balance withdrawals across account types for tax efficiency.
                    </p>
                    <Badge variant="outline" className="mt-2">Benefits: Healthcare Security</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Full Benefits (70+)</h4>
                    <p className="text-sm text-muted-foreground">
                      Maximum Social Security benefits kick in. Plan for required minimum distributions at age 73. Focus on estate planning and legacy goals.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: Legacy Planning</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Plan Your Timeline?</CardTitle>
          <CardDescription>Start building your retirement roadmap today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Calculate My Timeline
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Set Milestone Reminders
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}