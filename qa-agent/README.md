# Mary (Test Architect) – User Stories ➜ Test Cases Kit

This folder contains a ready-to-use agent spec plus the templates, guidelines, checklists, and examples referenced by the workflow you provided.

## What you get

- `agent.mary.tester.yml`: the agent definition/spec
- `templates/`: authoring templates
- `guidelines/`: writing rules and quality guidance
- `checklists/`: validation checklists
- `examples/`: Zephyr CSV example
- `output/`: recommended place for generated outputs

## How to use (recommended)

1. Paste the contents of `agent.mary.tester.yml` into your agent system (Cursor/LLM agent runner) or keep it as the canonical spec.
2. When running Task 1, the agent reads:
   - `guidelines/user-story-summary-guidelines.md`
   - `templates/user-story-summary-template.md`
   - `checklists/user-story-summary-checklist.md`
3. When running Task 2, the agent reads:
   - `guidelines/test-case-guidelines.md`
   - `templates/test-case-template.md`
   - `checklists/test-case-checklist.md`
   - `templates/zephyr-template.md`
   - `examples/zephyr-example.csv`

## Default output locations

- `output/user-story-summary.md`
- `output/data-collection-report.md`
- `output/testcases/<US-ID>.md`
- `output/testcase-generation-report.md`
- `output/zephyr.csv`

