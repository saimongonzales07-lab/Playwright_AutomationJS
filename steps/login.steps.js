const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const assert = require('assert');

Given('I open the login page', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('I login with valid credentials', async function () {
  // await page.goto('https://www.saucedemo.com/');

  // Fill in the username and password fields and click login.
  await page.fill('input#user-name', 'standard_user');
  await page.fill('input#password', 'secret_sauce');
  await page.click('input#login-button');

  // Expects the URL to contain intro.
  await expect(page).toHaveTitle(/Swag Labs/);
});
Then('I should see the Products page', async function () {
  // Check if the Products page is displayed by verifying the presence of a specific element.
  const productsTitle = await page.textContent('.title');
  assert.strictEqual(productsTitle, 'Products');

  // Close the browser after the test is done.
  await browser.close();
});
