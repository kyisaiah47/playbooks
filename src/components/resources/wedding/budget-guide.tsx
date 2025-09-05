"use client"

export function BudgetGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Wedding Budget Planning Guide</h1>
        <p className="text-muted-foreground">Learn how to create and stick to a realistic wedding budget that works for your dreams and financial goals.</p>
      </div>

      {/* Setting Your Budget */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Setting Your Total Budget</h2>
        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
          <p className="text-sm">The average wedding in the US costs between $20,000-$35,000, but your budget should reflect your financial situation and priorities.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Determine What You Can Afford</h3>
              <ul className="space-y-2 text-sm">
                <li>• Calculate your current savings dedicated to the wedding</li>
                <li>• Decide how much you can save monthly until the wedding</li>
                <li>• Determine family contributions (get commitments in writing)</li>
                <li>• Consider if you're willing to take on debt for the wedding</li>
                <li>• Factor in engagement party, shower, and honeymoon costs</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Budget Reality Check</h3>
              <div className="bg-primary/5 border border-primary/20 rounded p-4 space-y-2 text-sm">
                <div className="flex justify-between"><span>Ultra Budget Wedding:</span><span className="font-medium">$5,000-$10,000</span></div>
                <div className="flex justify-between"><span>Budget-Friendly:</span><span className="font-medium">$10,000-$20,000</span></div>
                <div className="flex justify-between"><span>Average Wedding:</span><span className="font-medium">$20,000-$35,000</span></div>
                <div className="flex justify-between"><span>Luxury Wedding:</span><span className="font-medium">$50,000+</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Typical Budget Allocation</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <p className="text-sm mb-4">Here's how couples typically allocate their wedding budget. Adjust percentages based on your priorities.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Reception */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Reception Venue & Catering</h3>
                  <span className="text-primary font-bold">40-45%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Usually your biggest expense</p>
                <ul className="text-xs space-y-1">
                  <li>• Venue rental fees</li>
                  <li>• Food and beverages</li>
                  <li>• Service charges and gratuities</li>
                  <li>• Tables, chairs, linens (if not included)</li>
                </ul>
              </div>

              {/* Photography */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Photography & Videography</h3>
                  <span className="text-primary font-bold">10-15%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Memories last forever</p>
                <ul className="text-xs space-y-1">
                  <li>• Wedding photographer</li>
                  <li>• Videographer (optional)</li>
                  <li>• Engagement photos</li>
                  <li>• Photo albums and prints</li>
                </ul>
              </div>

              {/* Attire */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Attire & Beauty</h3>
                  <span className="text-primary font-bold">8-10%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Looking your best</p>
                <ul className="text-xs space-y-1">
                  <li>• Wedding dress and alterations</li>
                  <li>• Groom's attire</li>
                  <li>• Hair and makeup</li>
                  <li>• Shoes and accessories</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {/* Flowers */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Flowers & Decorations</h3>
                  <span className="text-primary font-bold">8-10%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Setting the scene</p>
                <ul className="text-xs space-y-1">
                  <li>• Bridal bouquet and boutonnieres</li>
                  <li>• Ceremony decorations</li>
                  <li>• Reception centerpieces</li>
                  <li>• Additional decor and lighting</li>
                </ul>
              </div>

              {/* Music */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Music & Entertainment</h3>
                  <span className="text-primary font-bold">8-10%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Keep the party going</p>
                <ul className="text-xs space-y-1">
                  <li>• DJ or live band</li>
                  <li>• Ceremony musicians</li>
                  <li>• Sound system rental</li>
                  <li>• Special entertainment</li>
                </ul>
              </div>

              {/* Other Expenses */}
              <div className="bg-background rounded p-4 border">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Other Essentials</h3>
                  <span className="text-primary font-bold">15-20%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Everything else</p>
                <ul className="text-xs space-y-1">
                  <li>• Invitations and stationery (3%)</li>
                  <li>• Wedding cake (3%)</li>
                  <li>• Transportation (3%)</li>
                  <li>• Wedding favors (2%)</li>
                  <li>• Miscellaneous and unexpected (5%)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Saving Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Smart Money-Saving Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Venue & Catering Savings</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Choose Friday, Sunday, or off-season dates (30-40% savings)</li>
              <li>• Consider non-traditional venues (parks, community centers)</li>
              <li>• Opt for brunch or lunch instead of dinner</li>
              <li>• Limit or skip the open bar (signature cocktails only)</li>
              <li>• Choose venues that include tables, chairs, and linens</li>
              <li>• Book venues that allow outside catering</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Decor & Flowers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use seasonal and locally-grown flowers</li>
              <li>• Repurpose ceremony flowers for reception centerpieces</li>
              <li>• DIY simple decorations and signage</li>
              <li>• Use candles and string lights for ambiance</li>
              <li>• Borrow or rent decorations from friends/family</li>
              <li>• Choose venues with beautiful natural backdrops</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Photography & Music</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Hire newer photographers building their portfolio</li>
              <li>• Skip videography or hire a student filmmaker</li>
              <li>• Use a DJ instead of a live band</li>
              <li>• Create your own playlist for cocktail hour</li>
              <li>• Ask photographer friends to capture candid moments</li>
              <li>• Use photo booth apps instead of hiring a photo booth</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Attire & Beauty</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Shop sample sales, outlets, or secondhand dresses</li>
              <li>• Rent instead of buy (dress, tuxedo, accessories)</li>
              <li>• Do your own makeup or ask a talented friend</li>
              <li>• Choose a hairstyle you can maintain throughout the day</li>
              <li>• Borrow jewelry and accessories from family</li>
              <li>• Consider non-traditional attire options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Budget Mistakes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Common Budget Mistakes to Avoid</h2>
        <div className="bg-muted/30 border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Planning Pitfalls</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Not setting a realistic budget from the start</li>
                <li>• Forgetting about taxes, tips, and service fees</li>
                <li>• Not having a contingency fund (aim for 5-10%)</li>
                <li>• Letting emotions override budget decisions</li>
                <li>• Not tracking expenses as you go</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Spending Traps</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Upgrading everything once you start planning</li>
                <li>• Not reading contracts carefully for hidden costs</li>
                <li>• Saying yes to every vendor add-on</li>
                <li>• Not negotiating or shopping around</li>
                <li>• Spending too much on items guests won't notice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Tracking Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">How to Track Your Budget</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Tools & Systems</h3>
              <ul className="space-y-2 text-sm">
                <li>• Use a wedding budget spreadsheet or app</li>
                <li>• Set up a separate wedding savings account</li>
                <li>• Take photos of all contracts and receipts</li>
                <li>• Review your budget weekly</li>
                <li>• Use wedding planning apps with budget tracking</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Staying on Track</h3>
              <ul className="space-y-2 text-sm">
                <li>• Get quotes from 3+ vendors before deciding</li>
                <li>• Read all contracts carefully before signing</li>
                <li>• Ask about payment schedules and cancellation policies</li>
                <li>• Set spending limits for each category</li>
                <li>• Communicate budget constraints with your partner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tips */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Remember: It's About Your Love Story</h2>
          <p className="text-sm mb-4">
            The most important thing is celebrating your commitment to each other. A beautiful, memorable wedding 
            doesn't have to break the bank. Focus on what matters most to you as a couple, and don't feel pressured 
            to include traditions or elements that don't align with your values or budget.
          </p>
          <p className="text-sm font-medium">
            Your guests are there to celebrate your love - they care about your happiness, not how much you spent 
            on centerpieces or favors.
          </p>
        </div>
      </section>
    </div>
  )
}