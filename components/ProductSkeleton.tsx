export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-sand/30 flex flex-col animate-pulse">
      {/* Gambar Skeleton */}
      <div className="aspect-square bg-brand-sand/30 w-full"></div>

      {/* Konten Skeleton */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Kategori */}
        <div className="h-3 bg-brand-sand/40 rounded-full w-1/4 mb-3"></div>
        
        {/* Nama Produk (2 baris) */}
        <div className="h-5 bg-brand-sand/50 rounded-full w-3/4 mb-2"></div>
        <div className="h-5 bg-brand-sand/50 rounded-full w-1/2 mb-4"></div>
        
        {/* Deskripsi (3 baris) */}
        <div className="h-3 bg-brand-sand/30 rounded-full w-full mb-2"></div>
        <div className="h-3 bg-brand-sand/30 rounded-full w-full mb-2"></div>
        <div className="h-3 bg-brand-sand/30 rounded-full w-5/6 mb-6"></div>
        
        {/* Harga & Tombol */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-sand/30">
          <div className="h-5 bg-brand-sand/50 rounded-full w-1/3"></div>
          <div className="h-10 w-10 bg-brand-sand/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
