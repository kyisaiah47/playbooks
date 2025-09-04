"use client"

import { useState } from "react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DollarSign,
  Plus,
  TrendingUp,
  TrendingDown,
  PieChart,
  Calendar,
  Target,
  AlertCircle,
} from "lucide-react"

interface Expense {
  id: string
  category: string
  item: string
  amount: number
  date: string
  notes: string
}

export function BudgetPlanning() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [expenses] = useState<Expense[]>([
    { id: '1', category: 'gear', item: 'Stroller', amount: 350, date: '2024-01-15', notes: 'Travel system with car seat' },
    { id: '2', category: 'nursery', item: 'Crib', amount: 400, date: '2024-01-20', notes: 'Convertible to toddler bed' },
    { id: '3', category: 'clothing', item: 'Baby clothes (0-6 months)', amount: 150, date: '2024-02-01', notes: 'Mix of new and hand-me-downs' },
    { id: '4', category: 'healthcare', item: 'Prenatal vitamins', amount: 25, date: '2024-02-05', notes: '3-month supply' },
    { id: '5', category: 'gear', item: 'Car seat base', amount: 80, date: '2024-02-10', notes: 'Extra base for second car' }
  ])

  const categories = [
    { id: 'nursery', name: 'Nursery Setup', color: 'bg-blue-500', allocated: babyPlanningData.budgetCategories.nursery },
    { id: 'clothing', name: 'Baby Clothes', color: 'bg-pink-500', allocated: babyPlanningData.budgetCategories.clothing },
    { id: 'gear', name: 'Baby Gear', color: 'bg-green-500', allocated: babyPlanningData.budgetCategories.gear },
    { id: 'healthcare', name: 'Healthcare', color: 'bg-red-500', allocated: babyPlanningData.budgetCategories.healthcare },
    { id: 'childcare', name: 'Childcare', color: 'bg-purple-500', allocated: babyPlanningData.budgetCategories.childcare },
    { id: 'education', name: 'Education Fund', color: 'bg-orange-500', allocated: babyPlanningData.budgetCategories.education }
  ]

  const getSpentByCategory = (categoryId: string) => {
    return expenses
      .filter(expense => expense.category === categoryId)
      .reduce((sum, expense) => sum + expense.amount, 0)
  }

  const totalAllocated = Object.values(babyPlanningData.budgetCategories).reduce((sum, amount) => sum + amount, 0)
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <DollarSign className="mr-2 h-8 w-8" />
          Budget Planning
        </h1>
        <p className="text-muted-foreground">
          Track your baby-related expenses and manage your budget
        </p>
      </div>

      {/* Budget Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${babyPlanningData.budgetTotal.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Overall budget limit</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Allocated</CardTitle>
            <PieChart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalAllocated.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round((totalAllocated / babyPlanningData.budgetTotal) * 100)}% of total budget
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Spent</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpent.toLocaleString()}</div>
            <Progress value={(totalSpent / babyPlanningData.budgetTotal) * 100} className="mt-2 h-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round((totalSpent / babyPlanningData.budgetTotal) * 100)}% of total budget
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(babyPlanningData.budgetTotal - totalSpent).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Available to spend</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="categories" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="planning">Planning</TabsTrigger>
          <TabsTrigger value="savings">Savings Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Budget Categories</h3>
            <Button variant="outline">
              Adjust Budget
            </Button>
          </div>

          <div className="grid gap-4">
            {categories.map((category) => {
              const spent = getSpentByCategory(category.id)
              const percentage = Math.round((spent / category.allocated) * 100)
              
              return (
                <Card key={category.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${category.color}`}></div>
                        <div className="font-medium">{category.name}</div>
                      </div>
                      <Badge variant={percentage > 100 ? "destructive" : percentage > 80 ? "secondary" : "outline"}>
                        {percentage}%
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Allocated: ${category.allocated.toLocaleString()}</span>
                        <span>Spent: ${spent.toLocaleString()}</span>
                      </div>
                      <Progress value={Math.min(percentage, 100)} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        ${(category.allocated - spent).toLocaleString()} remaining
                        {percentage > 100 && ` (${spent - category.allocated} over budget)`}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Expenses</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Expense
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log New Expense</DialogTitle>
                  <DialogDescription>
                    Record a baby-related purchase or expense
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="item">Item/Description</Label>
                    <Input id="item" placeholder="e.g., Baby Monitor" />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select id="category" className="w-full p-2 border rounded-md">
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" type="number" placeholder="150.00" />
                  </div>
                  <div>
                    <Label htmlFor="date">Purchase Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Input id="notes" placeholder="Brand, store, special details..." />
                  </div>
                  <Button className="w-full">Add Expense</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-3">
            {expenses
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((expense) => {
                const category = categories.find(cat => cat.id === expense.category)
                return (
                  <Card key={expense.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded ${category?.color}`}></div>
                            <div className="font-medium">{expense.item}</div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {category?.name} • {new Date(expense.date).toLocaleDateString()}
                          </div>
                          {expense.notes && (
                            <div className="text-xs text-muted-foreground">{expense.notes}</div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-lg">${expense.amount.toLocaleString()}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </TabsContent>

        <TabsContent value="planning" className="space-y-4">
          <h3 className="text-lg font-semibold">Financial Planning Tools</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Budget Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium mb-2">If spread over 9 months:</div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Total budget:</span>
                      <span>${babyPlanningData.budgetTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Per month:</span>
                      <span>${Math.round(babyPlanningData.budgetTotal / 9).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Already spent:</span>
                      <span>${totalSpent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Remaining to save:</span>
                      <span>${(babyPlanningData.budgetTotal - totalSpent).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Savings Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">Emergency Fund</span>
                    <span className="text-sm text-muted-foreground">$2,000</span>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">First Year Expenses</span>
                    <span className="text-sm text-muted-foreground">$5,000</span>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">Childcare Fund</span>
                    <span className="text-sm text-muted-foreground">$8,000</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Set Savings Goals
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-amber-600" />
                Budget Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories
                .filter(cat => {
                  const spent = getSpentByCategory(cat.id)
                  return (spent / cat.allocated) > 0.8
                })
                .map(cat => {
                  const spent = getSpentByCategory(cat.id)
                  const percentage = Math.round((spent / cat.allocated) * 100)
                  return (
                    <div key={cat.id} className="flex items-center space-x-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <div className="text-sm">
                        <span className="font-medium">{cat.name}</span> is at {percentage}% of budget
                        {percentage > 100 && <span className="text-red-600"> (over budget!)</span>}
                      </div>
                    </div>
                  )
                })}
              
              {categories.every(cat => (getSpentByCategory(cat.id) / cat.allocated) <= 0.8) && (
                <div className="text-center py-4 text-muted-foreground">
                  All categories are within budget limits 🎉
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          <h3 className="text-lg font-semibold">Money-Saving Tips</h3>
          
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Baby Gear & Clothing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>• Buy secondhand for items baby will quickly outgrow</div>
                <div>• Ask friends and family for hand-me-downs</div>
                <div>• Focus on essentials first - avoid impulse purchases</div>
                <div>• Consider borrowing items you'll only use temporarily</div>
                <div>• Look for end-of-season sales and clearance items</div>
                <div>• Check for registry completion discounts</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nursery Setup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>• Start with basics - you can add decor later</div>
                <div>• Choose convertible furniture that grows with baby</div>
                <div>• DIY simple decor projects instead of buying expensive art</div>
                <div>• Use items you already own when possible</div>
                <div>• Shop sales during off-peak times</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Healthcare & Childcare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>• Review insurance coverage and understand benefits</div>
                <div>• Research childcare options early for better rates</div>
                <div>• Consider family members for occasional childcare</div>
                <div>• Look into FSA/HSA accounts for healthcare expenses</div>
                <div>• Take advantage of free parenting classes</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Long-term Financial Planning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>• Start a college savings account (529 plan) early</div>
                <div>• Update life insurance and beneficiaries</div>
                <div>• Consider dependent care FSA for childcare expenses</div>
                <div>• Review and adjust monthly budget for ongoing costs</div>
                <div>• Plan for reduced income during parental leave</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}