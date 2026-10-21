# AbleSpace QA Take-Home Assignment

This package is a **working draft**, not a claim that all tests have been executed.

## Important execution status
- The public staging URL could be opened through web lookup, but its authenticated application screens were not accessible to this workspace.
- One preliminary observation was provided by the candidate: the Add Student form accepts text in the Room Number field. This is recorded as an observation requiring requirement confirmation; it is **not yet a confirmed bug** because the expected room-number format is unknown and persistence was not confirmed.
- All other actual results and compatibility statuses are marked `Not Run` / `Pending execution` so no test outcome is invented.
- Before submitting, log in to https://staging.ablespace.io, execute the scenarios, update actual results/statuses, and attach real screenshots for any confirmed bugs.

## Contents
- `01_Test_Scenarios.xlsx` — 10 exploratory scenarios.
- `02_Detailed_Test_Cases.xlsx` — 8 detailed cases for the Add Student workflow.
- `03_Bug_Reports.docx` — provisional report template based on the Room Number observation.
- `04_Compatibility_Report.xlsx` — browser/device checklist.
- `05_Test_Summary.docx` — summary template to update after testing.
- `playwright/` — Playwright JavaScript test scaffold for a Room Number field interaction, plus setup instructions.

## Suggested workflow
1. Sign in using the one account created manually for this assignment.
2. Test the Add Student workflow using fictional data only.
3. Complete the actual result and status columns in the spreadsheets.
4. Record each confirmed bug with exact reproduction steps, environment and screenshot.
5. Run cross-browser and responsive checks; do not mark untested cells as Pass.
6. Finish the test summary based on the results you actually observed.
7. Adjust Playwright selectors/routes to the live UI, run the test, and include the real execution result.

## Safety
Use fictional data only. Do not test security, injection, or load scenarios. Do not automate account creation. Never commit `.env` or credentials.
