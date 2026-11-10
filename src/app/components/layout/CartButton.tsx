import { ShoppingBag } from "lucide-react";

type CartButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function CartButton({isOpen, onClick}: CartButtonProps) {
  return (
    <button
      type="button"
      aria-label="Shopping cart"
      aria-expanded={isOpen}
      onClick={onClick}
      className="cursor-pointer transition-colors duration-200 hover:text-[#a17c58]">
      <ShoppingBag size={19} strokeWidth={1.8} />
    </button>
  );
}