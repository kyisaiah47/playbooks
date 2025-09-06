"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DecorStyling() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Decor & Event Styling</h1>
        <p className="text-muted-foreground">Create beautiful and cohesive event styling and decorations.</p>
      </div>

      <Tabs defaultValue="design-theme" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="design-theme" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Design & Theme</span>
            <span className="sm:hidden">Design</span>
          </TabsTrigger>
          <TabsTrigger value="floral-centerpieces" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Floral & Centerpieces</span>
            <span className="sm:hidden">Floral</span>
          </TabsTrigger>
          <TabsTrigger value="linens-rentals" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Linens & Rentals</span>
            <span className="sm:hidden">Linens</span>
          </TabsTrigger>
          <TabsTrigger value="final-details" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Final Details</span>
            <span className="sm:hidden">Details</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="design-theme">
          <GuidedNotePage
            title="Design Vision & Theme Development"
            description="Develop your event's overall design concept and aesthetic"
            sections={[
              {
                title: "Theme and Style Direction",
                prompts: [
                  "What overall theme or style do you want for your event?",
                  "How does your theme connect to the purpose and tone of your event?",
                  "What colors, textures, and visual elements will define your aesthetic?",
                  "How will your theme work with your venue's existing architecture and style?",
                  "What cultural, seasonal, or personal elements will influence your design choices?"
                ],
                examples: [
                  "Elegant garden party, modern minimalist, vintage glamour, rustic chic, cultural celebration",
                  "Wedding themes reflect couple's style, corporate events match brand identity, birthdays reflect personality",
                  "Color palette of 3-5 colors, mix of textures (smooth, rough, soft), consistent visual motifs",
                  "Complement venue's existing style rather than fight it, enhance architectural features",
                  "Family heritage, seasonal flowers, personal hobbies, meaningful locations, cultural traditions"
                ]
              },
              {
                title: "Color Palette and Visual Cohesion",
                prompts: [
                  "What color palette will create the mood and atmosphere you want?",
                  "How will you ensure color consistency across all design elements?",
                  "What accent colors and neutral tones will balance your main colors?",
                  "How will lighting affect your color choices throughout the event?",
                  "What seasonal or cultural considerations influence your color selections?"
                ],
                examples: [
                  "Romantic: blush, ivory, gold; Modern: black, white, silver; Garden: green, cream, peach",
                  "Color swatches for all vendors, consistent color specifications, sample materials for reference",
                  "Main colors 70%, accent colors 20%, neutral tones 10% for balance and sophistication",
                  "Warm lighting enhances warm colors, cool lighting works with jewel tones, test colors under venue lighting",
                  "Spring pastels, fall jewel tones, cultural color meanings, personal color preferences"
                ]
              },
              {
                title: "Style Inspiration and Mood Board",
                prompts: [
                  "What inspiration sources will guide your design decisions?",
                  "How will you create and use mood boards to communicate your vision?",
                  "What specific style elements are most important to achieve your vision?",
                  "How will you share your design vision with vendors and helpers?",
                  "What flexibility will you maintain while staying true to your core design concept?"
                ],
                examples: [
                  "Pinterest boards, magazine clippings, nature photos, architecture, art, fashion, cultural references",
                  "Physical mood board with fabric swatches, photos, color samples; digital boards for vendor sharing",
                  "Key elements: textures, patterns, lighting quality, focal points, color saturation levels",
                  "Detailed design brief, visual references, specific examples, style guidelines, vendor consultations",
                  "Core elements non-negotiable, details flexible based on availability and budget, seasonal adaptations"
                ]
              },
              {
                title: "Budget Allocation and Priorities",
                prompts: [
                  "What percentage of your budget will you allocate to decor and styling?",
                  "Which design elements are highest priority for achieving your vision?",
                  "How will you maximize visual impact within your decorating budget?",
                  "What DIY opportunities can stretch your decor budget effectively?",
                  "How will you prioritize spending between different decorative categories?"
                ],
                examples: [
                  "Typically 8-15% of total event budget, varies based on venue needs and personal priorities",
                  "Focus budget on high-impact areas: entrance, dining tables, dance floor, photo opportunities",
                  "Invest in key focal points, use repetition for impact, choose versatile pieces, rent vs buy strategically",
                  "DIY centerpieces, handmade signage, personal craft projects, borrowed decorative items",
                  "Flowers 40%, linens 25%, lighting 15%, signage 10%, miscellaneous accessories 10%"
                ]
              }
            ]}
            tips={[
              "Choose a cohesive theme that reflects the event's purpose and your personal style",
              "Create a mood board to visualize your design concept and share it with vendors",
              "Select a color palette of 3-5 colors and stick to it for visual cohesion",
              "Prioritize high-impact areas like entrances and focal points when allocating decor budget",
              "Consider how your venue's existing features can enhance rather than compete with your design"
            ]}
          />
        </TabsContent>

        <TabsContent value="floral-centerpieces">
          <GuidedNotePage
            title="Floral Design & Centerpiece Planning"
            description="Plan your floral arrangements and table centerpieces"
            sections={[
              {
                title: "Floral Style and Selection",
                prompts: [
                  "What style of floral arrangements fits your event theme and budget?",
                  "Which flowers and greenery will you use for your arrangements?",
                  "How will you balance focal flowers, filler flowers, and greenery?",
                  "What seasonal availability affects your flower choices and pricing?",
                  "How will your floral choices complement your color palette and venue?"
                ],
                examples: [
                  "Classic rose arrangements, wildflower casual style, modern minimalist single-bloom, lush garden style",
                  "Roses, peonies, hydrangeas for focal; baby's breath, greenery for filler; seasonal options vary by location",
                  "60% focal flowers, 30% filler, 10% greenery creates balanced, full arrangements",
                  "Spring: tulips, daffodils; Summer: sunflowers, zinnias; Fall: mums, dahlias; Winter: evergreens, amaryllis",
                  "Flower colors should enhance not clash with linens, venue colors, lighting conditions"
                ]
              },
              {
                title: "Centerpiece Design and Sizing",
                prompts: [
                  "What size and style of centerpieces work best for your table settings?",
                  "How will you ensure centerpieces don't obstruct conversation across tables?",
                  "What variety will you create in centerpiece heights and styles?",
                  "How will centerpieces coordinate with other table elements like linens and place settings?",
                  "What non-floral elements will you incorporate into your centerpiece design?"
                ],
                examples: [
                  "Low arrangements 6-8 inches tall, or tall arrangements 24+ inches with narrow tops",
                  "Keep centerpieces below eye level when seated, or create tall arrangements with clear sight lines",
                  "Alternate tall and low centerpieces, vary container styles, mix arrangements with other elements",
                  "Centerpieces complement linen colors, coordinate with charger plates, work with lighting",
                  "Candles, decorative containers, fruits, branches, personal mementos, themed accessories"
                ]
              },
              {
                title: "Additional Floral Elements",
                prompts: [
                  "What other floral elements beyond centerpieces will enhance your event?",
                  "How will you create a cohesive floral story throughout your venue?",
                  "What ceremony or special moment floral needs do you have?",
                  "How will you use florals to define spaces and guide guest flow?",
                  "What personal or bridal floral elements need coordination?"
                ],
                examples: [
                  "Entrance arrangements, ceremony backdrop, cocktail table arrangements, restroom touches",
                  "Repeat key flowers throughout venue, consistent color story, varied scales of same style",
                  "Altar arrangements, aisle petals, unity ceremony flowers, cake table arrangements",
                  "Entrance arrangements welcome guests, floral markers define spaces, pathway arrangements guide flow",
                  "Bridal bouquet, boutonnieres, corsages, hair flowers coordinate with venue arrangements"
                ]
              },
              {
                title: "Floral Logistics and Preservation",
                prompts: [
                  "What timeline will you follow for floral delivery and setup?",
                  "How will you keep flowers fresh throughout your event?",
                  "What preservation or take-home plans do you have for arrangements?",
                  "How will you handle floral setup coordination with other vendors?",
                  "What backup plans do you have for floral issues or unavailability?"
                ],
                examples: [
                  "Deliver day of event morning, setup 2-3 hours before guests arrive, ceremony flowers moved to reception",
                  "Proper hydration, temperature control, shade for outdoor events, misting for delicate flowers",
                  "Guest take-home centerpieces, preserved bouquet portions, donate to nursing homes or hospitals",
                  "Coordinate with linens/rentals team, work around other setup, clear setup timeline with venue",
                  "Backup flower varieties, flexible arrangements, local grocery store supplements, simplified designs"
                ]
              }
            ]}
            tips={[
              "Choose flowers that are in season for better quality and pricing",
              "Keep centerpieces low enough or tall enough to maintain conversation flow across tables",
              "Coordinate floral delivery and setup timing carefully with other vendors and venue access",
              "Consider the longevity of your flower choices - some last longer than others throughout the event",
              "Plan for guests to take centerpieces home as favors to extend the life of your investment"
            ]}
          />
        </TabsContent>

        <TabsContent value="linens-rentals">
          <GuidedNotePage
            title="Linens, Rentals & Table Settings"
            description="Plan your table linens, rental items, and table settings"
            sections={[
              {
                title: "Linen Selection and Coordination",
                prompts: [
                  "What linen styles and colors will complement your overall design theme?",
                  "How will you coordinate table linens with your venue and other design elements?",
                  "What different types of linens do you need for various tables and spaces?",
                  "How will linen texture and fabric choice impact your event's aesthetic?",
                  "What practical considerations affect your linen choices (stain resistance, wrinkle resistance)?"
                ],
                examples: [
                  "Classic white for elegance, colored linens for theme coordination, textured linens for visual interest",
                  "Linens should enhance not compete with centerpieces, coordinate with chair colors, complement venue",
                  "Dining table linens, cocktail table linens, buffet table linens, specialty linens for cake/gift tables",
                  "Satin for formal elegance, burlap for rustic charm, linen for natural casual, sequins for glamour",
                  "Polyester blends resist stains and wrinkles, natural fibers look elegant but require more care"
                ]
              },
              {
                title: "Table Setting and Place Setting Design",
                prompts: [
                  "What style of table setting fits your event formality and service style?",
                  "How will you coordinate plates, glassware, and utensils with your overall design?",
                  "What special table setting elements will enhance your theme?",
                  "How will you handle different courses and service styles in your place settings?",
                  "What personalized or special touches will you add to individual place settings?"
                ],
                examples: [
                  "Formal: multiple courses, multiple utensils; Casual: single plate, basic utensils; Buffet: minimal settings",
                  "Classic white plates for versatility, colored chargers for accent, glassware style matches theme",
                  "Napkin folds, napkin rings, place cards, menu cards, small favors at each place",
                  "Place utensils for planned courses, wine glasses for wine service, water glasses always present",
                  "Handwritten place cards, small personal favors, photos of guests, customized menu cards"
                ]
              },
              {
                title: "Rental Furniture and Equipment",
                prompts: [
                  "What furniture rentals do you need beyond basic tables and chairs?",
                  "How will you choose chair styles that complement your event aesthetic?",
                  "What specialty furniture or equipment rentals will enhance your event?",
                  "How will you coordinate rental delivery, setup, and pickup logistics?",
                  "What backup rental plans do you have for damaged or unavailable items?"
                ],
                examples: [
                  "Cocktail tables, lounge furniture, bars, dance floor, tent, staging, specialty seating",
                  "Chiavari chairs for elegance, farm tables for rustic, ghost chairs for modern, folding chairs for budget",
                  "Photo booth backdrop, cake stands, easels for signage, heating/cooling equipment, generators",
                  "Coordinate delivery timing with venue access, setup crew availability, other vendor schedules",
                  "Have backup rental companies identified, flexible substitution policies, extra quantities ordered"
                ]
              },
              {
                title: "Setup and Styling Coordination",
                prompts: [
                  "Who will handle the setup and styling of all rental and decor elements?",
                  "What timeline will you follow for rental setup and table styling?",
                  "How will you ensure consistent styling across all tables and areas?",
                  "What quality control process will you use for final setup inspection?",
                  "How will you coordinate rental setup with other vendor activities?"
                ],
                examples: [
                  "Professional event stylist, dedicated family/friends, rental company setup service, day-of coordinator",
                  "Rentals arrive and setup first, linens and basic styling next, final details and florals last",
                  "Style guide for setup crew, sample table setup, photos of desired final look, quality checker assigned",
                  "Final walkthrough 1 hour before guests, check every table, correct any inconsistencies, photo documentation",
                  "Coordinate with caterer for kitchen access, florist for centerpiece placement, venue for setup rules"
                ]
              }
            ]}
            tips={[
              "Order linens and rentals well in advance, especially for popular dates and peak seasons",
              "Create a sample table setting to ensure all elements work well together visually",
              "Consider practical factors like stain resistance and wrinkle resistance when choosing linens",
              "Coordinate rental delivery and pickup times carefully with venue access and other vendor schedules",
              "Have a backup plan for rental items in case of damage or unavailability on event day"
            ]}
          />
        </TabsContent>

        <TabsContent value="final-details">
          <GuidedNotePage
            title="Final Details & Finishing Touches"
            description="Complete your event styling with final details and finishing touches"
            sections={[
              {
                title: "Signage and Wayfinding",
                prompts: [
                  "What signage do you need to guide guests and enhance your event experience?",
                  "How will your signage style coordinate with your overall design theme?",
                  "What information needs to be communicated through signage?",
                  "Where will you place signs for maximum effectiveness and visual appeal?",
                  "What materials and display methods will you use for your signage?"
                ],
                examples: [
                  "Welcome signs, directional signs, table numbers, menu displays, restroom signs, gift table signs",
                  "Font styles, colors, and materials that match your theme; consistent design across all signage",
                  "Welcome messages, event timeline, menu information, seating assignments, special instructions",
                  "Entrance for welcome, key decision points for directions, each table for identification, bars for menu info",
                  "Chalkboards for rustic, acrylic for modern, calligraphy for elegant, printed materials for budget-friendly"
                ]
              },
              {
                title: "Ambient Elements and Atmosphere",
                prompts: [
                  "What ambient elements will complete your event atmosphere?",
                  "How will you use candles, lighting, and scents to enhance the experience?",
                  "What background elements will add depth and richness to your design?",
                  "How will you create photo-worthy moments and backdrops for guests?",
                  "What sensory elements beyond visual will enhance your event?"
                ],
                examples: [
                  "Candles for warmth, string lights for magic, fabric draping for softness, music for mood",
                  "Votives on tables, pillar candles for drama, string lights for romance, subtle scents from flowers",
                  "Fabric swags, greenery garlands, scattered petals, ambient lighting, textural contrasts",
                  "Photo booth area, decorated ceremony backdrop, beautifully styled dessert table, entrance display",
                  "Light background music, subtle floral scents, textural elements to touch, temperature comfort"
                ]
              },
              {
                title: "Personal Touches and Customization",
                prompts: [
                  "What personal elements will make your event unique and meaningful?",
                  "How will you incorporate family photos, mementos, or personal collections?",
                  "What customized elements will reflect the guest of honor or event purpose?",
                  "How will you balance personal touches with overall design cohesion?",
                  "What interactive or participatory elements will engage guests personally?"
                ],
                examples: [
                  "Family photos, personal artifacts, handwritten notes, cultural elements, hobby references",
                  "Photo displays, memory tables, shadow boxes, incorporated into centerpieces, timeline displays",
                  "Custom napkins, personalized favors, signature drinks named for honoree, themed activities",
                  "Personal elements should enhance not overwhelm design, consistent styling for personal items",
                  "Guest book alternatives, photo sharing stations, memory cards for guests to fill out"
                ]
              },
              {
                title: "Final Setup and Quality Assurance",
                prompts: [
                  "What final walkthrough process will ensure everything meets your vision?",
                  "How will you handle last-minute adjustments and touch-ups?",
                  "What photography of your setup will you want to capture before guests arrive?",
                  "How will you maintain your setup throughout the event?",
                  "What cleanup and breakdown plan will you have for all decorative elements?"
                ],
                examples: [
                  "Complete venue walkthrough 1-2 hours before guests, check every detail against your vision",
                  "Touch-up kit with extra supplies, designated person for quick fixes, flexible adjustment mindset",
                  "Wide shots of overall setup, detail shots of special elements, photos for social media and memory",
                  "Assign someone to monitor candles, check arrangements, handle wind issues, maintain restrooms",
                  "Designate breakdown crew, protect rental items, save meaningful elements, efficient cleanup timeline"
                ]
              }
            ]}
            tips={[
              "Walk through your venue 1-2 hours before guests arrive to catch any setup issues or missing details",
              "Create personal touches that reflect the event's purpose while maintaining your overall design theme",
              "Have a cleanup kit ready with extra supplies for quick fixes and maintenance during the event",
              "Take photos of your setup before guests arrive to document your hard work and planning",
              "Assign specific people to monitor and maintain decorative elements throughout the event"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}