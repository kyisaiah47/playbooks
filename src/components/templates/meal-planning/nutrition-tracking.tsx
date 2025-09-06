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
  Apple,
  Target,
  TrendingUp,
  Calendar,
  Scale
} from "lucide-react"
import { useMealPlanning } from "@/contexts/meal-planning-context"

interface NutritionGoal {
  id: string
  name: string
  type: 'calories' | 'protein' | 'carbs' | 'fat' | 'fiber' | 'sugar' | 'sodium' | 'custom'
  status: 'active' | 'paused' | 'completed'
  targetValue: number
  currentValue: number
  unit: string
  timeframe: 'daily' | 'weekly' | 'monthly'
  startDate: string
  endDate?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

interface NutritionEntry {
  id: string
  date: string
  goalId: string
  value: number
  notes?: string
  createdAt: Date
}

export function NutritionTracking() {
  const { data, updateData } = useMealPlanning()
  const [goals, setGoals] = useState<NutritionGoal[]>([])
  const [entries, setEntries] = useState<NutritionEntry[]>([])
  const [isAddingGoal, setIsAddingGoal] = useState(false)
  const [isAddingEntry, setIsAddingEntry] = useState(false)
  const [selectedGoal, setSelectedGoal] = useState<string>('')

  const [goalFormData, setGoalFormData] = useState({
    name: '',
    type: 'calories' as 'calories' | 'protein' | 'carbs' | 'fat' | 'fiber' | 'sugar' | 'sodium' | 'custom',
    targetValue: 2000,
    unit: 'kcal',
    timeframe: 'daily' as 'daily' | 'weekly' | 'monthly',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    notes: '',
  })

  const [entryFormData, setEntryFormData] = useState({
    goalId: '',
    value: 0,
    date: new Date().toISOString().split('T')[0],
    notes: '',
  })

  useEffect(() => {
    const savedGoals = localStorage.getItem('meal-planning-nutrition')
    const savedEntries = localStorage.getItem('meal-planning-nutrition-entries')
    
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals))
    }
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries))
    }
  }, [])

  const saveGoals = (newGoals: NutritionGoal[]) => {
    setGoals(newGoals)
    localStorage.setItem('meal-planning-nutrition', JSON.stringify(newGoals))
  }

  const saveEntries = (newEntries: NutritionEntry[]) => {
    setEntries(newEntries)
    localStorage.setItem('meal-planning-nutrition-entries', JSON.stringify(newEntries))
  }

  const addGoal = () => {
    const newGoal: NutritionGoal = {
      id: Date.now().toString(),
      ...goalFormData,
      status: 'active',
      currentValue: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveGoals([...goals, newGoal])
    resetGoalForm()
    setIsAddingGoal(false)
  }

  const addEntry = () => {
    const newEntry: NutritionEntry = {
      id: Date.now().toString(),
      ...entryFormData,
      createdAt: new Date(),
    }
    
    // Update the goal's current value
    const updatedGoals = goals.map(goal => {
      if (goal.id === entryFormData.goalId) {
        return { ...goal, currentValue: goal.currentValue + entryFormData.value, updatedAt: new Date() }
      }
      return goal
    })
    
    saveGoals(updatedGoals)
    saveEntries([...entries, newEntry])
    resetEntryForm()
    setIsAddingEntry(false)
  }

  const updateGoal = (id: string, updates: Partial<NutritionGoal>) => {
    const updatedGoals = goals.map(goal => 
      goal.id === id 
        ? { ...goal, ...updates, updatedAt: new Date() }
        : goal
    )
    saveGoals(updatedGoals)
  }

  const deleteGoal = (id: string) => {
    const filteredGoals = goals.filter(goal => goal.id !== id)
    const filteredEntries = entries.filter(entry => entry.goalId !== id)
    saveGoals(filteredGoals)
    saveEntries(filteredEntries)
  }

  const resetGoalForm = () => {
    setGoalFormData({
      name: '',
      type: 'calories',
      targetValue: 2000,
      unit: 'kcal',
      timeframe: 'daily',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      notes: '',
    })
  }

  const resetEntryForm = () => {
    setEntryFormData({
      goalId: '',
      value: 0,
      date: new Date().toISOString().split('T')[0],
      notes: '',
    })
  }

  // Update unit based on nutrition type
  const updateNutritionType = (type: string) => {
    const unitMap: { [key: string]: string } = {
      calories: 'kcal',
      protein: 'g',
      carbs: 'g',
      fat: 'g',
      fiber: 'g',
      sugar: 'g',
      sodium: 'mg',
      custom: 'units'
    }
    
    setGoalFormData(prev => ({
      ...prev,
      type: type as any,
      unit: unitMap[type] || 'units'
    }))
  }

  const getProgressPercentage = (goal: NutritionGoal) => {
    return goal.targetValue > 0 ? Math.min((goal.currentValue / goal.targetValue) * 100, 100) : 0
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'calories': return 'bg-orange-100 text-orange-800'
      case 'protein': return 'bg-red-100 text-red-800'
      case 'carbs': return 'bg-blue-100 text-blue-800'
      case 'fat': return 'bg-yellow-100 text-yellow-800'
      case 'fiber': return 'bg-green-100 text-green-800'
      case 'sugar': return 'bg-pink-100 text-pink-800'
      case 'sodium': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const activeGoals = goals.filter(goal => goal.status === 'active')
  const completedGoals = goals.filter(goal => goal.status === 'completed')

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Nutrition Tracking</h1>
          <p className="text-muted-foreground">Monitor your nutritional goals and daily intake</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isAddingEntry} onOpenChange={setIsAddingEntry}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Log Entry
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Log Nutrition Entry</DialogTitle>
                <DialogDescription>
                  Record your daily nutrition intake.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="goalId">Nutrition Goal</Label>
                  <Select value={entryFormData.goalId} onValueChange={(value) => setEntryFormData({...entryFormData, goalId: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a goal" />
                    </SelectTrigger>
                    <SelectContent>
                      {activeGoals.map(goal => (
                        <SelectItem key={goal.id} value={goal.id}>
                          {goal.name} ({goal.unit})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="value">Value</Label>
                  <Input
                    id="value"
                    type="number"
                    min="0"
                    step="0.1"
                    value={entryFormData.value}
                    onChange={(e) => setEntryFormData({...entryFormData, value: parseFloat(e.target.value)})}
                    placeholder="Amount consumed"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="entryDate">Date</Label>
                  <Input
                    id="entryDate"
                    type="date"
                    value={entryFormData.date}
                    onChange={(e) => setEntryFormData({...entryFormData, date: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="entryNotes">Notes (Optional)</Label>
                  <Textarea
                    id="entryNotes"
                    value={entryFormData.notes}
                    onChange={(e) => setEntryFormData({...entryFormData, notes: e.target.value})}
                    placeholder="What did you eat?"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={addEntry} disabled={!entryFormData.goalId}>
                  Log Entry
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isAddingGoal} onOpenChange={setIsAddingGoal}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Goal
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create Nutrition Goal</DialogTitle>
                <DialogDescription>
                  Set a new nutritional target to track.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Goal Name</Label>
                  <Input
                    id="name"
                    value={goalFormData.name}
                    onChange={(e) => setGoalFormData({...goalFormData, name: e.target.value})}
                    placeholder="e.g., Daily Protein Intake"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="type">Nutrition Type</Label>
                  <Select value={goalFormData.type} onValueChange={updateNutritionType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select nutrition type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="calories">Calories</SelectItem>
                      <SelectItem value="protein">Protein</SelectItem>
                      <SelectItem value="carbs">Carbohydrates</SelectItem>
                      <SelectItem value="fat">Fat</SelectItem>
                      <SelectItem value="fiber">Fiber</SelectItem>
                      <SelectItem value="sugar">Sugar</SelectItem>
                      <SelectItem value="sodium">Sodium</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="targetValue">Target Value</Label>
                    <Input
                      id="targetValue"
                      type="number"
                      min="0"
                      step="0.1"
                      value={goalFormData.targetValue}
                      onChange={(e) => setGoalFormData({...goalFormData, targetValue: parseFloat(e.target.value)})}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Input
                      id="unit"
                      value={goalFormData.unit}
                      onChange={(e) => setGoalFormData({...goalFormData, unit: e.target.value})}
                      placeholder="e.g., g, mg, kcal"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="timeframe">Timeframe</Label>
                  <Select value={goalFormData.timeframe} onValueChange={(value: any) => setGoalFormData({...goalFormData, timeframe: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={goalFormData.startDate}
                    onChange={(e) => setGoalFormData({...goalFormData, startDate: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="goalNotes">Notes (Optional)</Label>
                  <Textarea
                    id="goalNotes"
                    value={goalFormData.notes}
                    onChange={(e) => setGoalFormData({...goalFormData, notes: e.target.value})}
                    placeholder="Additional notes about this goal..."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={addGoal}>
                  Create Goal
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Active Goals</p>
                <p className="text-2xl font-bold">{activeGoals.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{completedGoals.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Entries Today</p>
                <p className="text-2xl font-bold">
                  {entries.filter(entry => entry.date === new Date().toISOString().split('T')[0]).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Progress</p>
                <p className="text-2xl font-bold">
                  {activeGoals.length > 0 
                    ? Math.round(activeGoals.reduce((sum, goal) => sum + getProgressPercentage(goal), 0) / activeGoals.length)
                    : 0
                  }%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Goals Progress */}
      {activeGoals.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Active Goals Progress</CardTitle>
            <CardDescription>Track your current nutritional targets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activeGoals.map((goal) => {
                const progress = getProgressPercentage(goal)
                return (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(goal.type)} variant="secondary">
                          {goal.type}
                        </Badge>
                        <span className="font-medium">{goal.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {goal.currentValue.toFixed(1)} / {goal.targetValue} {goal.unit}
                      </div>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{progress.toFixed(1)}% complete</span>
                      <span>{goal.timeframe} goal</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Goals Management Table */}
      <Card>
        <CardHeader>
          <CardTitle>Nutrition Goals</CardTitle>
          <CardDescription>Manage all your nutritional targets</CardDescription>
        </CardHeader>
        <CardContent>
          {goals.length === 0 ? (
            <div className="text-center py-8">
              <Apple className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No nutrition goals yet. Create your first goal to start tracking!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your nutrition tracking goals</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Goal Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Timeframe</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {goals.map((goal) => (
                  <TableRow key={goal.id}>
                    <TableCell className="font-medium">{goal.name}</TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(goal.type)} variant="secondary">
                        {goal.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{goal.currentValue.toFixed(1)} / {goal.targetValue} {goal.unit}</div>
                        <Progress value={getProgressPercentage(goal)} className="h-1 w-20" />
                      </div>
                    </TableCell>
                    <TableCell className="capitalize">{goal.timeframe}</TableCell>
                    <TableCell>
                      <Badge variant={
                        goal.status === 'completed' ? 'default' :
                        goal.status === 'active' ? 'secondary' :
                        'outline'
                      }>
                        {goal.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
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