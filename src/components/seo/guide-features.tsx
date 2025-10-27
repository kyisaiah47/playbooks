import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  DollarSign, 
  Users, 
  CheckSquare, 
  MapPin, 
  Heart,
  FileText,
  Lightbulb,
  MessageSquare,
  Camera,
  Music,
  Gift
} from "lucide-react"

const weddingFeatures = [
  {
    icon: Calendar,
    title: "Wedding Overview Dashboard",
    description: "Track countdown, budget progress, guest RSVPs, and task completion at a glance",
    features: ["Days until wedding", "Budget overview", "RSVP status", "Task progress"]
  },
  {
    icon: DollarSign,
    title: "Complete Budget Tracker",
    description: "Manage every penny with detailed expense tracking and budget allocation guides",
    features: ["Category budgeting", "Expense tracking", "Payment schedules", "Cost alerts"]
  },
  {
    icon: Users,
    title: "Guest List Management", 
    description: "Organize invitations, track RSVPs, manage dietary restrictions and seating",
    features: ["Contact management", "RSVP tracking", "Dietary needs", "Plus-one handling"]
  },
  {
    icon: MapPin,
    title: "Vendor Management",
    description: "Keep all vendor contacts, contracts, and payments organized in one place",
    features: ["Vendor database", "Contract storage", "Payment tracking", "Communication log"]
  },
  {
    icon: CheckSquare,
    title: "Task & Timeline Management",
    description: "Never miss a deadline with our comprehensive wedding planning timeline",
    features: ["Monthly checklists", "Custom tasks", "Deadline alerts", "Progress tracking"]
  },
  {
    icon: FileText,
    title: "12 Guided Planning Sections",
    description: "Step-by-step guides for every aspect of your wedding planning journey",
    features: ["Timeline planning", "Ceremony details", "Reception planning", "Emergency prep"]
  }
]

const guidedNotes = [
  { icon: Calendar, name: "Timeline & Countdown", description: "Plan your perfect wedding timeline" },
  { icon: MessageSquare, name: "Vendor Questions", description: "Essential questions for every vendor" },
  { icon: Heart, name: "Vows & Ceremony", description: "Craft your perfect ceremony" },
  { icon: Users, name: "RSVP Management", description: "Track responses and preferences" },
  { icon: MapPin, name: "Seating Chart", description: "Organize your reception seating" },
  { icon: Lightbulb, name: "Emergency Kit", description: "Be prepared for anything" },
  { icon: Camera, name: "Photos & Shots", description: "Plan your perfect photo list" },
  { icon: Music, name: "Music & Playlist", description: "Curate your wedding soundtrack" },
  { icon: Gift, name: "Gift Registry", description: "Organize your wedding registry" },
  { icon: MapPin, name: "Honeymoon Planning", description: "Plan your post-wedding getaway" },
  { icon: Heart, name: "Thank You Cards", description: "Express gratitude to your guests" },
  { icon: CheckSquare, name: "Day-of Schedule", description: "Coordinate your wedding day" }
]

interface GuideFeaturesProps {
  templateType: 'wedding' | 'baby' | 'home-buying'
}

export function GuideFeatures({ templateType }: GuideFeaturesProps) {
  if (templateType !== 'wedding') {
    return <div>Features for {templateType} coming soon...</div>
  }

  return (
    <div className="space-y-12">
      {/* Core Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weddingFeatures.map((feature, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {feature.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Guided Notes Section */}
      <div>
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Guided Planning Sections
          </Badge>
          <h3 className="text-2xl font-bold mb-3">12 Step-by-Step Planning Guides</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each section includes questions, examples, and expert tips to guide you through every aspect of wedding planning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {guidedNotes.map((note, index) => (
            <div key={index} className="bg-background border rounded-lg p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded">
                  <note.icon className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-medium">{note.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{note.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}