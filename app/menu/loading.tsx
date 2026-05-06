import ProductSkeleton from "../../components/ProductSkeleton";

export default function LoadingMenu() {
  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skeleton untuk Search Bar & Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="h-10 bg-brand-sand/30 rounded-full w-1/4 animate-pulse"></div>
          <div className="h-12 bg-brand-sand/30 rounded-xl w-full md:w-1/3 animate-pulse"></div>
        </div>

        {/* Grid Skeleton Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {[...Array(8)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
