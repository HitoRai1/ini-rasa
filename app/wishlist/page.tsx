"use client";

import Link from "next/link";
import { ArrowLeft, HeartCrack } from "lucide-react";
import { useWishlist } from "../../app/context/WishlistContext";
import AddToCartButton from "../../components/AddToCartButton";
import WishlistButton from "../../components/WishlistButton";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  const { wishlist, wishlistCount } = useWishlist();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  if (!isMounted) {
    return <div className="min-h-screen bg-brand-cream"></div>;
  }

  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link href="/menu" className="inline-flex items-center text-brand-sage hover:text-brand-brown transition font-medium group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Kembali ke Menu
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-brown mb-4 flex items-center justify-center gap-3">
            Wishlist Saya <span className="text-red-500">❤️</span>
          </h1>
          <p className="text-brand-brown/70 max-w-2xl mx-auto">
            Kumpulan kue dan hampers pilihan yang Anda simpan untuk dibeli nanti.
          </p>
        </div>

        {wishlistCount === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-brand-sand/30">
            <HeartCrack className="w-16 h-16 text-brand-brown/20 mx-auto mb-6" />
            <p className="text-brand-brown/70 mb-8 text-lg">Belum ada satupun kue di daftar favoritmu.</p>
            <Link href="/menu" className="inline-block bg-brand-sage hover:bg-brand-brown text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md">
              Eksplorasi Katalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-sand/30 hover:shadow-md transition group flex flex-col">
                <div className="aspect-square bg-brand-sand/20 relative flex items-center justify-center overflow-hidden">
                  <WishlistButton product={product} />
                  <Link href={`/menu/${product.id}`} className="w-full h-full">
                    <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </Link>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  {product.category && (
                    <p className="text-xs font-bold text-brand-sage uppercase tracking-wider mb-1">{product.category}</p>
                  )}
                  
                  <Link href={`/menu/${product.id}`}>
                    <h3 className="text-lg font-bold text-brand-brown mb-2 line-clamp-2 leading-tight hover:text-brand-sage transition">{product.name}</h3>
                  </Link>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-sand/30">
                    <span className="text-brand-brown font-bold">{formatRupiah(product.price)}</span>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
