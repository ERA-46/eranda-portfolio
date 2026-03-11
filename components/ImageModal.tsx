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

  // Keyboard navigation
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

  // Swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
  });

  return (
    <>

      <img
        src={images[0]}
        alt="Project screenshot"
        className="w-full h-60 object-cover cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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