import { BasePage } from "./base_page";
import { Page, Locator } from "@playwright/test";

export class LoginPage {
    private usernameInputBox: Locator;
    private passwordInputBox: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        //super(page);
        this.usernameInputBox = page.getByPlaceholder("Username");
        this.passwordInputBox = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole("button", { name: "Login" });
    }

    async login(username: string, password: string) {
        await this.usernameInputBox.fill(username);
        await this.passwordInputBox.fill(password);
        await this.loginButton.click();
    }

}