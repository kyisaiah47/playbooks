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
  Heart,
  Users,
  Home,
  Calendar,
  Phone
} from "lucide-react"

export function ChildCustodyGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Child Custody and Co-Parenting Guide</h1>
        <p className="text-xl text-muted-foreground">
          Prioritizing your children's well-being through divorce and beyond
        </p>
        <div className="flex justify-center gap-2">
          <Badge>Child-Focused</Badge>
          <Badge variant="outline">Expert Guidance</Badge>
        </div>
      </div>

      {/* Quick Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Custody Quick Facts
          </CardTitle>
          <CardDescription>
            Key statistics about child custody arrangements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">40%</div>
              <p className="text-sm text-muted-foreground">Joint Physical Custody</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">80%</div>
              <p className="text-sm text-muted-foreground">Cases Settled Out of Court</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Best Interest</div>
              <p className="text-sm text-muted-foreground">Primary Legal Standard</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Custody */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Custody Types</CardTitle>
          <CardDescription>Legal and physical custody arrangements explained</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600">Legal Custody</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Joint Legal Custody</h5>
                    <p className="text-sm text-muted-foreground">
                      Both parents share decision-making authority for major life decisions including education, healthcare, and religious upbringing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Sole Legal Custody</h5>
                    <p className="text-sm text-muted-foreground">
                      One parent has exclusive authority to make major decisions. Usually granted when the other parent is unavailable or unfit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Physical Custody</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Joint Physical Custody</h5>
                    <p className="text-sm text-muted-foreground">
                      Children spend significant time with both parents, though not necessarily equal time. Often 60/40 or closer split.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Primary Physical Custody</h5>
                    <p className="text-sm text-muted-foreground">
                      Children live primarily with one parent, while the other has visitation rights according to a schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Interest Factors */}
      <Card>
        <CardHeader>
          <CardTitle>Best Interest of the Child Factors</CardTitle>
          <CardDescription>What courts consider when making custody decisions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Child's physical and emotional needs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Each parent's ability to care for the child</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Existing parent-child relationship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Child's adjustment to home, school, community</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Mental and physical health of all parties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">History of domestic violence or abuse</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Willingness to support other parent's relationship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Geographic proximity of parents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Work schedules and availability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Child's preference (if age-appropriate)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Stability and continuity factors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm">Financial resources and stability</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Creating a Parenting Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Essential Elements of a Parenting Plan</CardTitle>
          <CardDescription>Key components every parenting plan should address</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Time-Sharing Schedule
                </h4>
                <div className="bg-muted/30 rounded-lg p-4 space-y-2 text-sm">
                  <p>• Regular weekly schedule (e.g., every other weekend)</p>
                  <p>• School break and summer vacation arrangements</p>
                  <p>• Holiday and special occasion rotations</p>
                  <p>• Birthday and Mother's/Father's Day plans</p>
                  <p>• Flexibility for special events and activities</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Decision-Making Authority
                </h4>
                <div className="bg-muted/30 rounded-lg p-4 space-y-2 text-sm">
                  <p>• Medical and healthcare decisions</p>
                  <p>• Educational choices and school selection</p>
                  <p>• Religious and cultural upbringing</p>
                  <p>• Extracurricular activities</p>
                  <p>• Emergency decision protocols</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Communication Guidelines
                </h4>
                <div className="bg-muted/30 rounded-lg p-4 space-y-2 text-sm">
                  <p>• Phone/video call schedules with children</p>
                  <p>• Communication methods between parents</p>
                  <p>• Information sharing about child's activities</p>
                  <p>• Emergency contact procedures</p>
                  <p>• Social media and privacy guidelines</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Transportation & Logistics
                </h4>
                <div className="bg-muted/30 rounded-lg p-4 space-y-2 text-sm">
                  <p>• Pick-up and drop-off locations</p>
                  <p>• Transportation responsibilities</p>
                  <p>• Travel with children guidelines</p>
                  <p>• Passport and travel document custody</p>
                  <p>• Activity transportation arrangements</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Co-Parenting Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Co-Parenting Success Strategies</CardTitle>
          <CardDescription>Building a positive co-parenting relationship</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600">Do: Positive Practices</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Keep Children Out of Conflicts</h5>
                      <p className="text-sm text-muted-foreground">
                        Never discuss adult issues or speak negatively about the other parent in front of children.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Maintain Consistency</h5>
                      <p className="text-sm text-muted-foreground">
                        Work together to maintain similar rules, bedtimes, and expectations across both homes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Communicate Respectfully</h5>
                      <p className="text-sm text-muted-foreground">
                        Use business-like communication focused on the children's needs and schedule logistics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Be Flexible When Possible</h5>
                      <p className="text-sm text-muted-foreground">
                        Accommodate reasonable requests for schedule changes and special events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-red-600">Don't: Harmful Behaviors</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Use Children as Messengers</h5>
                      <p className="text-sm text-muted-foreground">
                        Don't send messages to the other parent through your children or ask them to report back.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Discuss Financial Matters</h5>
                      <p className="text-sm text-muted-foreground">
                        Never discuss child support, alimony, or financial struggles with your children.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Interfere with Visitation</h5>
                      <p className="text-sm text-muted-foreground">
                        Don't withhold visitation or make it difficult for children to spend time with the other parent.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">Compete for Children's Affection</h5>
                      <p className="text-sm text-muted-foreground">
                        Avoid becoming the "fun parent" or trying to buy children's love with gifts or leniency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Age-Appropriate Considerations */}
      <Card>
        <CardHeader>
          <CardTitle>Age-Appropriate Custody Considerations</CardTitle>
          <CardDescription>How children's developmental needs affect custody arrangements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Ages 0-5: Early Childhood</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Frequent, shorter visits work better</li>
                  <li>• Consistent routines are crucial</li>
                  <li>• Attachment to primary caregiver</li>
                  <li>• Difficulty understanding time</li>
                  <li>• Need stability and predictability</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Ages 6-12: School Age</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• School schedule considerations</li>
                  <li>• Friendship and activity involvement</li>
                  <li>• Can handle longer separations</li>
                  <li>• Better understanding of time</li>
                  <li>• May have preferences</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Ages 13+: Teenagers</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Strong peer relationships</li>
                  <li>• Extracurricular commitments</li>
                  <li>• Desire for independence</li>
                  <li>• Meaningful input on schedules</li>
                  <li>• May resist rigid arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Warning Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-yellow-800">Child Safety First</h4>
            <p className="text-sm text-yellow-700">
              If you have concerns about your child's safety with the other parent, document any incidents and consult with your attorney immediately. Courts take child safety very seriously and will modify custody arrangements when necessary to protect children.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Child Custody Expert Tips
          </CardTitle>
          <CardDescription>Professional guidance for successful co-parenting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Focus on Children's Needs</h4>
              <p className="text-sm text-blue-700">
                Make decisions based on what's best for your children, not what's easiest for adults or what feels fair to parents.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Document Everything</h4>
              <p className="text-sm text-green-700">
                Keep records of visitation schedules, missed visits, communication attempts, and any concerning behaviors.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">Use Technology Tools</h4>
              <p className="text-sm text-purple-700">
                Consider co-parenting apps that help track schedules, expenses, and communication while maintaining boundaries.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Stay Child-Centered</h4>
              <p className="text-sm text-orange-700">
                Remember that your children need both parents. Support their relationship with the other parent even when it's difficult.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Seek Professional Help</h4>
              <p className="text-sm text-red-700">
                Consider family therapy or co-parenting counseling to help navigate difficult transitions and improve communication.
              </p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-teal-800 mb-2">Be Patient</h4>
              <p className="text-sm text-teal-700">
                Developing a successful co-parenting relationship takes time. Focus on gradual improvement rather than perfection.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Child Custody Resources</CardTitle>
          <CardDescription>Helpful tools and support services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Co-Parenting Communication Apps</h4>
                <p className="text-sm text-muted-foreground">Apps like OurFamilyWizard and TalkingParents for secure communication</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Compare
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Child Support Calculator</h4>
                <p className="text-sm text-muted-foreground">State-specific calculators for estimating child support obligations</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Calculate
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Children and Divorce Support</h4>
                <p className="text-sm text-muted-foreground">Resources to help children cope with divorce and family changes</p>
              </div>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">Parenting Plan Templates</h4>
                <p className="text-sm text-muted-foreground">Comprehensive templates to help create your parenting agreement</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Start Planning for Your Children</CardTitle>
          <CardDescription>Use our guided notes to create a comprehensive custody plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button>
              Start Child Custody Notes
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Parenting Plan Template
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}