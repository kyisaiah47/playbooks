"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Download,
  ExternalLink,
  DollarSign,
  PiggyBank,
  CreditCard,
  TrendingUp,
  Calculator
} from "lucide-react"

export function FinancialPlanningGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Financial Planning for Divorce</h1>
        <p className="text-xl text-muted-foreground">
          Protect your financial future and plan for life after divorce
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
            Financial Impact Overview
          </CardTitle>
          <CardDescription>
            Understanding the financial implications of divorce
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">40-60%</div>
              <p className="text-sm text-muted-foreground">Income Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$15,000</div>
              <p className="text-sm text-muted-foreground">Average Legal Costs</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">18 months</div>
              <p className="text-sm text-muted-foreground">Financial Recovery Time</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Immediate Financial Steps */}
      <Card>
        <CardHeader>
          <CardTitle>Immediate Financial Protection Steps</CardTitle>
          <CardDescription>Critical actions to take as soon as you decide to divorce</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Gather Financial Documents</h4>
                <p className="text-sm text-muted-foreground">
                  Collect tax returns, bank statements, investment accounts, credit card statements, insurance policies, and retirement account statements for the past 3-5 years.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Open Individual Bank Account</h4>
                <p className="text-sm text-muted-foreground">
                  Establish an account in your name only and begin depositing paychecks there. Keep joint accounts open but monitor activity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Establish Individual Credit</h4>
                <p className="text-sm text-muted-foreground">
                  Apply for credit cards in your name only. If you don't have individual credit history, consider becoming an authorized user first.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Monitor Credit Reports</h4>
                <p className="text-sm text-muted-foreground">
                  Order credit reports from all three bureaus to understand your current credit situation and watch for unauthorized activity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Secure Important Documents</h4>
                <p className="text-sm text-muted-foreground">
                  Make copies of all financial documents and store them securely. Consider a safety deposit box in your name only.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Review Insurance Policies</h4>
                <p className="text-sm text-muted-foreground">
                  Understand your coverage for health, auto, home, and life insurance. Determine which policies you can maintain independently.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Asset Inventory Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Complete Asset and Debt Inventory</CardTitle>
          <CardDescription>Comprehensive checklist of what to document</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Assets to Document</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Bank accounts (checking, savings, CDs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Investment accounts (401k, IRA, stocks, bonds)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Real estate (primary home, rental properties)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Vehicles (cars, boats, motorcycles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Business interests and partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Personal property (jewelry, art, collectibles)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Insurance policies (life, disability)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Intellectual property and royalties</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-red-600">Debts to Document</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Mortgage loans (primary, secondary)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Credit card debt (all accounts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Student loans (federal and private)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Auto loans and leases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Personal loans and lines of credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Business debts and obligations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Tax debts and obligations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Medical debt and healthcare obligations</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budgeting for Divorce */}
      <Card>
        <CardHeader>
          <CardTitle>Budgeting for Divorce Costs</CardTitle>
          <CardDescription>Understanding and planning for the financial cost of divorce</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Typical Divorce Costs Breakdown</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Attorney Fees</span>
                  <span className="font-semibold">$8,000 - $25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Court Fees</span>
                  <span className="font-semibold">$200 - $500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mediation Fees</span>
                  <span className="font-semibold">$1,500 - $5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Financial Advisor</span>
                  <span className="font-semibold">$1,000 - $3,000</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Appraisal Fees</span>
                  <span className="font-semibold">$300 - $800 each</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Therapy/Counseling</span>
                  <span className="font-semibold">$100 - $200/session</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Expert Witnesses</span>
                  <span className="font-semibold">$1,000 - $5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Document Preparation</span>
                  <span className="font-semibold">$500 - $1,500</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Post-Divorce Financial Planning */}
      <Card>
        <CardHeader>
          <CardTitle>Planning Your Financial Future</CardTitle>
          <CardDescription>Steps to rebuild and secure your financial independence</CardDescription>
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
                    <h4 className="font-semibold">Create Your New Budget</h4>
                    <p className="text-sm text-muted-foreground">
                      Calculate your post-divorce income and expenses. Account for child support, alimony, and new housing costs.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: High</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Emergency Fund</h4>
                    <p className="text-sm text-muted-foreground">
                      Build an emergency fund covering 3-6 months of expenses. Start with $1,000 and build from there.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: High</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Update Insurance Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Secure health, auto, homeowners/renters, and life insurance. Update beneficiaries on all policies.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: Medium</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Retirement Planning</h4>
                    <p className="text-sm text-muted-foreground">
                      Reassess retirement goals and increase contributions if possible. Consider catch-up contributions if over 50.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: Medium</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Estate Planning Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      Update will, power of attorney, and beneficiaries on all accounts. Consider creating a trust if appropriate.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: Medium</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    6
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Long-term Wealth Building</h4>
                    <p className="text-sm text-muted-foreground">
                      Develop an investment strategy aligned with your new goals. Consider working with a financial advisor.
                    </p>
                    <Badge variant="outline" className="mt-2">Priority: Low</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-800">Financial Protection Warning</h4>
            <p className="text-sm text-yellow-700">
              Do not hide assets, empty joint accounts, or make large purchases without consulting your attorney. These actions can negatively impact your divorce settlement and may have legal consequences.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Financial Expert Tips
          </CardTitle>
          <CardDescription>Professional insights for financial success after divorce</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Think Long-term</h4>
              <p className="text-sm text-blue-700">
                Consider the tax implications and future value of assets, not just their current value. A retirement account and cash of equal value are not equivalent.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Maintain Credit</h4>
              <p className="text-sm text-green-700">
                Keep joint accounts open until the divorce is final, but remove your spouse as an authorized user on your individual accounts.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Get Professional Help</h4>
              <p className="text-sm text-purple-700">
                Work with a Certified Divorce Financial Analyst (CDFA) to understand the long-term implications of settlement decisions.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Document Everything</h4>
              <p className="text-sm text-orange-700">
                Keep detailed records of all financial transactions during the divorce process. This protects you and aids in settlement negotiations.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Avoid Emotional Spending</h4>
              <p className="text-sm text-red-700">
                Resist the urge to make large purchases during the divorce process. Stick to your budget and avoid debt accumulation.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">Plan for Healthcare</h4>
              <p className="text-sm text-teal-700">
                If you'll lose coverage through your spouse's plan, research COBRA continuation and marketplace options before you need them.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Resources and Tools</CardTitle>
          <CardDescription>Helpful calculators and professional services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Divorce Cost Calculator</h4>
                <p className="text-sm text-muted-foreground">Estimate your divorce expenses based on your situation</p>
              </div>
              <Button variant="outline" size="sm">
                <Calculator className="h-4 w-4 mr-2" />
                Calculate
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Post-Divorce Budget Planner</h4>
                <p className="text-sm text-muted-foreground">Plan your finances for life after divorce</p>
              </div>
              <Button variant="outline" size="sm">
                <PiggyBank className="h-4 w-4 mr-2" />
                Plan
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Find a CDFA Professional</h4>
                <p className="text-sm text-muted-foreground">Locate Certified Divorce Financial Analysts in your area</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Credit Monitoring Services</h4>
                <p className="text-sm text-muted-foreground">Free and paid options to monitor your credit during divorce</p>
              </div>
              <Button variant="outline" size="sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Compare
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Take Action on Your Finances</CardTitle>
          <CardDescription>Start organizing your financial information today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Financial Planning Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Asset Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}