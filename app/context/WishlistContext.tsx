"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";
import { supabase } from "../lib/supabase";

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category?: string;
  description?: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  toggleWishlist: (product: any) => void;
  isInWishlist: (id: number) => boolean;
  wishlistCount: number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Impor konteks Auth untuk mengetahui status login
  const { user, isLoading } = useAuth();

  // Efek Utama: Menangani Muat Data & Sinkronisasi
  useEffect(() => {
    if (isLoading) return; // Tunggu status auth stabil sebelum melakukan sinkronisasi

    const syncWishlist = async () => {
      try {
        const localData = localStorage.getItem("inirasa_wishlist");
        let localWishlist: WishlistItem[] = localData ? JSON.parse(localData) : [];

        if (user) {
          // 1. Jika sudah Login: Ambil data dari Supabase
          const { data, error } = await supabase
            .from('user_wishlists')
            .select('items')
            .eq('user_id', user.id)
            .single();

          let dbWishlist: WishlistItem[] = [];
          if (!error && data?.items) {
            dbWishlist = data.items as WishlistItem[];
          }

          // 2. Gabungkan data Lokal dengan data Database (menghilangkan duplikat)
          const merged = [...dbWishlist];
          localWishlist.forEach(localItem => {
            if (!merged.find(dbItem => dbItem.id === localItem.id)) {
              merged.push(localItem);
            }
          });

          // 3. Update state React utama
          setWishlist(merged);

          // 4. Jika ada tambahan dari Lokal, kirim balik ke Supabase agar tersimpan permanen
          if (merged.length > dbWishlist.length) {
            await supabase.from('user_wishlists').upsert({
              user_id: user.id,
              items: merged,
              updated_at: new Date().toISOString()
            });
          }

          // 5. Bersihkan local storage karena sekarang semuanya sudah aman di Supabase
          localStorage.removeItem("inirasa_wishlist");

        } else {
          // Jika Tidak Login: Cukup muat dari Local Storage
          setWishlist(localWishlist);
        }
      } catch (error) {
        console.error("Gagal melakukan sinkronisasi wishlist:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    syncWishlist();
  }, [user, isLoading]);

  const saveChanges = async (newWishlist: WishlistItem[]) => {
    if (user) {
      // Simpan ke Supabase secara asinkron
      const { error } = await supabase.from('user_wishlists').upsert({
        user_id: user.id,
        items: newWishlist,
        updated_at: new Date().toISOString()
      });
      if (error) console.error("Gagal memperbarui wishlist di DB:", error);
    } else {
      // Simpan ke Local Storage
      localStorage.setItem("inirasa_wishlist", JSON.stringify(newWishlist));
    }
  };

  const toggleWishlist = (product: any) => {
    const exists = wishlist.find((item) => item.id === product.id);
    
    let newWishlist: WishlistItem[];
    if (exists) {
      toast.success("Dihapus dari Favorit 💔", { duration: 1500 });
      newWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      toast.success(
        <div className="flex flex-col">
          <span className="font-bold text-sm">Ditambahkan ke Favorit ❤️</span>
          <span className="text-xs opacity-80">{product.name}</span>
        </div>, 
        { duration: 2000 }
      );
      newWishlist = [...wishlist, product];
    }

    setWishlist(newWishlist);
    saveChanges(newWishlist);
  };

  const isInWishlist = (id: number) => {
    return wishlist.some((item) => item.id === id);
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist harus digunakan di dalam WishlistProvider");
  }
  return context;
};
