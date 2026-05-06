import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Mengenal Perbedaan Mentega Wisjman dan Margarin Biasa | Ini Rasa",
  description: "Banyak yang bertanya, apa rahasia di balik tekstur lumer Nastar Ini Rasa? Jawabannya ada pada pemilihan bahan baku yang tidak kenal kompromi.",
  openGraph: {
    title: "Mengenal Perbedaan Mentega Wisjman dan Margarin Biasa",
    description: "Banyak yang bertanya, apa rahasia di balik tekstur lumer Nastar Ini Rasa? Jawabannya ada pada pemilihan bahan baku yang tidak kenal kompromi.",
    images: [
      {
        url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Nastar%20Wisjman%20Spesial.webp",
        width: 1200,
        height: 630,
        alt: "Mentega Wisjman vs Margarin",
      }
    ],
    type: "article",
  }
};

export default function ArtikelWisjman() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Nastar%20Wisjman%20Spesial.webp" 
            alt="Mentega Wisjman" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> Bahan Premium
            </span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 10 Maret 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 4 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Mengenal Perbedaan Mentega Wisjman dan Margarin Biasa
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Banyak yang bertanya, apa rahasia di balik tekstur lumer Nastar Ini Rasa? Jawabannya ada pada pemilihan bahan baku yang tidak kenal kompromi.
            </p>
            <p>
              Dalam dunia *baking*, lemak adalah kunci utama yang menentukan tekstur dan aroma kue kering. Dua jenis lemak yang paling sering digunakan adalah mentega (butter) dan margarin. Namun, tidak semua mentega diciptakan sama.
            </p>
            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Margarin vs Mentega Asli</h3>
            <p>
              Margarin terbuat dari lemak nabati (tumbuhan) dan air. Sifatnya lebih padat, membuat kue lebih kokoh dan tidak mudah hancur. Namun, margarin tidak memiliki aroma harum yang khas dan meninggalkan rasa *waxy* (seperti lilin) di langit-langit mulut.
            </p>
            <p>
              Mentega asli, terbuat dari lemak susu hewani (sapi). Mentega memberikan kelembutan yang luar biasa dan aroma susu yang sangat menggugah selera.
            </p>
            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Mengapa Harus Wisjman (Wijsman)?</h3>
            <p>
              Wisjman adalah merek *concentrated butter* (mentega kalengan) premium dari Belanda yang sudah melegenda sejak zaman kolonial. Wisjman memiliki kandungan lemak susu yang sangat tinggi dengan kadar air yang sangat rendah.
            </p>
            <p>
              Hasilnya? Nastar dan Kastengel yang dipanggang menggunakan Wisjman akan memiliki aroma harum yang tercium hingga ke luar ruangan, serta tekstur yang langsung *melt-in-the-mouth* (lumer di mulut) tanpa perlu banyak dikunyah.
            </p>
            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Di <strong>Ini Rasa</strong>, kami menolak menggunakan 100% margarin. Kue kering premium kami selalu menggunakan takaran mentega Wisjman yang melimpah demi menjaga kualitas dan kepuasan lidah pelanggan kami.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/mengenal-mentega-wisjman" />
          </div>
        </div>
      </section>
    </div>
  );
}