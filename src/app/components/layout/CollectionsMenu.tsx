"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu,ChevronUp, ChevronDown, ChevronRight, ChevronLeft} from "lucide-react";

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
  const [activeCategory, setActiveCategory] =
    useState<Category | null>(null);

  const featuredProducts = activeCategory? products.filter((product) => product.category === activeCategory).slice(0, 5) : [];

  const closeMenu = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };

  return (
    <div
      className="relative shrink-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={closeMenu}
      onKeyDown={(event) => {if (event.key === "Escape") closeMenu();
      }}>
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
          <div className="relative w-40 rounded-md border border-[#e8decd] bg-[#f8f5ee] p-2 shadow-lg">

            <div className="flex flex-col gap-1">
              {(["men", "women"] as const).map((category) => {
                const isActive = activeCategory === category;

                return (
                  <div
                    key={category}
                    onMouseEnter={() =>  setActiveCategory(category)}
                    onFocus={() => setActiveCategory(category)}
                    className={`flex h-10 w-full items-center rounded-sm transition-colors duration-200 ${isActive ? "bg-[#e8decd]" : "hover:bg-[#e8decd]"}`}>
                    <Link
                      href={`/shop?category=${category}`}
                      onClick={closeMenu}
                      className="flex h-full min-w-0 flex-1 items-center px-3 text-xs font-medium tracking-wider uppercase">
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
                      className="flex h-full w-9 shrink-0 cursor-pointer items-center justify-center text-[#6b6054] transition-colors hover:text-[#a17c58]">
                      {isActive ? (
                        <ChevronLeft
                          size={15}
                          strokeWidth={1.7}/>
                      ) : (
                        <ChevronRight
                          size={15}
                          strokeWidth={1.7}
                        />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

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

            {activeCategory && (
              <div className="absolute top-full left-0 z-50 flex h-[360px] w-[320px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-md border border-[#e8decd] bg-[#f8f5ee] shadow-xl sm:top-0 sm:left-full">

                <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#e8decd] px-5">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.18em] text-[#a17c58]">
                      AUREL / COLLECTION
                    </p>

                    <h3 className="mt-1 text-xs font-semibold tracking-widest uppercase">
                      {activeCategory}
                    </h3>
                  </div>

                  <span className="text-[10px] text-[#6b6054]">
                    {String(featuredProducts.length).padStart(2, "0")} ITEMS
                  </span>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3">
                  {featuredProducts.length === 0 ? (
                    <div className="flex h-full items-center justify-center">
                      <p className="text-xs text-[#6b6054]">
                        No products available.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {featuredProducts.map((product) => (
                        <Link
                          key={`${product.category}-${product.id}`}
                          href={`/shop/${product.id}`}
                          onClick={closeMenu}
                          className="group flex h-[76px] shrink-0 items-center gap-3 rounded-sm p-2 transition-colors duration-200 hover:bg-[#e8decd]">
                          <div className="relative size-[60px] shrink-0 overflow-hidden rounded-sm bg-white">
                            <Image
                              src={product.thumbnail}
                              alt={product.title}
                              fill
                              sizes="60px"
                              className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"/>
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
                            size={15}
                            strokeWidth={1.6}
                            className="shrink-0 text-[#a17c58]"
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="shrink-0 border-t border-[#e8decd] bg-[#f8f5ee] p-4">
                  <Link
                    href={`/shop?category=${activeCategory}`}
                    onClick={closeMenu}
                    className="flex items-center justify-between text-[11px] font-medium tracking-[0.12em] text-[#29251f] transition-colors hover:text-[#a17c58]">
                    <span>
                      VIEW ALL {activeCategory.toUpperCase()}
                    </span>

                    <ChevronRight
                      size={16}
                      strokeWidth={1.7}/>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
