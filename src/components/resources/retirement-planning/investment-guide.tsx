"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  ExternalLink,
  TrendingUp,
  Shield,
  DollarSign
} from "lucide-react"

export function InvestmentGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Retirement Investment Guide</h1>
        <p className="text-xl text-muted-foreground">
          Build wealth for your golden years with smart investment strategies
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Essential Guide</Badge>
          <Badge variant="outline">Updated 2024</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Investment Fundamentals at a Glance
          </CardTitle>
          <CardDescription>
            Key metrics for successful retirement investing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10-15%</div>
              <p className="text-sm text-muted-foreground">Recommended savings rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">7-10%</div>
              <p className="text-sm text-muted-foreground">Average annual return</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25x</div>
              <p className="text-sm text-muted-foreground">Annual expenses needed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Accounts */}
      <Card>
        <CardHeader>
          <CardTitle>Retirement Account Types</CardTitle>
          <CardDescription>Understanding your investment account options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Different account types offer various tax advantages and contribution limits. Choose the right mix for your situation.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">401(k) / 403(b) - Employer Plans</h4>
                <p className="text-sm text-muted-foreground">
                  Traditional (pre-tax) or Roth (after-tax) contributions. 2024 limit: $23,000 ($30,500 if 50+). Often includes employer matching.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Traditional IRA</h4>
                <p className="text-sm text-muted-foreground">
                  Tax-deductible contributions, taxed on withdrawal. 2024 limit: $7,000 ($8,000 if 50+). Income limits for deductibility apply.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Roth IRA</h4>
                <p className="text-sm text-muted-foreground">
                  After-tax contributions, tax-free growth and withdrawal. Same limits as Traditional IRA. Income limits for contributions apply.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">SEP-IRA / Solo 401(k)</h4>
                <p className="text-sm text-muted-foreground">
                  For self-employed individuals. Higher contribution limits based on income. SEP-IRA: up to 25% of income or $69,000.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Taxable Investment Accounts</h4>
                <p className="text-sm text-muted-foreground">
                  No contribution limits or withdrawal restrictions. Subject to capital gains taxes. Useful for early retirement or excess savings.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Asset Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Asset Allocation Strategy</CardTitle>
          <CardDescription>Balancing risk and return across your portfolio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* Age-Based Allocation */}
          <div className="space-y-3">
            <h4 className="font-semibold">Age-Based Guidelines:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm">20s-30s: 80-90% stocks, 10-20% bonds</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm">40s: 70-80% stocks, 20-30% bonds</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span className="text-sm">50s: 60-70% stocks, 30-40% bonds</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span className="text-sm">60s+: 50-60% stocks, 40-50% bonds</span>
              </div>
            </div>
          </div>

          {/* Diversification */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">Diversification is Key</h4>
                <p className="text-sm text-blue-700">
                  Spread investments across different asset classes, geographic regions, and company sizes to reduce risk while maintaining growth potential.
                </p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Investment Vehicles */}
      <Card>
        <CardHeader>
          <CardTitle>Investment Vehicle Timeline</CardTitle>
          <CardDescription>Building your portfolio step-by-step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Timeline Steps */}
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Emergency Fund First</h4>
                    <p className="text-sm text-muted-foreground">
                      Save 3-6 months of expenses in high-yield savings before investing. This prevents you from withdrawing retirement funds during emergencies.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: Critical</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Employer Match</h4>
                    <p className="text-sm text-muted-foreground">
                      Contribute enough to your 401(k) to get the full employer match. This is essentially free money with immediate 100% returns.
                    </p>
                    <Badge variant="outline" className="mt-2">Return: 100%</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">High-Interest Debt</h4>
                    <p className="text-sm text-muted-foreground">
                      Pay off credit card debt (typically 15-25% interest) before investing. The guaranteed "return" exceeds most investment gains.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: High</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Max Tax-Advantaged Accounts</h4>
                    <p className="text-sm text-muted-foreground">
                      Maximize contributions to IRAs and 401(k)s. Consider Roth vs Traditional based on current vs expected future tax rates.
                    </p>
                    <Badge variant="outline" className="mt-2">Tax Benefits: Significant</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Taxable Investment Accounts</h4>
                    <p className="text-sm text-muted-foreground">
                      Once tax-advantaged accounts are maxed, invest additional savings in taxable accounts for flexibility and early retirement goals.
                    </p>
                    <Badge variant="outline" className="mt-2">Flexibility: Maximum</Badge>
                  </div>
                </div>
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
            Common Investment Mistakes to Avoid
          </CardTitle>
          <CardDescription>Learn from others' expensive errors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Trying to Time the Market</h4>
                  <p className="text-sm text-yellow-700">
                    Even professional investors struggle to time market peaks and valleys. Consistent investing (dollar-cost averaging) typically outperforms timing attempts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800">Panic Selling During Downturns</h4>
                  <p className="text-sm text-red-700">
                    Market crashes are temporary, but selling low locks in losses. Stay invested and continue contributing during market downturns for better long-term returns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-800">High Fees Eroding Returns</h4>
                  <p className="text-sm text-orange-700">
                    A 1% annual fee difference can cost hundreds of thousands over decades. Choose low-cost index funds over expensive actively managed funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expert Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Expert Investment Tips
          </CardTitle>
          <CardDescription>Professional insights for retirement success</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Start Early, Even Small</h4>
              <p className="text-sm text-blue-700">
                Thanks to compound interest, $100/month starting at 25 can outperform $300/month starting at 35. Time in market beats timing the market.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Automate Everything</h4>
              <p className="text-sm text-green-700">
                Set up automatic contributions and rebalancing. Remove emotions and human error from your investment strategy.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Increase Contributions Annually</h4>
              <p className="text-sm text-purple-700">
                Boost contributions by 1-2% each year or when you get raises. This painless approach can dramatically increase your final balance.
              </p>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-800 mb-2">Rebalance Regularly</h4>
              <p className="text-sm text-indigo-700">
                Rebalance your portfolio annually or when allocations drift 5+ percentage points. This maintains your risk level and captures gains.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Investment Resources</CardTitle>
          <CardDescription>Helpful tools and further reading</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Bogleheads Community</h4>
                <p className="text-sm text-muted-foreground">Simple, evidence-based investing philosophy and community</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Portfolio Visualizer</h4>
                <p className="text-sm text-muted-foreground">Backtest and analyze different portfolio allocations</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Morningstar X-Ray Tool</h4>
                <p className="text-sm text-muted-foreground">Analyze your portfolio's asset allocation and overlap</p>
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
          <CardTitle className="text-primary">Ready to Start Investing?</CardTitle>
          <CardDescription>Apply these principles to your retirement planning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Investment Planning
            </Button>
            <Button variant="outline">
              <DollarSign className="h-4 w-4 mr-2" />
              Calculate Savings Goal
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}