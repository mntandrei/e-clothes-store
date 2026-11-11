"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/utils/cartStore";

export default function Checkout() {
  const cart = useCart((state) => state.cart);

  const subtotal = cart.reduce((total, product) => total + product.price * product.quantity,0);

  return (
    <main className="min-h-screen bg-[#f8f5ee] px-5 py-10 text-[#29251f]">
      <div className="mx-auto max-w-[1000px]">
        <p className="text-xs tracking-widest text-[#a17c58]">
          AUREL / CHECKOUT
        </p>

        <h1 className="mt-3 font-serif text-4xl">
          Your Order
        </h1>

        {cart.length === 0 ? (
          <div className="mt-12">
            <p className="text-sm text-[#6b6054]">
              Your cart is empty.
            </p>

            <Link
              href="/shop"
              className="mt-5 inline-block bg-[#29251f] px-6 py-3 text-xs text-white">
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="flex flex-col gap-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 border-b border-[#d5c5ad] pb-4">
                  <Link
                    href={`/shop/${product.id}`}
                    className="relative size-20 shrink-0 bg-[#e8decd]">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </Link>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/shop/${product.id}`}
                      className="text-sm font-medium hover:text-[#a17c58]"
                    >
                      {product.title}
                    </Link>

                    <p className="mt-2 text-xs text-[#6b6054]">
                      Quantity: {product.quantity}
                    </p>
                  </div>

                  <p className="text-sm">
                    €{(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-fit border border-[#e8decd] p-6">
              <h2 className="font-serif text-2xl">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-sm">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>

              <div className="mt-4 border-t border-[#d5c5ad] pt-4">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
              </div>

              <p className="mt-6 text-xs leading-6 text-[#6b6054]">
                This is a demo checkout. No real orders or payments
                are processed. Shipping and taxes are not included.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
