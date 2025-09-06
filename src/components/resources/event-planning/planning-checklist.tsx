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
  Calendar,
  Clock,
  MapPin,
  Users
} from "lucide-react"

export function PlanningChecklist() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Event Planning Master Checklist</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive timeline and task guide for successful event execution
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Essential Guide</Badge>
          <Badge variant="outline">Updated 2024</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Planning Timeline Overview
          </CardTitle>
          <CardDescription>
            Critical milestones for event success
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3-6 Months</div>
              <p className="text-sm text-muted-foreground">Major Planning</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1-3 Months</div>
              <p className="text-sm text-muted-foreground">Detail Refinement</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2-4 Weeks</div>
              <p className="text-sm text-muted-foreground">Final Confirmations</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Event Week</div>
              <p className="text-sm text-muted-foreground">Execution Phase</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3-6 Months Before */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            3-6 Months Before Event
          </CardTitle>
          <CardDescription>Foundation and major decisions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Event Foundation</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Define Event Purpose & Goals</h5>
                    <p className="text-sm text-muted-foreground">
                      Clarify objectives, target audience, and success metrics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Set Budget & Allocate Funds</h5>
                    <p className="text-sm text-muted-foreground">
                      Determine total budget and breakdown by category (venue 40%, catering 25%, etc.)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Choose Date & Time</h5>
                    <p className="text-sm text-muted-foreground">
                      Consider seasonality, holidays, and target audience availability
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Estimate Guest Count</h5>
                    <p className="text-sm text-muted-foreground">
                      Create initial guest list to guide venue and catering decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Venue & Key Vendors</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Book Primary Venue</h5>
                    <p className="text-sm text-muted-foreground">
                      Secure ceremony and reception locations based on capacity and style
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Select Catering Service</h5>
                    <p className="text-sm text-muted-foreground">
                      Choose menu style, dietary accommodations, and service level
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Hire Photography/Videography</h5>
                    <p className="text-sm text-muted-foreground">
                      Book documentation services early for best selection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Secure Entertainment</h5>
                    <p className="text-sm text-muted-foreground">
                      Book DJ, band, or other entertainment based on event style
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 1-3 Months Before */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            1-3 Months Before Event
          </CardTitle>
          <CardDescription>Detail planning and confirmations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Invitations & Guest Management</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Send Invitations</h5>
                    <p className="text-sm text-muted-foreground">
                      Mail or send digital invites 6-8 weeks before event
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Track RSVPs</h5>
                    <p className="text-sm text-muted-foreground">
                      Follow up on non-responses 2 weeks before deadline
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Plan Seating Arrangements</h5>
                    <p className="text-sm text-muted-foreground">
                      Create seating chart considering relationships and dynamics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Arrange Accommodations</h5>
                    <p className="text-sm text-muted-foreground">
                      Book hotel blocks or coordinate lodging for out-of-town guests
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Decor & Additional Services</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Finalize Decor Theme</h5>
                    <p className="text-sm text-muted-foreground">
                      Confirm color scheme, florals, lighting, and table settings
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Order Specialty Items</h5>
                    <p className="text-sm text-muted-foreground">
                      Favors, signage, custom linens, and unique decorative elements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Confirm Transportation</h5>
                    <p className="text-sm text-muted-foreground">
                      Arrange shuttles, parking, or valet services for guests
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium">Plan Event Program</h5>
                    <p className="text-sm text-muted-foreground">
                      Create timeline, speeches, activities, and ceremony details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2-4 Weeks Before */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            2-4 Weeks Before Event
          </CardTitle>
          <CardDescription>Final preparations and confirmations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold">Final Confirmations Checklist:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Confirm headcount with caterer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Verify vendor arrival times and setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Review day-of timeline with team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Finalize seating chart and place cards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Create emergency contact list</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Prepare vendor payment and tips</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Double-check permits and licenses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Test all AV equipment and lighting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Confirm weather backup plans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Prepare day-of emergency kit</span>
              </div>
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Critical Reminder</h4>
                <p className="text-sm text-yellow-700">
                  This is your last chance to make significant changes. After this point, focus on execution and contingency planning rather than major modifications.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Week Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Event Week: Daily Timeline
          </CardTitle>
          <CardDescription>Day-by-day execution schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    7
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">7 Days Before: Final Setup Week</h4>
                    <p className="text-sm text-muted-foreground">
                      Last vendor confirmations, delegate responsibilities, pack emergency kit, review timeline with team.
                    </p>
                    <Badge variant="outline" className="mt-2">Admin Focus</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">3 Days Before: Final Prep</h4>
                    <p className="text-sm text-muted-foreground">
                      Venue walkthrough, setup decorations, coordinate volunteer assignments, weather check.
                    </p>
                    <Badge variant="outline" className="mt-2">Setup Phase</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Day Before: Final Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Rehearsal (if applicable), pick up last-minute items, confirm morning-of logistics, early rest.
                    </p>
                    <Badge variant="outline" className="mt-2">Rest & Rehearse</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    0
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Event Day: Execution</h4>
                    <p className="text-sm text-muted-foreground">
                      Arrive early, coordinate vendors, handle issues calmly, trust your planning, and enjoy the event!
                    </p>
                    <Badge className="mt-2">Event Day!</Badge>
                  </div>
                </div>
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
            Expert Planning Tips
          </CardTitle>
          <CardDescription>Professional insights from event planning experts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Budget Wisely</h4>
              <p className="text-sm text-blue-700">
                Always set aside 10-15% of your budget for unexpected costs. The most common surprise expenses are last-minute guest additions and weather contingencies.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Timeline Buffers</h4>
              <p className="text-sm text-green-700">
                Build 15-30 minute buffers between major event segments. This prevents cascading delays and gives you flexibility for photo ops.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Vendor Communication</h4>
              <p className="text-sm text-purple-700">
                Create a shared document with all vendor contacts, arrival times, and special requirements. This prevents confusion on event day.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Guest Experience</h4>
              <p className="text-sm text-orange-700">
                Think through the entire guest journey from arrival to departure. Clear signage, comfortable seating, and accessible facilities make all the difference.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Emergency Planning</h4>
              <p className="text-sm text-red-700">
                Always have Plan B for weather, key vendor no-shows, and technical failures. The best events are those where backup plans go unnoticed.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">Day-of Delegation</h4>
              <p className="text-sm text-teal-700">
                Assign specific roles to reliable helpers with written instructions. You should focus on hosting and managing, not executing individual tasks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>Helpful tools and references</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Event Planning Templates</h4>
                <p className="text-sm text-muted-foreground">Downloadable checklists, timelines, and vendor comparison sheets</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Vendor Directory</h4>
                <p className="text-sm text-muted-foreground">Curated list of reliable local vendors by category</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Browse
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Budget Calculator</h4>
                <p className="text-sm text-muted-foreground">Interactive tool for budget allocation and expense tracking</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Calculate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ready to Start */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Ready to Start Planning?</CardTitle>
          <CardDescription>Use our guided notes to organize your specific event details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Guided Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Full Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}