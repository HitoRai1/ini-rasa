"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

const promos = [
  {
    id: 1,
    image: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp",
    badge: "Promo Spesial",
    title: "Diskon 20% Hampers Lebaran",
    description: "Sambut momen istimewa dengan koleksi hampers premium kami. Nikmati potongan harga khusus untuk pemesanan bulan ini.",
    link: "/menu?category=hampers",
    linkText: "Pesan Hampers"
  },
  {
    id: 2,
    image: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp",
    badge: "Penawaran Terbatas",
    title: "Gratis Ongkir se-Jakarta",
    description: "Bebas biaya pengiriman untuk semua pesanan kue tart minimum Rp 300.000. Hanya berlaku minggu ini!",
    link: "/menu?category=cake",
    linkText: "Lihat Kue Tart"
  },
  {
    id: 3,
    image: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp",
    badge: "Bundling Hemat",
    title: "Beli 2 Dapat 3 Cookies",
    description: "Pesan 2 toples artisan cookies varian apa saja dan dapatkan 1 toples gratis. Persediaan terbatas!",
    link: "/menu?category=cookies",
    linkText: "Klaim Promo"
  }
];

export default function PromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promos.length);
    }, 5000); // Auto-slide setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-brand-sand/30">
        
        {promos.map((promo, index) => (
          <div
            key={promo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="w-full h-full object-cover"
              />
              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/90 via-brand-brown/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16 md:p-16">
              <div className="max-w-2xl transform transition-transform duration-700 translate-y-0 opacity-100">
                <span className="inline-flex items-center gap-1.5 bg-brand-sage text-brand-brown px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-4 shadow-md">
                  <Tag className="w-3.5 h-3.5" /> {promo.badge}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                  {promo.title}
                </h2>
                <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                  {promo.description}
                </p>
                <Link 
                  href={promo.link}
                  className="inline-flex items-center gap-2 bg-white text-brand-brown px-8 py-4 rounded-full font-bold hover:bg-brand-sage hover:text-brand-brown transition duration-300 shadow-lg"
                >
                  {promo.linkText} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
          {promos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? "w-8 h-2.5 bg-brand-sage" 
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
