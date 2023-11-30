import Image from "next/image";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/navBar";
import { Introduction } from "@/components/intoduction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="w-[90%] m-auto">
        <NavBar />
        <Introduction />
      </div>
    </div>
  );
}
