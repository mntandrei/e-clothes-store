import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type FavoriteState = {
  favorites: FavoriteProduct[];
  toggleFavorite: (product: FavoriteProduct) => void;
};

export const useFavorites = create<FavoriteState>()(persist(
    (set) => ({
      favorites: [],

      toggleFavorite: (product) =>
        set((state) => {
          const exists = state.favorites.some(
            (item) => item.id === product.id
          );

          return {
            favorites: exists
              ? state.favorites.filter((item) => item.id !== product.id)
              : [...state.favorites, product],
          };
        }),
    }),
    {
      name: "aurel-favorites",
    }
  )
);
