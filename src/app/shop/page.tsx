import { getAllProducts } from "@/lib/product";
import ProductCard from "@/app/components/products/ProductCard";
import Filter from "@/app/components/shop/Filter";

export default async function Shop() {
  const products = await getAllProducts();

  return (
    <section className="flex min-h-[calc(100dvh-120px)] flex-col items-center justify-start bg-linear-to-br from-[#f6f2e9] via-[#e8decd] to-[#d5c5ad] px-4 py-12 sm:px-6 lg:px-8">

      <div className="w-full max-w-[1280px]">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[#8b7358]">
          AUREL / THE COLLECTION
        </p>

        <h1 className="font-serif text-4xl font-normal tracking-tight text-[#463c32] sm:text-5xl">
          Discover your style.
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-[#6b6054]">
          Timeless essentials for your everyday wardrobe.
        </p>

        <div className="mt-7 flex items-center justify-between border-b border-[#c5b59e] pb-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b6054]">
            Men & Women
          </span>

          <span className="text-xs text-[#6b6054]">
            {products.length} Products
          </span>
        </div>
      </div>

      <div className="mt-8 grid w-full max-w-[1280px] grid-cols-1 items-start gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">

        <Filter />

        <div className="grid min-w-0 grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} eager={index < 4}/>
          ))}
        </div>

      </div>
    </section>
  );
}
