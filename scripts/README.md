# Template Linter

A comprehensive linting tool to ensure all templates follow the established format and quality standards.

## Usage

### NPM Scripts

```bash
# Lint a specific template
npm run lint:template src/app/templates/wedding-planning

# Lint the wedding template specifically
npm run lint:template:wedding

# Lint all templates at once
npm run lint:all-templates
```

### Direct Usage

```bash
# Lint a specific template
node scripts/template-linter.js src/app/templates/wedding-planning

# Lint all templates
node scripts/lint-all-templates.js
```

## Template Requirements

### Structure Requirements
- **Core Sections**: 4-6 main functional areas (Overview, Budget, Tasks, etc.)
- **Guided Notes**: 8-12 structured prompts using GuidedNotePage component
- **Resources**: 2-3 comprehensive articles (guides, checklists, tips)
- **My Notes**: 1 blank notes section for free-form content

### Code Quality Standards
- ✅ **No hardcoded colors** - Use theme colors only (`bg-primary`, `text-muted-foreground`, etc.)
- ✅ **Proper imports** - Use established component patterns
- ✅ **Theme integration** - Include ThemeToggle and wizard integration
- ✅ **Clean code** - No TODO comments in production

### File Structure
- `page.tsx` - Main template page with navigation routing
- `sidebar-left.tsx` - Navigation structure with all sections defined
- `components/{template}-notes/*.tsx` - Individual guided note components
- `components/resources/{template}-*.tsx` - Resource articles

## Scoring System

The linter provides a score out of 100:
- **90-100**: 🌟 Excellent template
- **75-89**: ✅ Good template  
- **50-74**: ⚠️ Needs improvement
- **0-49**: ❌ Major issues found

### Point Deductions
- **Errors**: -10 points each (missing requirements, hardcoded colors)
- **Warnings**: -5 points each (missing recommended features)

## Checked Items

### ✅ Structure Validation
- Correct number of guided notes (8-12)
- Correct number of resources (2-3)
- Presence of My Notes section
- Proper sidebar navigation structure

### ✅ File Validation
- Main `page.tsx` exists and has proper routing
- Template-specific context hooks
- Wizard integration present
- Theme toggle implemented

### ✅ Component Validation
- Guided notes use `GuidedNotePage` component
- Sections and tips arrays properly structured
- Resource articles exist and follow naming patterns

### ✅ Code Quality
- No hardcoded Tailwind colors (bg-red-500, text-blue-700, etc.)
- Uses theme colors (`bg-primary`, `text-muted-foreground`, etc.)
- No TODO comments left in code
- Proper component imports

## Example Output

```
🔍 Linting template: wedding-planning
==================================================

📁 Checking template structure...
✅ Guided notes count: 12
✅ Resources count: 2
✅ My Notes section found

📄 Checking required files...
✅ Main page.tsx found
✅ Wizard integration found
✅ Theme toggle found

🧩 Checking component files...
✅ Found 1 resource components

🎨 Checking code quality...
✅ page.tsx: No hardcoded colors
✅ page.tsx: Uses theme colors

==================================================
📊 LINTING RESULTS
==================================================

⚠️  WARNINGS (1):
  1. No guided notes directory found: wedding-planning-notes

📈 Template Score: 95/100
🌟 Excellent template!
```

## Integration

The linter can be integrated into CI/CD pipelines to automatically validate templates on commit or deployment.

```bash
# Exit with non-zero code if any template fails
npm run lint:all-templates
```

This ensures all templates maintain consistent quality and structure across the codebase.