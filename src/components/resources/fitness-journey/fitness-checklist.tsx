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
  Target,
  Calendar,
  Clipboard
} from "lucide-react"

export function FitnessChecklist() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Fitness Journey Checklist</h1>
        <p className="text-xl text-muted-foreground">
          Your complete roadmap to fitness success
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Complete Guide</Badge>
          <Badge variant="outline">Step-by-Step</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Getting Started Overview
          </CardTitle>
          <CardDescription>
            Key milestones in your fitness journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Week 1-2</div>
              <p className="text-sm text-muted-foreground">Foundation building</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Week 3-8</div>
              <p className="text-sm text-muted-foreground">Habit formation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Week 12+</div>
              <p className="text-sm text-muted-foreground">Visible results</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pre-Journey Preparation */}
      <Card>
        <CardHeader>
          <CardTitle>Phase 1: Pre-Journey Preparation</CardTitle>
          <CardDescription>Set yourself up for success before you start</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Proper preparation prevents poor performance. Complete these steps before beginning your fitness routine.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Get Medical Clearance</h4>
                <p className="text-sm text-muted-foreground">
                  Consult with your doctor, especially if you have pre-existing conditions or haven't exercised recently.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Define Clear Goals</h4>
                <p className="text-sm text-muted-foreground">
                  Write specific, measurable, achievable goals (SMART goals) for what you want to accomplish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Assess Current Fitness Level</h4>
                <p className="text-sm text-muted-foreground">
                  Take baseline measurements, photos, and fitness assessments to track progress over time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Plan Your Schedule</h4>
                <p className="text-sm text-muted-foreground">
                  Block out specific times for workouts in your calendar. Treat them as non-negotiable appointments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold">Gather Equipment/Join Gym</h4>
                <p className="text-sm text-muted-foreground">
                  Secure access to necessary equipment, whether at home or at a fitness facility.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* First Month Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Phase 2: First Month Foundation</CardTitle>
          <CardDescription>Building sustainable habits and proper form</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* Week 1-2 */}
          <div className="space-y-3">
            <h4 className="font-semibold">Weeks 1-2: Getting Started</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Start with 3 workouts per week</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Focus on learning proper form</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Start food tracking/awareness</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Establish consistent sleep schedule</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Take progress photos and measurements</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Set up tracking system/app</span>
              </div>
            </div>
          </div>

          {/* Week 3-4 */}
          <div className="space-y-3">
            <h4 className="font-semibold">Weeks 3-4: Building Momentum</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Increase workout intensity gradually</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Add progressive overload principles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Refine nutrition plan based on results</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Establish pre/post workout routines</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Plan for obstacles and setbacks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                <span className="text-sm">Connect with accountability partner</span>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">First Month Reality Check</h4>
                <p className="text-sm text-yellow-700">
                  Expect some soreness and fatigue as your body adapts. Focus on consistency over perfection during this phase.
                </p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* 3-Month Milestones */}
      <Card>
        <CardHeader>
          <CardTitle>Phase 3: 3-Month Milestones</CardTitle>
          <CardDescription>Established habits and visible progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Timeline Steps */}
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Habit Formation Complete</h4>
                    <p className="text-sm text-muted-foreground">
                      Workouts feel routine and natural. You automatically plan meals and recovery time.
                    </p>
                    <Badge variant="outline" className="mt-2">Consistency achieved</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    📈
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Measurable Progress</h4>
                    <p className="text-sm text-muted-foreground">
                      Strength increases, endurance improvements, body composition changes become visible.
                    </p>
                    <Badge variant="outline" className="mt-2">Results visible</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Program Refinement</h4>
                    <p className="text-sm text-muted-foreground">
                      Adjust goals, modify routines based on what you've learned about your preferences and responses.
                    </p>
                    <Badge variant="outline" className="mt-2">Optimization phase</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    🔄
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Long-term Planning</h4>
                    <p className="text-sm text-muted-foreground">
                      Set new goals, plan for seasonal variations, and develop strategies for lifelong fitness.
                    </p>
                    <Badge variant="outline" className="mt-2">Sustainability focus</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Essential Equipment Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Essential Equipment Checklist
          </CardTitle>
          <CardDescription>Must-have items for different training environments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Home Gym Basics</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <div>☐ Adjustable dumbbells or kettlebells</div>
                <div>☐ Resistance bands set</div>
                <div>☐ Yoga/exercise mat</div>
                <div>☐ Pull-up bar (doorway or wall-mounted)</div>
                <div>☐ Stability ball</div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Commercial Gym</h4>
              <div className="text-sm text-green-700 space-y-1">
                <div>☐ Gym membership/day passes</div>
                <div>☐ Water bottle</div>
                <div>☐ Towel</div>
                <div>☐ Workout log/app</div>
                <div>☐ Proper workout attire</div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Tracking Tools</h4>
              <div className="text-sm text-purple-700 space-y-1">
                <div>☐ Fitness tracking app</div>
                <div>☐ Food logging app</div>
                <div>☐ Body weight scale</div>
                <div>☐ Measuring tape</div>
                <div>☐ Progress photo setup</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Recovery & Nutrition</h4>
              <div className="text-sm text-orange-700 space-y-1">
                <div>☐ Quality sleep environment</div>
                <div>☐ Meal prep containers</div>
                <div>☐ Blender for smoothies</div>
                <div>☐ Foam roller</div>
                <div>☐ Basic supplement storage</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Progress Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Progress Review</CardTitle>
          <CardDescription>Regular assessments to stay on track</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Physical Metrics */}
            <div className="space-y-3">
              <h4 className="font-semibold">Physical Assessments:</h4>
              <ul className="space-y-2 text-sm">
                <li>☐ <strong>Body measurements:</strong> Weight, circumferences, body fat %</li>
                <li>☐ <strong>Progress photos:</strong> Same lighting/poses as baseline</li>
                <li>☐ <strong>Fitness tests:</strong> Push-ups, planks, mile time, etc.</li>
                <li>☐ <strong>Strength records:</strong> Personal bests in key lifts</li>
                <li>☐ <strong>Energy levels:</strong> Daily energy and recovery quality</li>
              </ul>
            </div>

            {/* Program Evaluation */}
            <div className="space-y-3">
              <h4 className="font-semibold">Program Evaluation:</h4>
              <div className="bg-background rounded p-4 border space-y-2 text-sm">
                <div>☐ <strong>Goal progress:</strong> On track with original objectives?</div>
                <div>☐ <strong>Workout satisfaction:</strong> Enjoying current routine?</div>
                <div>☐ <strong>Nutrition compliance:</strong> Sticking to eating plan?</div>
                <div>☐ <strong>Recovery quality:</strong> Sleep and stress management</div>
                <div>☐ <strong>Adjustments needed:</strong> What would you change?</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Helpful Resources & Tools</CardTitle>
          <CardDescription>Supporting materials for your fitness journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Printable Workout Log</h4>
                <p className="text-sm text-muted-foreground">Track sets, reps, and weights for gym sessions</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Progress Tracking Spreadsheet</h4>
                <p className="text-sm text-muted-foreground">Comprehensive template for measurements and goals</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Meal Planning Template</h4>
                <p className="text-sm text-muted-foreground">Weekly meal planning and grocery list generator</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                <span>Download</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Begin Your Journey?</CardTitle>
          <CardDescription>Start with our guided planning tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Goal Setting
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Complete Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}