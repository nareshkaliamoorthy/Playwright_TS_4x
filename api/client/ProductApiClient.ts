import { APIRequestContext } from "@playwright/test";
import { BaseApiClient } from "./BaseApiClient";
import { ProductRequest, ProductPatchRequest } from "../models/Product";


export class ProductApiClient extends BaseApiClient {

    constructor(protected request: APIRequestContext) {
        super(request);
    }

    async getProduct(productId: number) {
        return await this.get(`/products/${productId}`, { headers: { Accept: "application/json" } });
    }
    async getAllProducts() {
        return await this.get(`/products`, { headers: { Accept: "application/json" } });
    }

    async createProduct(data: ProductRequest) {
        return await this.post("/products", { headers: { Accept: "application/json" } }, data)
    }

    async updateProduct(data: ProductRequest) {
        return await this.put("/products", { headers: { Accept: "application/json" } }, data)
    }
    async patchProduct(data: ProductPatchRequest) {
        return await this.patch("/products", { headers: { Accept: "application/json" } }, data)
    }
    async deleteProduct(productId: number) {
        return await this.delete(`/products/${productId}`, { headers: { Accept: "application/json" } });
    }

}