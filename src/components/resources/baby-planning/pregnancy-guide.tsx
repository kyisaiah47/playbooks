"use client"

export function PregnancyGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Pregnancy Week-by-Week Guide</h1>
        <p className="text-muted-foreground">Track your baby&apos;s development and understand what changes to expect throughout your pregnancy journey.</p>
      </div>

      {/* First Trimester */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">First Trimester (Weeks 1-12)</h2>
        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
          <p className="text-sm">The most critical period for your baby&apos;s development. Major organs and body systems begin forming.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Baby&apos;s Development</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Week 4:</strong> Heart begins to beat, neural tube forms</li>
                <li>• <strong>Week 6:</strong> Brain and spinal cord develop rapidly</li>
                <li>• <strong>Week 8:</strong> Arms, legs, fingers, and toes appear</li>
                <li>• <strong>Week 10:</strong> All major organs are formed</li>
                <li>• <strong>Week 12:</strong> Baby is about 2.5 inches long</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">What You Might Experience</h3>
              <div className="bg-primary/5 border border-primary/20 rounded p-4 space-y-2 text-sm">
                <div>• Morning sickness and nausea</div>
                <div>• Breast tenderness and swelling</div>
                <div>• Fatigue and need for more sleep</div>
                <div>• Frequent urination</div>
                <div>• Food aversions and cravings</div>
                <div>• Mood swings and emotional changes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Trimester */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Second Trimester (Weeks 13-27)</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <p className="text-sm mb-4">Often called the &apos;golden period&apos; of pregnancy. Morning sickness typically subsides and energy returns.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Baby Development */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Baby&apos;s Growth</h3>
                  <span className="text-primary font-bold">Weeks 13-27</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Rapid growth and movement</p>
                <ul className="text-xs space-y-1">
                  <li>• Week 16: Gender may be visible on ultrasound</li>
                  <li>• Week 18-20: You may feel first movements</li>
                  <li>• Week 20: Anatomy scan reveals detailed development</li>
                  <li>• Week 24: Baby can hear sounds from outside</li>
                  <li>• Week 27: Baby is about 14-15 inches long</li>
                </ul>
              </div>

              {/* Mom Changes */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Your Body Changes</h3>
                  <span className="text-primary font-bold">Most Comfortable</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Energy returns, symptoms improve</p>
                <ul className="text-xs space-y-1">
                  <li>• Morning sickness usually ends</li>
                  <li>• Energy levels increase</li>
                  <li>• Baby bump becomes visible</li>
                  <li>• Skin and hair may improve</li>
                  <li>• Sleep is still relatively comfortable</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {/* Important Tests */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Key Appointments</h3>
                  <span className="text-primary font-bold">Don&apos;t Miss</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Important screenings and tests</p>
                <ul className="text-xs space-y-1">
                  <li>• 15-20 weeks: AFP screening or quad screen</li>
                  <li>• 18-22 weeks: Detailed anatomy ultrasound</li>
                  <li>• 24-28 weeks: Glucose tolerance test</li>
                  <li>• Monthly prenatal checkups</li>
                  <li>• Blood pressure and weight monitoring</li>
                </ul>
              </div>

              {/* Preparations */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Start Planning</h3>
                  <span className="text-primary font-bold">Great Time</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Energy for preparations</p>
                <ul className="text-xs space-y-1">
                  <li>• Plan and book baby shower</li>
                  <li>• Start nursery planning</li>
                  <li>• Research childcare options</li>
                  <li>• Consider maternity photos</li>
                  <li>• Begin registry creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Trimester */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Third Trimester (Weeks 28-40+)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Baby&apos;s Final Development</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Week 28: Eyes open and close, brain develops rapidly</li>
              <li>• Week 32: Bones harden, baby practices breathing</li>
              <li>• Week 36: Baby is considered full-term if born</li>
              <li>• Week 37-40: Final weight gain, organs mature</li>
              <li>• Week 40: Average due date, baby ready for birth</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">What to Expect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Increased discomfort and fatigue</li>
              <li>• Braxton Hicks contractions</li>
              <li>• Shortness of breath, heartburn</li>
              <li>• Frequent urination returns</li>
              <li>• Difficulty sleeping</li>
              <li>• Nesting instinct and anxiety about birth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Milestones */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Key Pregnancy Milestones</h2>
        <div className="bg-muted/30 border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Medical Milestones</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Week 6-8: First prenatal appointment</li>
                <li>• Week 10-13: First trimester screening</li>
                <li>• Week 18-22: Anatomy scan ultrasound</li>
                <li>• Week 24-28: Glucose tolerance test</li>
                <li>• Week 35-37: Group B strep test</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Personal Milestones</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Week 12: Many share pregnancy news</li>
                <li>• Week 16-20: First movements felt</li>
                <li>• Week 20: Halfway point celebration</li>
                <li>• Week 28: Third trimester begins</li>
                <li>• Week 36: Baby considered full-term</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition & Health */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Staying Healthy Throughout Pregnancy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Essential Nutrients</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Folic Acid:</strong> 600-800 mcg daily for neural tube development</li>
              <li>• <strong>Iron:</strong> 27 mg daily to prevent anemia</li>
              <li>• <strong>Calcium:</strong> 1000 mg daily for baby&apos;s bones and teeth</li>
              <li>• <strong>DHA:</strong> 200-300 mg daily for brain development</li>
              <li>• <strong>Protein:</strong> 75-100g daily for growth</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Exercise & Wellness</h3>
            <ul className="space-y-2 text-sm">
              <li>• 150 minutes of moderate exercise weekly</li>
              <li>• Prenatal yoga and swimming are excellent</li>
              <li>• Stay hydrated with 8-10 glasses of water daily</li>
              <li>• Get 7-9 hours of sleep when possible</li>
              <li>• Manage stress through relaxation techniques</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="space-y-4">
        <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-destructive mb-4">When to Call Your Doctor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-destructive mb-2">Immediate Medical Attention</h3>
              <ul className="space-y-1 text-sm text-destructive">
                <li>• Severe abdominal pain or cramping</li>
                <li>• Heavy bleeding or bright red bleeding</li>
                <li>• Severe headaches with vision changes</li>
                <li>• Sudden swelling of hands, face, or feet</li>
                <li>• Persistent vomiting or inability to keep fluids down</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-destructive mb-2">Contact Your Provider</h3>
              <ul className="space-y-1 text-sm text-destructive">
                <li>• Decreased fetal movement after week 28</li>
                <li>• Signs of preterm labor before 37 weeks</li>
                <li>• Fever over 101°F (38.3°C)</li>
                <li>• Burning or pain during urination</li>
                <li>• Any concerns about your pregnancy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Every Pregnancy is Unique</h2>
          <p className="text-sm mb-4">
            Remember that every pregnancy is different, and your experience may not match exactly what&apos;s described here. 
            Trust your body, communicate openly with your healthcare provider, and don&apos;t hesitate to ask questions 
            or seek support when you need it.
          </p>
          <p className="text-sm font-medium">
            This is an incredible journey of growing a new life. Be patient with yourself, celebrate the milestones, 
            and prepare for the amazing adventure of parenthood ahead.
          </p>
        </div>
      </section>
    </div>
  )
}