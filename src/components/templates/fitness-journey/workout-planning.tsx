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
import { Progress } from "@/components/ui/progress"
import { 
  Plus,
  Edit,
  Trash2,
  Calendar,
  Clock,
  Activity,
  Target
} from "lucide-react"
import { useFitnessJourney } from "@/contexts/fitness-journey-context"

interface Workout {
  id: string
  name: string
  type: 'cardio' | 'strength' | 'flexibility' | 'sports' | 'other'
  duration: number // minutes
  intensity: 'low' | 'medium' | 'high'
  date: Date
  status: 'planned' | 'completed' | 'skipped'
  exercises?: string[]
  notes?: string
  caloriesBurned?: number
  createdAt: Date
  updatedAt: Date
}

export function WorkoutPlanning() {
  const { data, updateData } = useFitnessJourney()
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [isAddingWorkout, setIsAddingWorkout] = useState(false)
  const [editingWorkout, setEditingWorkout] = useState<Workout | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    type: 'cardio' as Workout['type'],
    duration: 30,
    intensity: 'medium' as Workout['intensity'],
    date: new Date().toISOString().split('T')[0],
    exercises: '',
    notes: '',
    caloriesBurned: 0,
  })

  // Load workouts from localStorage
  useEffect(() => {
    const savedWorkouts = localStorage.getItem('fitness-journey-workouts')
    if (savedWorkouts) {
      const parsed = JSON.parse(savedWorkouts)
      setWorkouts(parsed.map((w: any) => ({
        ...w,
        date: new Date(w.date),
        createdAt: new Date(w.createdAt),
        updatedAt: new Date(w.updatedAt)
      })))
    }
  }, [])

  // Save workouts to localStorage
  const saveWorkouts = (newWorkouts: Workout[]) => {
    setWorkouts(newWorkouts)
    localStorage.setItem('fitness-journey-workouts', JSON.stringify(newWorkouts))
  }

  // CRUD Operations
  const addWorkout = () => {
    const newWorkout: Workout = {
      id: Date.now().toString(),
      name: formData.name,
      type: formData.type,
      duration: formData.duration,
      intensity: formData.intensity,
      date: new Date(formData.date),
      status: 'planned',
      exercises: formData.exercises ? formData.exercises.split(',').map(e => e.trim()) : [],
      notes: formData.notes,
      caloriesBurned: formData.caloriesBurned,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    saveWorkouts([...workouts, newWorkout])
    resetForm()
    setIsAddingWorkout(false)
  }

  const updateWorkout = (id: string, updates: Partial<Workout>) => {
    const updatedWorkouts = workouts.map(workout => 
      workout.id === id 
        ? { ...workout, ...updates, updatedAt: new Date() }
        : workout
    )
    saveWorkouts(updatedWorkouts)
  }

  const deleteWorkout = (id: string) => {
    const filteredWorkouts = workouts.filter(workout => workout.id !== id)
    saveWorkouts(filteredWorkouts)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'cardio',
      duration: 30,
      intensity: 'medium',
      date: new Date().toISOString().split('T')[0],
      exercises: '',
      notes: '',
      caloriesBurned: 0,
    })
  }

  // Calculate progress/metrics
  const completedCount = workouts.filter(workout => workout.status === 'completed').length
  const thisWeekWorkouts = workouts.filter(workout => {
    const workoutDate = new Date(workout.date)
    const today = new Date()
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()))
    return workoutDate >= startOfWeek && workout.status === 'completed'
  }).length
  const weeklyGoal = 5
  const weeklyProgress = Math.min(100, (thisWeekWorkouts / weeklyGoal) * 100)

  const getStatusColor = (status: Workout['status']) => {
    switch (status) {
      case 'completed': return 'default'
      case 'planned': return 'secondary'
      case 'skipped': return 'destructive'
      default: return 'outline'
    }
  }

  const getIntensityColor = (intensity: Workout['intensity']) => {
    switch (intensity) {
      case 'low': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'high': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Workout Planning</h1>
          <p className="text-muted-foreground">Plan and track your exercise routines</p>
        </div>
        <Dialog open={isAddingWorkout} onOpenChange={setIsAddingWorkout}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Workout
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Workout</DialogTitle>
              <DialogDescription>
                Plan a new workout session for your fitness routine.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Workout Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Morning Run, Upper Body Strength"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="type">Workout Type</Label>
                <Select value={formData.type} onValueChange={(value: Workout['type']) => setFormData({...formData, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select workout type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardio">Cardio</SelectItem>
                    <SelectItem value="strength">Strength Training</SelectItem>
                    <SelectItem value="flexibility">Flexibility/Yoga</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration (min)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value) || 0})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="intensity">Intensity</Label>
                  <Select value={formData.intensity} onValueChange={(value: Workout['intensity']) => setFormData({...formData, intensity: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="date">Scheduled Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="exercises">Exercises (comma-separated)</Label>
                <Input
                  id="exercises"
                  value={formData.exercises}
                  onChange={(e) => setFormData({...formData, exercises: e.target.value})}
                  placeholder="e.g., Push-ups, Squats, Planks"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Additional workout notes..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={addWorkout}>
                Add Workout
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Weekly Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
          <CardDescription>
            {thisWeekWorkouts} of {weeklyGoal} workouts completed this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={weeklyProgress} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {weeklyProgress.toFixed(1)}% of weekly goal achieved
          </p>
        </CardContent>
      </Card>

      {/* Workouts List */}
      <Card>
        <CardHeader>
          <CardTitle>Your Workouts</CardTitle>
          <CardDescription>Manage your workout schedule and track progress</CardDescription>
        </CardHeader>
        <CardContent>
          {workouts.length === 0 ? (
            <div className="text-center py-8">
              <Activity className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No workouts planned yet. Add your first workout to get started!</p>
            </div>
          ) : (
            <Table>
              <TableCaption>Your workout schedule</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Intensity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workouts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((workout) => (
                  <TableRow key={workout.id}>
                    <TableCell className="font-medium">{workout.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{workout.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {workout.date.toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        {workout.duration}min
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getIntensityColor(workout.intensity)}`} />
                        {workout.intensity}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(workout.status)}>
                        {workout.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {workout.status === 'planned' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateWorkout(workout.id, { status: 'completed' })}
                          >
                            Complete
                          </Button>
                        )}
                        {workout.status === 'completed' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateWorkout(workout.id, { status: 'planned' })}
                          >
                            Undo
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteWorkout(workout.id)}
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