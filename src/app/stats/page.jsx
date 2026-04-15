"use client";

import { useInteractions } from '@/Context/InteractionContext';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const StatsPage = () => {
  const { timeline } = useInteractions();

  // If no interactions, show message
  if (!timeline || timeline.length === 0) {
    return (
      <div className="min-h-screen flex justify-center bg-[#f8fafc]">
        <p className="text-slate-400 text-xl text-center mt-30 ">No interactions logged yet.</p>
      </div>
    );
  }

  // Calculate data for chart
  const dataMap = timeline.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const data = [
    { name: 'Text', value: dataMap['Text'] || 0, color: '#8b5cf6' }, 
    { name: 'Call', value: dataMap['Call'] || 0, color: '#1a3d32' }, 
    { name: 'Video', value: dataMap['Video'] || 0, color: '#34d399' }, 
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[#1e293b] mb-8">Friendship Analytics</h1>
        
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <h2 className="text-emerald-800 font-bold mb-8">By Interaction Type</h2>
          
          <div className="h-80 w-full flex flex-col items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            {/* Custom Legend */}
            <div className="flex gap-6 mt-6">
              { data.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                  <span className="text-xs font-medium text-slate-500">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;