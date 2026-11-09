import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Timeless by nature.",
    description:
      "Style should go beyond trends. We believe in pieces that feel relevant today, tomorrow, and every day after.",
  },
  {
    number: "02",
    title: "Made for individuality.",
    description:
      "No two people express themselves the same way. Your wardrobe should reflect your personality, not define it.",
  },
  {
    number: "03",
    title: "Everyday confidence.",
    description:
      "The best style is the one that feels natural. Effortless combinations, considered details, and confidence in simplicity.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-[#f6f2e9] text-[#29251f]">
      <section className="relative border-b border-[#ddd0be]">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-32">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-[#a17c58]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8b7358]">
                AUREL / OUR STORY
              </span>
            </div>

            <h1 className="font-serif text-[clamp(4rem,7vw,7rem)] leading-[0.95] font-normal tracking-[-0.045em] text-[#393027]">
              More than
              <br />
              <span className="italic text-[#967b61]">what you</span>
              <br />
              wear.
            </h1>

            <p className="mt-9 max-w-[440px] text-base leading-8 text-[#6b6054]">
              We believe personal style is more than a choice of
              clothing. It is a quiet expression of who you are,
              how you feel, and how you move through the world.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 bg-[#393027] px-7 py-4 text-xs font-medium tracking-[0.12em] text-[#f8f5ee] transition-colors duration-300 hover:bg-[#8b7358]">
                EXPLORE AUREL
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </Link>

              <span className="text-xs tracking-[0.12em] text-[#8b7358]">
                YOUR STYLE. YOUR STORY.
              </span>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[500px]">
            <div className="absolute inset-0 bg-linear-to-br from-[#e9ddcc] via-[#d8c4ad] to-[#ac9177]" />

            <div className="absolute inset-[7%] border border-white/50" />

            <div className="absolute left-1/2 top-1/2 size-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35" />

            <div className="absolute left-1/2 top-1/2 size-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="select-none font-serif text-[clamp(15rem,30vw,25rem)] leading-none text-[#f8f5ee]/65">
                A
              </span>
            </div>

            <div className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.25em] text-[#5d4b3c]">
              The Aurel Identity
            </div>

            <div className="absolute bottom-0 right-0 w-[78%] border-t border-l border-white/50 bg-[#f8f5ee]/95 p-7 shadow-xl sm:p-9">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#967b61]">
                Our Philosophy
              </span>

              <p className="mt-3 font-serif text-2xl leading-snug text-[#393027] sm:text-3xl">
                Elegance begins
                <br />
                with being yourself.
              </p>

              <span className="mt-6 block h-px w-12 bg-[#a17c58]" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ddd0be] bg-[#e8decd]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-7 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6b6054] md:justify-between lg:px-8">
          <span>Individuality</span>
          <span className="hidden size-1 rounded-full bg-[#a17c58] md:block" />
          <span>Modern Essentials</span>
          <span className="hidden size-1 rounded-full bg-[#a17c58] md:block" />
          <span>Effortless Style</span>
          <span className="hidden size-1 rounded-full bg-[#a17c58] md:block" />
          <span>Everyday Confidence</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-8 lg:py-36">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-[#a17c58]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8b7358]">
              01 / THE IDEA
            </span>
          </div>

          <h2 className="font-serif text-4xl font-normal leading-tight text-[#393027] sm:text-5xl">
            The story
            <br />
            behind <span className="italic text-[#967b61]">Aurel.</span>
          </h2>
        </div>

        <div className="space-y-7 lg:pt-12">
          <p className="font-serif text-2xl leading-relaxed text-[#393027] sm:text-3xl">
            AUREL is built around a simple idea: great style
            should feel personal, effortless, and entirely your own.
          </p>

          <p className="max-w-[650px] text-sm leading-8 text-[#75695d] sm:text-base">
            In a world that rushes from one trend to the next, 
            we choose to focus on something more lasting: individuality. 
            We see clothes as a way of expressing ourselves without talking.
          </p>

          <p className="max-w-[650px] text-sm leading-8 text-[#75695d] sm:text-base">
            We strive to combine the modern essentials of everyday life with a thoughtful shopping experience.
            Whether you&apos;re on the understated side or the expressive side,
            AUREL is a place to find what&apos;s right for you.
          </p>

          <div className="flex items-center gap-4 pt-5">
            <span className="h-px w-14 bg-[#a17c58]" />
            <span className="font-serif text-xl italic text-[#967b61]">
              Make it yours.
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#eee6da] py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#8b7358]">
                02 / WHAT WE BELIEVE
              </p>

              <h2 className="font-serif text-4xl font-normal leading-tight text-[#393027] sm:text-5xl">
                Our guiding
                <br />
                <span className="italic text-[#967b61]">principles.</span>
              </h2>
            </div>

            <p className="max-w-[300px] text-sm leading-7 text-[#75695d]">
              A considered approach to personal style, inspired
              by simplicity and individuality.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="group flex min-h-[310px] flex-col border border-[#e2d5c4] bg-[#f8f5ee] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(68,48,30,0.08)] sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#ac967c]">
                    {value.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#a17c58] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="font-serif text-2xl text-[#393027] sm:text-[27px]">
                    {value.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#75695d]">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd0be] px-6 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-7 text-[11px] uppercase tracking-[0.25em] text-[#a17c58]">
            THE AUREL MINDSET
          </p>

          <h2 className="font-serif text-4xl font-normal leading-[1.2] tracking-[-0.025em] text-[#393027] sm:text-5xl lg:text-6xl">
            Fashion changes.
            <br />
            <span className="italic text-[#967b61]">
              Personal style remains.
            </span>
          </h2>

          <div className="mx-auto mt-10 h-px w-14 bg-[#a17c58]" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#393027] px-6 py-24 text-center text-[#f8f5ee] lg:py-32">
        <div className="pointer-events-none absolute -left-24 -top-44 size-[400px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-56 -right-24 size-[500px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-[750px]">
          <p className="mb-7 text-[11px] uppercase tracking-[0.25em] text-[#c7ac8e]">
            DISCOVER YOUR EVERYDAY STYLE
          </p>

          <h2 className="font-serif text-5xl leading-[1.08] font-normal tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Your next favorite
            <br />
            <span className="italic text-[#c7ac8e]">
              starts here.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[460px] text-sm leading-7 text-[#d6c9ba] sm:text-base">
            Explore the collection and find the pieces that
            feel uniquely yours.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 bg-[#f8f5ee] px-8 py-4 text-xs font-medium tracking-[0.12em] text-[#393027] transition-colors duration-300 hover:bg-[#e4d5c1]">
              SHOP THE COLLECTION
              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 border-b border-[#b6a18b] pb-2 text-xs font-medium tracking-[0.12em] text-[#f8f5ee] transition-colors hover:text-[#c7ac8e]">
              BACK TO HOME
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
