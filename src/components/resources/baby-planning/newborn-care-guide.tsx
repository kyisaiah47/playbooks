"use client"

export function NewbornCareGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Newborn Care Guide</h1>
        <p className="text-muted-foreground">Essential care instructions and tips for your baby&apos;s first weeks and months of life.</p>
      </div>

      {/* Basic Care */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Daily Care Basics</h2>
        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
          <p className="text-sm">Newborns have simple but specific needs. Here are the fundamental care tasks you&apos;ll do daily.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Diaper Changes (8-12 times daily)</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Frequency:</strong> Before or after each feeding</li>
                <li>• <strong>Wet diapers:</strong> 6+ per day shows good hydration</li>
                <li>• <strong>Dirty diapers:</strong> 3+ per day in first month</li>
                <li>• <strong>Signs to change:</strong> Heavy, soiled, or every 2-3 hours</li>
                <li>• <strong>Cleaning:</strong> Front to back, gentle patting dry</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Cord Care</h3>
              <div className="bg-primary/5 border border-primary/20 rounded p-4 space-y-2 text-sm">
                <div>• Keep cord stump clean and dry</div>
                <div>• Fold diaper below cord to allow air exposure</div>
                <div>• Clean with water only, no alcohol needed</div>
                <div>• Should fall off in 7-21 days</div>
                <div>• Call doctor if red, swollen, or has discharge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feeding Guide */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Feeding Your Newborn</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Breastfeeding */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Breastfeeding</h3>
                  <span className="text-primary font-bold">Every 1-3 hours</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Natural feeding method</p>
                <ul className="text-xs space-y-1">
                  <li>• 8-12 times per day, including night</li>
                  <li>• Each session: 15-45 minutes</li>
                  <li>• Let baby finish one breast before offering other</li>
                  <li>• Look for swallowing sounds and rhythmic sucking</li>
                  <li>• Baby should seem satisfied after feeding</li>
                </ul>
              </div>

              {/* Formula Feeding */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Formula Feeding</h3>
                  <span className="text-primary font-bold">Every 2-4 hours</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Bottle feeding schedule</p>
                <ul className="text-xs space-y-1">
                  <li>• Newborn: 1-3 oz every 2-3 hours</li>
                  <li>• 1 month: 2-4 oz every 3-4 hours</li>
                  <li>• Always test temperature on your wrist</li>
                  <li>• Hold baby upright, tilt bottle so nipple is full</li>
                  <li>• Burp halfway through and after feeding</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {/* Hunger Cues */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Hunger Signs</h3>
                  <span className="text-primary font-bold">Early Cues</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Feed before baby cries</p>
                <ul className="text-xs space-y-1">
                  <li>• Rooting (turning head toward touch)</li>
                  <li>• Lip smacking or sucking motions</li>
                  <li>• Hand to mouth movements</li>
                  <li>• Increased alertness and activity</li>
                  <li>• Crying is a late hunger cue</li>
                </ul>
              </div>

              {/* Burping */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Burping Techniques</h3>
                  <span className="text-primary font-bold">Prevent Gas</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Help baby release air</p>
                <ul className="text-xs space-y-1">
                  <li>• Over shoulder: pat or rub back gently</li>
                  <li>• Sitting up: support chin, lean slightly forward</li>
                  <li>• Across lap: face down, pat back gently</li>
                  <li>• Try for 3-5 minutes, may not always burp</li>
                  <li>• Keep burp cloth handy for spit-up</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sleep Guide */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Safe Sleep & Soothing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Safe Sleep Guidelines</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Always place baby on back</strong> to sleep</li>
              <li>• Use firm sleep surface with tight-fitting sheet</li>
              <li>• Keep crib bare - no blankets, bumpers, toys</li>
              <li>• Room sharing without bed sharing recommended</li>
              <li>• Avoid smoke exposure and overheating</li>
              <li>• Breastfeeding and pacifier use may reduce SIDS risk</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Soothing Techniques</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Swaddling:</strong> Helps baby feel secure</li>
              <li>• <strong>Shushing:</strong> Mimics sounds from womb</li>
              <li>• <strong>Side/stomach position:</strong> For calming only (never sleep)</li>
              <li>• <strong>Swinging/rocking:</strong> Gentle rhythmic motion</li>
              <li>• <strong>Sucking:</strong> Pacifier or clean finger</li>
              <li>• Try one technique at a time, be patient</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bathing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Bathing Your Newborn</h2>
        <div className="bg-muted/30 border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Before Cord Falls Off (Sponge Baths)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 2-3 times per week unless very messy</li>
                <li>• Use warm washcloths, not submersion</li>
                <li>• Keep baby covered except area being washed</li>
                <li>• Water temperature: warm, not hot (test with elbow)</li>
                <li>• Clean face first, diaper area last</li>
              </ul>
              <div className="bg-secondary/10 border border-secondary/20 rounded p-3 text-sm">
                <strong>Supplies needed:</strong> 2 washcloths, towel, gentle baby soap, 
                clean diaper and clothes, soft surface
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">After Cord Heals (Tub Baths)</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use baby bathtub with 2-3 inches of water</li>
                <li>• Support baby&apos;s head and neck at all times</li>
                <li>• Never leave baby alone, even for a second</li>
                <li>• Start with 5-10 minute baths</li>
                <li>• Wash hair last to prevent heat loss</li>
              </ul>
              <div className="bg-primary/10 border border-primary/20 rounded p-3 text-sm">
                <strong>Safety tip:</strong> Keep one hand supporting baby at all times. 
                If you forgot something, wrap baby in towel and take them with you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development & Interaction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Early Development & Bonding</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">What Newborns Can Do</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>See 8-12 inches:</strong> Perfect for face-to-face contact</li>
              <li>• <strong>Prefer human faces:</strong> Especially high contrast</li>
              <li>• <strong>Recognize your voice:</strong> Heard in womb</li>
              <li>• <strong>Reflexes:</strong> Sucking, rooting, grasping, startle</li>
              <li>• <strong>Communicate through crying:</strong> Different cries for different needs</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Ways to Bond & Stimulate</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Skin-to-skin contact:</strong> Regulates temperature and heart rate</li>
              <li>• <strong>Talk and sing:</strong> Helps language development</li>
              <li>• <strong>Make eye contact:</strong> During feeding and diaper changes</li>
              <li>• <strong>Gentle massage:</strong> Promotes relaxation and bonding</li>
              <li>• <strong>Tummy time:</strong> Start with 2-3 minutes when awake</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Health Monitoring & When to Call Doctor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-primary">Normal Newborn Things</h3>
            <ul className="space-y-2 text-sm text-primary">
              <li>• <strong>Frequent feeding:</strong> Every 1-3 hours is normal</li>
              <li>• <strong>Lots of sleep:</strong> 14-17 hours per day</li>
              <li>• <strong>Irregular breathing:</strong> Pauses up to 10 seconds</li>
              <li>• <strong>Sneezing/hiccups:</strong> Clearing airways and immature reflexes</li>
              <li>• <strong>Peeling skin:</strong> Especially on hands and feet</li>
              <li>• <strong>Crossed eyes:</strong> Normal until 3-4 months</li>
            </ul>
          </div>

          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-destructive">Call Doctor If You Notice</h3>
            <ul className="space-y-2 text-sm text-destructive">
              <li>• <strong>Fever:</strong> Temperature over 100.4°F (38°C)</li>
              <li>• <strong>Feeding issues:</strong> Won&apos;t eat or constant spitting up</li>
              <li>• <strong>Lethargy:</strong> Hard to wake or unusually floppy</li>
              <li>• <strong>Breathing problems:</strong> Fast, labored, or blue color</li>
              <li>• <strong>Crying:</strong> Inconsolable for hours or high-pitched</li>
              <li>• <strong>Diaper output:</strong> No wet diapers for 6+ hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Common Newborn Concerns</h2>
        <div className="bg-muted/30 border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Crying & Fussiness</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Normal for babies to cry 1-3 hours daily</li>
                <li>• Peak fussiness at 6-8 weeks, improves by 3-4 months</li>
                <li>• Check: hungry, tired, dirty diaper, too hot/cold</li>
                <li>• Try soothing techniques: swaddle, shush, swing</li>
                <li>• It&apos;s okay to put baby down safely and take a break</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Sleep Patterns</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Newborns don&apos;t distinguish day from night</li>
                <li>• Sleep in 2-4 hour stretches initially</li>
                <li>• Most babies sleep through night by 3-6 months</li>
                <li>• Create bedtime routine even if it doesn&apos;t seem to work</li>
                <li>• Remember: every baby is different</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Trust Yourself</h2>
          <p className="text-sm mb-4">
            Caring for a newborn can feel overwhelming, but remember that you&apos;re learning together. Babies are 
            more resilient than they seem, and your parental instincts are stronger than you think. Don&apos;t 
            hesitate to ask for help from your healthcare provider, family, or friends.
          </p>
          <p className="text-sm font-medium">
            Every day gets a little easier, and every small milestone - from the first smile to sleeping a longer 
            stretch - will feel like a huge victory. You&apos;re doing better than you think!
          </p>
        </div>
      </section>
    </div>
  )
}