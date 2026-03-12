"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "../app/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product)}
      className="bg-brand-sand/50 p-2 rounded-full hover:bg-brand-sage hover:text-white transition text-brand-brown shadow-sm"
      title="Tambah ke Keranjang"
    >
      <ShoppingBag className="w-5 h-5" />
    </button>
  );
}