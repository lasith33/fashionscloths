"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const banners = [
    {
      id: 1,
      title: "Delicious Food Delivered",
      subtitle: "Order your favorite meals anytime",
      image: "/images/banner1.jpg",
    },
    {
      id: 2,
      title: "Fresh & Healthy",
      subtitle: "Quality food from top restaurants",
      image: "/images/banner2.jpg",
    },
    {
      id: 3,
      title: "Fast Delivery",
      subtitle: "Get your food in minutes",
      image: "/images/banner3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide only if more than 1 banner
  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full h-[400px] mt-14  overflow-hidden">
      
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full h-[400px] relative"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                {banner.title}
              </h1>
              <p className="mt-2 text-lg">
                {banner.subtitle}
              </p>

              <button className="mt-4 bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots (only if multiple banners) */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}