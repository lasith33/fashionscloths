export default function CategorySection() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left - Women */}
        <div className="md:col-span-2 relative">
          <img
            src="/image/img/woman.jpg"
            alt="Women"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-2xl font-bold text-black">
              Womens Wear
            </h2>
            <button className="mt-2 px-4 py-1 bg-white text-black text-sm">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">

          {/* Men */}
          <div className="relative">
            <img
              src="/image/img/mens.jpg"
              alt="Men"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute top-6 left-6">
              <h2 className="text-xl font-bold text-black">Mens Wear</h2>
              <button className="mt-2 px-4 py-1 bg-white text-black text-sm">
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom 2 */}
          <div className="grid grid-cols-2 gap-6">

            {/* Kids */}
            <div className="relative">
              <img
                src="/image/img/kids.jpg"
                alt="Kids"
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-lg font-bold text-black">Kids Wear</h2>
                <button className="mt-1 px-3 py-1 bg-white text-black text-xs">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Gift */}
            <div className="relative">
              <img
                src="/image/img/gift.jpg"
                alt="Gift"
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-lg font-bold text-black">Gift</h2>
                <button className="mt-1 px-3 py-1 bg-white text-black text-xs">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}