import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Di Balik Dapur Ini Rasa: Dedikasi Menjaga Kualitas | Ini Rasa",
  description: "Mengintip rutinitas pagi para baker kami. Dari menimbang tepung hingga memanggang adonan pertama, semuanya dilakukan dengan cinta.",
  openGraph: {
    title: "Di Balik Dapur Ini Rasa: Dedikasi Menjaga Kualitas",
    description: "Mengintip rutinitas pagi para baker kami. Dari menimbang tepung hingga memanggang adonan pertama, semuanya dilakukan dengan cinta dan ketelitian.",
    images: [
      {
        url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp",
        width: 1200,
        height: 630,
        alt: "Dapur Ini Rasa",
      }
    ],
    type: "article",
  }
};

export default function ArtikelDapur() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp" 
            alt="Dapur Ini Rasa" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> Cerita Kami
            </span>
            <span className="flex items-center gap-1 text-white/90">
              <Calendar className="w-4 h-4" /> 28 Februari 2026
            </span>
            <span className="flex items-center gap-1 text-white/90">
              <Clock className="w-4 h-4" /> 5 Menit Membaca
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Di Balik Dapur Ini Rasa: Dedikasi Menjaga Kualitas
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Mengintip rutinitas pagi para baker kami. Dari menimbang tepung hingga memanggang adonan pertama, semuanya dilakukan dengan cinta dan ketelitian.
            </p>
            <p>
              Setiap harinya, aroma harum dari mentega asli, vanila, dan panggangan kue memenuhi seluruh sudut dapur Ini Rasa. Bagi kami, memanggang kue bukan sekadar mengaduk bahan menjadi satu, melainkan sebuah seni yang membutuhkan kesabaran, resep yang konsisten, dan bahan yang tidak kenal kompromi.
            </p>
            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Dimulai Sebelum Mentari Terbit</h3>
            <p>
              Proses *baking* selalu dimulai di pagi hari. Kami memastikan setiap bahan kering ditimbang dengan akurasi gram, sementara mentega dan telur dibiarkan mencapai suhu ruang yang sempurna agar adonan tidak pecah. Suhu ruangan dapur pun selalu dijaga agar adonan kue kering tidak mudah meleleh sebelum masuk ke dalam oven.
            </p>
            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Pemilihan Bahan Tanpa Kompromi</h3>
            <p>
              Kunci utama dari rasa "premium" yang Anda cecap di setiap gigitan adalah bahan-bahannya. Kami menggunakan *concentrated butter* berkualitas, cokelat couverture yang kaya rasa, hingga vanila murni (bukan esens). Setiap batch kue selalu diuji rasanya (*taste test*) sebelum akhirnya dikemas untuk Anda.
            </p>
            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                <strong>Janji Kami:</strong> Di <strong>Ini Rasa</strong>, kami tidak pernah mengambil jalan pintas. Jika hasilnya tidak sesuai standar kami, maka kue tersebut tidak akan pernah sampai di tangan pelanggan. Kepuasan Anda adalah detak jantung dapur kami.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/di-balik-dapur-ini-rasa" />
          </div>
        </div>
      </section>
    </div>
  );
}
