"use client";

import { ShoppingCart } from "lucide-react"; // Mengubah ShoppingBag jadi ShoppingCart
import { useCart } from "../app/context/CartContext";
import toast from "react-hot-toast";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={(e) => {
        e.preventDefault(); // Mencegah link gambar ikut terklik saat mencet keranjang
        addToCart(product);
        toast.success(
          <div className="flex flex-col">
            <span className="font-bold text-sm">Ditambahkan ke Keranjang</span>
            <span className="text-xs opacity-80">{product.name}</span>
          </div>, 
          {
            icon: '🛒',
            duration: 3000,
          }
        );
      }}
      className="bg-brand-sand/30 p-2.5 rounded-full hover:bg-brand-brown hover:text-white transition text-brand-brown shadow-sm"
      title="Tambah ke Keranjang"
    >
      {/* strokeWidth={1.5} bikin garis keranjangnya tipis dan elegan ala gambar 4 */}
      <ShoppingCart strokeWidth={1.5} className="w-5 h-5" />
    </button>
  );
}