"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../app/context/CartContext";
import Logo from "./Logo"; // Memanggil Logo baru kita

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* BAGIAN KIRI: Garis Tiga (Mobile) & Logo (Desktop) */}
          <div className="flex items-center w-1/3">
            <button 
              className="p-2 -ml-2 mr-2 hover:bg-brand-sand rounded-full transition text-brand-brown md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X strokeWidth={1.5} className="w-6 h-6" /> : <Menu strokeWidth={1.5} className="w-6 h-6" />}
            </button>
            
            {/* Logo Desktop Menggunakan Komponen */}
            <Link href="/" className="hidden md:block hover:opacity-80 transition">
              <Logo />
            </Link>
          </div>

          {/* BAGIAN TENGAH: Logo (Mobile) & Menu Navigasi (Desktop) */}
          <div className="flex-1 flex justify-center w-1/3">
            {/* Logo Mobile Menggunakan Komponen (agar di tengah) */}
            <Link href="/" className="md:hidden hover:opacity-80 transition">
              <Logo />
            </Link>

            <nav className="hidden md:flex space-x-8 font-medium text-brand-brown">
              <Link href="/" className="hover:text-brand-sage transition">Home</Link>
              <Link href="/menu" className="hover:text-brand-sage transition">Menu</Link>
              <Link href="/artikel" className="hover:text-brand-sage transition">Artikel</Link>
              <Link href="/about" className="hover:text-brand-sage transition">Tentang Kami</Link>
            </nav>
          </div>

          {/* BAGIAN KANAN: Ikon Profil & Keranjang */}
          <div className="flex items-center justify-end space-x-2 sm:space-x-3 w-1/3">
            <button className="flex w-10 h-10 items-center justify-center bg-brand-sand/20 hover:bg-brand-sand/40 rounded-full transition text-brand-brown">
              <User strokeWidth={1.5} className="w-5 h-5" />
            </button>

            <Link href="/cart" className="w-10 h-10 flex items-center justify-center bg-brand-sand/20 hover:bg-brand-sand/40 rounded-full transition text-brand-brown relative">
              <ShoppingCart strokeWidth={1.5} className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand absolute w-full shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4 font-medium text-brand-brown">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-sage">Home</Link>
            <Link href="/menu" onClick={() => setIsOpen(false)} className="hover:text-brand-sage">Menu</Link>
            <Link href="/artikel" onClick={() => setIsOpen(false)} className="hover:text-brand-sage">Artikel</Link>
            <Link href="/Tentang-kami" onClick={() => setIsOpen(false)} className="hover:text-brand-sage">Tentang kami</Link>
          </nav>
        </div>
      )}
    </header>
  );
}