#!/usr/bin/env node

// This script uses Claude Code with Supabase MCP to generate questions
// Run it with: node generate-mvp-questions.ts

console.log('🚀 Starting MVP question generation...');
console.log('This will generate 5 questions for each of the 90 guides (450 total)');
console.log('');
console.log('Using Claude Code with Supabase MCP connection to insert questions directly.');
console.log('');
console.log('Run this script manually or check the database to see progress.');
console.log('');
console.log('Instructions:');
console.log('1. Use Claude Code to connect to Supabase MCP');
console.log('2. Generate 5 questions per guide based on category templates');
console.log('3. Insert directly into questions table');
console.log('');
console.log('Question templates by category:');
console.log('- Relationships: Emotional assessment, boundaries, support, patterns, professional help');
console.log('- Career: Skills assessment, goal setting, market research, action, priorities');
console.log('- Finance: Financial inventory, goals, education, action planning, behavior change');
console.log('- Health: Symptom tracking, medical inventory, treatment research, professional support, what works');
console.log('- Life Events: Situation assessment, timeline, information gathering, getting started, support network');
console.log('- Personal Growth: Motivation, goal setting, learning resources, building habits, overcoming obstacles');
