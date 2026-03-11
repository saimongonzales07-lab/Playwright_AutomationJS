//helpers/loginHelpers.js
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const enterUsername = async (page, username) => {
  console.log(`Entering username: ${username}`);
    // Wait until the username input is visible
  await page.waitForSelector('#user-name');
  await page.fill('#user-name', username);
};

const enterPassword = async (page, password) => {
  console.log(`Entering password: ${password}`);
    // Wait until the password input is visible
    await page.waitForSelector('#password');
    await page.fill('#password', password);
};

const clickLogin = async (page, submitButtonSelector) => {
  console.log("Clicking login button");
    // Wait until the submit button is visible
  await page.waitForSelector(submitButtonSelector);
  await page.click(submitButtonSelector);
  await page.screenshot({ path: 'screenshots/fullpage.png', fullPage: true });
  await sleep(3000); // Add a short delay to ensure the login process completes before proceeding
};

module.exports = {
  sleep,
  enterUsername,
  enterPassword,
};
