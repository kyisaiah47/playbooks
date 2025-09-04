"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useJobSearch, getJobSearchDisplayData } from "@/contexts/job-search-context"
import {
  TrendingUp,
  DollarSign,
  Plus,
  Building,
  MapPin,
  Target,
  Calculator,
  PieChart,
  BarChart3,
  Edit,
  Trash2,
  TrendingDown
} from "lucide-react"

interface SalaryData {
  id: string
  company: string
  position: string
  location: string
  baseSalary: number
  bonus?: number
  equity?: number
  benefits: string[]
  totalCompensation: number
  source: string
  date: string
  verified: boolean
  notes: string
}

interface Negotiation {
  id: string
  company: string
  position: string
  initialOffer: number
  finalOffer?: number
  negotiationPoints: string[]
  outcome: 'pending' | 'accepted' | 'declined' | 'countered'
  date: string
  notes: string
}

export function SalaryTracker() {
  const { jobSearchData } = useJobSearch()
  const displayData = getJobSearchDisplayData(jobSearchData)

  const [salaryData, setSalaryData] = useState<SalaryData[]>([
    {
      id: "1",
      company: "TechCorp",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      baseSalary: 145000,
      bonus: 15000,
      equity: 25000,
      benefits: ["Health Insurance", "401k Match", "PTO", "Remote Work"],
      totalCompensation: 185000,
      source: "Glassdoor",
      date: "2024-08-15",
      verified: false,
      notes: "Market rate for SF area"
    },
    {
      id: "2",
      company: "StartupX",
      position: "Full Stack Engineer",
      location: "Remote",
      baseSalary: 120000,
      bonus: 5000,
      equity: 15000,
      benefits: ["Health Insurance", "Equity", "Flexible PTO"],
      totalCompensation: 140000,
      source: "Direct Offer",
      date: "2024-08-20",
      verified: true,
      notes: "Actual offer received"
    }
  ])

  const [negotiations, setNegotiations] = useState<Negotiation[]>([
    {
      id: "1",
      company: "StartupX",
      position: "Full Stack Engineer",
      initialOffer: 115000,
      finalOffer: 120000,
      negotiationPoints: ["Base salary increase", "Additional PTO"],
      outcome: "accepted",
      date: "2024-08-20",
      notes: "Successfully negotiated 5k increase and extra vacation days"
    }
  ])

  const [showSalaryDialog, setShowSalaryDialog] = useState(false)
  const [showNegotiationDialog, setShowNegotiationDialog] = useState(false)
  const [editingSalary, setEditingSalary] = useState<SalaryData | null>(null)

  const [salaryForm, setSalaryForm] = useState({
    company: "",
    position: "",
    location: "",
    baseSalary: "",
    bonus: "",
    equity: "",
    benefits: "",
    source: "",
    notes: "",
    verified: false
  })

  const [negotiationForm, setNegotiationForm] = useState({
    company: "",
    position: "",
    initialOffer: "",
    finalOffer: "",
    negotiationPoints: "",
    outcome: "pending" as Negotiation['outcome'],
    notes: ""
  })

  const averageSalary = salaryData.length > 0 
    ? salaryData.reduce((sum, data) => sum + data.totalCompensation, 0) / salaryData.length
    : 0

  const userTargetMin = jobSearchData.salaryMin
  const userTargetMax = jobSearchData.salaryMax
  const targetRange = userTargetMax - userTargetMin

  const handleAddSalary = () => {
    if (!salaryForm.company || !salaryForm.position || !salaryForm.baseSalary) return

    const baseSalary = parseFloat(salaryForm.baseSalary)
    const bonus = parseFloat(salaryForm.bonus) || 0
    const equity = parseFloat(salaryForm.equity) || 0
    const totalCompensation = baseSalary + bonus + equity

    const newSalary: SalaryData = {
      id: Date.now().toString(),
      company: salaryForm.company,
      position: salaryForm.position,
      location: salaryForm.location,
      baseSalary,
      bonus: bonus || undefined,
      equity: equity || undefined,
      benefits: salaryForm.benefits.split(',').map(b => b.trim()).filter(Boolean),
      totalCompensation,
      source: salaryForm.source,
      date: new Date().toISOString().split('T')[0],
      verified: salaryForm.verified,
      notes: salaryForm.notes
    }

    if (editingSalary) {
      setSalaryData(prev => prev.map(s => 
        s.id === editingSalary.id ? { ...newSalary, id: editingSalary.id } : s
      ))
    } else {
      setSalaryData(prev => [...prev, newSalary])
    }

    resetSalaryForm()
    setShowSalaryDialog(false)
    setEditingSalary(null)
  }

  const handleAddNegotiation = () => {
    if (!negotiationForm.company || !negotiationForm.position || !negotiationForm.initialOffer) return

    const newNegotiation: Negotiation = {
      id: Date.now().toString(),
      company: negotiationForm.company,
      position: negotiationForm.position,
      initialOffer: parseFloat(negotiationForm.initialOffer),
      finalOffer: negotiationForm.finalOffer ? parseFloat(negotiationForm.finalOffer) : undefined,
      negotiationPoints: negotiationForm.negotiationPoints.split(',').map(p => p.trim()).filter(Boolean),
      outcome: negotiationForm.outcome,
      date: new Date().toISOString().split('T')[0],
      notes: negotiationForm.notes
    }

    setNegotiations(prev => [...prev, newNegotiation])
    resetNegotiationForm()
    setShowNegotiationDialog(false)
  }

  const resetSalaryForm = () => {
    setSalaryForm({
      company: "",
      position: "",
      location: "",
      baseSalary: "",
      bonus: "",
      equity: "",
      benefits: "",
      source: "",
      notes: "",
      verified: false
    })
  }

  const resetNegotiationForm = () => {
    setNegotiationForm({
      company: "",
      position: "",
      initialOffer: "",
      finalOffer: "",
      negotiationPoints: "",
      outcome: "pending",
      notes: ""
    })
  }

  const handleEditSalary = (salary: SalaryData) => {
    setSalaryForm({
      company: salary.company,
      position: salary.position,
      location: salary.location,
      baseSalary: salary.baseSalary.toString(),
      bonus: salary.bonus?.toString() || "",
      equity: salary.equity?.toString() || "",
      benefits: salary.benefits.join(', '),
      source: salary.source,
      notes: salary.notes,
      verified: salary.verified
    })
    setEditingSalary(salary)
    setShowSalaryDialog(true)
  }

  const handleDeleteSalary = (id: string) => {
    if (confirm("Are you sure you want to delete this salary data?")) {
      setSalaryData(prev => prev.filter(s => s.id !== id))
    }
  }

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case 'accepted': return 'bg-green-100 text-green-800 border-green-200'
      case 'declined': return 'bg-red-100 text-red-800 border-red-200'
      case 'countered': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <TrendingUp className="mr-2 h-8 w-8" />
            Salary Tracker
          </h1>
          <p className="text-muted-foreground">
            Research salaries and track compensation offers
          </p>
        </div>
      </div>

      <Tabs defaultValue="research" className="space-y-4">
        <TabsList>
          <TabsTrigger value="research">Salary Research</TabsTrigger>
          <TabsTrigger value="negotiations">Negotiations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="research" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Salary Research Data</h2>
            <Dialog open={showSalaryDialog} onOpenChange={setShowSalaryDialog}>
              <DialogTrigger asChild>
                <Button onClick={() => setEditingSalary(null)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Salary Data
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingSalary ? "Edit Salary Data" : "Add Salary Data"}
                  </DialogTitle>
                  <DialogDescription>
                    {editingSalary 
                      ? "Update salary information and compensation details"
                      : "Add salary information from job postings, offers, or research"
                    }
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company*</Label>
                      <Input
                        id="company"
                        value={salaryForm.company}
                        onChange={(e) => setSalaryForm(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position*</Label>
                      <Input
                        id="position"
                        value={salaryForm.position}
                        onChange={(e) => setSalaryForm(prev => ({ ...prev, position: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={salaryForm.location}
                      onChange={(e) => setSalaryForm(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g. San Francisco, CA or Remote"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="baseSalary">Base Salary*</Label>
                      <Input
                        id="baseSalary"
                        type="number"
                        value={salaryForm.baseSalary}
                        onChange={(e) => setSalaryForm(prev => ({ ...prev, baseSalary: e.target.value }))}
                        placeholder="120000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bonus">Annual Bonus</Label>
                      <Input
                        id="bonus"
                        type="number"
                        value={salaryForm.bonus}
                        onChange={(e) => setSalaryForm(prev => ({ ...prev, bonus: e.target.value }))}
                        placeholder="15000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="equity">Equity Value</Label>
                      <Input
                        id="equity"
                        type="number"
                        value={salaryForm.equity}
                        onChange={(e) => setSalaryForm(prev => ({ ...prev, equity: e.target.value }))}
                        placeholder="25000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="benefits">Benefits (comma separated)</Label>
                    <Input
                      id="benefits"
                      value={salaryForm.benefits}
                      onChange={(e) => setSalaryForm(prev => ({ ...prev, benefits: e.target.value }))}
                      placeholder="Health Insurance, 401k Match, PTO, Remote Work"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="source">Source</Label>
                    <Select value={salaryForm.source} onValueChange={(value) => setSalaryForm(prev => ({ ...prev, source: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Direct Offer">Direct Offer</SelectItem>
                        <SelectItem value="Glassdoor">Glassdoor</SelectItem>
                        <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                        <SelectItem value="Levels.fyi">Levels.fyi</SelectItem>
                        <SelectItem value="PayScale">PayScale</SelectItem>
                        <SelectItem value="Indeed">Indeed</SelectItem>
                        <SelectItem value="Networking">Networking</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      id="verified"
                      type="checkbox"
                      checked={salaryForm.verified}
                      onChange={(e) => setSalaryForm(prev => ({ ...prev, verified: e.target.checked }))}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="verified">Verified information (from actual offer/employee)</Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={salaryForm.notes}
                      onChange={(e) => setSalaryForm(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Additional details about this compensation package..."
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleAddSalary} disabled={!salaryForm.company || !salaryForm.position || !salaryForm.baseSalary}>
                    {editingSalary ? "Update Data" : "Add Data"}
                  </Button>
                  <Button variant="outline" onClick={() => {
                    setShowSalaryDialog(false)
                    setEditingSalary(null)
                    resetSalaryForm()
                  }}>
                    Cancel
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Your Target Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{displayData.salaryRange}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Market Average</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${averageSalary > 0 ? Math.round(averageSalary).toLocaleString() : 'N/A'}
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on {salaryData.length} data point{salaryData.length !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Verified Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {salaryData.filter(s => s.verified).length}
                </div>
                <p className="text-xs text-muted-foreground">
                  of {salaryData.length} entries
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Target Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {averageSalary >= userTargetMin && averageSalary <= userTargetMax ? '✓' : '!'}
                </div>
                <p className="text-xs text-muted-foreground">
                  {averageSalary >= userTargetMin && averageSalary <= userTargetMax 
                    ? 'Within range' 
                    : averageSalary < userTargetMin 
                    ? 'Below target' 
                    : 'Above target'
                  }
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Salary Data Table */}
          <Card>
            <CardHeader>
              <CardTitle>Salary Data ({salaryData.length})</CardTitle>
              <CardDescription>
                Compensation information from various sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company / Position</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Base Salary</TableHead>
                    <TableHead>Total Comp</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salaryData.map((salary) => (
                    <TableRow key={salary.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium flex items-center">
                            <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                            {salary.company}
                            {salary.verified && (
                              <Badge variant="secondary" className="ml-2 text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{salary.position}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                          {salary.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="mr-1 h-3 w-3 text-muted-foreground" />
                          ${salary.baseSalary.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">
                          ${salary.totalCompensation.toLocaleString()}
                        </div>
                        {salary.bonus && (
                          <div className="text-xs text-muted-foreground">
                            +${salary.bonus.toLocaleString()} bonus
                          </div>
                        )}
                        {salary.equity && (
                          <div className="text-xs text-muted-foreground">
                            +${salary.equity.toLocaleString()} equity
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{salary.source}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditSalary(salary)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteSalary(salary.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {salaryData.length === 0 && (
                <div className="text-center py-8">
                  <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">No salary data yet</h3>
                  <p className="text-muted-foreground">
                    Start researching salaries by adding data from job postings and offers
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="negotiations" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Salary Negotiations</h2>
            <Dialog open={showNegotiationDialog} onOpenChange={setShowNegotiationDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Track Negotiation
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Track Salary Negotiation</DialogTitle>
                  <DialogDescription>
                    Record details about your salary negotiation process
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="negCompany">Company*</Label>
                      <Input
                        id="negCompany"
                        value={negotiationForm.company}
                        onChange={(e) => setNegotiationForm(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="negPosition">Position*</Label>
                      <Input
                        id="negPosition"
                        value={negotiationForm.position}
                        onChange={(e) => setNegotiationForm(prev => ({ ...prev, position: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="initialOffer">Initial Offer*</Label>
                      <Input
                        id="initialOffer"
                        type="number"
                        value={negotiationForm.initialOffer}
                        onChange={(e) => setNegotiationForm(prev => ({ ...prev, initialOffer: e.target.value }))}
                        placeholder="120000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="finalOffer">Final Offer</Label>
                      <Input
                        id="finalOffer"
                        type="number"
                        value={negotiationForm.finalOffer}
                        onChange={(e) => setNegotiationForm(prev => ({ ...prev, finalOffer: e.target.value }))}
                        placeholder="125000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="outcome">Outcome</Label>
                    <Select value={negotiationForm.outcome} onValueChange={(value) => setNegotiationForm(prev => ({ ...prev, outcome: value as Negotiation['outcome'] }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="accepted">Accepted</SelectItem>
                        <SelectItem value="declined">Declined</SelectItem>
                        <SelectItem value="countered">Countered</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="negotiationPoints">Negotiation Points (comma separated)</Label>
                    <Input
                      id="negotiationPoints"
                      value={negotiationForm.negotiationPoints}
                      onChange={(e) => setNegotiationForm(prev => ({ ...prev, negotiationPoints: e.target.value }))}
                      placeholder="Base salary increase, Additional PTO, Signing bonus"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="negNotes">Notes</Label>
                    <Textarea
                      id="negNotes"
                      value={negotiationForm.notes}
                      onChange={(e) => setNegotiationForm(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Details about the negotiation process..."
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleAddNegotiation} disabled={!negotiationForm.company || !negotiationForm.position || !negotiationForm.initialOffer}>
                    Track Negotiation
                  </Button>
                  <Button variant="outline" onClick={() => {
                    setShowNegotiationDialog(false)
                    resetNegotiationForm()
                  }}>
                    Cancel
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {negotiations.map((negotiation) => (
              <Card key={negotiation.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{negotiation.company}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{negotiation.position}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <DollarSign className="mr-1 h-3 w-3 text-muted-foreground" />
                          <span>Initial: ${negotiation.initialOffer.toLocaleString()}</span>
                        </div>
                        {negotiation.finalOffer && (
                          <div className="flex items-center">
                            <TrendingUp className="mr-1 h-3 w-3 text-green-600" />
                            <span className="text-green-600">Final: ${negotiation.finalOffer.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                      
                      {negotiation.negotiationPoints.length > 0 && (
                        <div className="space-y-1">
                          <span className="text-sm font-medium">Negotiation Points:</span>
                          <div className="flex flex-wrap gap-1">
                            {negotiation.negotiationPoints.map((point, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {point}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {negotiation.notes && (
                        <p className="text-sm text-muted-foreground">{negotiation.notes}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={getOutcomeColor(negotiation.outcome)}>
                        {negotiation.outcome.charAt(0).toUpperCase() + negotiation.outcome.slice(1)}
                      </Badge>
                      {negotiation.finalOffer && negotiation.initialOffer && (
                        <div className="text-sm text-green-600 font-medium">
                          +${(negotiation.finalOffer - negotiation.initialOffer).toLocaleString()} increase
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {negotiations.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calculator className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">No negotiations tracked</h3>
                  <p className="text-muted-foreground text-center">
                    Start tracking your salary negotiations to improve your outcomes
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Salary Analytics</h2>
            <p className="text-muted-foreground">
              Insights and trends from your salary research
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="mr-2 h-5 w-5" />
                  Target Range Analysis
                </CardTitle>
                <CardDescription>
                  How market data compares to your target
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Below Target ({userTargetMin.toLocaleString()})</span>
                    <span>{salaryData.filter(s => s.totalCompensation < userTargetMin).length}</span>
                  </div>
                  <Progress 
                    value={(salaryData.filter(s => s.totalCompensation < userTargetMin).length / salaryData.length) * 100} 
                    className="h-2" 
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Within Target Range</span>
                    <span>{salaryData.filter(s => s.totalCompensation >= userTargetMin && s.totalCompensation <= userTargetMax).length}</span>
                  </div>
                  <Progress 
                    value={(salaryData.filter(s => s.totalCompensation >= userTargetMin && s.totalCompensation <= userTargetMax).length / salaryData.length) * 100} 
                    className="h-2" 
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Above Target ({userTargetMax.toLocaleString()})</span>
                    <span>{salaryData.filter(s => s.totalCompensation > userTargetMax).length}</span>
                  </div>
                  <Progress 
                    value={(salaryData.filter(s => s.totalCompensation > userTargetMax).length / salaryData.length) * 100} 
                    className="h-2" 
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Compensation Breakdown
                </CardTitle>
                <CardDescription>
                  Average compensation components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {salaryData.length > 0 ? (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Base Salary</span>
                      <span className="font-medium">
                        ${Math.round(salaryData.reduce((sum, s) => sum + s.baseSalary, 0) / salaryData.length).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Bonus</span>
                      <span className="font-medium">
                        ${Math.round(salaryData.reduce((sum, s) => sum + (s.bonus || 0), 0) / salaryData.length).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Equity Value</span>
                      <span className="font-medium">
                        ${Math.round(salaryData.reduce((sum, s) => sum + (s.equity || 0), 0) / salaryData.length).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Compensation Range</span>
                      <span className="font-medium">
                        ${Math.min(...salaryData.map(s => s.totalCompensation)).toLocaleString()} - 
                        ${Math.max(...salaryData.map(s => s.totalCompensation)).toLocaleString()}
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Add salary data to see compensation analysis
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}