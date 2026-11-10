"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const STORAGE_KEY = "aurel-filters";

type SavedFilters = {
  men: boolean;
  women: boolean;
  minPrice: number;
  maxPrice: number;
};

function isSavedFilters(value: unknown): value is SavedFilters {
  if (!value || typeof value !== "object") return false;

  const filters = value as Partial<SavedFilters>;
  return (
    typeof filters.men === "boolean" &&
    typeof filters.women === "boolean" &&
    typeof filters.minPrice === "number" &&
    Number.isFinite(filters.minPrice) &&
    typeof filters.maxPrice === "number" &&
    Number.isFinite(filters.maxPrice) &&
    filters.minPrice >= 0 &&
    filters.maxPrice <= 999 &&
    filters.minPrice <= filters.maxPrice
  );
}

export function useShopFilters() {
  const [men, setMen] = useState(true);
  const [women, setWomen] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);
  const [loaded, setLoaded] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q")?.trim().toLowerCase() ?? "";

  const updateCategory = (nextMen: boolean, nextWomen: boolean) => {
    setMen(nextMen);
    setWomen(nextWomen);

    const params = new URLSearchParams(searchParams.toString());
    const previous = params
      .getAll("category")
      .filter((value) => value === "men" || value === "women");

    const selected = previous.filter((value) =>
      value === "men" ? nextMen : nextWomen
    );

    if (nextMen && !selected.includes("men")) selected.push("men");
    if (nextWomen && !selected.includes("women")) selected.push("women");

    params.delete("category");
    if (selected.length === 0) {
      params.append("category", "none");
    } else {
      selected.forEach((value) => params.append("category", value));
    }

    router.replace(`/shop?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const categories = searchParams.getAll("category");
    const validUrlCategories =
      categories.length > 0 &&
      (categories.every((value) => value === "men" || value === "women") ||
        (categories.length === 1 && categories[0] === "none"));

    if (validUrlCategories) {
      setMen(categories.includes("men"));
      setWomen(categories.includes("women"));
      setLoaded(true);
      return;
    }

    const savedFilters = sessionStorage.getItem(STORAGE_KEY);
    if (savedFilters) {
      try {
        const parsed: unknown = JSON.parse(savedFilters);
        if (isSavedFilters(parsed)) {
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
      STORAGE_KEY,
      JSON.stringify({ men, women, minPrice, maxPrice })
    );
  }, [men, women, minPrice, maxPrice, loaded]);

  const resetFilters = () => {
    updateCategory(true, true);
    setMinPrice(0);
    setMaxPrice(999);
  };

  return {
    men,
    women,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    updateCategory,
    resetFilters,
    searchQuery,
  };
}
