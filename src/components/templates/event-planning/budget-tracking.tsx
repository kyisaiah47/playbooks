"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Receipt,
  AlertCircle,
  CheckCircle2,
  Search,
  PieChart
} from "lucide-react"
import { useEventPlanning } from "@/contexts/event-planning-context"

// Define expense-specific data interface
interface Expense {
  id: string
  name: string
  category: 'venue' | 'catering' | 'photography' | 'music' | 'flowers' | 'decoration' | 'transport' | 'attire' | 'stationery' | 'other'
  amount: number
  budgetedAmount: number
  vendor: string
  status: 'estimated' | 'quoted' | 'booked' | 'paid' | 'overdue'
  priority: 'low' | 'medium' | 'high' | 'critical'
  dueDate: Date
  paidDate?: Date
  paymentMethod: 'cash' | 'card' | 'bank' | 'check' | 'other'
  notes: string
  receipt: string
  createdAt: Date
  updatedAt: Date
}

export function BudgetTracking() {
  const { eventPlanningData } = useEventPlanning()
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [isAddingExpense, setIsAddingExpense] = useState(false)
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: 'venue' as const,
    amount: 0,
    budgetedAmount: 0,
    vendor: '',
    priority: 'medium' as const,
    dueDate: new Date(),
    paidDate: undefined as Date | undefined,
    paymentMethod: 'card' as const,
    notes: '',
    receipt: '',
  })

  // Load expenses from localStorage
  useEffect(() => {
    const savedExpenses = localStorage.getItem('event-planning-expenses')
    if (savedExpenses) {
      const parsed = JSON.parse(savedExpenses)
      setExpenses(parsed.map((expense: any) => ({
        ...expense,
        dueDate: new Date(expense.dueDate),
        paidDate: expense.paidDate ? new Date(expense.paidDate) : undefined,
        createdAt: new Date(expense.createdAt),
        updatedAt: new Date(expense.updatedAt),
      })))
    }
  }, [])

  // Save expenses to localStorage
  const saveExpenses = (newExpenses: Expense[]) => {
    setExpenses(newExpenses)
    localStorage.setItem('event-planning-expenses', JSON.stringify(newExpenses))
  }

  // Filter expenses based on search and filters
  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = searchTerm === '' || 
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.vendor.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = categoryFilter === 'all' || expense.category === categoryFilter
    const matchesStatus = statusFilter === 'all' || expense.status === statusFilter
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  // CRUD Operations
  const addExpense = () => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      ...formData,
      status: 'estimated',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveExpenses([...expenses, newExpense])
    resetForm()
    setIsAddingExpense(false)
  }

  const updateExpense = (id: string, updates: Partial<Expense>) => {
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
      category: 'venue',
      amount: 0,
      budgetedAmount: 0,
      vendor: '',
      priority: 'medium',
      dueDate: new Date(),
      paidDate: undefined,
      paymentMethod: 'card',
      notes: '',
      receipt: '',
    })
    setEditingExpense(null)
  }

  const openEditDialog = (expense: Expense) => {
    setFormData({
      name: expense.name,
      category: expense.category,
      amount: expense.amount,
      budgetedAmount: expense.budgetedAmount,
      vendor: expense.vendor,
      priority: expense.priority,
      dueDate: expense.dueDate,
      paidDate: expense.paidDate,
      paymentMethod: expense.paymentMethod,
      notes: expense.notes,
      receipt: expense.receipt,
    })
    setEditingExpense(expense)
    setIsAddingExpense(true)
  }

  const handleSave = () => {
    if (editingExpense) {
      updateExpense(editingExpense.id, formData)
    } else {
      addExpense()
    }
    resetForm()
    setIsAddingExpense(false)
  }

  // Calculate progress/metrics
  const totalBudget = eventPlanningData?.totalBudget || 0
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const totalBudgeted = expenses.reduce((sum, expense) => sum + expense.budgetedAmount, 0)
  const paidAmount = expenses.filter(expense => expense.status === 'paid').reduce((sum, expense) => sum + expense.amount, 0)
  const overdueAmount = expenses.filter(expense => {
    const today = new Date()
    return expense.status !== 'paid' && expense.dueDate < today
  }).reduce((sum, expense) => sum + expense.amount, 0)
  
  const budgetUsedPercentage = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0
  const budgetVariance = totalSpent - totalBudgeted

  // Category breakdown
  const categoryBreakdown = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount
    return acc
  }, {} as Record<string, number>)

  const getStatusColor = (status: Expense['status']) => {
    switch (status) {
      case 'paid': return 'default'
      case 'booked': return 'secondary'
      case 'quoted': return 'outline'
      case 'overdue': return 'destructive'
      default: return 'outline'
    }
  }

  const getPriorityColor = (priority: Expense['priority']) => {
    switch (priority) {
      case 'critical': return 'destructive'
      case 'high': return 'secondary'
      case 'medium': return 'outline'
      case 'low': return 'outline'
      default: return 'outline'
    }
  }

  const getCategoryColor = (category: Expense['category']) => {
    const colors = ['default', 'secondary', 'outline']
    return colors[category.charCodeAt(0) % colors.length]
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Budget Tracking</h1>
          <p className="text-muted-foreground">Monitor expenses and manage your event budget</p>
        </div>
        <Dialog open={isAddingExpense} onOpenChange={(open) => {
          setIsAddingExpense(open)
          if (!open) resetForm()
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingExpense ? 'Edit Expense' : 'Add New Expense'}</DialogTitle>
              <DialogDescription>
                {editingExpense ? 'Update expense information' : 'Add a new expense to track in your budget.'}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Expense Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Expense description"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => 
                    setFormData({...formData, category: value as Expense['category']})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="venue">Venue</SelectItem>
                      <SelectItem value="catering">Catering</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="music">Music/DJ</SelectItem>
                      <SelectItem value="flowers">Flowers</SelectItem>
                      <SelectItem value="decoration">Decoration</SelectItem>
                      <SelectItem value="transport">Transport</SelectItem>
                      <SelectItem value="attire">Attire</SelectItem>
                      <SelectItem value="stationery">Stationery</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="amount">Actual Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: parseInt(e.target.value) || 0})}
                    placeholder="Actual cost"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="budgetedAmount">Budgeted Amount ($)</Label>
                  <Input
                    id="budgetedAmount"
                    type="number"
                    value={formData.budgetedAmount}
                    onChange={(e) => setFormData({...formData, budgetedAmount: parseInt(e.target.value) || 0})}
                    placeholder="Planned budget"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="vendor">Vendor</Label>
                  <Input
                    id="vendor"
                    value={formData.vendor}
                    onChange={(e) => setFormData({...formData, vendor: e.target.value})}
                    placeholder="Vendor/supplier name"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={formData.priority} onValueChange={(value) => 
                    setFormData({...formData, priority: value as Expense['priority']})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={formData.dueDate.toISOString().split('T')[0]}
                    onChange={(e) => setFormData({...formData, dueDate: new Date(e.target.value)})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select value={formData.paymentMethod} onValueChange={(value) => 
                    setFormData({...formData, paymentMethod: value as Expense['paymentMethod']})
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="card">Card</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {formData.paidDate && (
                <div className="grid gap-2">
                  <Label htmlFor="paidDate">Paid Date</Label>
                  <Input
                    id="paidDate"
                    type="date"
                    value={formData.paidDate?.toISOString().split('T')[0] || ''}
                    onChange={(e) => setFormData({...formData, paidDate: e.target.value ? new Date(e.target.value) : undefined})}
                  />
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="receipt">Receipt/Reference</Label>
                <Input
                  id="receipt"
                  value={formData.receipt}
                  onChange={(e) => setFormData({...formData, receipt: e.target.value})}
                  placeholder="Receipt number or reference"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this expense..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSave}>
                {editingExpense ? 'Update Expense' : 'Add Expense'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
            <Progress value={budgetUsedPercentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {budgetUsedPercentage.toFixed(1)}% used
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
            <p className="text-xs text-muted-foreground">${paidAmount.toLocaleString()} paid</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Variance</CardTitle>
            {budgetVariance >= 0 ? (
              <TrendingUp className="h-4 w-4 text-red-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-green-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${budgetVariance >= 0 ? 'text-red-600' : 'text-green-600'}`}>
              {budgetVariance >= 0 ? '+' : ''}${budgetVariance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {budgetVariance >= 0 ? 'over budget' : 'under budget'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${overdueAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">requires immediate attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Category Breakdown</CardTitle>
          <CardDescription>Spending by expense category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(categoryBreakdown).map(([category, amount]) => (
              <div key={category} className="text-center">
                <div className="text-lg font-semibold">${amount.toLocaleString()}</div>
                <Badge variant={getCategoryColor(category as Expense['category'])} className="text-xs">
                  {category}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="venue">Venue</SelectItem>
                <SelectItem value="catering">Catering</SelectItem>
                <SelectItem value="photography">Photography</SelectItem>
                <SelectItem value="music">Music/DJ</SelectItem>
                <SelectItem value="flowers">Flowers</SelectItem>
                <SelectItem value="decoration">Decoration</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="attire">Attire</SelectItem>
                <SelectItem value="stationery">Stationery</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="estimated">Estimated</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Expenses List */}
      <Card>
        <CardHeader>
          <CardTitle>Expense List ({filteredExpenses.length} expenses)</CardTitle>
          <CardDescription>Manage and track your event expenses</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredExpenses.length === 0 ? (
            <div className="text-center py-8">
              <Receipt className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {expenses.length === 0 ? 'No expenses added yet. Add your first expense to get started!' : 'No expenses match your current filters.'}
              </p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your event expenses list</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Expense</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExpenses.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell>
                      <div className="font-medium">{expense.name}</div>
                      {expense.vendor && (
                        <div className="text-sm text-muted-foreground">{expense.vendor}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getCategoryColor(expense.category)}>
                        {expense.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">${expense.amount.toLocaleString()}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>${expense.budgetedAmount.toLocaleString()}</div>
                        {expense.amount !== expense.budgetedAmount && (
                          <div className={`text-xs ${expense.amount > expense.budgetedAmount ? 'text-red-600' : 'text-green-600'}`}>
                            {expense.amount > expense.budgetedAmount ? '+' : ''}{(expense.amount - expense.budgetedAmount).toLocaleString()}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(expense.status)}>
                        {expense.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {expense.dueDate.toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getPriorityColor(expense.priority)}>
                        {expense.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Select
                          value={expense.status}
                          onValueChange={(value) => updateExpense(expense.id, { 
                            status: value as Expense['status'],
                            paidDate: value === 'paid' ? new Date() : expense.paidDate
                          })}
                        >
                          <SelectTrigger className="w-24 h-8">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="estimated">Estimated</SelectItem>
                            <SelectItem value="quoted">Quoted</SelectItem>
                            <SelectItem value="booked">Booked</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="overdue">Overdue</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditDialog(expense)}
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}