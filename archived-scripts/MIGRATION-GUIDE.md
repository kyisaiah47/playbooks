# Article Template Field Migration Guide

This guide explains how to migrate articles from using `related_templates` array to a single `template` field.

## Why this migration?

Articles were incorrectly using a `related_templates` array when each article should only belong to one template. This migration:
1. Adds a new `template` column (TEXT)
2. Migrates data from `related_templates[0]` to `template`
3. Removes the old `related_templates` column

## Steps

### 1. Run SQL Migration (Add Column)

Open your Supabase Dashboard → SQL Editor and run:

```sql
-- Add template column to templata_articles table
ALTER TABLE templata_articles
ADD COLUMN IF NOT EXISTS template TEXT;

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_articles_template ON templata_articles(template);

-- Add comment
COMMENT ON COLUMN templata_articles.template IS 'The template ID this article belongs to (replaces related_templates array)';
```

Or run the SQL file directly:
```bash
# Using psql (if you have direct DB access)
psql $DATABASE_URL -f generation-scripts/add-template-column.sql
```

### 2. Migrate Existing Data

Run the data migration script:
```bash
node generation-scripts/migrate-articles-template-field.js
```

This script will:
- Fetch all articles
- Copy the first template ID from `related_templates` to `template`
- Clear the `related_templates` field
- Report how many articles were updated

### 3. Verify Migration

Check that articles are loading correctly in templates:
```bash
# Query to check migration status
# Run in Supabase SQL Editor:
SELECT
  COUNT(*) as total,
  COUNT(template) as with_template,
  COUNT(related_templates) as with_related_templates
FROM templata_articles;
```

### 4. (Optional) Remove Old Column

Once you've verified everything works, you can remove the old column:
```sql
ALTER TABLE templata_articles
DROP COLUMN IF EXISTS related_templates;
```

## Rollback

If you need to rollback:
```sql
-- Restore related_templates from template
UPDATE templata_articles
SET related_templates = ARRAY[template]
WHERE template IS NOT NULL;

-- Remove template column
ALTER TABLE templata_articles
DROP COLUMN template;
```
