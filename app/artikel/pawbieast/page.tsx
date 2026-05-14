import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock, ExternalLink } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Pawbieast: Layanan Grooming Hewan Profesional | Ini Rasa",
  description: "Bagi para paw parents, menjaga kebersihan anjing kesayangan adalah kewajiban. Pawbieast menawarkan jasa grooming profesional.",
  openGraph: {
    title: "Pawbieast: Layanan Grooming Hewan Profesional",
    description: "Layanan grooming anjing profesional untuk hewan kesayangan Anda, direkomendasikan oleh Ini Rasa.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/pawbiest.webp", width: 1200, height: 630, alt: "Pawbieast" }],
    type: "article",
  }
};

export default function ArtikelPawbieast() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/pawbiest.webp" alt="Pawbieast" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Perawatan Hewan</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 14 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 3 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            PawBieast: Petshop, Grooming, Hotel, dan Daycare Terlengkap
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown mb-6">
              Bagi banyak dari kita, hewan peliharaan bukan sekadar hewan, melainkan bagian dari keluarga yang menemani keseharian kita. Oleh karena itu, memastikan mereka terawat dengan baik adalah prioritas utama.
            </p>
            <p className="mb-4">
              Bagi Anda para <em>paw parents</em>, menjaga kebersihan dan kenyamanan anjing kesayangan adalah sebuah kewajiban. Di sinilah sahabat kami, <strong>PawBieast</strong>, hadir untuk memberikan solusi perawatan anabul terbaik. PawBieast bukan sekadar petshop biasa, melainkan pusat layanan menyeluruh yang mencakup Petshop, Grooming, Hotel, dan Daycare.
            </p>
            <p className="mb-4">
              Mereka menawarkan layanan grooming profesional dan <em>haircut</em> yang didesain khusus agar anabul Anda tampil bersih, wangi, dan menggemaskan. Tidak punya waktu untuk mengantar peliharaan Anda ke lokasi? Jangan khawatir, PawBieast juga menyediakan layanan <strong>antar jemput</strong> yang praktis!
            </p>
            <p className="mb-6">
              Selain layanan perawatannya, PawBieast juga menyediakan berbagai produk berkualitas. Salah satu produk unggulan yang sangat direkomendasikan adalah <strong>Coconut Oil khusus untuk bulu anjing</strong>, yang diformulasikan khusus agar bulu anabul tetap lebat, halus, dan sehat berkilau. Percayakan perawatan anabul kesayangan Anda hanya pada ahlinya.
            </p>
            
            <div className="bg-brand-cream/30 border border-brand-sand/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden group mt-8">
               <h3 className="text-2xl font-serif font-bold text-brand-brown mb-3 mt-2">PawBieast</h3>
               <p className="text-base text-brand-brown/80 mb-6">Petshop, Grooming, Hotel, and Daycare. Dapatkan layanan antar jemput dan produk kesehatan seperti coconut oil untuk bulu anabul.</p>
               <a 
                 href="https://www.pawbieast.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-full font-bold hover:bg-brand-sage hover:text-brand-brown transition"
               >
                 Kunjungi Website PawBieast <ExternalLink className="w-4 h-4" />
               </a>
            </div>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-12 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Mari dukung sesama pelaku usaha! Setiap kunjungan dan dukungan Anda kepada bisnis-bisnis lokal ini sangat berarti bagi pertumbuhan komunitas wirausaha kita. 
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/pawbieast" />
          </div>
        </div>
      </section>
    </div>
  );
}
