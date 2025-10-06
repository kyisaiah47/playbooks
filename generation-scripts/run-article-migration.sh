#!/bin/bash

# Article Template Field Migration Runner
# This script helps you migrate articles from related_templates to template field

echo "========================================="
echo "Article Template Field Migration"
echo "========================================="
echo ""

# Step 1: Add column via Supabase
echo "Step 1: Add 'template' column to database"
echo ""
echo "Please run the following SQL in your Supabase Dashboard → SQL Editor:"
echo ""
cat "$(dirname "$0")/add-template-column.sql"
echo ""
echo "========================================="
echo ""
read -p "Press ENTER after you've run the SQL migration..."
echo ""

# Step 2: Migrate data
echo "Step 2: Migrating data from related_templates to template..."
echo ""
node "$(dirname "$0")/migrate-articles-template-field.js"
echo ""

# Step 3: Verify
echo "========================================="
echo "Migration process complete!"
echo ""
echo "Next steps:"
echo "1. Test your application to ensure articles load in templates"
echo "2. Run this SQL query to verify migration:"
echo ""
echo "SELECT COUNT(*) as total,"
echo "       COUNT(template) as with_template,"
echo "       COUNT(related_templates) as with_old_field"
echo "FROM templata_articles;"
echo ""
echo "3. If everything works, optionally remove the old column:"
echo "   ALTER TABLE templata_articles DROP COLUMN related_templates;"
echo ""
echo "========================================="
