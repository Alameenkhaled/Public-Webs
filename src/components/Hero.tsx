"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxBg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxBg.current) {
        const offset = window.pageYOffset;
        parallaxBg.current.style.transform = `translateY(${offset * 0.3}px) translateZ(0) scale(1.03)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={parallaxBg}
        className="parallax-bg absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-fade-in-scale-up"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBB6u-4gOIbQozcP6GDxL3fEcWwnjxLIDMRM7YMJ4INQDxAizYVq0pDN4VzHkAH8mdizzKIPUpuYbO1Ei4gQHvcRsqKD9b2VbSxkTKmQoRDIYputHNWZat47HipJTLF6_KEPRUi8JD6aPs9gbbY1F6tH_6prvRP0FeqlVPvCcEB2SQqWtl5uo4d-4nCEDH3peN6Dmj_5D72Q6hqYwkfAHU1YvSbTkJO6uABJFdmdFX7j4_SXAtWAObJZiWmeHThKCgEJMjcr_zBB0YD")`,
        }}
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center">
        <div className="flex animate-fade-in-up flex-col gap-2 [animation-delay:0.5s]">
          <h1 className="font-display text-6xl font-black leading-tight tracking-tight text-white sm:text-8xl">
            Digital Atelier
          </h1>
          <h2 className="text-base font-normal leading-normal text-white sm:text-lg">
            Where Art Meets the Digital Canvas.
          </h2>
        </div>
        <div className="absolute bottom-10 flex animate-fade-in-up flex-col items-center gap-2 text-white/80 [animation-delay:0.9s]">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <span className="material-symbols-outlined animate-bounce">expand_more</span>
        </div>
      </div>
    </div>
  );
}
