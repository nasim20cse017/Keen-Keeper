import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import Image from "next/image";
import { DiVim } from "react-icons/di";

export default function Home() {
  return (
      <div>
          <main>
            <Banner></Banner>
            <Friends></Friends>
          </main>
      </div>
  );
}
