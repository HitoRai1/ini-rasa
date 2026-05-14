import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock, ExternalLink } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Deniffer's Cookies: Alternatif Kue Kering Lezat | Ini Rasa",
  description: "Jika Anda mencari variasi cookies yang berbeda, Deniffer's Cookies menawarkan beragam pilihan kue kering lezat yang wajib Anda cicipi.",
  openGraph: {
    title: "Deniffer's Cookies: Alternatif Kue Kering Lezat",
    description: "Rekomendasi bisnis sahabat Ini Rasa yang menyajikan aneka kue kering pilihan.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/dennifercookies.webp", width: 1200, height: 630, alt: "Deniffer's Cookies" }],
    type: "article",
  }
};

export default function ArtikelDeniffers() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/dennifercookies.webp" alt="Deniffer's Cookies" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Bakery & Desserts</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 14 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 3 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Deniffer's Cookies: The No #1 Healthy Cookies in Indonesia
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown mb-6">
              Sebagai sesama pelaku usaha di industri kuliner manis, Ini Rasa sangat menghargai inovasi dan kreativitas luar biasa. Itulah mengapa kami dengan bangga merekomendasikan karya luar biasa dari sahabat kami ini!
            </p>
            <p className="mb-4">
              Jika Anda sedang mencari alternatif camilan manis yang tetap sehat, <strong>Deniffer's Cookies</strong> adalah jawabannya. Mereka dengan bangga mengklaim diri sebagai <strong>The No #1 Healthy Cookies in Indonesia</strong>, menyajikan variasi cookies premium yang dibuat dengan resep spesial dan bahan-bahan pilihan bernutrisi tinggi.
            </p>
            <p className="mb-4">
              Yang membuat Deniffer's Cookies semakin istimewa adalah dedikasi mereka pada kualitas <em>homemade</em>. Setiap keping cookies dipanggang dengan penuh ketelitian layaknya buatan dapur rumah sendiri, menjamin kehangatan dan rasa yang autentik di setiap gigitannya.
            </p>
            <p className="mb-6">
              Kabar baiknya? Semua kelezatan dan manfaat kesehatan ini bisa Anda nikmati tanpa harus menguras kantong! Deniffer's Cookies menawarkan harga yang sangat terjangkau, <strong>cuma 20 ribuan</strong> saja. Sangat cocok dijadikan teman ngopi atau stok camilan sehat di rumah tangga Anda.
            </p>
            
            <div className="bg-brand-cream/30 border border-brand-sand/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden group mt-8">
               <h3 className="text-2xl font-serif font-bold text-brand-brown mb-3 mt-2">Deniffer's Cookies</h3>
               <p className="text-base text-brand-brown/80 mb-6">Nikmati sajian cookies homemade sehat dengan harga sangat terjangkau, cuma 20 ribuan. The No #1 Healthy Cookies in Indonesia.</p>
               <a 
                 href="https://www.denifferscookies.web.id" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-full font-bold hover:bg-brand-sage hover:text-brand-brown transition"
               >
                 Kunjungi Website Deniffer's <ExternalLink className="w-4 h-4" />
               </a>
            </div>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-12 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Mari dukung sesama pelaku usaha! Setiap kunjungan dan dukungan Anda kepada bisnis-bisnis lokal ini sangat berarti bagi pertumbuhan komunitas wirausaha kita. 
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/deniffers-cookies" />
          </div>
        </div>
      </section>
    </div>
  );
}
