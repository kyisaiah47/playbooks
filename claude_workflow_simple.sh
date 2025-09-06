#!/usr/bin/env bash

# Get template name from current directory
TEMPLATE_NAME=$(basename "$(pwd)")

# Location of your log file
LOGFILE="$HOME/.claude_logs/session.log"
mkdir -p "$(dirname "$LOGFILE")"
: > "$LOGFILE"   # empty the log

# Array of simple prompts - each creates one specific file (template-agnostic)
PROMPTS=(
"Create src/contexts/${TEMPLATE_NAME}-context.tsx based on src/contexts/wedding-context.tsx but for ${TEMPLATE_NAME} data"

"Create src/app/${TEMPLATE_NAME}/page.tsx with a simple Next.js page component"

"Create src/app/${TEMPLATE_NAME}/app/page.tsx based on src/app/wedding-planning/app/page.tsx but for ${TEMPLATE_NAME}"

"Create src/components/templates/${TEMPLATE_NAME}/${TEMPLATE_NAME}-overview.tsx with a placeholder overview component"

"Create the directory src/components/guided-notes/${TEMPLATE_NAME}/"

"Create the directory src/components/resources/${TEMPLATE_NAME}/"

"Create src/components/templates/${TEMPLATE_NAME}/${TEMPLATE_NAME}-sidebar-left.tsx based on src/components/templates/wedding/wedding-sidebar-left.tsx"

"Create src/components/templates/${TEMPLATE_NAME}/${TEMPLATE_NAME}-setup-wizard.tsx based on src/components/templates/wedding/wedding-setup-wizard.tsx"

"Create 6 core page components in src/components/templates/${TEMPLATE_NAME}/ appropriate for ${TEMPLATE_NAME}"

"Create 8 guided note files in src/components/guided-notes/${TEMPLATE_NAME}/ for relevant topics"

"Create 3 resource files in src/components/resources/${TEMPLATE_NAME}/ for educational content"

"Update src/app/${TEMPLATE_NAME}/page.tsx to be a full SEO landing page for the ${TEMPLATE_NAME} template"
)

# Loop through prompts
for i in "${!PROMPTS[@]}"; do
  STEP=$((i+1))
  PROMPT="${PROMPTS[$i]}"

  echo ">>> Running Step $STEP..."
  cd "$(dirname "$0")" && claude --print --dangerously-skip-permissions --add-dir "$(pwd)" -p "$PROMPT" | tee -a "$LOGFILE"

  # Brief pause between prompts
  sleep 2
done

echo ">>> All steps finished!"