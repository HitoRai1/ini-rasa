import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "5 Alasan Mengapa Hampers Adalah Hadiah Terbaik | Ini Rasa",
  description: "Bukan sekadar bingkisan, hampers adalah representasi dari apresiasi dan rasa hormat. Temukan alasannya di sini.",
  openGraph: {
    title: "5 Alasan Mengapa Hampers Adalah Hadiah Terbaik untuk Kolega",
    description: "Bukan sekadar bingkisan, hampers adalah representasi dari apresiasi dan rasa hormat. Temukan alasan mengapa hampers selalu menjadi pilihan utama di hari raya.",
    images: [
      {
        url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/medina%20royal.webp",
        width: 1200,
        height: 630,
        alt: "Hampers Premium Ini Rasa",
      }
    ],
    type: "article",
  }
};

export default function ArtikelHampers() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/medina%20royal.webp" 
            alt="Hampers Premium" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> Inspirasi
            </span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 05 Maret 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 3 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            5 Alasan Mengapa Hampers Adalah Hadiah Terbaik untuk Kolega
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Bukan sekadar bingkisan, hampers adalah representasi dari apresiasi dan rasa hormat. Temukan alasan mengapa hampers selalu menjadi pilihan utama di hari raya atau momen spesial.
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">1. Representasi Profesionalisme dan Perhatian</h3>
            <p>
              Mengirimkan bingkisan yang dikemas secara elegan menunjukkan bahwa Anda meluangkan waktu dan anggaran khusus untuk menghargai hubungan bisnis. Ini memberikan impresi profesional sekaligus hangat.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">2. Dinikmati Bersama Keluarga</h3>
            <p>
              Berbeda dengan barang koleksi pribadi, hampers makanan (terutama kue kering premium) dirancang untuk dibagikan. Saat kolega Anda membawa hampers ke rumah, bingkisan tersebut akan dinikmati bersama keluarganya, menciptakan memori manis yang secara tidak langsung dikaitkan dengan nama Anda atau perusahaan Anda.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">3. Tidak Pernah Salah (Universally Liked)</h3>
            <p>
              Memilih kado barang sangat berisiko karena selera setiap orang berbeda-beda. Namun, hampir semua orang menyukai sajian manis berkualitas. Kue kering premium adalah "bahasa cinta" universal yang selalu disambut dengan senyuman.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">4. Estetika yang Memanjakan Mata</h3>
            <p>
              Hampers modern dirancang bukan hanya soal isi, tapi juga *packaging* (kemasan). Kotak kayu berukir, pita satin, dan kartu ucapan kustom memberikan pengalaman *unboxing* yang mewah dan eksklusif bagi penerimanya.
            </p>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Percayakan kebutuhan *corporate gift* Anda kepada <strong>Ini Rasa</strong>. Kami menyediakan layanan kustomisasi hampers lengkap dengan logo perusahaan untuk memastikan bingkisan Anda meninggalkan kesan tak terlupakan.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/5-alasan-hampers-terbaik" />
          </div>
        </div>
      </section>
    </div>
  );
}