# Database Migration Instructions

This guide will help you migrate templates and prompts from JSON files to the database.

## ⚠️ IMPORTANT: Follow these steps IN ORDER

Do NOT delete the `src/data` folder until AFTER testing!

---

## Step 1: Update Database Schema

Run the schema update SQL in Supabase Dashboard:

1. Go to https://uvcstcajctqbxddosdbf.supabase.co (your Supabase project)
2. Navigate to SQL Editor
3. Open `generation-scripts/update-templates-schema.sql`
4. Copy the entire SQL content
5. Paste into Supabase SQL Editor
6. Click "Run" to execute

This will add the necessary columns to `templata_templates` and `templata_prompts` tables.

---

## Step 2: Run Migration Script

Migrate all 1,303 templates and ~10,000 prompts to the database:

```bash
npx tsx generation-scripts/migrate-templates-to-db.ts
```

This will:
- Read all template files from `src/data/templates/`
- Read all prompt files from `src/data/prompts/`
- Insert them into the database
- Show progress and summary

Expected output:
```
🚀 Starting migration of templates to database...
📦 Found 1303 template files

✅ Created template: 10-year-marriage-milestone
   ✅ Added 10 prompts from 10-year-marriage-milestone-prompts-1.ts (Growth & Learning Through Challenges)
   ...

📊 Migration Summary:
   Templates created: 1303
   Prompts created: ~10,000
   Errors: 0

✨ Migration completed successfully!
```

---

## Step 3: Test New API Endpoints

**BEFORE deleting any files**, test that the new database-backed API works:

### Test Templates API

```bash
# Test fetching all templates
curl http://localhost:3000/api/templates | jq '.templates | length'
# Should return: 1303

# Test search
curl "http://localhost:3000/api/templates?search=wedding" | jq
# Should return wedding-related templates

# Test category filter
curl "http://localhost:3000/api/templates?category=Life%20Planning" | jq
```

### Test Prompts API

```bash
# Test fetching prompts for a specific template
curl "http://localhost:3000/api/prompts?templateId=10-year-marriage-milestone" | jq
# Should return ~80 prompts for that template

# Check another template
curl "http://localhost:3000/api/prompts?templateId=wedding-planning-template" | jq
```

### Manual Testing in Browser

1. Go to http://localhost:3000/browse/templates
2. Verify all templates load correctly
3. Click on a template
4. Verify all prompts load correctly in the workspace
5. Check that everything looks identical to before

---

## Step 4: Verify in Production (Optional)

If you want to be extra safe, deploy to Vercel first and test in production:

```bash
# This will work now because we're querying DB, not importing 13k JSON files
vercel --prod
```

Test the same endpoints on production URL.

---

## Step 5: Delete JSON Files (ONLY AFTER TESTING)

**✅ Only proceed if all tests pass!**

Delete the data folder and update imports:

```bash
# Delete the data folder (13k files)
rm -rf src/data/templates
rm -rf src/data/prompts

# Update registry files to not import from deleted folders
# (I can help with this step after you confirm tests pass)
```

---

## Rollback Plan

If something goes wrong:

1. The `src/data/` folder is still intact (don't delete it yet!)
2. Simply revert the API route changes:
   - `src/app/api/templates/route.ts`
   - `src/app/api/prompts/route.ts`
3. Restart dev server: `npm run dev`

---

## Summary

| Step | Action | Status |
|------|--------|--------|
| 1 | Run `update-templates-schema.sql` in Supabase | ⏳ Pending |
| 2 | Run `migrate-templates-to-db.ts` script | ⏳ Pending |
| 3 | Test `/api/templates` endpoint | ⏳ Pending |
| 4 | Test `/api/prompts` endpoint | ⏳ Pending |
| 5 | Manual UI testing | ⏳ Pending |
| 6 | Deploy to Vercel (should work now!) | ⏳ Pending |
| 7 | Delete `src/data/` folder | ⚠️ DO LAST |

---

## Why This Fixes Deployment

**Problem:** Vercel file upload limit is 5,000 files/24h
**Current:** 34,661 files (12,986 in src/data/)
**After migration:** ~100 files

This will reduce the codebase from 34k files to ~21k files, well under the limit!
