import { test as base, expect } from '@playwright/test'
import { ProductApiClient } from "../api/client/ProductApiClient"


type ApiFixtures = {
    productApiClient: ProductApiClient;
}

export const test = base.extend<ApiFixtures>({
    productApiClient: async ({ request }, use) => {
        const productApiClient = new ProductApiClient(request);
        await use(productApiClient);
    }
})

export { expect } from '@playwright/test'