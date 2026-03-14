import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Phone } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Kembali */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-brown/50 hover:text-brand-sage transition text-sm font-semibold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Header Halaman */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown mb-4">Lokasi Toko Kami</h1>
          <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
            Kunjungi dapur Ini Rasa untuk mencium aroma kue yang baru matang, atau ambil pesanan Anda secara langsung.
          </p>
        </div>

        {/* Kotak Konten Utama (Kiri Info, Kanan Peta) */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-brand-sand/30 flex flex-col lg:flex-row">
          
          {/* Bagian Kiri: Info Kontak & Alamat */}
          <div className="w-full lg:w-1/3 p-8 md:p-12 bg-brand-brown text-brand-cream flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold mb-10 text-white">Ini Rasa Bakery</h2>

            <div className="space-y-8">
              {/* Alamat */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-sage/20 p-3 rounded-full text-brand-sage shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Alamat</h3>
                  <p className="text-brand-cream/80 leading-relaxed">
                    Jl. Kembangan Raya No. 88<br />
                    Kembangan, Jakarta Barat<br />
                    DKI Jakarta 11610
                  </p>
                </div>
              </div>

              {/* Jam Buka */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-sage/20 p-3 rounded-full text-brand-sage shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Jam Operasional</h3>
                  <p className="text-brand-cream/80">Senin - Jumat: 08:00 - 20:00 WIB</p>
                  <p className="text-brand-cream/80">Sabtu - Minggu: 07:00 - 21:00 WIB</p>
                </div>
              </div>

              {/* Kontak */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-sage/20 p-3 rounded-full text-brand-sage shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Hubungi Kami</h3>
                  <p className="text-brand-cream/80">WA: 0851-8607-4311</p>
                  <p className="text-brand-cream/80">Email: halo@inirasa.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Google Maps Interaktif */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] bg-brand-sand/20 relative">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.502805178619!2d106.74516331476902!3d-6.196531995513904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71c43f7a817%3A0x8e8bb8864f1c1103!2sKembangan%20Sel.%2C%20Kec.%20Kembangan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1682312345678!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          
        </div>

      </div>
    </div>
  );
}