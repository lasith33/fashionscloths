import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Gallestyle</title>
      </Head>

      <div className="bg-white text-gray-800">

        {/* Hero Section */}
        <div className="bg-black text-white py-20 text-center">
          <h1 className="text-4xl font-bold">
            About <span className="text-[#D4AF37]">Gallestyle</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Fashion inspired by elegance, crafted for you.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <img
            src="/images/about.jpg"
            alt="About Gallestyle"
            className="rounded-lg shadow-lg"
          />

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Gallestyle is a modern clothing brand inspired by the beauty and culture of Galle. 
              We provide high-quality fashion for men, women, and kids with a focus on comfort, style, and affordability.
            </p>

            <p className="text-gray-600 mb-4">
              Our mission is to bring you the latest trends while maintaining premium quality and customer satisfaction.
            </p>

            <p className="text-gray-600">
              Whether you're looking for casual wear or something special, Gallestyle has something just for you.
            </p>
          </div>

        </div>

        {/* Values Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold mb-10">Our Values</h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Quality</h3>
                <p className="text-gray-600">
                  We ensure premium materials and long-lasting products.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Style</h3>
                <p className="text-gray-600">
                  Modern and trendy designs for every occasion.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our top priority.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}