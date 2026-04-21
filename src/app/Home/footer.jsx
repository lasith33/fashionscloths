import { Mail, Phone, MapPin } from 'lucide-react';
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">

              <div className="flex items-center gap-3 mb-4">
              <Image
                src="/image/img/logo.png"
                alt="GalleStyle Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
             
            </div>
            
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-[#D4AF37] text-white rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#D4AF37]  rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                <span className="text-sm font-bold">@</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className='pl-30'>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-purple-200">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+023-456-789</span>
              </li>
              <li className="flex items-start gap-2 text-purple-200">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Www.Example.Com</span>
              </li>
              <li className="flex items-start gap-2 text-purple-200">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Example@Gmail.Com</span>
              </li>
              <li className="flex items-start gap-2 text-purple-200">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>No 06, Meepawala,Poddala,Galle</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get the latest information </h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-lg bg-purple-100 text-[#B8962E] placeholder-[#B8962E] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                
                className="w-full px-6 py-2 bg-[#B8962E] text-white font-semibold rounded-lg hover:bg-[#D4AF37] transition-colors cursor-pointer"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-purple-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-300">
          <p>Copyright ©2022 GalleStyle. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}