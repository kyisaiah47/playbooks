#!/bin/bash

# Fix articles with "1 min read" by updating their content from worktree files

PGPASSWORD=040796yh psql "postgresql://postgres.ziqjrhrzqccaqnqlmivv:040796yh@aws-0-us-west-1.pooler.supabase.com:6543/postgres?gssencmode=disable" <<'SQL'
-- Get all articles with 1 min read
SELECT id, title, template, read_time
FROM templata_articles
WHERE read_time = '1 min read'
LIMIT 10;
SQL
