# User Story Summary Guidelines

## Purpose

Create a single, readable document that:
- consolidates user stories from one or more sources,
- groups them logically (feature/module),
- captures acceptance criteria and business rules,
- makes gaps/assumptions explicit.

## Writing rules

- **Preserve IDs**: If a source has IDs (e.g., JIRA keys), keep them; otherwise mint `US-001`, `US-002`, etc.
- **Use consistent narrative format**: `As a <persona>, I want <capability>, so that <benefit>.`
- **Acceptance criteria must be testable**: each AC should be observable/verifyable and avoid ambiguity (avoid “fast”, “easy”, “nice”).
- **Separate business rules from ACs**:
  - **ACs**: story-specific checks
  - **Business rules**: cross-cutting constraints (validation rules, policies)
- **Annotate additions**: If you add missing stories/steps, label them clearly as **(Suggested)** and explain why.
- **Trace dependencies**: call out prerequisites, integrations, or dependent stories.

## Grouping strategy

Prefer grouping by:
1. **User journey** (onboarding → core usage → admin/reporting), or
2. **Modules** (Auth, Profile, Todo List, Notifications), or
3. **Epics** (if provided).

## Quality bar

The summary should make it easy for a tester to:
- identify what to test,
- identify edge cases,
- create traceable test cases per story.

