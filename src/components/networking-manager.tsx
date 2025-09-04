"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Users,
  Plus,
  Search,
  Filter,
  Calendar,
  Building,
  Mail,
  Phone,
  Linkedin,
  MessageCircle,
  Clock,
  Star,
  Edit,
  Trash2,
  ExternalLink,
  Coffee,
  Handshake,
  Target
} from "lucide-react"

interface NetworkContact {
  id: string
  name: string
  title: string
  company: string
  email?: string
  phone?: string
  linkedinUrl?: string
  relationship: 'colleague' | 'referral' | 'alumni' | 'recruiter' | 'mentor' | 'other'
  connectionStrength: 'weak' | 'medium' | 'strong'
  lastContact: string
  notes: string
  tags: string[]
  canProvideReferral: boolean
}

interface NetworkingActivity {
  id: string
  contactId: string
  contactName: string
  type: 'outreach' | 'response' | 'meeting' | 'referral' | 'follow-up'
  date: string
  description: string
  outcome?: string
  nextAction?: string
  nextActionDate?: string
}

const relationshipTypes = {
  colleague: "Colleague",
  referral: "Referral Source", 
  alumni: "Alumni",
  recruiter: "Recruiter",
  mentor: "Mentor",
  other: "Other"
}

const connectionStrengths = {
  weak: "Weak",
  medium: "Medium", 
  strong: "Strong"
}

const activityTypes = {
  outreach: "Initial Outreach",
  response: "Response Received",
  meeting: "Meeting/Call",
  referral: "Referral Request",
  "follow-up": "Follow-up"
}

export function NetworkingManager() {
  const [contacts, setContacts] = useState<NetworkContact[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Engineering Manager",
      company: "TechCorp", 
      email: "sarah.j@techcorp.com",
      linkedinUrl: "https://linkedin.com/in/sarahjohnson",
      relationship: "colleague",
      connectionStrength: "strong",
      lastContact: "2024-08-20",
      notes: "Former colleague from startup days. Very supportive and well-connected in the industry.",
      tags: ["tech", "management", "startup"],
      canProvideReferral: true
    },
    {
      id: "2", 
      name: "Mike Chen",
      title: "Senior Developer",
      company: "StartupX",
      email: "mike@startupx.com",
      relationship: "alumni",
      connectionStrength: "medium",
      lastContact: "2024-08-15",
      notes: "Met at university alumni event. Works at an interesting startup.",
      tags: ["alumni", "startup", "frontend"],
      canProvideReferral: false
    },
    {
      id: "3",
      name: "Jennifer Adams", 
      title: "Technical Recruiter",
      company: "RecruitPro",
      email: "j.adams@recruitpro.com",
      phone: "(555) 123-4567",
      relationship: "recruiter",
      connectionStrength: "medium",
      lastContact: "2024-08-25",
      notes: "Reached out about several opportunities. Knows the market well.",
      tags: ["recruiter", "opportunities"],
      canProvideReferral: false
    }
  ])

  const [activities, setActivities] = useState<NetworkingActivity[]>([
    {
      id: "1",
      contactId: "1", 
      contactName: "Sarah Johnson",
      type: "meeting",
      date: "2024-08-20",
      description: "Coffee chat to catch up and discuss job search",
      outcome: "Great conversation, she offered to make introductions",
      nextAction: "Follow up with specific companies of interest",
      nextActionDate: "2024-08-27"
    },
    {
      id: "2",
      contactId: "3",
      contactName: "Jennifer Adams", 
      type: "outreach",
      date: "2024-08-25",
      description: "Initial outreach about job opportunities",
      outcome: "Positive response, scheduled call for next week"
    }
  ])

  const [showContactDialog, setShowContactDialog] = useState(false)
  const [showActivityDialog, setShowActivityDialog] = useState(false)
  const [editingContact, setEditingContact] = useState<NetworkContact | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [relationshipFilter, setRelationshipFilter] = useState("all")

  const [contactForm, setContactForm] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    relationship: "colleague" as NetworkContact['relationship'],
    connectionStrength: "medium" as NetworkContact['connectionStrength'],
    notes: "",
    tags: "",
    canProvideReferral: false
  })

  const [activityForm, setActivityForm] = useState({
    contactId: "",
    type: "outreach" as NetworkingActivity['type'],
    date: new Date().toISOString().split('T')[0],
    description: "",
    outcome: "",
    nextAction: "",
    nextActionDate: ""
  })

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.title.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesRelationship = relationshipFilter === "all" || contact.relationship === relationshipFilter
    
    return matchesSearch && matchesRelationship
  })

  const recentActivities = activities
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)

  const upcomingActions = activities
    .filter(a => a.nextActionDate && new Date(a.nextActionDate) >= new Date())
    .sort((a, b) => new Date(a.nextActionDate!).getTime() - new Date(b.nextActionDate!).getTime())

  const handleAddContact = () => {
    if (!contactForm.name || !contactForm.company) return

    const newContact: NetworkContact = {
      id: Date.now().toString(),
      ...contactForm,
      lastContact: new Date().toISOString().split('T')[0],
      tags: contactForm.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    }

    if (editingContact) {
      setContacts(prev => prev.map(contact => 
        contact.id === editingContact.id ? { ...newContact, id: editingContact.id } : contact
      ))
    } else {
      setContacts(prev => [...prev, newContact])
    }

    resetContactForm()
    setShowContactDialog(false)
    setEditingContact(null)
  }

  const handleAddActivity = () => {
    if (!activityForm.contactId || !activityForm.description) return

    const contact = contacts.find(c => c.id === activityForm.contactId)
    if (!contact) return

    const newActivity: NetworkingActivity = {
      id: Date.now().toString(),
      ...activityForm,
      contactName: contact.name
    }

    setActivities(prev => [...prev, newActivity])
    
    // Update last contact date
    setContacts(prev => prev.map(c => 
      c.id === activityForm.contactId 
        ? { ...c, lastContact: activityForm.date }
        : c
    ))

    resetActivityForm()
    setShowActivityDialog(false)
  }

  const resetContactForm = () => {
    setContactForm({
      name: "",
      title: "",
      company: "",
      email: "",
      phone: "",
      linkedinUrl: "",
      relationship: "colleague",
      connectionStrength: "medium", 
      notes: "",
      tags: "",
      canProvideReferral: false
    })
  }

  const resetActivityForm = () => {
    setActivityForm({
      contactId: "",
      type: "outreach",
      date: new Date().toISOString().split('T')[0],
      description: "",
      outcome: "",
      nextAction: "",
      nextActionDate: ""
    })
  }

  const handleEditContact = (contact: NetworkContact) => {
    setContactForm({
      name: contact.name,
      title: contact.title,
      company: contact.company,
      email: contact.email || "",
      phone: contact.phone || "",
      linkedinUrl: contact.linkedinUrl || "",
      relationship: contact.relationship,
      connectionStrength: contact.connectionStrength,
      notes: contact.notes,
      tags: contact.tags.join(', '),
      canProvideReferral: contact.canProvideReferral
    })
    setEditingContact(contact)
    setShowContactDialog(true)
  }

  const handleDeleteContact = (id: string) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      setContacts(prev => prev.filter(c => c.id !== id))
      setActivities(prev => prev.filter(a => a.contactId !== id))
    }
  }

  const getConnectionColor = (strength: string) => {
    switch (strength) {
      case 'strong': return 'bg-green-100 text-green-800 border-green-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'weak': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getRelationshipIcon = (relationship: string) => {
    switch (relationship) {
      case 'colleague': return <Users className="h-4 w-4" />
      case 'referral': return <Handshake className="h-4 w-4" />
      case 'alumni': return <Target className="h-4 w-4" />
      case 'recruiter': return <Building className="h-4 w-4" />
      case 'mentor': return <Star className="h-4 w-4" />
      default: return <Users className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <Users className="mr-2 h-8 w-8" />
            Network Management
          </h1>
          <p className="text-muted-foreground">
            Build and maintain your professional network
          </p>
        </div>
      </div>

      <Tabs defaultValue="contacts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="goals">Networking Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="contacts" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Professional Contacts</h2>
              <p className="text-sm text-muted-foreground">
                {contacts.length} contacts • {contacts.filter(c => c.canProvideReferral).length} can provide referrals
              </p>
            </div>
            <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
              <DialogTrigger asChild>
                <Button onClick={() => setEditingContact(null)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Contact
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingContact ? "Edit Contact" : "Add New Contact"}
                  </DialogTitle>
                  <DialogDescription>
                    {editingContact 
                      ? "Update contact information and relationship details"
                      : "Add a new professional contact to your network"
                    }
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name*</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={contactForm.title}
                        onChange={(e) => setContactForm(prev => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company*</Label>
                    <Input
                      id="company"
                      value={contactForm.company}
                      onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                    <Input
                      id="linkedinUrl"
                      type="url"
                      value={contactForm.linkedinUrl}
                      onChange={(e) => setContactForm(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="relationship">Relationship</Label>
                      <Select value={contactForm.relationship} onValueChange={(value) => setContactForm(prev => ({ ...prev, relationship: value as NetworkContact['relationship'] }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(relationshipTypes).map(([key, label]) => (
                            <SelectItem key={key} value={key}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="connectionStrength">Connection Strength</Label>
                      <Select value={contactForm.connectionStrength} onValueChange={(value) => setContactForm(prev => ({ ...prev, connectionStrength: value as NetworkContact['connectionStrength'] }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(connectionStrengths).map(([key, label]) => (
                            <SelectItem key={key} value={key}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input
                      id="tags"
                      value={contactForm.tags}
                      onChange={(e) => setContactForm(prev => ({ ...prev, tags: e.target.value }))}
                      placeholder="e.g. tech, startup, frontend"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      id="canProvideReferral"
                      type="checkbox"
                      checked={contactForm.canProvideReferral}
                      onChange={(e) => setContactForm(prev => ({ ...prev, canProvideReferral: e.target.checked }))}
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="canProvideReferral">Can provide referrals</Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={contactForm.notes}
                      onChange={(e) => setContactForm(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="Notes about this contact..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleAddContact} disabled={!contactForm.name || !contactForm.company}>
                    {editingContact ? "Update Contact" : "Add Contact"}
                  </Button>
                  <Button variant="outline" onClick={() => {
                    setShowContactDialog(false)
                    setEditingContact(null)
                    resetContactForm()
                  }}>
                    Cancel
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={relationshipFilter} onValueChange={setRelationshipFilter}>
              <SelectTrigger className="w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="All Relationships" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Relationships</SelectItem>
                {Object.entries(relationshipTypes).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Contacts Table */}
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact</TableHead>
                    <TableHead>Relationship</TableHead>
                    <TableHead>Connection</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead>Referrals</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium flex items-center">
                            <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                            {contact.name}
                            <div className="flex items-center ml-2 space-x-1">
                              {contact.email && (
                                <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-foreground">
                                  <Mail className="h-3 w-3" />
                                </a>
                              )}
                              {contact.linkedinUrl && (
                                <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                  <Linkedin className="h-3 w-3" />
                                </a>
                              )}
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {contact.title} at {contact.company}
                          </div>
                          {contact.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {contact.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {contact.tags.length > 2 && (
                                <span className="text-xs text-muted-foreground">
                                  +{contact.tags.length - 2}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {getRelationshipIcon(contact.relationship)}
                          <span className="ml-2">{relationshipTypes[contact.relationship]}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getConnectionColor(contact.connectionStrength)}>
                          {connectionStrengths[contact.connectionStrength]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                          {new Date(contact.lastContact).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        {contact.canProvideReferral ? (
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                            <Handshake className="mr-1 h-3 w-3" />
                            Available
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground text-sm">N/A</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditContact(contact)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteContact(contact.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredContacts.length === 0 && (
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold">No contacts found</h3>
                  <p className="text-muted-foreground">
                    {searchTerm || relationshipFilter !== "all"
                      ? "Try adjusting your search or filter criteria"
                      : "Start building your network by adding your first contact"
                    }
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Networking Activities</h2>
            <Dialog open={showActivityDialog} onOpenChange={setShowActivityDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Log Activity
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log Networking Activity</DialogTitle>
                  <DialogDescription>
                    Record an interaction with one of your contacts
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactId">Contact*</Label>
                    <Select value={activityForm.contactId} onValueChange={(value) => setActivityForm(prev => ({ ...prev, contactId: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a contact" />
                      </SelectTrigger>
                      <SelectContent>
                        {contacts.map((contact) => (
                          <SelectItem key={contact.id} value={contact.id}>
                            {contact.name} - {contact.company}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="activityType">Activity Type</Label>
                      <Select value={activityForm.type} onValueChange={(value) => setActivityForm(prev => ({ ...prev, type: value as NetworkingActivity['type'] }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(activityTypes).map(([key, label]) => (
                            <SelectItem key={key} value={key}>{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="activityDate">Date</Label>
                      <Input
                        id="activityDate"
                        type="date"
                        value={activityForm.date}
                        onChange={(e) => setActivityForm(prev => ({ ...prev, date: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description*</Label>
                    <Textarea
                      id="description"
                      value={activityForm.description}
                      onChange={(e) => setActivityForm(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="What happened in this interaction?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="outcome">Outcome</Label>
                    <Textarea
                      id="outcome"
                      value={activityForm.outcome}
                      onChange={(e) => setActivityForm(prev => ({ ...prev, outcome: e.target.value }))}
                      placeholder="What was the result or response?"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nextAction">Next Action</Label>
                      <Input
                        id="nextAction"
                        value={activityForm.nextAction}
                        onChange={(e) => setActivityForm(prev => ({ ...prev, nextAction: e.target.value }))}
                        placeholder="What&apos;s the next step?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nextActionDate">Next Action Date</Label>
                      <Input
                        id="nextActionDate"
                        type="date"
                        value={activityForm.nextActionDate}
                        onChange={(e) => setActivityForm(prev => ({ ...prev, nextActionDate: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={handleAddActivity} disabled={!activityForm.contactId || !activityForm.description}>
                    Log Activity
                  </Button>
                  <Button variant="outline" onClick={() => {
                    setShowActivityDialog(false)
                    resetActivityForm()
                  }}>
                    Cancel
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your latest networking interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="border-l-2 border-muted pl-4 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {activityTypes[activity.type]}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(activity.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="font-medium">{activity.contactName}</div>
                      <div className="text-sm text-muted-foreground">{activity.description}</div>
                      {activity.outcome && (
                        <div className="text-sm">→ {activity.outcome}</div>
                      )}
                    </div>
                  ))}
                  
                  {recentActivities.length === 0 && (
                    <div className="text-center py-6">
                      <MessageCircle className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mt-2">
                        No activities logged yet
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Actions</CardTitle>
                <CardDescription>Follow-ups and next steps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingActions.map((activity) => (
                    <div key={activity.id} className="border rounded-lg p-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="font-medium">{activity.contactName}</div>
                          <div className="text-sm text-muted-foreground">
                            {activity.nextAction}
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {activity.nextActionDate && new Date(activity.nextActionDate).toLocaleDateString()}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  
                  {upcomingActions.length === 0 && (
                    <div className="text-center py-6">
                      <Calendar className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mt-2">
                        No upcoming actions scheduled
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Networking Goals</h2>
            <p className="text-muted-foreground">
              Set and track your networking objectives
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Monthly Goals
                </CardTitle>
                <CardDescription>
                  Your networking targets for this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New connections</span>
                    <div className="text-right">
                      <div className="font-medium">2 / 5</div>
                      <div className="text-xs text-muted-foreground">40%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Follow-up contacts</span>
                    <div className="text-right">
                      <div className="font-medium">3 / 8</div>
                      <div className="text-xs text-muted-foreground">38%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Coffee chats</span>
                    <div className="text-right">
                      <div className="font-medium">1 / 3</div>
                      <div className="text-xs text-muted-foreground">33%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Referral requests</span>
                    <div className="text-right">
                      <div className="font-medium">0 / 2</div>
                      <div className="text-xs text-muted-foreground">0%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coffee className="mr-2 h-5 w-5" />
                  Networking Tips
                </CardTitle>
                <CardDescription>
                  Best practices for professional networking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>• Follow up within 24-48 hours after meeting</div>
                  <div>• Offer value before asking for favors</div>
                  <div>• Be specific in your requests</div>
                  <div>• Keep interactions authentic and personal</div>
                  <div>• Maintain regular contact with key connections</div>
                  <div>• Always express gratitude for help received</div>
                  <div>• Share relevant opportunities with your network</div>
                  <div>• Attend industry events and meetups</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}