"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../app/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Supabase akan otomatis mendeteksi token dari URL saat redirect dari email
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "PASSWORD_RECOVERY") {
          setIsReady(true);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password minimal 6 karakter.");
      return;
    }
    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success("Password berhasil diperbarui!");
      router.push("/");
    }
  };

  if (!isReady) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#faf9f7] px-4 py-12">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30 text-center">
          <div className="w-16 h-16 bg-brand-sand/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl">🔑</span>
          </div>
          <p className="text-brand-brown/70">Memverifikasi tautan pemulihan...</p>
          <p className="text-brand-brown/40 text-sm mt-2">Jika halaman ini tidak berubah, pastikan Anda membuka tautan dari email secara langsung.</p>
          <Link href="/forgot-password" className="inline-block mt-6 text-brand-sage font-bold hover:underline text-sm">
            Minta tautan baru
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#faf9f7] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-brand-brown mb-2">Buat Password Baru</h1>
          <p className="text-brand-brown/60">Masukkan kata sandi baru yang ingin Anda gunakan.</p>
        </div>

        <form onSubmit={handleUpdatePassword} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-2">Password Baru</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-brand-sand/50 focus:outline-none focus:ring-2 focus:ring-brand-sage/50 pr-12"
                placeholder="Minimal 6 karakter"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-brown/50 hover:text-brand-sage transition"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-sage hover:bg-opacity-90 text-brand-brown font-bold py-3 rounded-xl transition disabled:opacity-70"
          >
            {loading ? "Menyimpan..." : "Simpan Password Baru"}
          </button>
        </form>
      </div>
    </div>
  );
}
