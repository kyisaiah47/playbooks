#!/bin/bash

# Script to add motion wrapper to view pages
# Usage: ./add-motion-wrapper.sh <file_path>

FILE=$1

# Add motion import if not present
if ! grep -q "from 'framer-motion'" "$FILE"; then
  # Find the line with 'use client' and add import after
  sed -i.bak "/^'use client';$/a\\
\\
import { motion } from 'framer-motion';
" "$FILE"
fi

echo "Added motion import to $FILE"
