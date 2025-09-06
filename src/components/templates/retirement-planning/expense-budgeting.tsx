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
  Home,
  Car,
  Heart,
  Utensils,
  Plane,
  ShoppingCart,
  Calculator,
  TrendingDown,
  TrendingUp
} from "lucide-react"
import { useRetirementPlanning } from "@/contexts/retirement-planning-context"

interface ExpenseCategory {
  id: string
  categoryName: string
  categoryType: 'housing' | 'healthcare' | 'food' | 'transportation' | 'utilities' | 'insurance' | 'entertainment' | 'travel' | 'personal' | 'taxes' | 'other'
  monthlyAmount: number
  priority: 'essential' | 'important' | 'optional'
  inflationRate: number
  notes?: string
  subcategories: ExpenseSubcategory[]
  createdAt: Date
  updatedAt: Date
}

interface ExpenseSubcategory {
  id: string
  name: string
  monthlyAmount: number
  notes?: string
}

export function ExpenseBudgeting() {
  const { data, updateData, retirementData } = useRetirementPlanning()
  const [expenses, setExpenses] = useState<ExpenseCategory[]>([])
  const [isAddingExpense, setIsAddingExpense] = useState(false)
  const [editingExpense, setEditingExpense] = useState<ExpenseCategory | null>(null)

  const [formData, setFormData] = useState({
    categoryName: '',
    categoryType: 'housing' as const,
    monthlyAmount: 0,
    priority: 'essential' as const,
    inflationRate: 3.0,
    notes: '',
    subcategories: [{ id: '1', name: '', monthlyAmount: 0, notes: '' }] as ExpenseSubcategory[],
  })

  useEffect(() => {
    const savedExpenses = localStorage.getItem('retirement-planning-expenses-items')
    if (savedExpenses) {
      const parsedExpenses = JSON.parse(savedExpenses).map((expense: any) => ({
        ...expense,
        createdAt: new Date(expense.createdAt),
        updatedAt: new Date(expense.updatedAt),
      }))
      setExpenses(parsedExpenses)
    }
  }, [])

  const saveExpenses = (newExpenses: ExpenseCategory[]) => {
    setExpenses(newExpenses)
    localStorage.setItem('retirement-planning-expenses-items', JSON.stringify(newExpenses))
  }

  const addExpense = () => {
    const filteredSubcategories = formData.subcategories.filter(sub => sub.name.trim() !== '')
    const calculatedTotal = filteredSubcategories.reduce((sum, sub) => sum + sub.monthlyAmount, 0)
    
    const newExpense: ExpenseCategory = {
      id: Date.now().toString(),
      ...formData,
      monthlyAmount: formData.monthlyAmount > 0 ? formData.monthlyAmount : calculatedTotal,
      subcategories: filteredSubcategories,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveExpenses([...expenses, newExpense])
    resetForm()
    setIsAddingExpense(false)
  }

  const updateExpense = (id: string, updates: Partial<ExpenseCategory>) => {
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
      categoryName: '',
      categoryType: 'housing',
      monthlyAmount: 0,
      priority: 'essential',
      inflationRate: 3.0,
      notes: '',
      subcategories: [{ id: '1', name: '', monthlyAmount: 0, notes: '' }],
    })
  }

  const startEditing = (expense: ExpenseCategory) => {
    setFormData({
      categoryName: expense.categoryName,
      categoryType: expense.categoryType,
      monthlyAmount: expense.monthlyAmount,
      priority: expense.priority,
      inflationRate: expense.inflationRate,
      notes: expense.notes || '',
      subcategories: expense.subcategories.length > 0 ? expense.subcategories : [{ id: '1', name: '', monthlyAmount: 0, notes: '' }],
    })
    setEditingExpense(expense)
    setIsAddingExpense(true)
  }

  const saveEdit = () => {
    if (editingExpense) {
      const filteredSubcategories = formData.subcategories.filter(sub => sub.name.trim() !== '')
      const calculatedTotal = filteredSubcategories.reduce((sum, sub) => sum + sub.monthlyAmount, 0)
      
      updateExpense(editingExpense.id, {
        ...formData,
        monthlyAmount: formData.monthlyAmount > 0 ? formData.monthlyAmount : calculatedTotal,
        subcategories: filteredSubcategories,
      })
      setEditingExpense(null)
      resetForm()
      setIsAddingExpense(false)
    }
  }

  const addSubcategory = () => {
    setFormData({
      ...formData,
      subcategories: [...formData.subcategories, { id: Date.now().toString(), name: '', monthlyAmount: 0, notes: '' }]
    })
  }

  const updateSubcategory = (index: number, field: keyof ExpenseSubcategory, value: string | number) => {
    const newSubcategories = [...formData.subcategories]
    newSubcategories[index] = { ...newSubcategories[index], [field]: value }
    setFormData({
      ...formData,
      subcategories: newSubcategories
    })
  }

  const removeSubcategory = (index: number) => {
    const newSubcategories = formData.subcategories.filter((_, i) => i !== index)
    setFormData({
      ...formData,
      subcategories: newSubcategories.length > 0 ? newSubcategories : [{ id: '1', name: '', monthlyAmount: 0, notes: '' }]
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatCategoryType = (type: string) => {
    const typeMap: Record<string, string> = {
      'housing': 'Housing',
      'healthcare': 'Healthcare',
      'food': 'Food & Dining',
      'transportation': 'Transportation',
      'utilities': 'Utilities',
      'insurance': 'Insurance',
      'entertainment': 'Entertainment',
      'travel': 'Travel',
      'personal': 'Personal Care',
      'taxes': 'Taxes',
      'other': 'Other'
    }
    return typeMap[type] || type
  }

  const getCategoryIcon = (type: string) => {
    const iconMap: Record<string, any> = {
      'housing': Home,
      'healthcare': Heart,
      'food': Utensils,
      'transportation': Car,
      'utilities': DollarSign,
      'insurance': DollarSign,
      'entertainment': ShoppingCart,
      'travel': Plane,
      'personal': ShoppingCart,
      'taxes': Calculator,
      'other': DollarSign
    }
    const Icon = iconMap[type] || DollarSign
    return <Icon className="h-4 w-4" />
  }

  const getBadgeVariant = (type: string): "default" | "secondary" | "destructive" | "outline" => {
    const variantMap: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      'housing': 'default',
      'healthcare': 'destructive',
      'food': 'secondary',
      'transportation': 'outline',
      'utilities': 'secondary',
      'insurance': 'outline',
      'entertainment': 'default',
      'travel': 'default',
      'personal': 'outline',
      'taxes': 'destructive',
      'other': 'outline'
    }
    return variantMap[type] || 'outline'
  }

  const getPriorityColor = (priority: string) => {
    const colorMap: Record<string, string> = {
      'essential': 'text-red-600',
      'important': 'text-yellow-600',
      'optional': 'text-green-600'
    }
    return colorMap[priority] || 'text-gray-600'
  }

  const totalMonthlyExpenses = expenses.reduce((sum, expense) => sum + expense.monthlyAmount, 0)
  const totalAnnualExpenses = totalMonthlyExpenses * 12
  const essentialExpenses = expenses.filter(exp => exp.priority === 'essential').reduce((sum, exp) => sum + exp.monthlyAmount, 0)
  const importantExpenses = expenses.filter(exp => exp.priority === 'important').reduce((sum, exp) => sum + exp.monthlyAmount, 0)
  const optionalExpenses = expenses.filter(exp => exp.priority === 'optional').reduce((sum, exp) => sum + exp.monthlyAmount, 0)

  // Calculate projected expenses with inflation for 10 years
  const projectedExpensesIn10Years = expenses.reduce((sum, expense) => {
    const inflationMultiplier = Math.pow(1 + expense.inflationRate / 100, 10)
    return sum + (expense.monthlyAmount * inflationMultiplier)
  }, 0)

  // Expense breakdown by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.categoryType] = (acc[expense.categoryType] || 0) + expense.monthlyAmount
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Expense Budgeting</h1>
          <p className="text-muted-foreground">Plan and track your retirement expenses</p>
        </div>
        <Dialog open={isAddingExpense} onOpenChange={setIsAddingExpense}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Expense Category
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingExpense ? 'Edit' : 'Add New'} Expense Category</DialogTitle>
              <DialogDescription>
                {editingExpense ? 'Update an' : 'Add a new'} expense category for your retirement budget.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="categoryName">Category Name</Label>
                  <Input
                    id="categoryName"
                    value={formData.categoryName}
                    onChange={(e) => setFormData({...formData, categoryName: e.target.value})}
                    placeholder="Housing, Healthcare, etc."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="categoryType">Category Type</Label>
                  <Select value={formData.categoryType} onValueChange={(value: any) => setFormData({...formData, categoryType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="housing">Housing</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="food">Food & Dining</SelectItem>
                      <SelectItem value="transportation">Transportation</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                      <SelectItem value="insurance">Insurance</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="personal">Personal Care</SelectItem>
                      <SelectItem value="taxes">Taxes</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="monthlyAmount">Monthly Amount ($)</Label>
                  <Input
                    id="monthlyAmount"
                    type="number"
                    value={formData.monthlyAmount}
                    onChange={(e) => setFormData({...formData, monthlyAmount: parseFloat(e.target.value) || 0})}
                    placeholder="2500"
                  />
                  <p className="text-xs text-muted-foreground">Leave at 0 to auto-calculate from subcategories</p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={formData.priority} onValueChange={(value: any) => setFormData({...formData, priority: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essential">Essential</SelectItem>
                      <SelectItem value="important">Important</SelectItem>
                      <SelectItem value="optional">Optional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="inflationRate">Inflation Rate (%)</Label>
                  <Input
                    id="inflationRate"
                    type="number"
                    step="0.1"
                    value={formData.inflationRate}
                    onChange={(e) => setFormData({...formData, inflationRate: parseFloat(e.target.value) || 0})}
                    placeholder="3.0"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label>Subcategories (Optional)</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addSubcategory}>
                    <Plus className="h-4 w-4 mr-1" />
                    Add Subcategory
                  </Button>
                </div>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {formData.subcategories.map((subcategory, index) => (
                    <div key={subcategory.id} className="flex gap-2 items-start p-3 border rounded-lg">
                      <div className="flex-1 grid grid-cols-2 gap-2">
                        <Input
                          value={subcategory.name}
                          onChange={(e) => updateSubcategory(index, 'name', e.target.value)}
                          placeholder="Subcategory name"
                        />
                        <Input
                          type="number"
                          value={subcategory.monthlyAmount}
                          onChange={(e) => updateSubcategory(index, 'monthlyAmount', parseFloat(e.target.value) || 0)}
                          placeholder="Amount"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeSubcategory(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                {formData.subcategories.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    Subcategory total: {formatCurrency(formData.subcategories.reduce((sum, sub) => sum + sub.monthlyAmount, 0))}
                  </div>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this expense category..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setIsAddingExpense(false)
                setEditingExpense(null)
                resetForm()
              }}>
                Cancel
              </Button>
              <Button onClick={editingExpense ? saveEdit : addExpense}>
                {editingExpense ? 'Update' : 'Add'} Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Expense Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Monthly Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalMonthlyExpenses)}</div>
            <p className="text-xs text-muted-foreground">{expenses.length} categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Expenses</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalAnnualExpenses)}</div>
            <p className="text-xs text-muted-foreground">total yearly budget</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essential Expenses</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(essentialExpenses)}</div>
            <p className="text-xs text-muted-foreground">must-have expenses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projected in 10 Years</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(projectedExpensesIn10Years)}</div>
            <p className="text-xs text-muted-foreground">with inflation</p>
          </CardContent>
        </Card>
      </div>

      {/* Expense Breakdown by Priority */}
      <Card>
        <CardHeader>
          <CardTitle>Expense Breakdown by Priority</CardTitle>
          <CardDescription>Distribution of expenses by importance level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm font-medium">Essential</span>
              </div>
              <div className="flex items-center gap-4">
                <Progress value={totalMonthlyExpenses > 0 ? (essentialExpenses / totalMonthlyExpenses) * 100 : 0} className="w-24 h-2" />
                <div className="text-right min-w-[4rem]">
                  <div className="font-bold">{formatCurrency(essentialExpenses)}</div>
                  <div className="text-xs text-muted-foreground">
                    {totalMonthlyExpenses > 0 ? ((essentialExpenses / totalMonthlyExpenses) * 100).toFixed(1) : 0}%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="text-sm font-medium">Important</span>
              </div>
              <div className="flex items-center gap-4">
                <Progress value={totalMonthlyExpenses > 0 ? (importantExpenses / totalMonthlyExpenses) * 100 : 0} className="w-24 h-2" />
                <div className="text-right min-w-[4rem]">
                  <div className="font-bold">{formatCurrency(importantExpenses)}</div>
                  <div className="text-xs text-muted-foreground">
                    {totalMonthlyExpenses > 0 ? ((importantExpenses / totalMonthlyExpenses) * 100).toFixed(1) : 0}%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium">Optional</span>
              </div>
              <div className="flex items-center gap-4">
                <Progress value={totalMonthlyExpenses > 0 ? (optionalExpenses / totalMonthlyExpenses) * 100 : 0} className="w-24 h-2" />
                <div className="text-right min-w-[4rem]">
                  <div className="font-bold">{formatCurrency(optionalExpenses)}</div>
                  <div className="text-xs text-muted-foreground">
                    {totalMonthlyExpenses > 0 ? ((optionalExpenses / totalMonthlyExpenses) * 100).toFixed(1) : 0}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expense Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Expense Categories</CardTitle>
          <CardDescription>Manage your retirement expense budget</CardDescription>
        </CardHeader>
        <CardContent>
          {expenses.length === 0 ? (
            <div className="text-center py-8">
              <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No expense categories yet. Add your first expense category to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {expenses.map((expense) => {
                const inflationMultiplierIn5Years = Math.pow(1 + expense.inflationRate / 100, 5)
                const projectedAmountIn5Years = expense.monthlyAmount * inflationMultiplierIn5Years
                
                return (
                  <Card key={expense.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {getCategoryIcon(expense.categoryType)}
                            <CardTitle className="text-lg">{expense.categoryName}</CardTitle>
                            <Badge variant={getBadgeVariant(expense.categoryType)}>
                              {formatCategoryType(expense.categoryType)}
                            </Badge>
                            <span className={`text-sm font-medium ${getPriorityColor(expense.priority)}`}>
                              {expense.priority.charAt(0).toUpperCase() + expense.priority.slice(1)}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Monthly: {formatCurrency(expense.monthlyAmount)}</span>
                            <span>Annual: {formatCurrency(expense.monthlyAmount * 12)}</span>
                            <span>Inflation: {expense.inflationRate}%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => startEditing(expense)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteExpense(expense.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    {(expense.subcategories.length > 0 || expense.notes || projectedAmountIn5Years !== expense.monthlyAmount) && (
                      <CardContent>
                        <div className="space-y-3">
                          {expense.subcategories.length > 0 && (
                            <div className="space-y-2">
                              <div className="text-sm font-medium">Breakdown:</div>
                              <div className="grid grid-cols-2 gap-2">
                                {expense.subcategories.map((sub, index) => (
                                  <div key={sub.id} className="flex justify-between text-sm p-2 bg-muted rounded">
                                    <span>{sub.name}</span>
                                    <span className="font-medium">{formatCurrency(sub.monthlyAmount)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {projectedAmountIn5Years !== expense.monthlyAmount && (
                            <div className="flex items-center justify-between text-sm">
                              <span>Projected in 5 years:</span>
                              <span className="font-bold flex items-center gap-1">
                                <TrendingUp className="h-3 w-3 text-red-500" />
                                {formatCurrency(projectedAmountIn5Years)}
                              </span>
                            </div>
                          )}

                          {expense.notes && (
                            <div className="text-sm text-muted-foreground">
                              <strong>Notes:</strong> {expense.notes}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Budget Analysis */}
      {expenses.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Expenses by category type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(expensesByCategory)
                  .sort(([,a], [,b]) => b - a)
                  .map(([category, amount]) => (
                    <div key={category} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(category)}
                        <span className="text-sm font-medium">{formatCategoryType(category)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={totalMonthlyExpenses > 0 ? (amount / totalMonthlyExpenses) * 100 : 0} 
                          className="w-16 h-2" 
                        />
                        <div className="text-right min-w-[4rem]">
                          <div className="font-bold text-sm">{formatCurrency(amount)}</div>
                          <div className="text-xs text-muted-foreground">
                            {totalMonthlyExpenses > 0 ? ((amount / totalMonthlyExpenses) * 100).toFixed(0) : 0}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Budget Insights</CardTitle>
              <CardDescription>Analysis and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(essentialExpenses / totalMonthlyExpenses) * 100 > 60 && (
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <TrendingDown className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-yellow-800">High Essential Expenses</div>
                      <div className="text-sm text-yellow-700">
                        {((essentialExpenses / totalMonthlyExpenses) * 100).toFixed(1)}% of budget is essential. Consider ways to reduce fixed costs.
                      </div>
                    </div>
                  </div>
                )}
                {(optionalExpenses / totalMonthlyExpenses) * 100 > 30 && (
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <ShoppingCart className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-green-800">Flexible Budget</div>
                      <div className="text-sm text-green-700">
                        {((optionalExpenses / totalMonthlyExpenses) * 100).toFixed(1)}% of budget is optional, giving you flexibility.
                      </div>
                    </div>
                  </div>
                )}
                {expenses.some(exp => exp.inflationRate > 5) && (
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-red-800">High Inflation Categories</div>
                      <div className="text-sm text-red-700">
                        Some categories have high inflation rates. Plan for significant cost increases.
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Calculator className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-blue-800">Inflation Impact</div>
                    <div className="text-sm text-blue-700">
                      In 10 years, your expenses could reach {formatCurrency(projectedExpensesIn10Years)} per month due to inflation.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}