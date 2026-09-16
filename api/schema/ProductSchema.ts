import { z } from 'zod';

export const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    category: z.string(),
    description: z.string()
});

export const ProductsSchema = z.array(ProductSchema);