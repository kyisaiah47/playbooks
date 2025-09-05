"use client"

export function PostpartumGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Postpartum Recovery & Adjustment Guide</h1>
        <p className="text-muted-foreground">Navigate your physical recovery and emotional adjustment during the &apos;fourth trimester&apos; after birth.</p>
      </div>

      {/* Physical Recovery */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Physical Recovery Timeline</h2>
        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
          <p className="text-sm">Recovery varies greatly between individuals and delivery types. Here&apos;s what to generally expect.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">First Week After Birth</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Vaginal discharge (lochia):</strong> Heavy, bright red bleeding</li>
                <li>• <strong>Cramping:</strong> As uterus contracts back to normal size</li>
                <li>• <strong>Breast changes:</strong> Engorgement when milk comes in (day 2-5)</li>
                <li>• <strong>Perineal discomfort:</strong> Soreness, swelling from delivery</li>
                <li>• <strong>Fatigue:</strong> Extreme exhaustion from birth and night feedings</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Recovery Support</h3>
              <div className="bg-primary/5 border border-primary/20 rounded p-4 space-y-2 text-sm">
                <div>• <strong>Rest:</strong> Sleep when baby sleeps</div>
                <div>• <strong>Ice packs:</strong> For perineal swelling and pain</div>
                <div>• <strong>Stool softeners:</strong> Prevent constipation</div>
                <div>• <strong>Support garments:</strong> Belly bands or comfortable bras</div>
                <div>• <strong>Pain relief:</strong> Ibuprofen and acetaminophen as needed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Recovery by Delivery Type</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Vaginal Delivery */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Vaginal Delivery Recovery</h3>
                  <span className="text-primary font-bold">6-8 weeks</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Typically faster recovery</p>
                <ul className="text-xs space-y-1">
                  <li>• Perineal healing (tears/episiotomy): 2-6 weeks</li>
                  <li>• Can usually drive when comfortable (1-2 weeks)</li>
                  <li>• Light exercise: walking immediately, others after 2 weeks</li>
                  <li>• Return to normal activities: gradually over 6 weeks</li>
                  <li>• Sexual activity: typically cleared at 6-week checkup</li>
                </ul>
              </div>

              {/* C-Section */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">C-Section Recovery</h3>
                  <span className="text-primary font-bold">8-12 weeks</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Major abdominal surgery</p>
                <ul className="text-xs space-y-1">
                  <li>• Incision healing: 2-3 weeks for outer layer</li>
                  <li>• No driving for 2-3 weeks or while taking pain meds</li>
                  <li>• No lifting over 10 lbs for first 6 weeks</li>
                  <li>• Walking encouraged, stairs limited initially</li>
                  <li>• Full recovery: 6-8 weeks, sometimes longer</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {/* Warning Signs */}
              <div className="bg-destructive/5 border border-destructive/20 rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-destructive">Call Doctor Immediately</h3>
                  <span className="text-destructive font-bold">Emergency Signs</span>
                </div>
                <p className="text-sm text-destructive mb-2">Don&apos;t wait - seek immediate care</p>
                <ul className="text-xs space-y-1 text-destructive">
                  <li>• Fever over 100.4°F (38°C)</li>
                  <li>• Heavy bleeding (soaking pad every hour)</li>
                  <li>• Signs of infection (warm, red, swollen incision)</li>
                  <li>• Severe headaches or vision changes</li>
                  <li>• Chest pain or difficulty breathing</li>
                  <li>• Severe abdominal pain</li>
                </ul>
              </div>

              {/* Self-Care Tips */}
              <div className="bg-primary/5 border border-primary/20 rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-primary">Healing Helpers</h3>
                  <span className="text-primary font-bold">Recovery Aids</span>
                </div>
                <p className="text-sm text-primary mb-2">Support your healing</p>
                <ul className="text-xs space-y-1 text-primary">
                  <li>• Warm sitz baths for perineal comfort</li>
                  <li>• Peri bottle for gentle cleaning</li>
                  <li>• Compression garments for support</li>
                  <li>• Nursing pads for breast milk leaks</li>
                  <li>• High-fiber foods to prevent constipation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Adjustment */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Emotional & Mental Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Normal Emotional Changes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>&apos;Baby Blues&apos; (50-80% of new moms):</strong> Crying, mood swings, anxiety in first 2 weeks</li>
              <li>• <strong>Overwhelming feelings:</strong> Joy mixed with worry and exhaustion</li>
              <li>• <strong>Identity shift:</strong> Adjusting to being a parent</li>
              <li>• <strong>Relationship changes:</strong> With partner, friends, family</li>
              <li>• <strong>Loss of control:</strong> Life revolves around baby&apos;s needs</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Coping Strategies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>Accept help:</strong> Let others cook, clean, hold baby</li>
              <li>• <strong>Lower expectations:</strong> House doesn&apos;t need to be perfect</li>
              <li>• <strong>Connect with others:</strong> New parent groups, trusted friends</li>
              <li>• <strong>Take breaks:</strong> Even 15 minutes alone helps</li>
              <li>• <strong>Talk about feelings:</strong> With partner, family, or counselor</li>
              <li>• <strong>Celebrate small wins:</strong> Everyone fed and alive = success</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Postpartum Depression */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Recognizing Postpartum Depression</h2>
        <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
          <p className="text-sm mb-4 text-secondary-foreground">
            Postpartum depression affects 10-20% of new mothers and can occur anytime in the first year. 
            It&apos;s a medical condition, not a personal failing, and treatment is available.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-secondary-foreground">Warning Signs to Watch For</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                <li>• Persistent sadness, anxiety, or irritability</li>
                <li>• Loss of interest in baby or activities you used to enjoy</li>
                <li>• Difficulty bonding with or caring for baby</li>
                <li>• Thoughts of harming yourself or baby</li>
                <li>• Severe mood swings or rage</li>
                <li>• Inability to sleep even when baby sleeps</li>
                <li>• Loss of appetite or overeating</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-secondary-foreground">Getting Help</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                <li>• Talk to your healthcare provider immediately</li>
                <li>• Consider counseling or therapy</li>
                <li>• Medication may be helpful and safe while breastfeeding</li>
                <li>• Join support groups (online or in-person)</li>
                <li>• Ask family/friends for specific help</li>
                <li>• Remember: seeking help makes you a good parent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Breastfeeding Support */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Breastfeeding & Feeding Support</h2>
        <div className="bg-muted/30 border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Common Breastfeeding Challenges</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Sore nipples:</strong> Usually improves with proper latch</li>
                <li>• <strong>Engorgement:</strong> Hot/cold compresses, frequent feeding</li>
                <li>• <strong>Low milk supply:</strong> Feed more frequently, stay hydrated</li>
                <li>• <strong>Blocked ducts:</strong> Massage, warm compresses, varied positions</li>
                <li>• <strong>Mastitis:</strong> Fever, flu-like symptoms - see doctor</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Remember About Feeding</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fed is best - breast milk, formula, or combination</li>
                <li>• Lactation consultants can help with problems</li>
                <li>• It&apos;s okay to stop breastfeeding if it&apos;s not working</li>
                <li>• Formula feeding allows others to help with feeds</li>
                <li>• Your mental health matters more than feeding method</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship Changes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Relationship & Family Adjustments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Partnership Changes</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Less time together:</strong> Baby&apos;s needs come first</li>
              <li>• <strong>Different stress levels:</strong> Both parents are adjusting</li>
              <li>• <strong>Physical intimacy:</strong> May take time to resume</li>
              <li>• <strong>Communication is key:</strong> Express needs and feelings</li>
              <li>• <strong>Tag-team approach:</strong> Take turns with baby care and rest</li>
              <li>• <strong>Be patient:</strong> Relationship will find new normal</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Extended Family & Friends</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Set boundaries:</strong> It&apos;s okay to say no to visits</li>
              <li>• <strong>Ask for specific help:</strong> Meals, laundry, groceries</li>
              <li>• <strong>Manage advice:</strong> Everyone has opinions about babies</li>
              <li>• <strong>Protect your time:</strong> Rest is more important than entertaining</li>
              <li>• <strong>Some relationships change:</strong> Priorities shift with parenthood</li>
              <li>• <strong>Find your village:</strong> Connect with other new parents</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Return to Work */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Returning to Work & Finding Balance</h2>
        <div className="bg-muted/30 border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Preparing for Work Return</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Start childcare 1-2 weeks early for adjustment</li>
                <li>• Practice pumping schedule if breastfeeding</li>
                <li>• Prepare work wardrobe (bodies change!)</li>
                <li>• Organize baby care supplies and routines</li>
                <li>• Discuss flexible options with employer</li>
                <li>• Plan for sick days (babies get sick often)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Managing Working Parent Guilt</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Remember: working doesn&apos;t make you a bad parent</li>
                <li>• Quality time matters more than quantity</li>
                <li>• Childcare providers become part of your village</li>
                <li>• It&apos;s normal to feel conflicted about leaving baby</li>
                <li>• Focus on the positives work brings your family</li>
                <li>• Be present when you&apos;re home, let work stay at work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Care */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Self-Care During the Fourth Trimester</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Physical Self-Care</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Sleep:</strong> Rest whenever possible, even short naps</li>
              <li>• <strong>Nutrition:</strong> Healthy meals and snacks, stay hydrated</li>
              <li>• <strong>Movement:</strong> Gentle walks, postpartum yoga when cleared</li>
              <li>• <strong>Hygiene:</strong> Daily shower, comfortable clothing</li>
              <li>• <strong>Medical care:</strong> Keep postpartum appointments</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Emotional Self-Care</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Alone time:</strong> Even 10 minutes helps recharge</li>
              <li>• <strong>Hobbies:</strong> Small activities you enjoy</li>
              <li>• <strong>Social connection:</strong> Adult conversation matters</li>
              <li>• <strong>Journal:</strong> Process feelings and experiences</li>
              <li>• <strong>Professional help:</strong> Counseling is strength, not weakness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">You&apos;re Stronger Than You Know</h2>
          <p className="text-sm mb-4">
            The postpartum period is often called the &apos;fourth trimester&apos; because it&apos;s a continuation 
            of pregnancy - you&apos;re still growing and changing, just now as a parent instead of while pregnant. 
            It&apos;s normal to feel overwhelmed, exhausted, and unsure of yourself. Every parent goes through this.
          </p>
          <p className="text-sm font-medium">
            Be patient with yourself, ask for help when you need it, and remember that taking care of yourself 
            is taking care of your baby. You don&apos;t have to be perfect - you just have to be present and loving, 
            and you already are.
          </p>
        </div>
      </section>
    </div>
  )
}