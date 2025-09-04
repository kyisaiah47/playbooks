"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Car, MapPin, Plus, Edit, Trash2, Star, Clock, CheckCircle } from "lucide-react"

interface TestDrive {
  id: string
  vehicle: string
  dealership: string
  date: string
  time: string
  status: 'scheduled' | 'completed' | 'cancelled'
  rating: number
  notes: string
  impressions: {
    comfort: number
    performance: number
    handling: number
    features: number
    overall: number
  }
  followUp: boolean
  followUpDate?: string
}

export function TestDriveManager() {
  const [testDrives, setTestDrives] = useState<TestDrive[]>([
    {
      id: "1",
      vehicle: "2023 Honda Accord EX-L",
      dealership: "Honda Downtown",
      date: "2024-01-20",
      time: "2:00 PM",
      status: "completed",
      rating: 4.5,
      notes: "Smooth ride, excellent interior quality. Highway performance was impressive.",
      impressions: {
        comfort: 5,
        performance: 4,
        handling: 4,
        features: 5,
        overall: 4
      },
      followUp: true,
      followUpDate: "2024-01-25"
    },
    {
      id: "2",
      vehicle: "2022 Toyota Camry XSE",
      dealership: "Toyota City",
      date: "2024-01-22",
      time: "10:30 AM",
      status: "scheduled",
      rating: 0,
      notes: "",
      impressions: {
        comfort: 0,
        performance: 0,
        handling: 0,
        features: 0,
        overall: 0
      },
      followUp: false
    }
  ])

  const [editingDrive, setEditingDrive] = useState<TestDrive | null>(null)

  const addTestDrive = (data: Partial<TestDrive>) => {
    const newDrive: TestDrive = {
      id: Date.now().toString(),
      vehicle: data.vehicle || "",
      dealership: data.dealership || "",
      date: data.date || "",
      time: data.time || "",
      status: data.status || "scheduled",
      rating: data.rating || 0,
      notes: data.notes || "",
      impressions: data.impressions || {
        comfort: 0,
        performance: 0,
        handling: 0,
        features: 0,
        overall: 0
      },
      followUp: data.followUp || false,
      followUpDate: data.followUpDate
    }
    setTestDrives(prev => [...prev, newDrive])
  }

  const updateTestDrive = (id: string, updates: Partial<TestDrive>) => {
    setTestDrives(prev => prev.map(drive => 
      drive.id === id ? { ...drive, ...updates } : drive
    ))
    setEditingDrive(null)
  }

  const deleteTestDrive = (id: string) => {
    setTestDrives(prev => prev.filter(drive => drive.id !== id))
  }

  const getStatusColor = (status: TestDrive['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-500/10 text-green-500'
      case 'scheduled': return 'bg-blue-500/10 text-blue-500'
      case 'cancelled': return 'bg-red-500/10 text-red-500'
    }
  }

  const StarRating = ({ rating, onRatingChange, readOnly = false }: { 
    rating: number; 
    onRatingChange?: (rating: number) => void;
    readOnly?: boolean;
  }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'fill-current text-yellow-400' : 'text-gray-300'} ${!readOnly ? 'cursor-pointer' : ''}`}
            onClick={() => !readOnly && onRatingChange?.(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold flex items-center mb-2">
            <Calendar className="mr-2 h-8 w-8" />
            Test Drive Manager
          </h1>
          <p className="text-muted-foreground">
            Schedule and track your vehicle test drives
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Schedule Test Drive
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Schedule Test Drive</DialogTitle>
            </DialogHeader>
            <TestDriveForm onSubmit={addTestDrive} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {testDrives.map((drive) => (
          <Card key={drive.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center text-lg">
                    <Car className="mr-2 h-4 w-4" />
                    {drive.vehicle}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    {drive.dealership}
                  </p>
                </div>
                <Badge className={getStatusColor(drive.status)}>
                  {drive.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  {drive.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {drive.time}
                </div>
              </div>

              {drive.status === 'completed' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Rating:</span>
                    <div className="flex items-center space-x-2">
                      <StarRating rating={drive.rating} readOnly />
                      <span className="text-sm">{drive.rating}/5</span>
                    </div>
                  </div>

                  {drive.impressions.overall > 0 && (
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-between">
                          <span>Comfort:</span>
                          <StarRating rating={drive.impressions.comfort} readOnly />
                        </div>
                        <div className="flex justify-between">
                          <span>Performance:</span>
                          <StarRating rating={drive.impressions.performance} readOnly />
                        </div>
                        <div className="flex justify-between">
                          <span>Handling:</span>
                          <StarRating rating={drive.impressions.handling} readOnly />
                        </div>
                        <div className="flex justify-between">
                          <span>Features:</span>
                          <StarRating rating={drive.impressions.features} readOnly />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {drive.notes && (
                <p className="text-sm text-muted-foreground">{drive.notes}</p>
              )}

              {drive.followUp && drive.followUpDate && (
                <p className="text-xs text-orange-600 flex items-center">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Follow-up: {drive.followUpDate}
                </p>
              )}

              <div className="flex justify-between pt-2">
                <Button variant="outline" size="sm" onClick={() => setEditingDrive(drive)}>
                  <Edit className="h-3 w-3 mr-1" />
                  {drive.status === 'completed' ? 'View/Edit' : 'Edit'}
                </Button>
                <Button variant="outline" size="sm" onClick={() => deleteTestDrive(drive.id)}>
                  <Trash2 className="h-3 w-3 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {testDrives.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No test drives scheduled</h3>
          <p className="text-muted-foreground">Schedule your first test drive to get started</p>
        </div>
      )}

      {/* Edit/View Dialog */}
      {editingDrive && (
        <Dialog open={!!editingDrive} onOpenChange={() => setEditingDrive(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingDrive.status === 'completed' ? 'Test Drive Results' : 'Edit Test Drive'}
              </DialogTitle>
            </DialogHeader>
            <TestDriveForm 
              drive={editingDrive} 
              onSubmit={(updates) => updateTestDrive(editingDrive.id, updates)} 
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function TestDriveForm({ drive, onSubmit }: { drive?: TestDrive; onSubmit: (data: Partial<TestDrive>) => void }) {
  const [formData, setFormData] = useState({
    vehicle: drive?.vehicle || "",
    dealership: drive?.dealership || "",
    date: drive?.date || "",
    time: drive?.time || "",
    status: drive?.status || "scheduled",
    rating: drive?.rating || 0,
    notes: drive?.notes || "",
    impressions: drive?.impressions || {
      comfort: 0,
      performance: 0,
      handling: 0,
      features: 0,
      overall: 0
    },
    followUp: drive?.followUp || false,
    followUpDate: drive?.followUpDate || ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 cursor-pointer ${star <= rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
            onClick={() => onRatingChange(star)}
          />
        ))}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Vehicle</Label>
          <Input
            value={formData.vehicle}
            onChange={(e) => setFormData(prev => ({ ...prev, vehicle: e.target.value }))}
            placeholder="2023 Honda Accord EX-L"
            required
          />
        </div>
        <div>
          <Label>Dealership</Label>
          <Input
            value={formData.dealership}
            onChange={(e) => setFormData(prev => ({ ...prev, dealership: e.target.value }))}
            placeholder="Honda Downtown"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
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
          <Label>Time</Label>
          <Input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label>Status</Label>
          <select
            className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background rounded-md"
            value={formData.status}
            onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as TestDrive['status'] }))}
          >
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {formData.status === 'completed' && (
        <>
          <div>
            <Label>Overall Rating</Label>
            <div className="flex items-center space-x-2 mt-1">
              <StarRating
                rating={formData.rating}
                onRatingChange={(rating) => setFormData(prev => ({ ...prev, rating }))}
              />
              <span className="text-sm text-muted-foreground">({formData.rating}/5)</span>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Detailed Impressions</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm">Comfort</Label>
                <StarRating
                  rating={formData.impressions.comfort}
                  onRatingChange={(rating) => setFormData(prev => ({ 
                    ...prev, 
                    impressions: { ...prev.impressions, comfort: rating }
                  }))}
                />
              </div>
              <div>
                <Label className="text-sm">Performance</Label>
                <StarRating
                  rating={formData.impressions.performance}
                  onRatingChange={(rating) => setFormData(prev => ({ 
                    ...prev, 
                    impressions: { ...prev.impressions, performance: rating }
                  }))}
                />
              </div>
              <div>
                <Label className="text-sm">Handling</Label>
                <StarRating
                  rating={formData.impressions.handling}
                  onRatingChange={(rating) => setFormData(prev => ({ 
                    ...prev, 
                    impressions: { ...prev.impressions, handling: rating }
                  }))}
                />
              </div>
              <div>
                <Label className="text-sm">Features</Label>
                <StarRating
                  rating={formData.impressions.features}
                  onRatingChange={(rating) => setFormData(prev => ({ 
                    ...prev, 
                    impressions: { ...prev.impressions, features: rating }
                  }))}
                />
              </div>
            </div>
          </div>
        </>
      )}

      <div>
        <Label>Notes</Label>
        <Textarea
          value={formData.notes}
          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
          placeholder="Your impressions, observations, and thoughts about the vehicle..."
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="followUp"
          checked={formData.followUp}
          onChange={(e) => setFormData(prev => ({ ...prev, followUp: e.target.checked }))}
        />
        <Label htmlFor="followUp">Schedule follow-up</Label>
        {formData.followUp && (
          <Input
            type="date"
            value={formData.followUpDate}
            onChange={(e) => setFormData(prev => ({ ...prev, followUpDate: e.target.value }))}
            className="w-auto ml-2"
          />
        )}
      </div>

      <Button type="submit" className="w-full">
        {drive ? 'Update Test Drive' : 'Schedule Test Drive'}
      </Button>
    </form>
  )
}