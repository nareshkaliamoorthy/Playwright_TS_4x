import { test as base, expect } from '@playwright/test';
import { PlaywrightLab_LoginPage } from '../pages/playwrightLab_login_page';
import { PlaywrightLabHomePage } from '../pages/playwrightLab_home_page';

type Fixtures = {
    playwrightLabLoginPage: PlaywrightLab_LoginPage;
    playwrightLabHomePage: PlaywrightLabHomePage;
}

export const test = base.extend<Fixtures>({
    playwrightLabLoginPage: async ({ page }, use) => {
        const playwrightLabLoginPage = new PlaywrightLab_LoginPage(page);
        await use(playwrightLabLoginPage);
    },
    playwrightLabHomePage: async ({ page }, use) => {
        const playwrightLabHomePage = new PlaywrightLabHomePage(page);
        await use(playwrightLabHomePage);
    }
});

export { expect };