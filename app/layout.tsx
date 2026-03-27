import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "./context/CartContext"; // Import otaknya
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL('https://inirasa.biz.id'), // Tambahkan ini!
  title: 'Ini Rasa | Bakery & Hampers Premium Jakarta',
  description: 'Menyajikan berbagai pilihan signature cake, pastry, dan hampers elegan dengan bahan premium Wisjman.',
}

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
          {/* Ini kode baru untuk memunculkan notifikasi elegan */}
          <Toaster 
            position="bottom-center" 
            toastOptions={{
              style: {
                background: '#4a3b32', // Warna brand-brown
                color: '#fff',
                borderRadius: '100px',
                fontWeight: 'bold',
              },
            }} 
          />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}