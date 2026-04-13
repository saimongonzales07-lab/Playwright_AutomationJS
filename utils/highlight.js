class HighlightUtil {
    static async highlightElement(locator) {
        await locator.evaluate((el) => {
            el.style.border = '3px solid red';
            el.style.backgroundColor = 'yellow';
        });
    }

    static async highlightAndScreenshot(page, locator) {
        await locator.evaluate((el) => {
            el.style.border = '3px solid red';
            el.style.backgroundColor = 'yellow';
        });

        await page.waitForTimeout(300);

        return await page.screenshot();
    }
}

module.exports = { HighlightUtil };