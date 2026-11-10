import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form
      action="/shop"
      method="get"
      role="search"
      className="relative h-10 w-full sm:h-11">
        
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>

      <input
        id="product-search"
        name="q"
        type="search"
        placeholder="Search..."
        className="h-full w-full rounded-md border border-[#e8decd] bg-white/65 backdrop-blur-md pl-3.5 pr-12 text-sm text-[#29251f] outline-none placeholder:text-[#9a8f83] focus-visible:ring-1 focus-visible:ring-[#b9a68b]"/>

      <button
        type="submit"
        aria-label="Search"
        className="absolute top-1/2 right-1 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-[#e8decd] text-[#29251f] transition-colors duration-200 hover:bg-[#d5c5ad] sm:size-9">
        <Search size={18} strokeWidth={1.75} />
      </button>
    </form>
  );
}
