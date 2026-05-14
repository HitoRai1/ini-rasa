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
                    Apartemen Menara Latumenten, 1,<br />
                    RT.1/RW.1, Jelambar Baru,<br />
                    Kec. Grogol Petamburan,<br />
                    Kota Jakarta Barat 11460
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
                  <p className="text-brand-cream/80">Email: inirasabakery@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Google Maps Interaktif */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] bg-brand-sand/20 relative">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4660523!2d106.7954!3d-6.1515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6e000000001%3A0x0!2sApartemen+Menara+Latumenten%2C+Jelambar+Baru%2C+Grogol+Petamburan%2C+Jakarta+Barat!5e0!3m2!1sid!2sid!4v1682312345678!5m2!1sid!2sid"
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

        {/* Cabang Kami Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown mb-4">Cabang Kami</h2>
            <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
              Kini Ini Rasa hadir lebih dekat dengan Anda. Kunjungi cabang terdekat di kota Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cabang 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-sand/30 hover:border-brand-sage transition duration-300">
              <h3 className="font-bold text-xl text-brand-brown mb-3">Jakarta Selatan (Kemang)</h3>
              <p className="text-brand-brown/70 text-sm mb-4 leading-relaxed">Jl. Kemang Raya No. 45, Bangka, Kec. Mampang Prapatan, Jakarta Selatan 12730</p>
              <div className="flex items-center gap-2 text-sm text-brand-brown/80">
                <Phone className="w-4 h-4 text-brand-sage" /> 0851-8607-4312
              </div>
            </div>
            
            {/* Cabang 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-sand/30 hover:border-brand-sage transition duration-300">
              <h3 className="font-bold text-xl text-brand-brown mb-3">Jakarta Pusat (Menteng)</h3>
              <p className="text-brand-brown/70 text-sm mb-4 leading-relaxed">Jl. HOS. Cokroaminoto No. 88, Menteng, Kec. Menteng, Jakarta Pusat 10310</p>
              <div className="flex items-center gap-2 text-sm text-brand-brown/80">
                <Phone className="w-4 h-4 text-brand-sage" /> 0851-8607-4313
              </div>
            </div>

            {/* Cabang 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-sand/30 hover:border-brand-sage transition duration-300">
              <h3 className="font-bold text-xl text-brand-brown mb-3">Tangerang (BSD City)</h3>
              <p className="text-brand-brown/70 text-sm mb-4 leading-relaxed">Ruko BSD Sektor VII, Jl. Pahlawan Seribu, Lengkong Wetan, Serpong, Tangerang Selatan 15322</p>
              <div className="flex items-center gap-2 text-sm text-brand-brown/80">
                <Phone className="w-4 h-4 text-brand-sage" /> 0851-8607-4314
              </div>
            </div>

            {/* Cabang 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-sand/30 hover:border-brand-sage transition duration-300">
              <h3 className="font-bold text-xl text-brand-brown mb-3">Bekasi (Summarecon)</h3>
              <p className="text-brand-brown/70 text-sm mb-4 leading-relaxed">Ruko Emerald Commercial Blok UB No. 11, Summarecon, Bekasi Utara 17142</p>
              <div className="flex items-center gap-2 text-sm text-brand-brown/80">
                <Phone className="w-4 h-4 text-brand-sage" /> 0851-8607-4315
              </div>
            </div>

            {/* Cabang 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-sand/30 hover:border-brand-sage transition duration-300">
              <h3 className="font-bold text-xl text-brand-brown mb-3">Depok (Margonda)</h3>
              <p className="text-brand-brown/70 text-sm mb-4 leading-relaxed">Jl. Margonda Raya No. 350, Kemiri Muka, Kec. Beji, Kota Depok 16424</p>
              <div className="flex items-center gap-2 text-sm text-brand-brown/80">
                <Phone className="w-4 h-4 text-brand-sage" /> 0851-8607-4316
              </div>
            </div>
          </div>
        </div>

        {/* B2B Partnership Section */}
        <div className="mt-16 bg-brand-cream border border-brand-sand/40 rounded-3xl p-8 md:p-12 text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-sage"></div>
          <h2 className="text-3xl font-serif font-bold text-brand-brown mb-4">Kerjasama B2B & Corporate</h2>
          <p className="text-brand-brown/80 max-w-2xl mx-auto mb-8 text-lg">
            Kami terbuka untuk peluang kemitraan bisnis. Dapatkan penawaran khusus untuk pemesanan korporat, reseller, atau kolaborasi event Anda.
          </p>
          <a 
            href="https://drive.google.com/file/d/1s7YKgPuMJH6B9z53EgQgL-nJtjrnfjbi/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-brown text-white px-8 py-4 rounded-full font-bold hover:bg-brand-sage hover:text-brand-brown transition duration-300 shadow-md"
          >
            Download Proposal B2B (PDF)
          </a>
        </div>

      </div>
    </div>
  );
}