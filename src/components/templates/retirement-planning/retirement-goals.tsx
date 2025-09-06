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
  Target,
  CheckCircle2,
  Clock,
  DollarSign,
  Flag,
  TrendingUp,
  Calendar
} from "lucide-react"
import { useRetirementPlanning } from "@/contexts/retirement-planning-context"

interface RetirementGoal {
  id: string
  title: string
  description: string
  goalType: 'savings' | 'income' | 'lifestyle' | 'health' | 'financial' | 'travel' | 'other'
  targetAmount?: number
  currentAmount?: number
  targetDate: Date
  priority: 'low' | 'medium' | 'high'
  status: 'not-started' | 'in-progress' | 'completed' | 'on-hold'
  milestones: string[]
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function RetirementGoals() {
  const { data, updateData } = useRetirementPlanning()
  const [goals, setGoals] = useState<RetirementGoal[]>([])
  const [isAddingGoal, setIsAddingGoal] = useState(false)
  const [editingGoal, setEditingGoal] = useState<RetirementGoal | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goalType: 'savings' as const,
    targetAmount: 0,
    currentAmount: 0,
    targetDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 year from now
    priority: 'medium' as const,
    status: 'not-started' as const,
    milestones: [''],
    notes: '',
  })

  useEffect(() => {
    const savedGoals = localStorage.getItem('retirement-planning-goals-items')
    if (savedGoals) {
      const parsedGoals = JSON.parse(savedGoals).map((goal: any) => ({
        ...goal,
        targetDate: new Date(goal.targetDate),
        createdAt: new Date(goal.createdAt),
        updatedAt: new Date(goal.updatedAt),
      }))
      setGoals(parsedGoals)
    }
  }, [])

  const saveGoals = (newGoals: RetirementGoal[]) => {
    setGoals(newGoals)
    localStorage.setItem('retirement-planning-goals-items', JSON.stringify(newGoals))
  }

  const addGoal = () => {
    const filteredMilestones = formData.milestones.filter(m => m.trim() !== '')
    const newGoal: RetirementGoal = {
      id: Date.now().toString(),
      ...formData,
      milestones: filteredMilestones,
      targetDate: new Date(formData.targetDate),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveGoals([...goals, newGoal])
    resetForm()
    setIsAddingGoal(false)
  }

  const updateGoal = (id: string, updates: Partial<RetirementGoal>) => {
    const updatedGoals = goals.map(goal => 
      goal.id === id 
        ? { ...goal, ...updates, updatedAt: new Date() }
        : goal
    )
    saveGoals(updatedGoals)
  }

  const deleteGoal = (id: string) => {
    const filteredGoals = goals.filter(goal => goal.id !== id)
    saveGoals(filteredGoals)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      goalType: 'savings',
      targetAmount: 0,
      currentAmount: 0,
      targetDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      priority: 'medium',
      status: 'not-started',
      milestones: [''],
      notes: '',
    })
  }

  const startEditing = (goal: RetirementGoal) => {
    setFormData({
      title: goal.title,
      description: goal.description,
      goalType: goal.goalType,
      targetAmount: goal.targetAmount || 0,
      currentAmount: goal.currentAmount || 0,
      targetDate: goal.targetDate.toISOString().split('T')[0],
      priority: goal.priority,
      status: goal.status,
      milestones: goal.milestones.length > 0 ? goal.milestones : [''],
      notes: goal.notes || '',
    })
    setEditingGoal(goal)
    setIsAddingGoal(true)
  }

  const saveEdit = () => {
    if (editingGoal) {
      const filteredMilestones = formData.milestones.filter(m => m.trim() !== '')
      updateGoal(editingGoal.id, {
        ...formData,
        milestones: filteredMilestones,
        targetDate: new Date(formData.targetDate),
      })
      setEditingGoal(null)
      resetForm()
      setIsAddingGoal(false)
    }
  }

  const addMilestone = () => {
    setFormData({
      ...formData,
      milestones: [...formData.milestones, '']
    })
  }

  const updateMilestone = (index: number, value: string) => {
    const newMilestones = [...formData.milestones]
    newMilestones[index] = value
    setFormData({
      ...formData,
      milestones: newMilestones
    })
  }

  const removeMilestone = (index: number) => {
    const newMilestones = formData.milestones.filter((_, i) => i !== index)
    setFormData({
      ...formData,
      milestones: newMilestones.length > 0 ? newMilestones : ['']
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

  const formatGoalType = (type: string) => {
    const typeMap: Record<string, string> = {
      'savings': 'Savings',
      'income': 'Income',
      'lifestyle': 'Lifestyle',
      'health': 'Health',
      'financial': 'Financial',
      'travel': 'Travel',
      'other': 'Other'
    }
    return typeMap[type] || type
  }

  const getStatusBadge = (status: string): "default" | "secondary" | "destructive" | "outline" => {
    const statusMap: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      'not-started': 'outline',
      'in-progress': 'secondary',
      'completed': 'default',
      'on-hold': 'destructive'
    }
    return statusMap[status] || 'outline'
  }

  const getPriorityColor = (priority: string) => {
    const colorMap: Record<string, string> = {
      'low': 'text-green-600',
      'medium': 'text-yellow-600',
      'high': 'text-red-600'
    }
    return colorMap[priority] || 'text-gray-600'
  }

  const getDaysRemaining = (targetDate: Date) => {
    const now = new Date()
    const diffTime = targetDate.getTime() - now.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const completedGoals = goals.filter(goal => goal.status === 'completed').length
  const inProgressGoals = goals.filter(goal => goal.status === 'in-progress').length
  const overallProgress = goals.length > 0 ? (completedGoals / goals.length) * 100 : 0
  const totalTargetAmount = goals.reduce((sum, goal) => sum + (goal.targetAmount || 0), 0)
  const totalCurrentAmount = goals.reduce((sum, goal) => sum + (goal.currentAmount || 0), 0)

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Retirement Goals</h1>
          <p className="text-muted-foreground">Set and track your retirement milestones</p>
        </div>
        <Dialog open={isAddingGoal} onOpenChange={setIsAddingGoal}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingGoal ? 'Edit' : 'Add New'} Retirement Goal</DialogTitle>
              <DialogDescription>
                {editingGoal ? 'Update your' : 'Create a new'} retirement goal to track your progress.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Goal Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Save $500K for retirement"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Detailed description of this goal..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="goalType">Goal Type</Label>
                  <Select value={formData.goalType} onValueChange={(value: any) => setFormData({...formData, goalType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select goal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings</SelectItem>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="financial">Financial</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={formData.priority} onValueChange={(value: any) => setFormData({...formData, priority: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="high">High Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="targetAmount">Target Amount ($)</Label>
                  <Input
                    id="targetAmount"
                    type="number"
                    value={formData.targetAmount}
                    onChange={(e) => setFormData({...formData, targetAmount: parseFloat(e.target.value) || 0})}
                    placeholder="500000"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="currentAmount">Current Amount ($)</Label>
                  <Input
                    id="currentAmount"
                    type="number"
                    value={formData.currentAmount}
                    onChange={(e) => setFormData({...formData, currentAmount: parseFloat(e.target.value) || 0})}
                    placeholder="50000"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="targetDate">Target Date</Label>
                  <Input
                    id="targetDate"
                    type="date"
                    value={formData.targetDate}
                    onChange={(e) => setFormData({...formData, targetDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value: any) => setFormData({...formData, status: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not-started">Not Started</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="on-hold">On Hold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label>Milestones</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addMilestone}>
                    <Plus className="h-4 w-4 mr-1" />
                    Add Milestone
                  </Button>
                </div>
                {formData.milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={milestone}
                      onChange={(e) => updateMilestone(index, e.target.value)}
                      placeholder="Milestone description..."
                    />
                    {formData.milestones.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeMilestone(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional notes about this goal..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {
                setIsAddingGoal(false)
                setEditingGoal(null)
                resetForm()
              }}>
                Cancel
              </Button>
              <Button onClick={editingGoal ? saveEdit : addGoal}>
                {editingGoal ? 'Update' : 'Add'} Goal
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Goals Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress.toFixed(1)}%</div>
            <Progress value={overallProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {completedGoals} of {goals.length} goals completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
            <Flag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressGoals}</div>
            <p className="text-xs text-muted-foreground">currently in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalTargetAmount)}</div>
            <p className="text-xs text-muted-foreground">total financial goals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalCurrentAmount)}</div>
            <p className="text-xs text-muted-foreground">achieved so far</p>
          </CardContent>
        </Card>
      </div>

      {/* Goals List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Retirement Goals</CardTitle>
          <CardDescription>Track progress on your retirement milestones</CardDescription>
        </CardHeader>
        <CardContent>
          {goals.length === 0 ? (
            <div className="text-center py-8">
              <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No goals set yet. Add your first retirement goal to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {goals.map((goal) => {
                const goalProgress = goal.targetAmount && goal.currentAmount ? 
                  Math.min(100, (goal.currentAmount / goal.targetAmount) * 100) : 0
                const daysRemaining = getDaysRemaining(goal.targetDate)
                
                return (
                  <Card key={goal.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{goal.title}</CardTitle>
                            <Badge variant={getStatusBadge(goal.status)}>
                              {goal.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </Badge>
                            <Badge variant="outline">
                              {formatGoalType(goal.goalType)}
                            </Badge>
                          </div>
                          <CardDescription>{goal.description}</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`text-sm font-medium ${getPriorityColor(goal.priority)}`}>
                            {goal.priority.charAt(0).toUpperCase() + goal.priority.slice(1)} Priority
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => startEditing(goal)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteGoal(goal.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {goal.targetAmount && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Financial Progress</span>
                              <span>{formatCurrency(goal.currentAmount || 0)} / {formatCurrency(goal.targetAmount)}</span>
                            </div>
                            <Progress value={goalProgress} className="h-2" />
                            <div className="text-right text-xs text-muted-foreground">
                              {goalProgress.toFixed(1)}% complete
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Target Date: {goal.targetDate.toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className={daysRemaining < 0 ? 'text-red-600' : daysRemaining < 30 ? 'text-yellow-600' : 'text-muted-foreground'}>
                              {daysRemaining < 0 ? `${Math.abs(daysRemaining)} days overdue` : `${daysRemaining} days remaining`}
                            </span>
                          </div>
                        </div>

                        {goal.milestones.length > 0 && (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Milestones:</div>
                            <div className="space-y-1">
                              {goal.milestones.map((milestone, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm">
                                  <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                                  <span>{milestone}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {goal.notes && (
                          <div className="text-sm text-muted-foreground">
                            <strong>Notes:</strong> {goal.notes}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}