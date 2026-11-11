"use client";

import { Heart } from "lucide-react";
import { useCart } from "@/utils/cartStore";
import { useFavorites } from "@/utils/favoritesStore";

type ProductInfo = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function ProductActions({product}: {product: ProductInfo}) {
  const addToCart = useCart((state) => state.addToCart);
  const toggleFavorite = useFavorites((state) => state.toggleFavorite);

  const isFavorite = useFavorites((state) => state.favorites.some((item) => item.id === product.id));

  return (
    <div className="mt-8 flex w-full max-w-[440px] gap-3">
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="flex h-12 flex-1 cursor-pointer items-center justify-center bg-[#29251f] px-5 text-xs font-medium tracking-[0.12em] text-white hover:bg-[#a17c58]">
        ADD TO CART
      </button>

      <button
        type="button"
        onClick={() => toggleFavorite(product)}
        aria-label="Toggle favorite"
        aria-pressed={isFavorite}
        className="flex size-12 cursor-pointer items-center justify-center border border-[#d5c5ad] hover:text-[#a17c58]">
        <Heart
          size={21}
          strokeWidth={1.7}
          fill={isFavorite ? "currentColor" : "none"}/>
      </button>
    </div>
  );
}
