"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { 
  BookOpen, Plus, Search, Filter, Star, Calendar, 
  User, Link, FileText, Tag, MoreHorizontal, Edit, Trash2
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Source {
  id: string
  title: string
  authors: string[]
  year: number
  type: 'journal' | 'book' | 'conference' | 'thesis' | 'report' | 'website'
  status: 'to-read' | 'reading' | 'read' | 'cited'
  tags: string[]
  notes: string
  url?: string
  doi?: string
  rating?: number
  relevance: 'high' | 'medium' | 'low'
  dateAdded: Date
}

export function LiteratureReview() {
  const [sources, setSources] = useState<Source[]>([
    {
      id: '1',
      title: 'Machine Learning Applications in Academic Research',
      authors: ['Smith, J.', 'Johnson, M.'],
      year: 2023,
      type: 'journal',
      status: 'read',
      tags: ['machine learning', 'research methods'],
      notes: 'Comprehensive overview of ML applications. Particularly relevant for methodology section.',
      url: 'https://example.com/paper1',
      rating: 5,
      relevance: 'high',
      dateAdded: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'Research Data Management Best Practices',
      authors: ['Brown, A.', 'Davis, K.', 'Wilson, R.'],
      year: 2022,
      type: 'book',
      status: 'reading',
      tags: ['data management', 'best practices'],
      notes: 'Chapter 3 has excellent framework for data organization.',
      relevance: 'medium',
      dateAdded: new Date('2024-01-10')
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterType, setFilterType] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newSource, setNewSource] = useState<Partial<Source>>({
    title: '',
    authors: [],
    year: new Date().getFullYear(),
    type: 'journal',
    status: 'to-read',
    tags: [],
    notes: '',
    relevance: 'medium'
  })

  const filteredSources = sources.filter(source => {
    const matchesSearch = source.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         source.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = filterStatus === "all" || source.status === filterStatus
    const matchesType = filterType === "all" || source.type === filterType
    return matchesSearch && matchesStatus && matchesType
  })

  const addSource = () => {
    if (newSource.title) {
      const source: Source = {
        id: Date.now().toString(),
        title: newSource.title,
        authors: typeof newSource.authors === 'string' ? [newSource.authors] : (newSource.authors || []),
        year: newSource.year || new Date().getFullYear(),
        type: newSource.type || 'journal',
        status: newSource.status || 'to-read',
        tags: typeof newSource.tags === 'string' ? [newSource.tags] : (newSource.tags || []),
        notes: newSource.notes || '',
        url: newSource.url,
        doi: newSource.doi,
        rating: newSource.rating,
        relevance: newSource.relevance || 'medium',
        dateAdded: new Date()
      }
      setSources([...sources, source])
      setNewSource({
        title: '',
        authors: [],
        year: new Date().getFullYear(),
        type: 'journal',
        status: 'to-read',
        tags: [],
        notes: '',
        relevance: 'medium'
      })
      setIsAddDialogOpen(false)
    }
  }

  const getStatusColor = (status: Source['status']) => {
    switch (status) {
      case 'to-read': return 'secondary'
      case 'reading': return 'default'
      case 'read': return 'outline'
      case 'cited': return 'destructive'
      default: return 'secondary'
    }
  }

  const getRelevanceColor = (relevance: Source['relevance']) => {
    switch (relevance) {
      case 'high': return 'destructive'
      case 'medium': return 'secondary'
      case 'low': return 'outline'
      default: return 'secondary'
    }
  }

  const stats = {
    total: sources.length,
    toRead: sources.filter(s => s.status === 'to-read').length,
    reading: sources.filter(s => s.status === 'reading').length,
    read: sources.filter(s => s.status === 'read').length,
    cited: sources.filter(s => s.status === 'cited').length
  }

  const readingProgress = stats.total > 0 ? ((stats.read + stats.cited) / stats.total) * 100 : 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <BookOpen className="mr-2 h-8 w-8" />
            Literature Review
          </h1>
          <p className="text-muted-foreground mt-1">
            Organize and track your research sources and literature
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Source
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Add New Source</DialogTitle>
              <DialogDescription>
                Add a new research source to your literature review.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newSource.title}
                  onChange={(e) => setNewSource({...newSource, title: e.target.value})}
                  placeholder="Enter source title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="authors">Authors</Label>
                  <Input
                    id="authors"
                    value={Array.isArray(newSource.authors) ? newSource.authors.join(', ') : newSource.authors}
                    onChange={(e) => setNewSource({...newSource, authors: e.target.value.split(', ')})}
                    placeholder="Author 1, Author 2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    value={newSource.year}
                    onChange={(e) => setNewSource({...newSource, year: parseInt(e.target.value)})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={newSource.type} onValueChange={(value: Source['type']) => setNewSource({...newSource, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="journal">Journal Article</SelectItem>
                      <SelectItem value="book">Book</SelectItem>
                      <SelectItem value="conference">Conference Paper</SelectItem>
                      <SelectItem value="thesis">Thesis</SelectItem>
                      <SelectItem value="report">Report</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relevance">Relevance</Label>
                  <Select value={newSource.relevance} onValueChange={(value: Source['relevance']) => setNewSource({...newSource, relevance: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">URL (Optional)</Label>
                <Input
                  id="url"
                  value={newSource.url}
                  onChange={(e) => setNewSource({...newSource, url: e.target.value})}
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={newSource.notes}
                  onChange={(e) => setNewSource({...newSource, notes: e.target.value})}
                  placeholder="Your notes about this source..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button onClick={addSource}>Add Source</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Reading Progress</CardTitle>
          <CardDescription>Track your literature review progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{Math.round(readingProgress)}% Complete</span>
            </div>
            <Progress value={readingProgress} className="h-3" />
          </div>
          <div className="grid grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-xs text-muted-foreground">Total</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-muted-foreground">{stats.toRead}</div>
              <div className="text-xs text-muted-foreground">To Read</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{stats.reading}</div>
              <div className="text-xs text-muted-foreground">Reading</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{stats.read}</div>
              <div className="text-xs text-muted-foreground">Read</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{stats.cited}</div>
              <div className="text-xs text-muted-foreground">Cited</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search sources by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="to-read">To Read</SelectItem>
                  <SelectItem value="reading">Reading</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="cited">Cited</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="journal">Journal</SelectItem>
                  <SelectItem value="book">Book</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="thesis">Thesis</SelectItem>
                  <SelectItem value="report">Report</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sources List */}
      <div className="grid gap-4">
        {filteredSources.map((source) => (
          <Card key={source.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{source.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      {source.authors.join(', ')}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {source.year}
                    </span>
                    {source.url && (
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                        <Link className="mr-1 h-3 w-3" />
                        View Source
                      </a>
                    )}
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant={getStatusColor(source.status)}>
                  {source.status.replace('-', ' ')}
                </Badge>
                <Badge variant="outline">{source.type}</Badge>
                <Badge variant={getRelevanceColor(source.relevance)}>
                  {source.relevance} relevance
                </Badge>
                {source.rating && (
                  <Badge variant="outline" className="flex items-center">
                    <Star className="mr-1 h-3 w-3" />
                    {source.rating}/5
                  </Badge>
                )}
              </div>
              
              {source.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {source.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      <Tag className="mr-1 h-2 w-2" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
              {source.notes && (
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    <FileText className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Notes</span>
                  </div>
                  <p className="text-sm">{source.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSources.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No sources found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || filterStatus !== 'all' || filterType !== 'all'
                ? 'Try adjusting your search criteria or filters.'
                : 'Start building your literature review by adding your first source.'}
            </p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Source
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}