export default function Logo({ className = "" }: { className?: string }) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Ikon Vektor Rolling Pin (Penggilas Adonan) */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-sage" // Warna hijau sage yang elegan
        >
          <path 
            d="M23.5 8.5L8.5 23.5" 
            stroke="currentColor" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />
          <path 
            d="M27.5 4.5L25.5 6.5M6.5 25.5L4.5 27.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
        
        {/* Teks Logo */}
        <span className="text-2xl font-serif font-bold tracking-tight text-brand-brown">
          Ini Rasa<span className="text-brand-sage">.</span>
        </span>
      </div>
    );
  }