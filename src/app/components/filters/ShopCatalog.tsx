"use client";

import type { Product } from "@/types/product";
import { filterShopProducts } from "@/lib/filterShopProducts";
import { useShopFilters } from "./useShopFilters";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";

type ShopCatalogProps = {
  products: Product[];
};

export default function ShopCatalog({ products }: ShopCatalogProps) {
  const {
    men,
    women,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    updateCategory,
    resetFilters,
    searchQuery,
  } = useShopFilters();

  const filteredProducts = filterShopProducts(products, {
    men,
    women,
    minPrice,
    maxPrice,
  });

  return (
    <>
      <FilterSidebar
        men={men}
        women={women}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onCategoryChange={updateCategory}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
        onReset={resetFilters}
      />
      <ProductGrid products={filteredProducts} />
    </>
  );
}
