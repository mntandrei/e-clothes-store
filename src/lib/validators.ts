import type { Product, ProductsResponse, FakeStoreProduct } from "../types/product";

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

export function isFakeStoreProduct(value: unknown): value is FakeStoreProduct {

  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }

  return (
    "id" in value &&
    typeof value.id === "number" &&

    "title" in value &&
    typeof value.title === "string" &&

    "price" in value &&
    typeof value.price === "number" &&

    "description" in value &&
    typeof value.description === "string" &&

    "category" in value &&
    typeof value.category === "string" &&

    "image" in value &&
    typeof value.image === "string" &&

    "rating" in value &&
    typeof value.rating === "object" &&
    value.rating !== null &&
    !Array.isArray(value.rating) &&
    "rate" in value.rating &&
    typeof value.rating.rate === "number" &&
    "count" in value.rating &&
    typeof value.rating.count === "number"
  );
}