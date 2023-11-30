import Image from "next/image";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/navBar";
import { Introduction } from "@/components/intoduction";
import { About } from "@/components/about";
import { Service } from "@/components/service";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="w-[90%] m-auto">
        <NavBar />
        <Introduction />
        <About />
      </div>
      <div>
        <Service />
      </div>
    </div>
  );
}
