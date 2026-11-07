import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
        className="h-44 w-full object-contain sm:h-48 lg:h-52"/>

        <div className="p-4 space-y-2">
            <p className="text-xs uppercase tracking-widest text-stone-500">{product.category}</p>
            <h3 className="text-sm font-medium text-stone-900">{product.title}</h3>
            <p className="text-base font-semibold text-stone-900">${product.price.toFixed(2)}</p>
        </div>
    </article>
  );
}