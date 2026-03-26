import Link from "next/link";
import { Heart, ShieldCheck, Gift, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24">
      
      {/* HEADER HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-brand-brown">
          <img 
            src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Gemini_Generated_Image_p05npwp05npwp05n%20(1).webp" 
            alt="Ini Rasa Bakery" 
            className="w-full h-full object-cover opacity-40" 
          />
        </div>
        <div className="relative z-10 text-white px-4 max-w-3xl mt-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Kisah Kami.</h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Lebih dari sekadar resep, ini adalah tentang merayakan momen manis bersama orang tersayang.
          </p>
        </div>
      </section>

      {/* STORY SECTION (BRAND STORY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-sm font-bold text-brand-sage uppercase tracking-widest">Awal Mula</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown leading-tight">Berawal dari Cinta pada Kualitas.</h2>
            <p className="text-brand-brown/80 leading-relaxed text-lg">
              Setiap perjalanan besar selalu dimulai dari langkah kecil. <strong>Ini Rasa</strong> lahir di Jakarta dengan satu visi sederhana: menghadirkan kue dan pastry dengan standar rasa serta kualitas terbaik, layaknya sajian istimewa untuk keluarga sendiri.
            </p>
            <p className="text-brand-brown/80 leading-relaxed text-lg">
              Kami percaya bahwa tidak ada kompromi dalam hal bahan baku. Oleh karena itu, kami hanya menggunakan mentega premium asli Eropa, cokelat pilihan, dan bahan segar tanpa pengawet untuk memastikan setiap gigitan meninggalkan memori yang indah di lidah Anda.
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-brand-sand/40 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/Strawberry%20Shortcake.webp" 
              alt="Dapur Ini Rasa" 
              className="w-full h-auto rounded-3xl shadow-xl object-cover aspect-[4/5]" 
            />
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="bg-brand-cream/60 py-24 border-y border-brand-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-16">Filosofi Dapur Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30 flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-sage/20 text-brand-sage rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-brown mb-3">Bahan Baku Premium</h3>
              <p className="text-brand-brown/70 leading-relaxed">
                Dari mentega Wisjman hingga ekstrak vanilla murni. Kami memilih yang terbaik tanpa bahan pengawet agar aman untuk semua usia.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30 flex flex-col items-center transform md:-translate-y-8 relative z-10">
              <div className="w-16 h-16 bg-brand-sage/20 text-brand-sage rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-brown mb-3">Dibuat Sepenuh Hati</h3>
              <p className="text-brand-brown/70 leading-relaxed">
                Semua produk kami diolah secara artisanal setiap harinya untuk memastikan tekstur dan rasa yang memanjakan lidah saat tiba di tangan Anda.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-sand/30 flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-sage/20 text-brand-sage rounded-full flex items-center justify-center mb-6">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-brand-brown mb-3">Estetika Bingkisan</h3>
              <p className="text-brand-brown/70 leading-relaxed">
                Kami percaya rasa yang enak harus dibarengi dengan presentasi yang memukau. Sangat cocok untuk *corporate gift* atau hantaran momen spesial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mb-6">Siap Merasakan Bedanya?</h2>
        <p className="text-lg text-brand-brown/80 mb-10 max-w-2xl mx-auto">
          Mari ciptakan kenangan manis yang tak terlupakan. Eksplorasi berbagai pilihan signature cake, pastry, dan hampers elegan kami sekarang.
        </p>
        <Link href="/menu" className="inline-flex items-center gap-2 bg-brand-sage text-brand-brown px-8 py-4 rounded-full font-bold hover:bg-brand-brown hover:text-white transition shadow-lg text-lg">
          Lihat Menu Kami <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

    </div>
  );
}