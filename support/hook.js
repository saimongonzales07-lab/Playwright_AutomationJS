const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  this.page = page;
});

After(async function () {
  await browser.close();
});