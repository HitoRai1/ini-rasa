import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center text-brand-sage hover:text-brand-brown transition font-medium mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-sand/30">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown mb-6">Kebijakan Privasi</h1>
          <p className="text-brand-brown/60 mb-10 text-sm">Terakhir diperbarui: 6 Mei 2026</p>
          
          <div className="space-y-8 text-brand-brown/80 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-serif font-bold text-brand-brown mb-4">1. Informasi yang Kami Kumpulkan</h2>
              <p className="mb-4">
                Kami di <strong>Ini Rasa</strong> sangat menghargai privasi Anda. Saat Anda berinteraksi dengan situs web kami atau melakukan pemesanan, kami mungkin mengumpulkan informasi berikut:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informasi Identitas Pribadi (Nama, alamat email, nomor telepon).</li>
                <li>Informasi Pengiriman (Alamat pengiriman lengkap untuk pesanan hampers dan kue).</li>
                <li>Informasi Transaksi (Rincian pesanan dan metode pembayaran).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-brand-brown mb-4">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p className="mb-4">Informasi yang kami kumpulkan digunakan secara eksklusif untuk:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Memproses, mengonfirmasi, dan mengirimkan pesanan Anda.</li>
                <li>Berkomunikasi dengan Anda mengenai status pesanan.</li>
                <li>Mengirimkan informasi promo atau newsletter (hanya jika Anda telah berlangganan).</li>
                <li>Meningkatkan layanan pelanggan dan pengalaman berbelanja di website kami.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-brand-brown mb-4">3. Keamanan Data</h2>
              <p>
                Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data pribadi Anda dari akses, perubahan, pengungkapan, atau penghancuran yang tidak sah. Data transaksi Anda tidak akan pernah kami jual atau bagikan kepada pihak ketiga untuk tujuan pemasaran tanpa izin Anda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-brand-brown mb-4">4. Perubahan Kebijakan</h2>
              <p>
                Kami berhak untuk memperbarui Kebijakan Privasi ini kapan saja. Setiap perubahan akan diumumkan di halaman ini dengan tanggal "Terakhir diperbarui" yang direvisi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-brand-brown mb-4">5. Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin menghapus data Anda dari sistem kami, silakan hubungi kami melalui email di <strong>inirasabakery@gmail.com</strong> atau WhatsApp di <strong>0851-8607-4311</strong>.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
