"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import ProductCard from "@/app/components/products/ProductCard";

type FilterProps = {
  products: Product[];
};

export default function Filter({ products }: FilterProps) {
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);

  const filteredProducts = products.filter((product) => {
    if (men && women) return true;
    if (!men && !women) return false;

    return (
      (men && product.category === "mens-shirts") ||
      (women &&
        (product.category === "womens-dresses" ||
          product.category === "tops"))
    );
  });

  return (
    <>
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
                onChange={(e) => setMen(e.target.checked)}
                className="size-4 cursor-pointer accent-[#8b7358]"/>
              Men
            </label>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-[#6b6054]">
              <input
                type="checkbox"
                checked={women}
                onChange={(e) => setWomen(e.target.checked)}
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
              $0 - $999+
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
                max={999}
                defaultValue={0}
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
                min={0}
                defaultValue={999}
                className="w-full rounded-md border border-[#e8decd] bg-white/65 px-3 py-2.5 text-sm text-[#29251f] outline-none focus:border-[#a17c58]"/>
            </div>
          </div>

          <div className="py-3">
            <div className="relative h-5">
              <div className="absolute inset-x-1 top-2 h-1 rounded-full bg-[#ded3c3]" />
              <div className="absolute inset-x-1 top-2 h-1 rounded-full bg-[#8b7358]" />
              <div className="absolute left-0 top-0 size-5 rounded-full border-[3px] border-[#8b7358] bg-white shadow-sm" />
              <div className="absolute right-0 top-0 size-5 rounded-full border-[3px] border-[#8b7358] bg-white shadow-sm" />
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
            setMen(true);
            setWomen(true);
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
          <p className="py-10 text-center text-sm text-[#6b6054]">
            No products found.
          </p>
        )}
      </div>
    </>
  );
}
