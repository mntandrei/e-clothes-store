import type { Product } from "@/types/product";

type ShopFilterValues = {
  men: boolean;
  women: boolean;
  minPrice: number;
  maxPrice: number;
};

export function filterShopProducts(
  products: Product[],
  { men, women, minPrice, maxPrice }: ShopFilterValues
): Product[] {
  return products.filter((product) => {
    const categoryMatch =
      (men && product.category === "men") ||
      (women && product.category === "women");

    const priceMatch =
      product.price >= minPrice &&
      (maxPrice === 999 || product.price <= maxPrice);

    return categoryMatch && priceMatch;
  });
}
