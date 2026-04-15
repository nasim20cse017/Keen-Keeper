"use client";
import { useInteractions } from "@/Context/InteractionContext";
import { HiOutlinePhone, HiOutlineChatBubbleLeftEllipsis, HiOutlineVideoCamera } from "react-icons/hi2";

const TimelinePage = () => {
  const { timeline } = useInteractions();

  const getIcon = (type) => {
    switch(type) {
      case 'Call': return <HiOutlinePhone />;
      case 'Video': return <HiOutlineVideoCamera />;
      default: return <HiOutlineChatBubbleLeftEllipsis />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-[#1e293b] mb-6">Timeline</h1>
        
        <div className="space-y-3">
          {timeline.length === 0 ? (
            <p className="text-slate-400">No interactions logged yet.</p>
          ) : (
            timeline.map((item) => (
              <div key={item.id} className="bg-white border rounded-xl p-4 flex items-center gap-5 shadow-sm">
                <div className="bg-[#f1f5f9] p-3 rounded-lg text-2xl text-slate-600">
                  {getIcon(item.type)}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{item.type} <span className="font-medium text-slate-500 text-sm">with {item.person}</span></p>
                  <p className="text-xs text-slate-400">{item.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;