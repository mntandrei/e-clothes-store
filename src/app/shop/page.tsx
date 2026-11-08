import { getAllProducts } from "@/lib/product";
import ProductCard from "@/app/components/products/ProductCard";
import Filter from "@/app/components/shop/Filter";

export default async function Shop() {
  const products = await getAllProducts();

  return (
    <section className="flex min-h-[calc(100dvh-120px)] flex-col items-center justify-start bg-linear-to-br from-[#f6f2e9] via-[#e8decd] to-[#d5c5ad] px-4 py-12 sm:px-6 lg:px-8">

      <h1 className="text-center text-3xl font-bold text-[#29251f] sm:text-4xl">
        Shop
      </h1>

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
