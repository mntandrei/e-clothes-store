"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/utils/favoritesStore";

type FavoritesButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function FavoritesButton({isOpen,onClick,}: FavoritesButtonProps) {
  const count = useFavorites((state) => state.favorites.length
  );

  return (
    <button
      type="button"
      aria-label="Favorites"
      aria-expanded={isOpen}
      onClick={onClick}
      className="relative cursor-pointer transition-colors duration-200 hover:text-[#a17c58]">
      <Heart size={19} strokeWidth={1.8} />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#a17c58] px-1 text-[9px] font-medium text-white">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
