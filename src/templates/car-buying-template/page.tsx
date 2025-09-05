import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Car, ArrowRight, DollarSign, Search, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Car Buying Template | Templata",
  description: "Streamline your car buying process with our comprehensive template. Track vehicles, compare options, manage financing, and organize your entire car buying journey.",
  keywords: "car buying template, vehicle purchasing, car shopping organizer, auto buying guide",
  openGraph: {
    title: "Car Buying Template | Templata",
    description: "Streamline your car buying process with our comprehensive template",
    type: "website",
  },
};

function TemplateHero() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Car Buying Template
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Smart Car Buying Made Simple
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Navigate your car buying journey with confidence using our comprehensive template. 
          Track vehicles, compare options, manage financing, and stay organized throughout the process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/templates/car-buying">
            <Button size="lg" className="w-full sm:w-auto">
              <Car className="mr-2 h-5 w-5" />
              Start Car Buying
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            View Features
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function CarBuyingTemplatePage() {
  const features = [
    {
      icon: Search,
      title: "Vehicle Search & Comparison",
      description: "Track and compare multiple vehicles with detailed specifications and pricing"
    },
    {
      icon: DollarSign,
      title: "Financing Management",
      description: "Compare loan offers, calculate payments, and manage pre-approvals"
    },
    {
      icon: Calendar,
      title: "Test Drive Scheduling",
      description: "Organize test drives and maintain detailed notes on each vehicle"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TemplateHero />

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need for Car Buying</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive tools and organization to make your car buying experience stress-free
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions about using our car buying template
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the car buying template help?</AccordionTrigger>
              <AccordionContent>
                The template provides a structured approach to car buying with sections for vehicle research, 
                financing options, test drive scheduling, and documentation management. It helps you stay 
                organized and make informed decisions throughout the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I track multiple vehicles?</AccordionTrigger>
              <AccordionContent>
                Yes! The template includes a vehicle pipeline to track cars at different stages - from initial 
                research through negotiation to final purchase. You can compare specifications, pricing, 
                and your notes for each vehicle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What financing tools are included?</AccordionTrigger>
              <AccordionContent>
                The template includes loan calculators, pre-approval tracking, and comparison tools for 
                different financing options including bank loans, credit unions, and dealer financing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is the template suitable for both new and used cars?</AccordionTrigger>
              <AccordionContent>
                Absolutely! The template works for both new and used car purchases, with specific sections 
                for vehicle inspections, history reports, and warranty information that are particularly 
                useful for used car buyers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Car Buying Journey?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get organized and make confident decisions with our comprehensive car buying template.
          </p>
          <Link href="/templates/car-buying">
            <Button size="lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}