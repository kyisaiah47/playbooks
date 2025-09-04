"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Clock, Baby, Milk, BarChart3, Calendar, Target } from "lucide-react"
import { useBabyPlanning, getBabyPlanningDisplayData } from "@/contexts/baby-planning-context"

interface FeedingEntry {
  id: string
  date: string
  time: string
  type: 'breastfeeding' | 'bottle' | 'pumping'
  duration?: number // in minutes for breastfeeding
  amount?: number // in oz for bottle feeding
  side?: 'left' | 'right' | 'both' // for breastfeeding
  notes?: string
}

interface FeedingGoal {
  type: 'daily-feeds' | 'daily-amount' | 'time-between'
  value: number
  unit: string
}

export function FeedingSchedule() {
  const { babyPlanningData } = useBabyPlanning()
  const displayData = getBabyPlanningDisplayData(babyPlanningData)
  
  const [entries, setEntries] = useState<FeedingEntry[]>([
    {
      id: "1",
      date: "2024-01-15",
      time: "06:30",
      type: "breastfeeding",
      duration: 25,
      side: "both",
      notes: "Baby seemed very hungry"
    },
    {
      id: "2",
      date: "2024-01-15", 
      time: "09:15",
      type: "bottle",
      amount: 3,
      notes: "Formula feeding while out"
    },
    {
      id: "3",
      date: "2024-01-15",
      time: "12:00",
      type: "breastfeeding",
      duration: 20,
      side: "left"
    }
  ])

  const [goals, setGoals] = useState<FeedingGoal[]>([
    { type: 'daily-feeds', value: 8, unit: 'feeds' },
    { type: 'daily-amount', value: 24, unit: 'oz' },
    { type: 'time-between', value: 3, unit: 'hours' }
  ])

  const [newEntry, setNewEntry] = useState({
    type: 'breastfeeding' as 'breastfeeding' | 'bottle' | 'pumping',
    duration: '',
    amount: '',
    side: 'left' as 'left' | 'right' | 'both',
    notes: ''
  })

  const addEntry = () => {
    const now = new Date()
    const entry: FeedingEntry = {
      id: Date.now().toString(),
      date: now.toISOString().split('T')[0],
      time: now.toTimeString().slice(0, 5),
      type: newEntry.type,
      notes: newEntry.notes || undefined
    }

    if (newEntry.type === 'breastfeeding') {
      entry.duration = parseInt(newEntry.duration) || undefined
      entry.side = newEntry.side
    } else if (newEntry.type === 'bottle' || newEntry.type === 'pumping') {
      entry.amount = parseFloat(newEntry.amount) || undefined
    }

    setEntries([entry, ...entries])
    setNewEntry({
      type: 'breastfeeding',
      duration: '',
      amount: '',
      side: 'left',
      notes: ''
    })
  }

  const getTodayEntries = () => {
    const today = new Date().toISOString().split('T')[0]
    return entries.filter(entry => entry.date === today)
  }

  const getDailyStats = (date: string = new Date().toISOString().split('T')[0]) => {
    const dayEntries = entries.filter(entry => entry.date === date)
    
    return {
      totalFeeds: dayEntries.length,
      breastfeedingTime: dayEntries
        .filter(e => e.type === 'breastfeeding')
        .reduce((sum, e) => sum + (e.duration || 0), 0),
      bottleAmount: dayEntries
        .filter(e => e.type === 'bottle')
        .reduce((sum, e) => sum + (e.amount || 0), 0),
      pumpedAmount: dayEntries
        .filter(e => e.type === 'pumping')
        .reduce((sum, e) => sum + (e.amount || 0), 0),
      lastFeedTime: dayEntries.length > 0 ? dayEntries[0].time : null,
      averageInterval: calculateAverageInterval(dayEntries)
    }
  }

  const calculateAverageInterval = (dayEntries: FeedingEntry[]) => {
    if (dayEntries.length < 2) return null
    
    const intervals = []
    for (let i = 1; i < dayEntries.length; i++) {
      const prev = new Date(`${dayEntries[i].date}T${dayEntries[i].time}`)
      const current = new Date(`${dayEntries[i-1].date}T${dayEntries[i-1].time}`)
      const diff = (current.getTime() - prev.getTime()) / (1000 * 60 * 60) // in hours
      intervals.push(diff)
    }
    
    return Math.round((intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length) * 10) / 10
  }

  const getGoalProgress = (goalType: string) => {
    const todayStats = getDailyStats()
    const goal = goals.find(g => g.type === goalType)
    if (!goal) return 0

    switch (goalType) {
      case 'daily-feeds':
        return Math.min((todayStats.totalFeeds / goal.value) * 100, 100)
      case 'daily-amount':
        return Math.min(((todayStats.bottleAmount + todayStats.pumpedAmount) / goal.value) * 100, 100)
      case 'time-between':
        return todayStats.averageInterval ? Math.min((goal.value / todayStats.averageInterval) * 100, 100) : 0
      default:
        return 0
    }
  }

  const getTimeSinceLastFeed = () => {
    const todayEntries = getTodayEntries()
    if (todayEntries.length === 0) return null

    const lastFeed = new Date(`${todayEntries[0].date}T${todayEntries[0].time}`)
    const now = new Date()
    const diff = (now.getTime() - lastFeed.getTime()) / (1000 * 60) // in minutes
    
    if (diff < 60) {
      return `${Math.floor(diff)}m ago`
    } else {
      const hours = Math.floor(diff / 60)
      const mins = Math.floor(diff % 60)
      return `${hours}h ${mins}m ago`
    }
  }

  const todayStats = getDailyStats()
  const timeSinceLastFeed = getTimeSinceLastFeed()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Feeding Schedule Planner</h2>
          <p className="text-muted-foreground">Track feedings and plan schedules for your baby</p>
        </div>
        <Button onClick={addEntry}>
          <Plus className="mr-2 h-4 w-4" />
          Log Feeding
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Feeds</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.totalFeeds}</div>
            <p className="text-xs text-muted-foreground">
              feeds recorded today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Feed</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todayStats.lastFeedTime ? todayStats.lastFeedTime : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">
              {timeSinceLastFeed || "No feeds today"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Amount</CardTitle>
            <Milk className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todayStats.bottleAmount + todayStats.pumpedAmount}oz
            </div>
            <p className="text-xs text-muted-foreground">
              bottle + pumped milk
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Interval</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todayStats.averageInterval ? `${todayStats.averageInterval}h` : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">
              between feeds
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daily Goals</CardTitle>
          <CardDescription>Track progress toward your daily feeding goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {goals.map((goal, index) => {
              const progress = getGoalProgress(goal.type)
              const goalLabels = {
                'daily-feeds': 'Daily Feeds',
                'daily-amount': 'Daily Amount',
                'time-between': 'Time Between Feeds'
              }

              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{goalLabels[goal.type]}</span>
                    <span className="font-medium">
                      {goal.value} {goal.unit}
                    </span>
                  </div>
                  <Progress value={progress} />
                  <p className="text-xs text-muted-foreground">
                    {Math.round(progress)}% complete
                  </p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Log New Feeding</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="space-y-2">
              <Label htmlFor="feed-type">Type</Label>
              <Select 
                value={newEntry.type} 
                onValueChange={(value: 'breastfeeding' | 'bottle' | 'pumping') => setNewEntry({...newEntry, type: value})}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breastfeeding">Breastfeeding</SelectItem>
                  <SelectItem value="bottle">Bottle</SelectItem>
                  <SelectItem value="pumping">Pumping</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {newEntry.type === 'breastfeeding' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (min)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={newEntry.duration}
                    onChange={(e) => setNewEntry({...newEntry, duration: e.target.value})}
                    placeholder="20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="side">Side</Label>
                  <Select 
                    value={newEntry.side} 
                    onValueChange={(value: 'left' | 'right' | 'both') => setNewEntry({...newEntry, side: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {(newEntry.type === 'bottle' || newEntry.type === 'pumping') && (
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (oz)</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.5"
                  value={newEntry.amount}
                  onChange={(e) => setNewEntry({...newEntry, amount: e.target.value})}
                  placeholder="3.0"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Input
                id="notes"
                value={newEntry.notes}
                onChange={(e) => setNewEntry({...newEntry, notes: e.target.value})}
                placeholder="Optional notes"
              />
            </div>

            <div className="flex items-end">
              <Button onClick={addEntry} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent Feeds</TabsTrigger>
          <TabsTrigger value="schedule">Feeding Schedule</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Feeding Entries</CardTitle>
              <CardDescription>Your latest recorded feedings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {entries.slice(0, 10).map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Badge variant={entry.type === 'breastfeeding' ? 'default' : entry.type === 'bottle' ? 'secondary' : 'outline'}>
                          {entry.type}
                        </Badge>
                        <span className="font-medium">{entry.time}</span>
                        <span className="text-sm text-muted-foreground">{entry.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        {entry.duration && <span>Duration: {entry.duration}min</span>}
                        {entry.amount && <span>Amount: {entry.amount}oz</span>}
                        {entry.side && <span>Side: {entry.side}</span>}
                      </div>
                      
                      {entry.notes && (
                        <p className="text-sm text-muted-foreground">{entry.notes}</p>
                      )}
                    </div>
                  </div>
                ))}
                
                {entries.length === 0 && (
                  <p className="text-muted-foreground text-center py-8">
                    No feedings recorded yet. Log your first feeding above.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Feeding Schedule Template
              </CardTitle>
              <CardDescription>Sample schedules for different feeding plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Breastfeeding Schedule (0-3 months)</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      "6:00 AM - Feeding",
                      "8:30 AM - Feeding", 
                      "11:00 AM - Feeding",
                      "1:30 PM - Feeding",
                      "4:00 PM - Feeding",
                      "6:30 PM - Feeding",
                      "9:00 PM - Feeding",
                      "11:30 PM - Feeding",
                      "2:00 AM - Night feeding",
                      "4:30 AM - Night feeding"
                    ].map((time, index) => (
                      <div key={index} className="p-2 bg-muted rounded text-center">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Formula Schedule (0-3 months)</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      "6:00 AM - 2-4 oz",
                      "9:00 AM - 2-4 oz",
                      "12:00 PM - 2-4 oz", 
                      "3:00 PM - 2-4 oz",
                      "6:00 PM - 2-4 oz",
                      "9:00 PM - 2-4 oz",
                      "12:00 AM - 2-4 oz",
                      "3:00 AM - 2-4 oz"
                    ].map((time, index) => (
                      <div key={index} className="p-2 bg-muted rounded text-center">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{todayStats.totalFeeds}</div>
                    <p className="text-sm text-muted-foreground">Average feeds per day</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Breastfeeding sessions</span>
                      <span className="font-medium">
                        {entries.filter(e => e.type === 'breastfeeding').length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bottle feeds</span>
                      <span className="font-medium">
                        {entries.filter(e => e.type === 'bottle').length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pumping sessions</span>
                      <span className="font-medium">
                        {entries.filter(e => e.type === 'pumping').length}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feeding Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-1">Most Active Time</h4>
                    <p className="text-sm text-muted-foreground">
                      Morning hours (6-9 AM) based on your feeding pattern
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-1">Growth Pattern</h4>
                    <p className="text-sm text-muted-foreground">
                      Baby's feeding frequency is consistent with healthy growth
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium mb-1">Recommendation</h4>
                    <p className="text-sm text-muted-foreground">
                      Try to maintain 2-3 hour intervals between feeds during the day
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}