import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightLab_LoginPage {
    private emailAddressInputBox: Locator;
    private passwordInputBox: Locator;
    private signInButton: Locator;
    private loginSuccessHeader: Locator;
    private page;

    constructor(page: Page) {
        this.page = page;
        this.emailAddressInputBox = page.getByPlaceholder("you@example.com");
        this.passwordInputBox = page.getByPlaceholder("Enter your password");
        this.signInButton = page.getByRole("button", { name: "Sign In" });
        this.loginSuccessHeader = page.getByText("Welcome back!")

    }

    async login(username: string, password: string) {
        await this.page.goto("https://playwrightlab.github.io/login.html");
        await this.emailAddressInputBox.fill(username);
        await this.passwordInputBox.fill(password);
        await this.signInButton.click();
        await expect(this.loginSuccessHeader).toBeVisible();

    }
}

