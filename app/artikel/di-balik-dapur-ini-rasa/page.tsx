import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";

export default function ArtikelDapur() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp" 
            alt="Dapur Ini Rasa" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> Cerita Kami
            </span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 28 Februari 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 5 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Di Balik Dapur Ini Rasa: Dedikasi Menjaga Kualitas
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-12">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
          <p className="font-bold text-xl text-brand-brown">
            Mengintip rutinitas pagi para baker kami. Dari menimbang tepung hingga memanggang adonan pertama, semuanya dilakukan dengan cinta dan ketelitian.
          </p>
          <p>
            Jam menunjukkan pukul 04.30 pagi saat lampu dapur utama Ini Rasa pertama kali dinyalakan. Aroma ragi yang mulai aktif dan semerbak wangi mentega leleh adalah sapaan pertama yang menemani tim kami memulai hari.
          </p>
          <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Semuanya Dimulai dari Timbangan</h3>
          <p>
            Baking adalah ilmu pasti (*exact science*). Kami tidak percaya pada istilah "kira-kira". Setiap gram tepung terigu protein rendah, setiap mililiter ekstrak vanilla murni, dan setiap gram gula ditimbang secara presisi. Ketelitian di tahap awal inilah yang menjamin konsistensi rasa dari kue pertama hingga kue ke-seribu.
          </p>
          <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Proses Tanpa Jalan Pintas</h3>
          <p>
            Kami menolak menggunakan bahan kimia pengembang buatan atau pengawet instan. Croissant kami memakan waktu tiga hari dari pembuatan adonan, pelipatan mentega (*laminating*), hingga fermentasi panjang agar menghasilkan *honeycomb* yang sempurna di dalamnya.
          </p>
          <p>
            Begitu pula dengan olesan Nastar kami. Kami hanya menggunakan kuning telur omega berkualitas yang disaring berkali-kali untuk menghasilkan kilau keemasan yang cantik dan merata.
          </p>
          <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">Quality Control yang Ketat</h3>
          <p>
            Sebelum masuk ke tahap pengemasan, setiap loyang akan melewati proses *Quality Control* (QC). Jika ada kue kering yang bentuknya tidak simetris atau warnanya terlalu gelap, kue tersebut tidak akan pernah masuk ke dalam toples yang dikirim ke pelanggan.
          </p>
          <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
            <p className="italic text-brand-brown">
              "Bagi kami, membuat kue bukan sekadar menyatukan bahan. Ini adalah seni menyampaikan rasa bahagia kepada pelanggan kami yang sedang merayakan momen terindah mereka." – <strong>Tim Baker Ini Rasa</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}