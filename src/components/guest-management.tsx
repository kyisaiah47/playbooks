"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Plus, Users, Mail, Phone, MapPin, MoreHorizontal, Edit, Trash2, Send, CheckCircle2, XCircle, Clock, UserPlus } from "lucide-react"

const guests = [
  {
    id: 1,
    firstName: "Jennifer",
    lastName: "Wilson",
    email: "jennifer.wilson@email.com",
    phone: "(555) 123-4567",
    relationship: "Bride's Sister",
    category: "Family",
    rsvpStatus: "Attending",
    plusOne: true,
    plusOneName: "Mark Wilson",
    dietaryRestrictions: ["Vegetarian"],
    address: "123 Main St, City, State 12345"
  },
  {
    id: 2,
    firstName: "Robert",
    lastName: "Thompson",
    email: "robert.thompson@email.com",
    phone: "(555) 987-6543",
    relationship: "Groom's Father",
    category: "Family",
    rsvpStatus: "Attending",
    plusOne: true,
    plusOneName: "Linda Thompson",
    dietaryRestrictions: [],
    address: "456 Oak Ave, City, State 12345"
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@email.com",
    phone: "(555) 456-7890",
    relationship: "College Friend",
    category: "Friends",
    rsvpStatus: "Pending",
    plusOne: true,
    plusOneName: "",
    dietaryRestrictions: ["Gluten-Free"],
    address: "789 Pine St, City, State 12345"
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@email.com",
    phone: "(555) 321-0987",
    relationship: "Work Colleague",
    category: "Work",
    rsvpStatus: "Not Attending",
    plusOne: false,
    plusOneName: "",
    dietaryRestrictions: [],
    address: "321 Elm St, City, State 12345"
  }
]

const getRsvpStatusColor = (status: string) => {
  switch (status) {
    case "Attending":
      return "bg-primary/10 text-primary border-primary/20"
    case "Not Attending":
      return "bg-destructive/10 text-destructive border-destructive/20"
    case "Pending":
      return "bg-accent/30 text-accent-foreground border-accent/50"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

const getRsvpIcon = (status: string) => {
  switch (status) {
    case "Attending":
      return <CheckCircle2 className="h-4 w-4 text-primary" />
    case "Not Attending":
      return <XCircle className="h-4 w-4 text-destructive" />
    case "Pending":
      return <Clock className="h-4 w-4 text-accent-foreground" />
    default:
      return <Clock className="h-4 w-4 text-muted-foreground" />
  }
}

export function GuestManagement() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredGuests = guests.filter(guest => 
    guest.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const rsvpStats = {
    attending: guests.filter(g => g.rsvpStatus === "Attending").length,
    notAttending: guests.filter(g => g.rsvpStatus === "Not Attending").length,
    pending: guests.filter(g => g.rsvpStatus === "Pending").length,
    total: guests.length
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Guest Management</h2>
          <p className="text-muted-foreground">Manage your wedding guest list and RSVPs</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Send className="mr-2 h-4 w-4" />
            Send Invitations
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Guest
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Guest</DialogTitle>
                <DialogDescription>
                  Add a new guest to your wedding invitation list.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guest-firstname">First Name</Label>
                    <Input id="guest-firstname" />
                  </div>
                  <div>
                    <Label htmlFor="guest-lastname">Last Name</Label>
                    <Input id="guest-lastname" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="guest-email">Email</Label>
                  <Input id="guest-email" type="email" />
                </div>
                <div>
                  <Label htmlFor="guest-phone">Phone</Label>
                  <Input id="guest-phone" />
                </div>
                <div>
                  <Label htmlFor="guest-relationship">Relationship</Label>
                  <Input id="guest-relationship" placeholder="e.g., Sister, College Friend" />
                </div>
                <div>
                  <Label htmlFor="guest-category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="friends">Friends</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="plus-one" />
                  <Label htmlFor="plus-one">Allow Plus One</Label>
                </div>
                <div>
                  <Label htmlFor="guest-address">Address</Label>
                  <Textarea id="guest-address" rows={3} />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={() => setIsAddDialogOpen(false)}>
                  Add Guest
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invited</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rsvpStats.total}</div>
            <p className="text-xs text-muted-foreground">
              Guests invited
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attending</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{rsvpStats.attending}</div>
            <p className="text-xs text-muted-foreground">
              Confirmed attendance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-accent-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-foreground">{rsvpStats.pending}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting response
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Not Attending</CardTitle>
            <XCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{rsvpStats.notAttending}</div>
            <p className="text-xs text-muted-foreground">
              Declined invitation
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Guest List</CardTitle>
          <CardDescription>Manage your wedding guest list and track RSVPs</CardDescription>
          <div className="flex items-center space-x-2 mt-4">
            <Input
              placeholder="Search guests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Guests ({guests.length})</TabsTrigger>
              <TabsTrigger value="family">Family</TabsTrigger>
              <TabsTrigger value="friends">Friends</TabsTrigger>
              <TabsTrigger value="work">Work</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Guest</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Relationship</TableHead>
                    <TableHead>RSVP Status</TableHead>
                    <TableHead>Plus One</TableHead>
                    <TableHead>Dietary</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredGuests.map((guest) => (
                    <TableRow key={guest.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{guest.firstName} {guest.lastName}</div>
                          <Badge variant="outline" className="text-xs mt-1">
                            {guest.category}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {guest.email}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center">
                            <Phone className="h-3 w-3 mr-1" />
                            {guest.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{guest.relationship}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getRsvpIcon(guest.rsvpStatus)}
                          <Badge className={getRsvpStatusColor(guest.rsvpStatus)} variant="outline">
                            {guest.rsvpStatus}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {guest.plusOne ? (
                            <div className="flex items-center text-primary">
                              <UserPlus className="h-3 w-3 mr-1" />
                              {guest.plusOneName || "Allowed"}
                            </div>
                          ) : (
                            <span className="text-muted-foreground">No</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-xs">
                          {guest.dietaryRestrictions.length > 0 ? (
                            <div className="space-y-1">
                              {guest.dietaryRestrictions.map((restriction, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {restriction}
                                </Badge>
                              ))}
                            </div>
                          ) : (
                            <span className="text-muted-foreground">None</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Send className="mr-2 h-4 w-4" />
                              <span>Send Invitation</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Remove</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}