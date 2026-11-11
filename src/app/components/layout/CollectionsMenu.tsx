"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu,ChevronUp,ChevronDown,ChevronRight,ChevronLeft} from "lucide-react";

export type CollectionProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
};

type CollectionsMenuProps = {
  products: CollectionProduct[];
};

type Category = "men" | "women";

export default function CollectionsMenu({products}: CollectionsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const featuredProducts = activeCategory ? products.filter((product) => product.category === activeCategory).slice(0, 3) : [];

  const closeMenu = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  return (
    <div
      className="relative shrink-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={closeMenu}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="collections-menu"
        onClick={() => {
          if (isOpen) {
            closeMenu();
          } else {
            setIsOpen(true);
          }
        }}
        className="flex cursor-pointer items-center gap-2 text-[11px] font-medium tracking-[0.12em] transition-colors duration-200 hover:text-[#a17c58] sm:text-xs">
        <Menu size={17} strokeWidth={1.8} />
        <span>COLLECTIONS</span>
        {isOpen ? (
          <ChevronUp size={14} />
        ) : (
          <ChevronDown size={14} />
        )}
      </button>

      {isOpen && (
        <div
          id="collections-menu"
          className="absolute top-full left-0 z-50 pt-4">
          <div className="flex w-max max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-md border border-[#e8decd] bg-[#f8f5ee] shadow-xl sm:flex-row">

            <div className="w-40 shrink-0 p-2">
              {(["men", "women"] as const).map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <div
                    key={category}
                    onMouseEnter={() =>
                      setActiveCategory(category)
                    }
                    onFocus={() =>
                      setActiveCategory(category)
                    }
                    className={`flex items-center rounded-sm transition-colors duration-200 ${isActive? "bg-[#e8decd]" : "hover:bg-[#e8decd]"}`}>
                    <Link
                      href={`/shop?category=${category}`}
                      onClick={closeMenu}
                      className="flex-1 px-3 py-3 text-xs font-medium tracking-wider uppercase">
                      {category}
                    </Link>

                    <button
                      type="button"
                      aria-label={`Show ${category} products`}
                      aria-expanded={isActive}
                      onClick={() =>
                        setActiveCategory(
                          isActive ? null : category
                        )
                      }
                      className="flex size-9 cursor-pointer items-center justify-center text-[#6b6054] transition-colors hover:text-[#a17c58]">
                      {isActive ? (
                        <ChevronLeft size={15} />
                      ) : (
                        <ChevronRight size={15} />
                      )}
                    </button>
                  </div>
                );
              })}

              <div className="mt-2 flex flex-col border-t border-[#e8decd] pt-2 md:hidden">
                {[
                  { title: "HOME", href: "/" },
                  { title: "SHOP", href: "/shop" },
                  { title: "ABOUT", href: "/about" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded px-3 py-2.5 text-xs tracking-wide transition-colors hover:bg-[#e8decd]">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {activeCategory && (
              <div className="w-[300px] max-w-full border-t border-[#e8decd] p-3 sm:border-t-0 sm:border-l">
                <div className="mb-3 border-b border-[#e8decd] pb-3">
                  <p className="text-[10px] font-medium tracking-[0.15em] text-[#a17c58]">
                    FEATURED / {activeCategory.toUpperCase()}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  {featuredProducts.length === 0 ? (
                    <p className="py-5 text-xs text-[#6b6054]">
                      No products available.
                    </p>
                  ) : (
                    featuredProducts.map((product) => (
                      <Link
                        key={`${product.category}-${product.id}`}
                        href={`/shop/${product.id}`}
                        onClick={closeMenu}
                        className="group flex items-center gap-3 rounded-sm p-2 transition-colors duration-200 hover:bg-[#e8decd]">
                        <div className="relative size-14 shrink-0 overflow-hidden rounded-sm bg-white">
                          <Image
                            src={product.thumbnail}
                            alt={product.title}
                            fill
                            sizes="56px"
                            className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"/>
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="line-clamp-2 text-xs font-medium leading-5 text-[#29251f]">
                            {product.title}
                          </p>

                          <p className="mt-1 text-[11px] text-[#6b6054]">
                            €{product.price.toFixed(2)}
                          </p>
                        </div>

                        <ChevronRight
                          size={14}
                          className="shrink-0 text-[#a17c58]"/>
                      </Link>
                    ))
                  )}
                </div>

                <Link
                  href={`/shop?category=${activeCategory}`}
                  onClick={closeMenu}
                  className="mt-3 block border-t border-[#e8decd] pt-3 text-[10px] font-medium tracking-[0.12em] text-[#6b6054] transition-colors hover:text-[#a17c58]">
                  VIEW ALL {activeCategory.toUpperCase()}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
