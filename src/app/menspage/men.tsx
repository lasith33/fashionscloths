"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Shoreline Top",
    price: 1490,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Prisma Tier Top",
    price: 1890,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Drape Bow Skirt",
    price: 1890,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Sweet Medow Set",
    price: 3990,
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    name: "Anarkali Skirt",
    price: 1590,
    image: "/images/product5.jpg",
  },
   {
    id: 6,
    name: "Anarkali Skirt",
    price: 1590,
    image: "/images/product5.jpg",
  },
   {
    id: 7,
    name: "Anarkali Skirt",
    price: 1590,
    image: "/images/product5.jpg",
  },
  
];

export default function MensSection() {
  return (
    <section className="py-12 px-6 mt-10 bg-gray-100">

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative w-full h-72 overflow-hidden rounded">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />

              {/* Quick View Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                <button className="bg-white text-black px-4 py-2 text-sm rounded">
                  QUICK VIEW
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 text-center">
              <h3 className="text-sm text-gray-700">{product.name}</h3>

              <p className="font-semibold text-lg mt-1">
                Rs. {product.price.toLocaleString()}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}