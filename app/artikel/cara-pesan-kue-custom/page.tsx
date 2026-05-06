import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Kue Ulang Tahun Custom: Cara Pesan dan Apa yang Bisa Dikreasikan | Ini Rasa",
  description: "Ingin kue ulang tahun yang unik dan personal? Dari desain karakter hingga foto edible print, kami jelaskan semua pilihan yang bisa kamu pesan di Ini Rasa.",
  openGraph: {
    title: "Kue Ulang Tahun Custom: Cara Pesan dan Apa yang Bisa Dikreasikan",
    description: "Panduan lengkap memesan kue ulang tahun custom di Ini Rasa, dari pilihan desain hingga cara pemesanan.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Strawberry%20Shortcake.webp", width: 1200, height: 630, alt: "Kue Custom Ini Rasa" }],
    type: "article",
  }
};

export default function ArtikelKueCustom() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Strawberry%20Shortcake.webp" alt="Kue Custom Ulang Tahun" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Tips & Trik</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 15 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 4 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Kue Ulang Tahun Custom: Cara Pesan dan Apa yang Bisa Dikreasikan
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Kue ulang tahun bukan sekadar makanan penutup — ia adalah simbol cinta, perhatian, dan kenangan yang akan diingat seumur hidup.
            </p>
            <p>
              Semakin banyak orang yang menginginkan kue ulang tahun yang benar-benar personal dan mencerminkan kepribadian si penerima. Di Ini Rasa, kami menerima pesanan kue custom dengan berbagai tingkat kreativitas — dari yang simpel hingga yang sangat detail.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Apa Saja yang Bisa Dikustomisasi?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🎨", title: "Desain & Tema", desc: "Karakter animasi favorit, tema minimalis, floral, hingga tema profesi seperti dokter, guru, atau arsitek." },
                { icon: "📸", title: "Foto Edible Print", desc: "Cetak foto di atas lapisan gula khusus yang bisa dimakan. Cocok untuk kenangan ulang tahun ke-50, wisuda, atau anniversary." },
                { icon: "🍫", title: "Rasa Kue", desc: "Red velvet, tiramisu, dark chocolate, matcha, atau strawberry — pilih rasa favorit si penerima." },
                { icon: "📏", title: "Ukuran & Porsi", desc: "Dari personal (diameter 15cm) hingga ukuran besar untuk 30–50 orang. Bisa bertingkat (tiered cake) pula!" },
              ].map((item) => (
                <div key={item.title} className="bg-brand-cream/40 p-5 rounded-2xl">
                  <p className="text-2xl mb-2">{item.icon}</p>
                  <p className="font-bold text-brand-brown mb-1">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Cara Memesan Kue Custom di Ini Rasa</h3>
            <div className="space-y-4">
              {[
                { step: "01", title: "Hubungi Kami via WhatsApp", desc: "Kirimkan pesan ke nomor WhatsApp kami dengan menyebutkan tanggal acara, jumlah porsi, dan referensi desain yang kamu inginkan." },
                { step: "02", title: "Diskusi & Penawaran Harga", desc: "Tim kami akan mengirimkan estimasi harga dan mendiskusikan detail desain bersama kamu. Revisi desain bisa dilakukan sebelum produksi dimulai." },
                { step: "03", title: "Konfirmasi & DP", desc: "Setelah desain disetujui, lakukan pembayaran uang muka (DP) minimal 50% sebagai tanda jadi pesanan." },
                { step: "04", title: "Pengambilan atau Pengiriman", desc: "Kue siap diambil di toko atau dikirim ke alamat Anda pada hari H sesuai kesepakatan." },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <span className="text-3xl font-serif font-bold text-brand-sage/40 shrink-0 leading-none">{item.step}</span>
                  <div>
                    <p className="font-bold text-brand-brown">{item.title}</p>
                    <p className="text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                <strong>Tips Penting:</strong> Pesan kue custom minimal <strong>3–5 hari sebelum</strong> acara berlangsung agar tim kami punya cukup waktu untuk mewujudkan desain impianmu dengan sempurna.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/cara-pesan-kue-custom" />
          </div>
        </div>
      </section>
    </div>
  );
}
