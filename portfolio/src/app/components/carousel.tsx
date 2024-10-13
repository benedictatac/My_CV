"use client";
//changed file
import { useState } from "react";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  const slides = [
    "/Pictures/20240824_192403.jpg",
    "/Pictures/20240825_155404.jpg",
    "/Pictures/411461220_744859607678216_2620351671954661759_n.jpg"
  ];

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div id="indicators-carousel" className="relative w-full mb-8" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative w-full h-48 sm:h-56 md:h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ${index === slideIndex ? "opacity-100" : "opacity-0"}`}
            data-carousel-item={index === slideIndex ? "active" : ""}
          >
            <img
              src={slide}
              className="w-full h-full object-contain"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === slideIndex ? "bg-white" : "bg-gray-400"}`}
            aria-current={index === slideIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrevSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNextSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
