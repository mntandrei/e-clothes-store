import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  eager?: boolean;
}

export default function ProductCard({ product, eager = false }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
        className="h-44 w-full object-contain sm:h-48 lg:h-52"
        loading={eager ? "eager" : "lazy"}/>

        <div className="flex flex-1 flex-col gap-2 p-4">
            <p className="text-xs uppercase tracking-widest text-stone-500">
              {product.category}
            </p>
            <h3 className="text-sm font-medium text-stone-900">
              {product.title}
            </h3>
            <p className="mt-auto pt-2 text-base font-semibold text-stone-900">
              ${product.price.toFixed(2)}
            </p>
        </div>
    </article>
  );
}