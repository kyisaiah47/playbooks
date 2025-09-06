"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp,
  Target,
  DollarSign,
  Calendar,
  PiggyBank,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus
} from "lucide-react"
import { useRetirementPlanning } from "@/contexts/retirement-planning-context"

export function RetirementPlanningOverview() {
  const { data, retirementData } = useRetirementPlanning()
  
  const [metrics, setMetrics] = useState({
    totalSaved: 0,
    retirementGoal: 1000000,
    monthlyContributions: 0,
    yearsToRetirement: 0,
    overallProgress: 0,
    completedGoals: 0,
    totalGoals: 0,
    portfolioValue: 0,
    monthlyExpensesPlan: 0
  })

  useEffect(() => {
    // Load data from localStorage for all components
    const savedSavings = localStorage.getItem('retirement-planning-savings-items')
    const savedGoals = localStorage.getItem('retirement-planning-goals-items') 
    const savedPortfolio = localStorage.getItem('retirement-planning-portfolio-items')
    const savedExpenses = localStorage.getItem('retirement-planning-expenses-items')

    let totalSaved = 0
    let monthlyContributions = 0
    let portfolioValue = 0
    let monthlyExpensesPlan = 0
    let completedGoals = 0
    let totalGoals = 0

    if (savedSavings) {
      const savings = JSON.parse(savedSavings)
      totalSaved = savings.reduce((sum: number, item: any) => sum + item.currentBalance, 0)
      monthlyContributions = savings.reduce((sum: number, item: any) => sum + item.monthlyContribution, 0)
    }

    if (savedPortfolio) {
      const portfolio = JSON.parse(savedPortfolio)
      portfolioValue = portfolio.reduce((sum: number, item: any) => sum + item.currentValue, 0)
    }

    if (savedExpenses) {
      const expenses = JSON.parse(savedExpenses)
      monthlyExpensesPlan = expenses.reduce((sum: number, item: any) => sum + item.monthlyAmount, 0)
    }

    if (savedGoals) {
      const goals = JSON.parse(savedGoals)
      totalGoals = goals.length
      completedGoals = goals.filter((goal: any) => goal.status === 'completed').length
    }

    const currentAge = retirementData?.currentAge || 30
    const retirementAge = retirementData?.targetRetirementAge || 65
    const yearsToRetirement = Math.max(0, retirementAge - currentAge)
    const retirementGoal = retirementData?.desiredRetirementIncome ? retirementData.desiredRetirementIncome * 25 : 1000000
    const overallProgress = retirementGoal > 0 ? Math.min(100, (totalSaved / retirementGoal) * 100) : 0

    setMetrics({
      totalSaved,
      retirementGoal,
      monthlyContributions,
      yearsToRetirement,
      overallProgress,
      completedGoals,
      totalGoals,
      portfolioValue,
      monthlyExpensesPlan
    })
  }, [retirementData])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Retirement Planning Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and key milestones</p>
          {retirementData?.fullName && (
            <p className="text-sm text-muted-foreground mt-1">Welcome back, {retirementData.fullName}!</p>
          )}
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retirement Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.overallProgress.toFixed(1)}%</div>
            <Progress value={metrics.overallProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {formatCurrency(metrics.totalSaved)} of {formatCurrency(metrics.retirementGoal)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(metrics.totalSaved)}</div>
            <p className="text-xs text-muted-foreground">across all accounts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Contributions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(metrics.monthlyContributions)}</div>
            <p className="text-xs text-muted-foreground">per month savings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Years to Retirement</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.yearsToRetirement}</div>
            <p className="text-xs text-muted-foreground">years remaining</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest updates and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Updated 401(k) contribution</span>
                <Badge variant="secondary">Today</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Completed retirement goal milestone</span>
                <Badge variant="outline">2 days ago</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">Added new investment to portfolio</span>
                <Badge variant="outline">1 week ago</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-sm">Updated expense planning budget</span>
                <Badge variant="outline">2 weeks ago</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>What needs attention next</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Review investment portfolio performance</span>
                <Badge variant="outline">Due Soon</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Increase 401(k) contribution rate</span>
                <Badge variant="secondary">This Month</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Plan retirement income strategy</span>
                <Badge variant="outline">Next Quarter</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Update retirement expense estimates</span>
                <Badge variant="outline">This Year</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Performance</CardTitle>
            <CardDescription>Your investment portfolio value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatCurrency(metrics.portfolioValue)}</div>
            <p className="text-sm text-muted-foreground mt-2">
              Total investment value
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Goal Progress</CardTitle>
            <CardDescription>Retirement milestones achieved</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.completedGoals}/{metrics.totalGoals}</div>
            <p className="text-sm text-muted-foreground mt-2">
              Goals completed
            </p>
            {metrics.totalGoals > 0 && (
              <Progress value={(metrics.completedGoals / metrics.totalGoals) * 100} className="mt-3" />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Planned Expenses</CardTitle>
            <CardDescription>Monthly retirement budget</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatCurrency(metrics.monthlyExpensesPlan)}</div>
            <p className="text-sm text-muted-foreground mt-2">
              Per month in retirement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your retirement planning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <PiggyBank className="h-6 w-6" />
              <span className="text-sm">Add Savings Account</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">Track Investment</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Target className="h-6 w-6" />
              <span className="text-sm">Set New Goal</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Plan Expenses</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}