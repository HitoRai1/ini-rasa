import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Panduan Memilih Hampers yang Tepat Sesuai Anggaran | Ini Rasa",
  description: "Bingung memilih hampers yang berkesan tanpa harus menguras kantong? Kami rangkumkan panduan lengkap memilih hampers dari budget hemat hingga premium.",
  openGraph: {
    title: "Panduan Memilih Hampers yang Tepat Sesuai Anggaran",
    description: "Panduan lengkap memilih hampers dari budget hemat hingga premium untuk berbagai momen.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp", width: 1200, height: 630, alt: "Hampers Ini Rasa" }],
    type: "article",
  }
};

export default function ArtikelPanduanHampers() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp" alt="Panduan Hampers" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Panduan</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 20 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 5 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Panduan Memilih Hampers yang Tepat Sesuai Anggaran
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Hampers yang berkesan tidak harus selalu yang paling mahal. Yang terpenting adalah ketulusan dan ketepatan dalam memilihnya.
            </p>
            <p>
              Musim perayaan selalu membawa dilema yang sama: memilih hampers yang tepat untuk orang-orang terkasih. Terlalu murah terasa kurang berkesan, terlalu mahal membebani kantong. Lantas, bagaimana cara menemukan titik tengah yang sempurna?
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">1. Tentukan Dulu Tujuannya</h3>
            <p>
              Hampers untuk <em>atasan kantor</em> tentu berbeda dengan hampers untuk <em>teman dekat</em>. Untuk relasi profesional, pilihlah paket yang terlihat elegan dan formal — biasanya berisi produk premium dalam kemasan mewah. Untuk keluarga atau sahabat, sentuhan personal lebih diutamakan daripada kemasan.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">2. Panduan Budget Hampers</h3>
            <div className="space-y-4">
              <div className="bg-brand-cream/50 p-5 rounded-2xl border-l-4 border-brand-sage">
                <p className="font-bold text-brand-brown mb-1">💰 Budget Rp 100.000 – Rp 250.000</p>
                <p>Pilih hampers berisi kue kering signature seperti Nastar Wisjman, Kastengel, atau Putri Salju dalam toples cantik. Simpel namun tetap berkesan dan lezat.</p>
              </div>
              <div className="bg-brand-cream/50 p-5 rounded-2xl border-l-4 border-brand-sage">
                <p className="font-bold text-brand-brown mb-1">💎 Budget Rp 250.000 – Rp 500.000</p>
                <p>Kombinasikan kue kering dengan satu buah signature cake ukuran personal. Di kisaran ini, penerima akan merasa benar-benar diapresiasi.</p>
              </div>
              <div className="bg-brand-cream/50 p-5 rounded-2xl border-l-4 border-brand-sage">
                <p className="font-bold text-brand-brown mb-1">👑 Budget Rp 500.000+</p>
                <p>Paket hampers premium dengan ragam produk pilihan dalam kemasan *gift box* eksklusif. Cocok untuk klien VIP, orang tua, atau mitra bisnis penting.</p>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">3. Pertimbangkan Ketahanan Produk</h3>
            <p>
              Pastikan produk dalam hampers memiliki masa simpan yang cukup panjang, terutama jika akan dikirim ke luar kota. Kue kering umumnya tahan 2–4 minggu, sedangkan kue basah hanya bertahan 2–3 hari di suhu ruang. Jika pengiriman membutuhkan waktu lama, prioritaskan kue kering atau produk yang bisa disimpan dalam lemari es.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">4. Personalisasi adalah Kunci</h3>
            <p>
              Tambahkan kartu ucapan tulisan tangan atau pilih produk favorit si penerima. Di Ini Rasa, kami menyediakan layanan <strong>kustomisasi hampers</strong> — kamu bisa memilih sendiri kombinasi kue yang ingin dimasukkan sesuai selera penerima dan anggaranmu.
            </p>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Tidak yakin mana yang terbaik? <strong>Hubungi tim Ini Rasa</strong> via WhatsApp, dan kami dengan senang hati akan membantu merekomendasikan paket hampers yang paling sesuai dengan kebutuhan dan anggaranmu.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/panduan-memilih-hampers" />
          </div>
        </div>
      </section>
    </div>
  );
}
