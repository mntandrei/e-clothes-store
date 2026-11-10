
import Link from "next/link";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#f8f5ee] px-6 py-16 text-[#29251f]">
      <div className="mx-auto max-w-[1280px]">
        <Link
          href="/shop"
          className="text-sm text-[#6b6054] transition-colors hover:text-[#a17c58]"
        >
          ← Back to Shop
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {/* Product image */}
          <div className="flex aspect-square items-center justify-center rounded-md bg-[#e8decd]">
            <span className="text-sm text-[#8b7358]">
              Product Image
            </span>
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#a17c58]">
              AUREL / COLLECTION
            </p>

            <h1 className="mt-5 font-serif text-5xl">
              Product {id}
            </h1>

            <p className="mt-6 text-2xl font-medium">
              $99.00
            </p>

            <div className="my-8 h-px bg-[#d5c5ad]" />

            <p className="max-w-md text-sm leading-7 text-[#6b6054]">
              Product description will appear here.
            </p>

            <button
              type="button"
              className="mt-10 w-full max-w-sm cursor-pointer bg-[#29251f] px-8 py-4 text-sm tracking-widest text-white transition-colors hover:bg-[#a17c58]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
