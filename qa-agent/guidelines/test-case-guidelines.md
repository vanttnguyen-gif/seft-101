# Test Case Generation Guidelines

## Goals

- Ensure **complete AC coverage** per user story.
- Include **positive + negative + boundary** scenarios.
- Keep test cases **traceable** back to acceptance criteria.
- Produce outputs suitable for **manual execution** and **Zephyr/Jira import**.

## Test case writing rules

- **One main assertion per test case** (avoid “everything in one test”).
- **Use explicit preconditions** (user state, data state, environment).
- **Steps must be executable** by a tester without guessing.
- **Expected results must be observable** (UI text, state changes, records, API responses).
- Include at least:
  - **Happy path** (P0)
  - **Validation errors** (P0/P1)
  - **Edge/boundary** cases (P1)
  - **Regression**/sanity set (P0)

## Prioritization guidance

- **P0**: core business flow, data integrity, security-sensitive actions
- **P1**: common alternatives, validations, recoverability
- **P2**: rare edge cases, cosmetic/low impact

## Coverage types to consider

- Functional
- Negative/validation
- Boundary (min/max, empty, large input)
- UX (disabled states, messages)
- Accessibility (keyboard interaction, focus, ARIA where relevant)
- Security (XSS input, authz/authn if applicable)
- Performance (where meaningful)

## Naming conventions

- User stories: `US-###`
- Test cases: `<US-ID>-TC-###`

