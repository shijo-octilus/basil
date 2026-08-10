import React from 'react';
import { X, Download, ZoomIn, Eye } from 'lucide-react';

export default function InvitationCardModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative max-w-2xl w-full max-h-[90vh] bg-[#FAF7F2] rounded-3xl border-2 border-[#E5C384] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5C384]/40 bg-white/80">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#8B263E]" />
            <h3 className="font-cinzel text-xs font-bold tracking-widest text-[#2C2623] uppercase">
              Official Wedding Invitation Card
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/images/wedding-invitation-card.jpg"
              download="Basil_Ansa_Wedding_Invitation.jpg"
              className="p-2 rounded-full bg-[#FAF7F2] text-[#8B263E] hover:bg-[#8B263E] hover:text-white transition-colors"
              title="Download Invitation Card"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#FAF7F2] text-[#2C2623] hover:bg-gray-200 transition-colors"
              title="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Card Image Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-70px)] flex justify-center bg-[#1A1615]">
          <img
            src="/images/wedding-invitation-card.jpg"
            alt="Basil & Ansa Wedding Invitation Card"
            className="w-full h-auto max-w-lg rounded-xl shadow-2xl border border-[#E5C384]/40 object-contain"
          />
        </div>

      </div>
    </div>
  );
}
