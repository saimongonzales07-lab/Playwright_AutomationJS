const { expect } = require ('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');
const { enterUsername, enterPassword, clickLogin } = require('../helpers/loginHelpers');
const { sleep } = require ('../helpers/loginHelpers');
const { expect, Page } = require('@playwright/test');
const { CustomWorld } = require ('../support/world');
const { fs } = require ('fs');
const { path } = require ('path');    

Given('I open the login page', async function () {
  await this.page.goto('https://www.saucedemo.com/');
});

When('I enter username {string} and password {string}', async function (username, password) {
  await enterUsername(this.page, username);
  await enterPassword(this.page, password);
});

Then ('I should be logged in successfully', async function () {
  await clickLogin(this.page, '#login-button');
  await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

Then('I should see an error message {string}', async function (errorMessage) {
  await clickLogin(this.page, '#login-button');
  const errorElement = await this.page.waitForSelector('[data-test="error"]');
  const actualErrorMessage = await errorElement.textContent();
  expect(actualErrorMessage.trim()).toBe(errorMessage);
});

Then('I should see the error message for locked out user {string}', async function (errorMessage) {
  await clickLogin(this.page, '#login-button');
  const errorElement = await this.page.waitForSelector('[data-test="error"]');
  const actualErrorMessage = await errorElement.textContent();
  expect(actualErrorMessage.trim()).toBe(errorMessage);
});

Then('I should see the error message for missing username {string}', async function (errorMessage) {
  await clickLogin(this.page, '#login-button');
  const errorElement = await this.page.waitForSelector('[data-test="error"]');
  const actualErrorMessage = await errorElement.textContent();
  expect(actualErrorMessage.trim()).toBe(errorMessage);
});