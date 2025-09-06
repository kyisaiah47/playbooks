"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2,
  AlertTriangle,
  Info,
  Star,
  Download,
  ExternalLink,
  Dumbbell,
  Timer,
  Target
} from "lucide-react"

export function ExerciseGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Exercise Guide & Techniques</h1>
        <p className="text-xl text-muted-foreground">
          Master proper form and build effective workout routines
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Comprehensive Guide</Badge>
          <Badge variant="outline">Expert Approved</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Quick Overview
          </CardTitle>
          <CardDescription>
            Key principles for effective training
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3-4x/week</div>
              <p className="text-sm text-muted-foreground">Minimum frequency</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8-12 reps</div>
              <p className="text-sm text-muted-foreground">Muscle building</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">48 hours</div>
              <p className="text-sm text-muted-foreground">Rest between sessions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workout Types Section */}
      <Card>
        <CardHeader>
          <CardTitle>Types of Training</CardTitle>
          <CardDescription>Choose the right workout style for your goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Different training styles serve different fitness goals. Understanding these will help you create an effective program.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Dumbbell className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Strength Training</h4>
                <p className="text-sm text-muted-foreground">
                  Heavy weights, low reps (1-6). Focus on compound movements like squats, deadlifts, bench press.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Hypertrophy Training</h4>
                <p className="text-sm text-muted-foreground">
                  Moderate weights, 8-12 reps. Best for muscle growth and definition.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Timer className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Endurance Training</h4>
                <p className="text-sm text-muted-foreground">
                  Light weights, 15+ reps. Improves muscular endurance and cardiovascular fitness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Functional Training</h4>
                <p className="text-sm text-muted-foreground">
                  Movement patterns that translate to daily activities. Bodyweight and unstable surface training.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form and Technique */}
      <Card>
        <CardHeader>
          <CardTitle>Essential Movement Patterns</CardTitle>
          <CardDescription>Master these fundamental exercises</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* Compound Movements */}
          <div className="space-y-3">
            <h4 className="font-semibold">Compound Movements (Multi-Joint):</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Squats - Lower body power</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Deadlifts - Full body strength</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Push-ups/Bench Press - Upper push</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Pull-ups/Rows - Upper pull</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Overhead Press - Shoulder strength</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Lunges - Single-leg stability</span>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Form Over Weight</h4>
                <p className="text-sm text-yellow-700">
                  Always prioritize proper form over lifting heavy weight. Poor form leads to injuries and reduces exercise effectiveness.
                </p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Progressive Overload */}
      <Card>
        <CardHeader>
          <CardTitle>Progressive Overload Principles</CardTitle>
          <CardDescription>How to continuously improve and avoid plateaus</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Timeline Steps */}
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Increase Weight</h4>
                    <p className="text-sm text-muted-foreground">
                      Add 2.5-5 lbs when you can complete all sets with perfect form at the top of your rep range.
                    </p>
                    <Badge variant="outline" className="mt-2">Most common method</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Add Reps</h4>
                    <p className="text-sm text-muted-foreground">
                      Increase reps within your target range before adding weight. Example: 8 reps → 10 reps → 12 reps.
                    </p>
                    <Badge variant="outline" className="mt-2">Safer progression</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Add Sets</h4>
                    <p className="text-sm text-muted-foreground">
                      Increase training volume by adding additional sets. Start with 2 sets, progress to 3-4 sets.
                    </p>
                    <Badge variant="outline" className="mt-2">Volume increase</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Improve Form</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on tempo, range of motion, and muscle activation. Slower negatives and pauses can increase difficulty.
                    </p>
                    <Badge variant="outline" className="mt-2">Quality focus</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expert Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Expert Training Tips
          </CardTitle>
          <CardDescription>Professional insights for better results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Mind-Muscle Connection</h4>
              <p className="text-sm text-blue-700">
                Focus on feeling the target muscle work during each rep. Slow, controlled movements with mental focus improve activation.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Rest Period Strategy</h4>
              <p className="text-sm text-green-700">
                Strength: 3-5 min, Hypertrophy: 2-3 min, Endurance: 30-90 sec. Adequate rest ensures quality performance.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Warm-up Protocol</h4>
              <p className="text-sm text-purple-700">
                5-10 min general warm-up, then specific movements with light weight. Gradually increase intensity.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Recovery Indicators</h4>
              <p className="text-sm text-orange-700">
                Monitor sleep quality, energy levels, and performance. Adjust training intensity based on recovery status.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>Helpful tools and further learning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Exercise Demonstration Videos</h4>
                <p className="text-sm text-muted-foreground">Proper form tutorials for all major movements</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Watch
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Workout Program Templates</h4>
                <p className="text-sm text-muted-foreground">Structured plans for different goals and experience levels</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">1RM Calculator</h4>
                <p className="text-sm text-muted-foreground">Calculate your one-rep max and training percentages</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Calculate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Start Training?</CardTitle>
          <CardDescription>Use our guided notes to plan your workout program</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Plan Your Workouts
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exercise Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}