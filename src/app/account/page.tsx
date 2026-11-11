
import Link from "next/link";
import {
  UserRound,
  Package,
  Heart,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function Account() {
  return (
    <main className="min-h-screen bg-[#f8f5ee] px-5 py-10 text-[#29251f] sm:px-8 lg:py-14">
      <div className="mx-auto max-w-[1100px]">

        {/* Page heading */}
        <div className="mb-9 border-b border-[#d5c5ad] pb-7">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-[#a17c58]">
            AUREL / PERSONAL SPACE
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl">
            My Account
          </h1>

          <p className="mt-3 text-sm text-[#6b6054]">
            A personal space for your orders, details and favorites.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">

          {/* Profile sidebar */}
          <aside className="h-fit border border-[#e8decd] bg-[#f3eee5] p-6">
            <div className="flex flex-col items-center border-b border-[#d5c5ad] pb-7 text-center">
              <div className="flex size-20 items-center justify-center rounded-full bg-[#e8decd]">
                <UserRound
                  size={34}
                  strokeWidth={1.3}
                  className="text-[#6b6054]"
                />
              </div>

              <h2 className="mt-4 font-serif text-2xl">
                Demo Account
              </h2>

              <p className="mt-1 text-xs text-[#6b6054]">
                Profile preview
              </p>
            </div>

            <div className="space-y-5 pt-6">
              <div className="flex items-center gap-3 text-sm">
                <UserRound size={18} strokeWidth={1.5} />
                <span>Account Overview</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#6b6054]">
                <Package size={18} strokeWidth={1.5} />
                <span>My Orders</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#6b6054]">
                <Heart size={18} strokeWidth={1.5} />
                <span>My Favorites</span>
              </div>
            </div>

            <div className="mt-8 border-t border-[#d5c5ad] pt-5">
              <p className="text-xs leading-6 text-[#6b6054]">
                This is a demonstration account. Authentication
                and profile management are not enabled.
              </p>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex flex-col gap-6">

            {/* Welcome */}
            <section className="border border-[#e8decd] bg-[#f3eee5] p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#a17c58]">
                ACCOUNT OVERVIEW
              </p>

              <h2 className="mt-3 font-serif text-3xl">
                Welcome to AUREL.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#6b6054]">
                Discover timeless pieces, explore our collections,
                and keep track of your favorite styles.
              </p>

              <Link
                href="/shop"
                className="mt-6 inline-flex items-center gap-2 border-b border-[#29251f] pb-1 text-xs font-medium tracking-[0.12em] transition-colors hover:border-[#a17c58] hover:text-[#a17c58]"
              >
                EXPLORE COLLECTION
                <ArrowRight size={15} />
              </Link>
            </section>

            {/* Personal information */}
            <section className="border border-[#e8decd] p-6 sm:p-8">
              <h2 className="font-serif text-2xl">
                Personal Information
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-widest text-[#a17c58]">
                    Full Name
                  </p>
                  <p className="text-sm">Demo User</p>
                </div>

                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-widest text-[#a17c58]">
                    Email Address
                  </p>
                  <p className="text-sm text-[#6b6054]">
                    Not connected
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-widest text-[#a17c58]">
                    Account Type
                  </p>
                  <p className="text-sm">Demo Profile</p>
                </div>

                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-widest text-[#a17c58]">
                    Membership
                  </p>
                  <p className="text-sm">Preview Mode</p>
                </div>
              </div>
            </section>

            {/* Orders */}
            <section className="border border-[#e8decd] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl">
                  Recent Orders
                </h2>
                <Package size={20} strokeWidth={1.5} />
              </div>

              <div className="flex flex-col items-center py-10 text-center">
                <ShoppingBag
                  size={34}
                  strokeWidth={1.2}
                  className="text-[#a17c58]"
                />

                <h3 className="mt-4 font-serif text-xl">
                  No orders yet
                </h3>

                <p className="mt-2 text-sm text-[#6b6054]">
                  Your future purchases will appear here.
                </p>

                <Link
                  href="/shop"
                  className="mt-6 bg-[#29251f] px-7 py-3 text-xs tracking-[0.12em] text-white transition-colors hover:bg-[#a17c58]"
                >
                  START SHOPPING
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
