# Templata — Product Vision & Data Model

## Vision

Pivot Templata from a static life planning template library into an AI-powered **Playbook** platform.

**The problem:** Notion is a blank canvas — powerful but overwhelming. ChatGPT gives you a wall of text. Templata's old model gave you rigid pre-written templates. None of these feel tailored.

**The solution:** User describes their situation in natural language → Claude generates a personalized Playbook in one shot → user works through it with AI as a thinking partner inline.

> Notion is for organizing your life. Templata is for executing the big moments in it.

---

## Core Concept: Playbooks

A **Playbook** is an AI-generated, personalized planning guide for a specific life event or goal. It's not a generic template — it's built around *your* context ("wedding planning in NYC, $50k budget, 12 months out").

Playbooks are shareable. The community can browse, fork, and re-tailor each other's playbooks.

---

## Data Model

### Playbook
The top-level entity. Replaces the old Guide + Track split (those collapse into one thing since the AI generates it for you specifically).

### Item (3 types)

| Type | Purpose |
|---|---|
| **Task** | Actionable, checkable. "Do this." |
| **Question** | Answerable. Triggers inline AI feedback in real time. "Think about this." |
| **Resource** | Upfront context before the user starts working. Venues, books, people, tools, local services. "Know this." |

AI decides the ordering and phasing of items — no manual categories.

---

## AI — 2 Integration Points

### 1. Generation (one-shot)
- User describes their situation in natural language
- One Claude API call returns a full structured Playbook as JSON (tasks + questions + resources)
- Saved to DB, immediately usable
- No streaming, no chat — just one structured response

### 2. Inline Feedback (real-time)
- User answers a question → Claude responds with contextual feedback
- Example: "My budget is $50k for a NYC wedding" → AI returns a budget breakdown + specific venue suggestions in that range
- Responses are saved permanently inline under each answer
- Makes questions feel like AI input fields, not just reflection prompts

---

## Community

- All playbooks are public and browseable by default
- Users can **fork** any playbook → AI re-tailors it to their specific context
- Launch with 5-10 pre-generated polished playbooks to seed the community page

---

## Terminology

| Old (Templata) | New |
|---|---|
| Guide | Playbook |
| Track | (gone — merged into Playbook) |
| Question | Question (Item) |
| Reading | Resource (Item) |
| Task | Task (Item) |
