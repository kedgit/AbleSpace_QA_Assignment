const { test, expect } = require('@playwright/test');
require('dotenv').config();


test('Add Student form: inspect Room Number behavior for alphabetic input', async ({ page }) => {
  const email = process.env.LOGIN_EMAIL;
  const password = process.env.LOGIN_PASSWORD;
  test.skip(!email || !password, 'Set LOGIN_EMAIL and LOGIN_PASSWORD in playwright/.env');

  await page.goto('/');
  
  // These login locators are common semantic examples. Adjust to the actual staging login flow.
  const emailField = page.getByLabel(/email/i).first();
  await expect(emailField).toBeVisible();
  await emailField.fill(email);

  const continueButton = page.getByRole('button', { name: /continue|next|log in|sign in/i }).first();
  await continueButton.click();


  // If the UI does not show a password field, complete the supported sign-in flow manually
  // or update this test to match the application's documented test-login method.
  const passwordField = page.getByLabel(/password/i).first();
  await expect(passwordField).toBeVisible({ timeout: 10_000 });
  await passwordField.fill(password);
  await page.getByRole('button', { name: /log in|sign in|continue/i }).first().click();

  // Replace this navigation with the real route or UI navigation after login.
  await page.goto(process.env.ADD_STUDENT_PATH || '/');

  // Adjust the button/link name to match the actual application.
  const addStudentAction = page.getByRole('button', { name: /add student|new student|create student/i }).first();
  if (await addStudentAction.count()) await addStudentAction.click();

  // Confirm the accessible label/name in the actual form and adjust if needed.
  const roomField = page.getByLabel(/room number/i).first();
  await expect(roomField).toBeVisible();
  await roomField.fill(-45);

  
  // negative values are valid or invalid, and it does not save any student data.
  await expect(roomField).toHaveValue(-45);
});
