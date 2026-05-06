import Link from "next/link";
import { articles } from "../app/lib/articles";

export default function ArtikelSidebar({ currentLink }: { currentLink: string }) {
  // Filter out the current article
  const otherArticles = articles.filter(a => a.link !== currentLink);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-brand-sand/30 sticky top-24">
      <h3 className="text-xl font-serif font-bold text-brand-brown mb-6 border-b border-brand-sand/30 pb-4">
        Baca Artikel Lainnya
      </h3>
      <div className="space-y-6">
        {otherArticles.map((article) => (
          <Link key={article.id} href={article.link} className="group block">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-sm font-bold text-brand-brown group-hover:text-brand-sage transition line-clamp-2 leading-tight mb-1">
                  {article.title}
                </h4>
                <span className="text-xs text-brand-brown/50">{article.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
