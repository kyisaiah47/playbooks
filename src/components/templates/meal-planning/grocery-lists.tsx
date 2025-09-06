"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
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
  ShoppingCart,
  Check,
  DollarSign,
  Package
} from "lucide-react"
import { useMealPlanning } from "@/contexts/meal-planning-context"

interface GroceryItem {
  id: string
  name: string
  status: 'needed' | 'in-cart' | 'purchased'
  category: 'produce' | 'meat' | 'dairy' | 'pantry' | 'frozen' | 'other'
  quantity: string
  estimatedPrice: number
  actualPrice?: number
  store?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function GroceryLists() {
  const { data, updateData } = useMealPlanning()
  const [items, setItems] = useState<GroceryItem[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)
  const [editingItem, setEditingItem] = useState<GroceryItem | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    category: 'produce' as 'produce' | 'meat' | 'dairy' | 'pantry' | 'frozen' | 'other',
    quantity: '',
    estimatedPrice: 0,
    actualPrice: 0,
    store: '',
    notes: '',
  })

  useEffect(() => {
    const savedItems = localStorage.getItem('meal-planning-grocery')
    if (savedItems) {
      setItems(JSON.parse(savedItems))
    }
  }, [])

  const saveItems = (newItems: GroceryItem[]) => {
    setItems(newItems)
    localStorage.setItem('meal-planning-grocery', JSON.stringify(newItems))
  }

  const addItem = () => {
    const newItem: GroceryItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'needed',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveItems([...items, newItem])
    resetForm()
    setIsAddingItem(false)
  }

  const updateItem = (id: string, updates: Partial<GroceryItem>) => {
    const updatedItems = items.map(item => 
      item.id === id 
        ? { ...item, ...updates, updatedAt: new Date() }
        : item
    )
    saveItems(updatedItems)
  }

  const deleteItem = (id: string) => {
    const filteredItems = items.filter(item => item.id !== id)
    saveItems(filteredItems)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'produce',
      quantity: '',
      estimatedPrice: 0,
      actualPrice: 0,
      store: '',
      notes: '',
    })
  }

  const purchasedCount = items.filter(item => item.status === 'purchased').length
  const progressPercentage = items.length > 0 ? (purchasedCount / items.length) * 100 : 0

  const totalEstimated = items.reduce((sum, item) => sum + item.estimatedPrice, 0)
  const totalActual = items.reduce((sum, item) => sum + (item.actualPrice || 0), 0)

  // Group items by category
  const groupedItems = items.reduce((groups: { [key: string]: GroceryItem[] }, item) => {
    if (!groups[item.category]) {
      groups[item.category] = []
    }
    groups[item.category].push(item)
    return groups
  }, {})

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'produce': return 'bg-green-100 text-green-800'
      case 'meat': return 'bg-red-100 text-red-800'
      case 'dairy': return 'bg-blue-100 text-blue-800'
      case 'pantry': return 'bg-yellow-100 text-yellow-800'
      case 'frozen': return 'bg-cyan-100 text-cyan-800'
      case 'other': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const generateFromMeals = () => {
    const meals = JSON.parse(localStorage.getItem('meal-planning-meals') || '[]')
    const commonIngredients = [
      { name: 'Chicken Breast', category: 'meat', quantity: '2 lbs', price: 12 },
      { name: 'Rice', category: 'pantry', quantity: '2 lbs', price: 3 },
      { name: 'Broccoli', category: 'produce', quantity: '1 bunch', price: 4 },
      { name: 'Eggs', category: 'dairy', quantity: '1 dozen', price: 4 },
      { name: 'Milk', category: 'dairy', quantity: '1 gallon', price: 4 },
      { name: 'Bread', category: 'pantry', quantity: '1 loaf', price: 3 },
    ]

    const newItems = commonIngredients.map(ingredient => ({
      id: Date.now().toString() + Math.random(),
      name: ingredient.name,
      category: ingredient.category as any,
      quantity: ingredient.quantity,
      estimatedPrice: ingredient.price,
      status: 'needed' as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    }))

    saveItems([...items, ...newItems])
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Grocery Lists</h1>
          <p className="text-muted-foreground">Manage your shopping lists and track expenses</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={generateFromMeals}>
            Generate from Meals
          </Button>
          <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add Grocery Item</DialogTitle>
                <DialogDescription>
                  Add a new item to your grocery list.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Item Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g., Organic Bananas"
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value: any) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="produce">Produce</SelectItem>
                      <SelectItem value="meat">Meat & Seafood</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                      <SelectItem value="pantry">Pantry</SelectItem>
                      <SelectItem value="frozen">Frozen</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      placeholder="e.g., 2 lbs"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="estimatedPrice">Est. Price ($)</Label>
                    <Input
                      id="estimatedPrice"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.estimatedPrice}
                      onChange={(e) => setFormData({...formData, estimatedPrice: parseFloat(e.target.value)})}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="store">Store (Optional)</Label>
                  <Input
                    id="store"
                    value={formData.store}
                    onChange={(e) => setFormData({...formData, store: e.target.value})}
                    placeholder="e.g., Whole Foods"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Brand preferences, location in store..."
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={addItem}>
                  Add to List
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Shopping Progress</CardTitle>
          <CardDescription>
            {purchasedCount} of {items.length} items purchased
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progressPercentage} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {progressPercentage.toFixed(1)}% of grocery list completed
          </p>
        </CardContent>
      </Card>

      {/* Budget Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Items</p>
                <p className="text-2xl font-bold">{items.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Purchased</p>
                <p className="text-2xl font-bold">{purchasedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">Estimated</p>
                <p className="text-2xl font-bold">${totalEstimated.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Actual</p>
                <p className="text-2xl font-bold">${totalActual.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Shopping List */}
      <Card>
        <CardHeader>
          <CardTitle>Shopping List</CardTitle>
          <CardDescription>Track your grocery items and expenses</CardDescription>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No items in your grocery list yet. Add some items to get started!</p>
              <Button variant="outline" className="mt-4" onClick={generateFromMeals}>
                Generate from Planned Meals
              </Button>
            </div>
          ) : (
            <Table>
              <TableCaption>Your grocery shopping list</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Done</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Est. Price</TableHead>
                  <TableHead>Actual Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow 
                    key={item.id}
                    className={item.status === 'purchased' ? 'opacity-60' : ''}
                  >
                    <TableCell>
                      <Checkbox
                        checked={item.status === 'purchased'}
                        onCheckedChange={(checked) => 
                          updateItem(item.id, { status: checked ? 'purchased' : 'needed' })
                        }
                      />
                    </TableCell>
                    <TableCell className={item.status === 'purchased' ? 'line-through' : 'font-medium'}>
                      {item.name}
                    </TableCell>
                    <TableCell>
                      <Badge className={getCategoryColor(item.category)} variant="secondary">
                        {item.category}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.estimatedPrice.toFixed(2)}</TableCell>
                    <TableCell>
                      {item.status === 'purchased' && item.actualPrice ? (
                        <span className="font-medium">${item.actualPrice.toFixed(2)}</span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const actualPrice = prompt('Enter actual price:', item.estimatedPrice.toString())
                            if (actualPrice) {
                              updateItem(item.id, { 
                                actualPrice: parseFloat(actualPrice),
                                status: 'purchased'
                              })
                            }
                          }}
                          disabled={item.status === 'purchased'}
                        >
                          Set Price
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteItem(item.id)}
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