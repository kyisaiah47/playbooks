# Article Generation System

This system guides Claude through generating high-quality articles one at a time.

## How It Works

1. **Template-Aware**: Generates articles specific to each template (home-buying, wedding-planning, etc.)
2. **One Article at a Time**: Generates single, comprehensive articles instead of batches
3. **Quality Control**: Built-in review checkpoints after each article
4. **Master Prompt Integration**: Automatically reminds Claude to follow the master prompt
5. **Progress Tracking**: Keeps track of completed articles per template
6. **Auto Worktree Creation**: Automatically creates template-specific worktrees (../templata-home-buying, ../templata-wedding-planning, etc.)

## Usage

### Start Article Generation
```bash
# Generate all articles for a template
./article-generation-cycle.sh home-buying
./article-generation-cycle.sh wedding-planning

# Generate one article at a time
./article-generation-cycle.sh home-buying single
./article-generation-cycle.sh baby-planning single
```

### Check Progress
```bash
./article-generation-cycle.sh home-buying status
./article-generation-cycle.sh wedding-planning status
```

### Reset Progress
```bash
./article-generation-cycle.sh home-buying reset
```

### Manual Step-by-Step (Alternative)
```bash
bash generate-article.sh
bash generate-article.sh review
```

## Workflow

1. Run `./article-generation-cycle.sh [template-name]`
2. Script automatically creates worktree `../templata-[template-name]` if needed
3. Script creates branch `article-[template-name]` if needed
4. Claude receives focused prompt for ONE article topic
5. Claude reads master prompt and generates comprehensive article
6. Claude adds article to `src/registry/blogs.ts`
7. Claude reviews article quality against master prompt standards
8. Script automatically moves to next article topic
9. Repeat until all template articles are complete

## Worktree Structure

The system automatically creates template-specific worktrees:
- `../templata-home-buying/` - Home buying articles
- `../templata-wedding-planning/` - Wedding planning articles
- `../templata-baby-planning/` - Baby planning articles
- `../templata-[template-name]/` - Any template articles

Each worktree has its own branch: `article-[template-name]`

## Article Queue

The script contains 20 predefined article topics covering comprehensive home buying guidance:

- Homeowner's Insurance Guide
- Property Tax Assessment & Appeals
- Home Warranty Coverage Analysis
- Closing Day Preparation
- Real Estate Agent Selection
- Escrow & Title Insurance
- New Construction vs Resale
- Condo & Townhome Buying
- Investment Property Strategy
- Luxury Home Considerations
- Rural Property & Land Purchase
- Foreclosure & Distressed Properties
- Senior & Retirement Home Buying
- Energy Efficiency & Green Homes
- Home Buying Scam Protection
- Corporate Relocation Assistance
- International Buyer Guide
- Home Buying Technology Tools
- Multi-Family Property Investment
- Divorce & Separation Home Buying

## Quality Standards

Each article must meet master prompt requirements:
- 1,200-1,600 words (8-12 minute read)
- Objective voice (no first person)
- Flowing paragraphs with strategic bold numbers
- Specific, actionable information
- Clear headers and highlight-worthy insights
- Proper SEO metadata
- Author: "Templata"

## Benefits

- **Quality Over Quantity**: Focus on creating excellent content
- **Consistent Standards**: Built-in quality checkpoints
- **Manageable Process**: One article at a time reduces overwhelm
- **Progress Tracking**: Clear visibility into completion status
- **Reusable System**: Can be used for future content generation