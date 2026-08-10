import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Heart } from 'lucide-react';

export default function PhotoGallery() {
  const images = [
    {
      src: '/images/couple-portrait.jpg',
      caption: 'Basil & Ansa — Shared Smiles & Forever Ahead'
    },
    {
      src: '/images/gallery-1.jpg',
      caption: 'Two Rings, One Sacred Covenant'
    },
    {
      src: '/images/wedding-invitation-card.jpg',
      caption: 'Official Invitation Card'
    },
    {
      src: '/images/church-bg.jpg',
      caption: 'St. George Jacobite Syrian Church, Kanniyambetta'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Title */}
        <span className="font-cinzel text-xs tracking-widest text-[#9A7B38] font-bold uppercase block mb-1">
          CHERISHED MOMENTS
        </span>
        <h2 className="font-script text-5xl sm:text-6xl text-[#8B263E] my-1">
          Memories & Gallery
        </h2>
        <div className="flex items-center justify-center gap-3 my-3">
          <span className="h-px w-12 bg-[#E5C384]" />
          <span className="text-[#C5A059] text-sm">❀</span>
          <span className="h-px w-12 bg-[#E5C384]" />
        </div>

        {/* Main Featured Photo Carousel Slider */}
        <div className="relative mt-8 max-w-lg mx-auto aspect-[3/4] sm:aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-[#C5A059]/20 group">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            className="w-full h-full object-cover transition-all duration-700 cursor-pointer"
            onClick={() => setSelectedImage(images[currentIndex])}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-left text-white pointer-events-none">
            <p className="font-serif-display italic text-sm sm:text-base font-semibold">
              {images[currentIndex].caption}
            </p>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setSelectedImage(images[currentIndex])}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
            title="Expand Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail Pagination Strip */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? 'border-[#8B263E] scale-110 shadow-md'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[400] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] text-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl shadow-2xl object-contain border border-[#E5C384]"
            />
            <p className="font-serif-display text-white italic text-lg mt-4">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
