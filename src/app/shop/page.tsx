import getProducts from "@/lib/product";
export default async function Shop() {
  const products = await getProducts();

  console.log("Product prms:", products.length);


  return (
    <section className="flex min-h-[calc(100dvh-120px)] flex-col items-center justify-center bg-linear-to-br from-[#f6f2e9] via-[#e8decd] to-[#d5c5ad] px-6 py-16">
      <h1 className="text-center text-3xl font-bold text-[#29251f] sm:text-4xl">
        Shop
      </h1>
       <p>Produse găsite: {products.length}</p>
    </section>
  );
}
