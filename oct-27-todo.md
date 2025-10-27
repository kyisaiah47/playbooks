# Oct 27 TODO - App MVP V2 Fixes

## Daily View
- [ ] Fix "Today's Agenda" appearing twice on the page
- [ ] Fix date picker showing correct date but card showing day before
- [ ] Simplify view to only show todos (remove other content)
- [ ] Change screen icon to orange to match icon sidebar
- [ ] Change tab icon to orange to match icon sidebar

## Notes View
- [ ] Fix slow loading performance (implement caching or optimize data fetching)
- [ ] Replace hardcoded notes icon in sidebar items with actual Lucide icons for each note type
- [ ] Replace "Notes" label in tabs with actual note names
- [ ] Add Lucide icons to tabs instead of generic icons
- [ ] Fix questions not loading in note view
- [ ] Fix readings not loading in note view

## Discover View
- [ ] Clicking guide from list should show detailed single guide view (same as /guide page)
- [ ] Remove automatic note creation when clicking guide
- [ ] Fix "Create New Note" to show option for guide-based note OR blank note (like Notion)
- [ ] Remove redirect to discover view when clicking "Create New Note"

## Library View
- [ ] Use same component and formatting as /library page for singular reading view
- [ ] Add styling for tables in reading content
- [ ] Add styling for callouts in reading content
- [ ] Add author metadata to reading view
- [ ] Add type metadata to reading view
- [ ] Match exact formatting from /library page

## Calendar View
- [ ] Fix events loading when no notes are selected in sidebar
- [ ] Fix sidebar note selection not toggling calendar view
- [ ] Add week view option alongside month view
- [ ] Add day view option alongside month view
- [ ] Add year view option alongside month view

## Tasks View
- [ ] Fix glitchy drag behavior
- [ ] Enable dragging items into empty columns
- [ ] Add drag outline visual feedback on column about to receive drop
- [ ] Improve overall drag and drop UX

## Timeline View
- [ ] Fix view layout - everything is flush to left side
- [ ] Investigate and fix whatever is causing the broken layout
- [ ] Make each timeline item clickable
- [ ] Make each timeline item editable

## Knowledge Graph View
- [ ] Add connection lines between nodes
- [ ] Simplify bottom tooltips (too much information currently)
- [ ] Keep categories tooltip
- [ ] Reduce/simplify other tooltip information

## Analytics View
- [ ] (No specific issues - 1/1 mentioned but no details provided)

## Community View
- [ ] Add "Coming soon" message to view
- [ ] Keep sidebar item visible

## Settings View
- [ ] Fix appearance theme toggle not actually changing mode
- [ ] Redesign theme selection UI to match app design
- [ ] Consolidate all 5 setting sections into single view (currently too spread out)
- [ ] Add "Coming soon" message for all notification settings
- [ ] Ensure "Update Password" works with Supabase Auth
- [ ] Add "Coming soon" for Export Data feature
- [ ] Add double confirmation modal for Delete Account action
- [ ] Ensure Delete Account confirmation is secure and clear

## Performance (Global)
- [ ] Implement caching solution for all /app data fetching
- [ ] Optimize data loading across all views to reduce wait times
