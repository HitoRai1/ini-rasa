import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "./context/CartContext"; 
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL('https://inirasa.biz.id'),
  title: 'Ini Rasa | Bakery & Hampers Premium Jakarta',
  description: 'Menyajikan berbagai pilihan signature cake, pastry, dan hampers elegan dengan bahan premium Wisjman.',
  keywords: ['bakery jakarta', 'hampers jakarta', 'kue premium jakarta', 'cake jakarta barat', 'wisjman', 'ini rasa', 'hampers lebaran', 'hampers natal'],
  openGraph: {
    title: 'Ini Rasa | Bakery & Hampers Premium Jakarta',
    description: 'Pesan hampers premium Wisjman untuk momen spesialmu.',
    url: 'https://inirasa.biz.id',
    siteName: 'Ini Rasa',
    images: [
      {
        url: '/opengraph-image.png', 
        width: 1200,
        height: 630,
        alt: 'Ini Rasa Bakery & Hampers',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ini Rasa | Bakery & Hampers Premium Jakarta',
    description: 'Pesan hampers premium Wisjman untuk momen spesialmu.',
    images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4a3b32" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-E7EE981FZR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E7EE981FZR');
            `,
          }}
        />
      </head>
      <body className="bg-brand-cream text-brand-brown font-sans antialiased min-h-screen flex flex-col">
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <Navbar />
              <Toaster 
                position="bottom-center" 
                toastOptions={{
                  style: {
                    background: '#4a3b32',
                    color: '#fff',
                    borderRadius: '100px',
                    fontWeight: 'bold',
                  },
                }} 
              />
              <main className="min-h-screen flex flex-col">
                {children}
              </main>
              <Footer />
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}