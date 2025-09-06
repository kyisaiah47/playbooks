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
  Clock,
  Calendar,
  CheckSquare,
  Zap,
  Target
} from "lucide-react"

export function TimelineGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Event Timeline & Task Management</h1>
        <p className="text-xl text-muted-foreground">
          Master scheduling, coordination, and day-of execution with professional timeline strategies
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Time Management</Badge>
          <Badge variant="outline">Coordination Guide</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Timeline Planning Phases
          </CardTitle>
          <CardDescription>
            Four critical phases for comprehensive event scheduling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Master</div>
              <p className="text-sm text-muted-foreground">Planning Timeline</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Vendor</div>
              <p className="text-sm text-muted-foreground">Coordination Schedule</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Day-of</div>
              <p className="text-sm text-muted-foreground">Execution Timeline</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Backup</div>
              <p className="text-sm text-muted-foreground">Contingency Plans</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Master Planning Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Master Planning Timeline
          </CardTitle>
          <CardDescription>Comprehensive scheduling from conception to completion</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            A well-structured planning timeline ensures nothing falls through the cracks and prevents last-minute panic. Here's your roadmap to organized event execution.
          </p>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    6M
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">6+ Months Before: Foundation Phase</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Critical Tasks:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Set event date and budget</li>
                          <li>• Book venue and major vendors</li>
                          <li>• Create guest list framework</li>
                          <li>• Secure photography/videography</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Key Decisions:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Event style and theme</li>
                          <li>• Catering preferences</li>
                          <li>• Entertainment type</li>
                          <li>• Basic decor direction</li>
                        </ul>
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2">Foundation Building</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    4M
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">3-4 Months Before: Detail Development</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Planning Tasks:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Send save-the-dates</li>
                          <li>• Finalize vendor contracts</li>
                          <li>• Design invitations</li>
                          <li>• Plan ceremony details</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Coordination:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• First vendor meeting</li>
                          <li>• Menu tastings</li>
                          <li>• Venue walkthrough</li>
                          <li>• Transportation planning</li>
                        </ul>
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2">Detail Planning</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    2M
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">6-8 Weeks Before: Invitation Phase</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Guest Management:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Send formal invitations</li>
                          <li>• Set up RSVP tracking</li>
                          <li>• Coordinate accommodations</li>
                          <li>• Plan guest activities</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Finalization:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Confirm decor details</li>
                          <li>• Order specialty items</li>
                          <li>• Schedule fittings</li>
                          <li>• Plan rehearsal</li>
                        </ul>
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-2">Guest Focus</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    2W
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">2 Weeks Before: Final Confirmations</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm font-medium text-orange-600 mb-1">Critical Confirmations:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Final headcount to caterer</li>
                          <li>• Vendor arrival times</li>
                          <li>• Payment schedules</li>
                          <li>• Emergency contacts</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-orange-600 mb-1">Final Preparations:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Seating chart completion</li>
                          <li>• Day-of timeline creation</li>
                          <li>• Delegate responsibilities</li>
                          <li>• Emergency kit preparation</li>
                        </ul>
                      </div>
                    </div>
                    <Badge className="mt-2 bg-orange-500">Crunch Time</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    0
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Event Week: Execution Phase</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm font-medium text-green-600 mb-1">Final Week:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Vendor arrival coordination</li>
                          <li>• Setup supervision</li>
                          <li>• Last-minute adjustments</li>
                          <li>• Team briefings</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-600 mb-1">Event Day:</p>
                        <ul className="text-sm text-muted-foreground space-y-0.5">
                          <li>• Early venue arrival</li>
                          <li>• Coordinate all vendors</li>
                          <li>• Handle any issues</li>
                          <li>• Enjoy the event!</li>
                        </ul>
                      </div>
                    </div>
                    <Badge className="mt-2 bg-green-600">Event Time!</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Day-of Timeline Template */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Day-of Execution Timeline
          </CardTitle>
          <CardDescription>Detailed schedule template for event day coordination</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            A precise day-of timeline keeps everyone coordinated and ensures smooth execution. Customize this template based on your specific event needs.
          </p>

          <div className="space-y-4">
            {/* Morning Setup */}
            <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Morning Setup (8:00 AM - 12:00 PM)</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">8:00 - 9:30 AM:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Venue access and walkthrough</li>
                    <li>• Vendor arrival coordination</li>
                    <li>• Setup area assignments</li>
                    <li>• Safety and logistics check</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">9:30 - 11:00 AM:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Catering setup begins</li>
                    <li>• Audio/visual equipment test</li>
                    <li>• Decorations and florals placed</li>
                    <li>• Lighting adjustment</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">11:00 AM - 12:00 PM:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Final setup touches</li>
                    <li>• Photography setup shots</li>
                    <li>• Vendor coordination meeting</li>
                    <li>• Problem resolution time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pre-Event */}
            <div className="border rounded-lg p-4 bg-purple-50 border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">Pre-Event Period (12:00 PM - 3:00 PM)</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">12:00 - 1:00 PM:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Catering prep completion</li>
                    <li>• Bar setup and stock</li>
                    <li>• Final decor adjustments</li>
                    <li>• Sound system final test</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">1:00 - 2:00 PM:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Team lunch break</li>
                    <li>• Personal preparation time</li>
                    <li>• Photography of venue</li>
                    <li>• Guest arrival preparation</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">2:00 - 3:00 PM:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Staff briefing and positions</li>
                    <li>• Final venue walkthrough</li>
                    <li>• Host preparation</li>
                    <li>• Welcome area setup</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Event Period */}
            <div className="border rounded-lg p-4 bg-green-50 border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Event Period (3:00 PM - 8:00 PM)</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">3:00 - 4:00 PM: Guest Arrival</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Welcome and check-in</li>
                    <li>• Cocktail hour begins</li>
                    <li>• Photography starts</li>
                    <li>• Music and ambiance set</li>
                  </ul>
                  
                  <p className="font-medium mb-2 mt-3">4:00 - 5:00 PM: Main Event</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Opening remarks/ceremony</li>
                    <li>• Featured presentations</li>
                    <li>• Guest interaction activities</li>
                    <li>• Continued photography</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">5:00 - 6:30 PM: Celebration</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Meal service begins</li>
                    <li>• Entertainment/speeches</li>
                    <li>• Special moments capture</li>
                    <li>• Guest mingling facilitation</li>
                  </ul>
                  
                  <p className="font-medium mb-2 mt-3">6:30 - 8:00 PM: Wind Down</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Closing activities</li>
                    <li>• Guest farewells</li>
                    <li>• Final photography</li>
                    <li>• Initial cleanup begins</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="border rounded-lg p-4 bg-orange-50 border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">Breakdown & Cleanup (8:00 PM - 10:00 PM)</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">8:00 - 9:00 PM:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Guest departure assistance</li>
                    <li>• Vendor breakdown coordination</li>
                    <li>• Personal items collection</li>
                    <li>• Decor removal oversight</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">9:00 - 10:00 PM:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Final cleanup completion</li>
                    <li>• Vendor payment/tips</li>
                    <li>• Venue inspection</li>
                    <li>• Equipment return coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Management System */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5" />
            Task Management & Delegation
          </CardTitle>
          <CardDescription>Systematic approach to organizing and assigning responsibilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Task Categorization System</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-blue-700 mb-2">Priority 1: Must Do</p>
                  <ul className="space-y-1 text-blue-600">
                    <li>• Critical path items</li>
                    <li>• Vendor dependencies</li>
                    <li>• Guest-facing elements</li>
                    <li>• Legal/safety requirements</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-blue-700 mb-2">Priority 2: Should Do</p>
                  <ul className="space-y-1 text-blue-600">
                    <li>• Quality enhancements</li>
                    <li>• Guest experience improvements</li>
                    <li>• Aesthetic details</li>
                    <li>• Nice-to-have features</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-blue-700 mb-2">Priority 3: Could Do</p>
                  <ul className="space-y-1 text-blue-600">
                    <li>• Extra touches</li>
                    <li>• Bonus activities</li>
                    <li>• Additional documentation</li>
                    <li>• Future considerations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Delegation Strategy</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-green-700 mb-2">Tasks to Delegate:</p>
                  <ul className="space-y-1 text-green-600">
                    <li>• Vendor communication and coordination</li>
                    <li>• Guest check-in and assistance</li>
                    <li>• Setup and breakdown supervision</li>
                    <li>• Photography coordination</li>
                    <li>• Emergency issue resolution</li>
                    <li>• Timeline enforcement</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-green-700 mb-2">Ideal Delegation Targets:</p>
                  <ul className="space-y-1 text-green-600">
                    <li>• Organized family members</li>
                    <li>• Reliable friends with event experience</li>
                    <li>• Professional coordinators</li>
                    <li>• Responsible members of your party</li>
                    <li>• Venue staff (when appropriate)</li>
                    <li>• Trusted vendors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Task Tracking Tools</h4>
              <div className="space-y-2 text-sm text-purple-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Shared digital task board (Trello, Asana, or Notion)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Weekly progress review meetings with key helpers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Color-coded status system (not started, in progress, complete)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Mobile-accessible checklist for real-time updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Backup person assigned to each critical task</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crisis Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Crisis Management & Contingencies
          </CardTitle>
          <CardDescription>Preparing for and handling unexpected challenges</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Common Crisis Scenarios</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-red-700 mb-2">Weather Issues:</p>
                  <ul className="space-y-1 text-red-600">
                    <li>• Have indoor backup location confirmed</li>
                    <li>• Rent tents/heaters/fans as weather insurance</li>
                    <li>• Create modified timeline for weather delays</li>
                    <li>• Communicate backup plans to all vendors</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-2">Vendor No-Shows:</p>
                  <ul className="space-y-1 text-red-600">
                    <li>• Maintain backup vendor contact list</li>
                    <li>• Confirm vendors 48 hours before event</li>
                    <li>• Have emergency cash/cards for last-minute hires</li>
                    <li>• Know which services can be DIY substituted</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-2">Technical Failures:</p>
                  <ul className="space-y-1 text-red-600">
                    <li>• Require vendors to bring backup equipment</li>
                    <li>• Test all systems during setup</li>
                    <li>• Have battery backups for critical devices</li>
                    <li>• Identify manual alternatives for tech-dependent elements</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-700 mb-2">Medical Emergencies:</p>
                  <ul className="space-y-1 text-red-600">
                    <li>• Know location of nearest hospital</li>
                    <li>• Have first aid kit and trained person available</li>
                    <li>• Collect guest emergency contacts in advance</li>
                    <li>• Establish communication protocol for emergencies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Emergency Response Protocol</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-orange-700 mb-2">Decision Making Chain:</p>
                  <ol className="space-y-1 text-orange-600 list-decimal list-inside">
                    <li>Host/primary organizer makes final call</li>
                    <li>Day-of coordinator handles vendor issues</li>
                    <li>Designated family member manages guest concerns</li>
                    <li>Venue manager addresses facility problems</li>
                  </ol>
                </div>
                <div>
                  <p className="font-medium text-orange-700 mb-2">Communication Plan:</p>
                  <ul className="space-y-1 text-orange-600">
                    <li>• Text chain with key team members</li>
                    <li>• Venue announcement system protocol</li>
                    <li>• Social media update strategy (if needed)</li>
                    <li>• Guest notification system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Golden Rule of Crisis Management</h4>
                <p className="text-sm text-yellow-700">
                  Stay calm, communicate clearly, and remember that guests care more about how you handle problems than the problems themselves. Most "disasters" become funny stories later.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Expert Timeline Management Tips
          </CardTitle>
          <CardDescription>Professional strategies from experienced coordinators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Buffer Time Strategy</h4>
              <p className="text-sm text-blue-700">
                Always build 15-30 minute buffers between major timeline segments. This prevents cascading delays and gives you flexibility for special moments or photo opportunities.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Vendor Synchronization</h4>
              <p className="text-sm text-green-700">
                Create a shared timeline document that all vendors can access. Include arrival times, setup requirements, and key contact information for seamless coordination.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Day-of Communication</h4>
              <p className="text-sm text-purple-700">
                Use walkie-talkies or a group text for real-time coordination during your event. This keeps everyone informed without disrupting the guest experience.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Timeline Testing</h4>
              <p className="text-sm text-orange-700">
                Walk through your timeline during venue setup. Time each segment to identify potential bottlenecks and make adjustments before guests arrive.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Guest Flow Management</h4>
              <p className="text-sm text-red-700">
                Plan how guests move through your event space. Clear signage and strategic staff positioning prevent confusion and keep your timeline on track.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">Flexibility Mindset</h4>
              <p className="text-sm text-teal-700">
                Remember that timelines are guides, not rigid schedules. The best events feel natural and unrushed, even when everything is carefully planned.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Timeline Management Resources</CardTitle>
          <CardDescription>Tools and templates for perfect coordination</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Master Timeline Template</h4>
                <p className="text-sm text-muted-foreground">Comprehensive planning timeline with milestones and deadlines</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Day-of Schedule Builder</h4>
                <p className="text-sm text-muted-foreground">Customizable timeline template for event day coordination</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Crisis Management Checklist</h4>
                <p className="text-sm text-muted-foreground">Emergency response protocols and backup plan templates</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Task Management Dashboard</h4>
                <p className="text-sm text-muted-foreground">Interactive tool for tracking progress and delegating responsibilities</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Access Tool
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ready to Start */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Master Your Timeline?</CardTitle>
          <CardDescription>Use our guided notes to create your personalized event timeline and task management system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Timeline Planning
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Timeline Kit
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}