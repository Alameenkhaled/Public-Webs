"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/lib/gallery-data";

const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <div className="sticky top-[84px] z-10 bg-background-light/80 pt-2 pb-4 backdrop-blur-sm dark:bg-background-dark/80">
        <div className="flex gap-3 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-5 ${
                activeCategory === category
                  ? "bg-primary text-background-light"
                  : "bg-surface-light dark:bg-surface-dark"
              }`}
            >
              <p className="text-sm font-semibold">{category}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="masonry-grid p-4">
        {filteredItems.map((item, index) => (
          <div key={index} className="masonry-item group relative cursor-pointer overflow-hidden rounded-lg">
            <Image
              className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="font-body text-sm font-semibold text-white">{item.title}</h3>
              <p className="font-body text-xs text-gray-300">By {item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
