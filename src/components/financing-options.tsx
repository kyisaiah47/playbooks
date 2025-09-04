"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DollarSign, TrendingDown, Calculator, Plus, Edit, Trash2, Building, CreditCard } from "lucide-react"

interface FinancingOption {
  id: string
  lender: string
  type: 'loan' | 'lease'
  apr: number
  term: number
  monthlyPayment: number
  downPayment: number
  totalCost: number
  status: 'researching' | 'applied' | 'approved' | 'denied'
  notes: string
  dateApplied?: string
  expirationDate?: string
}

export function FinancingOptions() {
  const [options, setOptions] = useState<FinancingOption[]>([
    {
      id: "1",
      lender: "First National Bank",
      type: "loan",
      apr: 4.2,
      term: 60,
      monthlyPayment: 485,
      downPayment: 5000,
      totalCost: 34100,
      status: "approved",
      notes: "Pre-approved, rate guaranteed for 30 days",
      dateApplied: "2024-01-10",
      expirationDate: "2024-02-10"
    },
    {
      id: "2", 
      lender: "Credit Union Auto",
      type: "loan",
      apr: 3.8,
      term: 48,
      monthlyPayment: 520,
      downPayment: 3000,
      totalCost: 27960,
      status: "applied",
      notes: "Waiting for approval decision",
      dateApplied: "2024-01-12"
    }
  ])

  const [editingOption, setEditingOption] = useState<FinancingOption | null>(null)

  const addOption = (data: Partial<FinancingOption>) => {
    const newOption: FinancingOption = {
      id: Date.now().toString(),
      lender: data.lender || "",
      type: data.type || "loan",
      apr: data.apr || 0,
      term: data.term || 60,
      monthlyPayment: data.monthlyPayment || 0,
      downPayment: data.downPayment || 0,
      totalCost: data.totalCost || 0,
      status: data.status || "researching",
      notes: data.notes || "",
      dateApplied: data.dateApplied,
      expirationDate: data.expirationDate
    }
    setOptions(prev => [...prev, newOption])
  }

  const updateOption = (id: string, updates: Partial<FinancingOption>) => {
    setOptions(prev => prev.map(option => 
      option.id === id ? { ...option, ...updates } : option
    ))
    setEditingOption(null)
  }

  const deleteOption = (id: string) => {
    setOptions(prev => prev.filter(option => option.id !== id))
  }

  const getStatusColor = (status: FinancingOption['status']) => {
    switch (status) {
      case 'approved': return 'bg-green-500/10 text-green-500'
      case 'applied': return 'bg-blue-500/10 text-blue-500'
      case 'denied': return 'bg-red-500/10 text-red-500'
      default: return 'bg-gray-500/10 text-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <DollarSign className="mr-2 h-8 w-8" />
            Financing Options
          </h1>
          <p className="text-muted-foreground">
            Compare loans and leases to find the best financing for your vehicle
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Option
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Financing Option</DialogTitle>
            </DialogHeader>
            <FinancingForm onSubmit={addOption} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <Card key={option.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center text-lg">
                    <Building className="mr-2 h-4 w-4" />
                    {option.lender}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground capitalize">{option.type}</p>
                </div>
                <Badge className={getStatusColor(option.status)}>
                  {option.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">APR</span>
                  <p className="text-lg font-bold text-primary">{option.apr}%</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Term</span>
                  <p className="text-lg font-bold">{option.term} mo</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Monthly</span>
                  <p className="text-lg font-bold">${option.monthlyPayment}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Down</span>
                  <p className="text-lg font-bold">${option.downPayment.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="border-t pt-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Total Cost:</span>
                  <span className="font-bold">${option.totalCost.toLocaleString()}</span>
                </div>
              </div>

              {option.notes && (
                <p className="text-sm text-muted-foreground line-clamp-2">{option.notes}</p>
              )}

              {option.expirationDate && (
                <p className="text-xs text-orange-600">
                  Expires: {option.expirationDate}
                </p>
              )}

              <div className="flex justify-between pt-2">
                <Button variant="outline" size="sm" onClick={() => setEditingOption(option)}>
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => deleteOption(option.id)}>
                  <Trash2 className="h-3 w-3 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="mr-2 h-5 w-5" />
            Loan Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoanCalculator />
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      {editingOption && (
        <Dialog open={!!editingOption} onOpenChange={() => setEditingOption(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Financing Option</DialogTitle>
            </DialogHeader>
            <FinancingForm 
              option={editingOption} 
              onSubmit={(updates) => updateOption(editingOption.id, updates)} 
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function FinancingForm({ option, onSubmit }: { option?: FinancingOption; onSubmit: (data: Partial<FinancingOption>) => void }) {
  const [formData, setFormData] = useState({
    lender: option?.lender || "",
    type: option?.type || "loan",
    apr: option?.apr || 0,
    term: option?.term || 60,
    monthlyPayment: option?.monthlyPayment || 0,
    downPayment: option?.downPayment || 0,
    totalCost: option?.totalCost || 0,
    status: option?.status || "researching",
    notes: option?.notes || "",
    dateApplied: option?.dateApplied || "",
    expirationDate: option?.expirationDate || ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Lender</Label>
          <Input
            value={formData.lender}
            onChange={(e) => setFormData(prev => ({ ...prev, lender: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label>Type</Label>
          <select
            className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
            value={formData.type}
            onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'loan' | 'lease' }))}
          >
            <option value="loan">Auto Loan</option>
            <option value="lease">Lease</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>APR (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={formData.apr}
            onChange={(e) => setFormData(prev => ({ ...prev, apr: parseFloat(e.target.value) || 0 }))}
          />
        </div>
        <div>
          <Label>Term (months)</Label>
          <Input
            type="number"
            value={formData.term}
            onChange={(e) => setFormData(prev => ({ ...prev, term: parseInt(e.target.value) || 0 }))}
          />
        </div>
        <div>
          <Label>Status</Label>
          <select
            className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
            value={formData.status}
            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as FinancingOption['status'] }))}
          >
            <option value="researching">Researching</option>
            <option value="applied">Applied</option>
            <option value="approved">Approved</option>
            <option value="denied">Denied</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Monthly Payment</Label>
          <Input
            type="number"
            value={formData.monthlyPayment}
            onChange={(e) => setFormData(prev => ({ ...prev, monthlyPayment: parseInt(e.target.value) || 0 }))}
          />
        </div>
        <div>
          <Label>Down Payment</Label>
          <Input
            type="number"
            value={formData.downPayment}
            onChange={(e) => setFormData(prev => ({ ...prev, downPayment: parseInt(e.target.value) || 0 }))}
          />
        </div>
        <div>
          <Label>Total Cost</Label>
          <Input
            type="number"
            value={formData.totalCost}
            onChange={(e) => setFormData(prev => ({ ...prev, totalCost: parseInt(e.target.value) || 0 }))}
          />
        </div>
      </div>
      <Button type="submit" className="w-full">
        {option ? 'Update Option' : 'Add Option'}
      </Button>
    </form>
  )
}

function LoanCalculator() {
  const [calc, setCalc] = useState({
    loanAmount: 25000,
    apr: 4.5,
    term: 60
  })

  const monthlyPayment = calc.loanAmount > 0 && calc.apr > 0 && calc.term > 0
    ? (calc.loanAmount * (calc.apr / 100 / 12)) / (1 - Math.pow(1 + calc.apr / 100 / 12, -calc.term))
    : 0

  const totalCost = monthlyPayment * calc.term

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-3">
        <div>
          <Label>Loan Amount</Label>
          <Input
            type="number"
            value={calc.loanAmount}
            onChange={(e) => setCalc(prev => ({ ...prev, loanAmount: parseInt(e.target.value) || 0 }))}
          />
        </div>
        <div>
          <Label>APR (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={calc.apr}
            onChange={(e) => setCalc(prev => ({ ...prev, apr: parseFloat(e.target.value) || 0 }))}
          />
        </div>
        <div>
          <Label>Term (months)</Label>
          <Input
            type="number"
            value={calc.term}
            onChange={(e) => setCalc(prev => ({ ...prev, term: parseInt(e.target.value) || 0 }))}
          />
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-center p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">Monthly Payment</p>
          <p className="text-2xl font-bold text-primary">${monthlyPayment.toFixed(2)}</p>
        </div>
        <div className="text-center p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">Total Cost</p>
          <p className="text-xl font-bold">${totalCost.toFixed(2)}</p>
        </div>
        <div className="text-center p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">Total Interest</p>
          <p className="text-xl font-bold">${(totalCost - calc.loanAmount).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}