import React, { useState } from 'react';
import { Heart, Share2, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Basil & Ansa Wedding Invitation',
        text: 'Join us in celebrating the wedding of Basil & Ansa on 31st August 2026!',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="bg-[#1A1615] text-[#FAF7F2] py-16 px-4 sm:px-6 text-center border-t border-[#C5A059]/30 relative z-10">
      <div className="max-w-2xl mx-auto space-y-6">
        
        <span className="font-cinzel text-xs tracking-[0.3em] text-[#E5C384] uppercase font-semibold">
          WITH LOVE
        </span>

        <h3 className="font-script text-6xl text-[#FAF7F2] my-2">
          Basil & Ansa
        </h3>

        <div className="flex items-center justify-center gap-3 text-[#E5C384]">
          <span className="h-px w-12 bg-[#E5C384]/40" />
          <Heart className="w-4 h-4 fill-[#8B263E] text-[#8B263E]" />
          <span className="h-px w-12 bg-[#E5C384]/40" />
        </div>

        <p className="font-serif-display italic text-lg text-[#FAF7F2]/80">
          31st August 2026 • Monday
        </p>

        <p className="font-cinzel text-xs tracking-widest text-[#E5C384]/90 font-bold">
          #BASILWEDSANSA
        </p>

        <div className="pt-4 flex justify-center">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#E5C384]/40 font-cinzel text-xs font-semibold transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" /> Link Copied!
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-[#E5C384]" /> Share Invitation
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-[#FAF7F2]/40 font-serif-display pt-8">
          Crafted with love for Basil & Ansa's Special Day
        </p>

      </div>
    </footer>
  );
}
