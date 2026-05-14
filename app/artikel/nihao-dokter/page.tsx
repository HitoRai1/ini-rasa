import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock, ExternalLink } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Nihao Dokter: Layanan Kesehatan Online Terpercaya | Ini Rasa",
  description: "Layanan konsultasi kesehatan online yang praktis. Nihao Dokter memberikan kemudahan untuk berkonsultasi secara virtual.",
  openGraph: {
    title: "Nihao Dokter: Layanan Kesehatan Online Terpercaya",
    description: "Konsultasi dokter secara virtual dari mana saja dan kapan saja dengan Nihao Dokter.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/nihaodokter.webp", width: 1200, height: 630, alt: "Nihao Dokter" }],
    type: "article",
  }
};

export default function ArtikelNihaoDokter() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/nihaodokter.webp" alt="Nihao Dokter" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Layanan Kesehatan</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 14 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 3 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Nihao Dokter: Sehat itu Mudah, Gak Pake Antre
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown mb-6">
              Di Ini Rasa, kami menyajikan aneka hidangan manis yang lezat untuk melengkapi hari-harimu. Namun, kami juga peduli dengan keseimbangan dan kesehatan para pelanggan setia kami!
            </p>
            <p className="mb-4">
              Mengonsumsi makanan manis tentu menyenangkan, tapi penting juga untuk rutin mengecek kesehatanmu. Itulah mengapa kami merekomendasikan <strong>Nihao Dokter</strong>, platform kesehatan digital terpercaya yang menjadi solusi kesehatan digital No. 1 untuk masa depan Indonesia.
            </p>
            <p className="mb-4">
              Sesuai dengan slogannya, <strong>"Sehat itu Mudah, Gak Pake Antre"</strong>. Kini kamu tidak perlu lagi menghabiskan waktu berjam-jam mengantre di klinik atau rumah sakit. Konsultasi kesehatan jadi jauh lebih aman, dan transaksi dijamin terjamin keamanannya.
            </p>
            <p className="mb-6">
              Nihao Dokter menyediakan layanan unggulan seperti <strong>Chat Dokter</strong> langsung dari ponselmu dengan lebih dari <strong>500+ dokter aktif</strong> yang siap melayanimu kapan saja. Selain itu, kamu juga bisa membeli obat-obatan dan vitamin yang langsung diantar ke rumah melalui fitur <strong>Nihao Shop</strong>. Jadi, nikmati sajian manis dari Ini Rasa dengan tenang, karena layanan kesehatan terbaik kini ada dalam genggamanmu!
            </p>
            
            <div className="bg-brand-cream/30 border border-brand-sand/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden group mt-8">
               <h3 className="text-2xl font-serif font-bold text-brand-brown mb-3 mt-2">Nihao Dokter</h3>
               <p className="text-base text-brand-brown/80 mb-6">Platform kesehatan digital terpercaya. Konsultasi aman, transaksi terjamin, dengan 500+ dokter aktif siap membantu Anda.</p>
               <a 
                 href="https://nihaodokter.web.id" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-full font-bold hover:bg-brand-sage hover:text-brand-brown transition"
               >
                 Kunjungi Website Nihao Dokter <ExternalLink className="w-4 h-4" />
               </a>
            </div>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-12 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Mari dukung sesama pelaku usaha! Setiap kunjungan dan dukungan Anda kepada bisnis-bisnis lokal ini sangat berarti bagi pertumbuhan komunitas wirausaha kita. 
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/nihao-dokter" />
          </div>
        </div>
      </section>
    </div>
  );
}
