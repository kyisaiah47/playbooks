"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Target, Star, Calendar, Baby, Heart, Trophy, CheckCircle2 } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface Milestone {
  id: string
  title: string
  category: 'pregnancy' | 'preparation' | 'development' | 'medical' | 'personal' | 'postpartum'
  targetWeek?: number
  targetDate?: string
  completed: boolean
  completedDate?: string
  description: string
  notes?: string
  importance: 'low' | 'medium' | 'high' | 'critical'
  isDefault: boolean
}

const defaultMilestones: Omit<Milestone, 'id' | 'completed' | 'completedDate' | 'notes'>[] = [
  // Pregnancy Milestones
  {
    title: "Pregnancy Test Positive",
    category: "pregnancy",
    targetWeek: 4,
    description: "The moment we found out we were expecting",
    importance: "critical",
    isDefault: true
  },
  {
    title: "First Prenatal Appointment",
    category: "medical",
    targetWeek: 8,
    description: "Initial checkup with healthcare provider",
    importance: "critical",
    isDefault: true
  },
  {
    title: "First Trimester Complete",
    category: "pregnancy", 
    targetWeek: 12,
    description: "Safely through the first 12 weeks",
    importance: "high",
    isDefault: true
  },
  {
    title: "Gender Reveal",
    category: "pregnancy",
    targetWeek: 16,
    description: "Finding out if we're having a boy or girl",
    importance: "medium",
    isDefault: true
  },
  {
    title: "Anatomy Scan (20 weeks)",
    category: "medical",
    targetWeek: 20,
    description: "Detailed ultrasound to check baby's development",
    importance: "critical",
    isDefault: true
  },
  {
    title: "First Baby Kicks Felt",
    category: "development",
    targetWeek: 20,
    description: "Feeling baby's first movements",
    importance: "high",
    isDefault: true
  },
  {
    title: "Third Trimester Begins",
    category: "pregnancy",
    targetWeek: 28,
    description: "Entering the final stretch of pregnancy",
    importance: "medium",
    isDefault: true
  },
  
  // Preparation Milestones
  {
    title: "Start Taking Prenatal Vitamins",
    category: "preparation",
    targetWeek: 4,
    description: "Begin essential nutrition supplementation",
    importance: "critical",
    isDefault: true
  },
  {
    title: "Choose Healthcare Provider",
    category: "preparation",
    targetWeek: 6,
    description: "Select OB/GYN or midwife for pregnancy care",
    importance: "critical",
    isDefault: true
  },
  {
    title: "Announce to Family",
    category: "personal",
    targetWeek: 12,
    description: "Share the exciting news with close family",
    importance: "medium",
    isDefault: true
  },
  {
    title: "Start Shopping for Maternity Clothes",
    category: "preparation",
    targetWeek: 14,
    description: "Invest in comfortable clothing for growing bump",
    importance: "medium",
    isDefault: true
  },
  {
    title: "Begin Nursery Planning",
    category: "preparation",
    targetWeek: 18,
    description: "Start designing and organizing baby's room",
    importance: "high",
    isDefault: true
  },
  {
    title: "Baby Shower Planning",
    category: "preparation",
    targetWeek: 24,
    description: "Organize celebration with friends and family",
    importance: "medium",
    isDefault: true
  },
  {
    title: "Install Car Seat",
    category: "preparation", 
    targetWeek: 36,
    description: "Properly install infant car seat for hospital trip",
    importance: "critical",
    isDefault: true
  },
  {
    title: "Pack Hospital Bag",
    category: "preparation",
    targetWeek: 36,
    description: "Prepare bag with essentials for labor and delivery",
    importance: "critical",
    isDefault: true
  },
  {
    title: "Complete Birth Plan",
    category: "preparation",
    targetWeek: 32,
    description: "Document preferences for labor and delivery",
    importance: "high",
    isDefault: true
  },
  
  // Postpartum Milestones
  {
    title: "Baby's Birth",
    category: "postpartum",
    targetWeek: 40,
    description: "The moment our little one arrives",
    importance: "critical",
    isDefault: true
  },
  {
    title: "First Feeding",
    category: "postpartum",
    description: "Baby's first meal",
    importance: "high",
    isDefault: true
  },
  {
    title: "Going Home from Hospital",
    category: "postpartum",
    description: "Bringing baby home for the first time",
    importance: "high",
    isDefault: true
  }
]

export function MilestonesTracker() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [milestones, setMilestones] = useState<Milestone[]>(
    defaultMilestones.map((milestone, index) => ({
      ...milestone,
      id: (index + 1).toString(),
      completed: index < 3, // Mark first 3 as completed for demo
      completedDate: index < 3 ? "2024-01-10" : undefined,
      notes: index === 0 ? "So excited to start this journey!" : undefined
    }))
  )

  const [newMilestone, setNewMilestone] = useState({
    title: '',
    category: 'personal' as 'pregnancy' | 'preparation' | 'development' | 'medical' | 'personal' | 'postpartum',
    targetWeek: '',
    targetDate: '',
    description: '',
    importance: 'medium' as 'low' | 'medium' | 'high' | 'critical'
  })

  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [showCompletedOnly, setShowCompletedOnly] = useState(false)

  const addMilestone = () => {
    if (!newMilestone.title || !newMilestone.description) return

    const milestone: Milestone = {
      id: Date.now().toString(),
      title: newMilestone.title,
      category: newMilestone.category,
      targetWeek: newMilestone.targetWeek ? parseInt(newMilestone.targetWeek) : undefined,
      targetDate: newMilestone.targetDate || undefined,
      completed: false,
      description: newMilestone.description,
      importance: newMilestone.importance,
      isDefault: false
    }

    setMilestones([...milestones, milestone])
    setNewMilestone({
      title: '',
      category: 'personal',
      targetWeek: '',
      targetDate: '',
      description: '',
      importance: 'medium'
    })
  }

  const toggleMilestone = (id: string, notes?: string) => {
    setMilestones(milestones.map(milestone => 
      milestone.id === id 
        ? { 
            ...milestone, 
            completed: !milestone.completed,
            completedDate: !milestone.completed ? new Date().toISOString().split('T')[0] : undefined,
            notes: notes || milestone.notes
          }
        : milestone
    ))
  }

  const getFilteredMilestones = () => {
    let filtered = milestones
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(milestone => milestone.category === filterCategory)
    }
    
    if (showCompletedOnly) {
      filtered = filtered.filter(milestone => milestone.completed)
    }
    
    return filtered.sort((a, b) => {
      // Sort by target week, then by importance
      const weekA = a.targetWeek || 999
      const weekB = b.targetWeek || 999
      if (weekA !== weekB) return weekA - weekB
      
      const importanceOrder = { critical: 0, high: 1, medium: 2, low: 3 }
      return importanceOrder[a.importance] - importanceOrder[b.importance]
    })
  }

  const getCompletionStats = () => {
    const total = milestones.length
    const completed = milestones.filter(m => m.completed).length
    const overdue = milestones.filter(m => 
      !m.completed && 
      m.targetWeek && 
      m.targetWeek <= displayData.currentWeek
    ).length
    const upcoming = milestones.filter(m =>
      !m.completed &&
      m.targetWeek &&
      m.targetWeek > displayData.currentWeek &&
      m.targetWeek <= displayData.currentWeek + 4
    ).length

    return { total, completed, overdue, upcoming, percentage: (completed / total) * 100 }
  }

  const getMilestonesByCategory = () => {
    const categories: Record<string, Milestone[]> = {}
    milestones.forEach(milestone => {
      if (!categories[milestone.category]) {
        categories[milestone.category] = []
      }
      categories[milestone.category].push(milestone)
    })
    return categories
  }

  const getCriticalUpcoming = () => {
    return milestones
      .filter(m => 
        !m.completed && 
        m.importance === 'critical' && 
        m.targetWeek && 
        m.targetWeek <= displayData.currentWeek + 8
      )
      .sort((a, b) => (a.targetWeek || 999) - (b.targetWeek || 999))
      .slice(0, 3)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical': return 'destructive'
      case 'high': return 'default'
      case 'medium': return 'secondary'
      case 'low': return 'outline'
      default: return 'secondary'
    }
  }

  const filteredMilestones = getFilteredMilestones()
  const stats = getCompletionStats()
  const milestonesByCategory = getMilestonesByCategory()
  const criticalUpcoming = getCriticalUpcoming()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Milestone Tracker</h2>
          <p className="text-muted-foreground">Track important pregnancy and baby milestones</p>
        </div>
        <Button onClick={addMilestone}>
          <Plus className="mr-2 h-4 w-4" />
          Add Milestone
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}/{stats.total}</div>
            <Progress value={stats.percentage} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {Math.round(stats.percentage)}% complete
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.upcoming}</div>
            <p className="text-xs text-muted-foreground">
              in next 4 weeks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.overdue}</div>
            <p className="text-xs text-muted-foreground">
              need attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Week</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Week {displayData.currentWeek}</div>
            <p className="text-xs text-muted-foreground">
              {displayData.trimester} trimester
            </p>
          </CardContent>
        </Card>
      </div>

      {criticalUpcoming.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Critical Upcoming Milestones
            </CardTitle>
            <CardDescription>Important milestones that need attention soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {criticalUpcoming.map((milestone) => (
                <div key={milestone.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={milestone.completed}
                      onCheckedChange={() => toggleMilestone(milestone.id)}
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{milestone.title}</span>
                        {milestone.targetWeek && (
                          <Badge variant="outline">Week {milestone.targetWeek}</Badge>
                        )}
                        <Badge variant={getImportanceColor(milestone.importance)}>
                          {milestone.importance}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Add Custom Milestone</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="milestone-title">Title</Label>
              <Input
                id="milestone-title"
                value={newMilestone.title}
                onChange={(e) => setNewMilestone({...newMilestone, title: e.target.value})}
                placeholder="e.g., Choose Baby Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="milestone-category">Category</Label>
              <Select 
                value={newMilestone.category} 
                onValueChange={(value: 'pregnancy' | 'preparation' | 'development' | 'medical' | 'personal' | 'postpartum') => 
                  setNewMilestone({...newMilestone, category: value})
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pregnancy">Pregnancy</SelectItem>
                  <SelectItem value="preparation">Preparation</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="postpartum">Postpartum</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="milestone-week">Target Week (optional)</Label>
              <Input
                id="milestone-week"
                type="number"
                min="1"
                max="42"
                value={newMilestone.targetWeek}
                onChange={(e) => setNewMilestone({...newMilestone, targetWeek: e.target.value})}
                placeholder="20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="milestone-importance">Importance</Label>
              <Select 
                value={newMilestone.importance} 
                onValueChange={(value: 'low' | 'medium' | 'high' | 'critical') => 
                  setNewMilestone({...newMilestone, importance: value})
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="milestone-description">Description</Label>
              <Textarea
                id="milestone-description"
                value={newMilestone.description}
                onChange={(e) => setNewMilestone({...newMilestone, description: e.target.value})}
                placeholder="Describe this milestone..."
                rows={3}
              />
            </div>
          </div>

          <Button onClick={addMilestone} className="mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Add Milestone
          </Button>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Label htmlFor="category-filter">Filter:</Label>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="pregnancy">Pregnancy</SelectItem>
                <SelectItem value="preparation">Preparation</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="postpartum">Postpartum</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            variant={showCompletedOnly ? "default" : "outline"} 
            size="sm"
            onClick={() => setShowCompletedOnly(!showCompletedOnly)}
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Completed Only
          </Button>
        </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <div className="space-y-3">
            {filteredMilestones.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No milestones found</h3>
                  <p className="text-muted-foreground mb-4">
                    {filterCategory !== 'all' ? 'Try changing your filter or ' : ''}Add your first milestone to start tracking your journey.
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredMilestones.map((milestone) => (
                <Card key={milestone.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        checked={milestone.completed}
                        onCheckedChange={() => toggleMilestone(milestone.id)}
                        className="mt-1"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <h3 className={`font-semibold ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {milestone.title}
                            </h3>
                            {milestone.targetWeek && (
                              <Badge variant="outline">Week {milestone.targetWeek}</Badge>
                            )}
                            <Badge variant="secondary" className="capitalize">
                              {milestone.category}
                            </Badge>
                            <Badge variant={getImportanceColor(milestone.importance)}>
                              {milestone.importance}
                            </Badge>
                          </div>
                          
                          <div className="text-sm text-muted-foreground">
                            {milestone.completed && milestone.completedDate && (
                              <span>Completed {formatDate(milestone.completedDate)}</span>
                            )}
                          </div>
                        </div>
                        
                        <p className={`text-sm ${milestone.completed ? 'text-muted-foreground' : ''}`}>
                          {milestone.description}
                        </p>
                        
                        {milestone.notes && (
                          <div className="p-2 bg-muted rounded text-sm">
                            <strong>Notes:</strong> {milestone.notes}
                          </div>
                        )}
                        
                        {!milestone.completed && milestone.targetWeek && milestone.targetWeek <= displayData.currentWeek && (
                          <Badge variant="destructive" className="text-xs">
                            Overdue
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="category" className="space-y-4">
          <div className="space-y-6">
            {Object.entries(milestonesByCategory).map(([category, categoryMilestones]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="capitalize flex items-center justify-between">
                    {category} Milestones ({categoryMilestones.length})
                    <div className="text-sm font-normal text-muted-foreground">
                      {categoryMilestones.filter(m => m.completed).length} completed
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categoryMilestones.map((milestone) => (
                      <div key={milestone.id} className="flex items-center space-x-3 p-2 rounded">
                        <Checkbox
                          checked={milestone.completed}
                          onCheckedChange={() => toggleMilestone(milestone.id)}
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm ${milestone.completed ? 'line-through text-muted-foreground' : 'font-medium'}`}>
                              {milestone.title}
                            </span>
                            {milestone.targetWeek && (
                              <Badge variant="outline" className="text-xs">
                                Week {milestone.targetWeek}
                              </Badge>
                            )}
                            <Badge variant={getImportanceColor(milestone.importance)} className="text-xs">
                              {milestone.importance}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Milestone Timeline</CardTitle>
              <CardDescription>View milestones by pregnancy week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[...Array(42)].map((_, weekIndex) => {
                  const week = weekIndex + 1
                  const weekMilestones = milestones.filter(m => m.targetWeek === week)
                  
                  if (weekMilestones.length === 0) return null
                  
                  return (
                    <div key={week} className="relative">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className={`w-3 h-3 rounded-full ${week <= displayData.currentWeek ? 'bg-primary' : 'bg-muted'}`} />
                        <h3 className="font-semibold">Week {week}</h3>
                        {week === displayData.currentWeek && (
                          <Badge variant="default" className="text-xs">Current Week</Badge>
                        )}
                      </div>
                      
                      <div className="ml-6 space-y-2">
                        {weekMilestones.map((milestone) => (
                          <div key={milestone.id} className="flex items-center space-x-2">
                            <Checkbox
                              checked={milestone.completed}
                              onCheckedChange={() => toggleMilestone(milestone.id)}
                            />
                            <span className={`text-sm ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {milestone.title}
                            </span>
                            <Badge variant={getImportanceColor(milestone.importance)} className="text-xs">
                              {milestone.importance}
                            </Badge>
                          </div>
                        ))}
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