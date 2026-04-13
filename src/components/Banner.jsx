import React from 'react';
import { HiPlus } from 'react-icons/hi';

const Banner = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-16 px-4 md:py-24 bg-white">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1e293b] tracking-tight mb-6">
                Friends to keep close in your life
            </h1>

            <p className="max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed mb-10">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.
            </p>

            <button className="btn bg-[#284e42] hover:bg-[#1a352d] text-white border-none normal-case px-8 rounded-md flex items-center gap-2 text-base shadow-sm h-12">
                <HiPlus className="text-xl" />
                Add a Friend
            </button>
        </section>
    );
};

export default Banner;