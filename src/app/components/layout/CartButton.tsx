"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/utils/cartStore";

type CartButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function CartButton({isOpen,onClick}: CartButtonProps) {
  const count = useCart((state) =>state.cart.reduce((total, product) => total + product.quantity, 0));

  return (
    <button
      type="button"
      aria-label="Shopping cart"
      aria-expanded={isOpen}
      onClick={onClick}
      className="relative cursor-pointer transition-colors duration-200 hover:text-[#a17c58]">
      <ShoppingBag size={19} strokeWidth={1.8} />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#a17c58] px-1 text-[9px] font-medium text-white">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
