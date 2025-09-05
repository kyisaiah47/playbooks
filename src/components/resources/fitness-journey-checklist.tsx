"use client"

export function FitnessChecklist() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Fitness Journey Checklist</h1>
        <p className="text-muted-foreground">
          Your complete step-by-step guide to starting and maintaining a successful fitness journey.
        </p>
      </div>

      <div className="space-y-6">
        {/* Getting Started */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Getting Started (Week 1-2)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Set clear, specific fitness goals</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Take baseline measurements and photos</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Consult with healthcare provider if needed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Assess current fitness level honestly</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Choose primary workout location (gym/home)</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Set realistic timeline for goals</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Research workout programs for your level</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Plan workout schedule around your life</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Get proper workout clothing and shoes</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Create accountability system</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Planning */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Exercise Planning (Week 2-4)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Choose 3-5 basic exercises to master</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Learn proper form for each exercise</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Start with bodyweight or light weights</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Plan rest days for recovery</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Set up workout tracking system</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Include both cardio and strength training</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Plan for progressive overload</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Create backup workout plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Schedule warm-up and cool-down routines</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Find workout videos or apps for guidance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Setup */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Nutrition Setup (Week 3-4)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Calculate daily caloric needs</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Determine protein requirements</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Plan balanced macronutrient ratios</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Stock kitchen with healthy staples</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Plan meal prep schedule</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Choose food tracking method</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Set daily water intake goal</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Plan pre and post-workout nutrition</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Research supplements if desired</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Identify trigger foods and alternatives</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Progress Tracking (Ongoing)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Take weekly progress photos</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Record body measurements monthly</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Track workout performance improvements</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Monitor energy levels and mood</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Log sleep quality and duration</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Assess goal progress monthly</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Adjust plan based on results</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Celebrate non-scale victories</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Schedule regular check-ins with support system</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Document lessons learned and successes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Long-term Success */}
        <div className="bg-muted/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Long-term Success (Month 2+)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Regularly update workout routine</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Learn to listen to your body</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Develop stress management techniques</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Build flexibility into your routine</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Stay educated on fitness and nutrition</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Set new goals as you progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Find ways to enjoy the process</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Build a supportive fitness community</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Practice self-compassion during setbacks</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Make fitness a lifelong habit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-primary">Pro Tips for Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li>• Start small and build consistency before increasing intensity</li>
              <li>• Focus on progress, not perfection - 80% consistency beats 100% intensity</li>
              <li>• Prepare for obstacles in advance with backup plans</li>
              <li>• Celebrate small wins to maintain motivation</li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li>• Track habits and behaviors, not just outcomes</li>
              <li>• Find accountability partners who support your goals</li>
              <li>• Remember that rest and recovery are part of the process</li>
              <li>• Be patient - sustainable changes take time to show results</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}