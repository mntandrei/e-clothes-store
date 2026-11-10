import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, MoveRight } from "lucide-react";
import { getAllProducts } from "@/lib/product";
import ProductCard from "@/app/components/productscards/ProductCard";

export default async function Home() {
  const products = await getAllProducts();

  const menProducts = products.filter((product) =>
    product.category.toLowerCase().startsWith("men")
  );

  const womenProducts = products.filter((product) =>
    product.category.toLowerCase().startsWith("women")
  );

  const heroMen = menProducts[0];
  const heroWomen = womenProducts[0];

  const featuredProducts = [
    ...womenProducts.slice(0, 2),
    ...menProducts.slice(0, 2),
  ];

  return (
    <section className="min-h-screen bg-[#f6f2e9] text-[#29251f]">

      <div className="overflow-hidden bg-linear-to-br from-[#f8f5ee] via-[#f0e7d9] to-[#e4d5c1]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">

          <div className="flex flex-col items-start">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#a17c58]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8b7358]">
                AUREL / THE EVERYDAY EDIT
              </span>
            </div>

            <h1 className="max-w-[570px] font-serif text-[clamp(3.8rem,6vw,6.5rem)] leading-[0.95] font-normal tracking-[-0.04em] text-[#393027]">
              Style is
              <br />
              <span className="italic text-[#967b61]">personal.</span>
              <br />
              Make it yours.
            </h1>

            <p className="mt-7 max-w-[390px] text-sm leading-7 text-[#6b6054] sm:text-base">
              Contemporary essentials for everyday living.
              Explore timeless pieces designed around your
              individuality.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 rounded-sm bg-[#393027] px-7 py-4 text-xs font-medium tracking-[0.12em] text-[#f8f5ee] transition-colors duration-300 hover:bg-[#8b7358]">
                EXPLORE COLLECTION
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b border-[#8b7358] pb-1 text-xs font-medium tracking-[0.1em] text-[#6b6054] transition-colors hover:text-[#29251f]">
                OUR STORY
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-5 border-t border-[#cbbba6] pt-5">
              <span className="font-serif text-3xl text-[#393027]">
                {products.length}
              </span>

              <span className="text-[10px] uppercase leading-5 tracking-[0.16em] text-[#8b7358]">
                Curated
                <br />
                Pieces
              </span>

              <span className="ml-4 h-9 w-px bg-[#cbbba6]" />

              <span className="text-[10px] uppercase leading-5 tracking-[0.16em] text-[#8b7358]">
                Men & Women
                <br />
                Collection
              </span>
            </div>
          </div>

          <div className="relative mx-auto h-[430px] w-full max-w-[540px] sm:h-[530px]">
            <div className="absolute top-5 right-0 h-[90%] w-[78%] rounded-t-full bg-[#dcc9b1]/60" />

            {heroWomen && (
              <div className="absolute top-0 right-0 h-[85%] w-[72%] overflow-hidden rounded-t-[170px] border border-white/50 bg-[#faf8f4] shadow-[0_20px_60px_rgba(68,48,30,0.10)]">
                <Image
                  src={heroWomen.thumbnail}
                  alt={heroWomen.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 70vw, 400px"
                  className="object-contain p-6"/>
              </div>
            )}

            {heroMen && (
              <div className="absolute bottom-0 left-0 h-[51%] w-[45%] overflow-hidden rounded-sm border-[6px] border-[#f6f2e9] bg-white shadow-[0_15px_35px_rgba(68,48,30,0.12)]">
                <Image
                  src={heroMen.thumbnail}
                  alt={heroMen.title}
                  fill
                  sizes="(max-width: 1024px) 40vw, 240px"
                  className="object-contain p-3"/>
              </div>
            )}

            <div className="absolute right-0 bottom-3 bg-[#f8f5ee]/95 px-5 py-3 shadow-sm">
              <span className="text-[10px] tracking-[0.2em] text-[#6b6054]">
                CASUAL. MODERN. YOU.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[#d5c5ad] bg-[#e8decd]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6b6054] md:justify-between">
          <span>Everyday Essentials</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#a17c58] md:block" />
          <span>Modern Silhouettes</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#a17c58] md:block" />
          <span>Find Your Style</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-24">

        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] font-medium tracking-[0.24em] text-[#8b7358]">
              01 / EXPLORE AUREL
            </p>

            <h2 className="font-serif text-4xl font-normal text-[#393027] sm:text-5xl">
              Shop by collection.
            </h2>
          </div>

          <p className="max-w-[260px] text-sm leading-6 text-[#85796d]">
            Discover the pieces that reflect your everyday style.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <Link
            href="/shop?category=men"
            className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-[#e5d8c7] p-8 sm:min-h-[440px]">
            {heroMen && (
              <div className="absolute inset-0">
                <Image
                  src={heroMen.thumbnail}
                  alt={heroMen.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-10 opacity-90 transition-transform duration-500 group-hover:scale-105"/>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#393027]/75 to-transparent" />

            <div className="relative z-10 flex items-end justify-between text-white">
              <div>
                <p className="mb-2 text-[10px] tracking-[0.2em]">
                  THE COLLECTION
                </p>
                <h3 className="font-serif text-4xl">
                  Men
                </h3>
              </div>

              <ArrowUpRight
                size={24}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </div>
          </Link>

          <Link
            href="/shop?category=women"
            className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-[#d9c9b8] p-8 sm:min-h-[440px]">
            {heroWomen && (
              <div className="absolute inset-0">
                <Image
                  src={heroWomen.thumbnail}
                  alt={heroWomen.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-10 opacity-90 transition-transform duration-500 group-hover:scale-105"/>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#393027]/75 to-transparent" />

            <div className="relative z-10 flex items-end justify-between text-white">
              <div>
                <p className="mb-2 text-[10px] tracking-[0.2em]">
                  THE COLLECTION
                </p>
                <h3 className="font-serif text-4xl">
                  Women
                </h3>
              </div>

              <ArrowUpRight
                size={24}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-[#eee6da] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">

          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[10px] font-medium tracking-[0.24em] text-[#8b7358]">
                02 / THE AUREL EDIT
              </p>

              <h2 className="font-serif text-4xl font-normal text-[#393027] sm:text-5xl">
                Selected for you.
              </h2>

              <p className="mt-3 text-sm text-[#85796d]">
                A few favorites from our collection.
              </p>
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border-b border-[#8b7358] pb-2 text-xs font-medium tracking-[0.12em] text-[#393027] transition-colors hover:text-[#a17c58]">
              VIEW ALL PRODUCTS
              <MoveRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={`${product.category}-${product.id}`}
                product={product}/>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 py-24 text-center lg:px-8 lg:py-32">

        <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-[#a17c58]">
          MORE THAN WHAT YOU WEAR
        </p>

        <h2 className="mx-auto max-w-[850px] font-serif text-4xl leading-[1.15] font-normal text-[#393027] sm:text-5xl lg:text-6xl">
          Confidence begins with
          <span className="italic text-[#967b61]"> being yourself.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-[480px] text-sm leading-7 text-[#6b6054]">
          AUREL is about effortless style, modern essentials,
          and finding pieces that feel right for you.
        </p>

        <Link
          href="/about"
          className="mt-9 inline-flex items-center gap-2 border-b border-[#8b7358] pb-2 text-xs font-medium tracking-[0.14em] text-[#393027]">
          DISCOVER AUREL
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
