import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock, ExternalLink } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Kicau Cafe: Tempat Nongkrong Nyaman Sahabat Ini Rasa | Ini Rasa",
  description: "Sedang mencari tempat nongkrong asyik dengan suasana nyaman? Kicau Cafe menawarkan sajian kopi dan makanan yang pas.",
  openGraph: {
    title: "Kicau Cafe: Tempat Nongkrong Nyaman Sahabat Ini Rasa",
    description: "Nikmati kopi dan suasana nyaman di Kicau Cafe, rekomendasi sahabat Ini Rasa.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/kicaucafe.webp", width: 1200, height: 630, alt: "Kicau Cafe" }],
    type: "article",
  }
};

export default function ArtikelKicauCafe() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/kicaucafe.webp" alt="Kicau Cafe" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Cafe & Hangout</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 14 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 3 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Kicau Cafe: Tempat Nongkrong Asyik dengan Kopi Nusantara
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown mb-6">
              Di Ini Rasa, kami percaya bahwa kesuksesan akan terasa lebih manis jika dinikmati bersama komunitas. Itulah mengapa kami sangat mendukung pertumbuhan bisnis lokal, salah satunya adalah sahabat kami, Kicau Cafe.
            </p>
            <p className="mb-4">
              <strong>"Kicau dulu, baru ngopi."</strong> Begitulah semboyan yang melekat pada tempat singgah yang satu ini. Terletak di area Kemang yang strategis, Kicau Cafe adalah tempat singgah yang sempurna buat kamu yang suka cerita pelan-pelan. Suasananya yang estetik dan menenangkan sangat cocok untuk tempat nongkrong asik, baik saat bekerja, bersantai sendirian, maupun bercengkrama bersama teman-teman.
            </p>
            <p className="mb-4">
              Daya tarik utama dari Kicau Cafe adalah dedikasi mereka terhadap kualitas kopi. Mereka menyajikan <strong>specialty coffee</strong> dengan menggunakan 100% biji kopi pilihan dari berbagai pelosok Nusantara (seperti Aceh Gayo dan Toraja Single Origin). Antusiasme para pecinta kopi terbukti dari pencapaian mereka yang menyajikan hingga 12.000+ cangkir setiap bulannya!
            </p>
            <p className="mb-6">
              Tak hanya itu, pengalaman ngopi di sini juga didukung dengan pelayanan yang luar biasa, sehingga Kicau Cafe berhasil mendapatkan rating gemilang <strong>4.9 di Google</strong>. Sambil menyeruput seduhan kopi yang nikmat, kamu bisa menikmati aneka camilan rumahan yang siap memanjakan lidah.
            </p>
            
            <div className="bg-brand-cream/30 border border-brand-sand/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden group mt-8">
               <h3 className="text-2xl font-serif font-bold text-brand-brown mb-3 mt-2">Kicau Cafe</h3>
               <p className="text-base text-brand-brown/80 mb-2"><strong>Alamat:</strong> Jl. Kemang Raya No. 12, Kemang, Jakarta Selatan 12730, DKI Jakarta, Indonesia</p>
               <p className="text-base text-brand-brown/80 mb-6">Nikmati sajian kopi specialty nusantara dan camilan rumahan untuk menemani waktu berkualitasmu.</p>
               <a 
                 href="https://kicaucafe.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-full font-bold hover:bg-brand-sage hover:text-brand-brown transition"
               >
                 Kunjungi Website Kicau Cafe <ExternalLink className="w-4 h-4" />
               </a>
            </div>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-12 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Mari dukung sesama pelaku usaha! Setiap kunjungan dan dukungan Anda kepada bisnis-bisnis lokal ini sangat berarti bagi pertumbuhan komunitas wirausaha kita. 
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/kicau-cafe" />
          </div>
        </div>
      </section>
    </div>
  );
}
