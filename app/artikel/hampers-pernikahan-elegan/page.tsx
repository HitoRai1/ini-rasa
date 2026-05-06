import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Tips Merencanakan Hampers Pernikahan yang Elegan dan Berkesan | Ini Rasa",
  description: "Hampers pernikahan bukan hanya sekedar souvenir. Ini adalah kesan pertama yang akan selalu diingat tamu undangan. Simak tipsnya di sini.",
  openGraph: {
    title: "Tips Merencanakan Hampers Pernikahan yang Elegan dan Berkesan",
    description: "Panduan lengkap merencanakan hampers pernikahan agar berkesan dan sesuai tema.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/medina%20royal.webp", width: 1200, height: 630, alt: "Hampers Pernikahan" }],
    type: "article",
  }
};

const tips = [
  { no: "01", title: "Selaraskan dengan Tema Pernikahan", desc: "Jika tema pernikahan Anda adalah rustic, pilih kemasan kraft paper cokelat dengan tali rami. Jika modern-elegan, gunakan kotak hitam matte dengan pita emas." },
  { no: "02", title: "Tentukan Anggaran Per Hampers Sejak Awal", desc: "Hitung jumlah tamu dan tentukan budget per orang. Ini membantu Anda memilih kombinasi produk yang tepat tanpa kehabisan anggaran di tengah jalan." },
  { no: "03", title: "Pilih Produk yang Tahan Lama", desc: "Kue kering seperti Nastar, Kastengel, dan Putri Salju adalah pilihan aman — tahan 2-4 minggu, tidak mudah rusak meski dibawa jauh." },
  { no: "04", title: "Personalisasi dengan Label Khusus", desc: "Tambahkan stiker atau kartu berisi nama kedua mempelai, tanggal pernikahan, dan ucapan singkat. Sentuhan kecil ini membuat hampers terasa jauh lebih istimewa." },
  { no: "05", title: "Pesan Jauh-Jauh Hari", desc: "Untuk jumlah 100+ hampers, pesan minimal 2 minggu sebelum hari H. Ini memberi waktu tim kami untuk menyiapkan semuanya dengan sempurna tanpa terburu-buru." },
];

export default function ArtikelHampersPernikahan() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/medina%20royal.webp" alt="Hampers Pernikahan" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Inspirasi</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 1 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 4 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Tips Merencanakan Hampers Pernikahan yang Elegan dan Berkesan
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Di antara begitu banyak detail pernikahan yang harus dipikirkan, hampers adalah sentuhan terakhir yang menentukan kesan abadi di hati para tamu.
            </p>
            <p>
              Hampers pernikahan atau <em>wedding souvenir</em> adalah ungkapan terima kasih yang nyata kepada semua orang yang telah menyempatkan hadir di hari paling bahagia Anda. Memilih hampers yang tepat bisa terasa membingungkan, tetapi dengan panduan yang benar, prosesnya bisa sangat menyenangkan.
            </p>
            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">5 Tips Penting dari Ini Rasa</h3>
            <div className="space-y-5">
              {tips.map((item) => (
                <div key={item.no} className="flex gap-5 items-start">
                  <span className="text-3xl font-serif font-bold text-brand-sage/40 shrink-0 leading-none">{item.no}</span>
                  <div>
                    <p className="font-bold text-brand-brown">{item.title}</p>
                    <p className="text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Ini Rasa melayani pesanan hampers pernikahan untuk 50 hingga 1.000+ pax. Hubungi kami sekarang untuk mendapatkan penawaran spesial dan konsultasi gratis tentang paket yang paling sesuai dengan tema pernikahan Anda.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/hampers-pernikahan-elegan" />
          </div>
        </div>
      </section>
    </div>
  );
}
