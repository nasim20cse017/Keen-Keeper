"use client";

import React, { useState } from 'react';
import { HiOutlinePhone, HiOutlineChatBubbleLeftEllipsis, HiOutlineVideoCamera, HiOutlineSearch } from "react-icons/hi2";
import { HiOutlineSearchCircle } from 'react-icons/hi';
import { useInteractions } from '@/Context/InteractionContext';

const TimelinePage = () => {
  const { timeline } = useInteractions();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const filteredTimeline = timeline
    .filter(item => (filter === 'All' || item.type === filter))
    .filter(item => item.person.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[#1e293b] mb-8">Timeline</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-grow">
            <HiOutlineSearchCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by name..." 
              className="input input-bordered w-full pl-10 bg-white"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter */}
          <select 
            className="select select-bordered bg-white"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Filter timeline</option>
            <option value="All">All types</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>

          {/* Sort */}
          <select 
            className="select select-bordered bg-white"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Entries */}
        <div className="space-y-3">
          {filteredTimeline.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-5 shadow-sm">
              <div className="bg-[#f1f5f9] p-3 rounded-lg text-2xl text-slate-600">
                {item.type === 'Call' ? <HiOutlinePhone /> : item.type === 'Video' ? <HiOutlineVideoCamera /> : <HiOutlineChatBubbleLeftEllipsis />}
              </div>
              <div className="flex-grow">
                <p className="font-bold text-slate-800">{item.type} <span className="font-medium text-slate-500">with {item.person}</span></p>
                <p className="text-xs text-slate-400 font-semibold">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;