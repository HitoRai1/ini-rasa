import { supabase } from "../lib/supabase";
import AddToCartButton from "../../components/AddToCartButton";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import SearchBar from "../../components/SearchBar";
import WishlistButton from "../../components/WishlistButton";

// Gambar untuk katalog kategori
const categoryImages = {
  hampers: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp",
  cake: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp",
  cookies: "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp"
};

const imageUrls = [
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/sidra.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/tiramisu.webp", 
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/dubai%20cokelat.webp"  
];

type Props = {
  searchParams: Promise<{ category?: string; q?: string }>
};

export default async function MenuPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category?.toLowerCase();
  const queryParam = params.q?.toLowerCase();

  const isCatalog = !category && !queryParam;

  let products: any[] | null = [];
  let error = null;

  if (!isCatalog) {
    let query = supabase.from("products").select("*").order("id", { ascending: true });
    
    if (category) {
      query = query.ilike('category', `%${category}%`);
    }

    if (queryParam) {
      query = query.ilike('name', `%${queryParam}%`);
    }

    const { data, error: fetchError } = await query;
    products = data;
    error = fetchError;

    if (error) console.error("Gagal mengambil data:", error);
  }

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(angka);
  };

  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isCatalog ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-brand-brown mb-4">Katalog Menu</h1>
              <p className="text-brand-brown/70 max-w-2xl mx-auto mb-8">
                Pilih kategori sajian favoritmu. Mulai dari kue premium hingga hampers eksklusif.
              </p>
              <SearchBar />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { id: "hampers", name: "Hampers", image: categoryImages.hampers },
                { id: "cake", name: "Cake", image: categoryImages.cake },
                { id: "cookies", name: "Cookies", image: categoryImages.cookies }
              ].map((cat) => (
                <Link key={cat.id} href={`/menu?category=${cat.id}`} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl aspect-square sm:aspect-auto sm:h-96 block border border-brand-sand/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all z-10 duration-500" />
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-8 sm:pb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-widest uppercase drop-shadow-md group-hover:-translate-y-2 transition-transform duration-500">{cat.name}</h2>
                    <span className="text-brand-cream/80 text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 delay-100">
                      Lihat Koleksi &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <Link href="/menu" className="inline-flex items-center text-brand-sage hover:text-brand-brown transition font-medium group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Kembali ke Katalog
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-brand-brown mb-4 capitalize">
                {queryParam ? `Pencarian: "${queryParam}"` : category}
              </h1>
              <p className="text-brand-brown/70 max-w-2xl mx-auto mb-8">
                {queryParam 
                  ? `Menampilkan hasil pencarian untuk "${queryParam}".`
                  : `Pilihan ${category} terbaik untuk menemani momen spesialmu.`}
              </p>
              <SearchBar />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products?.map((product, index) => {
                const finalImage = product.image_url || 
                  (category && categoryImages[category as keyof typeof categoryImages]) || 
                  imageUrls[index % imageUrls.length];

                return (
                  <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-sand/30 hover:shadow-md transition group flex flex-col">
                    <div className="aspect-square bg-brand-sand/20 relative flex items-center justify-center overflow-hidden">
                      <WishlistButton product={{...product, image_url: finalImage}} />
                      <Link href={`/menu/${product.id}`} className="w-full h-full relative">
                        <Image 
                          src={finalImage} 
                          alt={product.name} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition duration-500" 
                        />
                      </Link>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <p className="text-xs font-bold text-brand-sage uppercase tracking-wider mb-1">{product.category}</p>
                      
                      <Link href={`/menu/${product.id}`}>
                        <h3 className="text-lg font-bold text-brand-brown mb-2 line-clamp-2 leading-tight hover:text-brand-sage transition">{product.name}</h3>
                      </Link>
                      
                      <p className="text-sm text-brand-brown/60 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-sand/30">
                        <span className="text-brand-brown font-bold">{formatRupiah(product.price)}</span>
                        <AddToCartButton product={{...product, image_url: finalImage}} />
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {products?.length === 0 && (
                <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-brand-sand/30 shadow-sm">
                  <p className="text-lg text-brand-brown/50 mb-4">
                    {queryParam ? `Maaf, tidak ada kue yang cocok dengan pencarian "${queryParam}".` : `Belum ada menu di kategori ini.`}
                  </p>
                  <Link href="/menu" className="inline-block bg-brand-sage hover:bg-brand-brown text-white font-medium py-2 px-6 rounded-full transition-colors">
                    Kembali ke Katalog
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}