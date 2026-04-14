'use client'

import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import { useInteractions } from "@/Context/InteractionContext";
import Image from "next/image";
import { DiVim } from "react-icons/di";

export default function Home() {
  const { friends } = useInteractions();
  if (friends.length === 0) return <div>Loading friends...</div>;
  return (
      <div className="max-w-7xl mx-auto px-4 py-10">
          <main>
            <Banner></Banner>
            <Friends friendsData={friends}></Friends>
          </main>
      </div>
  );
}
