import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bagian Atas: Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-brand-cream/20 pb-12 mb-12 gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-serif font-bold mb-4">Tetap Terhubung dengan Ini Rasa.</h2>
            <p className="text-brand-cream/70">Dapatkan penawaran eksklusif, inspirasi hampers terbaru, dan cerita manis langsung di kotak masukmu.</p>
          </div>
          <div className="w-full lg:w-auto flex max-w-md mx-auto lg:mx-0">
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              className="w-full bg-brand-cream/10 border border-brand-cream/20 rounded-l-full px-6 py-3 text-brand-cream placeholder:text-brand-cream/50 focus:outline-none focus:border-brand-sage"
            />
            <button className="bg-brand-sage hover:bg-opacity-90 text-brand-brown px-6 py-3 rounded-r-full font-bold transition flex items-center justify-center shadow-lg">
              Daftar
            </button>
          </div>
        </div>

        {/* Bagian Tengah: Menu Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Brand Intro */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-sage">
                  <path d="M23.5 8.5L8.5 23.5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M27.5 4.5L25.5 6.5M6.5 25.5L4.5 27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
                </svg>
                <span className="text-2xl font-serif font-bold tracking-tight text-white">
                  Ini Rasa<span className="text-brand-sage">.</span>
                </span>
              </div>
            </Link>
            <p className="text-brand-cream/70 leading-relaxed mb-8 max-w-sm">
              Menghadirkan sajian premium yang dibuat dengan tangan, cinta, dan bahan terbaik. Sempurna untuk menemani perayaan bermaknamu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-sage hover:text-brand-brown transition" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-cream/10 flex items-center justify-center hover:bg-brand-sage hover:text-brand-brown transition" title="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Eksplorasi (Ditambah Link Lokasi Toko) */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Eksplorasi</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-brand-cream/70 hover:text-brand-sage transition flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Beranda</Link></li>
              <li><Link href="/menu" className="text-brand-cream/70 hover:text-brand-sage transition flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Katalog Menu</Link></li>
              <li><Link href="/artikel" className="text-brand-cream/70 hover:text-brand-sage transition flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Artikel</Link></li>
              <li><Link href="/about" className="text-brand-cream/70 hover:text-brand-sage transition flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Tentang Kami</Link></li>
              <li><Link href="/location" className="text-brand-cream/70 hover:text-brand-sage transition flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Lokasi Toko</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Dukungan */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Dukungan</h3>
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-brand-cream/70 hover:text-brand-sage transition flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="text-brand-cream/70 hover:text-brand-sage transition flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Kebijakan Privasi</Link></li>
              <li><Link href="#" className="text-brand-cream/70 hover:text-brand-sage transition flex items-center gap-2"><ArrowRight className="w-3 h-3" /> FAQ</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Kunjungi Kami */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Info Kontak</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-brand-cream/70">
                <MapPin className="w-5 h-5 shrink-0 text-brand-sage mt-0.5" />
                <span className="text-sm leading-relaxed">Jl. Kembangan Raya No. 88<br/>Kembangan, Jakarta Barat 11610</span>
              </li>
              <li className="flex items-center gap-3 text-brand-cream/70">
                <Phone className="w-5 h-5 shrink-0 text-brand-sage" />
                <span className="text-sm">0851-8607-4311</span>
              </li>
              <li className="flex items-center gap-3 text-brand-cream/70">
                <Clock className="w-5 h-5 shrink-0 text-brand-sage" />
                <span className="text-sm">Setiap Hari: 08:00 - 20:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bagian Bawah: Copyright */}
        <div className="border-t border-brand-cream/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-cream/50">
          <p>© 2026 Ini Rasa. Hak Cipta Dilindungi.</p>
          <p>Dibuat dengan ❤️ di Jakarta.</p>
        </div>

      </div>
    </footer>
  );
}