"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Home, Store, BookOpen, Info, Menu, X, User, Heart, MapPin } from "lucide-react";
import Logo from "./Logo"; 
import { useCart } from "../app/context/CartContext";
import { useAuth } from "../app/context/AuthContext";
import { useWishlist } from "../app/context/WishlistContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart() || { cartCount: 0 };
  const { user, isLoading } = useAuth();
  const { wishlistCount } = useWishlist() || { wishlistCount: 0 };
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Menu", href: "/menu", icon: Store },
    { name: "Artikel", href: "/artikel", icon: BookOpen },
    { name: "Location", href: "/location", icon: MapPin },
    { name: "About Us", href: "/about", icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f7] border-b border-brand-sand/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* KIRI: Bagian Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* TENGAH: Menu Navigasi Utama */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 font-medium transition-colors ${
                    isActive ? "text-brand-sage font-bold" : "text-brand-brown hover:text-brand-sage"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* KANAN: Ikon Akun & Keranjang */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {!isLoading && (
              <Link
                href={user ? "/akun" : "/login"}
                className="p-2 text-brand-brown hover:text-brand-sage transition-colors bg-brand-sand/10 hover:bg-brand-sand/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                title={user ? "Akun Saya" : "Masuk"}
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            )}

            <Link
              href="/wishlist"
              className="relative p-2 text-brand-brown hover:text-brand-sage transition-colors bg-brand-sand/10 hover:bg-brand-sand/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              title="Favorit"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              {isMounted && wishlistCount > 0 && (
                <span className="absolute top-0 right-0 sm:top-1 sm:right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border-2 border-[#faf9f7]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="relative p-2 text-brand-brown hover:text-brand-sage transition-colors bg-brand-sand/10 hover:bg-brand-sand/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {/* Notifikasi jumlah barang (muncul jika ada barang) */}
              {isMounted && cartCount > 0 && (
                <span className="absolute top-0 right-0 sm:top-1 sm:right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border-2 border-[#faf9f7]">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Tombol Hamburger Menu untuk Tampilan HP */}
            <button
              className="md:hidden p-2 text-brand-brown bg-brand-sand/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-brand-sand/20 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Menu Navigasi Khusus Tampilan HP (Mobile) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-sand/30">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive ? "bg-brand-sage/10 text-brand-sage font-bold" : "text-brand-brown hover:bg-brand-sand/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}