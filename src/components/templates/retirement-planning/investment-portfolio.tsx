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
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  Activity
} from "lucide-react"
import { useRetirementPlanning } from "@/contexts/retirement-planning-context"

interface Investment {
  id: string
  name: string
  symbol: string
  investmentType: 'stocks' | 'bonds' | 'mutual-funds' | 'etf' | 'index-funds' | 'real-estate' | 'commodities' | 'crypto' | 'other'
  shares: number
  purchasePrice: number
  currentPrice: number
  currentValue: number
  purchaseDate: Date
  riskLevel: 'low' | 'medium' | 'high'
  dividendYield?: number
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function InvestmentPortfolio() {
  const { data, updateData } = useRetirementPlanning()
  const [investments, setInvestments] = useState<Investment[]>([])
  const [isAddingInvestment, setIsAddingInvestment] = useState(false)
  const [editingInvestment, setEditingInvestment] = useState<Investment | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    investmentType: 'stocks' as const,
    shares: 0,
    purchasePrice: 0,
    currentPrice: 0,
    purchaseDate: new Date().toISOString().split('T')[0],
    riskLevel: 'medium' as const,
    dividendYield: 0,
    notes: '',
  })

  useEffect(() => {
    const savedInvestments = localStorage.getItem('retirement-planning-portfolio-items')
    if (savedInvestments) {
      const parsedInvestments = JSON.parse(savedInvestments).map((investment: any) => ({
        ...investment,
        purchaseDate: new Date(investment.purchaseDate),
        createdAt: new Date(investment.createdAt),
        updatedAt: new Date(investment.updatedAt),
      }))
      setInvestments(parsedInvestments)
    }
  }, [])

  const saveInvestments = (newInvestments: Investment[]) => {
    setInvestments(newInvestments)
    localStorage.setItem('retirement-planning-portfolio-items', JSON.stringify(newInvestments))
  }

  const addInvestment = () => {
    const currentValue = formData.shares * formData.currentPrice
    const newInvestment: Investment = {
      id: Date.now().toString(),
      ...formData,
      currentValue,
      purchaseDate: new Date(formData.purchaseDate),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveInvestments([...investments, newInvestment])
    resetForm()
    setIsAddingInvestment(false)
  }

  const updateInvestment = (id: string, updates: Partial<Investment>) => {
    const updatedInvestments = investments.map(investment => {
      if (investment.id === id) {
        const updated = { ...investment, ...updates, updatedAt: new Date() }
        if ('shares' in updates || 'currentPrice' in updates) {
          updated.currentValue = (updates.shares ?? updated.shares) * (updates.currentPrice ?? updated.currentPrice)
        }
        return updated
      }
      return investment
    })
    saveInvestments(updatedInvestments)
  }

  const deleteInvestment = (id: string) => {
    const filteredInvestments = investments.filter(investment => investment.id !== id)
    saveInvestments(filteredInvestments)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      symbol: '',
      investmentType: 'stocks',
      shares: 0,
      purchasePrice: 0,
      currentPrice: 0,
      purchaseDate: new Date().toISOString().split('T')[0],
      riskLevel: 'medium',
      dividendYield: 0,
      notes: '',
    })
  }

  const startEditing = (investment: Investment) => {
    setFormData({
      name: investment.name,
      symbol: investment.symbol,
      investmentType: investment.investmentType,
      shares: investment.shares,
      purchasePrice: investment.purchasePrice,
      currentPrice: investment.currentPrice,
      purchaseDate: investment.purchaseDate.toISOString().split('T')[0],
      riskLevel: investment.riskLevel,
      dividendYield: investment.dividendYield || 0,
      notes: investment.notes || '',
    })
    setEditingInvestment(investment)
    setIsAddingInvestment(true)
  }

  const saveEdit = () => {
    if (editingInvestment) {
      updateInvestment(editingInvestment.id, {
        ...formData,
        purchaseDate: new Date(formData.purchaseDate),
        currentValue: formData.shares * formData.currentPrice,
      })
      setEditingInvestment(null)
      resetForm()
      setIsAddingInvestment(false)
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const formatInvestmentType = (type: string) => {
    const typeMap: Record<string, string> = {
      'stocks': 'Stocks',
      'bonds': 'Bonds',
      'mutual-funds': 'Mutual Funds',
      'etf': 'ETF',
      'index-funds': 'Index Funds',
      'real-estate': 'Real Estate',
      'commodities': 'Commodities',
      'crypto': 'Cryptocurrency',
      'other': 'Other'
    }
    return typeMap[type] || type
  }

  const getBadgeVariant = (type: string): "default" | "secondary" | "destructive" | "outline" => {
    const variantMap: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      'stocks': 'default',
      'bonds': 'secondary',
      'mutual-funds': 'outline',
      'etf': 'default',
      'index-funds': 'secondary',
      'real-estate': 'outline',
      'commodities': 'default',
      'crypto': 'destructive',
      'other': 'outline'
    }
    return variantMap[type] || 'outline'
  }

  const getRiskColor = (risk: string) => {
    const colorMap: Record<string, string> = {
      'low': 'text-green-600',
      'medium': 'text-yellow-600',
      'high': 'text-red-600'
    }
    return colorMap[risk] || 'text-gray-600'
  }

  const totalValue = investments.reduce((sum, investment) => sum + investment.currentValue, 0)
  const totalCost = investments.reduce((sum, investment) => sum + (investment.shares * investment.purchasePrice), 0)
  const totalGainLoss = totalValue - totalCost
  const totalGainLossPercent = totalCost > 0 ? (totalGainLoss / totalCost) * 100 : 0

  // Portfolio allocation by type
  const allocationByType = investments.reduce((acc, investment) => {
    acc[investment.investmentType] = (acc[investment.investmentType] || 0) + investment.currentValue
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Investment Portfolio</h1>
          <p className="text-muted-foreground">Track your investment performance and allocation</p>
        </div>
        <Dialog open={isAddingInvestment} onOpenChange={setIsAddingInvestment}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Investment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingInvestment ? 'Edit' : 'Add New'} Investment</DialogTitle>
              <DialogDescription>
                {editingInvestment ? 'Update your' : 'Add a new'} investment to track in your portfolio.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Investment Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Apple Inc, S&P 500 ETF, etc."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="symbol">Symbol</Label>
                  <Input
                    id="symbol"
                    value={formData.symbol}
                    onChange={(e) => setFormData({...formData, symbol: e.target.value.toUpperCase()})}
                    placeholder="AAPL, SPY, etc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="investmentType">Investment Type</Label>
                  <Select value={formData.investmentType} onValueChange={(value: any) => setFormData({...formData, investmentType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select investment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stocks">Stocks</SelectItem>
                      <SelectItem value="bonds">Bonds</SelectItem>
                      <SelectItem value="mutual-funds">Mutual Funds</SelectItem>
                      <SelectItem value="etf">ETF</SelectItem>
                      <SelectItem value="index-funds">Index Funds</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="commodities">Commodities</SelectItem>
                      <SelectItem value="crypto">Cryptocurrency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="riskLevel">Risk Level</Label>
                  <Select value={formData.riskLevel} onValueChange={(value: any) => setFormData({...formData, riskLevel: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select risk level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low Risk</SelectItem>
                      <SelectItem value="medium">Medium Risk</SelectItem>
                      <SelectItem value="high">High Risk</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="shares">Shares/Units</Label>
                  <Input
                    id="shares"
                    type="number"
                    step="0.0001"
                    value={formData.shares}
                    onChange={(e) => setFormData({...formData, shares: parseFloat(e.target.value) || 0})}
                    placeholder="100"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="purchasePrice">Purchase Price</Label>
                  <Input
                    id="purchasePrice"
                    type="number"
                    step="0.01"
                    value={formData.purchasePrice}
                    onChange={(e) => setFormData({...formData, purchasePrice: parseFloat(e.target.value) || 0})}
                    placeholder="150.00"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="currentPrice">Current Price</Label>
                  <Input
                    id="currentPrice"
                    type="number"
                    step="0.01"
                    value={formData.currentPrice}
                    onChange={(e) => setFormData({...formData, currentPrice: parseFloat(e.target.value) || 0})}
                    placeholder="175.00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="purchaseDate">Purchase Date</Label>
                  <Input
                    id="purchaseDate"
                    type="date"
                    value={formData.purchaseDate}
                    onChange={(e) => setFormData({...formData, purchaseDate: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dividendYield">Dividend Yield (%)</Label>
                  <Input
                    id="dividendYield"
                    type="number"
                    step="0.01"
                    value={formData.dividendYield}
                    onChange={(e) => setFormData({...formData, dividendYield: parseFloat(e.target.value) || 0})}
                    placeholder="2.5"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Investment strategy, research notes, etc."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setIsAddingInvestment(false)
                setEditingInvestment(null)
                resetForm()
              }}>
                Cancel
              </Button>
              <Button onClick={editingInvestment ? saveEdit : addInvestment}>
                {editingInvestment ? 'Update' : 'Add'} Investment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalValue)}</div>
            <p className="text-xs text-muted-foreground">{investments.length} investments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalCost)}</div>
            <p className="text-xs text-muted-foreground">initial investment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Gain/Loss</CardTitle>
            {totalGainLoss >= 0 ? 
              <TrendingUp className="h-4 w-4 text-green-600" /> : 
              <TrendingDown className="h-4 w-4 text-red-600" />
            }
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(totalGainLoss)}
            </div>
            <p className={`text-xs ${totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalGainLossPercent >= 0 ? '+' : ''}{totalGainLossPercent.toFixed(2)}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Diversification</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.keys(allocationByType).length}</div>
            <p className="text-xs text-muted-foreground">asset classes</p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Allocation */}
      {Object.keys(allocationByType).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Allocation</CardTitle>
            <CardDescription>Asset allocation breakdown by investment type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(allocationByType).map(([type, value]) => {
                const percentage = totalValue > 0 ? (value / totalValue) * 100 : 0
                return (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={getBadgeVariant(type)}>{formatInvestmentType(type)}</Badge>
                      <span className="text-sm text-muted-foreground">{formatCurrency(value)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={percentage} className="w-24 h-2" />
                      <span className="text-xs text-muted-foreground min-w-[3rem]">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Investments List */}
      <Card>
        <CardHeader>
          <CardTitle>Investment Holdings</CardTitle>
          <CardDescription>Individual investment performance and details</CardDescription>
        </CardHeader>
        <CardContent>
          {investments.length === 0 ? (
            <div className="text-center py-8">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No investments yet. Add your first investment to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Your investment portfolio holdings</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name/Symbol</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>Purchase Price</TableHead>
                    <TableHead>Current Price</TableHead>
                    <TableHead>Current Value</TableHead>
                    <TableHead>Gain/Loss</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investments.map((investment) => {
                    const gainLoss = investment.currentValue - (investment.shares * investment.purchasePrice)
                    const gainLossPercent = investment.shares * investment.purchasePrice > 0 ? 
                      (gainLoss / (investment.shares * investment.purchasePrice)) * 100 : 0
                    
                    return (
                      <TableRow key={investment.id}>
                        <TableCell>
                          <div className="font-medium">{investment.name}</div>
                          <div className="text-sm text-muted-foreground">{investment.symbol}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getBadgeVariant(investment.investmentType)}>
                            {formatInvestmentType(investment.investmentType)}
                          </Badge>
                        </TableCell>
                        <TableCell>{investment.shares.toLocaleString()}</TableCell>
                        <TableCell>{formatCurrency(investment.purchasePrice)}</TableCell>
                        <TableCell>{formatCurrency(investment.currentPrice)}</TableCell>
                        <TableCell className="font-medium">{formatCurrency(investment.currentValue)}</TableCell>
                        <TableCell>
                          <div className={gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}>
                            <div className="font-medium">{formatCurrency(gainLoss)}</div>
                            <div className="text-xs">
                              {gainLossPercent >= 0 ? '+' : ''}{gainLossPercent.toFixed(2)}%
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`text-sm font-medium ${getRiskColor(investment.riskLevel)}`}>
                            {investment.riskLevel.charAt(0).toUpperCase() + investment.riskLevel.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => startEditing(investment)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteInvestment(investment.id)}
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