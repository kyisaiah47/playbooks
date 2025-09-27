#!/usr/bin/env python3

import os
import glob

# Change to marketing directory
marketing_dir = "/Users/ikim1/Documents/GitHub/templata/src/data/marketing"
os.chdir(marketing_dir)

# Get all *-landing.ts files
marketing_files = glob.glob("*-landing.ts")

print(f"Found {len(marketing_files)} marketing files to rename...")

for old_file in marketing_files:
    # Replace "-landing.ts" with "-marketing.ts"
    new_file = old_file.replace("-landing.ts", "-marketing.ts")

    print(f"Renaming: {old_file} -> {new_file}")
    os.rename(old_file, new_file)

print("✅ All marketing files renamed successfully!")