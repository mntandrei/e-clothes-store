import { Heart } from "lucide-react";

type FavoritesButtonProps = {isOpen: boolean, onClick: () => void;};

export default function FavoritesButton({isOpen, onClick}: FavoritesButtonProps) {
  return (
    <button
      type="button"
      aria-label="Favorites"
      aria-expanded={isOpen}
      onClick={onClick}
      className="cursor-pointer transition-colors duration-200 hover:text-[#a17c58]">
      <Heart size={19} strokeWidth={1.8} />
    </button>
  );
}