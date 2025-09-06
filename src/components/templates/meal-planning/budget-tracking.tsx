"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Plus,
  Edit,
  Trash2,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  ShoppingCart,
  AlertCircle
} from "lucide-react"
import { useMealPlanning } from "@/contexts/meal-planning-context"

interface BudgetCategory {
  id: string
  name: string
  budgetAmount: number
  spentAmount: number
  color: string
}

interface BudgetExpense {
  id: string
  name: string
  amount: number
  category: string
  date: string
  store?: string
  notes?: string
  isRecurring: boolean
  createdAt: Date
  updatedAt: Date
}

export function BudgetTracking() {
  const { data, updateData } = useMealPlanning()
  const [expenses, setExpenses] = useState<BudgetExpense[]>([])
  const [categories] = useState<BudgetCategory[]>([
    { id: '1', name: 'Groceries', budgetAmount: 400, spentAmount: 0, color: 'bg-green-100 text-green-800' },
    { id: '2', name: 'Dining Out', budgetAmount: 200, spentAmount: 0, color: 'bg-blue-100 text-blue-800' },
    { id: '3', name: 'Snacks', budgetAmount: 75, spentAmount: 0, color: 'bg-orange-100 text-orange-800' },
    { id: '4', name: 'Special Ingredients', budgetAmount: 50, spentAmount: 0, color: 'bg-purple-100 text-purple-800' },
  ])
  
  const [isAddingExpense, setIsAddingExpense] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7))

  const [formData, setFormData] = useState({
    name: '',
    amount: 0,
    category: 'Groceries',
    date: new Date().toISOString().split('T')[0],
    store: '',
    notes: '',
    isRecurring: false,
  })

  useEffect(() => {
    const savedExpenses = localStorage.getItem('meal-planning-budget')
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses))
    }
  }, [])

  const saveExpenses = (newExpenses: BudgetExpense[]) => {
    setExpenses(newExpenses)
    localStorage.setItem('meal-planning-budget', JSON.stringify(newExpenses))
  }

  const addExpense = () => {
    const newExpense: BudgetExpense = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveExpenses([...expenses, newExpense])
    resetForm()
    setIsAddingExpense(false)
  }

  const updateExpense = (id: string, updates: Partial<BudgetExpense>) => {
    const updatedExpenses = expenses.map(expense => 
      expense.id === id 
        ? { ...expense, ...updates, updatedAt: new Date() }
        : expense
    )
    saveExpenses(updatedExpenses)
  }

  const deleteExpense = (id: string) => {
    const filteredExpenses = expenses.filter(expense => expense.id !== id)
    saveExpenses(filteredExpenses)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      amount: 0,
      category: 'Groceries',
      date: new Date().toISOString().split('T')[0],
      store: '',
      notes: '',
      isRecurring: false,
    })
  }

  // Filter expenses for selected month
  const monthlyExpenses = expenses.filter(expense => 
    expense.date.startsWith(selectedMonth)
  )

  // Calculate category spending for the selected month
  const categorySpending = categories.map(category => {
    const spent = monthlyExpenses
      .filter(expense => expense.category === category.name)
      .reduce((sum, expense) => sum + expense.amount, 0)
    
    return {
      ...category,
      spentAmount: spent,
      progressPercentage: category.budgetAmount > 0 ? (spent / category.budgetAmount) * 100 : 0,
      remainingAmount: category.budgetAmount - spent,
      isOverBudget: spent > category.budgetAmount
    }
  })

  // Calculate totals
  const totalBudget = categories.reduce((sum, cat) => sum + cat.budgetAmount, 0)
  const totalSpent = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0)
  const totalRemaining = totalBudget - totalSpent
  const overallProgress = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0

  // Get recent expenses (last 5)
  const recentExpenses = expenses
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  // Calculate trends (compare current month to previous month)
  const previousMonth = new Date(selectedMonth + '-01')
  previousMonth.setMonth(previousMonth.getMonth() - 1)
  const previousMonthString = previousMonth.toISOString().slice(0, 7)
  
  const previousMonthSpending = expenses
    .filter(expense => expense.date.startsWith(previousMonthString))
    .reduce((sum, expense) => sum + expense.amount, 0)
  
  const spendingTrend = previousMonthSpending > 0 
    ? ((totalSpent - previousMonthSpending) / previousMonthSpending) * 100 
    : 0

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Budget Tracking</h1>
          <p className="text-muted-foreground">Monitor your food expenses and stay within budget</p>
        </div>
        <Dialog open={isAddingExpense} onOpenChange={setIsAddingExpense}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add Food Expense</DialogTitle>
              <DialogDescription>
                Record a new food or dining expense.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Expense Description</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Weekly groceries, Lunch at cafe"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: parseFloat(e.target.value)})}
                    placeholder="0.00"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="store">Store/Restaurant (Optional)</Label>
                <Input
                  id="store"
                  value={formData.store}
                  onChange={(e) => setFormData({...formData, store: e.target.value})}
                  placeholder="e.g., Whole Foods, Chipotle"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional details about this expense..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addExpense}>
                Add Expense
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Month Selector */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="monthSelect">Viewing Month:</Label>
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => {
                  const date = new Date()
                  date.setMonth(date.getMonth() - i)
                  const value = date.toISOString().slice(0, 7)
                  const label = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
                  return (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Budget</p>
                <p className="text-2xl font-bold">${totalBudget.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-2xl font-bold">${totalSpent.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Remaining</p>
                <p className="text-2xl font-bold">${totalRemaining.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              {spendingTrend >= 0 ? (
                <TrendingUp className="h-5 w-5 text-red-500" />
              ) : (
                <TrendingDown className="h-5 w-5 text-green-500" />
              )}
              <div>
                <p className="text-sm text-muted-foreground">vs Last Month</p>
                <p className={`text-2xl font-bold ${spendingTrend >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {spendingTrend > 0 ? '+' : ''}{spendingTrend.toFixed(1)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Budget Progress</CardTitle>
          <CardDescription>
            ${totalSpent.toFixed(2)} spent of ${totalBudget.toFixed(2)} budget
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={overallProgress} className="w-full h-3" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>{overallProgress.toFixed(1)}% used</span>
            <span>{totalRemaining >= 0 ? `$${totalRemaining.toFixed(2)} remaining` : `$${Math.abs(totalRemaining).toFixed(2)} over budget`}</span>
          </div>
          {totalRemaining < 0 && (
            <div className="flex items-center gap-2 mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <p className="text-sm text-red-700">You're over budget this month!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Category Breakdown</CardTitle>
          <CardDescription>Budget vs actual spending by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {categorySpending.map((category) => (
              <div key={category.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Badge className={category.color} variant="secondary">
                      {category.name}
                    </Badge>
                    {category.isOverBudget && <AlertCircle className="h-4 w-4 text-red-500" />}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ${category.spentAmount.toFixed(2)} / ${category.budgetAmount.toFixed(2)}
                  </div>
                </div>
                <Progress 
                  value={Math.min(category.progressPercentage, 100)} 
                  className={`h-2 ${category.isOverBudget ? '[&>[data-value]]:bg-red-500' : ''}`}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{category.progressPercentage.toFixed(1)}% used</span>
                  <span className={category.isOverBudget ? 'text-red-600' : ''}>
                    {category.isOverBudget 
                      ? `$${Math.abs(category.remainingAmount).toFixed(2)} over`
                      : `$${category.remainingAmount.toFixed(2)} remaining`
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Expenses and Expenses Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <CardDescription>Your latest food expenses</CardDescription>
          </CardHeader>
          <CardContent>
            {recentExpenses.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-sm text-muted-foreground">No expenses recorded yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentExpenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{expense.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {expense.store && `${expense.store} • `}
                        {new Date(expense.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${expense.amount.toFixed(2)}</p>
                      <Badge variant="outline" className="text-xs">
                        {expense.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
            <CardDescription>All expenses for {new Date(selectedMonth + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</CardDescription>
          </CardHeader>
          <CardContent>
            {monthlyExpenses.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No expenses recorded for this month.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyExpenses
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{expense.name}</p>
                          {expense.store && <p className="text-xs text-muted-foreground">{expense.store}</p>}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {expense.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${expense.amount.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteExpense(expense.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}