import Link from "next/link";
import { ArrowRight, Star, Clock, ShieldCheck, ThumbsUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      
      {/* HERO SECTION - Diperbaiki untuk Mobile */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-20 pb-32">
         <div className="absolute inset-0 z-0 bg-brand-brown">
            <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp" alt="Toko Kue Premium Jakarta" className="w-full h-full object-cover opacity-40" />
         </div>
         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-8 md:mt-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">Rayakan Momen Manismu Bersama Ini Rasa.</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">Toko kue premium Jakarta yang menghadirkan kreasi pastry dan hampers eksklusif dengan bahan kualitas terbaik.</p>
            <Link href="/menu" className="inline-flex items-center gap-2 bg-brand-sage text-brand-brown px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white transition shadow-lg">
              Pesan Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>

      {/* VALUE PROPOSITION (Keunggulan Toko) */}
      <section className="py-8 md:py-12 bg-white relative z-20 -mt-20 mx-4 md:mx-auto max-w-6xl rounded-3xl shadow-xl px-4 sm:px-8 border border-brand-sand/30">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-sand/40">
            <div className="p-4 flex flex-col items-center">
               <Clock className="w-10 h-10 text-brand-sage mb-4" />
               <h3 className="font-bold text-xl mb-2 font-serif text-brand-brown">Freshly Baked</h3>
               <p className="text-brand-brown/70 text-sm">Dipanggang setiap hari dengan penuh cinta untuk tekstur dan aroma terbaik.</p>
            </div>
            <div className="p-4 flex flex-col items-center">
               <ShieldCheck className="w-10 h-10 text-brand-sage mb-4" />
               <h3 className="font-bold text-xl mb-2 font-serif text-brand-brown">Tanpa Pengawet</h3>
               <p className="text-brand-brown/70 text-sm">100% bahan alami premium yang aman dan sehat untuk keluarga tercinta.</p>
            </div>
            <div className="p-4 flex flex-col items-center">
               <ThumbsUp className="w-10 h-10 text-brand-sage mb-4" />
               <h3 className="font-bold text-xl mb-2 font-serif text-brand-brown">Sameday Delivery</h3>
               <p className="text-brand-brown/70 text-sm">Pesanan tiba di hari yang sama dengan kemasan rapi dan terjamin aman.</p>
            </div>
         </div>
      </section>

      {/* BRAND STORY SINGKAT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-brand-sand/30 rounded-3xl transform -translate-x-4 translate-y-4 -z-10"></div>
             <div className="aspect-square rounded-3xl overflow-hidden shadow-xl relative">
                <img src="https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp" alt="Ini Rasa Bakery" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-brand-sand/30">
                <div className="flex gap-1 text-yellow-400 mb-2">
                   <Star fill="currentColor" className="w-5 h-5"/><Star fill="currentColor" className="w-5 h-5"/><Star fill="currentColor" className="w-5 h-5"/><Star fill="currentColor" className="w-5 h-5"/><Star fill="currentColor" className="w-5 h-5"/>
                </div>
                <p className="font-bold text-brand-brown">4.9/5 Rating Pelanggan</p>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-sm font-bold text-brand-sage uppercase tracking-widest">Tentang Kami</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown leading-tight">Toko Kue Premium Jakarta Pilihan Keluarga.</h2>
            <p className="text-brand-brown/80 leading-relaxed text-lg">Sebagai <strong>toko kue premium Jakarta</strong>, Ini Rasa berkomitmen menghadirkan pengalaman kuliner yang tak terlupakan. Berawal dari dapur kecil yang hangat, kami menyajikan aneka kue tart, cookies, dan hampers elegan yang memanjakan lidah.</p>
            <p className="text-brand-brown/80 leading-relaxed text-lg">Setiap kreasi kami menggunakan mentega asli kualitas ekspor dan bahan baku pilihan. Sangat sempurna untuk menemani momen spesial, dari perayaan ulang tahun hingga hadiah istimewa untuk kolega bisnis Anda.</p>
            <Link href="/about" className="inline-flex items-center gap-2 text-brand-brown font-bold hover:text-brand-sage transition border-b-2 border-brand-brown hover:border-brand-sage pb-1 mt-4">
              Kenali Kami Lebih Jauh <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONI PELANGGAN */}
      <section className="py-24 bg-brand-cream/50 border-t border-brand-sand/30">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">Kata Mereka Tentang Ini Rasa</h2>
               <p className="text-brand-brown/70">Ribuan senyum telah tercipta dari setiap gigitan kue kami.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Testimoni 1 */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-sand/30 relative flex flex-col">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                     <Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/>
                  </div>
                  <p className="text-brand-brown/80 italic mb-8 flex-grow">"Pesan hampers Lebaran di sini selalu puas. Packaging-nya super elegan dan cookies-nya lumer banget di mulut. Klien-klien saya pada suka!"</p>
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center font-bold text-brand-sage text-xl">S</div>
                     <div>
                        <p className="font-bold text-brand-brown">Sarah T.</p>
                        <p className="text-xs text-brand-brown/50">Jakarta Selatan</p>
                     </div>
                  </div>
               </div>
               
               {/* Testimoni 2 */}
               <div className="bg-white p-8 rounded-2xl shadow-md border border-brand-sand/30 relative transform md:-translate-y-4 flex flex-col">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                     <Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/>
                  </div>
                  <p className="text-brand-brown/80 italic mb-8 flex-grow">"Kue tart untuk ulang tahun anak saya beneran di luar ekspektasi. Sponge cake-nya lembut banget, krimnya ga bikin eneg sama sekali. Recommended!"</p>
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center font-bold text-brand-sage text-xl">B</div>
                     <div>
                        <p className="font-bold text-brand-brown">Budi W.</p>
                        <p className="text-xs text-brand-brown/50">Jakarta Barat</p>
                     </div>
                  </div>
               </div>

               {/* Testimoni 3 */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-sand/30 relative flex flex-col">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                     <Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/><Star fill="currentColor" className="w-4 h-4"/>
                  </div>
                  <p className="text-brand-brown/80 italic mb-8 flex-grow">"Penyelamat banget pas butuh kue dadakan! Sameday delivery-nya aman, kuenya sampai dalam kondisi sempurna tanpa cacat sedikitpun."</p>
                  <div className="flex items-center gap-4 mt-auto">
                     <div className="w-12 h-12 bg-brand-sage/20 rounded-full flex items-center justify-center font-bold text-brand-sage text-xl">A</div>
                     <div>
                        <p className="font-bold text-brand-brown">Amelia K.</p>
                        <p className="text-xs text-brand-brown/50">Tangerang</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}