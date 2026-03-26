import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";

// Data artikel dengan link yang SUDAH AKTIF SEMUA
const articles = [
  {
    id: 1,
    title: "Cara Menyimpan Kue Tart Agar Tetap Lembut Berhari-hari",
    link: "/artikel/cara-menyimpan-kue-tart", 
    excerpt: "Pernahkah kamu membeli kue tart yang lezat, namun teksturnya menjadi keras dan kering setelah disimpan di kulkas? Kunci utamanya ada pada cara penyimpanan yang tepat agar kelembapannya terjaga...",
    date: "14 Maret 2026",
    category: "Tips & Trik",
    image: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Strawberry%20Shortcake.webp",
    featured: true,
  },
  {
    id: 2,
    title: "Mengenal Perbedaan Mentega Wisjman dan Margarin Biasa",
    link: "/artikel/mengenal-mentega-wisjman", 
    excerpt: "Banyak yang bertanya, apa rahasia di balik tekstur lumer Nastar Ini Rasa? Jawabannya ada pada pemilihan bahan baku yang tidak kenal kompromi.",
    date: "10 Maret 2026",
    category: "Bahan Premium",
    image: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Nastar%20Wisjman%20Spesial.webp",
    featured: false,
  },
  {
    id: 3,
    title: "5 Alasan Mengapa Hampers Adalah Hadiah Terbaik untuk Kolega",
    link: "/artikel/5-alasan-hampers-terbaik",
    excerpt: "Bukan sekadar bingkisan, hampers adalah representasi dari apresiasi dan rasa hormat. Temukan alasan mengapa hampers selalu menjadi pilihan utama di hari raya.",
    date: "05 Maret 2026",
    category: "Inspirasi",
    image: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/medina%20royal.webp",
    featured: false,
  },
  {
    id: 4,
    title: "Di Balik Dapur Ini Rasa: Dedikasi Menjaga Kualitas",
    link: "/artikel/di-balik-dapur-ini-rasa",
    excerpt: "Mengintip rutinitas pagi para baker kami. Dari menimbang tepung hingga memanggang adonan pertama, semuanya dilakukan dengan cinta dan ketelitian.",
    date: "28 Februari 2026",
    category: "Cerita Kami",
    image: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp",
    featured: false,
  }
];

export default function ArtikelPage() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      
      {/* HEADER SECTION */}
      <section className="bg-brand-brown text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Artikel & Inspirasi</h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Temukan berbagai cerita manis, tips seputar kue, dan kabar terbaru dari dapur Ini Rasa.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        
        {/* FEATURED ARTICLE (ARTIKEL UTAMA) */}
        {featuredArticle && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-brand-sand/30 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="overflow-hidden aspect-video lg:aspect-auto h-full">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="bg-brand-sage/20 text-brand-sage font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {featuredArticle.category}
                  </span>
                  <span className="text-brand-brown/50 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {featuredArticle.date}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-6 leading-tight group-hover:text-brand-sage transition">
                  {featuredArticle.title}
                </h2>
                <p className="text-brand-brown/70 text-lg leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <Link href={featuredArticle.link} className="inline-flex items-center gap-2 text-brand-brown font-bold hover:text-brand-sage transition w-fit border-b-2 border-brand-brown hover:border-brand-sage pb-1">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* REGULAR ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-3xl shadow-md overflow-hidden border border-brand-sand/30 group flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-brown text-xs font-bold px-3 py-1.5 rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-brand-brown/50 text-sm flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4" /> {article.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-brown mb-3 group-hover:text-brand-sage transition line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-brand-brown/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <Link href={article.link} className="inline-flex items-center gap-2 text-brand-sage font-bold hover:text-brand-brown transition mt-auto">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}