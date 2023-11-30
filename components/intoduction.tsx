import Image from "next/image";
import React from "react";

export function Introduction() {
  return (
    <div className="flex-wrap  gap-[30px] items-center justify-between md:flex">
      <div className="flex flex-col gap-[20px]">
        <p className="text-[24px] text-[black] font-Work-Sans font-medium">
          Explore the world{" "}
          <span className="w-[70px] h-[3px] bg-[black] inline-block"></span>
        </p>
        <p className="flex flex-col text-[clamp(30px,3vw,48px)] text-[#25332E] font-Work-Sans font-bold">
          <span>Plan Your Beautiful</span>
          <span>
            <span className="text-[#1FC28B]">Memories</span> With Us
          </span>
        </p>
        <p className="text-[#626262] font-Work-Sans text-[18px] max-w-[400px]">
          Making our customers happy has been our first priority . We provide
          all facilities and your satisfaction is our 100% happiness.
        </p>
        <button className="bg-[#1FC28B] text-[white] flex justify-center items-center w-[170px]  p-[10px] rounded-[8px]">
          Discover More
        </button>
      </div>
      <div>
        <Image src={"/images/bross.png"} alt={""} width={300} height={300} />
      </div>
    </div>
  );
}
