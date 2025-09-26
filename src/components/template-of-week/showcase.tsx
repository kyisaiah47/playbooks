import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Trophy,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
  Clock,
  Quote,
  CheckCircle
} from "lucide-react"
import {
  getCurrentTemplateOfWeek,
  getTemplateOfWeekDetails,
  getTemplateOfWeekBadgeText,
  getWeeksRemaining
} from "@/lib/template-of-week"
import { cn } from "@/lib/utils"

interface TemplateOfWeekShowcaseProps {
  variant?: "full" | "compact" | "banner"
  className?: string
}

export function TemplateOfWeekShowcase({
  variant = "full",
  className
}: TemplateOfWeekShowcaseProps) {
  const templateOfWeek = getCurrentTemplateOfWeek()
  const templateDetails = templateOfWeek ? getTemplateOfWeekDetails(templateOfWeek) : null
  const badgeText = getTemplateOfWeekBadgeText()
  const daysRemaining = getWeeksRemaining()

  if (!templateOfWeek || !templateDetails) {
    return null
  }

  if (variant === "banner") {
    return (
      <Link href={templateDetails.url}>
        <div className={cn(
          "group relative overflow-hidden rounded-xl border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 via-yellow-25 to-orange-50 p-4 transition-all hover:border-yellow-300 hover:shadow-lg",
          className
        )}>
          <div className="absolute -right-4 -top-4 rotate-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/20">
              <Trophy className="h-8 w-8 text-yellow-600" />
            </div>
          </div>

          <div className="relative">
            <div className="mb-2 flex items-center gap-2">
              <Badge className="bg-yellow-500/90 hover:bg-yellow-500 text-white">
                <Trophy className="mr-1 h-3 w-3" />
                Template of the Week
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Clock className="mr-1 h-3 w-3" />
                {badgeText}
              </Badge>
            </div>

            <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-yellow-800 transition-colors">
              {templateOfWeek.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {templateOfWeek.featuredText}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                {templateOfWeek.stats && (
                  <>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {templateOfWeek.stats.userCount?.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {templateOfWeek.stats.avgRating}
                    </div>
                  </>
                )}
              </div>

              <Button size="sm" variant="outline" className="group-hover:bg-yellow-50">
                Get Started
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === "compact") {
    return (
      <Card className={cn("overflow-hidden border-yellow-200", className)}>
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <Badge className="bg-yellow-500/90 hover:bg-yellow-500 text-white">
              <Trophy className="mr-1 h-3 w-3" />
              Template of the Week
            </Badge>
            <Badge variant="outline" className="text-xs">
              {badgeText}
            </Badge>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
                {templateDetails.icon}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base mb-1">{templateOfWeek.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {templateOfWeek.featuredText}
              </p>

              <Button asChild size="sm">
                <Link href={templateDetails.url}>
                  Get Started
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Full variant
  return (
    <Card className={cn("overflow-hidden border-yellow-200 bg-gradient-to-br from-yellow-50/50 to-orange-50/50", className)}>
      <CardContent className="p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <Trophy className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <Badge className="mb-1 bg-yellow-500/90 hover:bg-yellow-500 text-white">
                Template of the Week
              </Badge>
              <div className="text-xs text-muted-foreground">{badgeText}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {daysRemaining > 1 ? `${daysRemaining} days left` : 'Last day!'}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-4 flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-3xl">
                {templateDetails.icon}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="mb-2 text-2xl font-bold">{templateOfWeek.title}</h3>
              <p className="text-lg text-muted-foreground mb-3">
                {templateOfWeek.subtitle}
              </p>
              <p className="text-muted-foreground">{templateOfWeek.featuredText}</p>
            </div>
          </div>

          {templateOfWeek.stats && (
            <div className="mb-6 flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {templateOfWeek.stats.completionRate}%
                </div>
                <div className="text-xs text-muted-foreground">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {templateOfWeek.stats.userCount?.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">{templateOfWeek.stats.avgRating}</span>
                </div>
                <div className="text-xs text-muted-foreground">Average Rating</div>
              </div>
            </div>
          )}

          <div className="mb-6">
            <h4 className="mb-3 font-semibold">Why This Template Stands Out:</h4>
            <div className="grid gap-2">
              {templateOfWeek.reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {templateOfWeek.curator && (
            <div className="mb-6 rounded-lg bg-muted/50 p-4">
              <div className="mb-3 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {templateOfWeek.curator.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{templateOfWeek.curator.name}</div>
                  <div className="text-xs text-muted-foreground">{templateOfWeek.curator.role}</div>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -left-1 -top-1 h-4 w-4 text-primary/30" />
                <p className="pl-6 text-sm italic text-muted-foreground">
                  "{templateOfWeek.curator.quote}"
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600">
            <Link href={templateDetails.url}>
              <Trophy className="mr-2 h-4 w-4" />
              Get This Week's Pick
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <TrendingUp className="h-3 w-3" />
            <span>Updated weekly with hand-picked excellence</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}