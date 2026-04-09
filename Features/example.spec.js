// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  // Click the get started link.
  await page.getByRole('button', { name: 'Login' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page).toHaveTitle('Swag Labs');
});
