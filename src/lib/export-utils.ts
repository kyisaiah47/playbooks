/**
 * Export Utilities for Life OS
 *
 * Provides functions to export user data in various formats:
 * - PDF (formatted summary)
 * - Markdown (text-based summary)
 * - JSON (structured data export)
 */

import { TemplateSession, ReflectionEntry } from '@/stores/workspace-store';
import { InsightDashboard } from '@/types/insight';

/**
 * Generate Markdown summary
 */
export function generateMarkdownSummary(
  templates: TemplateSession[],
  reflections: ReflectionEntry[],
  insights?: InsightDashboard
): string {
  const now = new Date().toLocaleDateString();

  let markdown = `# Life OS Export\n\n`;
  markdown += `**Generated:** ${now}\n\n`;
  markdown += `---\n\n`;

  // Summary Stats
  if (insights) {
    markdown += `## Summary\n\n`;
    markdown += `- **Total Templates:** ${insights.summary.totalTemplates}\n`;
    markdown += `- **Total Reflections:** ${insights.summary.totalReflections}\n`;
    markdown += `- **Active Days:** ${insights.summary.activeDays}\n`;
    markdown += `- **Current Streak:** ${insights.summary.currentStreak} days\n`;
    markdown += `- **Most Active Category:** ${insights.summary.mostActiveCategory}\n\n`;
    markdown += `---\n\n`;
  }

  // Templates
  if (templates.length > 0) {
    markdown += `## Templates (${templates.length})\n\n`;
    templates.forEach((template, index) => {
      markdown += `### ${index + 1}. ${template.guideId}\n\n`;
      markdown += `- **Status:** ${template.completion === 100 ? 'Completed' : 'In Progress'} (${template.completion}%)\n`;
      markdown += `- **Tags:** ${template.tags.join(', ')}\n`;
      markdown += `- **Started:** ${template.startedAt.toLocaleDateString()}\n`;
      markdown += `- **Last Updated:** ${template.updatedAt.toLocaleDateString()}\n\n`;

      if (Object.keys(template.answers).length > 0) {
        markdown += `**Responses:**\n\n`;
        Object.entries(template.answers).forEach(([question, answer]) => {
          markdown += `- ${question}: ${answer}\n`;
        });
        markdown += `\n`;
      }
    });
    markdown += `---\n\n`;
  }

  // Reflections
  if (reflections.length > 0) {
    markdown += `## Reflections (${reflections.length})\n\n`;
    reflections.forEach((reflection, index) => {
      markdown += `### ${index + 1}. Reflection - ${reflection.createdAt.toLocaleDateString()}\n\n`;
      markdown += `**Mood:** ${reflection.mood ? `${reflection.mood} ${reflection.mood === 'happy' ? '😊' : reflection.mood === 'neutral' ? '😐' : '😔'}` : 'Not specified'}\n\n`;
      markdown += `**Tags:** ${reflection.tags.join(', ')}\n\n`;
      markdown += `${reflection.text}\n\n`;
      markdown += `---\n\n`;
    });
  }

  // Insights
  if (insights && insights.insights.length > 0) {
    markdown += `## Key Insights\n\n`;
    insights.insights.forEach((insight) => {
      markdown += `### ${insight.title}\n\n`;
      markdown += `${insight.description}\n\n`;
      markdown += `**Period:** ${insight.period}\n\n`;

      if (insight.type === 'category-usage') {
        markdown += `**Most Active:** ${insight.data.mostActive}\n\n`;
      } else if (insight.type === 'mood-trend') {
        markdown += `**Trend:** ${insight.data.trend}\n\n`;
        markdown += `**Average Mood:** ${insight.data.average.toFixed(2)}\n\n`;
      } else if (insight.type === 'recurring-theme') {
        markdown += `**Top Themes:** ${insight.data.topThemes.join(', ')}\n\n`;
      }

      markdown += `---\n\n`;
    });
  }

  return markdown;
}

/**
 * Generate JSON export
 */
export function generateJSONExport(
  templates: TemplateSession[],
  reflections: ReflectionEntry[],
  insights?: InsightDashboard
): string {
  const exportData = {
    exportDate: new Date().toISOString(),
    version: '1.0',
    data: {
      templates,
      reflections,
      insights: insights || null,
    },
  };

  return JSON.stringify(exportData, null, 2);
}

/**
 * Generate HTML for PDF conversion
 */
export function generateHTMLForPDF(
  templates: TemplateSession[],
  reflections: ReflectionEntry[],
  insights?: InsightDashboard
): string {
  const now = new Date().toLocaleDateString();

  let html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Life OS Export</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      line-height: 1.6;
      color: #333;
    }
    h1 {
      color: #1a1a1a;
      border-bottom: 3px solid #333;
      padding-bottom: 10px;
    }
    h2 {
      color: #2a2a2a;
      margin-top: 30px;
      border-bottom: 2px solid #ddd;
      padding-bottom: 8px;
    }
    h3 {
      color: #3a3a3a;
      margin-top: 20px;
    }
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin: 20px 0;
    }
    .summary-card {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #333;
    }
    .summary-card h4 {
      margin: 0 0 5px 0;
      font-size: 14px;
      color: #666;
    }
    .summary-card p {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .tag {
      display: inline-block;
      background: #e0e0e0;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      margin-right: 8px;
      margin-top: 4px;
    }
    .reflection-text {
      background: #f9f9f9;
      padding: 15px;
      border-left: 3px solid #666;
      margin: 10px 0;
      font-style: italic;
    }
    .progress-bar {
      background: #e0e0e0;
      height: 20px;
      border-radius: 10px;
      overflow: hidden;
      margin: 10px 0;
    }
    .progress-fill {
      background: #4CAF50;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 12px;
      font-weight: bold;
    }
    .meta {
      color: #666;
      font-size: 14px;
    }
    hr {
      border: none;
      border-top: 1px solid #ddd;
      margin: 30px 0;
    }
  </style>
</head>
<body>
  <h1>Life OS Export</h1>
  <p class="meta">Generated on ${now}</p>
  <hr>
`;

  // Summary section
  if (insights) {
    html += `
  <h2>Summary</h2>
  <div class="summary-grid">
    <div class="summary-card">
      <h4>Total Templates</h4>
      <p>${insights.summary.totalTemplates}</p>
    </div>
    <div class="summary-card">
      <h4>Total Reflections</h4>
      <p>${insights.summary.totalReflections}</p>
    </div>
    <div class="summary-card">
      <h4>Current Streak</h4>
      <p>${insights.summary.currentStreak} days</p>
    </div>
    <div class="summary-card">
      <h4>Active Days</h4>
      <p>${insights.summary.activeDays}</p>
    </div>
  </div>
  <hr>
`;
  }

  // Templates
  if (templates.length > 0) {
    html += `<h2>Templates (${templates.length})</h2>`;
    templates.forEach((template, index) => {
      html += `
  <h3>${index + 1}. ${template.guideId}</h3>
  <p class="meta">
    Started: ${template.startedAt.toLocaleDateString()} |
    Last Updated: ${template.updatedAt.toLocaleDateString()}
  </p>
  <div class="progress-bar">
    <div class="progress-fill" style="width: ${template.completion}%">
      ${template.completion}%
    </div>
  </div>
  <p><strong>Tags:</strong> ${template.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</p>
`;
      if (Object.keys(template.answers).length > 0) {
        html += `<p><strong>Responses:</strong></p><ul>`;
        Object.entries(template.answers).forEach(([question, answer]) => {
          html += `<li><strong>${question}:</strong> ${answer}</li>`;
        });
        html += `</ul>`;
      }
    });
    html += `<hr>`;
  }

  // Reflections
  if (reflections.length > 0) {
    html += `<h2>Reflections (${reflections.length})</h2>`;
    reflections.forEach((reflection, index) => {
      const moodEmoji = reflection.mood === 'happy' ? '😊' : reflection.mood === 'neutral' ? '😐' : reflection.mood === 'sad' ? '😔' : '';
      html += `
  <h3>${index + 1}. ${reflection.createdAt.toLocaleDateString()}</h3>
  <p class="meta">
    Mood: ${reflection.mood || 'Not specified'} ${moodEmoji} |
    Tags: ${reflection.tags.map(tag => `<span class="tag">${tag}</span>`).join('') || 'None'}
  </p>
  <div class="reflection-text">
    ${reflection.text.replace(/\n/g, '<br>')}
  </div>
`;
    });
  }

  html += `
</body>
</html>
`;

  return html;
}

/**
 * Trigger browser download
 */
export function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Export as Markdown
 */
export function exportAsMarkdown(
  templates: TemplateSession[],
  reflections: ReflectionEntry[],
  insights?: InsightDashboard
) {
  const markdown = generateMarkdownSummary(templates, reflections, insights);
  const filename = `lifeos-export-${new Date().toISOString().split('T')[0]}.md`;
  downloadFile(markdown, filename, 'text/markdown');
}

/**
 * Export as JSON
 */
export function exportAsJSON(
  templates: TemplateSession[],
  reflections: ReflectionEntry[],
  insights?: InsightDashboard
) {
  const json = generateJSONExport(templates, reflections, insights);
  const filename = `lifeos-export-${new Date().toISOString().split('T')[0]}.json`;
  downloadFile(json, filename, 'application/json');
}

/**
 * Export as HTML (for PDF printing)
 */
export function exportAsHTML(
  templates: TemplateSession[],
  reflections: ReflectionEntry[],
  insights?: InsightDashboard
) {
  const html = generateHTMLForPDF(templates, reflections, insights);
  const filename = `lifeos-export-${new Date().toISOString().split('T')[0]}.html`;
  downloadFile(html, filename, 'text/html');

  // Open in new window for printing
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
  }
}
