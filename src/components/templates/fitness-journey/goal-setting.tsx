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
  Trophy,
  Calendar,
  CheckCircle2,
  Clock
} from "lucide-react"
import { useFitnessJourney } from "@/contexts/fitness-journey-context"

interface FitnessGoal {
  id: string
  title: string
  type: 'weight' | 'strength' | 'endurance' | 'flexibility' | 'habit' | 'other'
  target: number
  currentValue: number
  unit: string
  startDate: Date
  targetDate: Date
  status: 'active' | 'completed' | 'paused' | 'missed'
  priority: 'low' | 'medium' | 'high'
  description?: string
  milestones?: { value: number; date: Date; achieved: boolean }[]
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function GoalSetting() {
  const { data, updateData } = useFitnessJourney()
  const [goals, setGoals] = useState<FitnessGoal[]>([])
  const [isAddingGoal, setIsAddingGoal] = useState(false)
  const [editingGoal, setEditingGoal] = useState<FitnessGoal | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    type: 'weight' as FitnessGoal['type'],
    target: 0,
    currentValue: 0,
    unit: 'lbs',
    startDate: new Date().toISOString().split('T')[0],
    targetDate: '',
    priority: 'medium' as FitnessGoal['priority'],
    description: '',
    notes: '',
  })

  // Load goals from localStorage
  useEffect(() => {
    const savedGoals = localStorage.getItem('fitness-journey-goals')
    if (savedGoals) {
      const parsed = JSON.parse(savedGoals)
      setGoals(parsed.map((g: any) => ({
        ...g,
        startDate: new Date(g.startDate),
        targetDate: new Date(g.targetDate),
        createdAt: new Date(g.createdAt),
        updatedAt: new Date(g.updatedAt),
        milestones: g.milestones?.map((m: any) => ({
          ...m,
          date: new Date(m.date)
        })) || []
      })))
    }
  }, [])

  // Save goals to localStorage
  const saveGoals = (newGoals: FitnessGoal[]) => {
    setGoals(newGoals)
    localStorage.setItem('fitness-journey-goals', JSON.stringify(newGoals))
  }

  // CRUD Operations
  const addGoal = () => {
    const newGoal: FitnessGoal = {
      id: Date.now().toString(),
      title: formData.title,
      type: formData.type,
      target: formData.target,
      currentValue: formData.currentValue,
      unit: formData.unit,
      startDate: new Date(formData.startDate),
      targetDate: new Date(formData.targetDate),
      status: 'active',
      priority: formData.priority,
      description: formData.description,
      notes: formData.notes,
      milestones: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveGoals([...goals, newGoal])
    resetForm()
    setIsAddingGoal(false)
  }

  const updateGoal = (id: string, updates: Partial<FitnessGoal>) => {
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
      type: 'weight',
      target: 0,
      currentValue: 0,
      unit: 'lbs',
      startDate: new Date().toISOString().split('T')[0],
      targetDate: '',
      priority: 'medium',
      description: '',
      notes: '',
    })
  }

  // Calculate progress
  const getProgressPercentage = (goal: FitnessGoal) => {
    if (goal.target === 0) return 0
    if (goal.type === 'weight' && goal.target < goal.currentValue) {
      // For weight loss goals
      const totalToLose = goal.currentValue - goal.target
      const lost = goal.currentValue - goal.currentValue // This would be updated when user logs progress
      return Math.min(100, (lost / totalToLose) * 100)
    }
    return Math.min(100, (goal.currentValue / goal.target) * 100)
  }

  const getDaysRemaining = (targetDate: Date) => {
    const today = new Date()
    const diffTime = targetDate.getTime() - today.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const getStatusColor = (status: FitnessGoal['status']) => {
    switch (status) {
      case 'completed': return 'default'
      case 'active': return 'secondary'
      case 'paused': return 'outline'
      case 'missed': return 'destructive'
      default: return 'outline'
    }
  }

  const getPriorityColor = (priority: FitnessGoal['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getUnitsByType = (type: FitnessGoal['type']) => {
    switch (type) {
      case 'weight': return ['lbs', 'kg']
      case 'strength': return ['lbs', 'kg', 'reps']
      case 'endurance': return ['miles', 'km', 'minutes', 'hours']
      case 'flexibility': return ['degrees', 'inches', 'cm']
      case 'habit': return ['days', 'times', 'sessions']
      default: return ['units']
    }
  }

  // Update unit when type changes
  useEffect(() => {
    const units = getUnitsByType(formData.type)
    if (!units.includes(formData.unit)) {
      setFormData(prev => ({ ...prev, unit: units[0] }))
    }
  }, [formData.type])

  // Calculate summary stats
  const activeGoals = goals.filter(g => g.status === 'active').length
  const completedGoals = goals.filter(g => g.status === 'completed').length
  const completionRate = goals.length > 0 ? (completedGoals / goals.length) * 100 : 0

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Goal Setting</h1>
          <p className="text-muted-foreground">Set and track your fitness targets and achievements</p>
        </div>
        <Dialog open={isAddingGoal} onOpenChange={setIsAddingGoal}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Fitness Goal</DialogTitle>
              <DialogDescription>
                Set a new goal to track your fitness progress.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Goal Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g., Lose 20 pounds, Run 5K in under 30 minutes"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="type">Goal Type</Label>
                <Select value={formData.type} onValueChange={(value: FitnessGoal['type']) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select goal type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight">Weight Management</SelectItem>
                    <SelectItem value="strength">Strength Training</SelectItem>
                    <SelectItem value="endurance">Endurance/Cardio</SelectItem>
                    <SelectItem value="flexibility">Flexibility</SelectItem>
                    <SelectItem value="habit">Habit Building</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="currentValue">Current Value</Label>
                  <Input
                    id="currentValue"
                    type="number"
                    value={formData.currentValue}
                    onChange={(e) => setFormData({...formData, currentValue: parseFloat(e.target.value) || 0})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="target">Target Value</Label>
                  <Input
                    id="target"
                    type="number"
                    value={formData.target}
                    onChange={(e) => setFormData({...formData, target: parseFloat(e.target.value) || 0})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="unit">Unit</Label>
                <Select value={formData.unit} onValueChange={(value) => setFormData({...formData, unit: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {getUnitsByType(formData.type).map((unit) => (
                      <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
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
                <Label htmlFor="priority">Priority</Label>
                <Select value={formData.priority} onValueChange={(value: FitnessGoal['priority']) => setFormData({...formData, priority: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe your goal in detail..."
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any additional notes or strategy..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addGoal}>
                Add Goal
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Goal Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeGoals}</div>
            <p className="text-xs text-muted-foreground">currently working on</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Goals</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedGoals}</div>
            <p className="text-xs text-muted-foreground">goals achieved</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completionRate.toFixed(1)}%</div>
            <Progress value={completionRate} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Goals List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Fitness Goals</CardTitle>
          <CardDescription>Track progress towards your fitness targets</CardDescription>
        </CardHeader>
        <CardContent>
          {goals.length === 0 ? (
            <div className="text-center py-8">
              <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No goals set yet. Add your first fitness goal to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {goals
                .sort((a, b) => {
                  // Sort by status first (active goals first), then by priority
                  if (a.status !== b.status) {
                    if (a.status === 'active') return -1
                    if (b.status === 'active') return 1
                    if (a.status === 'completed') return 1
                    if (b.status === 'completed') return -1
                  }
                  const priorityOrder = { high: 3, medium: 2, low: 1 }
                  return priorityOrder[b.priority] - priorityOrder[a.priority]
                })
                .map((goal) => {
                  const progress = getProgressPercentage(goal)
                  const daysRemaining = getDaysRemaining(goal.targetDate)
                  
                  return (
                    <Card key={goal.id} className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{goal.title}</h3>
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${getPriorityColor(goal.priority)}`} />
                              <Badge variant="outline">{goal.type}</Badge>
                              <Badge variant={getStatusColor(goal.status)}>{goal.status}</Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{goal.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{goal.currentValue} / {goal.target} {goal.unit}</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {daysRemaining > 0 ? `${daysRemaining} days left` : 'Overdue'}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateGoal(goal.id, { 
                              status: goal.status === 'completed' ? 'active' : 'completed' 
                            })}
                          >
                            {goal.status === 'completed' ? 'Reactivate' : 'Complete'}
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
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{progress.toFixed(1)}%</span>
                        </div>
                        <Progress value={progress} className="w-full" />
                      </div>
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