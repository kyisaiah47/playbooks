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
  Trash2,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Target,
  CreditCard,
  PiggyBank,
  Receipt,
  Building
} from "lucide-react"
import { useSmallBusiness } from "@/contexts/small-business-context"

interface FinancialItem {
  id: string
  name: string
  type: 'income' | 'expense' | 'investment' | 'loan' | 'budget' | 'goal'
  category: string
  amount: number
  status: 'pending' | 'completed' | 'recurring'
  dueDate: string
  frequency?: 'one-time' | 'monthly' | 'quarterly' | 'annually'
  account?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function FinancialManagement() {
  const { data, updateData } = useSmallBusiness()
  const [items, setItems] = useState<FinancialItem[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    type: 'expense' as const,
    category: '',
    amount: 0,
    dueDate: '',
    frequency: 'one-time' as const,
    account: '',
    notes: '',
  })

  useEffect(() => {
    const savedItems = localStorage.getItem('small-business-financial-management-items')
    if (savedItems) {
      const parsed = JSON.parse(savedItems)
      setItems(parsed.map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt)
      })))
    }
  }, [])

  const saveItems = (newItems: FinancialItem[]) => {
    setItems(newItems)
    localStorage.setItem('small-business-financial-management-items', JSON.stringify(newItems))
  }

  const addItem = () => {
    if (!formData.name.trim() || formData.amount <= 0) return

    const newItem: FinancialItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveItems([...items, newItem])
    resetForm()
    setIsAddingItem(false)
  }

  const updateItem = (id: string, updates: Partial<FinancialItem>) => {
    const updatedItems = items.map(item => 
      item.id === id 
        ? { ...item, ...updates, updatedAt: new Date() }
        : item
    )
    saveItems(updatedItems)
  }

  const deleteItem = (id: string) => {
    const filteredItems = items.filter(item => item.id !== id)
    saveItems(filteredItems)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'expense',
      category: '',
      amount: 0,
      dueDate: '',
      frequency: 'one-time',
      account: '',
      notes: '',
    })
  }

  // Calculate financial metrics
  const totalIncome = items.filter(item => item.type === 'income' && item.status === 'completed')
    .reduce((sum, item) => sum + item.amount, 0)
  
  const totalExpenses = items.filter(item => item.type === 'expense' && item.status === 'completed')
    .reduce((sum, item) => sum + item.amount, 0)
  
  const totalInvestments = items.filter(item => item.type === 'investment' && item.status === 'completed')
    .reduce((sum, item) => sum + item.amount, 0)
  
  const totalLoans = items.filter(item => item.type === 'loan' && item.status === 'completed')
    .reduce((sum, item) => sum + item.amount, 0)

  const netCashFlow = totalIncome - totalExpenses
  
  const budgetItems = items.filter(item => item.type === 'budget')
  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0)
  const budgetUsed = totalExpenses
  const budgetRemaining = totalBudget - budgetUsed

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'income': return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'expense': return <TrendingDown className="h-4 w-4 text-red-600" />
      case 'investment': return <Target className="h-4 w-4 text-blue-600" />
      case 'loan': return <CreditCard className="h-4 w-4 text-orange-600" />
      case 'budget': return <PiggyBank className="h-4 w-4 text-purple-600" />
      case 'goal': return <Target className="h-4 w-4 text-indigo-600" />
      default: return <DollarSign className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'income': return 'bg-green-100 text-green-800'
      case 'expense': return 'bg-red-100 text-red-800'
      case 'investment': return 'bg-blue-100 text-blue-800'
      case 'loan': return 'bg-orange-100 text-orange-800'
      case 'budget': return 'bg-purple-100 text-purple-800'
      case 'goal': return 'bg-indigo-100 text-indigo-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Categories for different types
  const expenseCategories = [
    'Office Supplies', 'Marketing', 'Legal/Professional', 'Technology', 'Rent', 
    'Utilities', 'Equipment', 'Insurance', 'Travel', 'Training', 'Other'
  ]
  
  const incomeCategories = [
    'Sales Revenue', 'Service Revenue', 'Investment', 'Loan', 'Grant', 'Other'
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financial Management</h1>
          <p className="text-muted-foreground">Track your business finances and budgets</p>
        </div>
        <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Financial Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Financial Item</DialogTitle>
              <DialogDescription>
                Add an income, expense, budget, or other financial item.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Item Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Office rent, Marketing budget"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={formData.type} onValueChange={(value: any) => setFormData({...formData, type: value, category: ''})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="loan">Loan</SelectItem>
                      <SelectItem value="budget">Budget</SelectItem>
                      <SelectItem value="goal">Financial Goal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {(formData.type === 'income' ? incomeCategories : expenseCategories).map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: parseFloat(e.target.value) || 0})}
                    placeholder="0.00"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select value={formData.frequency} onValueChange={(value: any) => setFormData({...formData, frequency: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
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
                    value={formData.dueDate}
                    onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="account">Account</Label>
                  <Input
                    id="account"
                    value={formData.account}
                    onChange={(e) => setFormData({...formData, account: e.target.value})}
                    placeholder="e.g., Business Checking"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional details or notes..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addItem}>
                Add Financial Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${totalIncome.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">completed income</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">completed expenses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Cash Flow</CardTitle>
            <DollarSign className={`h-4 w-4 ${netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${netCashFlow.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">income - expenses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Remaining</CardTitle>
            <PiggyBank className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${budgetRemaining.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">of ${totalBudget.toLocaleString()} budget</p>
            {totalBudget > 0 && (
              <Progress value={Math.max(0, (budgetRemaining / totalBudget) * 100)} className="mt-2" />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Financial Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['income', 'expense', 'investment', 'loan', 'budget', 'goal'].map(type => {
          const typeItems = items.filter(item => item.type === type)
          const completedItems = typeItems.filter(item => item.status === 'completed')
          const typeTotal = completedItems.reduce((sum, item) => sum + item.amount, 0)

          return (
            <Card key={type}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {getTypeIcon(type)}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </CardTitle>
                <CardDescription>
                  {typeItems.length} items • ${typeTotal.toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {completedItems.length} of {typeItems.length} completed
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Financial Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Items</CardTitle>
          <CardDescription>Manage your income, expenses, and financial goals</CardDescription>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No financial items yet. Add your first item to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your financial items and transactions</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        {item.frequency !== 'one-time' && (
                          <div className="text-sm text-muted-foreground">
                            {item.frequency}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(item.type)} variant="secondary">
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.category || 'Uncategorized'}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        item.type === 'income' ? 'text-green-600' : 
                        item.type === 'expense' ? 'text-red-600' : ''
                      }`}>
                        ${item.amount.toLocaleString()}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        item.status === 'completed' ? 'default' :
                        item.status === 'recurring' ? 'secondary' :
                        'outline'
                      }>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {item.dueDate ? new Date(item.dueDate).toLocaleDateString() : 'No date set'}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItem(item.id, { 
                            status: item.status === 'completed' ? 'pending' : 'completed' 
                          })}
                        >
                          {item.status === 'completed' ? 'Mark Pending' : 'Complete'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteItem(item.id)}
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