"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineHome, HiOutlineClock, HiOutlineChartBar } from 'react-icons/hi';
import logoImg from '../assets/logo.png'

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: <HiOutlineHome className="w-5 h-5" /> },
    { name: 'Timeline', href: '/timeline', icon: <HiOutlineClock className="w-5 h-5" /> },
    { name: 'Stats', href: '/stats', icon: <HiOutlineChartBar className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            {/* <span className="text-[#1a1a1a]">Keen</span>
            <span className="text-[#0D3D2E]">Keeper</span> */}

            <Image src={logoImg} width={141} height={29} alt='Logo'></Image>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 font-medium ${
                  isActive 
                    ? 'bg-[#2D4F43] text-white' // Dark green active state
                    : 'text-slate-500 hover:text-slate-800' // Inactive state
                }`}
              >
                {link.icon}
                <span className="hidden sm:inline">{link.name}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;