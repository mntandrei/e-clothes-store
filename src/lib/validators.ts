import type { Product, ProductsResponse } from "../types/product";

export function isProduct(value: unknown): value is Product {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return false;
    }

    return (
        "id" in value &&
        typeof value.id === "number" &&

        "title" in value &&
        typeof value.title === "string" &&

        "price" in value &&
        typeof value.price === "number"
    );
}

export function isProductsResponse(value: unknown): value is ProductsResponse {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  };

  return (
    "products" in value &&
    Array.isArray(value.products) &&
    value.products.every(isProduct) &&

    "total" in value &&
    typeof value.total === "number" &&

    "skip" in value &&
    typeof value.skip === "number" &&

    "limit" in value &&
    typeof value.limit === "number"
  );
}