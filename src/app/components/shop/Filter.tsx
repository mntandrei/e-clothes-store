"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Product } from "@/types/product";
import ProductCard from "@/app/components/products/ProductCard";

type FilterProps = {
  products: Product[];
};

export default function Filter({ products }: FilterProps) {
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const updateCategory = (nextMen: boolean, nextWomen: boolean) => {
    setMen(nextMen);
    setWomen(nextWomen);

    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");

    if (nextMen) params.append("category", "men");
    if (nextWomen) params.append("category", "women");
    if (!nextMen && !nextWomen) params.append("category", "none");

    router.replace(`/shop?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const categories = searchParams.getAll("category");
    const validUrlCategories = categories.length > 0 &&
      (categories.every((value) => value === "men" || value === "women") ||
        (categories.length === 1 && categories[0] === "none"));

    if (validUrlCategories) {
      setMen(categories.includes("men"));
      setWomen(categories.includes("women"));
      setLoaded(true);
      return;
    }

    const savedFilters = sessionStorage.getItem("aurel-filters");

    if (savedFilters) {
      try {
        const parsed: unknown = JSON.parse(savedFilters);

        if (
          parsed !== null &&
          typeof parsed === "object" &&
          "men" in parsed &&
          typeof parsed.men === "boolean" &&
          "women" in parsed &&
          typeof parsed.women === "boolean" &&
          "minPrice" in parsed &&
          typeof parsed.minPrice === "number" &&
          Number.isFinite(parsed.minPrice) &&
          "maxPrice" in parsed &&
          typeof parsed.maxPrice === "number" &&
          Number.isFinite(parsed.maxPrice) &&
          parsed.minPrice >= 0 &&
          parsed.maxPrice <= 999 &&
          parsed.minPrice <= parsed.maxPrice
        ) {
          setMen(parsed.men);
          setWomen(parsed.women);
          setMinPrice(parsed.minPrice);
          setMaxPrice(parsed.maxPrice);
        }
      } catch {
        
      }
    }

    setLoaded(true);
  }, [searchParams]);

  useEffect(() => {
    if (!loaded) return;

    sessionStorage.setItem(
      "aurel-filters",
      JSON.stringify({ men, women, minPrice, maxPrice })
    );
  }, [men, women, minPrice, maxPrice, loaded]);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      (men && product.category === "men") ||
      (women && product.category === "women");

    const priceMatch =
      product.price >= minPrice &&
      (maxPrice === 999 || product.price <= maxPrice);

    return categoryMatch && priceMatch;
  });

  return (    <>
      <aside className="w-full rounded-xl border border-[#e8decd] bg-[#f8f5ee] p-5 shadow-sm lg:self-start">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-[0.15em] text-[#29251f]">
            FILTERS
          </h2>
          <span className="text-xs text-[#9a8f83]">AUREL</span>
        </div>
        <div className="mb-6 h-px bg-[#e8decd]" />
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#29251f]">
            Category
          </h3>
          <div className="space-y-3">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#6b6054]">
              <input
                type="checkbox"
                checked={men}
                onChange={(e) => updateCategory(e.target.checked, women)}
                className="size-4 cursor-pointer accent-[#8b7358]"/>
              Men
            </label>
            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#6b6054]">
              <input
                type="checkbox"
                checked={women}
                onChange={(e) => updateCategory(men, e.target.checked)}
                className="size-4 cursor-pointer accent-[#8b7358]"/>
              Women
            </label>
          </div>
        </div>
        <div className="my-6 h-px bg-[#e8decd]" />
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#29251f]">
              Price Range
            </h3>
            <span className="text-xs text-[#9a8f83]">
              ${minPrice} - ${maxPrice === 999 ? "999+" : maxPrice}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label
                htmlFor="min-price"
                className="text-xs text-[#9a8f83]">
                Min Price
              </label>
              <input
                id="min-price"
                type="number"
                min={0}
                max={maxPrice}
                value={minPrice}
                onChange={(e) => setMinPrice(Math.max(0,Math.min(maxPrice, Number(e.target.value))))}
                className="w-full rounded-md border border-[#e8decd] bg-white/65 px-3 py-2.5 text-sm text-[#29251f] outline-none focus:border-[#a17c58]"/>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="max-price"
                className="text-xs text-[#9a8f83]">
                Max Price
              </label>
              <input
                id="max-price"
                type="number"
                min={minPrice}
                max={999}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Math.min(999,Math.max(minPrice, Number(e.target.value))))}
                className="w-full rounded-md border border-[#e8decd] bg-white/65 px-3 py-2.5 text-sm text-[#29251f] outline-none focus:border-[#a17c58]"/>
            </div>
          </div>
          <div className="py-3">
            <div className="relative h-6">
              <div className="absolute inset-x-0 top-2.5 h-1 rounded-full bg-[#ded3c3]" />
              <div
                className="absolute top-2.5 h-1 rounded-full bg-[#8b7358]"
                style={{
                  left: `${(minPrice / 999) * 100}%`,
                  right: `${100 - (maxPrice / 999) * 100}%`,
                  }}/>
              <input
                type="range"
                min={0}
                max={999}
                value={minPrice}
                aria-label="Minimum price"
                onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice))}
                className={`pointer-events-none absolute inset-0 h-6 w-full appearance-none bg-transparent
                  ${minPrice >= maxPrice - 5 ? "z-30" : "z-20"}
                  [&::-webkit-slider-runnable-track]:bg-transparent
                  [&::-webkit-slider-thumb]:pointer-events-auto
                  [&::-webkit-slider-thumb]:size-5
                  [&::-webkit-slider-thumb]:cursor-grab
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:border-[3px]
                  [&::-webkit-slider-thumb]:border-[#8b7358]
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:shadow-sm
                  [&::-moz-range-track]:bg-transparent
                  [&::-moz-range-thumb]:pointer-events-auto
                  [&::-moz-range-thumb]:h-4
                  [&::-moz-range-thumb]:w-4
                  [&::-moz-range-thumb]:cursor-grab
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:border-[3px]
                  [&::-moz-range-thumb]:border-[#8b7358]
                  [&::-moz-range-thumb]:bg-white`}/>
              <input
                type="range"
                min={0}
                max={999}
                value={maxPrice}
                aria-label="Maximum price"
                onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice))}
                className="pointer-events-none absolute inset-0 z-20 h-6 w-full appearance-none bg-transparent
                  [&::-webkit-slider-runnable-track]:bg-transparent
                  [&::-webkit-slider-thumb]:pointer-events-auto
                  [&::-webkit-slider-thumb]:size-5
                  [&::-webkit-slider-thumb]:cursor-grab
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:border-[3px]
                  [&::-webkit-slider-thumb]:border-[#8b7358]
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:shadow-sm
                  [&::-moz-range-track]:bg-transparent
                  [&::-moz-range-thumb]:pointer-events-auto
                  [&::-moz-range-thumb]:h-4
                  [&::-moz-range-thumb]:w-4
                  [&::-moz-range-thumb]:cursor-grab
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:border-[3px]
                  [&::-moz-range-thumb]:border-[#8b7358]
                  [&::-moz-range-thumb]:bg-white"/>
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-[#9a8f83]">
              <span>$0</span>
              <span>$999+</span>
            </div>
          </div>
        </div>
        <div className="my-6 h-px bg-[#e8decd]" />
        <button
          type="button"
          onClick={() => {
            updateCategory(true, true);
            setMinPrice(0);
            setMaxPrice(999);
          }}
          className="w-full cursor-pointer rounded-md border border-[#c5b59e] px-4 py-3 text-xs font-medium tracking-[0.12em] text-[#29251f] transition-colors duration-200 hover:bg-[#e8decd]">
          RESET FILTERS
        </button>
      </aside>
      <div className="min-w-0">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-medium text-[#463c32]">
            All Products
          </h2>
          <span className="text-xs text-[#6b6054]">
            {filteredProducts.length} products
          </span>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                eager={index < 4}/>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[#e8decd] bg-[#f8f5ee] px-6 py-16 text-center">
            <h3 className="text-lg font-medium text-[#463c32]">
              No products found
            </h3>
            <p className="mt-2 text-sm text-[#6b6054]">
              Try changing your filters.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
