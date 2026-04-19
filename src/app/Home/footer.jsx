import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <svg className="w-8 h-8 text-purple-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM8 4C8 2.9 7.1 2 6 2C4.9 2 4 2.9 4 4C4 5.1 4.9 6 6 6C7.1 6 8 5.1 8 4ZM18 2C16.9 2 16 2.9 16 4C16 5.1 16.9 6 18 6C19.1 6 20 5.1 20 4C20 2.9 19.1 2 18 2ZM12 7C9.8 7 8 8.8 8 11V16C8 17.1 8.9 18 10 18H14C15.1 18 16 17.1 16 16V11C16 8.8 14.2 7 12 7ZM6 7C4.9 7 4 7.9 4 9V14C4 15.1 4.9 16 6 16C7.1 16 8 15.1 8 14V9C8 7.9 7.1 7 6 7ZM18 7C16.9 7 16 7.9 16 9V14C16 15.1 16.9 16 18 16C19.1 16 20 15.1 20 14V9C20 7.9 19.1 7 18 7Z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Floral Haven</h2>
            </div>
            <p className="text-sm text-purple-200 mb-6 leading-relaxed">
              More Than 10000 House And Apartment For The Sale And Rental Of Real Estate With Amazing Apis.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white text-purple-800 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white text-purple-800 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white text-purple-800 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
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
                className="w-full px-4 py-2 rounded-lg bg-purple-100 text-purple-900 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                
                className="w-full px-6 py-2 bg-pink-300 text-purple-900 font-semibold rounded-lg hover:bg-pink-400 transition-colors cursor-pointer"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-purple-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-300">
          <p>Copyright ©2022 Floral Haven. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}