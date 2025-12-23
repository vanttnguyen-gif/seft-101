# User Story Summary (Derived from current Todo App)

> **Note**: This summary is **derived from the existing UI/code** (`index.html`, `js/app.js`) because no external user-story source was provided. Validate/rename IDs if you have official stories.

## 1. Project Overview

- **Project name**: Todo App
- **Primary users / personas**: End user managing a personal todo list
- **Out of scope**: Persistence/storage, auth, multi-user, edit item text, reorder items

## 2. Sources

- **Source type**: codebase
- **Source location/name**: `/workspace/index.html`, `/workspace/js/app.js`
- **Collected by**: Mary (Test Architect)
- **Collection timestamp (UTC)**: 2025-12-23

## 3. Story Inventory (Grouped)

### 3.1 Feature/Module: Todo List

| US ID | Title | Narrative | Acceptance Criteria (summary) | Priority | Notes/Dependencies |
|---|---|---|---|---|---|
| US-001 | Add a todo item | As a user, I want to add a new todo item, so that I can track tasks. | - Non-empty title adds new item<br>- Input cleared after add<br>- Empty title shows alert and does not add | Must | Add uses button click calling `newTodoItem()` |
| US-002 | Mark todo as complete/incomplete | As a user, I want to mark a todo item complete or incomplete, so that I can track progress. | - Click on item toggles completion styling<br>- Clicking again reverts | Must | Toggle is on `<ul>` click delegation; only LI toggles |
| US-003 | Remove a todo item | As a user, I want to remove a todo item, so that I can keep my list up to date. | - Each item has a close button<br>- Clicking close hides the item | Must | Implementation hides via `style.display='none'` (does not remove from DOM) |

## 4. Business Rules

- **BR-001**: Title validation only checks exact empty string (`''`); whitespace-only is treated as non-empty.
- **BR-002**: Delete action hides item (no undo; item remains in DOM but hidden).

## 5. Assumptions & Open Questions

- **A-001**: The “close” (×) button is the official delete interaction.
- **Q-001**: Should whitespace-only titles be rejected (trim input) or allowed?
- **Q-002**: Should delete remove the item from DOM (instead of hiding)?

## 6. Non-Functional Requirements (NFRs)

- **NFR-001**: Accessibility (keyboard/focus) — not specified
- **NFR-002**: Security — input is inserted as text node (XSS-resistant in current implementation)

