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
  TrendingUp,
  PiggyBank,
  Building,
  Users,
  FileText,
  Calendar,
  Target
} from "lucide-react"
import { useRetirementPlanning } from "@/contexts/retirement-planning-context"

interface IncomeSource {
  id: string
  sourceName: string
  sourceType: 'social-security' | 'pension' | '401k-withdrawal' | 'ira-withdrawal' | 'investment-income' | 'rental-income' | 'part-time-work' | 'annuity' | 'other'
  monthlyAmount: number
  startAge: number
  endAge?: number
  inflationAdjusted: boolean
  taxable: boolean
  reliability: 'guaranteed' | 'likely' | 'uncertain'
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function IncomePlanning() {
  const { data, updateData, retirementData } = useRetirementPlanning()
  const [incomeSources, setIncomeSources] = useState<IncomeSource[]>([])
  const [isAddingSource, setIsAddingSource] = useState(false)
  const [editingSource, setEditingSource] = useState<IncomeSource | null>(null)

  const [formData, setFormData] = useState({
    sourceName: '',
    sourceType: 'social-security' as const,
    monthlyAmount: 0,
    startAge: retirementData?.targetRetirementAge || 65,
    endAge: 0,
    inflationAdjusted: false,
    taxable: true,
    reliability: 'likely' as const,
    notes: '',
  })

  useEffect(() => {
    const savedSources = localStorage.getItem('retirement-planning-income-items')
    if (savedSources) {
      const parsedSources = JSON.parse(savedSources).map((source: any) => ({
        ...source,
        createdAt: new Date(source.createdAt),
        updatedAt: new Date(source.updatedAt),
      }))
      setIncomeSources(parsedSources)
    }
  }, [])

  const saveSources = (newSources: IncomeSource[]) => {
    setIncomeSources(newSources)
    localStorage.setItem('retirement-planning-income-items', JSON.stringify(newSources))
  }

  const addSource = () => {
    const newSource: IncomeSource = {
      id: Date.now().toString(),
      ...formData,
      endAge: formData.endAge > 0 ? formData.endAge : undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveSources([...incomeSources, newSource])
    resetForm()
    setIsAddingSource(false)
  }

  const updateSource = (id: string, updates: Partial<IncomeSource>) => {
    const updatedSources = incomeSources.map(source => 
      source.id === id 
        ? { ...source, ...updates, updatedAt: new Date() }
        : source
    )
    saveSources(updatedSources)
  }

  const deleteSource = (id: string) => {
    const filteredSources = incomeSources.filter(source => source.id !== id)
    saveSources(filteredSources)
  }

  const resetForm = () => {
    setFormData({
      sourceName: '',
      sourceType: 'social-security',
      monthlyAmount: 0,
      startAge: retirementData?.targetRetirementAge || 65,
      endAge: 0,
      inflationAdjusted: false,
      taxable: true,
      reliability: 'likely',
      notes: '',
    })
  }

  const startEditing = (source: IncomeSource) => {
    setFormData({
      sourceName: source.sourceName,
      sourceType: source.sourceType,
      monthlyAmount: source.monthlyAmount,
      startAge: source.startAge,
      endAge: source.endAge || 0,
      inflationAdjusted: source.inflationAdjusted,
      taxable: source.taxable,
      reliability: source.reliability,
      notes: source.notes || '',
    })
    setEditingSource(source)
    setIsAddingSource(true)
  }

  const saveEdit = () => {
    if (editingSource) {
      updateSource(editingSource.id, {
        ...formData,
        endAge: formData.endAge > 0 ? formData.endAge : undefined,
      })
      setEditingSource(null)
      resetForm()
      setIsAddingSource(false)
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

  const formatSourceType = (type: string) => {
    const typeMap: Record<string, string> = {
      'social-security': 'Social Security',
      'pension': 'Pension',
      '401k-withdrawal': '401(k) Withdrawal',
      'ira-withdrawal': 'IRA Withdrawal',
      'investment-income': 'Investment Income',
      'rental-income': 'Rental Income',
      'part-time-work': 'Part-time Work',
      'annuity': 'Annuity',
      'other': 'Other'
    }
    return typeMap[type] || type
  }

  const getBadgeVariant = (type: string): "default" | "secondary" | "destructive" | "outline" => {
    const variantMap: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      'social-security': 'default',
      'pension': 'secondary',
      '401k-withdrawal': 'outline',
      'ira-withdrawal': 'outline',
      'investment-income': 'default',
      'rental-income': 'secondary',
      'part-time-work': 'outline',
      'annuity': 'secondary',
      'other': 'outline'
    }
    return variantMap[type] || 'outline'
  }

  const getReliabilityColor = (reliability: string) => {
    const colorMap: Record<string, string> = {
      'guaranteed': 'text-green-600',
      'likely': 'text-blue-600',
      'uncertain': 'text-yellow-600'
    }
    return colorMap[reliability] || 'text-gray-600'
  }

  const getCurrentAge = () => retirementData?.currentAge || 30
  const getRetirementAge = () => retirementData?.targetRetirementAge || 65

  // Calculate income projections for different retirement ages
  const getIncomeAtAge = (age: number) => {
    return incomeSources
      .filter(source => age >= source.startAge && (!source.endAge || age <= source.endAge))
      .reduce((total, source) => total + source.monthlyAmount, 0)
  }

  const totalMonthlyIncome = getIncomeAtAge(getRetirementAge())
  const totalAnnualIncome = totalMonthlyIncome * 12
  const guaranteedIncome = incomeSources
    .filter(source => source.reliability === 'guaranteed')
    .reduce((total, source) => total + source.monthlyAmount, 0)
  const likelyIncome = incomeSources
    .filter(source => source.reliability === 'likely')
    .reduce((total, source) => total + source.monthlyAmount, 0)

  const incomeReplacementRatio = retirementData?.currentAnnualIncome ? 
    (totalAnnualIncome / retirementData.currentAnnualIncome) * 100 : 0

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Income Planning</h1>
          <p className="text-muted-foreground">Plan your retirement income sources and projections</p>
        </div>
        <Dialog open={isAddingSource} onOpenChange={setIsAddingSource}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Income Source
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingSource ? 'Edit' : 'Add New'} Income Source</DialogTitle>
              <DialogDescription>
                {editingSource ? 'Update an' : 'Add a new'} income source for your retirement planning.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="sourceName">Source Name</Label>
                  <Input
                    id="sourceName"
                    value={formData.sourceName}
                    onChange={(e) => setFormData({...formData, sourceName: e.target.value})}
                    placeholder="My Social Security, Company Pension, etc."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sourceType">Source Type</Label>
                  <Select value={formData.sourceType} onValueChange={(value: any) => setFormData({...formData, sourceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social-security">Social Security</SelectItem>
                      <SelectItem value="pension">Pension</SelectItem>
                      <SelectItem value="401k-withdrawal">401(k) Withdrawal</SelectItem>
                      <SelectItem value="ira-withdrawal">IRA Withdrawal</SelectItem>
                      <SelectItem value="investment-income">Investment Income</SelectItem>
                      <SelectItem value="rental-income">Rental Income</SelectItem>
                      <SelectItem value="part-time-work">Part-time Work</SelectItem>
                      <SelectItem value="annuity">Annuity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="monthlyAmount">Monthly Amount ($)</Label>
                  <Input
                    id="monthlyAmount"
                    type="number"
                    value={formData.monthlyAmount}
                    onChange={(e) => setFormData({...formData, monthlyAmount: parseFloat(e.target.value) || 0})}
                    placeholder="2500"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reliability">Reliability</Label>
                  <Select value={formData.reliability} onValueChange={(value: any) => setFormData({...formData, reliability: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reliability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guaranteed">Guaranteed</SelectItem>
                      <SelectItem value="likely">Likely</SelectItem>
                      <SelectItem value="uncertain">Uncertain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startAge">Start Age</Label>
                  <Input
                    id="startAge"
                    type="number"
                    value={formData.startAge}
                    onChange={(e) => setFormData({...formData, startAge: parseInt(e.target.value) || 0})}
                    placeholder="65"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="endAge">End Age (Optional)</Label>
                  <Input
                    id="endAge"
                    type="number"
                    value={formData.endAge}
                    onChange={(e) => setFormData({...formData, endAge: parseInt(e.target.value) || 0})}
                    placeholder="Leave empty for lifetime income"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="inflationAdjusted"
                    checked={formData.inflationAdjusted}
                    onChange={(e) => setFormData({...formData, inflationAdjusted: e.target.checked})}
                    className="rounded"
                  />
                  <Label htmlFor="inflationAdjusted">Inflation Adjusted</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="taxable"
                    checked={formData.taxable}
                    onChange={(e) => setFormData({...formData, taxable: e.target.checked})}
                    className="rounded"
                  />
                  <Label htmlFor="taxable">Taxable Income</Label>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this income source..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setIsAddingSource(false)
                setEditingSource(null)
                resetForm()
              }}>
                Cancel
              </Button>
              <Button onClick={editingSource ? saveEdit : addSource}>
                {editingSource ? 'Update' : 'Add'} Source
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Income Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Monthly Income</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalMonthlyIncome)}</div>
            <p className="text-xs text-muted-foreground">at retirement age {getRetirementAge()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalAnnualIncome)}</div>
            <p className="text-xs text-muted-foreground">total yearly income</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Guaranteed Income</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(guaranteedIncome)}</div>
            <p className="text-xs text-muted-foreground">per month guaranteed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income Replacement</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{incomeReplacementRatio.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">of current income</p>
          </CardContent>
        </Card>
      </div>

      {/* Income Projection Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Income Projection Timeline</CardTitle>
          <CardDescription>Your projected income at different ages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[getRetirementAge(), getRetirementAge() + 5, getRetirementAge() + 10, getRetirementAge() + 15].map(age => {
              const incomeAtAge = getIncomeAtAge(age)
              const annualAtAge = incomeAtAge * 12
              return (
                <div key={age} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Age {age}</div>
                      <div className="text-sm text-muted-foreground">
                        {incomeSources.filter(source => age >= source.startAge && (!source.endAge || age <= source.endAge)).length} active sources
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{formatCurrency(incomeAtAge)}/mo</div>
                    <div className="text-sm text-muted-foreground">{formatCurrency(annualAtAge)}/year</div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Income Sources Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Income Sources</CardTitle>
          <CardDescription>Manage your retirement income streams</CardDescription>
        </CardHeader>
        <CardContent>
          {incomeSources.length === 0 ? (
            <div className="text-center py-8">
              <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No income sources yet. Add your first income source to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>Your retirement income sources</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Monthly Amount</TableHead>
                    <TableHead>Start Age</TableHead>
                    <TableHead>End Age</TableHead>
                    <TableHead>Reliability</TableHead>
                    <TableHead>Tax Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incomeSources.map((source) => (
                    <TableRow key={source.id}>
                      <TableCell className="font-medium">{source.sourceName}</TableCell>
                      <TableCell>
                        <Badge variant={getBadgeVariant(source.sourceType)}>
                          {formatSourceType(source.sourceType)}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-bold">{formatCurrency(source.monthlyAmount)}</TableCell>
                      <TableCell>{source.startAge}</TableCell>
                      <TableCell>{source.endAge ? source.endAge : 'Lifetime'}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${getReliabilityColor(source.reliability)}`}>
                          {source.reliability.charAt(0).toUpperCase() + source.reliability.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant={source.taxable ? "destructive" : "secondary"}>
                          {source.taxable ? 'Taxable' : 'Tax-Free'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => startEditing(source)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteSource(source.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Income Analysis */}
      {incomeSources.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Income Reliability Analysis</CardTitle>
              <CardDescription>Breakdown by reliability level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium">Guaranteed</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{formatCurrency(guaranteedIncome)}</div>
                    <div className="text-xs text-muted-foreground">
                      {totalMonthlyIncome > 0 ? ((guaranteedIncome / totalMonthlyIncome) * 100).toFixed(1) : 0}%
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-sm font-medium">Likely</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{formatCurrency(likelyIncome)}</div>
                    <div className="text-xs text-muted-foreground">
                      {totalMonthlyIncome > 0 ? ((likelyIncome / totalMonthlyIncome) * 100).toFixed(1) : 0}%
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>Suggestions to improve your income plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {incomeReplacementRatio < 70 && (
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Target className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-yellow-800">Low Income Replacement</div>
                      <div className="text-sm text-yellow-700">
                        Consider increasing your income sources to reach 70-90% of current income.
                      </div>
                    </div>
                  </div>
                )}
                {(guaranteedIncome / totalMonthlyIncome) * 100 < 40 && totalMonthlyIncome > 0 && (
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <PiggyBank className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-blue-800">Low Guaranteed Income</div>
                      <div className="text-sm text-blue-700">
                        Consider adding more guaranteed income sources like annuities or delay Social Security.
                      </div>
                    </div>
                  </div>
                )}
                {incomeSources.length < 3 && (
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <Users className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-green-800">Diversify Income Sources</div>
                      <div className="text-sm text-green-700">
                        Consider adding more income streams to reduce risk and increase total income.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}