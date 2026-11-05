import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: "AUREL | Contemporary Fashion",
    template: "%s | AUREL",
  },

  description:
    "Discover timeless fashion, refined essentials, and modern collections at AUREL. Shop premium clothing and contemporary styles.",

  applicationName: "AUREL",

  keywords: [
    "AUREL",
    "fashion",
    "clothing store",
    "premium clothing",
    "contemporary fashion",
    "men fashion",
    "women fashion",
    "online clothing store",
  ],

  authors: [{ name: "AUREL" }],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  openGraph: {
    title: "AUREL | Contemporary Fashion",
    description:
      "Elevate your wardrobe with timeless pieces and refined contemporary fashion.",
    siteName: "AUREL",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "AUREL | Contemporary Fashion",
    description:
      "Discover modern elegance and timeless clothing at AUREL.",
  },
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${cormorant.variable} ${manrope.variable} flex min-h-dvh flex-col text-[#29251f] font-sans antialiased`}>
        <NavBar />
        <main className="w-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
