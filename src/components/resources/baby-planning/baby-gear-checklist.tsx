"use client"

export function BabyGearChecklist() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Baby Gear Checklist</h1>
        <p className="text-muted-foreground">Essential vs. nice-to-have items for your baby&apos;s first year, organized by priority and timeline.</p>
      </div>

      {/* Before Baby Arrives */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Must-Haves Before Baby Arrives</h2>
        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
          <p className="text-sm">These items are essential for bringing baby home and getting through the first few weeks safely and comfortably.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Safety Essentials</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Infant car seat</strong> - Required by law to leave hospital</li>
                <li>• <strong>Crib with firm mattress</strong> - Safe sleep environment</li>
                <li>• <strong>Fitted crib sheets</strong> - 2-3 for easy washing</li>
                <li>• <strong>Sleep sacks or swaddles</strong> - Instead of loose blankets</li>
                <li>• <strong>Baby monitor</strong> - Audio minimum, video preferred</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Feeding Essentials</h3>
              <div className="bg-primary/5 border border-primary/20 rounded p-4 space-y-2 text-sm">
                <div><strong>For Breastfeeding:</strong></div>
                <div>• Nursing pillow and comfortable chair</div>
                <div>• Breast pump (manual or electric)</div>
                <div>• Milk storage bags and bottles</div>
                <div><strong>For Formula Feeding:</strong></div>
                <div>• 6-8 bottles with slow-flow nipples</div>
                <div>• Formula and bottle sterilizer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By Category */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Complete Gear Guide by Category</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Sleep */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Sleep & Safety</h3>
                  <span className="text-primary font-bold">Essential</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Must Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Crib or bassinet with firm mattress</li>
                      <li>• 3-4 fitted crib sheets</li>
                      <li>• Sleep sacks (various weights)</li>
                      <li>• White noise machine</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-foreground mb-1">Nice to Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Rocking chair or glider</li>
                      <li>• Blackout curtains</li>
                      <li>• Crib mobile (remove when baby can sit up)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Clothing */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Clothing Basics</h3>
                  <span className="text-primary font-bold">0-3 Months</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Must Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• 8-10 onesies (short and long sleeve)</li>
                      <li>• 6-8 sleepers with easy snaps</li>
                      <li>• 4-6 pairs of pants</li>
                      <li>• 6-8 pairs of socks</li>
                      <li>• 3-4 hats (newborn loses heat through head)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-foreground mb-1">Nice to Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Special outfits for photos</li>
                      <li>• Scratch mittens</li>
                      <li>• Seasonal outerwear</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Diaper Changing */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Diaper Station</h3>
                  <span className="text-primary font-bold">Daily Use</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Must Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Changing pad with washable covers</li>
                      <li>• Newborn and size 1 diapers</li>
                      <li>• Fragrance-free baby wipes</li>
                      <li>• Diaper rash cream</li>
                      <li>• Diaper pail with refill bags</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-foreground mb-1">Nice to Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Changing table with storage</li>
                      <li>• Wipe warmer</li>
                      <li>• Travel changing pad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Feeding */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Feeding Supplies</h3>
                  <span className="text-primary font-bold">Method Dependent</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Breastfeeding Must-Haves:</p>
                    <ul className="text-xs space-y-1">
                      <li>• 2-3 well-fitting nursing bras</li>
                      <li>• Nursing pillow</li>
                      <li>• Breast pump (electric for working moms)</li>
                      <li>• Milk storage bags</li>
                      <li>• Nipple cream</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Formula Feeding Must-Haves:</p>
                    <ul className="text-xs space-y-1">
                      <li>• 6-8 bottles (4-8oz)</li>
                      <li>• Slow-flow nipples</li>
                      <li>• Bottle brush and sterilizer</li>
                      <li>• Formula dispenser for travel</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bath Time */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Bath Time</h3>
                  <span className="text-primary font-bold">2-3 Times/Week</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Must Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Baby bathtub or bath seat</li>
                      <li>• Gentle baby shampoo/body wash</li>
                      <li>• 3-4 soft washcloths</li>
                      <li>• 2-3 hooded towels</li>
                      <li>• Bath thermometer</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-foreground mb-1">Nice to Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Bath toys for older babies</li>
                      <li>• Non-slip bath mat</li>
                      <li>• Hair rinse cup</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Getting Around</h3>
                  <span className="text-primary font-bold">Mobility</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-primary mb-1">Must Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Infant car seat (rear-facing)</li>
                      <li>• Stroller (can be travel system)</li>
                      <li>• Baby carrier or wrap</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary-foreground mb-1">Nice to Have:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Jogging stroller (after 6+ months)</li>
                      <li>• Additional car seat base</li>
                      <li>• Stroller organizer/cup holder</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Guide */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">When to Buy What</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Buy Early (32+ weeks)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Car seat (install and inspect)</li>
              <li>• Crib and mattress</li>
              <li>• Basic clothing essentials</li>
              <li>• Feeding supplies (whatever method you choose)</li>
              <li>• Diapers and wipes</li>
              <li>• Hospital bag items</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Buy Soon After Birth</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Additional clothing in larger sizes</li>
              <li>• Baby bathtub and bath supplies</li>
              <li>• More burp cloths and bibs</li>
              <li>• Baby care items (thermometer, nail clippers)</li>
              <li>• Stroller (if not purchased earlier)</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Wait Until Later (3+ months)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• High chair (around 6 months)</li>
              <li>• Baby gates and safety items</li>
              <li>• Toys and activity centers</li>
              <li>• Exersaucer or jumper</li>
              <li>• Forward-facing car seat</li>
              <li>• Sippy cups and feeding utensils</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Budget-Friendly Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Smart Shopping Strategies</h2>
        <div className="bg-muted/30 border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Save Money Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Buy gender-neutral items if planning more children</li>
                <li>• Accept hand-me-downs for rapidly outgrown items</li>
                <li>• Register for big-ticket items at baby shower</li>
                <li>• Shop end-of-season sales for future sizes</li>
                <li>• Consider buying used for short-term use items</li>
                <li>• Skip items you can easily buy later when needed</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Safety First</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Never buy used car seats (unknown crash history)</li>
                <li>• Check recall lists before buying anything used</li>
                <li>• Ensure cribs meet current safety standards</li>
                <li>• Buy new mattresses for hygiene and support</li>
                <li>• Look for safety certifications on all products</li>
                <li>• Replace items that show wear or damage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Avoid These Common Mistakes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-destructive">Don&apos;t Over-Buy</h3>
            <ul className="space-y-2 text-sm text-destructive">
              <li>• Too many newborn clothes (babies grow fast!)</li>
              <li>• Expensive gadgets you&apos;ll rarely use</li>
              <li>• Items that aren&apos;t safe for newborns</li>
              <li>• Buying everything in one shopping trip</li>
              <li>• Ignoring your actual lifestyle needs</li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-primary">Smart Approach</h3>
            <ul className="space-y-2 text-sm text-primary">
              <li>• Start with essentials, add items as needed</li>
              <li>• Read reviews before making big purchases</li>
              <li>• Consider your space and storage limitations</li>
              <li>• Think about ease of cleaning and maintenance</li>
              <li>• Buy items that grow with your baby when possible</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Advice */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Remember: Less is More</h2>
          <p className="text-sm mb-4">
            Babies need surprisingly few things to be happy and healthy. Focus on safety, comfort, and your family&apos;s 
            specific needs rather than trying to buy everything on every list you find. You&apos;ll learn what works 
            best for your baby and can always purchase additional items later.
          </p>
          <p className="text-sm font-medium">
            Trust your instincts, start with the basics, and enjoy watching your baby discover the world around them!
          </p>
        </div>
      </section>
    </div>
  )
}