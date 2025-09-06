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
  DollarSign,
  TrendingUp,
  TrendingDown,
  Home,
  Baby,
  Car,
  CreditCard,
  Calculator,
  Trash2
} from "lucide-react"
import { useDivorceCoordination } from "@/contexts/divorce-coordination-context"

interface FinancialItem {
  id: string
  type: 'income' | 'expense' | 'support' | 'debt' | 'saving' | 'insurance' | 'other'
  category: 'housing' | 'childcare' | 'transportation' | 'food' | 'healthcare' | 'legal' | 'personal' | 'other'
  name: string
  amount: number
  frequency: 'weekly' | 'bi-weekly' | 'monthly' | 'quarterly' | 'annually' | 'one-time'
  status: 'planned' | 'active' | 'completed' | 'disputed' | 'court-ordered'
  startDate?: string
  endDate?: string
  description: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function FinancialPlanning() {
  const { data, updateData } = useDivorceCoordination()
  const [financialItems, setFinancialItems] = useState<FinancialItem[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)

  const [formData, setFormData] = useState({
    type: 'expense' as FinancialItem['type'],
    category: 'other' as FinancialItem['category'],
    name: '',
    amount: 0,
    frequency: 'monthly' as FinancialItem['frequency'],
    startDate: '',
    endDate: '',
    description: '',
    notes: '',
  })

  useEffect(() => {
    const savedItems = localStorage.getItem('divorce-coordination-financial-planning')
    if (savedItems) {
      const parsed = JSON.parse(savedItems)
      setFinancialItems(parsed.map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt),
      })))
    }
  }, [])

  const saveFinancialItems = (newItems: FinancialItem[]) => {
    setFinancialItems(newItems)
    localStorage.setItem('divorce-coordination-financial-planning', JSON.stringify(newItems))
  }

  const addFinancialItem = () => {
    const newItem: FinancialItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'planned',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveFinancialItems([...financialItems, newItem])
    resetForm()
    setIsAddingItem(false)
  }

  const updateFinancialItem = (id: string, updates: Partial<FinancialItem>) => {
    const updatedItems = financialItems.map(item => 
      item.id === id 
        ? { ...item, ...updates, updatedAt: new Date() }
        : item
    )
    saveFinancialItems(updatedItems)
  }

  const deleteFinancialItem = (id: string) => {
    const filteredItems = financialItems.filter(item => item.id !== id)
    saveFinancialItems(filteredItems)
  }

  const resetForm = () => {
    setFormData({
      type: 'expense',
      category: 'other',
      name: '',
      amount: 0,
      frequency: 'monthly',
      startDate: '',
      endDate: '',
      description: '',
      notes: '',
    })
  }

  const calculateMonthlyAmount = (amount: number, frequency: FinancialItem['frequency']) => {
    switch (frequency) {
      case 'weekly':
        return amount * 4.33
      case 'bi-weekly':
        return amount * 2.17
      case 'quarterly':
        return amount / 3
      case 'annually':
        return amount / 12
      case 'one-time':
        return 0 // Don't include in monthly calculations
      default:
        return amount
    }
  }

  const totalMonthlyIncome = financialItems
    .filter(item => item.type === 'income' && item.status === 'active')
    .reduce((sum, item) => sum + calculateMonthlyAmount(item.amount, item.frequency), 0)

  const totalMonthlyExpenses = financialItems
    .filter(item => (item.type === 'expense' || item.type === 'support' || item.type === 'debt') && item.status === 'active')
    .reduce((sum, item) => sum + calculateMonthlyAmount(item.amount, item.frequency), 0)

  const monthlyBalance = totalMonthlyIncome - totalMonthlyExpenses

  const supportPayments = financialItems
    .filter(item => item.type === 'support')
    .reduce((sum, item) => sum + calculateMonthlyAmount(item.amount, item.frequency), 0)

  const legalCosts = financialItems
    .filter(item => item.category === 'legal')
    .reduce((sum, item) => sum + item.amount, 0)

  const getStatusBadge = (status: FinancialItem['status']) => {
    switch (status) {
      case 'active':
        return <Badge variant="default">Active</Badge>
      case 'court-ordered':
        return <Badge variant="default" className="bg-purple-600">Court Ordered</Badge>
      case 'completed':
        return <Badge variant="default" className="bg-green-600">Completed</Badge>
      case 'disputed':
        return <Badge variant="destructive">Disputed</Badge>
      default:
        return <Badge variant="outline">Planned</Badge>
    }
  }

  const getTypeIcon = (type: FinancialItem['type']) => {
    switch (type) {
      case 'income':
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'expense':
        return <TrendingDown className="h-4 w-4 text-red-600" />
      case 'support':
        return <Baby className="h-4 w-4 text-blue-600" />
      case 'debt':
        return <CreditCard className="h-4 w-4 text-red-600" />
      default:
        return <DollarSign className="h-4 w-4" />
    }
  }

  const getCategoryIcon = (category: FinancialItem['category']) => {
    switch (category) {
      case 'housing':
        return <Home className="h-4 w-4" />
      case 'childcare':
        return <Baby className="h-4 w-4" />
      case 'transportation':
        return <Car className="h-4 w-4" />
      default:
        return <DollarSign className="h-4 w-4" />
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const formatFrequency = (frequency: FinancialItem['frequency']) => {
    return frequency.replace('-', ' ')
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financial Planning</h1>
          <p className="text-muted-foreground">Track income, expenses, and financial obligations during divorce</p>
        </div>
        <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Financial Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add Financial Item</DialogTitle>
              <DialogDescription>
                Add an income, expense, or financial obligation to track.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Salary, Rent, Child Support"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <Select value={formData.type} onValueChange={(value: FinancialItem['type']) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                    <SelectItem value="support">Support Payment</SelectItem>
                    <SelectItem value="debt">Debt Payment</SelectItem>
                    <SelectItem value="saving">Saving/Investment</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value: FinancialItem['category']) => setFormData({...formData, category: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="housing">Housing</SelectItem>
                    <SelectItem value="childcare">Childcare</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

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
                <Select value={formData.frequency} onValueChange={(value: FinancialItem['frequency']) => setFormData({...formData, frequency: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="annually">Annually</SelectItem>
                    <SelectItem value="one-time">One-time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Brief description..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addFinancialItem}>
                Add Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(totalMonthlyIncome)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{formatCurrency(totalMonthlyExpenses)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Monthly Balance</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${monthlyBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(monthlyBalance)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Support Payments</CardTitle>
            <Baby className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{formatCurrency(supportPayments)}</div>
            <p className="text-xs text-muted-foreground mt-1">monthly</p>
          </CardContent>
        </Card>
      </div>

      {/* Legal Costs */}
      {legalCosts > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Legal Costs Summary</CardTitle>
            <CardDescription>Total divorce-related legal expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{formatCurrency(legalCosts)}</div>
            <p className="text-sm text-muted-foreground mt-2">Total legal fees and costs</p>
          </CardContent>
        </Card>
      )}

      {/* Financial Items */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Items</CardTitle>
          <CardDescription>All income, expenses, and financial obligations</CardDescription>
        </CardHeader>
        <CardContent>
          {financialItems.length === 0 ? (
            <div className="text-center py-8">
              <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No financial items yet. Add your first item to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your financial planning items</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Monthly Impact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {financialItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(item.type)}
                        {getCategoryIcon(item.category)}
                        <div>
                          <div>{item.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {item.category} • {item.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell className={item.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                      {formatCurrency(item.amount)}
                    </TableCell>
                    <TableCell>{formatFrequency(item.frequency)}</TableCell>
                    <TableCell className={item.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                      {item.frequency === 'one-time' ? '—' : formatCurrency(calculateMonthlyAmount(item.amount, item.frequency))}
                    </TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Select
                          value={item.status}
                          onValueChange={(value: FinancialItem['status']) => 
                            updateFinancialItem(item.id, { status: value })
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="planned">Planned</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="disputed">Disputed</SelectItem>
                            <SelectItem value="court-ordered">Court Ordered</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteFinancialItem(item.id)}
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