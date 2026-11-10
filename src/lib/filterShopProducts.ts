import type { Product } from "@/types/product";

type ShopFilterValues = {
  men: boolean;
  women: boolean;
  minPrice: number;
  maxPrice: number;
  searchQuery: string;
};

export function filterShopProducts(products: Product[], { men, women, minPrice, maxPrice, searchQuery }: ShopFilterValues): Product[] {
  return products.filter((product) => {
    const categoryMatch = (men && product.category === "men") || (women && product.category === "women");
    const priceMatch = product.price >= minPrice && (maxPrice === 999 || product.price <= maxPrice);

    const searchMatch = searchQuery === "men" || searchQuery === "women" ? product.category === searchQuery : product.title.toLowerCase().includes(searchQuery);
    return searchMatch && categoryMatch && priceMatch;
  });
}
