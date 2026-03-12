import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-brown mb-6">Cerita Ini Rasa</h1>
          <div className="aspect-video bg-brand-sand/30 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-brand-brown/40">Foto Toko / Dapur Kami</span>
          </div>
          <p className="text-lg text-brand-brown/80 leading-relaxed text-justify md:text-center">
            Berawal dari kecintaan terhadap seni memanggang, <strong className="text-brand-brown">Ini Rasa</strong> hadir untuk menemani setiap momen spesialmu. Kami percaya bahwa kue yang lezat tidak hanya memanjakan lidah, tetapi juga mampu menghangatkan suasana dan menciptakan kenangan tak terlupakan bersama orang tersayang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-brand-sand pt-16">
          <div className="text-center">
            <div className="bg-brand-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-sage">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-brown mb-2">Bahan Premium</h3>
            <p className="text-sm text-brand-brown/70">Dipilih secara ketat untuk menjamin kualitas dan rasa terbaik di setiap gigitan.</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-sage">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-brown mb-2">Dibuat Sepenuh Hati</h3>
            <p className="text-sm text-brand-brown/70">Setiap adonan diproses dengan dedikasi tinggi oleh baker berpengalaman kami.</p>
          </div>
          <div className="text-center">
            <div className="bg-brand-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-sage">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-brand-brown mb-2">Desain Minimalis</h3>
            <p className="text-sm text-brand-brown/70">Kecantikan dalam kesederhanaan. Estetika yang elegan untuk semua perayaan.</p>
          </div>
        </div>

      </div>
    </div>
  );
}