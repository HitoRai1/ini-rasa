"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "../app/context/WishlistContext";
import { useEffect, useState } from "react";

export default function WishlistButton({ product }: { product: any }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const favorited = isMounted ? isInWishlist(product.id) : false;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleWishlist(product);
      }}
      className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 z-30 shadow-sm
        ${favorited 
          ? "bg-white text-red-500 scale-110" 
          : "bg-white/80 text-brand-brown/50 hover:bg-white hover:text-red-400 hover:scale-110"
        }
      `}
      title={favorited ? "Hapus dari Favorit" : "Tambah ke Favorit"}
    >
      <Heart className="w-5 h-5" fill={favorited ? "currentColor" : "none"} strokeWidth={favorited ? 0 : 2} />
    </button>
  );
}
