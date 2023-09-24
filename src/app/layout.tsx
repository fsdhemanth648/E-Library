import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { NextAuthProvider } from "@/utils/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Library",
  description: "It's a place where you find the all resources at free of Cost",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div id="root">
            <Header />
            {children}
          </div>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
