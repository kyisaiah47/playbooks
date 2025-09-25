"use client"

import { Button } from "@/components/ui/button"
import type { Metadata } from 'next'
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {
  Clock,
  Mail,
  ArrowRight,
  UserPlus,
  CheckCircle
} from "lucide-react"
import { PageLayout } from "@/components/layout"

export const metadata: Metadata = {
  title: 'Partners Program - Coming Soon | Templata',
  description: 'Join the Templata Partners Program. Collaborate with us to bring structured life planning templates to more people. Early access for partners and affiliates.',
  keywords: 'templata partners, affiliate program, partnership opportunities, collaboration, business partnerships, templata affiliates',
  authors: [{ name: 'Templata Team' }],
  creator: 'Templata',
  publisher: 'Templata',
  metadataBase: new URL('https://templata.com'),
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: 'Partners Program - Coming Soon | Templata',
    description: 'Join the Templata Partners Program. Collaborate with us to bring structured life planning templates to more people.',
    url: 'https://templata.com/partners',
    siteName: 'Templata',
    images: [
      {
        url: '/og-partners.jpg',
        width: 1200,
        height: 630,
        alt: 'Templata Partners Program - Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partners Program - Coming Soon | Templata',
    description: 'Join the Templata Partners Program. Collaborate with us to bring structured life planning templates to more people.',
    images: ['/twitter-partners.jpg'],
    creator: '@templata',
    site: '@templata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function PartnersPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically submit to your backend/service
      console.log("Email submitted:", email)
      setIsSubmitted(true)
    }
  }
  return (
    <PageLayout>
      {/* Coming Soon Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="px-4 py-2">
              <Clock className="mr-2 h-4 w-4" />
              Coming Soon
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Partner Program
              <br />
              <span className="text-primary">Coming Soon</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              We're building something special for professionals who want to share their expertise.
              Be the first to know when our partner program launches.
            </p>

            <div className="max-w-md mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" className="shrink-0">
                    <Mail className="w-4 h-4 mr-2" />
                    Notify Me
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-2 p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thanks! We'll reach out when it's ready.</span>
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              We'll reach out when the partner program is ready. No spam, ever.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}