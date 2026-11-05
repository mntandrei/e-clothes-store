"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {Heart,UserRound,ShoppingBag,Menu,ChevronDown,ChevronUp} from "lucide-react";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const difference = currentY - lastScrollY.current;

      setIsScrolled(currentY > 20);

      if (currentY < 60) {
        setIsVisible(true);
      } else if (Math.abs(difference) > 5) {
        setIsVisible(difference < 0);
      }

      if (Math.abs(difference) > 5 || currentY < 60) {
        lastScrollY.current = currentY;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full text-[#29251f]
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div
        className={`w-full transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-in-out
          ${isScrolled
              ? "bg-[#f8f5ee]/40 backdrop-blur-xl shadow-md"
              : "bg-[#f8f5ee] backdrop-blur-none shadow-none"}`}>
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2.5 sm:px-6 md:flex-nowrap md:gap-x-5 lg:px-8">

          <Link href="/" className="order-1 shrink-0">
            <Image
              src="/aurel-logo.svg"
              alt="Aurel Fashion"
              width={180}
              height={90}
              priority
              className="h-auto w-32 sm:w-36 lg:w-40"/>
          </Link>

          <div className="order-3 w-full min-w-0 md:order-2 md:w-auto md:flex-1">
            <SearchBar />
          </div>

          <div className="order-2 ml-auto flex shrink-0 items-center gap-3 sm:gap-4 md:order-3 md:ml-0">

            <button
              type="button"
              aria-label="Favorites"
              className="cursor-pointer transition-colors duration-200 hover:text-[#a17c58]">
              <Heart size={19} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Account"
              className="cursor-pointer transition-colors duration-200 hover:text-[#a17c58]">
              <UserRound size={19} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Shopping bag"
              className="cursor-pointer transition-colors duration-200 hover:text-[#a17c58]">
              <ShoppingBag size={19} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <nav className="w-full bg-[#e8decd]">
        <div className="mx-auto flex min-h-11 w-full max-w-[1280px] items-center gap-4 px-4 py-2.5 sm:px-6 md:gap-6 lg:px-8">

          <div className="relative shrink-0"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="collections-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer items-center gap-2 text-[11px] font-medium tracking-[0.12em] transition-colors duration-200 hover:text-[#a17c58] sm:text-xs">
              <Menu size={17} strokeWidth={1.8} />
              
              <span>COLLECTIONS</span>
              {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {isOpen && (
                <div
                  id="collections-menu"
                  className="absolute top-full left-0 z-50 w-52 pt-5">
                    
                  <div className="rounded-md border border-[#e8decd] bg-[#f8f5ee] p-2 shadow-lg">
                    <div className="flex flex-col text-xs tracking-wide">

                      <Link
                        href="/shop?category=men"
                        onClick={() => setIsOpen(false)}
                        className="rounded px-3 py-2.5 hover:bg-[#e8decd]">
                        MEN
                      </Link>

                      <Link
                        href="/shop?category=women"
                        onClick={() => setIsOpen(false)}
                        className="rounded px-3 py-2.5 hover:bg-[#e8decd]">
                        WOMEN
                      </Link>

                      <div className="mt-2 flex flex-col border-t border-[#e8decd] pt-2 md:hidden">

                        <Link
                          href="/"
                          onClick={() => setIsOpen(false)}
                          className="rounded px-3 py-2.5 hover:bg-[#e8decd]">
                          HOME
                        </Link>

                        <Link
                          href="/shop"
                          onClick={() => setIsOpen(false)}
                          className="rounded px-3 py-2.5 hover:bg-[#e8decd]">
                          SHOP
                        </Link>

                        <Link
                          href="/about"
                          onClick={() => setIsOpen(false)}
                          className="rounded px-3 py-2.5 hover:bg-[#e8decd]">
                          ABOUT
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <span
              className="h-5 w-px bg-[#c5b59e]"
              aria-hidden="true"/>

            <Link
              href="/"
              className="text-xs font-medium tracking-[0.12em] transition-colors duration-200 hover:text-[#a17c58]">
              HOME
            </Link>

            <Link
              href="/shop"
              className="text-xs font-medium tracking-[0.12em] transition-colors duration-200 hover:text-[#a17c58]">
              SHOP
            </Link>

            <Link
              href="/about"
              className="text-xs font-medium tracking-[0.12em] transition-colors duration-200 hover:text-[#a17c58]">
              ABOUT
            </Link>
          </div>

          <span className="ml-auto hidden whitespace-nowrap text-[10px] font-medium tracking-[0.25em] text-[#6b6054] lg:block">
            CASUAL. MODERN. YOU.
          </span>
        </div>
      </nav>
    </header>
  );
}
