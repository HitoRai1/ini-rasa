"use client";

import { useState } from "react";
import { supabase } from "../../app/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      toast.success("Login berhasil!");
      router.push("/");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#faf9f7] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-brand-brown mb-2">Selamat Datang</h1>
          <p className="text-brand-brown/60">Masuk untuk melanjutkan pesanan Anda.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-brand-brown mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-brand-sand/50 focus:outline-none focus:ring-2 focus:ring-brand-sage/50"
              placeholder="nama@email.com"
              autoComplete="email"
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
                placeholder="••••••••"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-brown/50 hover:text-brand-sage transition"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <Link href="/forgot-password" className="text-sm text-brand-sage font-medium hover:underline">
                Lupa Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-sage hover:bg-opacity-90 text-brand-brown font-bold py-3 rounded-xl transition disabled:opacity-70"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-center mt-6 text-brand-brown/70 text-sm">
          Belum punya akun?{" "}
          <Link href="/register" className="text-brand-sage font-bold hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
