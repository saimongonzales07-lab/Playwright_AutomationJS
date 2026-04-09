import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = '#login';
  }

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

export { LoginPage };
