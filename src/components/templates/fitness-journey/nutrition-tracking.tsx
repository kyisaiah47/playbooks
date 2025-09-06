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
  Utensils,
  Zap,
  Target,
  TrendingUp
} from "lucide-react"
import { useFitnessJourney } from "@/contexts/fitness-journey-context"

interface NutritionEntry {
  id: string
  name: string
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack'
  calories: number
  protein: number // grams
  carbs: number // grams
  fat: number // grams
  fiber?: number // grams
  water?: number // oz
  date: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function NutritionTracking() {
  const { data, updateData } = useFitnessJourney()
  const [entries, setEntries] = useState<NutritionEntry[]>([])
  const [isAddingEntry, setIsAddingEntry] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  // Daily goals
  const dailyGoals = {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fat: 67,
    water: 64 // oz
  }

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    mealType: 'breakfast' as NutritionEntry['mealType'],
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    water: 0,
    notes: '',
  })

  // Load entries from localStorage
  useEffect(() => {
    const savedEntries = localStorage.getItem('fitness-journey-nutrition')
    if (savedEntries) {
      const parsed = JSON.parse(savedEntries)
      setEntries(parsed.map((e: any) => ({
        ...e,
        date: new Date(e.date),
        createdAt: new Date(e.createdAt),
        updatedAt: new Date(e.updatedAt)
      })))
    }
  }, [])

  // Save entries to localStorage
  const saveEntries = (newEntries: NutritionEntry[]) => {
    setEntries(newEntries)
    localStorage.setItem('fitness-journey-nutrition', JSON.stringify(newEntries))
  }

  // CRUD Operations
  const addEntry = () => {
    const newEntry: NutritionEntry = {
      id: Date.now().toString(),
      name: formData.name,
      mealType: formData.mealType,
      calories: formData.calories,
      protein: formData.protein,
      carbs: formData.carbs,
      fat: formData.fat,
      fiber: formData.fiber,
      water: formData.water,
      date: new Date(selectedDate),
      notes: formData.notes,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveEntries([...entries, newEntry])
    resetForm()
    setIsAddingEntry(false)
  }

  const updateEntry = (id: string, updates: Partial<NutritionEntry>) => {
    const updatedEntries = entries.map(entry => 
      entry.id === id 
        ? { ...entry, ...updates, updatedAt: new Date() }
        : entry
    )
    saveEntries(updatedEntries)
  }

  const deleteEntry = (id: string) => {
    const filteredEntries = entries.filter(entry => entry.id !== id)
    saveEntries(filteredEntries)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      mealType: 'breakfast',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      water: 0,
      notes: '',
    })
  }

  // Calculate daily totals for selected date
  const dailyEntries = entries.filter(entry => 
    entry.date.toDateString() === new Date(selectedDate).toDateString()
  )

  const dailyTotals = dailyEntries.reduce((totals, entry) => ({
    calories: totals.calories + entry.calories,
    protein: totals.protein + entry.protein,
    carbs: totals.carbs + entry.carbs,
    fat: totals.fat + entry.fat,
    fiber: totals.fiber + (entry.fiber || 0),
    water: totals.water + (entry.water || 0),
  }), {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    water: 0,
  })

  const getProgressPercentage = (current: number, goal: number) => {
    return Math.min(100, (current / goal) * 100)
  }

  const getMealTypeColor = (mealType: NutritionEntry['mealType']) => {
    switch (mealType) {
      case 'breakfast': return 'bg-orange-500'
      case 'lunch': return 'bg-green-500'
      case 'dinner': return 'bg-blue-500'
      case 'snack': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Nutrition Tracking</h1>
          <p className="text-muted-foreground">Track your meals and nutritional intake</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Label htmlFor="date-select">Date:</Label>
            <Input
              id="date-select"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-40"
            />
          </div>
          <Dialog open={isAddingEntry} onOpenChange={setIsAddingEntry}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Food
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add Nutrition Entry</DialogTitle>
                <DialogDescription>
                  Log your food intake and nutritional information.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Food Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g., Grilled Chicken Breast, Greek Yogurt"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="mealType">Meal Type</Label>
                  <Select value={formData.mealType} onValueChange={(value: NutritionEntry['mealType']) => setFormData({...formData, mealType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select meal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="lunch">Lunch</SelectItem>
                      <SelectItem value="dinner">Dinner</SelectItem>
                      <SelectItem value="snack">Snack</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="calories">Calories</Label>
                    <Input
                      id="calories"
                      type="number"
                      value={formData.calories}
                      onChange={(e) => setFormData({...formData, calories: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="protein">Protein (g)</Label>
                    <Input
                      id="protein"
                      type="number"
                      value={formData.protein}
                      onChange={(e) => setFormData({...formData, protein: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="carbs">Carbs (g)</Label>
                    <Input
                      id="carbs"
                      type="number"
                      value={formData.carbs}
                      onChange={(e) => setFormData({...formData, carbs: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="fat">Fat (g)</Label>
                    <Input
                      id="fat"
                      type="number"
                      value={formData.fat}
                      onChange={(e) => setFormData({...formData, fat: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="fiber">Fiber (g)</Label>
                    <Input
                      id="fiber"
                      type="number"
                      value={formData.fiber}
                      onChange={(e) => setFormData({...formData, fiber: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="water">Water (oz)</Label>
                    <Input
                      id="water"
                      type="number"
                      value={formData.water}
                      onChange={(e) => setFormData({...formData, water: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Additional notes about this meal..."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={addEntry}>
                  Add Entry
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Daily Nutrition Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dailyTotals.calories}</div>
            <Progress value={getProgressPercentage(dailyTotals.calories, dailyGoals.calories)} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              of {dailyGoals.calories} goal
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Protein</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dailyTotals.protein}g</div>
            <Progress value={getProgressPercentage(dailyTotals.protein, dailyGoals.protein)} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              of {dailyGoals.protein}g goal
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbs</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dailyTotals.carbs}g</div>
            <Progress value={getProgressPercentage(dailyTotals.carbs, dailyGoals.carbs)} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              of {dailyGoals.carbs}g goal
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fat</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dailyTotals.fat}g</div>
            <Progress value={getProgressPercentage(dailyTotals.fat, dailyGoals.fat)} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              of {dailyGoals.fat}g goal
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Food Entries */}
      <Card>
        <CardHeader>
          <CardTitle>Food Entries for {new Date(selectedDate).toLocaleDateString()}</CardTitle>
          <CardDescription>Your nutritional intake for the selected day</CardDescription>
        </CardHeader>
        <CardContent>
          {dailyEntries.length === 0 ? (
            <div className="text-center py-8">
              <Utensils className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No food entries for this date. Start logging your meals!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your daily nutrition log</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Food</TableHead>
                  <TableHead>Meal</TableHead>
                  <TableHead>Calories</TableHead>
                  <TableHead>Protein</TableHead>
                  <TableHead>Carbs</TableHead>
                  <TableHead>Fat</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dailyEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">{entry.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getMealTypeColor(entry.mealType)}`} />
                        <Badge variant="outline">{entry.mealType}</Badge>
                      </div>
                    </TableCell>
                    <TableCell>{entry.calories}</TableCell>
                    <TableCell>{entry.protein}g</TableCell>
                    <TableCell>{entry.carbs}g</TableCell>
                    <TableCell>{entry.fat}g</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteEntry(entry.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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