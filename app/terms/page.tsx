import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Kembali */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-brand-brown/50 hover:text-brand-sage transition text-sm font-semibold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> 
            Kembali ke Beranda
          </Link>
        </div>

        {/* Kotak Konten Utama */}
        <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12 border border-brand-sand/30">
          
          {/* Header */}
          <div className="border-b border-brand-sand/40 pb-8 mb-8">
            <div className="w-12 h-12 bg-brand-sand/20 rounded-full flex items-center justify-center text-brand-sage mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-brown mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-brand-brown/60 text-sm">
              Mohon baca dengan saksama agar pengalaman berbelanja Anda di Ini Rasa semakin nyaman.
            </p>
          </div>

          {/* Isi Syarat & Ketentuan */}
          <div className="space-y-10 text-brand-brown/80 leading-relaxed text-sm sm:text-base">
            
            <section>
              <h2 className="text-xl font-serif font-bold text-brand-brown mb-4">1. Penanganan Produk</h2>
              <ul className="list-decimal pl-5 space-y-3">
                <li>Beberapa produk kami membutuhkan penanganan khusus untuk menjaga kualitasnya. Harap segera simpan produk di dalam lemari pendingin (kulkas) setelah Anda menerimanya.</li>
                <li>Informasi mengenai masa simpan (<em>shelf life</em>) kue dapat dilihat pada setiap halaman detail produk.</li>
                <li>Karena seluruh produk Ini Rasa dibuat secara manual (<em>handmade</em>), hasil akhir kue mungkin tidak 100% identik dengan foto yang ditampilkan di website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-brand-brown mb-4">2. Jadwal Pemesanan & Pengiriman Internal</h2>
              <ul className="list-decimal pl-5 space-y-3">
                <li><strong>Data Penerima:</strong> Mohon pastikan seluruh data pesanan, termasuk alamat lengkap dan nomor telepon penerima yang aktif, diisi dengan benar.</li>
                <li><strong>Proses Pesanan:</strong> Pesanan baru akan diproses setelah kami menerima konfirmasi pembayaran. Jika konfirmasi melewati batas waktu, pesanan akan dijadwalkan ulang untuk pengiriman/pengambilan berikutnya.</li>
                <li><strong>Estimasi Tiba:</strong> Waktu ketibaan pesanan mengikuti slot waktu (<em>time range</em>) yang dipilih. Kami tidak dapat menentukan jam tiba yang mutlak. Permintaan jam tiba spesifik memerlukan layanan pengiriman khusus dengan biaya tambahan.</li>
                <li><strong>Keadaan Memaksa (Force Majeure):</strong> Dalam kondisi cuaca ekstrem atau bencana alam, kami akan berusaha secepat mungkin menginformasikan penjadwalan ulang pengiriman. Kami memohon pengertian Anda atas situasi di luar kendali kami.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-brand-brown mb-4">3. Pengiriman oleh Pihak Ketiga (Kurir Ekspedisi)</h2>
              <ul className="list-decimal pl-5 space-y-3">
                <li>Kerusakan atau penurunan kualitas produk selama proses pengiriman/pengambilan oleh kurir pihak ketiga (Grab/Gojek/Ekspedisi Luar Kota) berada di luar tanggung jawab Ini Rasa.</li>
                <li>Pengiriman luar kota menggunakan ekspedisi hanya berlaku untuk produk kering (Cookies, Hampers, Gift Sets) dan dikenakan biaya pengemasan ekstra (<em>double-wall box, bubble wrap</em>).</li>
                <li>Meskipun kami telah memaksimalkan keamanan pengemasan dengan label "Makanan Rapuh", kami <strong>tidak dapat menjamin</strong> produk diterima dalam kondisi fisik 100% sempurna (terutama untuk kue kering yang rapuh). Kami hanya bertanggung jawab jika produk diterima dalam kondisi tidak layak konsumsi (berjamur/hancur menjadi bubuk).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-brand-brown mb-4">4. Perubahan & Pembatalan Pesanan</h2>
              <ul className="list-decimal pl-5 space-y-3">
                <li><strong>Perubahan Detail:</strong> Perubahan detail pesanan (alamat/ucapan) masih dapat dilakukan maksimal <strong>H-2 sebelum tanggal pengiriman</strong> dengan menghubungi Customer Service kami. (Tidak berlaku pada <em>high season</em> seperti Lebaran/Natal).</li>
                <li><strong>Pembatalan:</strong> Pesanan tidak dapat dibatalkan atau di-<em>refund</em> setelah pembayaran kami terima. Pesanan hanya dapat dijadwalkan ulang (maksimal konfirmasi H-2).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-brand-brown mb-4">5. Waktu Tunggu Kurir & Pesanan Gagal Kirim</h2>
              <ul className="list-decimal pl-5 space-y-3">
                <li>Kurir kami memiliki waktu tunggu maksimal <strong>15 menit</strong> di lokasi tujuan. Jika tidak ada penerima setelah 15 menit, kurir akan meninggalkan lokasi dan pesanan dianggap gagal kirim.</li>
                <li><strong>Regular Season:</strong> Pesanan gagal kirim akan kami simpan maksimal 24 jam. Anda dapat mengambilnya sendiri di toko atau meminta pengiriman ulang pada hari berikutnya (dikenakan biaya ongkir baru). Jika lewat dari 24 jam, produk dianggap hangus.</li>
                <li><strong>Festive Season (H-14 Hari Raya):</strong> Pengiriman ulang <strong>TIDAK BISA</strong> dilakukan. Pesanan hanya bisa diambil di toko. Akan dikenakan biaya penanganan (<em>handling fee</em>) Rp 100.000 untuk penggantian <em>packaging</em> yang rusak akibat retur kurir.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-brand-brown mb-4">6. Kebijakan Komplain & Retur</h2>
              <ul className="list-decimal pl-5 space-y-3">
                <li>Komplain wajib diajukan maksimal <strong>24 jam</strong> setelah produk diterima, dengan menyertakan bukti pembelian dan foto/video produk (<em>unboxing</em>). Hubungi WhatsApp kami di 0851-8607-4311.</li>
                <li>Penukaran produk hanya berlaku jika terbukti ada kesalahan dari pihak dapur Ini Rasa. Produk harus dikembalikan dalam kondisi utuh seperti saat diterima. Kami tidak melayani retur karena kesalahan pelanggan atau pihak ketiga (kurir).</li>
              </ul>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}