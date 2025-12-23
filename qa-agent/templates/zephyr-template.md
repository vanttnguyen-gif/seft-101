# Zephyr CSV Export Template (Jira Zephyr Scale / Zephyr)

> This repository uses a simplified, widely-compatible CSV shape. Adjust column names if your Zephyr instance requires different headers.

## Columns

- **Issue Key**: optional (blank for new)
- **Test Summary**: short title
- **Test Description**: narrative / scope
- **Priority**: Highest/High/Medium/Low
- **Status**: Approved/Draft
- **Folder**: optional folder path
- **Component**: optional
- **Labels**: comma-separated
- **Step**: step number (1..n)
- **Test Data**: optional
- **Expected Result**: expected result for that step

## Step row rule

Each test case may produce multiple CSV rows:
- repeated metadata columns for each row
- `Step`, `Test Data`, `Expected Result` vary per row

