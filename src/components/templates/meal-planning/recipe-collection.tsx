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
import { Badge } from "@/components/ui/badge"
import { 
  Plus,
  Edit,
  Trash2,
  ChefHat,
  Clock,
  Users,
  Star,
  Search,
  BookOpen,
  Heart
} from "lucide-react"
import { useMealPlanning } from "@/contexts/meal-planning-context"

interface Recipe {
  id: string
  name: string
  description: string
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert' | 'beverage'
  cuisine: string
  difficulty: 'easy' | 'medium' | 'hard'
  prepTime: number
  cookTime: number
  servings: number
  ingredients: string[]
  instructions: string[]
  tags: string[]
  rating: number
  notes?: string
  source?: string
  isFavorite: boolean
  createdAt: Date
  updatedAt: Date
}

export function RecipeCollection() {
  const { data, updateData } = useMealPlanning()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [isAddingRecipe, setIsAddingRecipe] = useState(false)
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'dinner' as 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'dessert' | 'beverage',
    cuisine: '',
    difficulty: 'medium' as 'easy' | 'medium' | 'hard',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    ingredients: [''],
    instructions: [''],
    tags: '',
    rating: 0,
    notes: '',
    source: '',
  })

  useEffect(() => {
    const savedRecipes = localStorage.getItem('meal-planning-recipes')
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes))
    }
  }, [])

  const saveRecipes = (newRecipes: Recipe[]) => {
    setRecipes(newRecipes)
    localStorage.setItem('meal-planning-recipes', JSON.stringify(newRecipes))
  }

  const addRecipe = () => {
    const newRecipe: Recipe = {
      id: Date.now().toString(),
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      ingredients: formData.ingredients.filter(ingredient => ingredient.trim()),
      instructions: formData.instructions.filter(instruction => instruction.trim()),
      isFavorite: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveRecipes([...recipes, newRecipe])
    resetForm()
    setIsAddingRecipe(false)
  }

  const updateRecipe = (id: string, updates: Partial<Recipe>) => {
    const updatedRecipes = recipes.map(recipe => 
      recipe.id === id 
        ? { ...recipe, ...updates, updatedAt: new Date() }
        : recipe
    )
    saveRecipes(updatedRecipes)
  }

  const deleteRecipe = (id: string) => {
    const filteredRecipes = recipes.filter(recipe => recipe.id !== id)
    saveRecipes(filteredRecipes)
  }

  const toggleFavorite = (id: string) => {
    updateRecipe(id, { isFavorite: !recipes.find(r => r.id === id)?.isFavorite })
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      category: 'dinner',
      cuisine: '',
      difficulty: 'medium',
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      ingredients: [''],
      instructions: [''],
      tags: '',
      rating: 0,
      notes: '',
      source: '',
    })
  }

  const addFormField = (field: 'ingredients' | 'instructions') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const updateFormField = (field: 'ingredients' | 'instructions', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

  const removeFormField = (field: 'ingredients' | 'instructions', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  // Filter recipes based on search and category
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === 'all' || recipe.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'breakfast': return 'bg-orange-100 text-orange-800'
      case 'lunch': return 'bg-blue-100 text-blue-800'
      case 'dinner': return 'bg-purple-100 text-purple-800'
      case 'snack': return 'bg-green-100 text-green-800'
      case 'dessert': return 'bg-pink-100 text-pink-800'
      case 'beverage': return 'bg-cyan-100 text-cyan-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Recipe Collection</h1>
          <p className="text-muted-foreground">Store and organize your favorite recipes</p>
        </div>
        <Dialog open={isAddingRecipe} onOpenChange={setIsAddingRecipe}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Recipe
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Recipe</DialogTitle>
              <DialogDescription>
                Save a new recipe to your collection.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Recipe Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Grandma's Chocolate Chip Cookies"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Brief description of the recipe..."
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value: any) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="lunch">Lunch</SelectItem>
                      <SelectItem value="dinner">Dinner</SelectItem>
                      <SelectItem value="snack">Snack</SelectItem>
                      <SelectItem value="dessert">Dessert</SelectItem>
                      <SelectItem value="beverage">Beverage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="cuisine">Cuisine</Label>
                  <Input
                    id="cuisine"
                    value={formData.cuisine}
                    onChange={(e) => setFormData({...formData, cuisine: e.target.value})}
                    placeholder="e.g., Italian, Mexican"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select value={formData.difficulty} onValueChange={(value: any) => setFormData({...formData, difficulty: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="prepTime">Prep Time (min)</Label>
                  <Input
                    id="prepTime"
                    type="number"
                    min="0"
                    value={formData.prepTime}
                    onChange={(e) => setFormData({...formData, prepTime: parseInt(e.target.value)})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="cookTime">Cook Time (min)</Label>
                  <Input
                    id="cookTime"
                    type="number"
                    min="0"
                    value={formData.cookTime}
                    onChange={(e) => setFormData({...formData, cookTime: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Ingredients</Label>
                {formData.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={ingredient}
                      onChange={(e) => updateFormField('ingredients', index, e.target.value)}
                      placeholder="e.g., 2 cups all-purpose flour"
                      className="flex-1"
                    />
                    {formData.ingredients.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeFormField('ingredients', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addFormField('ingredients')}
                  className="w-fit"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Ingredient
                </Button>
              </div>

              <div className="grid gap-2">
                <Label>Instructions</Label>
                {formData.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-2">
                    <Textarea
                      value={instruction}
                      onChange={(e) => updateFormField('instructions', index, e.target.value)}
                      placeholder={`Step ${index + 1}: Describe the cooking step...`}
                      className="flex-1"
                    />
                    {formData.instructions.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeFormField('instructions', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addFormField('instructions')}
                  className="w-fit"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Step
                </Button>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="e.g., vegetarian, quick, comfort food"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="source">Source (Optional)</Label>
                <Input
                  id="source"
                  value={formData.source}
                  onChange={(e) => setFormData({...formData, source: e.target.value})}
                  placeholder="e.g., Mom's recipe, Food Network"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addRecipe}>
                Save Recipe
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Recipes</p>
                <p className="text-2xl font-bold">{recipes.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Favorites</p>
                <p className="text-2xl font-bold">{recipes.filter(r => r.isFavorite).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Cook Time</p>
                <p className="text-2xl font-bold">
                  {recipes.length > 0 ? Math.round(recipes.reduce((sum, r) => sum + r.cookTime, 0) / recipes.length) : 0}min
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Categories</p>
                <p className="text-2xl font-bold">{new Set(recipes.map(r => r.category)).size}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="lunch">Lunch</SelectItem>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="snack">Snack</SelectItem>
                <SelectItem value="dessert">Dessert</SelectItem>
                <SelectItem value="beverage">Beverage</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Recipe Grid */}
      {filteredRecipes.length === 0 ? (
        <Card>
          <CardContent className="py-12">
            <div className="text-center">
              <ChefHat className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                {searchTerm || filterCategory !== 'all' 
                  ? 'No recipes match your search criteria.' 
                  : 'No recipes in your collection yet. Add your first recipe to get started!'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <Card key={recipe.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{recipe.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{recipe.description}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFavorite(recipe.id)}
                    className="shrink-0"
                  >
                    <Heart className={`h-4 w-4 ${recipe.isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    <Badge className={getCategoryColor(recipe.category)} variant="secondary">
                      {recipe.category}
                    </Badge>
                    <Badge className={getDifficultyColor(recipe.difficulty)} variant="secondary">
                      {recipe.difficulty}
                    </Badge>
                    {recipe.cuisine && (
                      <Badge variant="outline">{recipe.cuisine}</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{recipe.prepTime + recipe.cookTime}min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>

                  {recipe.tags.length > 0 && (
                    <div className="flex gap-1 flex-wrap">
                      {recipe.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {recipe.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{recipe.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="flex justify-end gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => deleteRecipe(recipe.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}