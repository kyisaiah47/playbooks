"use client"

import { useState } from "react"
import { useBabyPlanning } from "@/contexts/baby-planning-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  BookOpen,
  Plus,
  Heart,
  Star,
  Search,
  Filter,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react"

interface BabyName {
  id: string
  name: string
  gender: 'boy' | 'girl' | 'unisex'
  origin: string
  meaning: string
  popularity: number
  favorite: boolean
  notes: string
  addedBy: string
  middleNames?: string[]
}

const sampleNames: BabyName[] = [
  {
    id: '1',
    name: 'Emma',
    gender: 'girl',
    origin: 'Germanic',
    meaning: 'Universal, whole',
    popularity: 2,
    favorite: true,
    notes: 'Classic and timeless, goes well with our last name',
    addedBy: 'Mom',
    middleNames: ['Grace', 'Rose', 'Claire']
  },
  {
    id: '2',
    name: 'Liam',
    gender: 'boy',
    origin: 'Irish',
    meaning: 'Strong-willed warrior',
    popularity: 1,
    favorite: true,
    notes: 'Love the strong meaning and sound',
    addedBy: 'Dad',
    middleNames: ['James', 'Alexander', 'Michael']
  },
  {
    id: '3',
    name: 'Aria',
    gender: 'girl',
    origin: 'Italian',
    meaning: 'Air, song, melody',
    popularity: 15,
    favorite: false,
    notes: 'Musical connection, beautiful sound',
    addedBy: 'Mom'
  },
  {
    id: '4',
    name: 'Noah',
    gender: 'boy',
    origin: 'Hebrew',
    meaning: 'Rest, comfort',
    popularity: 3,
    favorite: false,
    notes: 'Biblical name with peaceful meaning',
    addedBy: 'Dad'
  },
  {
    id: '5',
    name: 'Luna',
    gender: 'girl',
    origin: 'Latin',
    meaning: 'Moon',
    popularity: 25,
    favorite: true,
    notes: 'Celestial theme, unique but not too unusual',
    addedBy: 'Both'
  },
  {
    id: '6',
    name: 'River',
    gender: 'unisex',
    origin: 'English',
    meaning: 'Stream of water',
    popularity: 60,
    favorite: false,
    notes: 'Nature name, works for either gender',
    addedBy: 'Mom'
  }
]

const nameOrigins = ['African', 'Arabic', 'Celtic', 'Chinese', 'English', 'French', 'Germanic', 'Greek', 'Hebrew', 'Irish', 'Italian', 'Japanese', 'Latin', 'Nordic', 'Sanskrit', 'Spanish']

export function BabyNameTracker() {
  const { babyPlanningData } = useBabyPlanning()
  const [names, setNames] = useState<BabyName[]>(sampleNames)
  const [searchTerm, setSearchTerm] = useState("")
  const [genderFilter, setGenderFilter] = useState<string>("all")
  const [originFilter, setOriginFilter] = useState<string>("all")
  const [favoritesOnly, setFavoritesOnly] = useState(false)

  const toggleFavorite = (id: string) => {
    setNames(prev => prev.map(name => 
      name.id === id ? { ...name, favorite: !name.favorite } : name
    ))
  }

  const filteredNames = names.filter(name => {
    const matchesSearch = name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         name.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         name.origin.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGender = genderFilter === "all" || name.gender === genderFilter
    const matchesOrigin = originFilter === "all" || name.origin === originFilter
    const matchesFavorites = !favoritesOnly || name.favorite
    
    return matchesSearch && matchesGender && matchesOrigin && matchesFavorites
  })

  const favorites = names.filter(name => name.favorite)
  const boyNames = names.filter(name => name.gender === 'boy')
  const girlNames = names.filter(name => name.gender === 'girl')
  const unisexNames = names.filter(name => name.gender === 'unisex')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <BookOpen className="mr-2 h-8 w-8" />
          Baby Names
        </h1>
        <p className="text-muted-foreground">
          Explore, save, and organize baby name ideas for {babyPlanningData.babyName || 'your little one'}
        </p>
      </div>

      {/* Current Selection */}
      {babyPlanningData.babyName && (
        <Card className="border-l-4 border-l-pink-500">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-pink-600" />
              Current Choice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{babyPlanningData.babyName}</div>
            <p className="text-muted-foreground">
              {babyPlanningData.babyGender === 'unknown' ? 'Gender to be determined' : 
               `For your baby ${babyPlanningData.babyGender}`}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Names</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{names.length}</div>
            <p className="text-xs text-muted-foreground mt-1">In your list</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Favorites</CardTitle>
            <Heart className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{favorites.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Top choices</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Origins</CardTitle>
            <Globe className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(names.map(n => n.origin)).size}</div>
            <p className="text-xs text-muted-foreground mt-1">Different cultures</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Popularity</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              #{Math.round(names.reduce((sum, name) => sum + name.popularity, 0) / names.length)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Ranking position</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search names, meanings, or origins..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={genderFilter} onValueChange={setGenderFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="boy">Boy</SelectItem>
              <SelectItem value="girl">Girl</SelectItem>
              <SelectItem value="unisex">Unisex</SelectItem>
            </SelectContent>
          </Select>

          <Select value={originFilter} onValueChange={setOriginFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Origin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Origins</SelectItem>
              {nameOrigins.map(origin => (
                <SelectItem key={origin} value={origin}>{origin}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant={favoritesOnly ? "default" : "outline"}
            onClick={() => setFavoritesOnly(!favoritesOnly)}
            className="w-32"
          >
            <Heart className="mr-2 h-4 w-4" />
            Favorites
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Name
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Baby Name</DialogTitle>
                <DialogDescription>
                  Add a new name to your collection
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="e.g., Sophia" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boy">Boy</SelectItem>
                      <SelectItem value="girl">Girl</SelectItem>
                      <SelectItem value="unisex">Unisex</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="origin">Origin</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select origin" />
                    </SelectTrigger>
                    <SelectContent>
                      {nameOrigins.map(origin => (
                        <SelectItem key={origin} value={origin}>{origin}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="meaning">Meaning</Label>
                  <Input id="meaning" placeholder="e.g., Wisdom" />
                </div>
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Why you like this name, family connections, etc." />
                </div>
                <Button className="w-full">Add Name</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All Names ({filteredNames.length})</TabsTrigger>
          <TabsTrigger value="favorites">Favorites ({favorites.length})</TabsTrigger>
          <TabsTrigger value="boys">Boys ({boyNames.length})</TabsTrigger>
          <TabsTrigger value="girls">Girls ({girlNames.length})</TabsTrigger>
          <TabsTrigger value="comparison">Compare</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {filteredNames.map((name) => (
              <Card key={name.id} className={name.favorite ? 'ring-2 ring-red-200' : ''}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="text-xl font-bold">{name.name}</div>
                        <Badge 
                          variant={name.gender === 'boy' ? 'default' : name.gender === 'girl' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {name.gender}
                        </Badge>
                        <Badge variant="outline" className="text-xs">#{name.popularity}</Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(name.id)}
                          className="p-1"
                        >
                          <Heart 
                            className={`h-4 w-4 ${name.favorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                          />
                        </Button>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">{name.origin}</span> • {name.meaning}
                      </div>
                      
                      {name.notes && (
                        <div className="text-sm p-2 bg-muted rounded">{name.notes}</div>
                      )}
                      
                      {name.middleNames && name.middleNames.length > 0 && (
                        <div className="space-y-1">
                          <div className="text-xs font-medium text-muted-foreground">Middle name ideas:</div>
                          <div className="flex gap-1">
                            {name.middleNames.map((middle, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {name.name} {middle}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          Added by: {name.addedBy}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Add Middle Names
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4">
          <div className="grid gap-4">
            {favorites.map((name, index) => (
              <Card key={name.id} className="ring-2 ring-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-red-700">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="font-semibold text-lg">{name.name}</div>
                        <Badge variant={name.gender === 'boy' ? 'default' : 'secondary'}>
                          {name.gender}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {name.origin} • {name.meaning}
                      </div>
                      {name.notes && (
                        <div className="text-sm mt-2 p-2 bg-red-50 rounded">{name.notes}</div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(name.id)}
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="boys" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {boyNames.map((name) => (
              <Card key={name.id} className={name.favorite ? 'ring-2 ring-blue-200' : ''}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="font-semibold">{name.name}</div>
                        <Badge variant="outline" className="text-xs">#{name.popularity}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {name.origin} • {name.meaning}
                      </div>
                      {name.notes && (
                        <div className="text-xs text-muted-foreground mt-1">{name.notes}</div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(name.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${name.favorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="girls" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {girlNames.map((name) => (
              <Card key={name.id} className={name.favorite ? 'ring-2 ring-pink-200' : ''}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="font-semibold">{name.name}</div>
                        <Badge variant="outline" className="text-xs">#{name.popularity}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {name.origin} • {name.meaning}
                      </div>
                      {name.notes && (
                        <div className="text-xs text-muted-foreground mt-1">{name.notes}</div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(name.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${name.favorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <h3 className="text-lg font-semibold">Name Comparison</h3>
          
          <Card>
            <CardHeader>
              <CardTitle>Side-by-Side Comparison</CardTitle>
              <CardDescription>
                Select up to 4 names to compare side by side
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {favorites.slice(0, 4).map((name) => (
                  <div key={name.id} className="space-y-2 p-4 border rounded-lg">
                    <div className="font-semibold text-center">{name.name}</div>
                    <div className="space-y-1 text-sm">
                      <div><span className="font-medium">Gender:</span> {name.gender}</div>
                      <div><span className="font-medium">Origin:</span> {name.origin}</div>
                      <div><span className="font-medium">Meaning:</span> {name.meaning}</div>
                      <div><span className="font-medium">Popularity:</span> #{name.popularity}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {favorites.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  Add some names to your favorites to compare them here
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Family Input
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium mb-2">Share your favorites for feedback:</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Share via Email</Button>
                    <Button variant="outline" size="sm">Create Poll</Button>
                    <Button variant="outline" size="sm">Export List</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}