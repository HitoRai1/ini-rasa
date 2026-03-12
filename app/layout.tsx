import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "./context/CartContext"; // Import otaknya

export const metadata: Metadata = {
  title: "Ini Rasa | Toko Roti & Kue Premium",
  description: "Katalog digital Ini Rasa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-brand-cream text-brand-brown font-sans antialiased min-h-screen flex flex-col">
        {/* Seluruh website dibungkus dengan CartProvider */}
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}