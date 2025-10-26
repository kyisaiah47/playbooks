# Readings Revision Plan

## Context

We've successfully transformed ~353 guides by updating their IDs, names, and descriptions. For example:
- `zookeeper-career-development` → `toxic-boss-navigation`
- `accordion-skill-development` → `dating-after-divorce`
- `actor-career-development` → `onlyfans-career-planning`

**Problem**: The readings associated with these guides still contain content about the OLD topics (zookeeping, accordion, acting), not the NEW topics (toxic bosses, dating after divorce, OnlyFans).

**Goal**: Use AI to revise existing readings to match their new guide topics.

---

## Database Structure

```sql
-- Readings table
CREATE TABLE readings (
  id TEXT PRIMARY KEY,
  guide TEXT REFERENCES guides(id),
  title TEXT,
  author TEXT,
  excerpt TEXT,
  content TEXT,  -- Main content (markdown)
  read_time TEXT,
  type TEXT,  -- book, article, youtube, podcast, publication
  influences TEXT[],  -- Array of source influences
  updated_at TIMESTAMP
);
```

---

## Revision Strategy

### Option 1: AI-Powered Content Transformation (RECOMMENDED)

Use Claude (via API) to revise each reading's content to match the new guide topic.

**Approach:**
1. Query all readings for transformed guides
2. For each reading, provide Claude with:
   - Old guide name
   - New guide name & description
   - Current reading content
3. Ask Claude to rewrite the reading to match the new topic
4. UPDATE the reading with new title, excerpt, and content

**Pros:**
- Preserves reading structure (same number of readings per guide)
- Maintains diversity of reading types (books, articles, etc.)
- AI can intelligently adapt content
- Faster than generating from scratch

**Cons:**
- Requires API calls (cost)
- May produce lower quality than fresh generation
- Some readings may not translate well

---

### Option 2: Fresh Generation

Delete old readings and generate entirely new ones using the enhance-readings script.

**Pros:**
- Higher quality, topic-appropriate content
- Can source from actual books/articles about the new topic
- Feels more authentic

**Cons:**
- Slower (need to generate all from scratch)
- Requires running enhancement script for ~353 guides
- Higher API cost

---

## Recommendation: Hybrid Approach

### Phase 1: Simple Topic Swaps (70% of transformations)

For guides where the transformation is conceptually similar:
- Career → Career situations: Use AI transformation
- Skills → Relationship topics: Use AI transformation
- Example: `piano-tuner-career` → `asking-for-raise`
  - Keep reading structure
  - Swap "piano tuning industry insights" → "salary negotiation insights"

### Phase 2: Complex Transformations (30% of transformations)

For guides with radically different topics:
- Crafts → Family conflict: Fresh generation
- Religious careers → Identity topics: Fresh generation
- Example: `clergy-career-development` → `coming-out-as-atheist`
  - Delete old readings
  - Generate fresh content

---

## Implementation Plan

### Script: `generation-scripts/revise-transformed-readings.ts`

```typescript
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// List of transformed guides
const transformations = [
  {
    oldGuide: "zookeeper-career-development",
    newGuide: "toxic-boss-navigation",
    newName: "Toxic Boss Navigation",
    newDescription: "Navigate difficult relationships with toxic managers and protect your mental health."
  },
  // ... all 353 transformations
];

async function reviseReadingsForGuide(transformation: Transformation) {
  // 1. Fetch all readings for the new guide ID
  const { data: readings } = await supabase
    .from("readings")
    .select("*")
    .eq("guide", transformation.newGuide);

  if (!readings || readings.length === 0) {
    console.log(`No readings found for ${transformation.newGuide}`);
    return;
  }

  // 2. For each reading, use Claude to revise
  for (const reading of readings) {
    const revisedContent = await reviseReadingContent(
      reading,
      transformation
    );

    // 3. Update the reading in the database
    await supabase
      .from("readings")
      .update({
        title: revisedContent.title,
        excerpt: revisedContent.excerpt,
        content: revisedContent.content,
        updated_at: new Date().toISOString(),
      })
      .eq("id", reading.id);

    console.log(`✓ Revised reading: ${reading.id} for ${transformation.newGuide}`);
  }
}

async function reviseReadingContent(
  reading: any,
  transformation: Transformation
) {
  const prompt = `You are revising a reading for a life planning guide.

OLD GUIDE: ${transformation.oldGuide}
NEW GUIDE: ${transformation.newName}
NEW DESCRIPTION: ${transformation.newDescription}

CURRENT READING:
Title: ${reading.title}
Type: ${reading.type}
Content: ${reading.content}

TASK: Rewrite this reading to be about the NEW guide topic instead of the old one.

REQUIREMENTS:
1. Keep the same reading type (${reading.type})
2. Keep similar structure and length
3. Make the content relevant to: ${transformation.newDescription}
4. If it was a book summary, make it a different book about the new topic
5. If it was an article, make it an article about the new topic
6. Maintain the same tone and depth

Return JSON:
{
  "title": "New reading title",
  "excerpt": "2-3 sentence excerpt",
  "content": "Full revised content in markdown"
}`;

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });

  const responseText = message.content[0].type === "text"
    ? message.content[0].text
    : "";

  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Failed to parse JSON response");
  }

  return JSON.parse(jsonMatch[0]);
}

// Run for all transformations
async function main() {
  for (const transformation of transformations) {
    await reviseReadingsForGuide(transformation);

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

main();
```

---

## Alternative: Use enhance-readings script

Instead of transformation, could run the existing enhance-readings script on all transformed guides:

```bash
# For each transformed guide
ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
SUPABASE_SERVICE_ROLE_KEY=$SUPABASE_SERVICE_ROLE_KEY \
npx tsx generation-scripts/enhance-readings.ts toxic-boss-navigation
```

This would:
1. Delete existing readings
2. Generate 5 fresh, high-quality readings from scratch

**Trade-off**: Higher quality but slower and more expensive.

---

## Cost Estimation

### Option 1: AI Transformation
- ~353 guides × 5 readings/guide = ~1,765 readings
- ~1,000 tokens input + 1,000 tokens output per reading
- Total: ~3.5M tokens
- Cost: ~$10.50 (Claude Sonnet 4)

### Option 2: Fresh Generation
- ~353 guides × generation cost/guide
- Each guide: Research + 5 readings generation
- Estimated: ~10,000 tokens per guide
- Total: ~3.5M tokens
- Cost: ~$10.50 but higher quality

---

## Recommended Execution Order

1. **Test on 5 guides** (manual verification)
2. **Run transformation script on all 353 guides**
3. **Spot-check 20 random readings for quality**
4. **If quality is poor, switch to fresh generation for remaining guides**

---

## Next Steps

1. Create `generation-scripts/revise-transformed-readings.ts`
2. Build transformation mapping array
3. Test on 5 guides
4. Review quality
5. Execute full batch
