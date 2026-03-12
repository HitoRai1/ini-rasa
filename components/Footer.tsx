import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    /* Mengembalikan warna ke tema utama: brand-cream dan brand-brown */
    <footer className="bg-brand-cream text-brand-brown py-16 border-t border-brand-sand"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bagian Atas: Logo Brand */}
        <div className="border-y border-brand-brown/30 py-6 mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold tracking-widest uppercase">Ini Rasa.</h2>
          <p className="text-sm mt-2 font-medium opacity-80">Cakes, Bread & More...</p>
        </div>

        {/* Bagian Bawah: Grid Informasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Kolom 1: Menu & Help Center */}
          <div className="space-y-10">
            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Ini Rasa</h3>
              <ul className="space-y-3 font-medium text-sm opacity-80">
                <li><Link href="/about" className="hover:text-brand-sage transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-brand-sage transition">Stores</Link></li>
                <li><Link href="#" className="hover:text-brand-sage transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Help Center</h3>
              <ul className="space-y-3 font-medium text-sm opacity-80">
                <li><Link href="#" className="hover:text-brand-sage transition">FAQ</Link></li>
                <li><Link href="#" className="hover:text-brand-sage transition">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-brand-sage transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Kolom 2: Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 font-medium text-sm opacity-80">
              
              {/* WhatsApp Asli */}
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>+62 878 4158 4445</span>
              </li>
              
              {/* Instagram */}
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                <span>@inirasa.id</span>
              </li>
              
              {/* TikTok Asli */}
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>@inirasa.id</span>
              </li>

            </ul>
          </div>

          {/* Kolom 3: Layanan Pengaduan (Tanpa Halal) */}
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wider uppercase">Layanan Pengaduan Konsumen</h3>
            <div className="space-y-4 font-medium text-sm opacity-80">
              <p>PT Rasa Nusantara Makmur</p>
              <p>Email:<br/>marketing@inirasa.com</p>
              <p>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</p>
              <p>Kementerian Perdagangan Republik Indonesia</p>
              <p>0853 1111 1010 (WhatsApp)</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}