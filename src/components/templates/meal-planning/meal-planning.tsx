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
  Calendar,
  Clock,
  ChefHat,
  Users
} from "lucide-react"
import { useMealPlanning } from "@/contexts/meal-planning-context"

interface MealItem {
  id: string
  name: string
  status: 'planned' | 'in-progress' | 'completed'
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack'
  date: string
  servings: number
  prepTime: number
  recipe?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function MealPlanning() {
  const { data, updateData } = useMealPlanning()
  const [meals, setMeals] = useState<MealItem[]>([])
  const [isAddingMeal, setIsAddingMeal] = useState(false)
  const [editingMeal, setEditingMeal] = useState<MealItem | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    mealType: 'dinner' as 'breakfast' | 'lunch' | 'dinner' | 'snack',
    date: new Date().toISOString().split('T')[0],
    servings: 4,
    prepTime: 30,
    recipe: '',
    notes: '',
  })

  useEffect(() => {
    const savedMeals = localStorage.getItem('meal-planning-meals')
    if (savedMeals) {
      setMeals(JSON.parse(savedMeals))
    }
  }, [])

  const saveMeals = (newMeals: MealItem[]) => {
    setMeals(newMeals)
    localStorage.setItem('meal-planning-meals', JSON.stringify(newMeals))
  }

  const addMeal = () => {
    const newMeal: MealItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'planned',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveMeals([...meals, newMeal])
    resetForm()
    setIsAddingMeal(false)
  }

  const updateMeal = (id: string, updates: Partial<MealItem>) => {
    const updatedMeals = meals.map(meal => 
      meal.id === id 
        ? { ...meal, ...updates, updatedAt: new Date() }
        : meal
    )
    saveMeals(updatedMeals)
  }

  const deleteMeal = (id: string) => {
    const filteredMeals = meals.filter(meal => meal.id !== id)
    saveMeals(filteredMeals)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      mealType: 'dinner',
      date: new Date().toISOString().split('T')[0],
      servings: 4,
      prepTime: 30,
      recipe: '',
      notes: '',
    })
  }

  const completedCount = meals.filter(meal => meal.status === 'completed').length
  const progressPercentage = meals.length > 0 ? (completedCount / meals.length) * 100 : 0

  // Group meals by week for better organization
  const groupedMeals = meals.reduce((groups: { [key: string]: MealItem[] }, meal) => {
    const week = new Date(meal.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    })
    if (!groups[week]) {
      groups[week] = []
    }
    groups[week].push(meal)
    return groups
  }, {})

  const getMealTypeColor = (type: string) => {
    switch (type) {
      case 'breakfast': return 'bg-orange-100 text-orange-800'
      case 'lunch': return 'bg-blue-100 text-blue-800'
      case 'dinner': return 'bg-purple-100 text-purple-800'
      case 'snack': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Meal Planning</h1>
          <p className="text-muted-foreground">Plan and organize your meals for the week</p>
        </div>
        <Dialog open={isAddingMeal} onOpenChange={setIsAddingMeal}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Plan New Meal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Plan New Meal</DialogTitle>
              <DialogDescription>
                Add a new meal to your weekly plan.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Meal Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Grilled Chicken Salad"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="mealType">Meal Type</Label>
                <Select value={formData.mealType} onValueChange={(value: any) => setFormData({...formData, mealType: value})}>
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

              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="servings">Servings</Label>
                  <Input
                    id="servings"
                    type="number"
                    min="1"
                    value={formData.servings}
                    onChange={(e) => setFormData({...formData, servings: parseInt(e.target.value)})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="prepTime">Prep Time (min)</Label>
                  <Input
                    id="prepTime"
                    type="number"
                    min="5"
                    value={formData.prepTime}
                    onChange={(e) => setFormData({...formData, prepTime: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="recipe">Recipe/Instructions</Label>
                <Textarea
                  id="recipe"
                  value={formData.recipe}
                  onChange={(e) => setFormData({...formData, recipe: e.target.value})}
                  placeholder="Brief recipe or cooking instructions..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any additional notes..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addMeal}>
                Plan Meal
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
          <CardDescription>
            {completedCount} of {meals.length} planned meals completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {progressPercentage.toFixed(1)}% of planned meals completed
          </p>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Meals</p>
                <p className="text-2xl font-bold">{meals.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Servings</p>
                <p className="text-2xl font-bold">{meals.reduce((sum, meal) => sum + meal.servings, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Prep Time</p>
                <p className="text-2xl font-bold">
                  {meals.length > 0 ? Math.round(meals.reduce((sum, meal) => sum + meal.prepTime, 0) / meals.length) : 0}min
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Days Planned</p>
                <p className="text-2xl font-bold">{Object.keys(groupedMeals).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meals List */}
      <Card>
        <CardHeader>
          <CardTitle>Planned Meals</CardTitle>
          <CardDescription>Manage and track your meal plan</CardDescription>
        </CardHeader>
        <CardContent>
          {meals.length === 0 ? (
            <div className="text-center py-8">
              <ChefHat className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No meals planned yet. Add your first meal to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your planned meals for the upcoming period</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Meal Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Servings</TableHead>
                  <TableHead>Prep Time</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {meals
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                  .map((meal) => (
                  <TableRow key={meal.id}>
                    <TableCell className="font-medium">{meal.name}</TableCell>
                    <TableCell>
                      <Badge className={getMealTypeColor(meal.mealType)} variant="secondary">
                        {meal.mealType}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(meal.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge variant={
                        meal.status === 'completed' ? 'default' :
                        meal.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {meal.status.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>{meal.servings}</TableCell>
                    <TableCell>{meal.prepTime}min</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateMeal(meal.id, { 
                            status: meal.status === 'completed' ? 'planned' : 'completed' 
                          })}
                        >
                          {meal.status === 'completed' ? 'Reset' : 'Complete'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteMeal(meal.id)}
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