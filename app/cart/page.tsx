"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Trash2, Loader2, CheckCircle2 } from "lucide-react";
import { useCart } from "../../app/context/CartContext";
import { useState, useEffect } from "react";
import { useAuth } from "../../app/context/AuthContext";
import { supabase } from "../../app/lib/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CartPage() {
  const { cart, cartCount, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fungsi format Rupiah
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  // Menghitung total harga semua barang di keranjang (ditambah pelampung pengaman ?.)
  const totalHarga = cart?.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Silakan login terlebih dahulu untuk melakukan pemesanan.");
      router.push("/login");
      return;
    }

    if (cartCount === 0) return;

    try {
      setIsCheckingOut(true);

      // Simpan ke database Supabase
      const { data, error } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          items: cart,
          total_price: totalHarga,
          status: 'Menunggu Pembayaran'
        })
        .select('id')
        .single();

      if (error) throw error;

      // Berhasil simpan, buat link WhatsApp dengan Order ID
      const orderIdShort = data.id.split('-')[0];
      const daftarPesanan = cart?.map(item => `- ${item.name} (${item.quantity}x)`).join('%0A') || '';
      const pesanWhatsApp = `Halo Ini Rasa! Saya mau pesan:%0A${daftarPesanan}%0A%0ATotal: ${formatRupiah(totalHarga)}%0AOrder ID: ${orderIdShort}%0A%0AMohon info pembayarannya ya.`;
      const linkWA = `https://wa.me/6285186074311?text=${pesanWhatsApp}`;

      toast.success("Pesanan berhasil dibuat!");
      clearCart(); // Kosongkan keranjang
      
      // Buka WA di tab baru
      window.open(linkWA, "_blank");
      
      // Arahkan ke halaman Akun
      router.push("/akun");

    } catch (error: any) {
      console.error("Gagal membuat pesanan:", error);
      toast.error("Terjadi kesalahan sistem saat membuat pesanan.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  // Tampilan loading sebentar agar memori keranjang selesai dibaca
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-brand-brown animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-brown mb-8">Keranjang Belanja</h1>

        {/* Jika keranjang kosong */}
        {cartCount === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-brand-sand/30 shadow-sm">
            <p className="text-brand-brown/70 mb-6 text-lg">Keranjang kamu masih kosong nih.</p>
            <Link href="/menu" className="inline-flex items-center gap-2 bg-brand-brown text-brand-cream px-8 py-3 rounded-full hover:bg-opacity-90 transition font-medium">
              <ArrowLeft className="w-5 h-5" /> Belanja Sekarang
            </Link>
          </div>
        ) : (
          /* Jika ada barang di keranjang */
          <div className="bg-white rounded-2xl border border-brand-sand/30 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 sm:gap-6 border-b border-brand-sand/30 pb-6 last:border-0 last:pb-0">
                  
                  {/* Foto Produk */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-brand-sand/20 rounded-xl overflow-hidden relative">
                    <Image 
                      src={item.image_url} 
                      alt={item.name} 
                      fill
                      sizes="(max-width: 768px) 80px, 96px"
                      className="object-cover" 
                    />
                  </div>
                  
                  {/* Info Produk dengan Fitur Tambah Kurang */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-brand-brown">{item.name}</h3>
                    <p className="text-brand-brown/70 text-sm mb-3">{formatRupiah(item.price)}</p>
                    
                    {/* Tombol Plus Minus & Hapus */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-brand-sand rounded-lg overflow-hidden w-fit">
                        <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-brand-sand/30 hover:bg-brand-sand transition text-brand-brown font-bold">-</button>
                        <span className="px-4 py-1 font-bold text-brand-brown text-sm w-8 text-center">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 bg-brand-sand/30 hover:bg-brand-sand transition text-brand-brown font-bold">+</button>
                      </div>
                      
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500/80 hover:text-red-600 p-1 transition" title="Hapus Kue">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Subtotal */}
                  <div className="text-right">
                    <p className="font-bold text-brand-brown">
                      {formatRupiah(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bagian Total & Tombol Checkout */}
            <div className="bg-brand-sand/10 p-6 sm:p-8 border-t border-brand-sand/30">
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-medium text-brand-brown">Total Belanja</span>
                <span className="text-2xl sm:text-3xl font-bold text-brand-brown">{formatRupiah(totalHarga)}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link href="/menu" className="px-6 py-3 rounded-full border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-brand-cream transition text-center font-bold">
                  Tambah Kue Lain
                </Link>
                
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition font-bold shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isCheckingOut ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  )}
                  {isCheckingOut ? "Memproses..." : "Checkout via WhatsApp"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}