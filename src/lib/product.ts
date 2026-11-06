import { isProductsResponse } from './validators';
import type { Product } from '../types/product';

export default async function getProducts(): Promise<Product[]> {
    const responses = await Promise.all([
        fetch('https://dummyjson.com/products/category/mens-shirts'), 
        fetch('https://dummyjson.com/products/category/womens-dresses')
    ]);
        if (!responses[0].ok) {
    throw new Error(`Failed to fetch men's products: ${responses[0].status}`);
    };

    if (!responses[1].ok) {
    throw new Error(`Failed to fetch women's products: ${responses[1].status}`);
    };

    const data: unknown[] = await Promise.all([
        responses[0].json(),
        responses[1].json()
    ]);

    if (!isProductsResponse(data[0])) {
        throw new Error("Invalid response format for men's products");
    }

    if (!isProductsResponse(data[1])) {
        throw new Error("Invalid response format for women's products");
    }

    const allProducts = [...data[0].products, ...data[1].products];

    return allProducts;
} 