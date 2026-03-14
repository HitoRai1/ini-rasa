"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Gambar Utama yang Bisa Diklik */}
      <div 
        onClick={() => setIsOpen(true)}
        className="bg-brand-cream/50 rounded-2xl aspect-square overflow-hidden flex items-center justify-center border border-brand-sand/30 p-4 cursor-pointer group relative"
        title="Klik untuk memperbesar"
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover rounded-xl shadow-sm group-hover:scale-105 transition duration-500" 
        />
        
        {/* Ikon Kaca Pembesar yang Muncul Saat Disorot Mouse */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/10 rounded-2xl">
          <div className="bg-white/90 text-brand-brown px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg backdrop-blur-sm transform scale-95 group-hover:scale-100 transition">
            <ZoomIn className="w-4 h-4" /> Lihat Detail
          </div>
        </div>
      </div>

      {/* Jendela Pop-up Gambar Besar */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setIsOpen(false)} // Tutup kalau background hitam diklik
        >
          {/* Tombol Silang (Close) */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-brand-sand transition bg-black/50 rounded-full p-2"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Gambar Ukuran Penuh */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Supaya tidak tertutup kalau gambarnya yang diklik
          >
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      )}
    </>
  );
}