import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1, // Kita akan pakai ID ini untuk link URL-nya
    title: "Cara Menyimpan Kue Tart Agar Tetap Lembut Berhari-hari",
    excerpt: "Pernahkah kamu membeli kue tart yang lezat, namun teksturnya menjadi keras dan kering setelah disimpan di kulkas? Kunci utamanya ada pada cara penyimpanan...",
    date: "14 Maret 2026",
  }
];

export default function ArtikelPage() {
  return (
    <div className="min-h-screen bg-brand-cream py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown mb-4">Artikel & Inspirasi</h1>
          <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
            Temukan berbagai cerita manis, tips seputar kue, dan kabar terbaru dari dapur Ini Rasa.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl p-8 border border-brand-sand/30 shadow-sm hover:shadow-md transition duration-300 flex flex-col">
              <div className="flex items-center gap-2 text-brand-sage text-sm font-bold mb-4 uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              
              <Link href={`/artikel/${article.id}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-brown mb-4 hover:text-brand-sage transition cursor-pointer">
                  {article.title}
                </h2>
              </Link>
              
              <p className="text-brand-brown/80 leading-relaxed mb-6 text-base md:text-lg">
                {article.excerpt}
              </p>

              {/* PERUBAHAN DI SINI: Link mengarah ke /artikel/1 */}
              <Link href={`/artikel/${article.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-brown hover:text-brand-sage transition w-fit border-b-2 border-transparent hover:border-brand-sage pb-1 mt-auto">
                Baca Selengkapnya <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}