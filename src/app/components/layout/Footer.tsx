import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const year = 2026;

  const linkStyle =
    "text-sm text-[#6b6054] transition-colors duration-200 hover:text-[#a17c58]";

  return (
    <footer className="w-full border-t border-[#e8decd] bg-[#f8f5ee] text-[#29251f]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-[#e8decd] py-12 sm:py-16 lg:grid-cols-2 lg:items-end lg:gap-12 lg:py-20">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#a17c58]">
              Aurel — Contemporary Fashion
            </p>

            <h2 className="[font-family:var(--font-cormorant)] text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Style is a way to say
              <br />
              <span className="italic text-[#a17c58]">
                who you are.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6b6054] lg:justify-self-end">
            Timeless essentials. Modern individuality.
            Everyday confidence. Discover contemporary
            fashion designed around your personal style.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/aurel-logo.svg"
                alt="Aurel Fashion"
                width={180}
                height={90}
                loading="eager"
                className="h-auto w-36"/>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#6b6054]">
              A modern approach to everyday fashion.
              Discover refined pieces, effortless style,
              and a wardrobe that feels like you.
            </p>

            <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.25em] text-[#a17c58]">
              Casual. Modern. You.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em]">
              Shop
            </h3>

            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/shop" className={linkStyle}>
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href="/shop?category=men"
                  className={linkStyle}>
                  Men
                </Link>
              </li>

              <li>
                <Link
                  href="/shop?category=women"
                  className={linkStyle}>
                  Women
                </Link>
              </li>

            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em]">
              Explore
            </h3>

            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className={linkStyle}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className={linkStyle}>
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/about" className={linkStyle}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em]">
              Developer Contact
            </h3>

            <p className="mb-6 text-sm leading-6 text-[#6b6054]">
              Explore the project or connect with
              the developer behind AUREL.
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/mntandrei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Andrei on GitHub"
                className="group flex items-center gap-3 rounded-lg border border-[#e8decd] p-2.5 transition-all duration-200 hover:border-[#c5b59e] hover:bg-[#eee5d7]">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#e8decd] transition-colors group-hover:bg-[#d5c5ad]">
                  <FaGithub size={19} />
                </span>

                <span className="text-sm font-medium">
                  GitHub
                </span>

                <ArrowUpRight
                  size={17}
                  className="ml-auto text-[#9a8f83] transition-colors group-hover:text-[#29251f]"/>
              </a>

              <a
                href="https://www.linkedin.com/in/muntianu-andrei-7b7290437/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Andrei on LinkedIn"
                className="group flex items-center gap-3 rounded-lg border border-[#e8decd] p-2.5 transition-all duration-200 hover:border-[#c5b59e] hover:bg-[#eee5d7]">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#e8decd] transition-colors group-hover:bg-[#d5c5ad]">
                  <FaLinkedinIn size={19} />
                </span>

                <span className="text-sm font-medium">
                  LinkedIn
                </span>

                <ArrowUpRight
                  size={17}
                  className="ml-auto text-[#9a8f83] transition-colors group-hover:text-[#29251f]"/>
              </a>
              
            </div>
          </div>
        </div>
      </div>


      <div className="w-full border-t border-[#d5c5ad] bg-[#e8decd]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-4 py-6 text-[11px] tracking-[0.08em] text-[#6b6054] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">

          <p>
            © {year} AUREL Fashion. All rights reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <a
              href="https://github.com/mntandrei"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#29251f] transition-colors hover:text-[#a17c58]">
              Andrei
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
