"use client";

import { ShoppingCart } from "lucide-react"; // Mengubah ShoppingBag jadi ShoppingCart
import { useCart } from "../app/context/CartContext";

export default function AddToCartBigButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product)}
      className="w-full bg-brand-brown text-white py-4 rounded-xl hover:bg-opacity-90 transition font-bold flex items-center justify-center gap-3 shadow-md"
    >
      <ShoppingCart strokeWidth={1.5} className="w-5 h-5" />
      Tambah ke Keranjang
    </button>
  );
}