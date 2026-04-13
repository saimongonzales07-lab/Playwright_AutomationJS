const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const { expect } = require('@playwright/test');
const { HighlightUtil } = require('../utils/highlight');
const assert = require('assert');

Given('I open the login page', async function () {
  console.log('Given step: page created?', !!this.page);

  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When('I login with valid credentials', async function () {
  await this.loginPage.login('standard_user', 'secret_sauce');
});

Then('I should see the Products page', async function () {
  const productsTitle = await this.page.textContent('.title');
  assert.strictEqual(productsTitle, 'Products');
  const screenshot = await HighlightUtil.highlightAndScreenshot(this.page, this.page.locator('.title'));
  await this.attach(screenshot, { mediaType: 'image/png' });
});

When('I login using invalid user using {string} and {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should see the Incorrect {string}', async function (errorMessage) {
  const errorText = await this.page.textContent('[data-test="error"]');
  assert.strictEqual(errorText, errorMessage);
  const screenshot = await HighlightUtil.highlightAndScreenshot(this.page, this.page.locator('[data-test="error"]')); // to highlight specific element nasa utils folder
  await this.attach(screenshot, { mediaType: 'image/png' });
});