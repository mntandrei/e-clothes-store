"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, X } from "lucide-react";
import { useFavorites } from "@/utils/favoritesStore";

export default function FavoritesDropdown() {
  const favorites = useFavorites((state) => state.favorites);
  const toggleFavorite = useFavorites((state) => state.toggleFavorite);

  return (
    <div className="absolute right-0 top-full z-50 mt-4 flex h-[380px] w-[340px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-md border border-[#e8decd] bg-[#f8f5ee] shadow-xl">
      <div className="shrink-0 border-b border-[#e8decd] px-5 py-4">
        <h3 className="text-sm font-medium tracking-widest">
          MY FAVORITES
        </h3>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        {favorites.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <Heart size={30} strokeWidth={1.2} />
            <p className="text-sm text-[#6b6054]">
              Your favorites are empty
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 border-b border-[#e8decd] pb-4">
                <Link
                  href={`/shop/${product.id}`}
                  className="relative size-16 shrink-0 bg-[#e8decd]">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    sizes="64px"
                    className="object-contain p-1"/>
                </Link>

                <div className="min-w-0 flex-1">
                  <Link
                    href={`/shop/${product.id}`}
                    className="line-clamp-2 text-xs font-medium hover:text-[#a17c58]">
                    {product.title}
                  </Link>

                  <p className="mt-2 text-xs text-[#6b6054]">
                    €{product.price.toFixed(2)}
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Remove favorite"
                  onClick={() => toggleFavorite(product)}
                  className="h-fit cursor-pointer text-[#6b6054] hover:text-[#a17c58]">
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="shrink-0 border-t border-[#e8decd] px-5 py-4 text-center text-xs text-[#6b6054]">
        {favorites.length} saved items
      </div>
    </div>
  );
}
