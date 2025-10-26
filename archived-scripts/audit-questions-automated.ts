import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvcstcajctqbxddosdbf.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

interface Question {
  id: string;
  question: string;
  category: string;
  type: string;
  template_id: string;
}

interface AuditIssue {
  id: string;
  template_id: string;
  issue_type: string;
  severity: 'low' | 'medium' | 'high';
  details: string;
  question: string;
}

async function auditQuestionsAutomated() {
  console.log('Starting automated question audit...\n');

  const issues: AuditIssue[] = [];
  const batchSize = 1000;
  let offset = 0;
  let totalProcessed = 0;

  while (true) {
    const { data: questions, error } = await supabase
      .from('questions')
      .select('id, question, category, type, template_id')
      .range(offset, offset + batchSize - 1);

    if (error) {
      console.error('Error fetching questions:', error);
      break;
    }

    if (!questions || questions.length === 0) {
      break;
    }

    for (const q of questions) {
      totalProcessed++;

      // Check 1: Very short questions (likely incomplete)
      if (q.question.length < 20) {
        issues.push({
          id: q.id,
          template_id: q.template_id,
          issue_type: 'very_short_prompt',
          severity: 'high',
          details: `Question is only ${q.question.length} characters`,
          question: q.question
        });
      }

      // Check 2: Generation artifacts
      const artifacts = [
        'ARTICLE GENERATION COMPLETE',
        'TEMPLATE GENERATION',
        '[PLACEHOLDER]',
        '[TODO]',
        '{{',
        '}}',
        'Lorem ipsum'
      ];

      for (const artifact of artifacts) {
        if (q.question.includes(artifact)) {
          issues.push({
            id: q.id,
            template_id: q.template_id,
            issue_type: 'generation_artifact',
            severity: 'high',
            details: `Contains artifact: "${artifact}"`,
            question: q.question
          });
        }
      }

      // Check 3: Excessive whitespace
      if (q.question.includes('  ') || q.question.startsWith(' ') || q.question.endsWith(' ')) {
        issues.push({
          id: q.id,
          template_id: q.template_id,
          issue_type: 'whitespace_issue',
          severity: 'low',
          details: 'Has extra whitespace',
          question: q.question
        });
      }

      // Check 4: Weird characters or encoding issues
      if (/[\u0000-\u001F\u007F-\u009F]/.test(q.question)) {
        issues.push({
          id: q.id,
          template_id: q.template_id,
          issue_type: 'encoding_issue',
          severity: 'medium',
          details: 'Contains control characters',
          question: q.question
        });
      }

      // Check 5: Missing punctuation at end
      const lastChar = q.question.trim().slice(-1);
      if (!['.', '?', '!'].includes(lastChar)) {
        issues.push({
          id: q.id,
          template_id: q.template_id,
          issue_type: 'missing_punctuation',
          severity: 'low',
          details: 'Missing ending punctuation',
          question: q.question
        });
      }

      // Check 6: Category/type mismatch
      if (q.category !== q.type) {
        issues.push({
          id: q.id,
          template_id: q.template_id,
          issue_type: 'category_type_mismatch',
          severity: 'medium',
          details: `Category "${q.category}" != Type "${q.type}"`,
          question: q.question
        });
      }

      // Check 7: Suspiciously long questions (might be concatenated)
      if (q.question.length > 500) {
        issues.push({
          id: q.id,
          template_id: q.template_id,
          issue_type: 'very_long_prompt',
          severity: 'medium',
          details: `Question is ${q.question.length} characters (unusually long)`,
          question: q.question
        });
      }

      // Check 8: Generic/vague questions
      const vaguePhrases = [
        'think about',
        'consider this',
        'reflect on something',
        'do something',
        'make a plan'
      ];

      for (const phrase of vaguePhrases) {
        if (q.question.toLowerCase().includes(phrase)) {
          issues.push({
            id: q.id,
            template_id: q.template_id,
            issue_type: 'vague_prompt',
            severity: 'medium',
            details: `Contains vague phrase: "${phrase}"`,
            question: q.question
          });
        }
      }
    }

    if (totalProcessed % 10000 === 0) {
      console.log(`Processed ${totalProcessed} questions, found ${issues.length} issues so far...`);
    }

    offset += batchSize;
    await new Promise(resolve => setTimeout(resolve, 10));
  }

  console.log(`\n✓ Audit complete!`);
  console.log(`Total questions processed: ${totalProcessed}`);
  console.log(`Total issues found: ${issues.length}\n`);

  // Group by issue type
  const issuesByType = issues.reduce((acc, issue) => {
    if (!acc[issue.issue_type]) {
      acc[issue.issue_type] = [];
    }
    acc[issue.issue_type].push(issue);
    return acc;
  }, {} as Record<string, AuditIssue[]>);

  console.log('Issues by type:');
  for (const [type, issueList] of Object.entries(issuesByType)) {
    const highSeverity = issueList.filter(i => i.severity === 'high').length;
    const mediumSeverity = issueList.filter(i => i.severity === 'medium').length;
    const lowSeverity = issueList.filter(i => i.severity === 'low').length;

    console.log(`  ${type}: ${issueList.length} total (${highSeverity} high, ${mediumSeverity} medium, ${lowSeverity} low)`);
  }

  // Save detailed report
  const fs = require('fs');
  const report = {
    audit_date: new Date().toISOString(),
    total_questions: totalProcessed,
    total_issues: issues.length,
    issues_by_type: Object.entries(issuesByType).map(([type, issueList]) => ({
      type,
      count: issueList.length,
      severity_breakdown: {
        high: issueList.filter(i => i.severity === 'high').length,
        medium: issueList.filter(i => i.severity === 'medium').length,
        low: issueList.filter(i => i.severity === 'low').length
      }
    })),
    issues: issues
  };

  fs.writeFileSync(
    'generation-scripts/question-audit-report.json',
    JSON.stringify(report, null, 2)
  );

  console.log('\n✓ Detailed report saved to generation-scripts/question-audit-report.json');

  // Save high-severity issues to separate file for immediate attention
  const highSeverityIssues = issues.filter(i => i.severity === 'high');
  if (highSeverityIssues.length > 0) {
    fs.writeFileSync(
      'generation-scripts/question-audit-high-severity.txt',
      highSeverityIssues.map(i =>
        `${i.id} [${i.issue_type}]\nTemplate: ${i.template_id}\nDetails: ${i.details}\nPrompt: ${i.question}\n\n`
      ).join('---\n\n')
    );
    console.log(`✓ ${highSeverityIssues.length} high-severity issues saved to generation-scripts/question-audit-high-severity.txt`);
  }
}

auditQuestionsAutomated();
