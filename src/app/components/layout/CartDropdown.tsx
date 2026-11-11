"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Minus, Plus, X } from "lucide-react";
import { useCart } from "@/utils/cartStore";

export default function CartDropdown() {
  const cart = useCart((state) => state.cart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const updateQuantity = useCart((state) => state.updateQuantity);

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,0);

  return (
    <div className="absolute right-0 top-full z-50 mt-4 flex h-[380px] w-[340px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-md border border-[#e8decd] bg-[#f8f5ee] shadow-xl">
      <div className="shrink-0 border-b border-[#e8decd] px-5 py-4">
        <h3 className="text-sm font-medium tracking-widest">
          MY CART
        </h3>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <ShoppingBag size={30} strokeWidth={1.2} />
            <p className="text-sm text-[#6b6054]">
              Your cart is empty
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 border-b border-[#e8decd] pb-4">
                <Link
                  href={`/shop/${product.id}`}
                  className="relative size-16 shrink-0 bg-[#e8decd]">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    sizes="64px"
                    className="object-contain p-1" />
                </Link>

                <div className="min-w-0 flex-1">
                  <Link
                    href={`/shop/${product.id}`}
                    className="line-clamp-2 text-xs font-medium hover:text-[#a17c58]">
                    {product.title}
                  </Link>

                  <p className="mt-1 text-xs text-[#6b6054]">
                    €{product.price.toFixed(2)}
                  </p>

                  <div className="mt-2 flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                      className="cursor-pointer">
                      <Minus size={13} />
                    </button>

                    <span className="text-xs">
                      {product.quantity}
                    </span>

                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                      className="cursor-pointer">
                      <Plus size={13} />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Remove product"
                  onClick={() => removeFromCart(product.id)}
                  className="h-fit cursor-pointer text-[#6b6054] hover:text-[#a17c58]">
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="shrink-0 border-t border-[#e8decd] p-4">
        <div className="mb-4 flex justify-between text-sm">
          <span>Subtotal</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>

        {cart.length > 0 ? (
          <Link
            href="/checkout"
            className="flex w-full items-center justify-center bg-[#29251f] px-4 py-3 text-xs tracking-widest text-white transition-colors hover:bg-[#a17c58]">
            GO TO CHECKOUT
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="w-full bg-[#29251f] px-4 py-3 text-xs tracking-widest text-white opacity-50">
            GO TO CHECKOUT
          </button>
        )}
      </div>
    </div>
  );
}
