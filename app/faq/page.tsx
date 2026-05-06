import React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara memesan kue atau hampers di Ini Rasa?",
    answer: "Anda dapat melihat katalog menu kami di website. Setelah menemukan kue yang diinginkan, tekan tombol 'Tambah ke Keranjang'. Anda kemudian dapat melanjutkan ke halaman Checkout yang akan mengarahkan Anda ke WhatsApp admin kami untuk konfirmasi dan pembayaran."
  },
  {
    question: "Apakah bisa *custom* (pesan khusus) desain kue tart?",
    answer: "Saat ini kami fokus pada menu yang ada di katalog untuk menjaga konsistensi dan kualitas rasa terbaik. Namun, kami menerima permintaan penulisan nama atau ucapan singkat di atas kue tanpa biaya tambahan."
  },
  {
    question: "Berapa lama waktu pemesanan (Pre-Order)?",
    answer: "Untuk memastikan kue selalu segar saat diterima (freshly baked), kami menerapkan sistem Pre-Order minimal H-2 (48 jam) sebelum waktu pengiriman."
  },
  {
    question: "Apakah Ini Rasa menerima pesanan dalam jumlah besar (Corporate Hampers)?",
    answer: "Tentu saja! Kami sangat berpengalaman menangani pesanan hampers perusahaan untuk momen Lebaran, Natal, atau event khusus. Hubungi admin kami melalui WhatsApp untuk mendapatkan penawaran harga khusus (*corporate rate*)."
  },
  {
    question: "Bagaimana sistem pengirimannya?",
    answer: "Untuk kue tart yang rapuh, kami sangat menyarankan pengiriman menggunakan layanan mobil (seperti GrabCar Express atau Lalamove Car) agar kue tidak hancur. Untuk cookies kering dan hampers, dapat dikirim menggunakan kurir motor instan/sameday."
  },
  {
    question: "Apakah semua kue di Ini Rasa Halal?",
    answer: "Ya, 100%. Kami tidak menggunakan alkohol, rhum, pengawet buatan, atau bahan non-halal lainnya di semua resep kami. Kami hanya menggunakan bahan baku premium yang terjamin kehalalannya."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center text-brand-sage hover:text-brand-brown transition font-medium mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown mb-6">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
            Temukan jawaban cepat mengenai pemesanan, pengiriman, dan layanan dari Ini Rasa.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-sand/30 hover:shadow-md transition">
              <h3 className="text-xl font-serif font-bold text-brand-brown mb-3 flex justify-between items-start">
                {faq.question}
              </h3>
              <p className="text-brand-brown/70 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-brand-cream/30 p-8 rounded-3xl text-center border border-brand-sand/30">
          <h2 className="text-2xl font-serif font-bold text-brand-brown mb-4">Masih punya pertanyaan?</h2>
          <p className="text-brand-brown/70 mb-6">Jangan ragu untuk bertanya langsung kepada tim kami.</p>
          <a href="https://wa.me/6285186074311" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-sage hover:bg-brand-brown text-white px-8 py-3 rounded-full font-bold transition shadow-md hover:shadow-lg">
            Hubungi via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
