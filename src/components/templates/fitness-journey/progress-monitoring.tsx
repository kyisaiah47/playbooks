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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus,
  Trash2,
  Weight,
  Ruler,
  TrendingUp,
  TrendingDown,
  Minus,
  Camera
} from "lucide-react"
import { useFitnessJourney } from "@/contexts/fitness-journey-context"

interface WeightLog {
  id: string
  weight: number // lbs
  date: Date
  notes?: string
  createdAt: Date
}

interface MeasurementLog {
  id: string
  bodyPart: 'waist' | 'chest' | 'arms' | 'thighs' | 'hips' | 'neck' | 'other'
  measurement: number // inches
  date: Date
  notes?: string
  createdAt: Date
}

interface ProgressPhoto {
  id: string
  type: 'front' | 'side' | 'back' | 'other'
  date: Date
  notes?: string
  createdAt: Date
}

export function ProgressMonitoring() {
  const { data, updateData } = useFitnessJourney()
  const [weightLogs, setWeightLogs] = useState<WeightLog[]>([])
  const [measurements, setMeasurements] = useState<MeasurementLog[]>([])
  const [photos, setPhotos] = useState<ProgressPhoto[]>([])
  
  const [isAddingWeight, setIsAddingWeight] = useState(false)
  const [isAddingMeasurement, setIsAddingMeasurement] = useState(false)
  const [isAddingPhoto, setIsAddingPhoto] = useState(false)

  // Form states
  const [weightForm, setWeightForm] = useState({
    weight: 0,
    date: new Date().toISOString().split('T')[0],
    notes: '',
  })

  const [measurementForm, setMeasurementForm] = useState({
    bodyPart: 'waist' as MeasurementLog['bodyPart'],
    measurement: 0,
    date: new Date().toISOString().split('T')[0],
    notes: '',
  })

  const [photoForm, setPhotoForm] = useState({
    type: 'front' as ProgressPhoto['type'],
    date: new Date().toISOString().split('T')[0],
    notes: '',
  })

  // Load data from localStorage
  useEffect(() => {
    const savedWeights = localStorage.getItem('fitness-journey-weight-logs')
    if (savedWeights) {
      const parsed = JSON.parse(savedWeights)
      setWeightLogs(parsed.map((w: any) => ({
        ...w,
        date: new Date(w.date),
        createdAt: new Date(w.createdAt)
      })))
    }

    const savedMeasurements = localStorage.getItem('fitness-journey-measurements')
    if (savedMeasurements) {
      const parsed = JSON.parse(savedMeasurements)
      setMeasurements(parsed.map((m: any) => ({
        ...m,
        date: new Date(m.date),
        createdAt: new Date(m.createdAt)
      })))
    }

    const savedPhotos = localStorage.getItem('fitness-journey-photos')
    if (savedPhotos) {
      const parsed = JSON.parse(savedPhotos)
      setPhotos(parsed.map((p: any) => ({
        ...p,
        date: new Date(p.date),
        createdAt: new Date(p.createdAt)
      })))
    }
  }, [])

  // Save functions
  const saveWeightLogs = (newLogs: WeightLog[]) => {
    setWeightLogs(newLogs)
    localStorage.setItem('fitness-journey-weight-logs', JSON.stringify(newLogs))
  }

  const saveMeasurements = (newMeasurements: MeasurementLog[]) => {
    setMeasurements(newMeasurements)
    localStorage.setItem('fitness-journey-measurements', JSON.stringify(newMeasurements))
  }

  const savePhotos = (newPhotos: ProgressPhoto[]) => {
    setPhotos(newPhotos)
    localStorage.setItem('fitness-journey-photos', JSON.stringify(newPhotos))
  }

  // CRUD Operations - Weight
  const addWeight = () => {
    const newWeight: WeightLog = {
      id: Date.now().toString(),
      weight: weightForm.weight,
      date: new Date(weightForm.date),
      notes: weightForm.notes,
      createdAt: new Date(),
    }
    saveWeightLogs([...weightLogs, newWeight])
    setWeightForm({ weight: 0, date: new Date().toISOString().split('T')[0], notes: '' })
    setIsAddingWeight(false)
  }

  const deleteWeight = (id: string) => {
    saveWeightLogs(weightLogs.filter(log => log.id !== id))
  }

  // CRUD Operations - Measurements
  const addMeasurement = () => {
    const newMeasurement: MeasurementLog = {
      id: Date.now().toString(),
      bodyPart: measurementForm.bodyPart,
      measurement: measurementForm.measurement,
      date: new Date(measurementForm.date),
      notes: measurementForm.notes,
      createdAt: new Date(),
    }
    saveMeasurements([...measurements, newMeasurement])
    setMeasurementForm({ bodyPart: 'waist', measurement: 0, date: new Date().toISOString().split('T')[0], notes: '' })
    setIsAddingMeasurement(false)
  }

  const deleteMeasurement = (id: string) => {
    saveMeasurements(measurements.filter(m => m.id !== id))
  }

  // CRUD Operations - Photos
  const addPhoto = () => {
    const newPhoto: ProgressPhoto = {
      id: Date.now().toString(),
      type: photoForm.type,
      date: new Date(photoForm.date),
      notes: photoForm.notes,
      createdAt: new Date(),
    }
    savePhotos([...photos, newPhoto])
    setPhotoForm({ type: 'front', date: new Date().toISOString().split('T')[0], notes: '' })
    setIsAddingPhoto(false)
  }

  const deletePhoto = (id: string) => {
    savePhotos(photos.filter(p => p.id !== id))
  }

  // Calculate trends
  const getWeightTrend = () => {
    if (weightLogs.length < 2) return null
    const sortedLogs = [...weightLogs].sort((a, b) => a.date.getTime() - b.date.getTime())
    const latest = sortedLogs[sortedLogs.length - 1].weight
    const previous = sortedLogs[sortedLogs.length - 2].weight
    const change = latest - previous
    return { change, trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable' }
  }

  const weightTrend = getWeightTrend()

  const getMeasurementTrend = (bodyPart: MeasurementLog['bodyPart']) => {
    const bodyPartLogs = measurements.filter(m => m.bodyPart === bodyPart)
    if (bodyPartLogs.length < 2) return null
    const sortedLogs = [...bodyPartLogs].sort((a, b) => a.date.getTime() - b.date.getTime())
    const latest = sortedLogs[sortedLogs.length - 1].measurement
    const previous = sortedLogs[sortedLogs.length - 2].measurement
    const change = latest - previous
    return { change, trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable' }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Progress Monitoring</h1>
          <p className="text-muted-foreground">Track your weight, measurements, and progress photos</p>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
            <Weight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {weightLogs.length > 0 
                ? `${weightLogs.sort((a, b) => b.date.getTime() - a.date.getTime())[0].weight} lbs`
                : 'No data'
              }
            </div>
            {weightTrend && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                {weightTrend.trend === 'up' && <TrendingUp className="h-4 w-4 text-red-500" />}
                {weightTrend.trend === 'down' && <TrendingDown className="h-4 w-4 text-green-500" />}
                {weightTrend.trend === 'stable' && <Minus className="h-4 w-4 text-gray-500" />}
                {Math.abs(weightTrend.change).toFixed(1)} lbs
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Measurements</CardTitle>
            <Ruler className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{measurements.length}</div>
            <p className="text-xs text-muted-foreground">total entries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progress Photos</CardTitle>
            <Camera className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{photos.length}</div>
            <p className="text-xs text-muted-foreground">photos logged</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different tracking types */}
      <Tabs defaultValue="weight" className="space-y-4">
        <TabsList>
          <TabsTrigger value="weight">Weight Logs</TabsTrigger>
          <TabsTrigger value="measurements">Measurements</TabsTrigger>
          <TabsTrigger value="photos">Progress Photos</TabsTrigger>
        </TabsList>

        <TabsContent value="weight" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Weight Tracking</CardTitle>
                  <CardDescription>Monitor your weight changes over time</CardDescription>
                </div>
                <Dialog open={isAddingWeight} onOpenChange={setIsAddingWeight}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Log Weight
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Weight Entry</DialogTitle>
                      <DialogDescription>Record your current weight</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="weight">Weight (lbs)</Label>
                        <Input
                          id="weight"
                          type="number"
                          step="0.1"
                          value={weightForm.weight}
                          onChange={(e) => setWeightForm({...weightForm, weight: parseFloat(e.target.value) || 0})}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="weightDate">Date</Label>
                        <Input
                          id="weightDate"
                          type="date"
                          value={weightForm.date}
                          onChange={(e) => setWeightForm({...weightForm, date: e.target.value})}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="weightNotes">Notes</Label>
                        <Textarea
                          id="weightNotes"
                          value={weightForm.notes}
                          onChange={(e) => setWeightForm({...weightForm, notes: e.target.value})}
                          placeholder="How are you feeling? Any observations..."
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={addWeight}>Add Entry</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              {weightLogs.length === 0 ? (
                <div className="text-center py-8">
                  <Weight className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No weight entries yet. Start tracking your progress!</p>
                </div>
              ) : (
                <Table>
                  <TableCaption>Your weight tracking history</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Weight (lbs)</TableHead>
                      <TableHead>Change</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {weightLogs
                      .sort((a, b) => b.date.getTime() - a.date.getTime())
                      .map((log, index) => {
                        const prevLog = weightLogs
                          .sort((a, b) => b.date.getTime() - a.date.getTime())[index + 1]
                        const change = prevLog ? log.weight - prevLog.weight : null
                        return (
                          <TableRow key={log.id}>
                            <TableCell>{log.date.toLocaleDateString()}</TableCell>
                            <TableCell className="font-medium">{log.weight}</TableCell>
                            <TableCell>
                              {change !== null && (
                                <div className="flex items-center gap-1">
                                  {change > 0 && <TrendingUp className="h-4 w-4 text-red-500" />}
                                  {change < 0 && <TrendingDown className="h-4 w-4 text-green-500" />}
                                  {change === 0 && <Minus className="h-4 w-4 text-gray-500" />}
                                  <span className={change > 0 ? 'text-red-500' : change < 0 ? 'text-green-500' : 'text-gray-500'}>
                                    {change > 0 ? '+' : ''}{change.toFixed(1)}
                                  </span>
                                </div>
                              )}
                            </TableCell>
                            <TableCell>{log.notes || '-'}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm" onClick={() => deleteWeight(log.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="measurements" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Body Measurements</CardTitle>
                  <CardDescription>Track your body measurements and progress</CardDescription>
                </div>
                <Dialog open={isAddingMeasurement} onOpenChange={setIsAddingMeasurement}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Measurement
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Measurement</DialogTitle>
                      <DialogDescription>Record a body measurement</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="bodyPart">Body Part</Label>
                        <select
                          id="bodyPart"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={measurementForm.bodyPart}
                          onChange={(e) => setMeasurementForm({...measurementForm, bodyPart: e.target.value as MeasurementLog['bodyPart']})}
                        >
                          <option value="waist">Waist</option>
                          <option value="chest">Chest</option>
                          <option value="arms">Arms</option>
                          <option value="thighs">Thighs</option>
                          <option value="hips">Hips</option>
                          <option value="neck">Neck</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="measurement">Measurement (inches)</Label>
                        <Input
                          id="measurement"
                          type="number"
                          step="0.1"
                          value={measurementForm.measurement}
                          onChange={(e) => setMeasurementForm({...measurementForm, measurement: parseFloat(e.target.value) || 0})}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="measurementDate">Date</Label>
                        <Input
                          id="measurementDate"
                          type="date"
                          value={measurementForm.date}
                          onChange={(e) => setMeasurementForm({...measurementForm, date: e.target.value})}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="measurementNotes">Notes</Label>
                        <Textarea
                          id="measurementNotes"
                          value={measurementForm.notes}
                          onChange={(e) => setMeasurementForm({...measurementForm, notes: e.target.value})}
                          placeholder="Any additional notes..."
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={addMeasurement}>Add Measurement</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              {measurements.length === 0 ? (
                <div className="text-center py-8">
                  <Ruler className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No measurements recorded yet. Start tracking your progress!</p>
                </div>
              ) : (
                <Table>
                  <TableCaption>Your measurement history</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Body Part</TableHead>
                      <TableHead>Measurement</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {measurements
                      .sort((a, b) => b.date.getTime() - a.date.getTime())
                      .map((measurement) => (
                        <TableRow key={measurement.id}>
                          <TableCell>{measurement.date.toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{measurement.bodyPart}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{measurement.measurement} in</TableCell>
                          <TableCell>{measurement.notes || '-'}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => deleteMeasurement(measurement.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="photos" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Progress Photos</CardTitle>
                  <CardDescription>Log your progress photos to visualize changes</CardDescription>
                </div>
                <Dialog open={isAddingPhoto} onOpenChange={setIsAddingPhoto}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Log Photo
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Progress Photo</DialogTitle>
                      <DialogDescription>Record when you took a progress photo</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="photoType">Photo Type</Label>
                        <select
                          id="photoType"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={photoForm.type}
                          onChange={(e) => setPhotoForm({...photoForm, type: e.target.value as ProgressPhoto['type']})}
                        >
                          <option value="front">Front View</option>
                          <option value="side">Side View</option>
                          <option value="back">Back View</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="photoDate">Date</Label>
                        <Input
                          id="photoDate"
                          type="date"
                          value={photoForm.date}
                          onChange={(e) => setPhotoForm({...photoForm, date: e.target.value})}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="photoNotes">Notes</Label>
                        <Textarea
                          id="photoNotes"
                          value={photoForm.notes}
                          onChange={(e) => setPhotoForm({...photoForm, notes: e.target.value})}
                          placeholder="Any notes about this photo session..."
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={addPhoto}>Log Photo</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              {photos.length === 0 ? (
                <div className="text-center py-8">
                  <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No progress photos logged yet. Start documenting your journey!</p>
                </div>
              ) : (
                <Table>
                  <TableCaption>Your progress photo log</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Notes</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {photos
                      .sort((a, b) => b.date.getTime() - a.date.getTime())
                      .map((photo) => (
                        <TableRow key={photo.id}>
                          <TableCell>{photo.date.toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{photo.type}</Badge>
                          </TableCell>
                          <TableCell>{photo.notes || '-'}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => deletePhoto(photo.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}