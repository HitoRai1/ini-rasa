import { supabase } from "../../lib/supabase";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AddToCartBigButton from "../../../components/AddToCartBigButton";
import ImageModal from "../../../components/ImageModal";
import type { Metadata } from "next";

const imageUrls = [
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/sidra.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/tiramisu.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/dubai%20cokelat.webp"  
];

// --- SEO: Metadata Dinamis Per Produk ---
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const { data: product } = await supabase
    .from("products").select("name, description, image_url, category").eq("id", id).single();

  if (!product) return { title: 'Produk Tidak Ditemukan | Ini Rasa' };

  const imgIndex = (parseInt(id) - 1) % imageUrls.length;
  const image = product.image_url || imageUrls[imgIndex];

  return {
    title: `${product.name} | Ini Rasa Bakery`,
    description: product.description || `Pesan ${product.name} dari Ini Rasa Bakery & Hampers Premium Jakarta.`,
    openGraph: {
      title: `${product.name} | Ini Rasa`,
      description: product.description || `Pesan ${product.name} dari Ini Rasa.`,
      images: [{ url: image, width: 800, height: 800, alt: product.name }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Ini Rasa`,
      description: product.description || '',
      images: [image],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  // 1. Mengambil data produk yang sedang dilihat
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  // 2. Mengambil rekomendasi cerdas:
  //    - Utamakan produk dari kategori yang SAMA (max 2 produk)
  //    - Jika masih kurang dari 3, tambahkan dari kategori lain
  let recommendations: any[] = [];

  if (product) {
    // Ambil dari kategori yang sama (kecuali produk saat ini), max 2
    const { data: sameCat } = await supabase
      .from("products")
      .select("*")
      .eq("category", product.category)
      .neq("id", productId)
      .limit(2);

    recommendations = sameCat || [];

    // Jika kurang dari 3, tambahkan dari kategori berbeda
    if (recommendations.length < 3) {
      const existingIds = [productId, ...recommendations.map((p) => p.id)];
      const { data: otherCat } = await supabase
        .from("products")
        .select("*")
        .not("id", "in", `(${existingIds.join(",")})`)
        .limit(3 - recommendations.length);

      recommendations = [...recommendations, ...(otherCat || [])];
    }
  }

  if (error) console.error("Gagal mengambil data:", error);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-brand-brown">Kue tidak ditemukan 😢</h1>
        <Link href="/menu" className="text-brand-sage hover:underline font-medium">
          Kembali ke Menu
        </Link>
      </div>
    );
  }

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);
  };

  const imageIndex = (product.id - 1) % imageUrls.length;
  const finalImage = product.image_url || imageUrls[imageIndex];

  // JSON-LD Structured Data untuk Google Rich Results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: finalImage,
    brand: { '@type': 'Brand', name: 'Ini Rasa' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: product.price,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Ini Rasa Bakery' },
    },
  };

  return (
    <div className="min-h-screen bg-white py-12 border-t border-brand-sand/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigasi Breadcrumb */}
        <div className="mb-10 text-sm font-medium">
          <Link href="/menu" className="text-brand-brown/50 hover:text-brand-sage transition flex items-center gap-2 w-fit">
            <ArrowLeft className="w-4 h-4" /> 
            <span>Semua Produk</span>
            <span className="mx-2">/</span>
            <span className="text-brand-brown">{product.name}</span>
          </Link>
        </div>

        {/* Bagian Detail Produk Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <ImageModal src={finalImage} alt={product.name} />

          <div className="space-y-8 lg:pt-8">
            <div>
              <p className="text-sm font-bold text-brand-sage uppercase tracking-widest mb-3">{product.category}</p>
              <h1 className="text-3xl lg:text-5xl font-serif font-bold text-brand-brown mb-4 leading-tight">{product.name}</h1>
              <p className="text-2xl lg:text-3xl font-bold text-brand-brown">{formatRupiah(product.price)}</p>
            </div>

            <div className="border-y border-brand-sand/50 py-8">
              <h3 className="font-bold text-brand-brown text-lg mb-4">Informasi Produk</h3>
              <p className="text-brand-brown/80 leading-relaxed text-base">
                {product.description}
              </p>
            </div>

            <div className="pt-4 space-y-4">
               <AddToCartBigButton product={{...product, image_url: finalImage}} /> 
               <p className="text-xs text-center text-brand-brown/50 font-medium">
                 Butuh pesanan khusus? Hubungi kami via ikon keranjang setelah menambah produk.
               </p>
            </div>
          </div>
        </div>

        {/* --- FITUR BARU: MAYBE YOU LIKE --- */}
        <div className="mt-32 pt-16 border-t border-brand-sand/30">
          <h2 className="text-3xl font-serif font-bold text-brand-brown text-center mb-12">Maybe you like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {recommendations?.map((rec, idx) => {
              // Menentukan gambar untuk rekomendasi
              const recImgIndex = (rec.id - 1) % imageUrls.length;
              const recImage = rec.image_url || imageUrls[recImgIndex];

              return (
                <Link href={`/menu/${rec.id}`} key={rec.id} className="bg-white rounded-xl overflow-hidden border border-brand-sand/30 shadow-sm hover:shadow-lg transition duration-300 group flex flex-col">
                  
                  {/* Foto Produk Rekomendasi */}
                  <div className="aspect-square bg-brand-sand/10 relative overflow-hidden">
                    <img 
                      src={recImage} 
                      alt={rec.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                  </div>

                  {/* Info Bawah Persis Referensi */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-brand-brown text-lg mb-4 line-clamp-1">{rec.name}</h3>
                    
                    <div className="flex items-center justify-between mt-auto border-t border-brand-sand/30 pt-4">
                      <span className="text-brand-brown/80 font-medium text-sm">
                        {formatRupiah(rec.price)}
                      </span>
                      {/* Tombol View Product bergaya elegan */}
                      <span className="bg-[#5c5b73] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition">
                        View product
                      </span>
                    </div>
                  </div>

                </Link>
              );
            })}
          </div>
        </div>
        {/* ---------------------------------- */}

      </div>
    </div>
  );
}