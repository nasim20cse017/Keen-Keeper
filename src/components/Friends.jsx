
import Link from "next/link";
import Image from "next/image";

const Friends =  ({friendsData}) => {

    // const res = await fetch("http://localhost:3000/friends.json");
    // const friendsData = await res.json();
    
    const totalFriends = friendsData.length;
    const onTrackCount = friendsData.filter(f => f.status === "on-track").length;
    const needAttention = friendsData.filter(f => f.status !== "on-track").length;

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 pb-20">

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                    { label: "Total Friends", value: totalFriends },
                    { label: "On Track", value: onTrackCount },
                    { label: "Need Attention", value: needAttention },
                    { label: "Interactions This Month", value: 12 }, 
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                        <h2 className="text-3xl font-bold text-slate-800">{stat.value}</h2>
                        <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            <hr className="border-gray-100 mb-10" />

            {/* Friends Grid Header */}
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Your Friends</h3>

            {/* Friends Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {friendsData.map((friend) => (
                    <Link
                        href={`/friends/${friend.id}`}
                        key={friend.id}
                        className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
                    >
                        {/* Friend Picture */}
                        <div className="relative w-20 h-20 mb-4">
                            <Image src={friend.picture} width={80} height={80}
                                alt={friend.name}
                                className="rounded-full object-cover w-full h-full border-2 border-white shadow-sm">

                            </Image>

                        </div>

                        {/* Friend Name */}
                        <h4 className="text-lg font-bold text-slate-800 leading-tight">
                            {friend.name}
                        </h4>

                        {/* Days Since Contact */}
                        <p className="text-xs text-slate-400 mt-1 mb-3">
                            {friend.days_since_contact}d ago
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-1 mb-3">
                            {friend.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Status Badge */}
                        <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase text-white w-fit
              ${friend.status === 'overdue' ? 'bg-red-500' :
                                friend.status === 'almost due' ? 'bg-orange-400' :
                                    'bg-[#284e42]'}
            `}>
                            {friend.status}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Friends;