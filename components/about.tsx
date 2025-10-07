import Image from "next/image";
import React from "react";

export function About() {
  return (
    <div className="flex-wrap-reverse justify-between gap-[50px] md:flex items-center pb-[50px]" id="About">
      <div>
        <Image src={"/images/about.png"} alt={""} width={380} height={300} />
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="text-[#1FC28B] font-Work-Sans font-medium text-[24px]">
          About Us
        </p>
        <div className="flex flex-col text-[clamp(30px,3vw,48px)] text-[#25332E] font-Work-Sans font-bold ">
          <span>We Recommend</span>
          <span>Beautiful Destination</span>
          <span>Every Month</span>
        </div>
        <div className="text-[#626262] font-Work-Sans text-[18px] max-w-[400px]">
          Let’s plan your destination here we offer the best destination every
          week.
        </div>
        <button className="bg-[#1FC28B] text-[white] flex justify-center items-center w-[170px]  p-[10px] rounded-[8px]">
          Read More
        </button>
      </div>
    </div>
  );
}
