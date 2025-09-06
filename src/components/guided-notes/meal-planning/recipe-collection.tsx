"use client"

import { GuidedNotePage } from "@/components/guided-note-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RecipeCollection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Recipe Collection & Organization</h1>
        <p className="text-muted-foreground">Build and organize a practical recipe collection that supports your meal planning goals.</p>
      </div>

      <Tabs defaultValue="recipe-sources" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
          <TabsTrigger value="recipe-sources" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Recipe Sources</span>
            <span className="sm:hidden">Sources</span>
          </TabsTrigger>
          <TabsTrigger value="organization" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Organization</span>
            <span className="sm:hidden">Organize</span>
          </TabsTrigger>
          <TabsTrigger value="recipe-testing" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Recipe Testing</span>
            <span className="sm:hidden">Testing</span>
          </TabsTrigger>
          <TabsTrigger value="collection-growth" className="text-xs sm:text-sm py-2 px-1 sm:px-3">
            <span className="hidden sm:inline">Collection Growth</span>
            <span className="sm:hidden">Growth</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recipe-sources">
          <GuidedNotePage
            title="Recipe Source Discovery"
            description="Identify and evaluate reliable sources for recipes that match your cooking style and preferences"
            sections={[
              {
                title: "Current Recipe Sources",
                prompts: [
                  "What are your current go-to sources for finding new recipes?",
                  "Which cookbooks, websites, or apps do you use most often?",
                  "What family recipes or inherited dishes are important to preserve?",
                  "Which food bloggers or chefs consistently provide recipes you enjoy?",
                  "How do you discover new recipes that match your dietary preferences?"
                ],
                examples: [
                  "AllRecipes for weeknight meals, New York Times Cooking for weekend projects",
                  "Three favorite cookbooks, Pinterest boards, Instagram food accounts",
                  "Grandmother's cookie recipe, family holiday dishes, ethnic traditional meals",
                  "Budget Bytes for affordable meals, Half Baked Harvest for creative twists",
                  "Filter by dietary restrictions, follow specific hashtags, join online communities"
                ]
              },
              {
                title: "Recipe Quality Assessment",
                prompts: [
                  "What makes a recipe appealing and trustworthy to you?",
                  "How do you evaluate whether a recipe will work for your skill level?",
                  "What red flags indicate a recipe might not be worth trying?",
                  "How do you assess if a recipe fits your budget and ingredient availability?",
                  "What indicators suggest a recipe will be family-friendly and repeatable?"
                ],
                examples: [
                  "Clear instructions, realistic timing, good reviews, recognizable ingredients",
                  "Familiar techniques, manageable ingredient list, cooking time fits schedule",
                  "Too many exotic ingredients, overly complex steps, consistently negative reviews",
                  "Expensive specialty items, hard-to-find ingredients, serves too many or too few",
                  "Simple seasoning, adaptable components, gets positive family feedback"
                ]
              },
              {
                title: "Digital vs. Physical Collection",
                prompts: [
                  "Do you prefer digital recipe storage or physical cookbooks and cards?",
                  "How do you access recipes while actively cooking?",
                  "What backup systems do you have in case technology fails?",
                  "How do you share favorite recipes with family and friends?",
                  "What's your strategy for recipes found on social media or videos?"
                ],
                examples: [
                  "Mix of digital apps for everyday, physical books for weekend browsing",
                  "Tablet or phone in kitchen, printed copies for messy cooking projects",
                  "Key family recipes written on cards, photos of cookbook pages",
                  "Text screenshots, email links, shared Pinterest boards, recipe cards",
                  "Screenshot key steps, save video links, write simplified version in own words"
                ]
              }
            ]}
            tips={[
              "Start with sources that match your current cooking confidence and schedule",
              "Look for recipe sources with good review systems and community feedback",
              "Keep a running list of trusted sources rather than constantly searching new ones",
              "Save family recipes in multiple formats to prevent loss",
              "Focus on sources that align with your dietary preferences and budget"
            ]}
          />
        </TabsContent>

        <TabsContent value="organization">
          <GuidedNotePage
            title="Recipe Organization System"
            description="Create an efficient system for organizing and accessing your recipe collection"
            sections={[
              {
                title: "Categorization Strategy",
                prompts: [
                  "How do you want to categorize your recipes for easy searching?",
                  "What categories would be most useful for your meal planning process?",
                  "How will you handle recipes that fit multiple categories?",
                  "What tagging or labeling system will help you find recipes quickly?",
                  "How do you want to separate tried recipes from untested ones?"
                ],
                examples: [
                  "By meal type (breakfast, dinner), by main ingredient (chicken, pasta), by time (30-min, slow cooker)",
                  "Weeknight meals, weekend projects, special occasions, meal prep, kid-friendly",
                  "Tag with multiple labels, create cross-reference system, use main category plus notes",
                  "Difficulty level, dietary restrictions, season, cooking method, family rating",
                  "Separate folders/sections for 'tried and loved,' 'tried and okay,' 'want to try'"
                ]
              },
              {
                title: "Storage and Access Systems",
                prompts: [
                  "What storage system will make your recipes easily accessible while cooking?",
                  "How will you organize recipes so you can quickly build weekly meal plans?",
                  "What search functionality do you need to find recipes by ingredient or mood?",
                  "How will you keep track of recipe modifications and family feedback?",
                  "What system will help you rotate through your collection rather than cooking the same 5 meals?"
                ],
                examples: [
                  "Recipe binder with plastic sleeves, digital app with offline access, hybrid system",
                  "Favorites section, quick meal section, seasonal rotation folder",
                  "Ingredient search, dietary filter, cooking time filter, prep difficulty",
                  "Notes section for each recipe, rating system, modification tracking",
                  "Monthly rotation reminders, 'haven't made in a while' section, seasonal prompts"
                ]
              },
              {
                title: "Collection Maintenance",
                prompts: [
                  "How often will you review and update your recipe collection?",
                  "What's your process for removing recipes that don't work for your family?",
                  "How will you keep track of recipes you want to try again with modifications?",
                  "What system will help you remember why you liked or disliked certain recipes?",
                  "How will you prevent your collection from becoming overwhelming?"
                ],
                examples: [
                  "Quarterly review to remove failures, monthly addition of seasonal recipes",
                  "Three-try rule: if family doesn't like it after modifications, remove it",
                  "Notes about what to change, separate 'needs tweaking' category",
                  "Simple rating system plus notes about what worked or didn't work",
                  "Set maximum collection size, one new recipe requires removing one that doesn't work"
                ]
              }
            ]}
            tips={[
              "Choose an organization system you'll actually maintain, not the most complex one",
              "Start simple with basic categories and add complexity as needed",
              "Make sure your system allows for quick access during busy weeknight cooking",
              "Include space for notes and modifications in whatever system you choose",
              "Regular collection maintenance prevents overwhelm and keeps focus on recipes you actually use"
            ]}
          />
        </TabsContent>

        <TabsContent value="recipe-testing">
          <GuidedNotePage
            title="Recipe Testing & Evaluation"
            description="Develop a systematic approach to testing new recipes and building your reliable recipe repertoire"
            sections={[
              {
                title: "Testing Strategy",
                prompts: [
                  "How many new recipes do you want to try each week or month?",
                  "What's your approach to timing new recipe trials with your schedule?",
                  "How do you decide which new recipes to prioritize testing?",
                  "What backup plan do you have if a new recipe doesn't turn out well?",
                  "How do you involve family members in the recipe testing process?"
                ],
                examples: [
                  "One new recipe per week, try two on weekends when time allows",
                  "Test new recipes on less busy days, never try new recipe when hosting guests",
                  "Focus on recipes using ingredients on sale, seasonal produce, or dietary goals",
                  "Always have emergency meal ingredients available, keep takeout menu handy",
                  "Let family members pick one new recipe per month, involve kids in kid-friendly tests"
                ]
              },
              {
                title: "Evaluation Criteria",
                prompts: [
                  "What criteria will you use to judge whether a recipe is worth keeping?",
                  "How will you rate recipes on taste, difficulty, and family acceptance?",
                  "What factors determine if a recipe becomes part of your regular rotation?",
                  "How do you evaluate whether a recipe is worth the time and cost investment?",
                  "What makes a recipe graduate from 'trial' to 'trusted' status?"
                ],
                examples: [
                  "Taste (1-10), difficulty (easy/medium/hard), family rating, repeat likelihood",
                  "Everyone likes it, manageable prep time, reasonable cost, uses available ingredients",
                  "Family asks for it again, fits within budget, matches weekly themes",
                  "Cost per serving under $X, total time under X hours, uses pantry staples",
                  "Successfully made 3 times with consistent results, family enthusiasm, reasonable effort"
                ]
              },
              {
                title: "Modification and Adaptation",
                prompts: [
                  "What's your approach to modifying recipes to better fit your family's needs?",
                  "How do you adapt recipes for dietary restrictions or preferences?",
                  "What ingredient substitutions do you commonly need to make?",
                  "How do you adjust recipes for your preferred cooking methods or equipment?",
                  "What's your process for scaling recipes up or down based on your family size?"
                ],
                examples: [
                  "Try recipe as written first time, then modify based on family feedback",
                  "Substitute dairy-free options, add vegetables to increase nutrition, reduce sodium",
                  "Greek yogurt for sour cream, whole wheat flour for white, vegetable broth for chicken",
                  "Adapt stovetop recipes for slow cooker, oven recipes for air fryer",
                  "Half recipes for family of 2, double recipes for meal prep, adjust cooking times accordingly"
                ]
              }
            ]}
            tips={[
              "Always read the entire recipe before starting and check you have all ingredients",
              "Take notes during cooking about timing, difficulty, and family reactions",
              "Give new recipes at least two tries before deciding to keep or discard them",
              "Focus on recipes that use ingredients you already enjoy and buy regularly",
              "Build confidence with easier recipes before attempting complex cooking projects"
            ]}
          />
        </TabsContent>

        <TabsContent value="collection-growth">
          <GuidedNotePage
            title="Strategic Collection Growth"
            description="Plan how to grow your recipe collection thoughtfully to support your long-term meal planning goals"
            sections={[
              {
                title: "Collection Goals and Priorities",
                prompts: [
                  "What gaps exist in your current recipe collection?",
                  "What types of recipes would make your meal planning easier?",
                  "Which cuisines or cooking styles do you want to explore more?",
                  "What seasonal recipes do you need to add for year-round variety?",
                  "How do you want your recipe collection to evolve over the next year?"
                ],
                examples: [
                  "Need more quick breakfast options, vegetarian dinners, make-ahead lunches",
                  "30-minute meals for busy nights, slow cooker options, batch cooking recipes",
                  "More Asian stir-fries, Mediterranean bowls, Mexican-inspired meals",
                  "Summer grilling recipes, fall comfort foods, holiday baking, spring vegetables",
                  "Build confidence with bread making, expand international flavors, healthier desserts"
                ]
              },
              {
                title: "Skill Building Through Recipes",
                prompts: [
                  "What cooking skills do you want to develop through recipe practice?",
                  "Which techniques would expand your cooking capabilities?",
                  "How do you want to balance comfort zone recipes with skill-building challenges?",
                  "What cooking methods or equipment do you want to learn to use better?",
                  "How will you gradually increase recipe complexity as your confidence grows?"
                ],
                examples: [
                  "Learn knife skills through more chopping-intensive recipes, practice seasoning balance",
                  "Sauce making, bread baking, proper meat cooking temperatures, vegetable roasting",
                  "80% familiar techniques with 20% new skill development per month",
                  "Master the Instant Pot, learn cast iron cooking, improve oven temperature control",
                  "Start with simple versions, then try more complex variations once comfortable"
                ]
              },
              {
                title: "Long-term Collection Vision",
                prompts: [
                  "What does your ideal recipe collection look like in 2-3 years?",
                  "How will your recipe needs change as family circumstances evolve?",
                  "What legacy recipes do you want to pass down or preserve?",
                  "How do you want to balance tried-and-true recipes with continued exploration?",
                  "What would make you feel confident and excited about cooking for any occasion?"
                ],
                examples: [
                  "50 reliable weeknight meals, 20 special occasion recipes, 10 holiday traditions",
                  "More sophisticated options as kids age, budget-friendly options for college years",
                  "Document family recipes with stories, teach kids signature family dishes",
                  "70% reliable rotation with 30% space for new discoveries and seasonal variety",
                  "Comfortable hosting dinner parties, confident with any dietary restriction, excited to try new cuisines"
                ]
              }
            ]}
            tips={[
              "Focus on filling practical gaps in your collection before adding novelty recipes",
              "Set realistic goals for new recipe acquisition based on your testing capacity",
              "Look for recipes that teach transferable skills beyond just that specific dish",
              "Consider seasonal timing when planning which types of recipes to focus on",
              "Document your learning journey to see progress and identify areas for continued growth"
            ]}
          />
        </TabsContent>

      </Tabs>
    </div>
  )
}