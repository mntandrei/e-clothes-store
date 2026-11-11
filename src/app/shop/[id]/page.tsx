import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllProducts } from "@/lib/product";
import { notFound } from "next/navigation";
import ProductActions from "@/app/components/productscards/ProductActions";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({params}: ProductPageProps) {
  const { id } = await params;
  const products = await getAllProducts();

  const product = products.find((product) => product.id === Number(id));

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[#f8f5ee] px-5 py-8 text-[#29251f] sm:px-6 lg:py-12">
      <div className="mx-auto max-w-[1100px]">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs text-[#6b6054] transition-colors hover:text-[#a17c58]">
          <ArrowLeft size={16} strokeWidth={1.6} />
          BACK TO SHOP
        </Link>

        <div className="mt-7 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[360px] w-full overflow-hidden rounded-md bg-[#e8decd] sm:h-[440px] lg:h-[500px]">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-contain p-6 sm:p-8"
              loading="eager"/>
          </div>

          <div className="flex flex-col py-2 lg:py-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#a17c58]">
              AUREL / {product.category}
            </p>

            <h1 className="mt-4 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-[#393027] sm:text-4xl lg:text-[42px]">
              {product.title}
            </h1>

            <p className="mt-5 text-2xl font-medium text-[#29251f]">
              €{product.price.toFixed(2)}
            </p>

            <div className="my-6 h-px w-full bg-[#d5c5ad]" />

            <h2 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[#393027]">
              Product Details
            </h2>

            <p className="text-sm leading-7 text-[#6b6054]">
              {product.description}
            </p>

            <ProductActions product={product} />

            <p className="mt-5 text-xs text-[#9a8f83]">
              CASUAL. MODERN. YOU.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
