import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock, ExternalLink } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Zaffrino: Restoran Fine Dining Italia Autentik | Ini Rasa",
  description: "Mencari tempat yang sempurna untuk romantic dinner atau merayakan momen spesial? Zaffrino menyajikan pengalaman bersantap malam ala Italia yang autentik.",
  openGraph: {
    title: "Zaffrino: Restoran Fine Dining Italia Autentik",
    description: "Suasana elegan dipadukan dengan hidangan pasta dan wine terbaik, hanya di Zaffrino.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/zaffrino.webp", width: 1200, height: 630, alt: "Zaffrino" }],
    type: "article",
  }
};

export default function ArtikelZaffrino() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/zaffrino.webp" alt="Zaffrino" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Fine Dining</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 14 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 3 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Zaffrino: A Taste of La Dolce Vita di Atas Rooftop
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown mb-6">
              Momen manis terkadang membutuhkan tempat yang tak terlupakan. Kami di Ini Rasa merekomendasikan salah satu destinasi bersantap malam favorit kami: Zaffrino.
            </p>
            <p className="mb-4">
              Mencari tempat yang sempurna untuk <em>romantic dinner</em> atau merayakan momen spesial bersama pasangan tercinta? <strong>Zaffrino</strong> adalah jawabannya. Mengusung konsep <strong>"A Taste of La Dolce Vita"</strong>, Zaffrino membawa Anda merasakan nikmatnya kehidupan yang manis ala Italia tanpa harus pergi jauh dari hiruk pikuk kota.
            </p>
            <p className="mb-4">
              Daya tarik utama Zaffrino terletak pada lokasinya yang berada di atas <strong>rooftop mewah</strong>, memberikan pemandangan langit malam yang menakjubkan berbalut kerlap-kerlip lampu kota. Suasana elegan dan romantis sangat kental terasa begitu Anda melangkahkan kaki ke dalamnya.
            </p>
            <p className="mb-6">
              Tentu saja, pemandangan indah tak akan lengkap tanpa hidangan yang memanjakan lidah. Zaffrino menyajikan aneka <strong>makanan Italia autentik</strong>, mulai dari pizza dengan adonan yang dipanggang sempurna, pasta yang *al dente*, hingga berbagai pilihan <em>wine</em> berkualitas premium. Nikmati pengalaman bersantap yang magis dan tak terlupakan hanya di Zaffrino.
            </p>
            
            <div className="bg-brand-cream/30 border border-brand-sand/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden group mt-8">
               <h3 className="text-2xl font-serif font-bold text-brand-brown mb-3 mt-2">Zaffrino</h3>
               <p className="text-base text-brand-brown/80 mb-6">A Taste of La Dolce Vita. Rasakan kemewahan kuliner Italia autentik yang disajikan di atas rooftop elegan dengan pemandangan kota.</p>
               <a 
                 href="https://www.zaffrino.site/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-full font-bold hover:bg-brand-sage hover:text-brand-brown transition"
               >
                 Kunjungi Website Zaffrino <ExternalLink className="w-4 h-4" />
               </a>
            </div>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-12 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Mari dukung sesama pelaku usaha! Setiap kunjungan dan dukungan Anda kepada bisnis-bisnis lokal ini sangat berarti bagi pertumbuhan komunitas wirausaha kita. 
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/zaffrino" />
          </div>
        </div>
      </section>
    </div>
  );
}
