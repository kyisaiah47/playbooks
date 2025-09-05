"use client"

export function InspectionChecklist() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b">
        <h1 className="text-3xl font-bold mb-2">Home Inspection Checklist</h1>
        <p className="text-muted-foreground">Comprehensive guide to what inspectors check and what you should look for during home inspections.</p>
      </div>

      {/* Exterior Inspection */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Exterior Inspection Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Roof & Gutters</h3>
            <div className="bg-background rounded p-4 border">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Shingles:</strong> Missing, cracked, curling, or loose shingles</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Flashing:</strong> Around chimneys, vents, and skylights</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Gutters:</strong> Proper attachment, drainage, and condition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Downspouts:</strong> Directing water away from foundation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Chimney:</strong> Mortar condition, crown, and cap</span>
                </li>
              </ul>
              <div className="mt-3 p-2 bg-destructive/10 border border-destructive/30 rounded text-xs">
                <strong>Red Flags:</strong> Multiple missing shingles, sagging roof lines, water stains
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Siding & Foundation</h3>
            <div className="bg-background rounded p-4 border">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Siding:</strong> Cracks, rot, loose or missing pieces</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Paint:</strong> Peeling, especially on older homes (lead paint)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Foundation:</strong> Cracks, settling, or water damage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Grading:</strong> Soil sloping away from foundation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Windows:</strong> Proper operation, seals, and screens</span>
                </li>
              </ul>
              <div className="mt-3 p-2 bg-destructive/10 border border-destructive/30 rounded text-xs">
                <strong>Red Flags:</strong> Foundation cracks wider than 1/4 inch, water pooling near foundation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Inspection */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Interior Inspection Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Structural Elements</h3>
            <div className="bg-background rounded p-4 border">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Floors:</strong> Squeaks, sagging, unevenness, or soft spots</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Walls:</strong> Cracks, water stains, or bowing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Ceilings:</strong> Sagging, cracks, or water damage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Doors:</strong> Proper operation, alignment, and hardware</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Stairs:</strong> Handrails, balusters, and tread condition</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Attic & Basement</h3>
            <div className="bg-background rounded p-4 border">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Insulation:</strong> Adequate R-value and proper installation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Ventilation:</strong> Ridge vents, soffit vents, exhaust fans</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Moisture:</strong> Signs of water intrusion or condensation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Structural Beams:</strong> Sagging, cracks, or pest damage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span><strong>Storage:</strong> Proper support for stored items</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Major Systems */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Major Systems Inspection</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Electrical System</h3>
            <div className="bg-background rounded p-4 border space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-2">Main Panel</h4>
                <ul className="text-xs space-y-1">
                  <li>• Panel type and age (avoid Federal Pacific)</li>
                  <li>• Proper labeling of circuits</li>
                  <li>• No double-tapped breakers</li>
                  <li>• Adequate amperage (100A minimum)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Throughout House</h4>
                <ul className="text-xs space-y-1">
                  <li>• GFCI outlets in bathrooms, kitchen, garage</li>
                  <li>• Sufficient outlets in each room</li>
                  <li>• Proper wire gauge and connections</li>
                  <li>• No exposed or damaged wiring</li>
                </ul>
              </div>
              <div className="p-2 bg-orange-100 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded text-xs">
                <strong>Cost Alert:</strong> Full rewiring can cost $8,000-$15,000
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4">HVAC System</h3>
            <div className="bg-background rounded p-4 border space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-2">Heating System</h4>
                <ul className="text-xs space-y-1">
                  <li>• Age of furnace/boiler (15-20 year lifespan)</li>
                  <li>• Proper operation and maintenance</li>
                  <li>• Ductwork condition and insulation</li>
                  <li>• Carbon monoxide safety</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Air Conditioning</h4>
                <ul className="text-xs space-y-1">
                  <li>• Age of AC unit (10-15 year lifespan)</li>
                  <li>• Refrigerant levels and coil condition</li>
                  <li>• Proper sizing for home</li>
                  <li>• Filter condition and accessibility</li>
                </ul>
              </div>
              <div className="p-2 bg-orange-100 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded text-xs">
                <strong>Cost Alert:</strong> HVAC replacement can cost $5,000-$12,000
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Plumbing System</h3>
            <div className="bg-background rounded p-4 border space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-2">Water Supply</h4>
                <ul className="text-xs space-y-1">
                  <li>• Water pressure throughout house</li>
                  <li>• Pipe material and age</li>
                  <li>• Water heater age and condition</li>
                  <li>• No visible leaks or corrosion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm mb-2">Drainage</h4>
                <ul className="text-xs space-y-1">
                  <li>• All drains flowing properly</li>
                  <li>• Sewer line condition (scope if old)</li>
                  <li>• Toilet operation and sealing</li>
                  <li>• Sump pump operation (if applicable)</li>
                </ul>
              </div>
              <div className="p-2 bg-orange-100 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded text-xs">
                <strong>Cost Alert:</strong> Repiping can cost $5,000-$10,000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental & Safety */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Environmental & Safety Concerns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Environmental Hazards</h3>
            <div className="space-y-3">
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium text-sm mb-2">Lead Paint (Pre-1978 homes)</h4>
                <div className="text-xs text-muted-foreground">
                  Requires disclosure and safe renovation practices
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium text-sm mb-2">Asbestos (Pre-1980 homes)</h4>
                <div className="text-xs text-muted-foreground">
                  Found in insulation, floor tiles, roofing materials
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium text-sm mb-2">Radon Gas</h4>
                <div className="text-xs text-muted-foreground">
                  Requires separate test, especially in basements
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium text-sm mb-2">Mold</h4>
                <div className="text-xs text-muted-foreground">
                  Look for visible growth, musty odors, water damage
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Safety Features</h3>
            <div className="space-y-3">
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium text-sm mb-2">Smoke & CO Detectors</h4>
                <div className="text-xs text-muted-foreground">
                  Proper placement and working condition required
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium text-sm mb-2">Handrails & Guards</h4>
                <div className="text-xs text-muted-foreground">
                  Stairs over 3 steps need handrails
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium text-sm mb-2">Electrical Safety</h4>
                <div className="text-xs text-muted-foreground">
                  GFCI protection in wet areas
                </div>
              </div>
              <div className="bg-background rounded p-3 border">
                <h4 className="font-medium text-sm mb-2">Fire Separation</h4>
                <div className="text-xs text-muted-foreground">
                  Proper separation between garage and living space
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Inspection Process Timeline</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-background rounded p-4 border text-center">
              <div className="text-primary font-bold text-lg mb-2">Day 1-3</div>
              <h4 className="font-semibold mb-2">Schedule Inspection</h4>
              <div className="text-sm text-muted-foreground">
                Book within inspection period (usually 7-10 days)
              </div>
            </div>
            <div className="bg-background rounded p-4 border text-center">
              <div className="text-primary font-bold text-lg mb-2">Day 5-7</div>
              <h4 className="font-semibold mb-2">Attend Inspection</h4>
              <div className="text-sm text-muted-foreground">
                3-4 hour process, ask questions, take photos
              </div>
            </div>
            <div className="bg-background rounded p-4 border text-center">
              <div className="text-primary font-bold text-lg mb-2">Day 8-9</div>
              <h4 className="font-semibold mb-2">Review Report</h4>
              <div className="text-sm text-muted-foreground">
                Detailed report with photos and recommendations
              </div>
            </div>
            <div className="bg-background rounded p-4 border text-center">
              <div className="text-primary font-bold text-lg mb-2">Day 10</div>
              <h4 className="font-semibold mb-2">Make Decision</h4>
              <div className="text-sm text-muted-foreground">
                Request repairs, credits, or terminate contract
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guidelines */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-primary">Repair Cost Guidelines</h2>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Minor Issues ($500-$2,000)</h3>
              <div className="bg-background rounded p-4 border">
                <ul className="space-y-2 text-sm">
                  <li>• Caulking around windows and doors</li>
                  <li>• Replace few roof shingles</li>
                  <li>• Fix minor plumbing leaks</li>
                  <li>• Replace outlet covers and switches</li>
                  <li>• Clean and tune HVAC system</li>
                  <li>• Install smoke detectors</li>
                  <li>• Weather stripping replacement</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Major Issues ($2,000+)</h3>
              <div className="bg-background rounded p-4 border">
                <ul className="space-y-2 text-sm">
                  <li>• Roof replacement: $10,000-$20,000</li>
                  <li>• HVAC replacement: $5,000-$12,000</li>
                  <li>• Electrical rewiring: $8,000-$15,000</li>
                  <li>• Foundation repair: $5,000-$25,000</li>
                  <li>• Plumbing repipe: $5,000-$10,000</li>
                  <li>• Septic system: $3,000-$10,000</li>
                  <li>• Water damage remediation: $3,000-$8,000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tips */}
      <section className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Key Inspection Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• <strong>Attend the inspection</strong> - ask questions and learn about the house</li>
              <li>• <strong>Take photos and notes</strong> of any issues for future reference</li>
              <li>• <strong>Focus on major systems</strong> - roof, HVAC, electrical, plumbing</li>
              <li>• <strong>Get specialized inspections</strong> for pools, septic, radon if needed</li>
            </ul>
            <ul className="space-y-2">
              <li>• <strong>Don&apos;t sweat cosmetic issues</strong> - focus on structural and safety</li>
              <li>• <strong>Get contractor estimates</strong> for major repair items</li>
              <li>• <strong>Use findings to negotiate</strong> - repairs, credits, or price reduction</li>
              <li>• <strong>Know when to walk away</strong> - major structural issues may be deal-breakers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}