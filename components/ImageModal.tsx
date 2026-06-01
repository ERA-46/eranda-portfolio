"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSwipeable } from "react-swipeable";

type Props = {
  images: string[];
};

export default function ImageModal({ images }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
  });

  return (
    <>

      <div
        className="relative w-full h-52 cursor-pointer overflow-hidden group bg-gray-50"
        onClick={() => { setCurrent(0); setIsOpen(true); }}
      >
        <img
          src={images[0]}
          alt="Project screenshot"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h6m-6 0v6m0-6l6 6m4.5-6h6m0 0v6m0-6l-6 6M3.75 20.25h6m-6 0v-6m0 6l6-6m4.5 6h6m0 0v-6m0 6l-6-6" />
              </svg>
            </div>
            {images.length > 1 && (
              <span className="text-white/80 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
                {images.length} images, please click to view in full size
              </span>
            )}
          </div>
        </div>
      </div>

      {mounted && isOpen && createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 9999, backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setIsOpen(false)}
        >

          {images.length > 1 && (
            <div
              className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {current + 1} / {images.length}
            </div>
          )}

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-2"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            {...swipeHandlers}
            className="flex items-center justify-center w-full h-full px-16"
          >
            <img
              key={current}
              src={images[current]}
              alt={`Project screenshot ${current + 1}`}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              style={{ animation: "fadeIn 0.2s ease" }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 text-white/30 hover:text-white transition-colors p-2"
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 text-white/30 hover:text-white transition-colors p-2"
                aria-label="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    backgroundColor: i === current ? "white" : "rgba(255,255,255,0.3)",
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.98); }
              to   { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>,
        document.body
      )}
    </>
  );
}