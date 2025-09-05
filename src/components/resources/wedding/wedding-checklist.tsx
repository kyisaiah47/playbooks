"use client"

export function WeddingChecklist() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Complete Wedding Planning Checklist</h1>
        <p className="text-muted-foreground">A comprehensive month-by-month guide to planning your perfect wedding day.</p>
      </div>

      {/* 12+ Months Before */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">12+ Months Before</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Essential First Steps</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Set your overall budget and determine who's contributing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Create your initial guest list (estimate 100-150 people)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Choose your wedding date (consider season and day of week)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Book your ceremony and reception venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Hire your wedding photographer and videographer</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Getting Organized</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Consider hiring a wedding planner or coordinator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Start shopping for your wedding dress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Choose your wedding party (maid of honor, bridesmaids, groomsmen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Research and book your officiant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Start thinking about your honeymoon destination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9-11 Months Before */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">9-11 Months Before</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Major Vendors</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Book your caterer and finalize menu options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Hire your DJ, band, or music entertainment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Choose and book your florist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Order your wedding cake or dessert</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Book transportation (limo, car service)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Save the Dates & Planning</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Design and send save-the-date cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Create your wedding website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Register for wedding gifts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Book hotel room blocks for out-of-town guests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Plan and book your honeymoon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6-8 Months Before */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">6-8 Months Before</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Invitations & Details</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Order wedding invitations and stationery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Finalize your guest list and collect addresses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Choose wedding party attire and accessories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Schedule dress fittings and alterations</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Legal & Beauty Prep</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Apply for marriage license (check local requirements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Book hair and makeup trial and wedding day services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Start any beauty treatments (facials, teeth whitening)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Plan rehearsal dinner details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3-5 Months Before */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">3-5 Months Before</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Invitations & RSVPs</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Mail wedding invitations (6-8 weeks before wedding)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Track RSVPs and follow up with non-responders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Finalize ceremony details and write vows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Order wedding favors and welcome bags</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Final Details</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Create detailed wedding day timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Choose ceremony and reception music</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Order wedding rings (allow time for engraving)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Purchase wedding insurance policy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 1-2 Months Before */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">1-2 Months Before</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Final Confirmations</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Confirm final headcount with caterer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Finalize seating arrangements and place cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Confirm details with all vendors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Schedule final dress fitting</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Last-Minute Preparations</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Delegate day-of responsibilities to wedding party</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Prepare emergency kit and day-of supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Write thank you card for parents and wedding party</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Confirm honeymoon reservations and travel documents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Week */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Wedding Week</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Final Week Tasks</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Confirm arrival times with all vendors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Pack for honeymoon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Prepare vendor tip envelopes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Give wedding rings to best man/maid of honor</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Relaxation & Self-Care</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Get a good night's sleep and stay hydrated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Eat healthy meals and limit alcohol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Do something relaxing (massage, manicure, light exercise)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Trust your team and enjoy your special day!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Pro Tips for Success</h2>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Budget Smart</h3>
              <ul className="space-y-2 text-sm">
                <li>• Allocate 40-45% of budget to venue and catering</li>
                <li>• Set aside 5-10% for unexpected expenses</li>
                <li>• Consider off-season or Friday/Sunday weddings for savings</li>
                <li>• Prioritize what matters most to you as a couple</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Stay Organized</h3>
              <ul className="space-y-2 text-sm">
                <li>• Keep all contracts and vendor info in one place</li>
                <li>• Use a wedding planning app or spreadsheet</li>
                <li>• Take photos of inspiration and ideas</li>
                <li>• Delegate tasks to trusted friends and family</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}