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
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Stethoscope,
  Plus,
  Calendar,
  FileText,
  User,
  Phone,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  Heart,
} from "lucide-react"

interface Appointment {
  id: string
  date: string
  time: string
  provider: string
  type: string
  location: string
  notes: string
  completed: boolean
}

interface Provider {
  id: string
  name: string
  specialty: string
  phone: string
  address: string
  notes: string
}

interface BirthPlanItem {
  id: string
  category: string
  preference: string
  notes: string
}

export function HealthcareCoordination() {
  const { babyPlanningData } = useBabyPlanning()
  
  const [appointments] = useState<Appointment[]>([
    {
      id: '1',
      date: '2024-02-15',
      time: '10:00 AM',
      provider: 'Dr. Johnson',
      type: 'Monthly Checkup',
      location: 'Women\'s Health Center',
      notes: 'Routine prenatal visit, blood pressure check',
      completed: true
    },
    {
      id: '2',
      date: '2024-03-20',
      time: '2:30 PM',
      provider: 'Dr. Johnson',
      type: 'Anatomy Scan',
      location: 'Imaging Center',
      notes: 'Detailed ultrasound at 20 weeks',
      completed: false
    },
    {
      id: '3',
      date: '2024-04-10',
      time: '11:15 AM',
      provider: 'Dr. Johnson',
      type: 'Monthly Checkup',
      location: 'Women\'s Health Center',
      notes: 'Glucose tolerance test',
      completed: false
    }
  ])

  const [providers] = useState<Provider[]>([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'OB-GYN',
      phone: '(555) 123-4567',
      address: '123 Medical Blvd, Suite 200',
      notes: 'Primary OB, very experienced with high-risk pregnancies'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrician',
      phone: '(555) 234-5678',
      address: '456 Children\'s Way, Suite 100',
      notes: 'Highly recommended for newborn care'
    },
    {
      id: '3',
      name: 'Lisa Martinez, CNM',
      specialty: 'Certified Nurse Midwife',
      phone: '(555) 345-6789',
      address: '789 Birth Center Ave',
      notes: 'Natural birth specialist, very supportive'
    }
  ])

  const [birthPlan, setBirthPlan] = useState<BirthPlanItem[]>([
    { id: '1', category: 'Labor Preferences', preference: 'Natural pain management preferred', notes: 'Would like to avoid epidural if possible' },
    { id: '2', category: 'Birth Position', preference: 'Upright birthing positions', notes: 'Squatting or side-lying preferred' },
    { id: '3', category: 'Immediate Postpartum', preference: 'Delayed cord clamping', notes: 'Wait for cord to stop pulsing' },
    { id: '4', category: 'Newborn Care', preference: 'Skin-to-skin contact immediately', notes: 'Want baby placed on chest right after birth' },
    { id: '5', category: 'Feeding', preference: 'Breastfeeding support', notes: 'Want lactation consultant visit' }
  ])

  const upcomingAppointments = appointments.filter(apt => !apt.completed)
  const completedAppointments = appointments.filter(apt => apt.completed)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Stethoscope className="mr-2 h-8 w-8" />
          Healthcare Coordination
        </h1>
        <p className="text-muted-foreground">
          Manage your prenatal care, appointments, and birth planning
        </p>
      </div>

      {/* Current Healthcare Team */}
      <Card>
        <CardHeader>
          <CardTitle>Current Healthcare Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label className="text-sm font-medium">Primary Doctor</Label>
              <p className="text-sm text-muted-foreground">
                {babyPlanningData.doctorName || "Not assigned"}
              </p>
            </div>
            <div>
              <Label className="text-sm font-medium">Hospital/Birth Center</Label>
              <p className="text-sm text-muted-foreground">
                {babyPlanningData.hospitalName || "Not selected"}
              </p>
            </div>
            <div>
              <Label className="text-sm font-medium">Birth Plan Preference</Label>
              <p className="text-sm text-muted-foreground">
                {babyPlanningData.birthPlanType.charAt(0).toUpperCase() + 
                 babyPlanningData.birthPlanType.slice(1).replace('-', ' ')}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            {babyPlanningData.doula && (
              <Badge variant="outline">Working with Doula</Badge>
            )}
            {babyPlanningData.midwife && (
              <Badge variant="outline">Working with Midwife</Badge>
            )}
            {babyPlanningData.highRiskPregnancy && (
              <Badge variant="destructive">High-Risk Pregnancy</Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Main Tabs */}
      <Tabs defaultValue="appointments" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="providers">Care Team</TabsTrigger>
          <TabsTrigger value="birth-plan">Birth Plan</TabsTrigger>
          <TabsTrigger value="records">Health Records</TabsTrigger>
        </TabsList>

        <TabsContent value="appointments" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Prenatal Appointments</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Appointment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule New Appointment</DialogTitle>
                  <DialogDescription>
                    Add a new prenatal or medical appointment
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="apt-date">Date</Label>
                      <Input id="apt-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="apt-time">Time</Label>
                      <Input id="apt-time" type="time" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="apt-provider">Healthcare Provider</Label>
                    <Input id="apt-provider" placeholder="Dr. Johnson" />
                  </div>
                  <div>
                    <Label htmlFor="apt-type">Appointment Type</Label>
                    <Input id="apt-type" placeholder="Monthly Checkup, Ultrasound, etc." />
                  </div>
                  <div>
                    <Label htmlFor="apt-location">Location</Label>
                    <Input id="apt-location" placeholder="Office address or department" />
                  </div>
                  <div>
                    <Label htmlFor="apt-notes">Notes</Label>
                    <Textarea id="apt-notes" placeholder="What to discuss, tests planned, etc." />
                  </div>
                  <Button className="w-full">Schedule Appointment</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            <div>
              <h4 className="font-medium mb-3">Upcoming Appointments</h4>
              <div className="space-y-3">
                {upcomingAppointments.map((appointment) => (
                  <Card key={appointment.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-blue-600" />
                            <div className="font-medium">{appointment.type}</div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <span>{new Date(appointment.date).toLocaleDateString()}</span>
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <User className="h-3 w-3" />
                            <span>{appointment.provider}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{appointment.location}</span>
                          </div>
                          {appointment.notes && (
                            <div className="text-sm text-muted-foreground mt-2">
                              {appointment.notes}
                            </div>
                          )}
                        </div>
                        <Badge variant="outline">Scheduled</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Past Appointments</h4>
              <div className="space-y-3">
                {completedAppointments.map((appointment) => (
                  <Card key={appointment.id} className="opacity-75">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <div className="font-medium">{appointment.type}</div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                          </div>
                          <div className="text-sm text-muted-foreground">{appointment.provider}</div>
                          {appointment.notes && (
                            <div className="text-sm text-muted-foreground mt-2">
                              {appointment.notes}
                            </div>
                          )}
                        </div>
                        <Badge variant="secondary">Completed</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="providers" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Healthcare Providers</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Provider
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Healthcare Provider</DialogTitle>
                  <DialogDescription>
                    Add a new doctor, midwife, or other care provider
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="provider-name">Name</Label>
                    <Input id="provider-name" placeholder="Dr. Jane Smith" />
                  </div>
                  <div>
                    <Label htmlFor="provider-specialty">Specialty</Label>
                    <Input id="provider-specialty" placeholder="OB-GYN, Pediatrician, etc." />
                  </div>
                  <div>
                    <Label htmlFor="provider-phone">Phone Number</Label>
                    <Input id="provider-phone" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="provider-address">Address</Label>
                    <Textarea id="provider-address" placeholder="Office address" />
                  </div>
                  <div>
                    <Label htmlFor="provider-notes">Notes</Label>
                    <Textarea id="provider-notes" placeholder="Any special notes or preferences" />
                  </div>
                  <Button className="w-full">Add Provider</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            {providers.map((provider) => (
              <Card key={provider.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium text-lg">{provider.name}</div>
                        <div className="text-sm text-muted-foreground">{provider.specialty}</div>
                      </div>
                      <Badge variant="outline">{provider.specialty}</Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{provider.phone}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span>{provider.address}</span>
                      </div>
                    </div>
                    
                    {provider.notes && (
                      <div className="text-sm text-muted-foreground p-3 bg-muted rounded-lg">
                        {provider.notes}
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Contact</Button>
                      <Button variant="outline" size="sm">Schedule</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="birth-plan" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Birth Plan Preferences</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Preference
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Birth Plan Preference</DialogTitle>
                  <DialogDescription>
                    Add a specific preference for your labor and delivery
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bp-category">Category</Label>
                    <Input id="bp-category" placeholder="Labor Preferences, Pain Management, etc." />
                  </div>
                  <div>
                    <Label htmlFor="bp-preference">Preference</Label>
                    <Input id="bp-preference" placeholder="What you prefer for this aspect" />
                  </div>
                  <div>
                    <Label htmlFor="bp-notes">Notes</Label>
                    <Textarea id="bp-notes" placeholder="Additional details or reasoning" />
                  </div>
                  <Button className="w-full">Add Preference</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {birthPlan.map((item, index) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="text-xs mb-2">{item.category}</Badge>
                        <div className="font-medium">{item.preference}</div>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    {item.notes && (
                      <div className="text-sm text-muted-foreground">{item.notes}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />
                Important Reminders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>• Discuss your birth plan with your healthcare provider during appointments</div>
              <div>• Remember that birth plans are flexible - be open to changes if needed</div>
              <div>• Bring copies of your birth plan to the hospital or birth center</div>
              <div>• Share your preferences with your support person/partner</div>
              <div>• Consider taking a childbirth class to better understand your options</div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="records" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Health Records & Test Results</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Record
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Health Record</DialogTitle>
                  <DialogDescription>
                    Log test results, vital signs, or other health information
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="record-date">Date</Label>
                    <Input id="record-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="record-type">Type</Label>
                    <Input id="record-type" placeholder="Blood test, ultrasound, vital signs" />
                  </div>
                  <div>
                    <Label htmlFor="record-results">Results/Notes</Label>
                    <Textarea id="record-results" placeholder="Test results and any notes" />
                  </div>
                  <div>
                    <Label htmlFor="record-provider">Provider</Label>
                    <Input id="record-provider" placeholder="Who performed/ordered the test" />
                  </div>
                  <Button className="w-full">Add Record</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-red-600" />
                  Vital Signs Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">Blood Pressure</span>
                  <span className="text-sm text-muted-foreground">120/80 (2/15/24)</span>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">Weight</span>
                  <span className="text-sm text-muted-foreground">154 lbs (2/15/24)</span>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">Fundal Height</span>
                  <span className="text-sm text-muted-foreground">20 cm (2/15/24)</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  <Plus className="mr-2 h-4 w-4" />
                  Log New Vitals
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" />
                  Test Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded space-y-1">
                  <div className="font-medium text-sm">Blood Work - First Trimester</div>
                  <div className="text-xs text-muted-foreground">January 15, 2024</div>
                  <div className="text-xs">All results normal, iron levels good</div>
                </div>
                <div className="p-3 border rounded space-y-1">
                  <div className="font-medium text-sm">Ultrasound - 12 weeks</div>
                  <div className="text-xs text-muted-foreground">January 30, 2024</div>
                  <div className="text-xs">Baby measuring on track, heartbeat 160 bpm</div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Test Result
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Doctor's Office</Label>
                  <div className="text-sm text-muted-foreground">(555) 123-4567</div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">After-Hours Line</Label>
                  <div className="text-sm text-muted-foreground">(555) 123-4568</div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Hospital Labor & Delivery</Label>
                  <div className="text-sm text-muted-foreground">(555) 123-4569</div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Emergency</Label>
                  <div className="text-sm text-muted-foreground">911</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}