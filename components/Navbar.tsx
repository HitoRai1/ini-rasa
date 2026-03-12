"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../app/context/CartContext"; // Memanggil otak keranjang

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart(); // Mengambil jumlah total kue di keranjang

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-sm border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Brand */}
          <Link href="/" className="text-2xl font-bold tracking-tight text-brand-brown">
            Ini Rasa.
          </Link>

          {/* Menu Navigasi Tengah (Hanya Tampil di Laptop/PC) */}
          <nav className="hidden md:flex space-x-8 font-medium text-brand-brown">
            <Link href="/" className="hover:text-brand-sage transition">Home</Link>
            <Link href="/menu" className="hover:text-brand-sage transition">Menu</Link>
            <Link href="/artikel" className="hover:text-brand-sage transition">Artikel</Link>
            <Link href="/about" className="hover:text-brand-sage transition">About Us</Link>
          </nav>

          {/* Icon Keranjang, Profil, dan Tombol Hamburger */}
          <div className="flex items-center space-x-2 md:space-x-4">
            
            {/* Tombol Keranjang yang sudah Aktif dengan Notifikasi Angka Merah */}
            <Link href="/cart" className="p-2 hover:bg-brand-sand rounded-full transition text-brand-brown relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="p-2 hover:bg-brand-sand rounded-full transition text-brand-brown hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            
            {/* Tombol Garis Tiga (Hanya Tampil di HP) */}
            <button 
              className="p-2 hover:bg-brand-sand rounded-full transition text-brand-brown md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Dropdown Menu untuk HP */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand absolute w-full shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4 font-medium text-brand-brown">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-sage">Home</Link>
            <Link href="/menu" onClick={() => setIsOpen(false)} className="hover:text-brand-sage">Menu</Link>
            <Link href="/artikel" onClick={() => setIsOpen(false)} className="hover:text-brand-sage">Artikel</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-brand-sage">About Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}