"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

type Props = {
  images: string[];
};

export default function ImageModal({ images }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
  });

  return (
    <>
      <div
        className="relative w-full h-60 cursor-pointer overflow-hidden group"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={images[0]}
          alt="Project screenshot"
          className="w-full h-full object-cover blur-sm scale-105 transition duration-300 group-hover:blur-md"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-2 transition duration-300 group-hover:bg-black/40">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h16.5m-16.5 0v16.5m16.5-16.5v16.5M3.75 3.75l16.5 16.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6m0 0h4.5M9 15V10.5" />
          </svg>
          <span className="text-white text-sm font-medium tracking-wide drop-shadow">
            Please click to view project screenshots
          </span>
          <span className="text-white/60 text-xs">
            {images.length} image{images.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => {setIsOpen(false);}}
        >
          <div
            {...swipeHandlers}
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[current]}
              alt="Project screenshot"
              className="max-h-[90vh] rounded-lg shadow-xl transition duration-300"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-4xl font-bold drop-shadow-[0_0_5px_black]"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-4xl font-bold drop-shadow-[0_0_5px_black]"
            >
              ›
            </button>

            <button
              onClick={() => {setCurrent(0); setIsOpen(false);}}
              className="absolute top-4 right-4 text-white text-2xl drop-shadow-[0_0_5px_black]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}