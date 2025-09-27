#!/bin/bash

# Generate complete knowledge graph system in parallel
set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_colored() {
    local color=$1
    local message=$2
    echo -e "${color}$message${NC}"
}

log_colored "$BLUE" "🧠 GENERATING COMPLETE KNOWLEDGE GRAPH SYSTEM"
log_colored "$BLUE" "Running 6 prompts in parallel..."

# Start all 6 prompts in parallel
(
    log_colored "$YELLOW" "🔗 Generating template connections..."
    claude --print --dangerously-skip-permissions --add-dir ../src/data/templates -p "Analyze every template file in this directory. Read the actual content, sections, prompts, and metadata. Create semantic clusters and weighted connections based on REAL content analysis.

For each template, identify:
1. Core themes from actual sections/content
2. Natural prerequisites (what should come first)
3. Natural follow-ups (what comes next)
4. Complementary templates (work well together)
5. Conflicting templates (compete for time/resources)

Output format - save as template-connections.json:
{
  \"semantic_clusters\": {
    \"cluster_name\": {
      \"templates\": [\"template-id-1\", \"template-id-2\"],
      \"reasoning\": \"Why these templates belong together\"
    }
  },
  \"weighted_connections\": {
    \"template-id\": {
      \"critical_connections\": [
        {\"templateId\": \"other-template\", \"strength\": 95, \"reasoning\": \"Why critical\"}
      ],
      \"strong_connections\": [
        {\"templateId\": \"other-template\", \"strength\": 85, \"reasoning\": \"Why strong\"}
      ]
    }
  }
}" > template-connections.json 2>&1
    if [ $? -eq 0 ]; then
        echo "✅ Template connections generated"
    else
        echo "❌ Template connections failed"
    fi
) &

(
    log_colored "$YELLOW" "📰 Generating article connections..."
    claude --print --dangerously-skip-permissions --add-dir ../src/data/articles -p "Analyze every article file in this directory. Read the actual content and identify real relationships.

For each article, identify:
1. Which templates it directly supports
2. Which other articles are topically related
3. Content themes and categories
4. Target audience overlap

Output format - save as article-connections.json:
{
  \"article_template_connections\": {
    \"article-id\": {
      \"supported_templates\": [
        {\"templateId\": \"template-id\", \"strength\": 90, \"reason\": \"Direct content match\"}
      ],
      \"related_articles\": [
        {\"articleId\": \"other-article\", \"strength\": 80, \"reason\": \"Topical overlap\"}
      ]
    }
  }
}" > article-connections.json 2>&1
    if [ $? -eq 0 ]; then
        echo "✅ Article connections generated"
    else
        echo "❌ Article connections failed"
    fi
) &

(
    log_colored "$YELLOW" "💭 Generating prompt connections..."
    claude --print --dangerously-skip-permissions --add-dir ../src/data/prompts -p "Analyze every prompt file in this directory. Read the actual prompts and identify relationships.

For each prompt set, identify:
1. Which template it belongs to (from filename)
2. Prompt categories (reflection, planning, action)
3. Cross-template prompt opportunities
4. Prompt sequences and progressions

Output format - save as prompt-connections.json:
{
  \"prompt_template_connections\": {
    \"template-id\": {
      \"prompt_categories\": [\"reflection\", \"planning\", \"action\"],
      \"cross_template_opportunities\": [
        {\"templateId\": \"other-template\", \"reason\": \"Shared prompt themes\"}
      ]
    }
  }
}" > prompt-connections.json 2>&1
    if [ $? -eq 0 ]; then
        echo "✅ Prompt connections generated"
    else
        echo "❌ Prompt connections failed"
    fi
) &

(
    log_colored "$YELLOW" "🎯 Generating marketing connections..."
    claude --print --dangerously-skip-permissions --add-dir ../src/data/marketing -p "Analyze every marketing file in this directory. Read the actual marketing content.

For each marketing page, identify:
1. Which template it promotes (from filename)
2. Marketing themes and value propositions
3. Target audience characteristics
4. Cross-selling opportunities

Output format - save as marketing-connections.json:
{
  \"marketing_template_connections\": {
    \"template-id\": {
      \"value_propositions\": [\"benefit1\", \"benefit2\"],
      \"target_audience\": \"audience description\",
      \"cross_sell_opportunities\": [
        {\"templateId\": \"other-template\", \"reason\": \"Audience overlap\"}
      ]
    }
  }
}" > marketing-connections.json 2>&1
    if [ $? -eq 0 ]; then
        echo "✅ Marketing connections generated"
    else
        echo "❌ Marketing connections failed"
    fi
) &

(
    log_colored "$YELLOW" "🔄 Generating life sequences..."
    claude --print --dangerously-skip-permissions -p "Based on common life progression patterns, create logical life sequences.

Identify:
1. Natural life stage progressions (college → job → apartment → relationship)
2. Skill building sequences (basic → intermediate → advanced)
3. Crisis recovery sequences (problem → stabilization → growth)
4. Optimal timing patterns by age group

Output format - save as life-sequences.json:
{
  \"life_sequences\": {
    \"young_adult_foundation\": {
      \"sequence\": [
        {\"templateId\": \"college-selection\", \"typical_age\": \"18-20\"},
        {\"templateId\": \"job-search\", \"typical_age\": \"20-23\"},
        {\"templateId\": \"apartment-hunting\", \"typical_age\": \"21-25\"}
      ],
      \"reasoning\": \"Natural progression for young adults\"
    }
  }
}" > life-sequences.json 2>&1
    if [ $? -eq 0 ]; then
        echo "✅ Life sequences generated"
    else
        echo "❌ Life sequences failed"
    fi
) &

(
    sleep 30  # Give other processes time to generate files
    log_colored "$YELLOW" "🧠 Generating master integration..."
    claude --print --dangerously-skip-permissions -p "Integrate all knowledge graph components into a master system.

Create comprehensive analysis showing:
1. Content coverage gaps (templates lacking articles/prompts/marketing)
2. Over-supported templates (too much content)
3. User journey recommendations
4. Content strategy recommendations

Output format - save as master-analysis.json:
{
  \"content_coverage\": {
    \"template-id\": {
      \"has_articles\": true,
      \"has_prompts\": true,
      \"has_marketing\": true,
      \"coverage_score\": 85
    }
  },
  \"recommended_content\": [
    {\"type\": \"article\", \"for_template\": \"template-id\", \"reason\": \"Gap identified\"}
  ],
  \"user_journeys\": [
    {\"sequence\": [\"template1\", \"template2\"], \"reasoning\": \"Natural progression\"}
  ]
}" > master-analysis.json 2>&1
    if [ $? -eq 0 ]; then
        echo "✅ Master analysis generated"
    else
        echo "❌ Master analysis failed"
    fi
) &

# Wait for all background jobs to complete
wait

log_colored "$GREEN" "🎉 Knowledge graph generation complete!"
log_colored "$BLUE" "Generated files:"
ls -la *.json | grep -E "(template|article|prompt|marketing|life|master)-.*\.json"