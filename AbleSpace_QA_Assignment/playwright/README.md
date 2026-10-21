# Playwright test (JavaScript)

## What this test does
The test signs in and opens the Add Student form, then enters `-45` into Room Number and checks whether the control retains the value. It does **not** submit the form or create a student record. This is a negative input check, not proof of a bug.

## Setup
1. Install Node.js (LTS).
2. From this `playwright` directory, run:
   ```bash
   npm install
   npx playwright install
   ```
3. Copy `.env.example` to `.env`.
4. Set `BASE_URL`, `LOGIN_EMAIL`, `LOGIN_PASSWORD`, and `ADD_STUDENT_PATH`. Never commit `.env`.
5. Inspect the actual staging UI and adjust the login flow, route, and locators in `tests/room-number.spec.js`. Some sign-in flows use OTP/magic links rather than passwords, so this scaffold may need adaptation.

## Run
```bash
npm test
```
For headed mode:
```bash
npm run test:headed
```

## Important
- This test has not been run against the authenticated staging application in this workspace.
- Do not automate account creation.
- Use only the one manually created test account and fictional student data.
- Do not submit the form in this test. Confirm the product's intended Room Number format before reporting a bug.
