import { isFakeStoreProduct, isProductsResponse } from './validators';
import type { FakeStoreProduct, Product } from '../types/product';
import { cacheLife } from "next/cache";

export async function getFakeProducts() {
    "use cache";
    cacheLife("hours");

    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
    }
    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
        throw new Error("Invalid response format for products");
    }

    if (!data.every(isFakeStoreProduct)) {
        throw new Error("Invalid response format for products");
    }

    const filteredProducts: FakeStoreProduct[] = data.filter((product) =>
        product.category === "men's clothing" || product.category === "women's clothing");

    const checkedProducts: FakeStoreProduct[] = filteredProducts.filter((product) => {
        return !product.title.toLocaleLowerCase().includes("backpack");
    });

    const normalizedProducts: Product[] = checkedProducts.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category,
        price: product.price,
        thumbnail: product.image,
        rating: product.rating.rate,
    }));

    return normalizedProducts;
}

export async function getProducts(): Promise<Product[]> {
    
    "use cache";
    cacheLife("hours");

    const responses = await Promise.all([
        fetch("https://dummyjson.com/products/category/mens-shirts"), 
        fetch("https://dummyjson.com/products/category/womens-dresses")
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
    };

    if (!isProductsResponse(data[1])) {
        throw new Error("Invalid response format for women's products");
    };

    const allProducts = [...data[0].products, ...data[1].products];

    return allProducts;
}

export async function getAllProducts(): Promise<Product[]> {
    const [fakeProducts, products] = await Promise.all([
        getFakeProducts(),
        getProducts()
    ]);

    const allProducts: Product[] = [
        ...fakeProducts, ...products
    ];

    return allProducts;
}