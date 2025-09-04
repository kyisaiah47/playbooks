"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Camera, Calendar, Heart, Baby, Star, Upload, Download, Share2 } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface PhotoEntry {
  id: string
  date: string
  week: number
  title: string
  category: 'belly' | 'ultrasound' | 'nursery' | 'baby-gear' | 'family' | 'milestone' | 'other'
  description?: string
  imageUrl?: string
  favorite: boolean
  tags: string[]
}

interface MilestoneTemplate {
  week: number
  title: string
  description: string
  category: 'belly' | 'milestone'
}

const milestoneTemplates: MilestoneTemplate[] = [
  { week: 4, title: "Pregnancy Confirmed!", description: "The journey begins", category: 'milestone' },
  { week: 8, title: "First Prenatal Appointment", description: "Meeting our healthcare team", category: 'milestone' },
  { week: 12, title: "End of First Trimester", description: "12-week belly shot", category: 'belly' },
  { week: 16, title: "Gender Reveal Time", description: "Finding out if it's a boy or girl", category: 'milestone' },
  { week: 20, title: "Anatomy Scan Day", description: "First detailed look at baby", category: 'milestone' },
  { week: 24, title: "Viability Milestone", description: "24-week bump progress", category: 'belly' },
  { week: 28, title: "Third Trimester", description: "Entering the home stretch", category: 'belly' },
  { week: 32, title: "Baby Shower Planning", description: "Celebrating with loved ones", category: 'milestone' },
  { week: 36, title: "Full Term Approaching", description: "36-week baby bump", category: 'belly' },
  { week: 40, title: "Due Date Arrival", description: "Ready to meet our baby", category: 'milestone' }
]

export function PhotoTimeline() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [photos, setPhotos] = useState<PhotoEntry[]>([
    {
      id: "1",
      date: "2024-01-15",
      week: 12,
      title: "12 Week Bump",
      category: "belly",
      description: "First trimester complete! Starting to show a little bump.",
      favorite: true,
      tags: ["first-trimester", "bump", "milestone"]
    },
    {
      id: "2",
      date: "2024-01-10",
      week: 11,
      title: "Nursery Planning",
      category: "nursery",
      description: "Picking out colors and themes for the nursery",
      favorite: false,
      tags: ["nursery", "planning", "decor"]
    },
    {
      id: "3",
      date: "2024-01-08",
      week: 11,
      title: "First Ultrasound Photo",
      category: "ultrasound",
      description: "Our first glimpse of baby!",
      favorite: true,
      tags: ["ultrasound", "first-photo", "medical"]
    }
  ])

  const [newPhoto, setNewPhoto] = useState({
    title: '',
    category: 'belly' as 'belly' | 'ultrasound' | 'nursery' | 'baby-gear' | 'family' | 'milestone' | 'other',
    description: '',
    tags: ''
  })

  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const addPhoto = () => {
    if (!newPhoto.title) return

    const photo: PhotoEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      week: displayData.currentWeek,
      title: newPhoto.title,
      category: newPhoto.category,
      description: newPhoto.description || undefined,
      favorite: false,
      tags: newPhoto.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    }

    setPhotos([photo, ...photos])
    setNewPhoto({
      title: '',
      category: 'belly',
      description: '',
      tags: ''
    })
  }

  const toggleFavorite = (id: string) => {
    setPhotos(photos.map(photo => 
      photo.id === id 
        ? { ...photo, favorite: !photo.favorite }
        : photo
    ))
  }

  const getFilteredPhotos = () => {
    let filtered = photos
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(photo => photo.category === filterCategory)
    }
    
    if (showFavoritesOnly) {
      filtered = filtered.filter(photo => photo.favorite)
    }
    
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  const getPhotosByTrimester = () => {
    const trimesters = {
      first: photos.filter(p => p.week <= 12),
      second: photos.filter(p => p.week > 12 && p.week <= 27),
      third: photos.filter(p => p.week > 27)
    }
    return trimesters
  }

  const getMilestoneProgress = () => {
    const completedMilestones = milestoneTemplates.filter(template => 
      photos.some(photo => photo.week >= template.week)
    )
    return (completedMilestones.length / milestoneTemplates.length) * 100
  }

  const getUpcomingMilestones = () => {
    return milestoneTemplates
      .filter(template => template.week > displayData.currentWeek)
      .slice(0, 3)
  }

  const getCategoryStats = () => {
    const stats: Record<string, number> = {}
    photos.forEach(photo => {
      stats[photo.category] = (stats[photo.category] || 0) + 1
    })
    return stats
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const filteredPhotos = getFilteredPhotos()
  const photosByTrimester = getPhotosByTrimester()
  const milestoneProgress = getMilestoneProgress()
  const upcomingMilestones = getUpcomingMilestones()
  const categoryStats = getCategoryStats()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Baby Photo Timeline</h2>
          <p className="text-muted-foreground">Capture and organize your pregnancy journey</p>
        </div>
        <Button onClick={addPhoto}>
          <Plus className="mr-2 h-4 w-4" />
          Add Photo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Photos</CardTitle>
            <Camera className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{photos.length}</div>
            <p className="text-xs text-muted-foreground">
              memories captured
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Favorites</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {photos.filter(p => p.favorite).length}
            </div>
            <p className="text-xs text-muted-foreground">
              favorite moments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Week {displayData.currentWeek}</div>
            <p className="text-xs text-muted-foreground">
              {displayData.trimester} trimester
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Milestones</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(milestoneProgress)}%</div>
            <p className="text-xs text-muted-foreground">
              milestones captured
            </p>
          </CardContent>
        </Card>
      </div>

      {upcomingMilestones.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Upcoming Photo Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingMilestones.map((milestone, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Week {milestone.week}</Badge>
                    <Badge variant="secondary" className="capitalize">
                      {milestone.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Add New Photo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="photo-title">Title</Label>
              <Input
                id="photo-title"
                value={newPhoto.title}
                onChange={(e) => setNewPhoto({...newPhoto, title: e.target.value})}
                placeholder="e.g., 16 Week Bump Photo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-category">Category</Label>
              <Select 
                value={newPhoto.category} 
                onValueChange={(value: 'belly' | 'ultrasound' | 'nursery' | 'baby-gear' | 'family' | 'milestone' | 'other') => 
                  setNewPhoto({...newPhoto, category: value})
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="belly">Belly/Bump</SelectItem>
                  <SelectItem value="ultrasound">Ultrasound</SelectItem>
                  <SelectItem value="nursery">Nursery</SelectItem>
                  <SelectItem value="baby-gear">Baby Gear</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="milestone">Milestone</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-tags">Tags (comma separated)</Label>
              <Input
                id="photo-tags"
                value={newPhoto.tags}
                onChange={(e) => setNewPhoto({...newPhoto, tags: e.target.value})}
                placeholder="e.g., bump, milestone, second-trimester"
              />
            </div>

            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Upload Photo
              </Button>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="photo-description">Description</Label>
              <Textarea
                id="photo-description"
                value={newPhoto.description}
                onChange={(e) => setNewPhoto({...newPhoto, description: e.target.value})}
                placeholder="Describe this special moment..."
                rows={3}
              />
            </div>
          </div>

          <Button onClick={addPhoto} className="mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Add to Timeline
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
                <SelectItem value="belly">Belly/Bump</SelectItem>
                <SelectItem value="ultrasound">Ultrasound</SelectItem>
                <SelectItem value="nursery">Nursery</SelectItem>
                <SelectItem value="baby-gear">Baby Gear</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="milestone">Milestones</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            variant={showFavoritesOnly ? "default" : "outline"} 
            size="sm"
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          >
            <Heart className="h-4 w-4 mr-2" />
            Favorites Only
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList>
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          <TabsTrigger value="trimester">By Trimester</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-4">
          <div className="space-y-4">
            {filteredPhotos.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No photos yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start capturing your pregnancy journey by adding your first photo.
                  </p>
                  <Button onClick={addPhoto}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add First Photo
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredPhotos.map((photo) => (
                <Card key={photo.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-xl font-semibold">{photo.title}</h3>
                          <Badge variant="outline">Week {photo.week}</Badge>
                          <Badge variant="secondary" className="capitalize">
                            {photo.category.replace('-', ' ')}
                          </Badge>
                          {photo.favorite && (
                            <Heart className="h-4 w-4 text-red-500 fill-current" />
                          )}
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          {formatDate(photo.date)} • {photo.week} weeks
                        </div>
                        
                        {photo.description && (
                          <p className="text-muted-foreground">{photo.description}</p>
                        )}
                        
                        {photo.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {photo.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(photo.id)}
                        >
                          <Heart 
                            className={`h-4 w-4 ${photo.favorite ? 'text-red-500 fill-current' : ''}`}
                          />
                        </Button>
                        <div className="w-32 h-24 bg-muted rounded-lg flex items-center justify-center">
                          <Camera className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="trimester" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Object.entries(photosByTrimester).map(([trimester, trimesterPhotos]) => (
              <Card key={trimester}>
                <CardHeader>
                  <CardTitle className="capitalize">
                    {trimester} Trimester ({trimesterPhotos.length})
                  </CardTitle>
                  <CardDescription>
                    {trimester === 'first' && 'Weeks 1-12'}
                    {trimester === 'second' && 'Weeks 13-27'}
                    {trimester === 'third' && 'Weeks 28-40+'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trimesterPhotos.slice(0, 3).map((photo) => (
                      <div key={photo.id} className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-muted rounded flex items-center justify-center flex-shrink-0">
                          <Camera className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{photo.title}</p>
                          <p className="text-xs text-muted-foreground">Week {photo.week}</p>
                        </div>
                        {photo.favorite && (
                          <Heart className="h-3 w-3 text-red-500 fill-current flex-shrink-0" />
                        )}
                      </div>
                    ))}
                    {trimesterPhotos.length > 3 && (
                      <p className="text-xs text-muted-foreground text-center">
                        +{trimesterPhotos.length - 3} more photos
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="category" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(categoryStats).map(([category, count]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-sm capitalize">
                    {category.replace('-', ' ')} ({count})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {photos
                      .filter(p => p.category === category)
                      .slice(0, 2)
                      .map((photo) => (
                        <div key={photo.id} className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-muted rounded flex items-center justify-center flex-shrink-0">
                            <Camera className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs truncate">{photo.title}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}