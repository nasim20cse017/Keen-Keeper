
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Using X icon from FA6

const Footer = () => {
  return (
    <footer className="bg-[#1a3d32] text-white py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo & Description */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>
        <p className="text-gray-300 text-center text-sm md:text-base mb-8 ">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-sm font-semibold tracking-wide">Social Links</span>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <FaXTwitter className="text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;