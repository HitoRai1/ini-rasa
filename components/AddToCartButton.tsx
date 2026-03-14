"use client";

import { ShoppingCart } from "lucide-react"; // Mengubah ShoppingBag jadi ShoppingCart
import { useCart } from "../app/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={(e) => {
        e.preventDefault(); // Mencegah link gambar ikut terklik saat mencet keranjang
        addToCart(product);
      }}
      className="bg-brand-sand/30 p-2.5 rounded-full hover:bg-brand-brown hover:text-white transition text-brand-brown shadow-sm"
      title="Tambah ke Keranjang"
    >
      {/* strokeWidth={1.5} bikin garis keranjangnya tipis dan elegan ala gambar 4 */}
      <ShoppingCart strokeWidth={1.5} className="w-5 h-5" />
    </button>
  );
}