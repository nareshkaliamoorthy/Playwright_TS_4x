import { expect, Page, Locator } from '@playwright/test';

export class PlaywrightLabHomePage {

    private gotoDashboardButton: Locator;
    private dateOfBirthInput: Locator;
    private country: Locator;
    private countryOption: Locator;
    private page: Page;
    private bioInputBox: Locator;
    private termsCheckbox: Locator;
    private priorityDropdown: Locator;
    private priorityDropdownOptions: Locator;
    private volumeSlider: Locator;
    private priceSlider: Locator;
    private uploadlink: Locator;
    private autoSuggestInputBox: Locator;
    private multiframework: Locator;
    private multiframeworkOptions: Locator;
    private userManagementTable: Locator;


    constructor(page: Page) {
        this.page = page;
        this.gotoDashboardButton = page.getByRole("link", { name: "Go to Dashboard" });
        this.dateOfBirthInput = page.locator("[data-testid='input-dob']");
        this.country = page.locator(".country-select");
        this.countryOption = page.locator(".country-option");
        this.bioInputBox = page.getByPlaceholder("Tell us about yourself...");
        this.termsCheckbox = page.locator(".terms-checkbox");
        this.priorityDropdown = page.locator("[id='customDropdownValue']");
        this.priorityDropdownOptions = page.locator(".custom-dropdown-menu li");
        this.volumeSlider = page.locator("[data-testid='slider-volume']");
        this.priceSlider = page.locator("[data-testid='slider-price']");
        this.uploadlink = page.locator("[data-testid='file-input']");
        this.autoSuggestInputBox = page.getByPlaceholder("Type to search...");
        this.multiframework = page.locator(".frameworks-select");
        this.multiframeworkOptions = page.locator(".frameworks-select option");
        this.userManagementTable = page.getByTestId("data-table");
    }

    async gotoDashboardPage() {
        await this.gotoDashboardButton.click();
    }
    async enterDateOfBirth(dateValue: string) {
        try {
            const [day, month, year] = dateValue.split("-");
            const formattedDate = `${year}-${month}-${day}`;
            console.log(formattedDate);
            await this.dateOfBirthInput.fill(formattedDate);
        }
        catch (error) {
            throw new Error(`${error} - Date value should be in DD-MM-YYYY format`);
        }
    }

    async getAllCountries(): Promise<string[]> {
        let countriesList = this.countryOption.allInnerTexts();
        return countriesList;
    }
    async enterCountry(country: string) {
        await this.country.selectOption(country);
    }

    async selectGender(gender: string) {
        await this.page.locator(`input[name="gender"][value="${gender}"]`).check();

    }

    async selectSkills(skill: string) {
        await this.page.locator(`input[name="skills"][value="${skill}"]`).check();
    }

    async waitForPage(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }

    async enterBio(bio: string) {
        await this.bioInputBox.fill(bio);
    }

    async selectTermsCheckBox() {
        await this.termsCheckbox.check();
    }

    async selectPriority(priority: string) {
        await this.priorityDropdown.click();
        const priorities = await this.priorityDropdownOptions.allTextContents();
        console.log(priorities);
        await this.priorityDropdownOptions.filter({ hasText: `${priority}` }).click();

    }
    async slideVolume(volume: number) {
        await this.volumeSlider.scrollIntoViewIfNeeded();
        const box = await this.volumeSlider.boundingBox();
        console.log(box);
        console.log("BEFORE:", await this.volumeSlider.inputValue());
        if (box) {
            await this.page.mouse.move(box.x + box.width * .50, box.y + box.height / 2);
            await this.page.mouse.down();
            await this.page.mouse.move(box.x + box.width * volume, box.y + box.height / 2);
            await this.page.mouse.up();
        }
        console.log("AFTER:", await this.volumeSlider.inputValue());
    }

    async slidePrice(price: number) {
        await this.priceSlider.scrollIntoViewIfNeeded();
        const priceBox = await this.priceSlider.boundingBox();
        console.log(priceBox);
        console.log("BEFORE PRICE:", await this.priceSlider.inputValue());
        if (priceBox) {
            await this.page.mouse.move(priceBox.x + priceBox.width * (500 / 1000), priceBox.y + priceBox.height / 2);
            await this.page.mouse.down();
            await this.page.mouse.move(priceBox.x + priceBox.width * (price / 1000), priceBox.y + priceBox.height / 2);
            await this.page.mouse.up();
        }
        console.log("AFTER PRICE:", await this.priceSlider.inputValue());
    }

    async uploadFiles(files: string[]) {
        await this.page.getByRole("heading", { name: "File Upload" }).scrollIntoViewIfNeeded();
        await this.uploadlink.setInputFiles(files);

    }

    async selectProgrammingLanguages(language: string) {
        await this.autoSuggestInputBox.fill(language);
        //yet to come back
    }

    async selectFrameworks(frameworks: string[]) {
        const framewrks = await this.multiframeworkOptions.allInnerTexts();
        const multi_labels = [];
        console.log(framewrks);
        console.log(framewrks.length);
        for (let i = 0; i < framewrks.length; i++) {
            if (frameworks.includes(framewrks[i])) {
                multi_labels.push({ label: framewrks[i] });
            }
        }
        console.log(multi_labels);
        await this.multiframework.selectOption(multi_labels);


    }

    async getUserManagementTablecontents() {
        //get Total Rows
        console.log("TOTAL ROWS:", await this.userManagementTable.locator("#tableBody tr").count());
        //
        console.log("TOTAL COLUMNS:", await this.userManagementTable.locator("thead tr th").count());
        const name_column = this.userManagementTable.getByTestId("sort-name");
        console.log("Count:", await name_column.count());
        console.log("Text:", await name_column.innerText());
        await name_column.dblclick();

    }
}