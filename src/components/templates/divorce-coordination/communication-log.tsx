"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { 
  Plus,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Video,
  Users,
  AlertTriangle,
  Clock,
  Trash2,
  Search
} from "lucide-react"
import { useDivorceCoordination } from "@/contexts/divorce-coordination-context"

interface Communication {
  id: string
  type: 'email' | 'phone' | 'text' | 'in-person' | 'video-call' | 'letter' | 'legal-document' | 'other'
  participants: string[]
  subject: string
  content: string
  date: string
  time: string
  tone: 'professional' | 'neutral' | 'tense' | 'cooperative' | 'hostile'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  followUpNeeded: boolean
  followUpDate?: string
  tags: string[]
  attachments?: string[]
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export function CommunicationLog() {
  const { data, updateData } = useDivorceCoordination()
  const [communications, setCommunications] = useState<Communication[]>([])
  const [isAddingCommunication, setIsAddingCommunication] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [filterTone, setFilterTone] = useState<string>('all')

  const [formData, setFormData] = useState({
    type: 'email' as Communication['type'],
    participants: [] as string[],
    participantInput: '',
    subject: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    tone: 'neutral' as Communication['tone'],
    priority: 'medium' as Communication['priority'],
    followUpNeeded: false,
    followUpDate: '',
    tagsInput: '',
    notes: '',
  })

  useEffect(() => {
    const savedCommunications = localStorage.getItem('divorce-coordination-communication-log')
    if (savedCommunications) {
      const parsed = JSON.parse(savedCommunications)
      setCommunications(parsed.map((comm: any) => ({
        ...comm,
        createdAt: new Date(comm.createdAt),
        updatedAt: new Date(comm.updatedAt),
      })))
    }
  }, [])

  const saveCommunications = (newCommunications: Communication[]) => {
    setCommunications(newCommunications)
    localStorage.setItem('divorce-coordination-communication-log', JSON.stringify(newCommunications))
  }

  const addCommunication = () => {
    const newCommunication: Communication = {
      id: Date.now().toString(),
      participants: formData.participants,
      subject: formData.subject,
      content: formData.content,
      type: formData.type,
      date: formData.date,
      time: formData.time,
      tone: formData.tone,
      priority: formData.priority,
      followUpNeeded: formData.followUpNeeded,
      followUpDate: formData.followUpDate,
      tags: formData.tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag),
      notes: formData.notes,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveCommunications([...communications, newCommunication])
    resetForm()
    setIsAddingCommunication(false)
  }

  const updateCommunication = (id: string, updates: Partial<Communication>) => {
    const updatedCommunications = communications.map(comm => 
      comm.id === id 
        ? { ...comm, ...updates, updatedAt: new Date() }
        : comm
    )
    saveCommunications(updatedCommunications)
  }

  const deleteCommunication = (id: string) => {
    const filteredCommunications = communications.filter(comm => comm.id !== id)
    saveCommunications(filteredCommunications)
  }

  const resetForm = () => {
    setFormData({
      type: 'email',
      participants: [],
      participantInput: '',
      subject: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5),
      tone: 'neutral',
      priority: 'medium',
      followUpNeeded: false,
      followUpDate: '',
      tagsInput: '',
      notes: '',
    })
  }

  const addParticipant = () => {
    if (formData.participantInput.trim() && !formData.participants.includes(formData.participantInput.trim())) {
      setFormData({
        ...formData,
        participants: [...formData.participants, formData.participantInput.trim()],
        participantInput: ''
      })
    }
  }

  const removeParticipant = (participant: string) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter(p => p !== participant)
    })
  }

  const filteredCommunications = communications.filter(comm => {
    const matchesSearch = comm.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comm.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comm.participants.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesType = filterType === 'all' || comm.type === filterType
    const matchesTone = filterTone === 'all' || comm.tone === filterTone

    return matchesSearch && matchesType && matchesTone
  }).sort((a, b) => new Date(b.date + ' ' + b.time).getTime() - new Date(a.date + ' ' + a.time).getTime())

  const getTypeIcon = (type: Communication['type']) => {
    switch (type) {
      case 'email':
        return <Mail className="h-4 w-4" />
      case 'phone':
        return <Phone className="h-4 w-4" />
      case 'video-call':
        return <Video className="h-4 w-4" />
      case 'in-person':
        return <Users className="h-4 w-4" />
      case 'legal-document':
        return <FileText className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const getToneBadge = (tone: Communication['tone']) => {
    switch (tone) {
      case 'professional':
        return <Badge variant="default" className="bg-blue-600">Professional</Badge>
      case 'cooperative':
        return <Badge variant="default" className="bg-green-600">Cooperative</Badge>
      case 'neutral':
        return <Badge variant="secondary">Neutral</Badge>
      case 'tense':
        return <Badge variant="destructive" className="bg-orange-600">Tense</Badge>
      case 'hostile':
        return <Badge variant="destructive">Hostile</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: Communication['priority']) => {
    switch (priority) {
      case 'urgent':
        return <Badge variant="destructive">Urgent</Badge>
      case 'high':
        return <Badge variant="destructive" className="bg-orange-600">High</Badge>
      case 'medium':
        return <Badge variant="secondary">Medium</Badge>
      default:
        return <Badge variant="outline">Low</Badge>
    }
  }

  const needsFollowUp = communications.filter(comm => 
    comm.followUpNeeded && (!comm.followUpDate || new Date(comm.followUpDate) <= new Date())
  ).length

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Communication Log</h1>
          <p className="text-muted-foreground">Track all communications with your ex-spouse and legal team</p>
        </div>
        <Dialog open={isAddingCommunication} onOpenChange={setIsAddingCommunication}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Log Communication
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Log Communication</DialogTitle>
              <DialogDescription>
                Record a communication interaction for documentation and tracking.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={formData.type} onValueChange={(value: Communication['type']) => setFormData({...formData, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="text">Text Message</SelectItem>
                      <SelectItem value="video-call">Video Call</SelectItem>
                      <SelectItem value="in-person">In-Person</SelectItem>
                      <SelectItem value="letter">Letter</SelectItem>
                      <SelectItem value="legal-document">Legal Document</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={formData.priority} onValueChange={(value: Communication['priority']) => setFormData({...formData, priority: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Participants</Label>
                <div className="flex gap-2">
                  <Input
                    value={formData.participantInput}
                    onChange={(e) => setFormData({...formData, participantInput: e.target.value})}
                    placeholder="e.g., Ex-spouse, Attorney Smith"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addParticipant())}
                  />
                  <Button type="button" onClick={addParticipant}>Add</Button>
                </div>
                {formData.participants.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.participants.map((participant) => (
                      <Badge key={participant} variant="secondary" className="cursor-pointer" onClick={() => removeParticipant(participant)}>
                        {participant} ✕
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="subject">Subject/Topic</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="e.g., Child custody schedule discussion"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tone">Tone/Atmosphere</Label>
                <Select value={formData.tone} onValueChange={(value: Communication['tone']) => setFormData({...formData, tone: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="cooperative">Cooperative</SelectItem>
                    <SelectItem value="neutral">Neutral</SelectItem>
                    <SelectItem value="tense">Tense</SelectItem>
                    <SelectItem value="hostile">Hostile</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="content">Content/Summary</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="Describe what was discussed or communicated..."
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="followUp"
                  checked={formData.followUpNeeded}
                  onChange={(e) => setFormData({...formData, followUpNeeded: e.target.checked})}
                  className="rounded"
                />
                <Label htmlFor="followUp">Follow-up needed</Label>
              </div>

              {formData.followUpNeeded && (
                <div className="grid gap-2">
                  <Label htmlFor="followUpDate">Follow-up Date</Label>
                  <Input
                    id="followUpDate"
                    type="date"
                    value={formData.followUpDate}
                    onChange={(e) => setFormData({...formData, followUpDate: e.target.value})}
                  />
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tagsInput}
                  onChange={(e) => setFormData({...formData, tagsInput: e.target.value})}
                  placeholder="e.g., custody, finances, schedule"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Any additional observations or notes..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addCommunication}>
                Log Communication
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Communications</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{communications.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {communications.filter(comm => {
                const commDate = new Date(comm.date)
                const now = new Date()
                return commDate.getMonth() === now.getMonth() && commDate.getFullYear() === now.getFullYear()
              }).length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Needs Follow-up</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{needsFollowUp}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hostile Tone</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {communications.filter(comm => comm.tone === 'hostile').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Communications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search communications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="in-person">In-Person</SelectItem>
                <SelectItem value="video-call">Video Call</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterTone} onValueChange={setFilterTone}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tones</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="cooperative">Cooperative</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="tense">Tense</SelectItem>
                <SelectItem value="hostile">Hostile</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Communications List */}
      <Card>
        <CardHeader>
          <CardTitle>Communications</CardTitle>
          <CardDescription>All logged communications ({filteredCommunications.length})</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredCommunications.length === 0 ? (
            <div className="text-center py-8">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {communications.length === 0 
                  ? "No communications logged yet. Add your first entry to get started!"
                  : "No communications match your current filters."
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCommunications.map((comm) => (
                <div key={comm.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(comm.type)}
                      <div>
                        <h3 className="font-semibold">{comm.subject}</h3>
                        <div className="text-sm text-muted-foreground">
                          {new Date(comm.date + ' ' + comm.time).toLocaleString()} • 
                          With: {comm.participants.join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {getToneBadge(comm.tone)}
                      {getPriorityBadge(comm.priority)}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteCommunication(comm.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-sm">
                    <p>{comm.content}</p>
                  </div>

                  {comm.followUpNeeded && (
                    <div className="flex items-center gap-2 text-sm text-orange-600">
                      <Clock className="h-4 w-4" />
                      Follow-up needed{comm.followUpDate && ` by ${new Date(comm.followUpDate).toLocaleDateString()}`}
                    </div>
                  )}

                  {comm.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {comm.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {comm.notes && (
                    <div className="text-xs text-muted-foreground border-t pt-2">
                      <strong>Notes:</strong> {comm.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}