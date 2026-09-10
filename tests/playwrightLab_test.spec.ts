import { test, expect } from "../fixtures/base.fixtures";
import { PlaywrightLab_LoginPage } from "../pages/playwrightLab_login_page";


test.describe("Playwright Login", () => {
    test("Login", async ({ playwrightLabLoginPage, playwrightLabHomePage }) => {

        await playwrightLabLoginPage.login("test@playlab.com", "Password123");
        await playwrightLabHomePage.gotoDashboardPage();
        await playwrightLabHomePage.enterDateOfBirth("07-09-2026");
        let countries = await playwrightLabHomePage.getAllCountries();
        console.log(countries);
        await playwrightLabHomePage.enterCountry("India");
        await playwrightLabHomePage.selectGender("male");
        await playwrightLabHomePage.selectGender("female");
        await playwrightLabHomePage.selectSkills("java");
        await playwrightLabHomePage.waitForPage(5000);

    });

    test("other features", { tag: "@regression" }, async ({ playwrightLabLoginPage, playwrightLabHomePage }) => {
        await playwrightLabLoginPage.login("test@playlab.com", "Password123");
        await playwrightLabHomePage.gotoDashboardPage();
        await playwrightLabHomePage.enterBio("Password Bio Password Bio Password Bio Password Bio Password Bio Password Bio Password Bio");
        await playwrightLabHomePage.selectTermsCheckBox();
        await playwrightLabHomePage.selectPriority("Medium");
        await playwrightLabHomePage.slideVolume(0.25);
        await playwrightLabHomePage.slidePrice(250);
        await playwrightLabHomePage.uploadFiles(["./test_data/test.png"]);
        await playwrightLabHomePage.selectFrameworks(["React", "Nuxt.js"]);
        await playwrightLabHomePage.getUserManagementTablecontents();
        await playwrightLabHomePage.waitForPage(5000);



    });

});