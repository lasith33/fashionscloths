import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Gallestyle</title>
      </Head>

      <div className="bg-white text-gray-800">

        {/* Hero Section */}
        <div className="bg-black text-white py-20 text-center">
          <h1 className="text-4xl font-bold">
            Contact <span className="text-[#D4AF37]">Us</span>
          </h1>
          <p className="mt-4 text-gray-300">
            We’d love to hear from you
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

          {/* Form */}
          <form className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Send Message</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#D4AF37] text-black px-6 py-3 rounded hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

            <p className="text-gray-600 mb-4">
              Have questions or need help? Reach out to us anytime.
            </p>

            <div className="space-y-3">
              <p><strong>📍 Address:</strong> Galle, Sri Lanka</p>
              <p><strong>📞 Phone:</strong> +94 77 123 4567</p>
              <p><strong>📧 Email:</strong> gallestyle@gmail.com</p>
            </div>

            {/* Map (Optional) */}
            <div className="mt-6">
              <iframe
                src="https://maps.google.com/maps?q=galle%20sri%20lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-60 rounded"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}