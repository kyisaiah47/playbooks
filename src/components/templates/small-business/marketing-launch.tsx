"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  Trash2,
  Megaphone,
  Target,
  Globe,
  Mail,
  Share2,
  Camera,
  Users,
  BarChart3,
  PenTool,
  Calendar
} from "lucide-react"
import { useSmallBusiness } from "@/contexts/small-business-context"

interface MarketingItem {
  id: string
  name: string
  type: 'campaign' | 'content' | 'branding' | 'website' | 'social' | 'advertising' | 'email' | 'event'
  status: 'planning' | 'in-progress' | 'completed' | 'launched'
  platform: string
  budget: number
  targetAudience: string
  launchDate: string
  endDate?: string
  metrics?: {
    impressions?: number
    clicks?: number
    conversions?: number
    engagement?: number
  }
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function MarketingLaunch() {
  const { data, updateData } = useSmallBusiness()
  const [items, setItems] = useState<MarketingItem[]>([])
  const [isAddingItem, setIsAddingItem] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    type: 'campaign' as const,
    platform: '',
    budget: 0,
    targetAudience: '',
    launchDate: '',
    endDate: '',
    notes: '',
  })

  useEffect(() => {
    const savedItems = localStorage.getItem('small-business-marketing-launch-items')
    if (savedItems) {
      const parsed = JSON.parse(savedItems)
      setItems(parsed.map((item: any) => ({
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt)
      })))
    }
  }, [])

  const saveItems = (newItems: MarketingItem[]) => {
    setItems(newItems)
    localStorage.setItem('small-business-marketing-launch-items', JSON.stringify(newItems))
  }

  const addItem = () => {
    if (!formData.name.trim()) return

    const newItem: MarketingItem = {
      id: Date.now().toString(),
      ...formData,
      status: 'planning',
      metrics: {},
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveItems([...items, newItem])
    resetForm()
    setIsAddingItem(false)
  }

  const updateItem = (id: string, updates: Partial<MarketingItem>) => {
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
      type: 'campaign',
      platform: '',
      budget: 0,
      targetAudience: '',
      launchDate: '',
      endDate: '',
      notes: '',
    })
  }

  // Calculate marketing metrics
  const totalBudget = items.reduce((sum, item) => sum + item.budget, 0)
  const activeCampaigns = items.filter(item => item.status === 'launched' || item.status === 'in-progress').length
  const completedCampaigns = items.filter(item => item.status === 'completed').length
  const totalCampaigns = items.length
  const campaignSuccess = totalCampaigns > 0 ? (completedCampaigns / totalCampaigns) * 100 : 0

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'campaign': return <Megaphone className="h-4 w-4" />
      case 'content': return <PenTool className="h-4 w-4" />
      case 'branding': return <Camera className="h-4 w-4" />
      case 'website': return <Globe className="h-4 w-4" />
      case 'social': return <Share2 className="h-4 w-4" />
      case 'advertising': return <Target className="h-4 w-4" />
      case 'email': return <Mail className="h-4 w-4" />
      case 'event': return <Calendar className="h-4 w-4" />
      default: return <Megaphone className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'campaign': return 'bg-red-100 text-red-800'
      case 'content': return 'bg-blue-100 text-blue-800'
      case 'branding': return 'bg-purple-100 text-purple-800'
      case 'website': return 'bg-green-100 text-green-800'
      case 'social': return 'bg-pink-100 text-pink-800'
      case 'advertising': return 'bg-orange-100 text-orange-800'
      case 'email': return 'bg-yellow-100 text-yellow-800'
      case 'event': return 'bg-indigo-100 text-indigo-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const platforms = [
    'Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube',
    'Google Ads', 'Email Newsletter', 'Website', 'Print Media', 'Radio',
    'Local Events', 'Other'
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Marketing Launch</h1>
          <p className="text-muted-foreground">Plan and execute your marketing campaigns</p>
        </div>
        <Dialog open={isAddingItem} onOpenChange={setIsAddingItem}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Marketing Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Marketing Campaign</DialogTitle>
              <DialogDescription>
                Create a new marketing campaign or activity.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Campaign Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Grand Opening Campaign, Social Media Launch"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Campaign Type</Label>
                  <Select value={formData.type} onValueChange={(value: any) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="campaign">Marketing Campaign</SelectItem>
                      <SelectItem value="content">Content Creation</SelectItem>
                      <SelectItem value="branding">Branding/Design</SelectItem>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="advertising">Paid Advertising</SelectItem>
                      <SelectItem value="email">Email Marketing</SelectItem>
                      <SelectItem value="event">Event Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="platform">Platform/Channel</Label>
                  <Select value={formData.platform} onValueChange={(value) => setFormData({...formData, platform: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      {platforms.map(platform => (
                        <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                  placeholder="e.g., Local businesses, Young professionals, Parents"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget ($)</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: parseFloat(e.target.value) || 0})}
                    placeholder="0"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="launchDate">Launch Date</Label>
                  <Input
                    id="launchDate"
                    type="date"
                    value={formData.launchDate}
                    onChange={(e) => setFormData({...formData, launchDate: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="endDate">End Date (Optional)</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Campaign Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Campaign objectives, messaging, creative brief..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addItem}>
                Add Campaign
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Marketing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">marketing investment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCampaigns}</div>
            <p className="text-xs text-muted-foreground">currently running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCampaigns}</div>
            <p className="text-xs text-muted-foreground">campaigns finished</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaignSuccess.toFixed(1)}%</div>
            <Progress value={campaignSuccess} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Marketing Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['campaign', 'content', 'social', 'advertising', 'website', 'branding', 'email', 'event'].map(type => {
          const typeItems = items.filter(item => item.type === type)
          const typeProgress = typeItems.length > 0 
            ? (typeItems.filter(item => item.status === 'completed').length / typeItems.length) * 100 
            : 0
          const typeBudget = typeItems.reduce((sum, item) => sum + item.budget, 0)

          return (
            <Card key={type}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  {getTypeIcon(type)}
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </CardTitle>
                <CardDescription>
                  {typeItems.length} items • ${typeBudget.toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={typeProgress} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  {Math.round(typeProgress)}% complete
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Campaign Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Timeline</CardTitle>
          <CardDescription>Upcoming and active marketing activities</CardDescription>
        </CardHeader>
        <CardContent>
          {items.filter(item => item.launchDate).length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted-foreground">No scheduled campaigns</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items
                .filter(item => item.launchDate)
                .sort((a, b) => new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime())
                .slice(0, 5)
                .map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {getTypeIcon(item.type)}
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.platform} • {item.targetAudience}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={
                        item.status === 'completed' ? 'default' :
                        item.status === 'launched' ? 'secondary' :
                        item.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {item.status}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">
                        {new Date(item.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Marketing Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Marketing Campaigns</CardTitle>
          <CardDescription>Manage your marketing activities and campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No marketing campaigns yet. Add your first campaign to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your marketing campaigns and activities</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Launch Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.targetAudience}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(item.type)} variant="secondary">
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.platform || 'Not specified'}</TableCell>
                    <TableCell>${item.budget.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={
                        item.status === 'completed' ? 'default' :
                        item.status === 'launched' ? 'secondary' :
                        item.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {item.launchDate ? new Date(item.launchDate).toLocaleDateString() : 'No date set'}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const nextStatus = item.status === 'planning' ? 'in-progress' :
                                             item.status === 'in-progress' ? 'launched' :
                                             item.status === 'launched' ? 'completed' : 'planning'
                            updateItem(item.id, { status: nextStatus })
                          }}
                        >
                          Next Stage
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