import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { ThemeHandle } from "@/components/theme-handle";
import Footer from "@/components/ui/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Soroush Companies group",
    template: "%s | Soroush Companies group",
  },
  description:
    "Architectural & Structural Engineering Company – Integrated Design, Energy Optimization, and Technical Supervision.",
  // metadataBase: new URL("https://yoursite.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeHandle>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </ThemeHandle>
      </body>
    </html>
  );
}
