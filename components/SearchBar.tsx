"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(currentQuery);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/menu?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push(`/menu`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-md mx-auto w-full mb-8">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari kue (misal: Nastar, Lapis Legit)..."
        className="w-full bg-white border border-brand-sand/50 rounded-full pl-6 pr-12 py-3.5 text-brand-brown focus:outline-none focus:border-brand-sage focus:ring-4 focus:ring-brand-sage/10 transition shadow-sm placeholder:text-brand-brown/40"
      />
      <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-brand-cream/50 rounded-full text-brand-brown/70 hover:text-brand-brown hover:bg-brand-sage/20 transition">
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}
