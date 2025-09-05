"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Building,
  MapPin,
  Phone,
  Star,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Clock,
  Users,
  Car
} from "lucide-react"

interface Dealership {
  id: string
  name: string
  brand: string
  address: string
  phone: string
  email: string
  website: string
  rating: number
  salesContact: string
  notes: string
  status: 'preferred' | 'contacted' | 'avoiding' | 'neutral'
  lastContact: string
  interactions: Interaction[]
}

interface Interaction {
  id: string
  date: string
  type: 'call' | 'email' | 'visit' | 'quote'
  subject: string
  notes: string
  followUpDate?: string
}

export function DealershipManager() {
  const [dealerships, setDealerships] = useState<Dealership[]>([
    {
      id: "1",
      name: "Honda Downtown",
      brand: "Honda",
      address: "123 Main St, New York, NY 10001",
      phone: "(555) 123-4567",
      email: "sales@hondadowntown.com",
      website: "https://hondadowntown.com",
      rating: 4.5,
      salesContact: "John Smith",
      notes: "Excellent customer service, competitive pricing",
      status: "preferred",
      lastContact: "2024-01-15",
      interactions: [
        {
          id: "1",
          date: "2024-01-15",
          type: "call",
          subject: "Inquired about 2023 Honda Accord",
          notes: "Discussed pricing and availability. They have 3 in stock.",
          followUpDate: "2024-01-20"
        }
      ]
    },
    {
      id: "2", 
      name: "Toyota City",
      brand: "Toyota",
      address: "456 Broadway, Brooklyn, NY 11201",
      phone: "(555) 234-5678",
      email: "info@toyotacity.com",
      website: "https://toyotacity.com",
      rating: 4.2,
      salesContact: "Sarah Johnson",
      notes: "Good inventory, average service",
      status: "contacted",
      lastContact: "2024-01-12",
      interactions: [
        {
          id: "2",
          date: "2024-01-12",
          type: "email",
          subject: "Request for Camry pricing",
          notes: "Sent email inquiry, received automated response"
        }
      ]
    }
  ])

  const [selectedDealership, setSelectedDealership] = useState<Dealership | null>(null)
  const [editingDealership, setEditingDealership] = useState<Dealership | null>(null)
  const [addingInteraction, setAddingInteraction] = useState<string | null>(null)

  const addDealership = (dealershipData: Partial<Dealership>) => {
    const newDealership: Dealership = {
      id: Date.now().toString(),
      name: dealershipData.name || "",
      brand: dealershipData.brand || "",
      address: dealershipData.address || "",
      phone: dealershipData.phone || "",
      email: dealershipData.email || "",
      website: dealershipData.website || "",
      rating: dealershipData.rating || 0,
      salesContact: dealershipData.salesContact || "",
      notes: dealershipData.notes || "",
      status: dealershipData.status || "neutral",
      lastContact: new Date().toISOString().split('T')[0],
      interactions: []
    }
    setDealerships(prev => [...prev, newDealership])
  }

  const updateDealership = (dealershipId: string, updates: Partial<Dealership>) => {
    setDealerships(prev => prev.map(dealership => 
      dealership.id === dealershipId ? { ...dealership, ...updates } : dealership
    ))
    setEditingDealership(null)
  }

  const deleteDealership = (dealershipId: string) => {
    setDealerships(prev => prev.filter(dealership => dealership.id !== dealershipId))
    setSelectedDealership(null)
  }

  const addInteraction = (dealershipId: string, interaction: Omit<Interaction, 'id'>) => {
    const newInteraction: Interaction = {
      ...interaction,
      id: Date.now().toString()
    }
    setDealerships(prev => prev.map(dealership => 
      dealership.id === dealershipId 
        ? { 
            ...dealership, 
            interactions: [...dealership.interactions, newInteraction],
            lastContact: interaction.date
          } 
        : dealership
    ))
    setAddingInteraction(null)
  }

  const getStatusColor = (status: Dealership['status']) => {
    switch (status) {
      case 'preferred': return 'bg-primary/10 text-primary'
      case 'contacted': return 'bg-primary/10 text-primary'
      case 'avoiding': return 'bg-destructive/10 text-destructive'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  const DealershipCard = ({ dealership }: { dealership: Dealership }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center">
              <Building className="mr-2 h-5 w-5" />
              {dealership.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{dealership.brand}</p>
          </div>
          <Badge className={getStatusColor(dealership.status)}>
            {dealership.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            {dealership.address}
          </div>
          <div className="flex items-center text-sm">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            {dealership.phone}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-current text-primary" />
            <span className="text-sm">{dealership.rating}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <Clock className="inline mr-1 h-3 w-3" />
            Last contact: {dealership.lastContact}
          </div>
        </div>

        {dealership.salesContact && (
          <div className="text-sm">
            <span className="font-medium">Sales Contact: </span>
            {dealership.salesContact}
          </div>
        )}

        {dealership.notes && (
          <p className="text-sm text-muted-foreground line-clamp-2">{dealership.notes}</p>
        )}

        <div className="flex justify-between">
          <Button variant="outline" size="sm" onClick={() => setSelectedDealership(dealership)}>
            View Details
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setEditingDealership(dealership)}>
              <Edit className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => setAddingInteraction(dealership.id)}>
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const InteractionForm = ({ dealershipId, onSubmit }: { dealershipId: string; onSubmit: (interaction: Omit<Interaction, 'id'>) => void }) => {
    const [formData, setFormData] = useState({
      date: new Date().toISOString().split('T')[0],
      type: 'call' as Interaction['type'],
      subject: "",
      notes: "",
      followUpDate: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit({
        ...formData,
        followUpDate: formData.followUpDate || undefined
      })
      setFormData({
        date: new Date().toISOString().split('T')[0],
        type: 'call',
        subject: "",
        notes: "",
        followUpDate: ""
      })
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Date</Label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              required
            />
          </div>
          <div>
            <Label>Type</Label>
            <select
              className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
              value={formData.type}
              onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as Interaction['type'] }))}
            >
              <option value="call">Phone Call</option>
              <option value="email">Email</option>
              <option value="visit">In-Person Visit</option>
              <option value="quote">Quote Request</option>
            </select>
          </div>
        </div>
        <div>
          <Label>Subject</Label>
          <Input
            value={formData.subject}
            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            placeholder="Brief description of the interaction"
            required
          />
        </div>
        <div>
          <Label>Notes</Label>
          <Textarea
            value={formData.notes}
            onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
            placeholder="Detailed notes about the interaction"
          />
        </div>
        <div>
          <Label>Follow-up Date (Optional)</Label>
          <Input
            type="date"
            value={formData.followUpDate}
            onChange={(e) => setFormData(prev => ({ ...prev, followUpDate: e.target.value }))}
          />
        </div>
        <Button type="submit" className="w-full">Add Interaction</Button>
      </form>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <Building className="mr-2 h-8 w-8" />
            Dealership Manager
          </h1>
          <p className="text-muted-foreground">
            Track dealerships, contacts, and interactions throughout your car buying journey
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Dealership
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Dealership</DialogTitle>
              <DialogDescription>
                Add a dealership you want to track
              </DialogDescription>
            </DialogHeader>
            <DealershipForm onSubmit={addDealership} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All ({dealerships.length})</TabsTrigger>
          <TabsTrigger value="preferred">Preferred ({dealerships.filter(d => d.status === 'preferred').length})</TabsTrigger>
          <TabsTrigger value="contacted">Contacted ({dealerships.filter(d => d.status === 'contacted').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dealerships.map((dealership) => (
              <DealershipCard key={dealership.id} dealership={dealership} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="preferred" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dealerships.filter(d => d.status === 'preferred').map((dealership) => (
              <DealershipCard key={dealership.id} dealership={dealership} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contacted" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dealerships.filter(d => d.status === 'contacted').map((dealership) => (
              <DealershipCard key={dealership.id} dealership={dealership} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Dealership Details Dialog */}
      {selectedDealership && (
        <Dialog open={!!selectedDealership} onOpenChange={() => setSelectedDealership(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedDealership.name}</DialogTitle>
              <DialogDescription>{selectedDealership.brand} Dealership</DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Address:</strong> {selectedDealership.address}</p>
                    <p><strong>Phone:</strong> {selectedDealership.phone}</p>
                    <p><strong>Email:</strong> {selectedDealership.email}</p>
                    <p><strong>Website:</strong> 
                      <a href={selectedDealership.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:underline">
                        Visit <ExternalLink className="inline h-3 w-3" />
                      </a>
                    </p>
                    <p><strong>Sales Contact:</strong> {selectedDealership.salesContact}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Rating & Status</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-current text-primary" />
                      {selectedDealership.rating}
                    </div>
                    <Badge className={getStatusColor(selectedDealership.status)}>
                      {selectedDealership.status}
                    </Badge>
                  </div>
                </div>
                {selectedDealership.notes && (
                  <div>
                    <h4 className="font-semibold mb-2">Notes</h4>
                    <p className="text-sm">{selectedDealership.notes}</p>
                  </div>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold">Interactions ({selectedDealership.interactions.length})</h4>
                  <Button size="sm" onClick={() => setAddingInteraction(selectedDealership.id)}>
                    <Plus className="h-3 w-3 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedDealership.interactions.map((interaction) => (
                    <div key={interaction.id} className="border rounded p-3 text-sm">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium capitalize">{interaction.type}</span>
                        <span className="text-muted-foreground">{interaction.date}</span>
                      </div>
                      <p className="font-medium mb-1">{interaction.subject}</p>
                      <p className="text-muted-foreground">{interaction.notes}</p>
                      {interaction.followUpDate && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Follow-up: {interaction.followUpDate}
                        </p>
                      )}
                    </div>
                  ))}
                  {selectedDealership.interactions.length === 0 && (
                    <p className="text-muted-foreground text-center py-4">No interactions yet</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => deleteDealership(selectedDealership.id)}>
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
              <Button onClick={() => setEditingDealership(selectedDealership)}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Dealership Dialog */}
      {editingDealership && (
        <Dialog open={!!editingDealership} onOpenChange={() => setEditingDealership(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Dealership</DialogTitle>
            </DialogHeader>
            <DealershipForm 
              dealership={editingDealership} 
              onSubmit={(updates) => updateDealership(editingDealership.id, updates)} 
            />
          </DialogContent>
        </Dialog>
      )}

      {/* Add Interaction Dialog */}
      {addingInteraction && (
        <Dialog open={!!addingInteraction} onOpenChange={() => setAddingInteraction(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Interaction</DialogTitle>
              <DialogDescription>
                Record a new interaction with this dealership
              </DialogDescription>
            </DialogHeader>
            <InteractionForm 
              dealershipId={addingInteraction} 
              onSubmit={(interaction) => addInteraction(addingInteraction, interaction)} 
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function DealershipForm({ dealership, onSubmit }: { dealership?: Dealership; onSubmit: (data: Partial<Dealership>) => void }) {
  const [formData, setFormData] = useState({
    name: dealership?.name || "",
    brand: dealership?.brand || "",
    address: dealership?.address || "",
    phone: dealership?.phone || "",
    email: dealership?.email || "",
    website: dealership?.website || "",
    rating: dealership?.rating || 0,
    salesContact: dealership?.salesContact || "",
    notes: dealership?.notes || "",
    status: dealership?.status || "neutral"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Name</Label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label>Brand</Label>
          <Input
            value={formData.brand}
            onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
            required
          />
        </div>
      </div>
      <div>
        <Label>Address</Label>
        <Input
          value={formData.address}
          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Phone</Label>
          <Input
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>
      </div>
      <div>
        <Label>Website</Label>
        <Input
          type="url"
          value={formData.website}
          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
          placeholder="https://"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label>Rating</Label>
          <Input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={formData.rating}
            onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) || 0 }))}
          />
        </div>
        <div>
          <Label>Status</Label>
          <select
            className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
            value={formData.status}
            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as Dealership['status'] }))}
          >
            <option value="neutral">Neutral</option>
            <option value="preferred">Preferred</option>
            <option value="contacted">Contacted</option>
            <option value="avoiding">Avoiding</option>
          </select>
        </div>
        <div>
          <Label>Sales Contact</Label>
          <Input
            value={formData.salesContact}
            onChange={(e) => setFormData(prev => ({ ...prev, salesContact: e.target.value }))}
          />
        </div>
      </div>
      <div>
        <Label>Notes</Label>
        <Textarea
          value={formData.notes}
          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
          placeholder="Any notes about this dealership..."
        />
      </div>
      <Button type="submit" className="w-full">
        {dealership ? 'Update Dealership' : 'Add Dealership'}
      </Button>
    </form>
  )
}