#!/bin/bash

# Comprehensive script to rename all code-level references
# This renames variables, types, interfaces, but preserves database column names

echo "Starting comprehensive code renaming..."

# Find all TypeScript and TSX files
find src -type f \( -name "*.ts" -o -name "*.tsx" \) | while read -r file; do
  echo "Processing: $file"

  # Create backup
  cp "$file" "$file.bak"

  # Apply replacements with word boundaries to avoid partial matches
  # Order matters - do specific replacements first

  # Prompt/Question replacements
  sed -i '' \
    -e 's/\bpromptResponse\b/questionResponse/g' \
    -e 's/\bsetPromptResponse\b/setQuestionResponse/g' \
    -e 's/\bpromptSearchQuery\b/questionSearchQuery/g' \
    -e 's/\bsetPromptSearchQuery\b/setQuestionSearchQuery/g' \
    -e 's/\bselectedPrompt\b/selectedQuestion/g' \
    -e 's/\bsetSelectedPrompt\b/setSelectedQuestion/g' \
    -e 's/\bfetchPrompts\b/fetchQuestions/g' \
    -e 's/\bloadPrompts\b/loadQuestions/g' \
    -e 's/\bpromptsData\b/questionsData/g' \
    -e 's/\bgroupedPrompts\b/groupedQuestions/g' \
    -e 's/\bfilteredPrompts\b/filteredQuestions/g' \
    -e 's/\bansweredPrompts\b/answeredQuestions/g' \
    -e 's/\bsetAnsweredPrompts\b/setAnsweredQuestions/g' \
    -e 's/\bfetchedPrompts\b/fetchedQuestions/g' \
    -e 's/\bcheckAnsweredPrompts\b/checkAnsweredQuestions/g' \
    -e 's/\ballPrompts\b/allQuestions/g' \
    -e 's/\bquestionsRes\b/questionsRes/g' \
    -e 's/interface Prompt\b/interface Question/g' \
    -e 's/\bPrompt\[\]/Question[]/g' \
    -e 's/\bPrompt\>/Question/g' \
    -e 's/: Prompt\b/: Question/g' \
    -e 's/<Prompt>/<Question>/g' \
    -e 's/\bprompts\b/questions/g' \
    -e 's/\bsetPrompts\b/setQuestions/g' \
    "$file"

  # Article/Reading replacements
  sed -i '' \
    -e 's/\barticleContentSearchQuery\b/readingContentSearchQuery/g' \
    -e 's/\bsetArticleContentSearchQuery\b/setReadingContentSearchQuery/g' \
    -e 's/\bselectedArticle\b/selectedReading/g' \
    -e 's/\bsetSelectedArticle\b/setSelectedReading/g' \
    -e 's/\bloadingArticle\b/loadingReading/g' \
    -e 's/\bsetLoadingArticle\b/setLoadingReading/g' \
    -e 's/\bhandleArticleClick\b/handleReadingClick/g' \
    -e 's/\bhandleCloseArticle\b/handleCloseReading/g' \
    -e 's/\bfetchArticles\b/fetchReadings/g' \
    -e 's/\barticlesData\b/readingsData/g' \
    -e 's/\bfilteredArticles\b/filteredReadings/g' \
    -e 's/\barticleId\b/readingId/g' \
    -e 's/\bArticleDetail\b/ReadingDetail/g' \
    -e 's/interface Article\b/interface Reading/g' \
    -e 's/\bArticle\[\]/Reading[]/g' \
    -e 's/\bArticle\>/Reading/g' \
    -e 's/: Article\b/: Reading/g' \
    -e 's/<Article>/<Reading>/g' \
    -e 's/\barticles\b/readings/g' \
    -e 's/\bsetArticles\b/setReadings/g' \
    "$file"

  # Template/Guide replacements (be careful with Props interfaces)
  sed -i '' \
    -e 's/\bfetchTemplates\b/fetchGuides/g' \
    -e 's/\bloadMoreTemplates\b/loadMoreGuides/g' \
    -e 's/\ballTemplates\b/allGuides/g' \
    -e 's/\bdisplayedTemplates\b/displayedGuides/g' \
    -e 's/\bsetDisplayedTemplates\b/setDisplayedGuides/g' \
    -e 's/\bfilteredTemplates\b/filteredGuides/g' \
    -e 's/\bregularTemplates\b/regularGuides/g' \
    -e 's/\bfeaturedTemplates\b/featuredGuides/g' \
    -e 's/\bfeaturedGeneralTemplates\b/featuredGeneralGuides/g' \
    -e 's/\bfeaturedGenZTemplates\b/featuredGenZGuides/g' \
    -e 's/\bfeaturedHealthTemplates\b/featuredHealthGuides/g' \
    -e 's/\bhandleTemplateChange\b/handleGuideChange/g' \
    -e 's/\bopenTemplateDropdown\b/openGuideDropdown/g' \
    -e 's/\bselectFirstPrompt\b/selectFirstQuestion/g' \
    -e 's/\bopenFirstArticle\b/openFirstReading/g' \
    -e 's/\bTEMPLATES_PER_LOAD\b/GUIDES_PER_LOAD/g' \
    -e 's/\bhasMoreTemplates\b/hasMoreGuides/g' \
    -e 's/\bsetHasMoreTemplates\b/setHasMoreGuides/g' \
    -e 's/\bTemplateSession\b/GuideSession/g' \
    -e 's/\bcurrentTemplateSession\b/currentGuideSession/g' \
    -e 's/\bfinishTemplate\b/finishGuide/g' \
    -e 's/\bopenTemplate\b/openGuide/g' \
    -e 's/interface Template\b/interface Guide/g' \
    -e 's/\bTemplate\[\]/Guide[]/g' \
    -e 's/: Template\b/: Guide/g' \
    -e 's/<Template>/<Guide>/g' \
    -e 's/\btemplates\b/guides/g' \
    -e 's/\bsetTemplates\b/setGuides/g' \
    "$file"

  # Check if file actually changed
  if ! diff -q "$file" "$file.bak" > /dev/null 2>&1; then
    echo "  ✓ Updated: $file"
    rm "$file.bak"
  else
    # No changes, restore backup
    mv "$file.bak" "$file"
  fi
done

echo ""
echo "Renaming complete!"
echo ""
echo "Files that were modified:"
git status --short | grep -E "^\s*M"
