"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar,
  Target,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChefHat,
  ShoppingCart,
  Apple
} from "lucide-react"
import { useMealPlanning } from "@/contexts/meal-planning-context"

export function MealPlanningOverview() {
  const { data } = useMealPlanning()
  
  const [metrics, setMetrics] = useState({
    totalProgress: 0,
    mealsPlanned: 0,
    recipesCollected: 0,
    weeklyBudgetUsed: 0,
    nutritionGoalsMet: 0,
    upcomingMeals: 0
  })

  useEffect(() => {
    // Load data from localStorage to calculate metrics
    const plannedMeals = JSON.parse(localStorage.getItem('meal-planning-meals') || '[]')
    const recipes = JSON.parse(localStorage.getItem('meal-planning-recipes') || '[]')
    const budgetItems = JSON.parse(localStorage.getItem('meal-planning-budget') || '[]')
    const nutritionGoals = JSON.parse(localStorage.getItem('meal-planning-nutrition') || '[]')
    
    const completedMeals = plannedMeals.filter((meal: any) => meal.status === 'completed').length
    const currentWeekBudget = budgetItems.reduce((sum: number, item: any) => sum + (item.amount || 0), 0)
    const completedNutritionGoals = nutritionGoals.filter((goal: any) => goal.status === 'completed').length
    const upcomingMealsCount = plannedMeals.filter((meal: any) => 
      meal.status === 'planned' && new Date(meal.date) >= new Date()
    ).length
    
    const totalTasks = plannedMeals.length + recipes.length + nutritionGoals.length
    const completedTasks = completedMeals + completedNutritionGoals
    const overallProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

    setMetrics({
      totalProgress: Math.round(overallProgress),
      mealsPlanned: plannedMeals.length,
      recipesCollected: recipes.length,
      weeklyBudgetUsed: Math.round(currentWeekBudget),
      nutritionGoalsMet: completedNutritionGoals,
      upcomingMeals: upcomingMealsCount
    })
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Meal Planning Dashboard</h1>
          <p className="text-muted-foreground">Track your meal planning progress and nutrition goals</p>
        </div>
        <Button>
          <ChefHat className="h-4 w-4 mr-2" />
          Quick Add Meal
        </Button>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalProgress}%</div>
            <Progress value={metrics.totalProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meals Planned</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.mealsPlanned}</div>
            <p className="text-xs text-muted-foreground">this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recipes Collected</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.recipesCollected}</div>
            <p className="text-xs text-muted-foreground">in your collection</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${metrics.weeklyBudgetUsed}</div>
            <p className="text-xs text-muted-foreground">spent this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest meal planning updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Added new breakfast recipe</span>
                <Badge variant="secondary">Today</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">Completed grocery shopping</span>
                <Badge variant="secondary">Yesterday</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">Planned meals for this week</span>
                <Badge variant="secondary">2 days ago</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-sm">Updated nutrition goals</span>
                <Badge variant="secondary">3 days ago</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meals</CardTitle>
            <CardDescription>What's planned for the next few days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Grilled chicken dinner</span>
                <Badge variant="outline">Tonight</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Overnight oats breakfast</span>
                <Badge variant="outline">Tomorrow</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Pasta lunch prep</span>
                <Badge variant="outline">This Weekend</Badge>
              </div>
              {metrics.upcomingMeals === 0 && (
                <div className="text-center py-4">
                  <p className="text-sm text-muted-foreground">No upcoming meals planned</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for your meal planning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Plan Week</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-sm">Create List</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <ChefHat className="h-6 w-6" />
              <span className="text-sm">Add Recipe</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
              <Apple className="h-6 w-6" />
              <span className="text-sm">Track Nutrition</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}