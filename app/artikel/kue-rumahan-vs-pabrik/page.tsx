import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import ArtikelSidebar from "../../../components/ArtikelSidebar";

export const metadata: Metadata = {
  title: "Kenapa Kue Buatan Rumah Lebih Sehat dari Kue Pabrik? | Ini Rasa",
  description: "Di balik rasa yang lebih nikmat, kue homemade menyimpan sejumlah keunggulan dari sisi kesehatan. Simak perbandingan komprehensifnya di sini.",
  openGraph: {
    title: "Kenapa Kue Buatan Rumah Lebih Sehat dari Kue Pabrik?",
    description: "Perbandingan lengkap antara kue homemade dan kue produksi pabrik dari sisi bahan, proses, dan manfaat kesehatan.",
    images: [{ url: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp", width: 1200, height: 630, alt: "Kue Rumahan vs Pabrik" }],
    type: "article",
  }
};

export default function ArtikelKueRumahan() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp" alt="Kue Rumahan" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-white">
          <Link href="/artikel" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-medium">
            <span className="bg-brand-sage text-brand-brown px-3 py-1 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Edukasi</span>
            <span className="flex items-center gap-1 text-white/90"><Calendar className="w-4 h-4" /> 10 Mei 2026</span>
            <span className="flex items-center gap-1 text-white/90"><Clock className="w-4 h-4" /> 5 Menit Membaca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Kenapa Kue Buatan Rumah Lebih Sehat dari Kue Pabrik?
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30 text-lg text-brand-brown/80 leading-relaxed space-y-6">
            <p className="font-bold text-xl text-brand-brown">
              Kue yang dibuat dengan tangan bukan hanya lebih enak — secara ilmiah, ia juga lebih baik untuk tubuh kita.
            </p>
            <p>
              Di supermarket, kue-kue dalam kemasan plastik menggoda dengan harga murah dan tampilan menarik. Namun, tahukah kamu apa yang sebenarnya tersembunyi di balik kemasan cantik tersebut? Mari kita bedah perbedaannya secara jujur.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">1. Bahan-bahan yang Transparan</h3>
            <p>
              Kue pabrik menggunakan berbagai <em>food additive</em> seperti pengawet (natrium benzoat, kalium sorbat), pewarna buatan, dan perisa sintetis agar produk tahan berbulan-bulan. Sebaliknya, kue homemade menggunakan bahan yang bisa kamu beli dan lihat sendiri di pasar — tepung, telur, mentega, gula, dan cokelat asli.
            </p>
            <p>
              Di <strong>Ini Rasa</strong>, kami bahkan selangkah lebih jauh: menggunakan mentega Wisjman asli impor Belanda tanpa campuran shortening murah, dan cokelat premium tanpa perisa buatan.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">2. Tidak Ada Lemak Trans Tersembunyi</h3>
            <p>
              Banyak kue pabrik menggunakan <em>partially hydrogenated oil</em> atau minyak terhidrogenasi — sumber utama lemak trans yang terbukti meningkatkan risiko penyakit jantung. Kue homemade yang menggunakan butter atau minyak kelapa asli tidak memiliki masalah ini.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">3. Kontrol Kadar Gula Lebih Baik</h3>
            <p>
              Kue pabrik seringkali mengandung <em>high fructose corn syrup</em> (HFCS) yang lebih murah daripada gula asli tetapi lebih berbahaya bagi tubuh karena diproses langsung oleh hati. Baker rumahan bisa mengontrol takaran gula sesuai kebutuhan, bahkan mensubstitusinya dengan madu atau gula kelapa.
            </p>

            <h3 className="text-2xl font-serif font-bold text-brand-brown mt-8 mb-4">4. Kandungan Serat Lebih Tinggi</h3>
            <p>
              Kue homemade lebih mudah dimodifikasi — bisa menambahkan tepung gandum utuh, oat, kacang-kacangan, atau biji chia untuk meningkatkan kandungan serat dan protein. Kue pabrik umumnya menggunakan tepung putih olahan yang sudah kehilangan sebagian besar nutrisinya.
            </p>

            <div className="bg-brand-cream/50 p-6 rounded-2xl mt-8 border-l-4 border-brand-sage">
              <p className="italic text-brand-brown">
                Memilih kue homemade bukan berarti kamu harus memasak sendiri setiap hari. Pilih bakery terpercaya seperti <strong>Ini Rasa</strong> yang berkomitmen menggunakan bahan-bahan premium tanpa bahan pengawet dan pewarna buatan — nikmat sekaligus lebih aman untuk keluarga tercinta.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <ArtikelSidebar currentLink="/artikel/kue-rumahan-vs-pabrik" />
          </div>
        </div>
      </section>
    </div>
  );
}
