import { test, expect } from '../../fixtures/api.fixtures';
import { ProductApiClient } from '../../api/client/ProductApiClient'
import { ProductSchema, ProductsSchema } from '../../api/schema/ProductSchema';
import { ProductResponse } from '../../api/models/Product';

test.describe("API Testing", () => {
    test("Product API", { tag: ["@api"] }, async ({ request }) => {
        const productApiClient = new ProductApiClient(request);
        const response = await productApiClient.getAllProducts();
        const responseBody = await response.json()
        console.log(responseBody);
        ProductsSchema.parse(responseBody);


    })

    test("Product Delete API", { tag: ["@delete"] }, async ({ request }) => {
        const productApiClient = new ProductApiClient(request);
        const response = await productApiClient.deleteProduct(21);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        ProductSchema.parse(responseBody);
        expect(response.status()).toBe(200);
        console.log(response.status());

    });

    loginData.forEach(element => {
        test("Testing Nested objects", { tag: ["@smoke"] }, async ({ productApiClient }) => {
            // const productApiClient = new ProductApiClient(request);
            const response = await productApiClient.getAllProducts();
            const responseBody: ProductResponse[] = await response.json();
            const products = ProductsSchema.parse(responseBody);
            const electronicsProducts = responseBody.filter(res => res.category === "electronics");
            console.log(electronicsProducts);

        });
    });


})