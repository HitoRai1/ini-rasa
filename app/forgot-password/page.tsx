"use client";

import { useState } from "react";
import { supabase } from "../../app/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      setIsSuccess(true);
      setLoading(false);
      toast.success("Tautan pemulihan berhasil dikirim!");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#faf9f7] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-brand-brown mb-2">Lupa Password?</h1>
          <p className="text-brand-brown/60">Masukkan email Anda untuk menerima tautan pembaruan kata sandi.</p>
        </div>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-brand-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📩</span>
            </div>
            <h2 className="text-xl font-bold text-brand-brown mb-2">Cek Email Anda</h2>
            <p className="text-brand-brown/70 mb-6">
              Kami telah mengirimkan tautan untuk mengatur ulang kata sandi ke <strong>{email}</strong>.
            </p>
            <Link href="/login" className="text-brand-sage font-bold hover:underline">
              Kembali ke Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-6">
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-sage hover:bg-opacity-90 text-brand-brown font-bold py-3 rounded-xl transition disabled:opacity-70"
            >
              {loading ? "Mengirim..." : "Kirim Tautan Pemulihan"}
            </button>
            
            <div className="text-center mt-6">
              <Link href="/login" className="text-sm text-brand-brown/70 hover:text-brand-sage font-medium transition">
                &larr; Kembali ke halaman Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
