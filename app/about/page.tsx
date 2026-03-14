import Link from "next/link";
import { ArrowRight, Heart, Star, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] overflow-hidden pb-20">
      
      {/* SECTION 1: Hero & Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold text-brand-sage uppercase tracking-widest mb-3">Kisah Kami</p>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brand-brown leading-tight mb-6">
                Lebih dari Sekadar Kue, Ini Adalah Cerita.
              </h1>
              <p className="text-lg text-brand-brown/80 leading-relaxed mb-6">
                Bermula dari dapur kecil di sudut Jakarta Barat, <strong>Ini Rasa</strong> lahir dari sebuah mimpi sederhana: menghadirkan kebahagiaan melalui rasa. 
              </p>
              <p className="text-lg text-brand-brown/80 leading-relaxed">
                Kami percaya bahwa setiap perayaan—besar maupun kecil—pantas dirayakan dengan sajian yang tak hanya indah dipandang, tapi juga meninggalkan memori manis yang tak terlupakan di lidah.
              </p>
            </div>

            <Link href="/menu" className="inline-flex items-center gap-2 bg-brand-brown text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition shadow-md group">
              Lihat Kreasi Kami 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-sand/30 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp" 
                alt="Dapur Ini Rasa" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-brown/10"></div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Filosofi & Perjalanan */}
      <section className="bg-brand-cream/50 py-24 border-y border-brand-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-brown mb-8">
            Resep Rahasia Kami Adalah Ketulusan
          </h2>
          <p className="text-lg text-brand-brown/80 leading-relaxed">
            Perjalanan kami bukanlah tentang membuat kue dalam jumlah massal, melainkan tentang dedikasi pada seni memanggang. Setiap hari, tim kami bangun pagi-pagi sekali untuk memastikan aroma mentega mentega asli dan ragi segar memenuhi ruangan dapur. 
          </p>
          <p className="text-lg text-brand-brown/80 leading-relaxed">
            Tidak ada jalan pintas. Setiap adonan dikerjakan dengan tangan, menggunakan resep keluarga yang terus disempurnakan, dan hanya memilih bahan baku premium terbaik. Kami menolak penggunaan pengawet buatan, karena kami menyajikan kue untuk pelanggan layaknya menyajikan untuk keluarga sendiri.
          </p>
        </div>
      </section>

      {/* SECTION 3: Nilai Bisnis (Value) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-brown mb-4">Kenapa Memilih Ini Rasa?</h2>
            <div className="w-24 h-1 bg-brand-sage mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl hover:bg-brand-sand/10 transition duration-300">
              <div className="w-16 h-16 bg-brand-sand/20 rounded-full flex items-center justify-center text-brand-sage mb-2 shadow-sm">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown font-serif">Bahan Premium</h3>
              <p className="text-brand-brown/70 leading-relaxed">Hanya menggunakan mentega asli kualitas ekspor, cokelat pilihan, dan bahan segar alami tanpa kompromi.</p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl hover:bg-brand-sand/10 transition duration-300">
              <div className="w-16 h-16 bg-brand-sand/20 rounded-full flex items-center justify-center text-brand-sage mb-2 shadow-sm">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown font-serif">Dibuat dengan Cinta</h3>
              <p className="text-brand-brown/70 leading-relaxed">Setiap produk dipanggang setiap hari (100% freshly baked) dengan dedikasi dan ketelitian tinggi dari para chef kami.</p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl hover:bg-brand-sand/10 transition duration-300">
              <div className="w-16 h-16 bg-brand-sand/20 rounded-full flex items-center justify-center text-brand-sage mb-2 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown font-serif">Higienis & Aman</h3>
              <p className="text-brand-brown/70 leading-relaxed">Seluruh proses produksi hingga pengemasan mengikuti standar kebersihan pangan (food safety) yang sangat ketat.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}