"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, DollarSign, TrendingUp, TrendingDown, AlertCircle, MoreHorizontal, Edit, Trash2, Receipt } from "lucide-react"

const budgetCategories = [
  {
    id: 1,
    name: "Venue",
    budgeted: 12000,
    spent: 10500,
    color: "bg-primary",
    priority: "High",
    expenses: [
      { name: "Ceremony Venue", amount: 4500, date: "2024-01-15" },
      { name: "Reception Venue", amount: 6000, date: "2024-01-15" }
    ]
  },
  {
    id: 2,
    name: "Catering",
    budgeted: 8000,
    spent: 6200,
    color: "bg-primary",
    priority: "High",
    expenses: [
      { name: "Menu Tasting", amount: 200, date: "2024-02-01" },
      { name: "Catering Deposit", amount: 3000, date: "2024-02-15" },
      { name: "Final Payment", amount: 3000, date: "2024-05-01" }
    ]
  },
  {
    id: 3,
    name: "Photography",
    budgeted: 3500,
    spent: 3500,
    color: "bg-accent",
    priority: "High",
    expenses: [
      { name: "Wedding Package", amount: 3500, date: "2024-01-20" }
    ]
  },
  {
    id: 4,
    name: "Flowers",
    budgeted: 2500,
    spent: 1200,
    color: "bg-secondary",
    priority: "Medium",
    expenses: [
      { name: "Bridal Bouquet", amount: 400, date: "2024-03-01" },
      { name: "Centerpieces Deposit", amount: 800, date: "2024-03-01" }
    ]
  },
  {
    id: 5,
    name: "Music/DJ",
    budgeted: 2800,
    spent: 0,
    color: "bg-accent",
    priority: "Medium",
    expenses: []
  },
  {
    id: 6,
    name: "Attire",
    budgeted: 2200,
    spent: 1800,
    color: "bg-primary",
    priority: "Medium",
    expenses: [
      { name: "Wedding Dress", amount: 1200, date: "2024-02-10" },
      { name: "Alterations", amount: 300, date: "2024-04-01" },
      { name: "Groom's Suit", amount: 300, date: "2024-03-15" }
    ]
  },
  {
    id: 7,
    name: "Transportation",
    budgeted: 800,
    spent: 400,
    color: "bg-destructive",
    priority: "Low",
    expenses: [
      { name: "Wedding Car Deposit", amount: 400, date: "2024-03-10" }
    ]
  },
  {
    id: 8,
    name: "Miscellaneous",
    budgeted: 1200,
    spent: 600,
    color: "bg-muted",
    priority: "Low",
    expenses: [
      { name: "Wedding Favors", amount: 300, date: "2024-04-05" },
      { name: "Guest Book", amount: 100, date: "2024-04-05" },
      { name: "Marriage License", amount: 200, date: "2024-04-10" }
    ]
  }
]

const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0)
const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0)
const remainingBudget = totalBudget - totalSpent

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "Medium":
      return "bg-accent/30 text-accent-foreground border-accent/50"
    case "Low":
      return "bg-primary/10 text-primary border-primary/20"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

export function BudgetTracking() {
  const [isAddExpenseDialogOpen, setIsAddExpenseDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Budget Tracking</h2>
          <p className="text-muted-foreground">Monitor your wedding expenses and budget allocation</p>
        </div>
        <Dialog open={isAddExpenseDialogOpen} onOpenChange={setIsAddExpenseDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Expense
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Expense</DialogTitle>
              <DialogDescription>
                Record a new wedding-related expense.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="expense-category">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetCategories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="expense-name">Expense Name</Label>
                <Input id="expense-name" placeholder="e.g., Catering deposit" />
              </div>
              <div>
                <Label htmlFor="expense-amount">Amount</Label>
                <Input id="expense-amount" type="number" placeholder="0.00" />
              </div>
              <div>
                <Label htmlFor="expense-date">Date</Label>
                <Input id="expense-date" type="date" />
              </div>
              <div>
                <Label htmlFor="expense-vendor">Vendor</Label>
                <Input id="expense-vendor" placeholder="Vendor name (optional)" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsAddExpenseDialogOpen(false)}>
                Add Expense
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Allocated for wedding
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((totalSpent / totalBudget) * 100).toFixed(1)}% of budget used
            </p>
            <Progress value={(totalSpent / totalBudget) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${remainingBudget >= 0 ? 'text-primary' : 'text-destructive'}`}>
              ${Math.abs(remainingBudget).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {remainingBudget >= 0 ? 'Available to spend' : 'Over budget'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{budgetCategories.length}</div>
            <p className="text-xs text-muted-foreground">
              Budget categories
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Budget Breakdown</CardTitle>
          <CardDescription>Track spending across all wedding categories</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Budgeted</TableHead>
                <TableHead>Spent</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgetCategories.map((category) => {
                const remaining = category.budgeted - category.spent
                const percentage = (category.spent / category.budgeted) * 100
                const isOverBudget = category.spent > category.budgeted

                return (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(category.priority)} variant="outline">
                        {category.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">
                      ${category.budgeted.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <span className={isOverBudget ? 'text-destructive font-medium' : ''}>
                        ${category.spent.toLocaleString()}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`${remaining >= 0 ? 'text-primary' : 'text-destructive'} font-medium`}>
                        ${Math.abs(remaining).toLocaleString()}
                        {remaining < 0 && ' over'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress 
                          value={Math.min(percentage, 100)} 
                          className="w-20" 
                        />
                        <span className="text-xs text-muted-foreground min-w-10">
                          {percentage.toFixed(0)}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit Budget</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Receipt className="mr-2 h-4 w-4" />
                            <span>View Expenses</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete Category</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Budget Distribution</CardTitle>
            <CardDescription>How your budget is allocated across categories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {budgetCategories.map((category) => {
              const percentage = (category.budgeted / totalBudget) * 100
              return (
                <div key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">${category.budgeted.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{percentage.toFixed(1)}%</div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <CardDescription>Your latest wedding-related expenses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {budgetCategories
              .flatMap(cat => 
                cat.expenses.map(exp => ({
                  ...exp,
                  category: cat.name,
                  color: cat.color
                }))
              )
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 6)
              .map((expense, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${expense.color}`}></div>
                    <div>
                      <p className="text-sm font-medium">{expense.name}</p>
                      <p className="text-xs text-muted-foreground">{expense.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">${expense.amount.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(expense.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}