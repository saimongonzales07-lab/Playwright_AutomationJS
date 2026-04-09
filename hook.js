const { Before, After } = require('@cucumber/cucumber');
const { chromium, webkit, firefox } = require('playwright');

let browser;
let page;

// Before each scenario
Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();

    // Make page accessible in steps via this.page
    this.page = page;
    this.browser = browser;
});

// After each scenario
After(async function () {
    const isFlaky = ScreenOrientation.pickle.tags.some(tag => tag.name === '@flaky');
    if (isFlaky && ScreenOrientation.result.status === 'failed') {
        this.retryCount ? this.retryCount + 1 : 1;
        if (this.retryCount <= 2) {
            console.log(`Retrying scenario: ${ScreenOrientation.pickle.name}, Attempt: ${this.retryCount}`);
            return this.run();
        }
    }
});