import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-brand-sand/20 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-brown mb-6 leading-tight">
              Manisnya Momen, <br /> Berawal dari Sini.
            </h1>
            <p className="text-lg md:text-xl text-brand-brown/80 mb-8">
              Nikmati aneka kue premium, hampers eksklusif, dan roti segar yang dibuat dengan bahan pilihan. Sempurna untuk setiap perayaan bermaknamu.
            </p>
            <div className="flex gap-4">
              <Link href="/menu" className="bg-brand-brown text-brand-cream px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition flex items-center gap-2">
                Lihat Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        {/* Dekorasi Background Bulat Estetik */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-sage/10 rounded-l-full -z-10 hidden md:block"></div>
      </section>

      {/* Section Kategori Pilihan */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-brown mb-4">Kategori Pilihan</h2>
            <p className="text-brand-brown/70">Temukan sajian favorit untuk orang tersayang</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card Kategori 1: Hampers */}
            <Link href="/menu" className="group block text-center">
              <div className="aspect-square bg-brand-sand/40 rounded-2xl mb-4 overflow-hidden flex items-center justify-center border border-brand-sand/50 group-hover:bg-brand-sand/60 transition">
                 <img 
                    src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp" 
                    alt="Exclusive Hampers" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                 />
              </div>
              <h3 className="text-xl font-bold text-brand-brown group-hover:text-brand-sage transition">Exclusive Hampers</h3>
            </Link>

            {/* Card Kategori 2: Cakes */}
            <Link href="/menu" className="group block text-center">
              <div className="aspect-square bg-brand-sand/40 rounded-2xl mb-4 overflow-hidden flex items-center justify-center border border-brand-sand/50 group-hover:bg-brand-sand/60 transition">
                 <img 
                    src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp" 
                    alt="Signature Cakes" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                 />
              </div>
              <h3 className="text-xl font-bold text-brand-brown group-hover:text-brand-sage transition">Signature Cakes</h3>
            </Link>

            {/* Card Kategori 3: Cookies */}
            <Link href="/menu" className="group block text-center">
              <div className="aspect-square bg-brand-sand/40 rounded-2xl mb-4 overflow-hidden flex items-center justify-center border border-brand-sand/50 group-hover:bg-brand-sand/60 transition">
                 <img 
                    src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp" 
                    alt="Premium Cookies" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                 />
              </div>
              <h3 className="text-xl font-bold text-brand-brown group-hover:text-brand-sage transition">Premium Cookies</h3>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}