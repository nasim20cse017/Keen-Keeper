"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiOutlineHome, HiOutlineArrowLeft } from 'react-icons/hi2';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-8">
        <h1 className="text-[12rem] md:text-[15rem] font-black text-[#0D3D2E]  leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
        Page Not Found
      </h2>
      <p className="max-w-md text-slate-500 mb-10 leading-relaxed">
        It looks like this connection doesn't exist yet. The page you're looking for 
        might have been archived or moved to a different shelf.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button 
          onClick={() => router.back()}
          className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:text-slate-800 text-slate-600 px-8 h-12 normal-case rounded-xl flex items-center gap-2"
        >
          <HiOutlineArrowLeft className="text-xl" />
          Go Back
        </button>

        <Link 
          href="/" 
          className="btn bg-[#0D3D2E] hover:bg-[#1a352d] text-white border-none px-8 h-12 normal-case rounded-xl flex items-center gap-2 shadow-md shadow-emerald-900/10"
        >
          <HiOutlineHome className="text-xl" />
          Return Home
        </Link>
      </div>

      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
    </div>
  );
}