# Article Generation System

This system guides Claude through generating high-quality articles one at a time.

## How It Works

1. **One Article at a Time**: Generates single, comprehensive articles instead of batches
2. **Quality Control**: Built-in review checkpoints after each article
3. **Master Prompt Integration**: Automatically reminds Claude to follow the master prompt
4. **Progress Tracking**: Keeps track of completed articles
5. **Worktree Isolation**: Uses git worktrees to keep article generation separate

## Usage

### Start Article Generation
```bash
bash generate-article.sh
```

### Review Generated Article
```bash
bash generate-article.sh review
```

### Check Progress
```bash
bash generate-article.sh status
```

### Reset Progress
```bash
bash generate-article.sh reset
```

## Workflow

1. Run `bash generate-article.sh`
2. Claude receives focused prompt for ONE article topic
3. Claude reads master prompt and generates comprehensive article
4. Claude adds article to `src/registry/blogs.ts`
5. Run `bash generate-article.sh review`
6. Claude reviews article quality against master prompt standards
7. Claude confirms "ARTICLE COMPLETE" when satisfied
8. Repeat for next article

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