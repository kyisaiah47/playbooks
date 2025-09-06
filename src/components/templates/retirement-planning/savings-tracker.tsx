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
  PiggyBank,
  TrendingUp,
  DollarSign,
  Percent
} from "lucide-react"
import { useRetirementPlanning } from "@/contexts/retirement-planning-context"

interface SavingsAccount {
  id: string
  accountName: string
  accountType: 'savings' | '401k' | 'ira' | 'roth-ira' | 'investment' | 'pension' | 'other'
  currentBalance: number
  monthlyContribution: number
  interestRate: number
  employerMatch?: number
  targetBalance: number
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function SavingsTracker() {
  const { data, updateData } = useRetirementPlanning()
  const [accounts, setAccounts] = useState<SavingsAccount[]>([])
  const [isAddingAccount, setIsAddingAccount] = useState(false)
  const [editingAccount, setEditingAccount] = useState<SavingsAccount | null>(null)

  const [formData, setFormData] = useState({
    accountName: '',
    accountType: 'savings' as const,
    currentBalance: 0,
    monthlyContribution: 0,
    interestRate: 0,
    employerMatch: 0,
    targetBalance: 0,
    notes: '',
  })

  useEffect(() => {
    const savedAccounts = localStorage.getItem('retirement-planning-savings-items')
    if (savedAccounts) {
      const parsedAccounts = JSON.parse(savedAccounts).map((account: any) => ({
        ...account,
        createdAt: new Date(account.createdAt),
        updatedAt: new Date(account.updatedAt),
      }))
      setAccounts(parsedAccounts)
    }
  }, [])

  const saveAccounts = (newAccounts: SavingsAccount[]) => {
    setAccounts(newAccounts)
    localStorage.setItem('retirement-planning-savings-items', JSON.stringify(newAccounts))
  }

  const addAccount = () => {
    const newAccount: SavingsAccount = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveAccounts([...accounts, newAccount])
    resetForm()
    setIsAddingAccount(false)
  }

  const updateAccount = (id: string, updates: Partial<SavingsAccount>) => {
    const updatedAccounts = accounts.map(account => 
      account.id === id 
        ? { ...account, ...updates, updatedAt: new Date() }
        : account
    )
    saveAccounts(updatedAccounts)
  }

  const deleteAccount = (id: string) => {
    const filteredAccounts = accounts.filter(account => account.id !== id)
    saveAccounts(filteredAccounts)
  }

  const resetForm = () => {
    setFormData({
      accountName: '',
      accountType: 'savings',
      currentBalance: 0,
      monthlyContribution: 0,
      interestRate: 0,
      employerMatch: 0,
      targetBalance: 0,
      notes: '',
    })
  }

  const startEditing = (account: SavingsAccount) => {
    setFormData({
      accountName: account.accountName,
      accountType: account.accountType,
      currentBalance: account.currentBalance,
      monthlyContribution: account.monthlyContribution,
      interestRate: account.interestRate,
      employerMatch: account.employerMatch || 0,
      targetBalance: account.targetBalance,
      notes: account.notes || '',
    })
    setEditingAccount(account)
    setIsAddingAccount(true)
  }

  const saveEdit = () => {
    if (editingAccount) {
      updateAccount(editingAccount.id, formData)
      setEditingAccount(null)
      resetForm()
      setIsAddingAccount(false)
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatAccountType = (type: string) => {
    const typeMap: Record<string, string> = {
      'savings': 'Savings Account',
      '401k': '401(k)',
      'ira': 'Traditional IRA',
      'roth-ira': 'Roth IRA',
      'investment': 'Investment Account',
      'pension': 'Pension Plan',
      'other': 'Other'
    }
    return typeMap[type] || type
  }

  const getBadgeVariant = (type: string) => {
    const variantMap: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      'savings': 'secondary',
      '401k': 'default',
      'ira': 'outline',
      'roth-ira': 'outline',
      'investment': 'default',
      'pension': 'secondary',
      'other': 'outline'
    }
    return variantMap[type] || 'outline'
  }

  const totalSaved = accounts.reduce((sum, account) => sum + account.currentBalance, 0)
  const totalMonthlyContributions = accounts.reduce((sum, account) => sum + account.monthlyContribution, 0)
  const totalTargetBalance = accounts.reduce((sum, account) => sum + account.targetBalance, 0)
  const savingsProgress = totalTargetBalance > 0 ? (totalSaved / totalTargetBalance) * 100 : 0

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Savings Tracker</h1>
          <p className="text-muted-foreground">Manage your retirement savings accounts</p>
        </div>
        <Dialog open={isAddingAccount} onOpenChange={setIsAddingAccount}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Account
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingAccount ? 'Edit' : 'Add New'} Savings Account</DialogTitle>
              <DialogDescription>
                {editingAccount ? 'Update your' : 'Create a new'} retirement savings account to track.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="accountName">Account Name</Label>
                  <Input
                    id="accountName"
                    value={formData.accountName}
                    onChange={(e) => setFormData({...formData, accountName: e.target.value})}
                    placeholder="My 401(k), IRA, etc."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="accountType">Account Type</Label>
                  <Select value={formData.accountType} onValueChange={(value: any) => setFormData({...formData, accountType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings Account</SelectItem>
                      <SelectItem value="401k">401(k)</SelectItem>
                      <SelectItem value="ira">Traditional IRA</SelectItem>
                      <SelectItem value="roth-ira">Roth IRA</SelectItem>
                      <SelectItem value="investment">Investment Account</SelectItem>
                      <SelectItem value="pension">Pension Plan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="currentBalance">Current Balance</Label>
                  <Input
                    id="currentBalance"
                    type="number"
                    value={formData.currentBalance}
                    onChange={(e) => setFormData({...formData, currentBalance: parseFloat(e.target.value) || 0})}
                    placeholder="50000"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="targetBalance">Target Balance</Label>
                  <Input
                    id="targetBalance"
                    type="number"
                    value={formData.targetBalance}
                    onChange={(e) => setFormData({...formData, targetBalance: parseFloat(e.target.value) || 0})}
                    placeholder="500000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="monthlyContribution">Monthly Contribution</Label>
                  <Input
                    id="monthlyContribution"
                    type="number"
                    value={formData.monthlyContribution}
                    onChange={(e) => setFormData({...formData, monthlyContribution: parseFloat(e.target.value) || 0})}
                    placeholder="500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={formData.interestRate}
                    onChange={(e) => setFormData({...formData, interestRate: parseFloat(e.target.value) || 0})}
                    placeholder="7.0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="employerMatch">Employer Match</Label>
                  <Input
                    id="employerMatch"
                    type="number"
                    value={formData.employerMatch}
                    onChange={(e) => setFormData({...formData, employerMatch: parseFloat(e.target.value) || 0})}
                    placeholder="200"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this account..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setIsAddingAccount(false)
                setEditingAccount(null)
                resetForm()
              }}>
                Cancel
              </Button>
              <Button onClick={editingAccount ? saveEdit : addAccount}>
                {editingAccount ? 'Update' : 'Add'} Account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalSaved)}</div>
            <p className="text-xs text-muted-foreground">across {accounts.length} accounts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Contributions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalMonthlyContributions)}</div>
            <p className="text-xs text-muted-foreground">total per month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalTargetBalance)}</div>
            <p className="text-xs text-muted-foreground">savings goal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{savingsProgress.toFixed(1)}%</div>
            <Progress value={Math.min(savingsProgress, 100)} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Accounts List */}
      <Card>
        <CardHeader>
          <CardTitle>Savings Accounts</CardTitle>
          <CardDescription>Manage and track your retirement savings accounts</CardDescription>
        </CardHeader>
        <CardContent>
          {accounts.length === 0 ? (
            <div className="text-center py-8">
              <PiggyBank className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No savings accounts yet. Add your first account to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Your retirement savings accounts</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Current Balance</TableHead>
                    <TableHead>Monthly Contribution</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accounts.map((account) => {
                    const accountProgress = account.targetBalance > 0 ? 
                      Math.min(100, (account.currentBalance / account.targetBalance) * 100) : 0
                    
                    return (
                      <TableRow key={account.id}>
                        <TableCell className="font-medium">{account.accountName}</TableCell>
                        <TableCell>
                          <Badge variant={getBadgeVariant(account.accountType)}>
                            {formatAccountType(account.accountType)}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatCurrency(account.currentBalance)}</TableCell>
                        <TableCell>{formatCurrency(account.monthlyContribution)}</TableCell>
                        <TableCell>{account.interestRate.toFixed(1)}%</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={accountProgress} className="w-16 h-2" />
                            <span className="text-xs text-muted-foreground min-w-[3rem]">
                              {accountProgress.toFixed(0)}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => startEditing(account)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteAccount(account.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}