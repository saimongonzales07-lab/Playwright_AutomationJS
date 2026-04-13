const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();

    console.log('Before hook: page created?', !!this.page);

    if (!this.page) throw new Error('this.page is not set!');
});

After(async function (scenario) {
    if (this.browser) {

        // ONLY take screenshot if scenario failed
        if (scenario.result?.status === 'failed') {

            const screenshot = await this.page.screenshot({ fullPage: true });
            // Attach screenshot to Cucumber report
            await this.attach(screenshot, { mediaType: 'image/png' });

            console.log('Screenshot attached to scenario');
        }

        await this.browser.close();
        this.browser = null;
        this.page = null;
    }
});