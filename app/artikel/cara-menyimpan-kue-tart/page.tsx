import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";

export default function ArtikelDetail() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      
      {/* HEADER GAMBAR BESAR */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Strawberry%20Shortcake.webp" 
            alt="Cara Menyimpan Kue Tart" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> Tips & Trik
            </span>
            <span className="flex items-center gap-1 text-white/90">
              <Calendar className="w-4 h-4" /> 14 Maret 2026
            </span>
            <span className="flex items-center gap-1 text-white/90">
              <Clock className="w-4 h-4" /> 3 Menit Membaca
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Cara Menyimpan Kue Tart Agar Tetap Lembut Berhari-hari
          </h1>
        </div>
      </section>

      {/* ISI ARTIKEL */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-12">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
          
          <p className="font-bold text-xl text-brand-brown">
            Pernahkah kamu membeli kue tart yang lezat, namun teksturnya menjadi keras dan kering setelah disimpan di kulkas? Kunci utamanya ada pada cara penyimpanan yang tepat agar kelembapannya terjaga.
          </p>

          <p>
            Banyak orang beranggapan bahwa memasukkan kue langsung ke dalam kulkas beserta kardusnya adalah cara yang benar. Padahal, kardus kertas justru menyerap kelembapan kue, membuat sponge cake menjadi kering dan seret saat dimakan keesokan harinya.
          </p>

          <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">1. Gunakan Wadah Kedap Udara (Airtight Container)</h3>
          <p>
            Ini adalah aturan emas. Jika kue sudah dipotong, bagian sponge yang terbuka akan langsung berinteraksi dengan udara dingin kulkas. Pindahkan sisa kue ke dalam wadah plastik atau kaca yang kedap udara. Jika kue terlalu tinggi, kamu bisa menaruh kue di penutup wadahnya, lalu jadikan mangkuk wadahnya sebagai penutup (terbalik).
          </p>

          <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">2. Lapisi Bagian yang Terpotong</h3>
          <p>
            Jika kamu tidak memiliki wadah kedap udara yang cukup besar, kamu bisa menempelkan selembar plastik wrap (cling film) atau selembar roti tawar menempel langsung pada bagian sponge cake yang terbuka. Roti tawar akan mengering sebagai "tumbal", sementara kue tart-mu tetap lembap di dalam.
          </p>

          <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">3. Jauhkan dari Makanan Berbau Tajam</h3>
          <p>
            Mentega dan krim pada kue sangat mudah menyerap aroma di sekitarnya. Jangan letakkan kue tart berdekatan dengan bawang, ikan, atau makanan berbau tajam lainnya di dalam kulkas.
          </p>

          <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">4. Suhu Ruang Sebelum Disajikan</h3>
          <p>
            Kue tart yang menggunakan buttercream atau ganache akan mengeras di dalam kulkas. Keluarkan kue sekitar 30-45 menit sebelum disajikan agar krimnya kembali lembut dan lumer di mulut. Kue yang dingin juga membuat rasa manisnya kurang "keluar" di lidah.
          </p>

          <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
            <p className="italic text-brand-brown">
              <strong>Tips Tambahan:</strong> Di <strong>Ini Rasa</strong>, kami selalu menggunakan bahan pelembap alami seperti simple syrup pada setiap lapisan kue kami. Ini membuat kue kami bertahan lebih lama dan tetap lembut meskipun disimpan di suhu dingin.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}