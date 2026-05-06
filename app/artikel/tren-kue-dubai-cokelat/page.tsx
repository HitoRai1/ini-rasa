import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "5 Kreasi Olahan Kue Dubai Cokelat yang Sedang Viral | Ini Rasa",
  description: "Kue Dubai Cokelat tengah menjadi buah bibir di media sosial. Dari layer pistachio hingga cokelat belgia, inilah tren rasa yang wajib kamu coba.",
  openGraph: {
    title: "5 Kreasi Olahan Kue Dubai Cokelat yang Sedang Viral",
    description: "Tren kue Dubai Cokelat dengan layer pistachio dan cokelat premium yang sedang booming.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/dubai%20cokelat.webp", width: 1200, height: 630, alt: "Dubai Cokelat" }],
    type: "article",
  }
};

const kreasi = [
  { no: "1", title: "Dubai Cokelat Klasik (Pistachio Original)", desc: "Versi asli dengan cokelat belgia dark 70%, isian pasta pistachio impor, dan kataifi renyah — standar emas yang sulit dilewati." },
  { no: "2", title: "Dubai Cokelat White Strawberry", desc: "Lapisan cokelat putih premium dengan isian selai stroberi segar berpadu kataifi. Manis, asam, dan sangat fotogenik." },
  { no: "3", title: "Dubai Cokelat Matcha", desc: "Cokelat putih dengan pasta matcha premium asal Uji, Jepang. Rasa pahit-manis yang seimbang untuk pencinta matcha." },
  { no: "4", title: "Dubai Cokelat Hazelnut", desc: "Pasta hazelnut creamy ala Ferrero Rocher dilapisi cokelat susu Belgia. Favorit semua kalangan usia." },
  { no: "5", title: "Dubai Cokelat Salted Caramel", desc: "Karamel asin yang mengalir saat dipotong, dipadukan kataifi renyah. Kontras manis-gurih yang adiktif!" },
];

export default function ArtikelDubaiCokelat() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/dubai%20cokelat.webp" alt="Dubai Cokelat" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Tren</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 5 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 4 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            5 Kreasi Olahan Kue Dubai Cokelat yang Sedang Viral
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Fenomena Dubai Chocolate Bar telah mengubah cara dunia menikmati cokelat. Kini giliran Indonesia ikut merasakannya.
            </p>
            <p>
              Berawal dari video viral TikTok yang menampilkan cokelat batangan berisi <em>knafeh</em> dan pasta pistachio hijau lebat, tren Dubai Cokelat langsung menyebar ke seluruh dunia termasuk Indonesia. Di Ini Rasa, kami menghadirkan kreasi ini dengan sentuhan premium.
            </p>
            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">5 Kreasi Wajib Dicoba</h3>
            <div className="space-y-4">
              {kreasi.map((item) => (
                <div key={item.no} className="flex gap-5 items-start bg-brand-cream/30 p-5 rounded-2xl">
                  <span className="text-3xl font-serif font-bold text-brand-sage shrink-0">{item.no}</span>
                  <div>
                    <p className="font-bold text-brand-brown mb-1">{item.title}</p>
                    <p className="text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Penasaran ingin mencicipi Dubai Cokelat versi <strong>Ini Rasa</strong>? Cek menu kami atau hubungi via WhatsApp. Stok sangat terbatas karena dibuat fresh setiap harinya!
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/tren-kue-dubai-cokelat" />
          </div>
        </div>
      </section>
    </div>
  );
}
