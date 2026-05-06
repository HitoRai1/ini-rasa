"use client";

import { useState } from "react";
import { supabase } from "../../app/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success("Pendaftaran berhasil! Silakan periksa email Anda (jika diperlukan konfirmasi) atau coba login.");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#faf9f7] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-brand-brown mb-2">Buat Akun</h1>
          <p className="text-brand-brown/60">Bergabung untuk kemudahan pemesanan.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-brand-sand/50 focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-brown mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-brand-sand/50 focus:outline-none focus:ring-2 focus:ring-brand-sage/50 pr-12"
                placeholder="Minimal 6 karakter"
                autoComplete="new-password"
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
            {loading ? "Mendaftar..." : "Daftar"}
          </button>
        </form>

        <p className="text-center mt-6 text-brand-brown/70 text-sm">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-brand-sage font-bold hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
