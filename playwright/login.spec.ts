
import { test, expect } from '@playwright/test';

test('existing user can log in and open Caseload', async ({ page }) => {
  const email = process.env.ABLESPACE_EMAIL;
  const password = process.env.ABLESPACE_PASSWORD;

  expect(email, 'ABLESPACE_EMAIL must be configured').toBeTruthy();
  expect(password, 'ABLESPACE_PASSWORD must be configured').toBeTruthy();

  await page.goto('/signin');

  await page.getByRole('textbox', { name: 'Email' }).fill(email!);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  const passwordField = page.getByRole('textbox', { name: 'Password' });
  await expect(passwordField).toBeVisible();
  await passwordField.fill(password!);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();

  // Diagnostic pause: inspect the page after submitting the password.
  await page.pause();
});
