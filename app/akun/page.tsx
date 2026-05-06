"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../app/context/AuthContext";
import { supabase } from "../../app/lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, Package, Clock, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function AkunPage() {
  const { user, isLoading, signOut } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    // Redirect ke login jika belum auth
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      setLoadingOrders(true);
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Gagal mengambil pesanan:", error);
      toast.error("Gagal memuat riwayat pesanan.");
    } finally {
      setLoadingOrders(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    toast.success("Berhasil keluar.");
    router.push("/");
  };

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-brand-brown animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Profil */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30 flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-brand-brown mb-2">Akun Saya</h1>
            <p className="text-brand-brown/70">{user.email}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 border-2 border-brand-brown text-brand-brown rounded-full hover:bg-brand-brown hover:text-brand-cream transition font-bold"
          >
            <LogOut className="w-4 h-4" /> Keluar
          </button>
        </div>

        {/* Riwayat Pesanan */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30">
          <h2 className="text-2xl font-serif font-bold text-brand-brown mb-6 flex items-center gap-2">
            <Package className="w-6 h-6 text-brand-sage" /> Riwayat Pesanan
          </h2>

          {loadingOrders ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-brand-sage animate-spin" />
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-12 bg-brand-cream/30 rounded-2xl border border-brand-sand/30">
              <Package className="w-12 h-12 text-brand-brown/30 mx-auto mb-4" />
              <p className="text-brand-brown/70 mb-4">Anda belum memiliki riwayat pesanan.</p>
              <button onClick={() => router.push("/menu")} className="text-brand-sage font-bold hover:underline">
                Mulai Belanja
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="border border-brand-sand/50 rounded-2xl p-6 hover:shadow-md transition">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4 border-b border-brand-sand/30 pb-4">
                    <div>
                      <p className="text-sm text-brand-brown/60 flex items-center gap-1 mb-1">
                        <Clock className="w-3.5 h-3.5" /> {formatDate(order.created_at)}
                      </p>
                      <p className="font-mono text-xs text-brand-brown/40">Order ID: {order.id.split('-')[0]}</p>
                    </div>
                    <div className="bg-brand-sage/20 text-brand-brown px-4 py-1.5 rounded-full text-sm font-bold w-fit">
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {order.items.map((item: any, idx: number) => (
                      <div key={idx} className="flex justify-between text-brand-brown/80 text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>{formatRupiah(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-brand-sand/30 font-bold text-brand-brown">
                    <span>Total Pembayaran</span>
                    <span className="text-lg">{formatRupiah(order.total_price)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
