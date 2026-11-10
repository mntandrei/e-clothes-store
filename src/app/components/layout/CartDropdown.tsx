import { ShoppingBag } from "lucide-react";

export default function CartDropdown() {
  return (
    <div className="absolute right-0 top-full z-50 mt-4 flex h-[380px] w-[340px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-md border border-[#e8decd] bg-[#f8f5ee] shadow-xl">

      <div className="shrink-0 border-b border-[#e8decd] px-5 py-4">
        <h3 className="text-sm font-medium tracking-widest">
          MY CART
        </h3>
      </div>

      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 overflow-y-auto p-5">
        <ShoppingBag size={30} strokeWidth={1.2} />
        <p className="text-sm text-[#6b6054]">
          Your cart is empty
        </p>
      </div>

      <div className="shrink-0 border-t border-[#e8decd] p-4">
        <div className="mb-4 flex justify-between text-sm">
          <span>Subtotal</span>
          <span>€0.00</span>
        </div>

        <button
          type="button"
          disabled
          className="w-full bg-[#29251f] px-4 py-3 text-xs tracking-widest text-white opacity-50">
          GO TO CHECKOUT
        </button>
      </div>
    </div>
  );
}