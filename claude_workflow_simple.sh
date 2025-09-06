#!/usr/bin/env bash

# Location of your log file
LOGFILE="$HOME/.claude_logs/session.log"
mkdir -p "$(dirname "$LOGFILE")"
: > "$LOGFILE"   # empty the log

# Array of simple prompts - each creates one specific file
PROMPTS=(
"Create src/contexts/freelance-business-context.tsx based on src/contexts/wedding-context.tsx but for freelance business data"

"Create src/app/freelance-business/page.tsx with a simple Next.js page component"

"Create src/app/freelance-business/app/page.tsx based on src/app/wedding-planning/app/page.tsx but for freelance business"

"Create src/components/templates/freelance-business/freelance-business-overview.tsx with a placeholder overview component"

"Create the directory src/components/guided-notes/freelance-business/"

"Create the directory src/components/resources/freelance-business/"

"Create src/components/templates/freelance-business/freelance-business-sidebar-left.tsx based on src/components/templates/wedding/wedding-sidebar-left.tsx"

"Create src/components/templates/freelance-business/freelance-business-setup-wizard.tsx based on src/components/templates/wedding/wedding-setup-wizard.tsx"

"Create 6 core page components in src/components/templates/freelance-business/ for business-setup, services, clients, finances, marketing, legal"

"Create 8 guided note files in src/components/guided-notes/freelance-business/ for business planning topics"

"Create 3 resource files in src/components/resources/freelance-business/ for educational content"

"Update src/app/freelance-business/page.tsx to be a full SEO landing page for the freelance business template"
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