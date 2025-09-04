"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Trash2, Package, Calendar, CheckCircle2, Clock, Baby, Heart } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface ChecklistItem {
  id: string
  name: string
  category: string
  packed: boolean
  essential: boolean
  notes?: string
  customAdded?: boolean
}

const defaultItems: ChecklistItem[] = [
  // For Mom - Labor & Delivery
  { id: "1", name: "Hospital paperwork & insurance cards", category: "mom-labor", packed: false, essential: true },
  { id: "2", name: "Birth plan copies", category: "mom-labor", packed: false, essential: true },
  { id: "3", name: "Comfortable labor gown or nightgown", category: "mom-labor", packed: false, essential: false },
  { id: "4", name: "Slippers with non-slip soles", category: "mom-labor", packed: false, essential: true },
  { id: "5", name: "Hair ties and headband", category: "mom-labor", packed: false, essential: false },
  { id: "6", name: "Lip balm", category: "mom-labor", packed: false, essential: false },
  { id: "7", name: "Phone charger", category: "mom-labor", packed: false, essential: true },
  { id: "8", name: "Snacks for after delivery", category: "mom-labor", packed: false, essential: false },

  // For Mom - Postpartum
  { id: "9", name: "Nursing bras (2-3)", category: "mom-postpartum", packed: false, essential: true },
  { id: "10", name: "Nursing pads", category: "mom-postpartum", packed: false, essential: true },
  { id: "11", name: "Maternity underwear (disposable)", category: "mom-postpartum", packed: false, essential: true },
  { id: "12", name: "Maternity pads", category: "mom-postpartum", packed: false, essential: true },
  { id: "13", name: "Going-home outfit (loose fitting)", category: "mom-postpartum", packed: false, essential: true },
  { id: "14", name: "Comfortable pajamas/nightgowns", category: "mom-postpartum", packed: false, essential: true },
  { id: "15", name: "Toiletries & personal care items", category: "mom-postpartum", packed: false, essential: true },
  { id: "16", name: "Breast pump parts (if needed)", category: "mom-postpartum", packed: false, essential: false },

  // For Baby
  { id: "17", name: "Going-home outfit (2 sizes)", category: "baby", packed: false, essential: true },
  { id: "18", name: "Onesies (newborn & 0-3 months)", category: "baby", packed: false, essential: true },
  { id: "19", name: "Sleepers (newborn & 0-3 months)", category: "baby", packed: false, essential: true },
  { id: "20", name: "Socks and mittens", category: "baby", packed: false, essential: true },
  { id: "21", name: "Blankets (2-3 receiving blankets)", category: "baby", packed: false, essential: true },
  { id: "22", name: "Hat", category: "baby", packed: false, essential: true },
  { id: "23", name: "Car seat (properly installed)", category: "baby", packed: false, essential: true },
  { id: "24", name: "Diapers (newborn size)", category: "baby", packed: false, essential: false },
  { id: "25", name: "Baby wipes", category: "baby", packed: false, essential: false },

  // For Partner
  { id: "26", name: "Comfortable clothes (2-3 days)", category: "partner", packed: false, essential: true },
  { id: "27", name: "Toiletries", category: "partner", packed: false, essential: true },
  { id: "28", name: "Snacks and drinks", category: "partner", packed: false, essential: true },
  { id: "29", name: "Phone charger", category: "partner", packed: false, essential: true },
  { id: "30", name: "Pillow from home", category: "partner", packed: false, essential: false },
  { id: "31", name: "Camera or video camera", category: "partner", packed: false, essential: false },
  { id: "32", name: "Birth announcements (if pre-made)", category: "partner", packed: false, essential: false },

  // Important Documents
  { id: "33", name: "ID and driver's license", category: "documents", packed: false, essential: true },
  { id: "34", name: "Insurance cards", category: "documents", packed: false, essential: true },
  { id: "35", name: "Hospital pre-registration forms", category: "documents", packed: false, essential: true },
  { id: "36", name: "Pediatrician contact information", category: "documents", packed: false, essential: true },
  { id: "37", name: "Emergency contacts list", category: "documents", packed: false, essential: true },

  // Comfort Items
  { id: "38", name: "Favorite pillow (with colored pillowcase)", category: "comfort", packed: false, essential: false },
  { id: "39", name: "Music playlist or speaker", category: "comfort", packed: false, essential: false },
  { id: "40", name: "Essential oils or aromatherapy", category: "comfort", packed: false, essential: false },
  { id: "41", name: "Massage tools", category: "comfort", packed: false, essential: false },
  { id: "42", name: "Extra blanket from home", category: "comfort", packed: false, essential: false }
]

const categories = {
  "mom-labor": "For Mom - Labor & Delivery",
  "mom-postpartum": "For Mom - Postpartum",
  "baby": "For Baby",
  "partner": "For Partner",
  "documents": "Important Documents",
  "comfort": "Comfort Items"
}

export function HospitalBag() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [items, setItems] = useState<ChecklistItem[]>(defaultItems)
  const [newItemName, setNewItemName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("mom-labor")
  const [showCompleted, setShowCompleted] = useState(true)

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, packed: !item.packed } : item
    ))
  }

  const addCustomItem = () => {
    if (!newItemName.trim()) return

    const newItem: ChecklistItem = {
      id: Date.now().toString(),
      name: newItemName.trim(),
      category: selectedCategory,
      packed: false,
      essential: false,
      customAdded: true
    }

    setItems([...items, newItem])
    setNewItemName("")
  }

  const removeCustomItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const getItemsByCategory = (category: string) => {
    return items.filter(item => item.category === category)
  }

  const getCategoryProgress = (category: string) => {
    const categoryItems = getItemsByCategory(category)
    const packedItems = categoryItems.filter(item => item.packed)
    return categoryItems.length > 0 ? (packedItems.length / categoryItems.length) * 100 : 0
  }

  const getOverallProgress = () => {
    const packedItems = items.filter(item => item.packed)
    return items.length > 0 ? (packedItems.length / items.length) * 100 : 0
  }

  const getEssentialProgress = () => {
    const essentialItems = items.filter(item => item.essential)
    const packedEssential = essentialItems.filter(item => item.packed)
    return essentialItems.length > 0 ? (packedEssential.length / essentialItems.length) * 100 : 0
  }

  const getPackingDeadline = () => {
    // Recommend packing by 36 weeks
    const targetWeek = 36
    const weeksUntilDeadline = targetWeek - displayData.currentWeek
    return { targetWeek, weeksUntilDeadline }
  }

  const overallProgress = getOverallProgress()
  const essentialProgress = getEssentialProgress()
  const { targetWeek, weeksUntilDeadline } = getPackingDeadline()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Hospital Bag Checklist</h2>
          <p className="text-muted-foreground">Prepare everything you'll need for labor and delivery</p>
        </div>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          Week {displayData.currentWeek}
        </Badge>
      </div>

      {weeksUntilDeadline > 0 ? (
        <Alert>
          <Calendar className="h-4 w-4" />
          <AlertDescription>
            Pack your hospital bag by week {targetWeek} ({weeksUntilDeadline} weeks to go). This ensures you're ready if baby arrives early!
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="border-orange-200 bg-orange-50">
          <Package className="h-4 w-4" />
          <AlertDescription>
            <strong>Pack your hospital bag now!</strong> You're at or past the recommended packing time. Baby could arrive any day.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(overallProgress)}%</div>
            <Progress value={overallProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {items.filter(item => item.packed).length} of {items.length} items packed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Essential Items</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(essentialProgress)}%</div>
            <Progress value={essentialProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {items.filter(item => item.essential && item.packed).length} of {items.filter(item => item.essential).length} essentials packed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Remaining</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {weeksUntilDeadline > 0 ? `${weeksUntilDeadline}w` : "Now!"}
            </div>
            <p className="text-xs text-muted-foreground">
              {weeksUntilDeadline > 0 ? `until week ${targetWeek}` : "Pack immediately"}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            {showCompleted ? "Hide" : "Show"} Packed Items
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Input
            placeholder="Add custom item..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
            className="w-48"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm"
          >
            {Object.entries(categories).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <Button onClick={addCustomItem} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>

      <Tabs defaultValue="by-category" className="w-full">
        <TabsList>
          <TabsTrigger value="by-category">By Category</TabsTrigger>
          <TabsTrigger value="essentials">Essentials Only</TabsTrigger>
        </TabsList>

        <TabsContent value="by-category" className="space-y-6">
          {Object.entries(categories).map(([categoryKey, categoryLabel]) => {
            const categoryItems = getItemsByCategory(categoryKey)
            const filteredItems = showCompleted ? categoryItems : categoryItems.filter(item => !item.packed)
            const progress = getCategoryProgress(categoryKey)
            const packedCount = categoryItems.filter(item => item.packed).length

            if (filteredItems.length === 0) return null

            return (
              <Card key={categoryKey}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {categoryKey === 'baby' && <Baby className="h-5 w-5" />}
                        {categoryKey === 'mom-labor' && <Heart className="h-5 w-5" />}
                        {categoryKey === 'mom-postpartum' && <Heart className="h-5 w-5" />}
                        {categoryKey === 'partner' && <Heart className="h-5 w-5" />}
                        {categoryKey === 'documents' && <Package className="h-5 w-5" />}
                        {categoryKey === 'comfort' && <Package className="h-5 w-5" />}
                        {categoryLabel}
                      </CardTitle>
                      <CardDescription>
                        {packedCount} of {categoryItems.length} items packed ({Math.round(progress)}%)
                      </CardDescription>
                    </div>
                    <Progress value={progress} className="w-24" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {filteredItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={item.packed}
                            onCheckedChange={() => toggleItem(item.id)}
                          />
                          <div className="flex items-center space-x-2">
                            <span className={item.packed ? "line-through text-muted-foreground" : ""}>
                              {item.name}
                            </span>
                            {item.essential && (
                              <Badge variant="destructive" className="text-xs">Essential</Badge>
                            )}
                            {item.customAdded && (
                              <Badge variant="outline" className="text-xs">Custom</Badge>
                            )}
                          </div>
                        </div>
                        
                        {item.customAdded && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeCustomItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="essentials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Essential Items Only
              </CardTitle>
              <CardDescription>
                Focus on the must-have items first - these are critical for your hospital stay
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {items
                  .filter(item => item.essential)
                  .filter(item => showCompleted || !item.packed)
                  .map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={item.packed}
                          onCheckedChange={() => toggleItem(item.id)}
                        />
                        <div className="flex items-center space-x-2">
                          <span className={item.packed ? "line-through text-muted-foreground" : ""}>
                            {item.name}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {categories[item.category as keyof typeof categories]}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              
              {items.filter(item => item.essential && item.packed).length === items.filter(item => item.essential).length && (
                <Alert className="mt-4 border-emerald-200 bg-emerald-50">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Congratulations!</strong> You've packed all the essential items. Your hospital bag is ready with everything you absolutely need.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {overallProgress === 100 && (
        <Alert className="border-emerald-200 bg-emerald-50">
          <Package className="h-4 w-4" />
          <AlertDescription>
            <strong>Hospital bag complete!</strong> You've packed everything on your checklist. Don't forget to place your bag in an easily accessible location and let your partner know where it is.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}