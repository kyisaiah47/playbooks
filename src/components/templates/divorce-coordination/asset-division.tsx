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
  Home,
  Car,
  Building2,
  CreditCard,
  PiggyBank,
  Trash2
} from "lucide-react"
import { useDivorceCoordination } from "@/contexts/divorce-coordination-context"

interface Asset {
  id: string
  name: string
  type: 'property' | 'vehicle' | 'bank-account' | 'investment' | 'retirement' | 'business' | 'debt' | 'other'
  category: 'asset' | 'liability'
  currentValue: number
  originalValue?: number
  status: 'pending' | 'appraised' | 'agreed' | 'disputed' | 'divided'
  assignedTo: 'self' | 'spouse' | 'shared' | 'pending'
  appraisalDate?: string
  description: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function AssetDivision() {
  const { divorceData, updateDivorceData } = useDivorceCoordination()
  const [assets, setAssets] = useState<Asset[]>([])
  const [isAddingAsset, setIsAddingAsset] = useState(false)
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    type: 'other' as Asset['type'],
    category: 'asset' as Asset['category'],
    currentValue: 0,
    originalValue: 0,
    appraisalDate: '',
    description: '',
    notes: '',
  })

  useEffect(() => {
    const savedAssets = localStorage.getItem('divorce-coordination-asset-division')
    if (savedAssets) {
      const parsed = JSON.parse(savedAssets)
      setAssets(parsed.map((asset: any) => ({
        ...asset,
        createdAt: new Date(asset.createdAt),
        updatedAt: new Date(asset.updatedAt),
      })))
    }
  }, [])

  const saveAssets = (newAssets: Asset[]) => {
    setAssets(newAssets)
    localStorage.setItem('divorce-coordination-asset-division', JSON.stringify(newAssets))
  }

  const addAsset = () => {
    const newAsset: Asset = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      assignedTo: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveAssets([...assets, newAsset])
    resetForm()
    setIsAddingAsset(false)
  }

  const updateAsset = (id: string, updates: Partial<Asset>) => {
    const updatedAssets = assets.map(asset => 
      asset.id === id 
        ? { ...asset, ...updates, updatedAt: new Date() }
        : asset
    )
    saveAssets(updatedAssets)
  }

  const deleteAsset = (id: string) => {
    const filteredAssets = assets.filter(asset => asset.id !== id)
    saveAssets(filteredAssets)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'other',
      category: 'asset',
      currentValue: 0,
      originalValue: 0,
      appraisalDate: '',
      description: '',
      notes: '',
    })
  }

  const totalAssets = assets.filter(a => a.category === 'asset').reduce((sum, a) => sum + a.currentValue, 0)
  const totalLiabilities = assets.filter(a => a.category === 'liability').reduce((sum, a) => sum + a.currentValue, 0)
  const netWorth = totalAssets - totalLiabilities

  const selfAssets = assets.filter(a => a.assignedTo === 'self').reduce((sum, a) => 
    a.category === 'asset' ? sum + a.currentValue : sum - a.currentValue, 0)
  const spouseAssets = assets.filter(a => a.assignedTo === 'spouse').reduce((sum, a) => 
    a.category === 'asset' ? sum + a.currentValue : sum - a.currentValue, 0)

  const completedCount = assets.filter(asset => asset.status === 'divided' || asset.status === 'agreed').length
  const progressPercentage = assets.length > 0 ? (completedCount / assets.length) * 100 : 0

  const getStatusBadge = (status: Asset['status']) => {
    switch (status) {
      case 'divided':
        return <Badge variant="default">Divided</Badge>
      case 'agreed':
        return <Badge variant="default" className="bg-green-600">Agreed</Badge>
      case 'disputed':
        return <Badge variant="destructive">Disputed</Badge>
      case 'appraised':
        return <Badge variant="secondary">Appraised</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
    }
  }

  const getAssignmentBadge = (assignedTo: Asset['assignedTo']) => {
    switch (assignedTo) {
      case 'self':
        return <Badge variant="default" className="bg-blue-600">Mine</Badge>
      case 'spouse':
        return <Badge variant="default" className="bg-purple-600">Spouse's</Badge>
      case 'shared':
        return <Badge variant="secondary">Shared</Badge>
      default:
        return <Badge variant="outline">Pending</Badge>
    }
  }

  const getTypeIcon = (type: Asset['type']) => {
    switch (type) {
      case 'property':
        return <Home className="h-4 w-4" />
      case 'vehicle':
        return <Car className="h-4 w-4" />
      case 'business':
        return <Building2 className="h-4 w-4" />
      case 'debt':
        return <CreditCard className="h-4 w-4" />
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

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Asset Division</h1>
          <p className="text-muted-foreground">Track and manage all assets and liabilities for fair division</p>
        </div>
        <Dialog open={isAddingAsset} onOpenChange={setIsAddingAsset}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Asset/Liability
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add Asset or Liability</DialogTitle>
              <DialogDescription>
                Add an asset or liability to track in the division process.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Family Home, Joint Savings"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value: Asset['category']) => setFormData({...formData, category: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asset">Asset</SelectItem>
                    <SelectItem value="liability">Liability/Debt</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <Select value={formData.type} onValueChange={(value: Asset['type']) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="property">Real Estate</SelectItem>
                    <SelectItem value="vehicle">Vehicle</SelectItem>
                    <SelectItem value="bank-account">Bank Account</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="retirement">Retirement Account</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="debt">Debt</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="currentValue">Current Value ($)</Label>
                <Input
                  id="currentValue"
                  type="number"
                  value={formData.currentValue}
                  onChange={(e) => setFormData({...formData, currentValue: parseFloat(e.target.value) || 0})}
                  placeholder="0"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="appraisalDate">Appraisal/Valuation Date (Optional)</Label>
                <Input
                  id="appraisalDate"
                  type="date"
                  value={formData.appraisalDate}
                  onChange={(e) => setFormData({...formData, appraisalDate: e.target.value})}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Brief description of the asset/liability..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addAsset}>
                Add {formData.category === 'asset' ? 'Asset' : 'Liability'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(totalAssets)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Liabilities</CardTitle>
            <CreditCard className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{formatCurrency(totalLiabilities)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Worth</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(netWorth)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Division Progress</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressPercentage.toFixed(0)}%</div>
            <Progress value={progressPercentage} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Division Balance */}
      {(selfAssets !== 0 || spouseAssets !== 0) && (
        <Card>
          <CardHeader>
            <CardTitle>Division Balance</CardTitle>
            <CardDescription>Current allocation between parties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-600">Your Share</div>
                <div className="text-2xl font-bold">{formatCurrency(selfAssets)}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-purple-600">Spouse's Share</div>
                <div className="text-2xl font-bold">{formatCurrency(spouseAssets)}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Assets & Liabilities</CardTitle>
          <CardDescription>All items to be divided in the divorce</CardDescription>
        </CardHeader>
        <CardContent>
          {assets.length === 0 ? (
            <div className="text-center py-8">
              <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No assets or liabilities yet. Add items to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your marital assets and liabilities</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(asset.type)}
                        <div>
                          <div>{asset.name}</div>
                          {asset.description && (
                            <div className="text-sm text-muted-foreground">
                              {asset.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {asset.type.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={asset.category === 'asset' ? 'default' : 'destructive'}>
                        {asset.category}
                      </Badge>
                    </TableCell>
                    <TableCell className={asset.category === 'liability' ? "text-red-600" : ""}>
                      {formatCurrency(asset.currentValue)}
                    </TableCell>
                    <TableCell>{getStatusBadge(asset.status)}</TableCell>
                    <TableCell>{getAssignmentBadge(asset.assignedTo)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Select
                          value={asset.assignedTo}
                          onValueChange={(value: Asset['assignedTo']) => 
                            updateAsset(asset.id, { assignedTo: value })
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="self">Mine</SelectItem>
                            <SelectItem value="spouse">Spouse's</SelectItem>
                            <SelectItem value="shared">Shared</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteAsset(asset.id)}
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