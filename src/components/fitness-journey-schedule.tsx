"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Plus, Activity, Users, Utensils } from "lucide-react"

interface ScheduleItem {
  id: string
  title: string
  type: 'workout' | 'meal' | 'trainer' | 'rest'
  date: Date
  duration: number
  description?: string
  status: 'scheduled' | 'completed' | 'missed'
}

export function FitnessJourneySchedule() {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  useEffect(() => {
    // Initialize with sample schedule
    const sampleItems: ScheduleItem[] = [
      {
        id: '1',
        title: 'Morning Workout',
        type: 'workout',
        date: new Date(),
        duration: 60,
        description: 'Full body strength training',
        status: 'scheduled'
      },
      {
        id: '2',
        title: 'Protein Smoothie',
        type: 'meal',
        date: new Date(),
        duration: 15,
        description: 'Post-workout nutrition',
        status: 'scheduled'
      },
      {
        id: '3',
        title: 'PT Session with Sarah',
        type: 'trainer',
        date: new Date(Date.now() + 24 * 60 * 60 * 1000),
        duration: 60,
        description: 'Upper body focus',
        status: 'scheduled'
      },
      {
        id: '4',
        title: 'Rest Day',
        type: 'rest',
        date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        duration: 0,
        description: 'Active recovery - light stretching',
        status: 'scheduled'
      }
    ]
    setScheduleItems(sampleItems)
  }, [])

  const getItemsForDate = (date: string) => {
    return scheduleItems.filter(item => 
      item.date.toISOString().split('T')[0] === date
    ).sort((a, b) => a.date.getTime() - b.date.getTime())
  }

  const getTypeIcon = (type: ScheduleItem['type']) => {
    switch (type) {
      case 'workout': return Activity
      case 'meal': return Utensils
      case 'trainer': return Users
      case 'rest': return Clock
      default: return Calendar
    }
  }

  const getTypeColor = (type: ScheduleItem['type']) => {
    switch (type) {
      case 'workout': return 'bg-blue-100 text-blue-700'
      case 'meal': return 'bg-green-100 text-green-700'
      case 'trainer': return 'bg-purple-100 text-purple-700'
      case 'rest': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const todayItems = getItemsForDate(selectedDate)
  const upcomingItems = scheduleItems
    .filter(item => item.date > new Date() && item.status === 'scheduled')
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center">
          <Calendar className="mr-2 h-8 w-8" />
          Fitness Schedule
        </h1>
        <p className="text-muted-foreground">
          Plan and track your daily fitness activities
        </p>
      </div>

      {/* Date Selector */}
      <div className="flex items-center space-x-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>
            Schedule for {new Date(selectedDate).toLocaleDateString()}
          </CardTitle>
          <CardDescription>
            Your planned activities for the day
          </CardDescription>
        </CardHeader>
        <CardContent>
          {todayItems.length === 0 ? (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No activities scheduled</h3>
              <p className="text-muted-foreground mb-4">
                Plan your fitness activities for this day
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Activity
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {todayItems.map(item => {
                const Icon = getTypeIcon(item.type)
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${getTypeColor(item.type)}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          {item.duration > 0 && ` • ${item.duration} min`}
                        </p>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={
                        item.status === 'completed' ? 'default' :
                        item.status === 'missed' ? 'destructive' : 'secondary'
                      }>
                        {item.status}
                      </Badge>
                      {item.status === 'scheduled' && (
                        <Button variant="outline" size="sm">
                          Mark Complete
                        </Button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upcoming Activities */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Upcoming Activities</CardTitle>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Activity
            </Button>
          </div>
          <CardDescription>
            Your next scheduled fitness activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              No upcoming activities scheduled
            </p>
          ) : (
            <div className="space-y-3">
              {upcomingItems.map(item => {
                const Icon = getTypeIcon(item.type)
                const isToday = item.date.toDateString() === new Date().toDateString()
                const isTomorrow = item.date.toDateString() === new Date(Date.now() + 24 * 60 * 60 * 1000).toDateString()
                
                let dateLabel = item.date.toLocaleDateString()
                if (isToday) dateLabel = 'Today'
                else if (isTomorrow) dateLabel = 'Tomorrow'

                return (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-3 border rounded-lg"
                  >
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${getTypeColor(item.type)}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {dateLabel} • {item.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        {item.duration > 0 && ` • ${item.duration} min`}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Weekly Overview */}
      <Card>
        <CardHeader>
          <CardTitle>This Week</CardTitle>
          <CardDescription>
            Overview of your weekly fitness schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }, (_, i) => {
              const date = new Date()
              date.setDate(date.getDate() - date.getDay() + i)
              const dateStr = date.toISOString().split('T')[0]
              const dayItems = getItemsForDate(dateStr)
              const isToday = dateStr === new Date().toISOString().split('T')[0]

              return (
                <div
                  key={i}
                  className={`p-3 border rounded-lg text-center ${
                    isToday ? 'bg-primary/5 border-primary' : ''
                  }`}
                >
                  <div className="text-xs font-medium text-muted-foreground">
                    {date.toLocaleDateString([], { weekday: 'short' })}
                  </div>
                  <div className={`text-sm font-medium ${
                    isToday ? 'text-primary' : ''
                  }`}>
                    {date.getDate()}
                  </div>
                  <div className="mt-1 space-y-1">
                    {dayItems.slice(0, 2).map(item => (
                      <div
                        key={item.id}
                        className={`w-full h-2 rounded-full ${
                          item.type === 'workout' ? 'bg-blue-200' :
                          item.type === 'meal' ? 'bg-green-200' :
                          item.type === 'trainer' ? 'bg-purple-200' :
                          'bg-gray-200'
                        }`}
                      />
                    ))}
                    {dayItems.length > 2 && (
                      <div className="text-xs text-muted-foreground">
                        +{dayItems.length - 2}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}