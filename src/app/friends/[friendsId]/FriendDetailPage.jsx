"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    HiOutlineBellAlert,
    HiOutlineArchiveBox,
    HiOutlineTrash,
    HiOutlinePhone,
    HiOutlineChatBubbleLeftEllipsis,
    HiOutlineVideoCamera,
    HiOutlineClock
} from "react-icons/hi2";
import { useInteractions } from '@/Context/InteractionContext';

const FriendDetailPage = ({ friend }) => {
    const { addInteraction, timeline } = useInteractions();

    const handleCheckIn = (type) => {
        addInteraction(type, friend.name);
        toast.success(`${type} recorded with ${friend.name}!`);
    };

    // Filter global timeline to show only interactions with THIS friend
    const friendSpecificTimeline = timeline.filter(t => t.person === friend.name);

    return (
        <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10">
            <ToastContainer position="bottom-right" />
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* --- LEFT COLUMN --- */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white rounded-2xl p-8 shadow-sm text-center border border-gray-100">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                fill
                                className="rounded-full object-cover border-4 border-white shadow-md"
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-800">{friend.name}</h1>

                        <div className="flex flex-col items-center gap-2 mt-2">
                            <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${friend.status === 'overdue' ? 'bg-red-500' : 'bg-emerald-700'
                                }`}>
                                {friend.status}
                            </span>
                            <div className="flex gap-2">
                                {friend.tags.map(tag => (
                                    <span key={tag} className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="mt-6 text-slate-500 italic text-sm">{friend.bio}</p>
                        <p className="text-xs text-slate-400 mt-2">Preferred: {friend.email.split('@')[0]}</p>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-slate-700 hover:bg-gray-50">
                            <HiOutlineBellAlert className="text-xl" /> Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-slate-700 hover:bg-gray-50">
                            <HiOutlineArchiveBox className="text-xl" /> Archive
                        </button>
                        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-red-500 hover:bg-red-50">
                            <HiOutlineTrash className="text-xl" /> Delete
                        </button>
                    </div>
                </div>

                {/* --- RIGHT COLUMN --- */}
                <div className="lg:col-span-8 space-y-6">

                    {/* Section 1: Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard label="Days Since Contact" value={friend.days_since_contact} />
                        <StatCard label="Goal (Days)" value={friend.goal} />
                        <StatCard label="Next Due" value={friend.next_due_date} isDate />
                    </div>

                    {/* Section 2: Relationship Goal */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-slate-800 mb-1">Relationship Goal</h3>
                            <p className="text-slate-500 text-sm">Connect every <span className="font-bold text-slate-800">{friend.goal} days</span></p>
                        </div>
                        <button className="btn btn-sm btn-ghost border border-gray-200 px-4 normal-case">Edit</button>
                    </div>

                    {/* Section 3: Quick Check-In */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <CheckInBtn icon={<HiOutlinePhone />} label="Call" onClick={() => handleCheckIn('Call')} />
                            <CheckInBtn icon={<HiOutlineChatBubbleLeftEllipsis />} label="Text" onClick={() => handleCheckIn('Text')} />
                            <CheckInBtn icon={<HiOutlineVideoCamera />} label="Video" onClick={() => handleCheckIn('Video')} />
                        </div>
                    </div>

                    {/* Section 4: Recent Interactions (Timeline) */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <h3 className="font-bold text-slate-800">Recent Interactions</h3>
                            <button className="text-xs font-bold text-slate-500 bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1">
                                <HiOutlineClock /> Full History
                            </button>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {friendSpecificTimeline.map((item) => (
                                <div key={item.id} className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-slate-100 rounded-lg text-slate-600 text-xl">
                                            {item.type === 'Call' ? <HiOutlinePhone /> : item.type === 'Video' ? <HiOutlineVideoCamera /> : <HiOutlineChatBubbleLeftEllipsis />}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 text-sm">{item.type}</p>
                                            <p className="text-xs text-slate-500">Asked for career advice</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Sub-components for cleaner code
const StatCard = ({ label, value, isDate }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
        <p className={`font-bold text-slate-800 mb-1 ${isDate ? 'text-xl md:text-2xl' : 'text-3xl'}`}>{value}</p>
        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{label}</p>
    </div>
);

const CheckInBtn = ({ icon, label, onClick }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all gap-2"
    >
        <span className="text-2xl text-slate-700">{icon}</span>
        <span className="text-sm font-medium text-slate-600">{label}</span>
    </button>
);

export default FriendDetailPage;