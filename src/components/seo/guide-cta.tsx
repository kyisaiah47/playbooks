import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

interface GuideCTAProps {
  templateType: 'wedding' | 'baby' | 'home-buying'
  guideName: string
  appLink: string
}

export function TemplateCTA({ templateType, guideName, appLink }: TemplateCTAProps) {
  const getIcon = () => {
    switch (templateType) {
      case 'wedding':
        return <Heart className="w-6 h-6" />
      case 'baby':
        return <Sparkles className="w-6 h-6" />
      case 'home-buying':
        return <ArrowRight className="w-6 h-6" />
      default:
        return <ArrowRight className="w-6 h-6" />
    }
  }

  const getHeadline = () => {
    switch (templateType) {
      case 'wedding':
        return "Ready to Plan Your Dream Wedding?"
      case 'baby':
        return "Ready to Start Your Baby Planning Journey?"
      case 'home-buying':
        return "Ready to Find Your Dream Home?"
      default:
        return "Ready to Get Started?"
    }
  }

  const getDescription = () => {
    switch (templateType) {
      case 'wedding':
        return "Join thousands of couples who've planned their perfect wedding with our comprehensive template. Start organizing your special day today - completely free."
      case 'baby':
        return "Join thousands of families who've prepared for their new arrival with our comprehensive template. Start planning for your little one today - completely free."
      case 'home-buying':
        return "Join thousands of families who've found their dream home with our comprehensive template. Start your home buying journey today - completely free."
      default:
        return "Start using this template today - completely free."
    }
  }

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
          {getIcon()}
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {getHeadline()}
      </h2>

      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        {getDescription()}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Button size="lg" asChild className="text-lg px-8 py-6">
          <Link href={appLink}>
            Start Using {guideName}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
          <Link href="#preview">
            View Template Preview
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span>Free to start</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span>Start in 2 minutes</span>
        </div>
      </div>
    </div>
  )
}