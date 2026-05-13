import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock, ExternalLink } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "5 Rekomendasi Bisnis Lokal Sahabat Ini Rasa yang Wajib Dikunjungi | Ini Rasa",
  description: "Selain menikmati kue premium dari Ini Rasa, mari dukung bisnis lokal dari sahabat-sahabat kami. Mulai dari kafe, layanan kesehatan, grooming hewan, hingga makan malam Italia.",
  openGraph: {
    title: "5 Rekomendasi Bisnis Lokal Sahabat Ini Rasa",
    description: "Dukung bisnis lokal bersama Ini Rasa! Intip 5 layanan dan produk terbaik dari sahabat-sahabat kami.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp", width: 1200, height: 630, alt: "Rekomendasi Bisnis Lokal" }],
    type: "article",
  }
};

const recommendations = [
  { 
    name: "Kicau Cafe", 
    url: "https://kicaucafe.com/", 
    desc: "Sedang mencari tempat nongkrong asyik dengan suasana nyaman? Kicau Cafe adalah jawabannya! Seperti namanya, kafe ini menawarkan kenyamanan seperti kafe pada umumnya dengan sajian kopi dan makanan yang pas untuk menemani waktu santai atau bekerja.",
    category: "Cafe & Hangout"
  },
  { 
    name: "Nihao Dokter", 
    url: "https://nihaodokter.web.id", 
    desc: "Layanan konsultasi kesehatan online yang mirip dengan Halodoc. Jika Anda merasa kurang enak badan tapi belum sempat ke rumah sakit, Nihao Dokter memberikan kemudahan untuk berkonsultasi dengan dokter secara virtual dari mana saja dan kapan saja.",
    category: "Layanan Kesehatan"
  },
  { 
    name: "Pawbieast", 
    url: "https://www.pawbieast.com/", 
    desc: "Bagi Anda para paw parents, menjaga kebersihan anjing kesayangan adalah kewajiban. Pawbieast menawarkan jasa grooming anjing profesional yang akan memanjakan peliharaan Anda agar selalu bersih, wangi, dan sehat.",
    category: "Perawatan Hewan Peliharaan"
  },
  { 
    name: "Zaffrino", 
    url: "https://www.zaffrino.site/", 
    desc: "Mencari tempat yang sempurna untuk romantic dinner atau merayakan momen spesial? Zaffrino menyajikan pengalaman bersantap malam ala Italia yang autentik. Suasana elegan dipadukan dengan hidangan pasta dan wine terbaik.",
    category: "Fine Dining & Restaurant"
  },
  { 
    name: "Deniffer's Cookies", 
    url: "https://www.denifferscookies.web.id", 
    desc: "Sesama pebisnis kue, kami sangat menghargai karya satu sama lain! Jika Anda mencari variasi cookies yang berbeda, Deniffer's Cookies menawarkan beragam pilihan kue kering lezat yang wajib Anda cicipi.",
    category: "Bakery & Desserts"
  },
];

export default function ArtikelRekomendasiBisnis() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp" alt="Kolaborasi Bisnis Lokal" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Komunitas</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 13 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 4 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            5 Rekomendasi Bisnis Lokal Sahabat Ini Rasa yang Wajib Dikunjungi
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Di Ini Rasa, kami percaya bahwa kesuksesan akan terasa lebih manis jika dinikmati bersama. Itulah mengapa kami sangat mendukung pertumbuhan bisnis lokal!
            </p>
            <p>
              Kami ingin memanfaatkan wadah ini untuk memperkenalkan beberapa bisnis hebat yang dibangun oleh sahabat-sahabat kami. Mulai dari tempat ngopi santai, layanan kesehatan praktis, hingga pengalaman makan malam mewah — ini dia 5 layanan dan produk luar biasa yang patut Anda coba.
            </p>

            <div className="space-y-8 mt-10">
              {recommendations.map((item, index) => (
                <div key={index} className="bg-brand-cream/30 border border-brand-sand/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-brand-sage transition duration-300">
                  <div className="absolute top-0 right-0 bg-brand-sage text-brand-brown font-bold text-xs px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-brown mb-3 mt-2">{item.name}</h3>
                  <p className="text-base text-brand-brown/80 mb-6">{item.desc}</p>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-sage hover:text-brand-brown transition"
                  >
                    Kunjungi Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-12 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Mari dukung sesama pelaku usaha! Setiap kunjungan dan dukungan Anda kepada bisnis-bisnis lokal ini sangat berarti bagi pertumbuhan komunitas wirausaha kita. 
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/rekomendasi-bisnis-sahabat" />
          </div>
        </div>
      </section>
    </div>
  );
}
