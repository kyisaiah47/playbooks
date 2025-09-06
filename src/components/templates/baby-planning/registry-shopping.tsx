"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  ShoppingBag,
  Plus,
  Check,
  X,
  Star,
  DollarSign,
  Package,
  Gift,
  Heart,
  ExternalLink,
  Trash2,
  Edit
} from "lucide-react"

interface RegistryItem {
  id: string
  name: string
  category: string
  priority: "essential" | "nice-to-have" | "luxury"
  price: number
  quantity: number
  acquired: number
  store: string
  url?: string
  notes: string
  received: boolean
}

interface ShoppingList {
  id: string
  name: string
  items: ShoppingListItem[]
  completed: boolean
}

interface ShoppingListItem {
  id: string
  name: string
  category: string
  price?: number
  purchased: boolean
  notes?: string
}

const registryItemSchema = z.object({
  name: z.string().min(1, "Item name is required"),
  category: z.string().min(1, "Category is required"),
  priority: z.enum(["essential", "nice-to-have", "luxury"]),
  price: z.number().min(0, "Price must be positive"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  store: z.string().min(1, "Store is required"),
  url: z.string().optional(),
  notes: z.string().optional(),
})

const shoppingListSchema = z.object({
  name: z.string().min(1, "List name is required"),
})

const shoppingItemSchema = z.object({
  name: z.string().min(1, "Item name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.number().optional(),
  notes: z.string().optional(),
})

export function RegistryShopping() {
  const [registryItems, setRegistryItems] = useState<RegistryItem[]>([
    {
      id: "1",
      name: "Convertible Crib",
      category: "Nursery Furniture",
      priority: "essential",
      price: 399,
      quantity: 1,
      acquired: 0,
      store: "Target",
      url: "https://target.com/crib",
      notes: "Converts to toddler bed",
      received: false
    },
    {
      id: "2", 
      name: "Car Seat - Infant",
      category: "Travel & Safety",
      priority: "essential",
      price: 249,
      quantity: 1,
      acquired: 1,
      store: "Amazon",
      notes: "Rear-facing only",
      received: true
    },
    {
      id: "3",
      name: "Baby Monitor",
      category: "Electronics",
      priority: "nice-to-have",
      price: 199,
      quantity: 1,
      acquired: 0,
      store: "Best Buy",
      notes: "Video and audio monitoring",
      received: false
    }
  ])

  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([
    {
      id: "1",
      name: "Hospital Bag Items",
      completed: false,
      items: [
        { id: "1", name: "Nursing Bras", category: "Clothing", price: 45, purchased: true },
        { id: "2", name: "Maternity Pads", category: "Personal Care", price: 12, purchased: false },
        { id: "3", name: "Going Home Outfit (Baby)", category: "Baby Clothes", price: 25, purchased: false },
        { id: "4", name: "Phone Charger", category: "Electronics", purchased: false }
      ]
    },
    {
      id: "2",
      name: "Nursery Setup",
      completed: false,
      items: [
        { id: "5", name: "Blackout Curtains", category: "Nursery Decor", price: 65, purchased: false },
        { id: "6", name: "Changing Pad", category: "Baby Care", price: 35, purchased: true },
        { id: "7", name: "Night Light", category: "Electronics", price: 15, purchased: false }
      ]
    }
  ])

  const [isAddingRegistryItem, setIsAddingRegistryItem] = useState(false)
  const [isAddingShoppingList, setIsAddingShoppingList] = useState(false)
  const [isAddingShoppingItem, setIsAddingShoppingItem] = useState(false)
  const [selectedListId, setSelectedListId] = useState("")

  const registryForm = useForm({
    resolver: zodResolver(registryItemSchema),
    defaultValues: {
      name: "",
      category: "",
      priority: "essential" as const,
      price: 0,
      quantity: 1,
      store: "",
      url: "",
      notes: "",
    },
  })

  const shoppingListForm = useForm({
    resolver: zodResolver(shoppingListSchema),
    defaultValues: {
      name: "",
    },
  })

  const shoppingItemForm = useForm({
    resolver: zodResolver(shoppingItemSchema),
    defaultValues: {
      name: "",
      category: "",
      price: undefined,
      notes: "",
    },
  })

  const categories = [
    "Nursery Furniture",
    "Baby Clothes",
    "Feeding & Nursing",
    "Diapering",
    "Bath & Skincare",
    "Travel & Safety",
    "Electronics", 
    "Toys & Books",
    "Nursery Decor",
    "Baby Care",
    "Maternity",
    "Personal Care"
  ]

  const stores = [
    "Target",
    "Amazon",
    "Buy Buy Baby",
    "Walmart",
    "Babies R Us",
    "Best Buy",
    "Pottery Barn Kids",
    "Other"
  ]

  const onSubmitRegistryItem = (data: z.infer<typeof registryItemSchema>) => {
    const newItem: RegistryItem = {
      id: Date.now().toString(),
      ...data,
      notes: data.notes || "",
      acquired: 0,
      received: false,
    }
    setRegistryItems([...registryItems, newItem])
    setIsAddingRegistryItem(false)
    registryForm.reset()
  }

  const onSubmitShoppingList = (data: z.infer<typeof shoppingListSchema>) => {
    const newList: ShoppingList = {
      id: Date.now().toString(),
      name: data.name,
      items: [],
      completed: false,
    }
    setShoppingLists([...shoppingLists, newList])
    setIsAddingShoppingList(false)
    shoppingListForm.reset()
  }

  const onSubmitShoppingItem = (data: z.infer<typeof shoppingItemSchema>) => {
    const newItem: ShoppingListItem = {
      id: Date.now().toString(),
      ...data,
      purchased: false,
    }
    setShoppingLists(shoppingLists.map(list => 
      list.id === selectedListId 
        ? { ...list, items: [...list.items, newItem] }
        : list
    ))
    setIsAddingShoppingItem(false)
    shoppingItemForm.reset()
    setSelectedListId("")
  }

  const toggleRegistryItemReceived = (id: string) => {
    setRegistryItems(registryItems.map(item =>
      item.id === id ? { ...item, received: !item.received, acquired: item.received ? 0 : item.quantity } : item
    ))
  }

  const updateAcquiredQuantity = (id: string, acquired: number) => {
    setRegistryItems(registryItems.map(item =>
      item.id === id ? { ...item, acquired: Math.max(0, Math.min(acquired, item.quantity)) } : item
    ))
  }

  const toggleShoppingItemPurchased = (listId: string, itemId: string) => {
    setShoppingLists(shoppingLists.map(list =>
      list.id === listId
        ? {
            ...list,
            items: list.items.map(item =>
              item.id === itemId ? { ...item, purchased: !item.purchased } : item
            )
          }
        : list
    ))
  }

  const deleteRegistryItem = (id: string) => {
    setRegistryItems(registryItems.filter(item => item.id !== id))
  }

  const deleteShoppingList = (id: string) => {
    setShoppingLists(shoppingLists.filter(list => list.id !== id))
  }

  const deleteShoppingItem = (listId: string, itemId: string) => {
    setShoppingLists(shoppingLists.map(list =>
      list.id === listId
        ? { ...list, items: list.items.filter(item => item.id !== itemId) }
        : list
    ))
  }

  // Calculate registry statistics
  const totalRegistryItems = registryItems.length
  const receivedItems = registryItems.filter(item => item.received).length
  const totalRegistryValue = registryItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const essentialItems = registryItems.filter(item => item.priority === "essential")
  const essentialReceived = essentialItems.filter(item => item.received).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Registry & Shopping</h1>
        <p className="text-muted-foreground">Manage your baby registry and shopping lists</p>
      </div>

      {/* Registry Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Items Received</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{receivedItems}</div>
            <p className="text-xs text-muted-foreground">
              of {totalRegistryItems} registry items
            </p>
            <Progress value={(receivedItems / Math.max(totalRegistryItems, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Registry Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRegistryValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              total registry value
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essentials</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{essentialReceived}</div>
            <p className="text-xs text-muted-foreground">
              of {essentialItems.length} essential items
            </p>
            <Progress value={(essentialReceived / Math.max(essentialItems.length, 1)) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Shopping Lists</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{shoppingLists.length}</div>
            <p className="text-xs text-muted-foreground">
              active shopping lists
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="registry" className="space-y-4">
        <TabsList>
          <TabsTrigger value="registry">Baby Registry</TabsTrigger>
          <TabsTrigger value="shopping">Shopping Lists</TabsTrigger>
        </TabsList>

        <TabsContent value="registry" className="space-y-4">
          {/* Registry Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Baby Registry</CardTitle>
                <CardDescription>Track items you need for baby</CardDescription>
              </div>
              <Dialog open={isAddingRegistryItem} onOpenChange={setIsAddingRegistryItem}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add Registry Item</DialogTitle>
                  </DialogHeader>
                  <Form {...registryForm}>
                    <form onSubmit={registryForm.handleSubmit(onSubmitRegistryItem)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={registryForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Item Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter item name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={registryForm.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                      {category}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <FormField
                          control={registryForm.control}
                          name="priority"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Priority</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select priority" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="essential">Essential</SelectItem>
                                  <SelectItem value="nice-to-have">Nice to Have</SelectItem>
                                  <SelectItem value="luxury">Luxury</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={registryForm.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  {...field}
                                  onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={registryForm.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Quantity</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min="1"
                                  placeholder="1"
                                  {...field}
                                  onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={registryForm.control}
                          name="store"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Store</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select store" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {stores.map((store) => (
                                    <SelectItem key={store} value={store}>
                                      {store}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={registryForm.control}
                          name="url"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>URL (optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="https://..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={registryForm.control}
                        name="notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Notes</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Additional details..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingRegistryItem(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Add to Registry</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {registryItems.map((item) => (
                  <div key={item.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold">{item.name}</h4>
                        <Badge 
                          variant={item.priority === "essential" ? "default" : 
                                  item.priority === "nice-to-have" ? "secondary" : "outline"}
                        >
                          {item.priority === "essential" && <Star className="h-3 w-3 mr-1" />}
                          {item.priority.replace("-", " ")}
                        </Badge>
                        {item.received && (
                          <Badge variant="default">
                            <Check className="h-3 w-3 mr-1" />
                            Received
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <span>{item.category}</span>
                        <span>${item.price.toFixed(2)}</span>
                        <span>{item.store}</span>
                        {item.url && (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            View <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm">Acquired:</span>
                        <Input
                          type="number"
                          min="0"
                          max={item.quantity}
                          value={item.acquired}
                          onChange={(e) => updateAcquiredQuantity(item.id, parseInt(e.target.value) || 0)}
                          className="w-16 h-8"
                        />
                        <span className="text-sm">of {item.quantity}</span>
                        <Progress value={(item.acquired / item.quantity) * 100} className="w-24" />
                      </div>
                      {item.notes && (
                        <p className="text-sm text-muted-foreground">{item.notes}</p>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleRegistryItemReceived(item.id)}
                      >
                        {item.received ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteRegistryItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shopping" className="space-y-4">
          {/* Shopping Lists Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Shopping Lists</CardTitle>
                <CardDescription>Organize your baby shopping by category</CardDescription>
              </div>
              <Dialog open={isAddingShoppingList} onOpenChange={setIsAddingShoppingList}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New List
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create Shopping List</DialogTitle>
                  </DialogHeader>
                  <Form {...shoppingListForm}>
                    <form onSubmit={shoppingListForm.handleSubmit(onSubmitShoppingList)} className="space-y-4">
                      <FormField
                        control={shoppingListForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>List Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Hospital Bag Items" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setIsAddingShoppingList(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Create List</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {shoppingLists.map((list) => {
                  const completedItems = list.items.filter(item => item.purchased).length
                  const totalItems = list.items.length
                  const completionPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

                  return (
                    <div key={list.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{list.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {completedItems} of {totalItems} items completed
                          </p>
                          <Progress value={completionPercentage} className="w-48 mt-2" />
                        </div>
                        <div className="flex space-x-2">
                          <Dialog open={isAddingShoppingItem && selectedListId === list.id} onOpenChange={(open) => {
                            setIsAddingShoppingItem(open)
                            if (open) setSelectedListId(list.id)
                            else setSelectedListId("")
                          }}>
                            <DialogTrigger asChild>
                              <Button size="sm" variant="outline">
                                <Plus className="h-4 w-4 mr-1" />
                                Add Item
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Add Item to {list.name}</DialogTitle>
                              </DialogHeader>
                              <Form {...shoppingItemForm}>
                                <form onSubmit={shoppingItemForm.handleSubmit(onSubmitShoppingItem)} className="space-y-4">
                                  <FormField
                                    control={shoppingItemForm.control}
                                    name="name"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Item Name</FormLabel>
                                        <FormControl>
                                          <Input placeholder="Enter item name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                      control={shoppingItemForm.control}
                                      name="category"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Category</FormLabel>
                                          <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                              <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                              </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                              {categories.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                  {category}
                                                </SelectItem>
                                              ))}
                                            </SelectContent>
                                          </Select>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={shoppingItemForm.control}
                                      name="price"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Price (optional)</FormLabel>
                                          <FormControl>
                                            <Input
                                              type="number"
                                              step="0.01"
                                              placeholder="0.00"
                                              {...field}
                                              onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  <FormField
                                    control={shoppingItemForm.control}
                                    name="notes"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Notes</FormLabel>
                                        <FormControl>
                                          <Textarea placeholder="Additional details..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <div className="flex justify-end space-x-2">
                                    <Button type="button" variant="outline" onClick={() => {
                                      setIsAddingShoppingItem(false)
                                      setSelectedListId("")
                                    }}>
                                      Cancel
                                    </Button>
                                    <Button type="submit">Add Item</Button>
                                  </div>
                                </form>
                              </Form>
                            </DialogContent>
                          </Dialog>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteShoppingList(list.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {list.items.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                checked={item.purchased}
                                onCheckedChange={() => toggleShoppingItemPurchased(list.id, item.id)}
                              />
                              <div>
                                <span className={`font-medium ${item.purchased ? "line-through text-muted-foreground" : ""}`}>
                                  {item.name}
                                </span>
                                <div className="text-sm text-muted-foreground">
                                  {item.category}
                                  {item.price && ` • $${item.price.toFixed(2)}`}
                                  {item.notes && ` • ${item.notes}`}
                                </div>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => deleteShoppingItem(list.id, item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        {list.items.length === 0 && (
                          <p className="text-muted-foreground text-center py-4">No items added yet</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}