import { supabase } from "../lib/supabase";
import AddToCartButton from "../../components/AddToCartButton";

// Mengembalikan daftar link WebP yang super cepat
const imageUrls = [
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/shafa.webp", // 1. Hamper Shafa
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/sidra.webp", // 2. Hamper Sidra
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/cookies.webp", // 3. Cookies
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/trio%20cake.webp", // 4. Cake Trio
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/tiramisu.webp", // 5. Tiramisu
  "https://dwxnfjbdbvulzpzenffk.supabase.co/storage/v1/object/public/ini-rasa/dubai%20cokelat.webp"  // 6. Dubai Chocolate
];

export default async function MenuPage() {
  // 1. Mengambil data ASLI dari Supabase
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Gagal mengambil data:", error);
  }

  // 2. Fungsi untuk mengubah angka menjadi format Rupiah (Rp)
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-brown mb-4">
            Katalog Menu
          </h1>
          <p className="text-brand-brown/70 max-w-2xl mx-auto">
            Pilih sajian favoritmu. Mulai dari kue premium hingga hampers eksklusif, semuanya dibuat dengan bahan berkualitas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product, index) => {
            
            // Logika pintar: pakai gambar dari database, kalau kosong pakai daftar WebP di atas
            const finalImage = product.image_url || imageUrls[index];

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-sand/30 hover:shadow-md transition group flex flex-col"
              >
                
                {/* Bagian Foto Produk yang sudah diperbaiki */}
                <div className="aspect-square bg-brand-sand/20 relative flex items-center justify-center overflow-hidden">
                  <img 
                    src={finalImage} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs font-bold text-brand-sage uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-brand-brown mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-brand-brown/60 mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-sand/30">
                    <span className="text-brand-brown font-bold">
                      {formatRupiah(product.price)}
                    </span>
                    
                    {/* Tombol Keranjang */}
                    <AddToCartButton product={{...product, image_url: finalImage}} />
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}