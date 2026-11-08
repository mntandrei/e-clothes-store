import { isFakeStoreProduct, isProductsResponse } from './validators';
import type { FakeStoreProduct, Product } from '../types/product';
import { cacheLife } from "next/cache";


export async function getFakeProducts(): Promise<Product[]> {
  "use cache";
  cacheLife("hours");

  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products: ${response.status}`
    );
  };

  const data: unknown = await response.json();

  if (!Array.isArray(data) || !data.every(isFakeStoreProduct)) {
    throw new Error("Invalid response format for products");
  };

  const filteredProducts = data.filter((product) => {const isClothing = product.category === "men's clothing" || product.category === "women's clothing";
    const isNotBackpack = !product.title.toLowerCase().includes("backpack");

    return isClothing && isNotBackpack;
  });

  const normalizedProducts: Product[] = filteredProducts.map(
    (product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      thumbnail: product.image,
      rating: product.rating.rate,
    })
  );

  return normalizedProducts;
};

export async function getProducts(): Promise<Product[]> {
    "use cache";
    cacheLife("hours");

    const responses = await Promise.all([
        fetch("https://dummyjson.com/products/category/mens-shirts"), 
        fetch("https://dummyjson.com/products/category/womens-dresses")
    ]);

    const labels = ["men's", "women's"];

    const productGroups = await Promise.all(
    responses.map(async (response, index) => {
        if (!response.ok) {
        throw new Error(
            `Failed to fetch ${labels[index]} products: ${response.status}`);
        }

        const data: unknown = await response.json();

        if (!isProductsResponse(data)) {
        throw new Error(
            `Invalid response format for ${labels[index]} products`);
        }

        return data.products;
    })
);

    const allProducts: Product[] = productGroups.flat();

    return allProducts;
};

export async function getAllProducts(): Promise<Product[]> {
    const [fakeProducts, products] = await Promise.all([
        getFakeProducts(),
        getProducts()
    ]);

    const allProducts: Product[] = [
        ...fakeProducts, ...products];

    const categoryMap: Record<string, "men" | "women"> = {
        "men's clothing": "men",
        "mens-shirts": "men",
        "women's clothing": "women",
        "womens-dresses": "women",
    };
    
    const normalizedProducts: Product[] = allProducts.map((product) => {
        return {
            ...product,
            category: categoryMap[product.category]
        };
    });

    return normalizedProducts;
}