import type { Product } from "@/types/product";
import ProductCard from "@/app/components/products/ProductCard";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="min-w-0">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-medium text-[#463c32]">
          All Products
        </h2>
        <span className="text-xs text-[#6b6054]">
          {products.length} products
        </span>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              eager={index < 4}/>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[#e8decd] bg-[#f8f5ee] px-6 py-16 text-center">
          <h3 className="text-lg font-medium text-[#463c32]">
            No products found
          </h3>
          <p className="mt-2 text-sm text-[#6b6054]">
            Try changing your filters.
          </p>
        </div>
      )}
    </div>
  );
}
