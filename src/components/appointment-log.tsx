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
import { Plus, Calendar, Clock, Stethoscope, FileText, MapPin, Phone, User } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface Appointment {
  id: string
  date: string
  time: string
  type: 'prenatal' | 'ultrasound' | 'pediatric' | 'specialist' | 'other'
  provider: string
  location: string
  reason: string
  notes?: string
  results?: string
  followUp?: string
  completed: boolean
}

interface Provider {
  id: string
  name: string
  specialty: string
  phone: string
  address: string
}

export function AppointmentLog() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      date: "2024-01-20",
      time: "10:00",
      type: "prenatal",
      provider: "Dr. Sarah Johnson",
      location: "Women's Health Clinic",
      reason: "20-week anatomy scan",
      notes: "Routine checkup and ultrasound",
      results: "Baby is developing normally, measurements on track",
      followUp: "Next appointment in 4 weeks",
      completed: true
    },
    {
      id: "2",
      date: "2024-01-25",
      time: "14:30",
      type: "prenatal",
      provider: "Dr. Sarah Johnson", 
      location: "Women's Health Clinic",
      reason: "Regular prenatal checkup",
      completed: false
    }
  ])

  const [providers, setProviders] = useState<Provider[]>([
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Obstetrics & Gynecology",
      phone: "(555) 123-4567",
      address: "123 Medical Center Dr, Suite 200"
    },
    {
      id: "2", 
      name: "Dr. Michael Chen",
      specialty: "Pediatrics",
      phone: "(555) 234-5678",
      address: "456 Children's Hospital Way"
    }
  ])

  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    type: 'prenatal' as 'prenatal' | 'ultrasound' | 'pediatric' | 'specialist' | 'other',
    provider: '',
    location: '',
    reason: '',
    notes: ''
  })

  const [newProvider, setNewProvider] = useState({
    name: '',
    specialty: '',
    phone: '',
    address: ''
  })

  const [showAddProvider, setShowAddProvider] = useState(false)

  const addAppointment = () => {
    if (!newAppointment.date || !newAppointment.time || !newAppointment.provider) return

    const appointment: Appointment = {
      id: Date.now().toString(),
      date: newAppointment.date,
      time: newAppointment.time,
      type: newAppointment.type,
      provider: newAppointment.provider,
      location: newAppointment.location,
      reason: newAppointment.reason,
      notes: newAppointment.notes || undefined,
      completed: false
    }

    setAppointments([...appointments, appointment].sort((a, b) => 
      new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime()
    ))

    setNewAppointment({
      date: '',
      time: '',
      type: 'prenatal',
      provider: '',
      location: '',
      reason: '',
      notes: ''
    })
  }

  const addProvider = () => {
    if (!newProvider.name || !newProvider.specialty) return

    const provider: Provider = {
      id: Date.now().toString(),
      name: newProvider.name,
      specialty: newProvider.specialty,
      phone: newProvider.phone,
      address: newProvider.address
    }

    setProviders([...providers, provider])
    setNewProvider({ name: '', specialty: '', phone: '', address: '' })
    setShowAddProvider(false)
  }

  const markCompleted = (id: string, results?: string, followUp?: string) => {
    setAppointments(appointments.map(apt => 
      apt.id === id 
        ? { ...apt, completed: true, results, followUp }
        : apt
    ))
  }

  const getUpcomingAppointments = () => {
    const now = new Date()
    return appointments
      .filter(apt => !apt.completed && new Date(`${apt.date}T${apt.time}`) >= now)
      .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime())
  }

  const getRecentAppointments = () => {
    return appointments
      .filter(apt => apt.completed)
      .sort((a, b) => new Date(`${b.date}T${b.time}`).getTime() - new Date(`${a.date}T${a.time}`).getTime())
      .slice(0, 5)
  }

  const getAppointmentsByType = () => {
    const byType: Record<string, number> = {}
    appointments.forEach(apt => {
      byType[apt.type] = (byType[apt.type] || 0) + 1
    })
    return byType
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const upcomingAppointments = getUpcomingAppointments()
  const recentAppointments = getRecentAppointments()
  const appointmentsByType = getAppointmentsByType()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Doctor Appointment Log</h2>
          <p className="text-muted-foreground">Track medical appointments and health records</p>
        </div>
        <Button onClick={() => setNewAppointment({...newAppointment, date: new Date().toISOString().split('T')[0]})}>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
            <p className="text-xs text-muted-foreground">
              appointments scheduled
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {appointments.filter(apt => {
                const aptDate = new Date(apt.date)
                const now = new Date()
                return aptDate.getMonth() === now.getMonth() && 
                       aptDate.getFullYear() === now.getFullYear()
              }).length}
            </div>
            <p className="text-xs text-muted-foreground">
              appointments this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Providers</CardTitle>
            <Stethoscope className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{providers.length}</div>
            <p className="text-xs text-muted-foreground">
              healthcare providers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {appointments.filter(apt => apt.completed).length}
            </div>
            <p className="text-xs text-muted-foreground">
              appointments completed
            </p>
          </CardContent>
        </Card>
      </div>

      {upcomingAppointments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Next Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="font-semibold text-lg">
                    {upcomingAppointments[0].reason || 'Medical Appointment'}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(upcomingAppointments[0].date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTime(upcomingAppointments[0].time)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {upcomingAppointments[0].provider}
                    </span>
                  </div>
                  {upcomingAppointments[0].location && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {upcomingAppointments[0].location}
                    </div>
                  )}
                </div>
                <Badge variant="secondary" className="capitalize">
                  {upcomingAppointments[0].type}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Schedule New Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="apt-date">Date</Label>
              <Input
                id="apt-date"
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apt-time">Time</Label>
              <Input
                id="apt-time"
                type="time"
                value={newAppointment.time}
                onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apt-type">Appointment Type</Label>
              <Select 
                value={newAppointment.type} 
                onValueChange={(value: 'prenatal' | 'ultrasound' | 'pediatric' | 'specialist' | 'other') => 
                  setNewAppointment({...newAppointment, type: value})
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prenatal">Prenatal Checkup</SelectItem>
                  <SelectItem value="ultrasound">Ultrasound</SelectItem>
                  <SelectItem value="pediatric">Pediatric Visit</SelectItem>
                  <SelectItem value="specialist">Specialist Consultation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="apt-provider">Healthcare Provider</Label>
              <Select 
                value={newAppointment.provider} 
                onValueChange={(value) => setNewAppointment({...newAppointment, provider: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  {providers.map(provider => (
                    <SelectItem key={provider.id} value={provider.name}>
                      {provider.name} - {provider.specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="apt-location">Location</Label>
              <Input
                id="apt-location"
                value={newAppointment.location}
                onChange={(e) => setNewAppointment({...newAppointment, location: e.target.value})}
                placeholder="Clinic or hospital name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apt-reason">Reason for Visit</Label>
              <Input
                id="apt-reason"
                value={newAppointment.reason}
                onChange={(e) => setNewAppointment({...newAppointment, reason: e.target.value})}
                placeholder="e.g., Regular checkup, Follow-up"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="apt-notes">Notes (optional)</Label>
              <Textarea
                id="apt-notes"
                value={newAppointment.notes}
                onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                placeholder="Any additional notes or preparation needed"
                rows={3}
              />
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            <Button onClick={addAppointment}>
              <Plus className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
            <Button variant="outline" onClick={() => setShowAddProvider(true)}>
              <User className="h-4 w-4 mr-2" />
              Add Provider
            </Button>
          </div>
        </CardContent>
      </Card>

      {showAddProvider && (
        <Card>
          <CardHeader>
            <CardTitle>Add Healthcare Provider</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="provider-name">Provider Name</Label>
                <Input
                  id="provider-name"
                  value={newProvider.name}
                  onChange={(e) => setNewProvider({...newProvider, name: e.target.value})}
                  placeholder="Dr. John Smith"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider-specialty">Specialty</Label>
                <Input
                  id="provider-specialty"
                  value={newProvider.specialty}
                  onChange={(e) => setNewProvider({...newProvider, specialty: e.target.value})}
                  placeholder="e.g., Obstetrics, Pediatrics"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider-phone">Phone Number</Label>
                <Input
                  id="provider-phone"
                  value={newProvider.phone}
                  onChange={(e) => setNewProvider({...newProvider, phone: e.target.value})}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider-address">Address</Label>
                <Input
                  id="provider-address"
                  value={newProvider.address}
                  onChange={(e) => setNewProvider({...newProvider, address: e.target.value})}
                  placeholder="123 Medical Center Dr"
                />
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <Button onClick={addProvider}>Add Provider</Button>
              <Button variant="outline" onClick={() => setShowAddProvider(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="providers">Providers</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled medical appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingAppointments.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No upcoming appointments scheduled.
                  </p>
                ) : (
                  upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{appointment.reason}</span>
                          <Badge variant="secondary" className="capitalize">
                            {appointment.type}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(appointment.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatTime(appointment.time)}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {appointment.provider}
                          </span>
                        </div>
                        
                        {appointment.location && (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {appointment.location}
                          </div>
                        )}
                        
                        {appointment.notes && (
                          <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                        )}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => markCompleted(appointment.id)}
                      >
                        Mark Complete
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appointment History</CardTitle>
              <CardDescription>Your completed medical appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAppointments.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No completed appointments yet.
                  </p>
                ) : (
                  recentAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{appointment.reason}</span>
                          <Badge variant="secondary" className="capitalize">
                            {appointment.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Completed
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(appointment.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {appointment.provider}
                        </span>
                      </div>
                      
                      {appointment.results && (
                        <div className="mt-3 p-3 bg-muted rounded-lg">
                          <h4 className="font-semibold text-sm mb-1">Results & Notes</h4>
                          <p className="text-sm">{appointment.results}</p>
                        </div>
                      )}
                      
                      {appointment.followUp && (
                        <div className="mt-2 p-3 bg-muted rounded-lg">
                          <h4 className="font-semibold text-sm mb-1">Follow-up</h4>
                          <p className="text-sm">{appointment.followUp}</p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="providers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Healthcare Providers</CardTitle>
              <CardDescription>Your medical team contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {providers.map((provider) => (
                  <div key={provider.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-semibold">{provider.name}</h3>
                          <p className="text-sm text-muted-foreground">{provider.specialty}</p>
                        </div>
                        
                        {provider.phone && (
                          <div className="flex items-center gap-1 text-sm">
                            <Phone className="h-3 w-3" />
                            {provider.phone}
                          </div>
                        )}
                        
                        {provider.address && (
                          <div className="flex items-center gap-1 text-sm">
                            <MapPin className="h-3 w-3" />
                            {provider.address}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        {appointments.filter(apt => apt.provider === provider.name).length} appointments
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}