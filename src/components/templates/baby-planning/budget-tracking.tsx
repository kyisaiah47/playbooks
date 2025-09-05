"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  DollarSign,
  Plus,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  CreditCard,
  CalendarIcon,
  AlertTriangle,
  Target,
  Trash2,
  Edit
} from "lucide-react"

interface Expense {
  id: string
  date: Date
  amount: number
  category: string
  description: string
  paymentMethod: string
  recurring: boolean
  notes?: string
}

interface BudgetCategory {
  id: string
  name: string
  budgetAmount: number
  spent: number
  color: string
}

interface SavingsGoal {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  deadline: Date
  description?: string
}

const expenseSchema = z.object({
  date: z.date(),
  amount: z.number().min(0.01, "Amount must be greater than 0"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  recurring: z.boolean(),
  notes: z.string().optional(),
})

const budgetCategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  budgetAmount: z.number().min(0, "Budget amount must be positive"),
})

const savingsGoalSchema = z.object({
  name: z.string().min(1, "Goal name is required"),
  targetAmount: z.number().min(0.01, "Target amount must be greater than 0"),
  currentAmount: z.number().min(0, "Current amount must be positive"),
  deadline: z.date(),
  description: z.string().optional(),
})

export function BudgetTracking() {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: "1",
      date: new Date("2024-02-01"),
      amount: 399,
      category: "Nursery Furniture",
      description: "Convertible Crib",
      paymentMethod: "Credit Card",
      recurring: false,
      notes: "Target online purchase"
    },
    {
      id: "2", 
      date: new Date("2024-02-05"),
      amount: 249,
      category: "Travel & Safety",
      description: "Infant Car Seat",
      paymentMethod: "Debit Card",
      recurring: false,
    },
    {
      id: "3",
      date: new Date("2024-02-10"),
      amount: 85,
      category: "Baby Clothes",
      description: "Newborn clothing bundle",
      paymentMethod: "Cash",
      recurring: false,
    },
    {
      id: "4",
      date: new Date("2024-02-15"),
      amount: 150,
      category: "Healthcare",
      description: "Prenatal vitamins & supplements",
      paymentMethod: "Credit Card",
      recurring: true,
    }
  ])

  const [budgetCategories, setBudgetCategories] = useState<BudgetCategory[]>([
    {
      id: "1",
      name: "Nursery Furniture",
      budgetAmount: 2000,
      spent: 399,
      color: "bg-primary"
    },
    {
      id: "2",
      name: "Baby Clothes",
      budgetAmount: 500,
      spent: 85,
      color: "bg-accent"
    },
    {
      id: "3",
      name: "Travel & Safety", 
      budgetAmount: 800,
      spent: 249,
      color: "bg-secondary"
    },
    {
      id: "4",
      name: "Healthcare",
      budgetAmount: 1200,
      spent: 150,
      color: "bg-muted"
    },
    {
      id: "5",
      name: "Feeding & Nursing",
      budgetAmount: 400,
      spent: 0,
      color: "bg-primary"
    },
    {
      id: "6",
      name: "Electronics",
      budgetAmount: 600,
      spent: 0,
      color: "bg-accent"
    }
  ])

  const [savingsGoals, setSavingsGoals] = useState<SavingsGoal[]>([
    {
      id: "1",
      name: "Emergency Baby Fund",
      targetAmount: 5000,
      currentAmount: 2800,
      deadline: new Date("2024-06-01"),
      description: "Emergency fund for unexpected baby expenses"
    },
    {
      id: "2",
      name: "College Savings",
      targetAmount: 10000,
      currentAmount: 1500,
      deadline: new Date("2025-01-01"),
      description: "Start college fund early"
    },
    {
      id: "3",
      name: "Nursery Setup Fund",
      targetAmount: 3000,
      currentAmount: 2200,
      deadline: new Date("2024-05-01"),
      description: "Complete nursery furnishing"
    }
  ])

  const [isAddingExpense, setIsAddingExpense] = useState(false)
  const [isAddingBudgetCategory, setIsAddingBudgetCategory] = useState(false)
  const [isAddingSavingsGoal, setIsAddingSavingsGoal] = useState(false)

  const expenseForm = useForm({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      date: new Date(),
      amount: 0,
      category: "",
      description: "",
      paymentMethod: "",
      recurring: false,
      notes: "",
    },
  })

  const budgetCategoryForm = useForm({
    resolver: zodResolver(budgetCategorySchema),
    defaultValues: {
      name: "",
      budgetAmount: 0,
    },
  })

  const savingsGoalForm = useForm({
    resolver: zodResolver(savingsGoalSchema),
    defaultValues: {
      name: "",
      targetAmount: 0,
      currentAmount: 0,
      deadline: new Date(),
      description: "",
    },
  })

  const expenseCategories = [
    "Nursery Furniture",
    "Baby Clothes",
    "Feeding & Nursing",
    "Diapering",
    "Bath & Skincare",
    "Travel & Safety",
    "Electronics",
    "Toys & Books",
    "Nursery Decor",
    "Healthcare",
    "Maternity",
    "Childcare",
    "Insurance",
    "Other"
  ]

  const paymentMethods = [
    "Credit Card",
    "Debit Card",
    "Cash",
    "Check",
    "Bank Transfer",
    "Gift Card"
  ]

  const onSubmitExpense = (data: z.infer<typeof expenseSchema>) => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      ...data,
    }
    setExpenses([...expenses, newExpense])
    
    // Update budget category spending
    setBudgetCategories(categories =>
      categories.map(cat =>
        cat.name === data.category
          ? { ...cat, spent: cat.spent + data.amount }
          : cat
      )
    )
    
    setIsAddingExpense(false)
    expenseForm.reset()
  }

  const onSubmitBudgetCategory = (data: z.infer<typeof budgetCategorySchema>) => {
    const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-muted", "bg-destructive", "bg-primary"]
    const newCategory: BudgetCategory = {
      id: Date.now().toString(),
      ...data,
      spent: 0,
      color: colors[budgetCategories.length % colors.length],
    }
    setBudgetCategories([...budgetCategories, newCategory])
    setIsAddingBudgetCategory(false)
    budgetCategoryForm.reset()
  }

  const onSubmitSavingsGoal = (data: z.infer<typeof savingsGoalSchema>) => {
    const newGoal: SavingsGoal = {
      id: Date.now().toString(),
      ...data,
    }
    setSavingsGoals([...savingsGoals, newGoal])
    setIsAddingSavingsGoal(false)
    savingsGoalForm.reset()
  }

  const updateSavingsGoalAmount = (id: string, amount: number) => {
    setSavingsGoals(goals =>
      goals.map(goal =>
        goal.id === id
          ? { ...goal, currentAmount: Math.max(0, amount) }
          : goal
      )
    )
  }

  const deleteExpense = (id: string) => {
    const expense = expenses.find(e => e.id === id)
    if (expense) {
      setBudgetCategories(categories =>
        categories.map(cat =>
          cat.name === expense.category
            ? { ...cat, spent: Math.max(0, cat.spent - expense.amount) }
            : cat
        )
      )
    }
    setExpenses(expenses.filter(e => e.id !== id))
  }

  const deleteBudgetCategory = (id: string) => {
    setBudgetCategories(budgetCategories.filter(cat => cat.id !== id))
  }

  const deleteSavingsGoal = (id: string) => {
    setSavingsGoals(savingsGoals.filter(goal => goal.id !== id))
  }

  // Calculate totals
  const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.budgetAmount, 0)
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0)
  const totalSavingsTarget = savingsGoals.reduce((sum, goal) => sum + goal.targetAmount, 0)
  const totalSavingsCurrent = savingsGoals.reduce((sum, goal) => sum + goal.currentAmount, 0)
  const monthlyExpenses = expenses.filter(e => {
    const expenseMonth = e.date.getMonth()
    const currentMonth = new Date().getMonth()
    return expenseMonth === currentMonth
  }).reduce((sum, e) => sum + e.amount, 0)

  // Budget status analysis
  const overBudgetCategories = budgetCategories.filter(cat => cat.spent > cat.budgetAmount)
  const nearBudgetCategories = budgetCategories.filter(cat => 
    cat.spent > cat.budgetAmount * 0.8 && cat.spent <= cat.budgetAmount
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Budget Tracking</h1>
        <p className="text-muted-foreground">Track your baby-related expenses and savings goals</p>
      </div>

      {/* Budget Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              of ${totalBudget.toLocaleString()} budgeted
            </p>
            <Progress value={(totalSpent / Math.max(totalBudget, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${monthlyExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {expenses.filter(e => e.date.getMonth() === new Date().getMonth()).length} transactions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Progress</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSavingsCurrent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              of ${totalSavingsTarget.toLocaleString()} target
            </p>
            <Progress value={(totalSavingsCurrent / Math.max(totalSavingsTarget, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Status</CardTitle>
            {overBudgetCategories.length > 0 ? (
              <AlertTriangle className="h-4 w-4 text-destructive" />
            ) : (
              <Target className="h-4 w-4 text-primary" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {overBudgetCategories.length > 0 ? overBudgetCategories.length : "✓"}
            </div>
            <p className="text-xs text-muted-foreground">
              {overBudgetCategories.length > 0 ? "categories over budget" : "On track"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Alerts */}
      {(overBudgetCategories.length > 0 || nearBudgetCategories.length > 0) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-secondary-foreground" />
              Budget Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {overBudgetCategories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <span className="font-medium text-destructive">{cat.name}</span>
                  <span className="text-sm text-destructive">
                    ${cat.spent} / ${cat.budgetAmount} (${cat.spent - cat.budgetAmount} over)
                  </span>
                </div>
              ))}
              {nearBudgetCategories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <span className="font-medium text-secondary-foreground">{cat.name}</span>
                  <span className="text-sm text-secondary-foreground">
                    ${cat.spent} / ${cat.budgetAmount} (80% used)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="expenses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="budget">Budget Categories</TabsTrigger>
          <TabsTrigger value="savings">Savings Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="expenses" className="space-y-4">
          {/* Expenses Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Expense Tracking</CardTitle>
                <CardDescription>Log your baby-related purchases</CardDescription>
              </div>
              <Dialog open={isAddingExpense} onOpenChange={setIsAddingExpense}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Expense
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                  </DialogHeader>
                  <Form {...expenseForm}>
                    <form onSubmit={expenseForm.handleSubmit(onSubmitExpense)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={expenseForm.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick date</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={expenseForm.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  {...field}
                                  onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={expenseForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {expenseCategories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                      {category}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={expenseForm.control}
                          name="paymentMethod"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Payment Method</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select method" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {paymentMethods.map((method) => (
                                    <SelectItem key={method} value={method}>
                                      {method}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={expenseForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Input placeholder="What did you buy?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={expenseForm.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Notes</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Additional details..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingExpense(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add Expense</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenses.slice(0, 10).map((expense) => (
                  <div key={expense.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold">{expense.description}</h4>
                        <Badge variant="outline">{expense.category}</Badge>
                        {expense.recurring && (
                          <Badge variant="secondary">Recurring</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{format(expense.date, "MMM d, yyyy")}</span>
                        <span className="flex items-center">
                          <CreditCard className="h-3 w-3 mr-1" />
                          {expense.paymentMethod}
                        </span>
                      </div>
                      {expense.notes && (
                        <p className="text-sm text-muted-foreground mt-1">{expense.notes}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">${expense.amount.toFixed(2)}</div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteExpense(expense.id)}
                        className="mt-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-4">
          {/* Budget Categories Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Budget Categories</CardTitle>
                <CardDescription>Set spending limits for different expense types</CardDescription>
              </div>
              <Dialog open={isAddingBudgetCategory} onOpenChange={setIsAddingBudgetCategory}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Budget Category</DialogTitle>
                  </DialogHeader>
                  <Form {...budgetCategoryForm}>
                    <form onSubmit={budgetCategoryForm.handleSubmit(onSubmitBudgetCategory)} className="space-y-4">
                      <FormField
                        control={budgetCategoryForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Baby Gear" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={budgetCategoryForm.control}
                        name="budgetAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Amount</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingBudgetCategory(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add Category</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {budgetCategories.map((category) => {
                  const percentage = (category.spent / Math.max(category.budgetAmount, 1)) * 100
                  const isOverBudget = category.spent > category.budgetAmount
                  
                  return (
                    <div key={category.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{category.name}</h3>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => deleteBudgetCategory(category.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Spent: ${category.spent.toLocaleString()}</span>
                          <span>Budget: ${category.budgetAmount.toLocaleString()}</span>
                        </div>
                        <Progress 
                          value={Math.min(percentage, 100)} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{percentage.toFixed(1)}% used</span>
                          {isOverBudget ? (
                            <span className="text-destructive font-medium">
                              ${(category.spent - category.budgetAmount).toLocaleString()} over budget
                            </span>
                          ) : (
                            <span className="text-primary">
                              ${(category.budgetAmount - category.spent).toLocaleString()} remaining
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          {/* Savings Goals Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Savings Goals</CardTitle>
                <CardDescription>Track your baby-related savings milestones</CardDescription>
              </div>
              <Dialog open={isAddingSavingsGoal} onOpenChange={setIsAddingSavingsGoal}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Goal
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Savings Goal</DialogTitle>
                  </DialogHeader>
                  <Form {...savingsGoalForm}>
                    <form onSubmit={savingsGoalForm.handleSubmit(onSubmitSavingsGoal)} className="space-y-4">
                      <FormField
                        control={savingsGoalForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Goal Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., College Fund" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={savingsGoalForm.control}
                          name="targetAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Target Amount</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  {...field}
                                  onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={savingsGoalForm.control}
                          name="currentAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Amount</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  {...field}
                                  onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={savingsGoalForm.control}
                        name="deadline"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Target Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={savingsGoalForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="What is this goal for?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingSavingsGoal(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add Goal</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savingsGoals.map((goal) => {
                  const percentage = (goal.currentAmount / goal.targetAmount) * 100
                  const remaining = goal.targetAmount - goal.currentAmount
                  const daysUntilDeadline = Math.ceil((goal.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
                  
                  return (
                    <div key={goal.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{goal.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Input
                            type="number"
                            step="0.01"
                            value={goal.currentAmount}
                            onChange={(e) => updateSavingsGoalAmount(goal.id, parseFloat(e.target.value) || 0)}
                            className="w-24 h-8 text-right"
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => deleteSavingsGoal(goal.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Current: ${goal.currentAmount.toLocaleString()}</span>
                          <span>Target: ${goal.targetAmount.toLocaleString()}</span>
                        </div>
                        <Progress value={Math.min(percentage, 100)} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{percentage.toFixed(1)}% complete</span>
                          <span>${remaining.toLocaleString()} to go</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Deadline: {format(goal.deadline, "MMM d, yyyy")}</span>
                          <span className={daysUntilDeadline < 30 ? "text-secondary-foreground" : ""}>
                            {daysUntilDeadline > 0 ? `${daysUntilDeadline} days left` : "Overdue"}
                          </span>
                        </div>
                        {goal.description && (
                          <p className="text-sm text-muted-foreground mt-2">{goal.description}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}