import React, { useState, useRef, useEffect } from "react";

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const slide = container.children[activeIndex] as HTMLElement;
      if (slide) {
        container.scrollTo({
          left: slide.offsetLeft - 16,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full">
      {/* Contenedor scroll */}
      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth py-4"
      >
        {items.map((item, idx) => (
         <div
         key={idx}
         className="inline-flex items-center justify-center flex-shrink-0 relative cursor-pointer transition-transform duration-500 transform hover:scale-105 hover:z-20 hover:shadow-xl snap-center"
       >
         <div className="flex items-center justify-center max-w-[90vw] max-h-[80vh]">
           {item}
         </div>
       </div>
       
        ))}
      </div>

      {/* Flechas */}
      <button
        onClick={prevSlide}
        className="absolute  bg-black/10 inset-y-0 sm:-left-10  flex items-center justify-center w-10 h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute  bg-black/10 inset-y-0 sm:-right-10 flex items-center justify-center w-10 h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`size-3 rounded-full border${idx === activeIndex
              ? "bg-blue-600 border-blue-600"
              : "bg-gray-200 border-gray-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
