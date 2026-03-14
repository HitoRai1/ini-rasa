import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Clock, User, Tag, Facebook, Twitter, Link as LinkIcon } from "lucide-react";

export default async function ReadArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // Data statis artikel dengan tambahan foto cover, waktu baca, dan tags
  const articleData = {
    id: resolvedParams.id,
    title: "Cara Menyimpan Kue Tart Agar Tetap Lembut Berhari-hari",
    date: "14 Maret 2026",
    readTime: "3 Menit Baca",
    author: "Chef Ini Rasa",
    role: "Head Pastry Chef",
    coverImage: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp",
    tags: ["Tips & Trik", "Penyimpanan", "Kue Tart"],
    // Isi artikel format HTML yang sudah dirapikan susunannya
    content: `
      <p>Pernahkah kamu membeli kue tart yang lezat untuk perayaan, namun keesokan harinya teksturnya menjadi keras dan krimnya kaku setelah disimpan di kulkas? Jangan khawatir, ini adalah masalah umum yang solusinya sangat sederhana jika kamu tahu rahasia dapur para profesional.</p>
      
      <blockquote>
        "Kunci utama dari kelembutan kue yang disimpan di kulkas bukanlah pada suhu dinginnya, melainkan pada bagaimana kita melindunginya dari udara kering yang menyerap kelembapan."
      </blockquote>

      <h3>1. Jangan Biarkan Terbuka Begitu Saja</h3>
      <p>Kulkas memiliki sirkulasi udara yang sangat kering. Jika kue tart dimasukkan tanpa penutup, kelembapan alami dari spons kue akan tersedot habis oleh udara kulkas dalam hitungan jam. Kunci utamanya adalah perlindungan berlapis:</p>
      <ul>
        <li>Selalu gunakan wadah kedap udara (tupperware besar) yang bersih.</li>
        <li>Jika tidak ada wadah, tutup rapat kotak kardus bawaan kue tersebut dengan selotip di setiap celahnya.</li>
      </ul>
      
      <h3>2. Plastik Wrap untuk Kue yang Sudah Dipotong</h3>
      <p>Jika kue sudah dipotong, bagian dalam (spons kue) akan terekspos langsung. Ini adalah jalan masuk utama bagi udara kering. Untuk mencegahnya, ambil selembar <em>plastic wrap</em> (cling film) dan tempelkan langsung menempel pada bagian spons kue yang terpotong sebelum dimasukkan ke dalam wadah tertutup. Ini akan mengunci kelembapannya 100%.</p>

      <h3>3. Rahasia Emas: Kesabaran Sebelum Dinikmati</h3>
      <p>Ini adalah bagian krusial yang paling sering dilupakan orang! <strong>Jangan pernah langsung memakan kue yang baru keluar dari kulkas.</strong> Mengapa? Karena <em>buttercream</em> premium terbuat dari mentega asli, yang secara alami akan membeku dan mengeras di suhu dingin.</p>
      <p>Keluarkan potongan kue yang ingin dimakan, dan <strong>diamkan di suhu ruang selama 15-30 menit</strong> sebelum dinikmati. Trik sederhana ini akan memberikan waktu bagi mentega untuk melunak, mengembalikan tekstur spons yang empuk, dan membuat buttercream kembali lembut dan lumer sempurna di mulutmu.</p>
    `
  };
  
  return (
    <div className="min-h-screen bg-[#faf9f7] pb-20">
      
      {/* Hero Section Artikel (Cover Image) */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-brand-sand/20">
        <img 
          src={articleData.coverImage} 
          alt={articleData.title} 
          className="w-full h-full object-cover"
        />
        {/* Gradasi gelap di bawah gambar supaya teks nanti lebih terbaca jika ada overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-32 relative z-10">
        
        {/* Kotak Konten Utama */}
        <div className="bg-white rounded-t-3xl md:rounded-3xl shadow-xl p-6 sm:p-10 md:p-16 border border-brand-sand/20">
          
          {/* Breadcrumb / Tombol Kembali */}
          <Link href="/artikel" className="inline-flex items-center gap-2 text-brand-brown/50 hover:text-brand-sage transition mb-8 text-sm font-semibold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> 
            Kembali ke Artikel
          </Link>

          {/* Meta Info (Tanggal & Waktu Baca) */}
          <div className="flex flex-wrap items-center gap-6 text-brand-brown/60 text-sm font-medium mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-sage" />
              <span>{articleData.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-sage" />
              <span>{articleData.readTime}</span>
            </div>
          </div>

          {/* Judul Artikel */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-brown leading-[1.15] mb-8">
            {articleData.title}
          </h1>

          {/* Author Profil */}
          <div className="flex items-center gap-4 py-6 border-y border-brand-sand/40 mb-10">
            <div className="w-12 h-12 bg-brand-sand/30 rounded-full flex items-center justify-center text-brand-brown">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-brand-brown">{articleData.author}</p>
              <p className="text-sm text-brand-brown/60">{articleData.role}</p>
            </div>
          </div>

          {/* ISI ARTIKEL
            Di sini kita menggunakan Tailwind Arbitrary Variants (&>) untuk menyulap HTML mentah 
            menjadi desain yang sangat rapi tanpa perlu mengedit HTML-nya satu per satu.
          */}
          <div 
            className="
              text-lg md:text-xl text-brand-brown/80 leading-loose
              [&>p]:mb-8 
              [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-serif [&>h3]:font-bold [&>h3]:text-brand-brown [&>h3]:mt-12 [&>h3]:mb-6
              [&>ul]:list-none [&>ul]:pl-0 [&>ul]:mb-8 [&>ul]:space-y-3
              [&>ul>li]:relative [&>ul>li]:pl-6
              [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-[0.6rem] [&>ul>li::before]:w-2 [&>ul>li::before]:h-2 [&>ul>li::before]:bg-brand-sage [&>ul>li::before]:rounded-full
              [&>blockquote]:border-l-4 [&>blockquote]:border-brand-sage [&>blockquote]:bg-brand-sand/10 [&>blockquote]:p-6 [&>blockquote]:md:p-8 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-brand-brown [&>blockquote]:font-serif [&>blockquote]:text-xl [&>blockquote]:md:text-2xl [&>blockquote]:my-10 [&>blockquote]:leading-relaxed
              [&>strong]:text-brand-brown [&>strong]:font-bold
            "
            dangerouslySetInnerHTML={{ __html: articleData.content }}
          />
          
          {/* Footer Artikel: Tags & Share */}
          <div className="mt-16 pt-8 border-t border-brand-sand/40 flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            {/* Tags */}
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="w-4 h-4 text-brand-brown/50 mr-2" />
              {articleData.tags.map((tag, index) => (
                <span key={index} className="bg-brand-sand/20 text-brand-brown px-3 py-1 rounded-full text-sm font-medium hover:bg-brand-sand/40 transition cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-3">
              <span className="font-medium text-brand-brown text-sm mr-2">Bagikan:</span>
              <button className="w-10 h-10 rounded-full bg-brand-sand/20 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition text-brand-brown" title="Share to Facebook">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-brand-sand/20 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition text-brand-brown" title="Share to Twitter">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-brand-sand/20 flex items-center justify-center hover:bg-brand-brown hover:text-white transition text-brand-brown" title="Copy Link">
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}