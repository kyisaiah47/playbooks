"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Activity, TrendingUp, Dumbbell } from "lucide-react"

export function FitnessTemplateHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Complete Fitness Solution
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Body,{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Transform Your Life
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Your complete digital fitness companion with workout tracking, nutrition planning, 
                progress monitoring, and 12 expert-guided sections to help you achieve your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/templates/fitness-journey">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="#features">
                  See How It Works
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Guided Sections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Free to Start</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-background/80 backdrop-blur-sm border rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Fitness Dashboard</h3>
                  <Badge variant="secondary">Live Preview</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-4 border border-blue-200/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-5 h-5 text-blue-500" />
                      <span className="text-sm font-medium">Goals</span>
                    </div>
                    <div className="text-lg font-bold">Weight Loss</div>
                    <div className="text-sm text-muted-foreground">15 lbs remaining</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-4 border border-green-200/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Activity className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium">Workouts</span>
                    </div>
                    <div className="text-lg font-bold">4/4 Week</div>
                    <div className="text-sm text-muted-foreground">On track!</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-4 border border-purple-200/20">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-medium">Progress</span>
                    </div>
                    <div className="text-lg font-bold">-8.2 lbs</div>
                    <div className="text-sm text-muted-foreground">This month</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-4 border border-orange-200/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Dumbbell className="w-5 h-5 text-orange-500" />
                      <span className="text-sm font-medium">Strength</span>
                    </div>
                    <div className="text-lg font-bold">+15%</div>
                    <div className="text-sm text-muted-foreground">This quarter</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span>Today's Progress</span>
                    <span className="text-primary font-medium">85% Complete</span>
                  </div>
                  <div className="mt-2 bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}