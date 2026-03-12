import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

// Data dummy artikel
const articles = [
  { id: 1, title: "Cara Menyimpan Cookies Agar Tetap Renyah", date: "12 Maret 2026", excerpt: "Jangan asal simpan! Ikuti 3 tips mudah ini agar cookies premium kamu tetap enak dinikmati berhari-hari." },
  { id: 2, title: "Mengenal Cokelat Dubai: Tren Manis Tahun Ini", date: "10 Maret 2026", excerpt: "Apa yang membuat Cokelat Dubai begitu spesial dan diburu banyak orang? Mari bedah perpaduan rasanya." },
  { id: 3, title: "Inspirasi Hampers Lebaran Eksklusif untuk Keluarga", date: "5 Maret 2026", excerpt: "Menyambut momen spesial dengan hantaran bermakna. Intip koleksi hampers terbaru dari Ini Rasa." }
];

export default function ArtikelPage() {
  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-brown mb-4">Artikel & Inspirasi</h1>
          <p className="text-brand-brown/70 max-w-2xl mx-auto">
            Temukan berbagai tips menarik, cerita di balik layar, dan inspirasi manis untuk hari-harimu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-sand/30 hover:shadow-md transition flex flex-col">
              <div className="aspect-video bg-brand-sand/30 flex items-center justify-center">
                <span className="text-brand-brown/40 text-sm">Thumbnail Artikel</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-brand-sage text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h2 className="text-xl font-bold text-brand-brown mb-3 leading-tight">
                  {article.title}
                </h2>
                <p className="text-brand-brown/70 text-sm mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-brand-brown font-bold hover:text-brand-sage transition mt-auto">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}