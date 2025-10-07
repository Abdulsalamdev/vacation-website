import Image from "next/image";
import React from "react";

export function Designation() {
  const items = [
    {
      image: "/images/pro1.png",
      name: "Las Vegas",
      star: "/images/star1.png",
      point: "4.8",
    },
    {
      image: "/images/pro2.png",
      name: "Maldives",
      star: "/images/star1.png",
      point: "4.8",
    },
    {
      image: "/images/pro3.png",
      name: "Santorini",
      star: "/images/star1.png",
      point: "4.6",
    },
    {
      image: "/images/pro4.png",
      name: "Miami",
      star: "/images/star1.png",
      point: "4.6",
    },
    {
      image: "/images/pro5.png",
      name: "Mexico",
      star: "/images/star1.png",
      point: "4.6",
    },
    {
      image: "/images/pro6.png",
      name: "Dubai",
      star: "/images/star1.png",
      point: "4.6",
    },
  ];
  return (
    <div className="w-[90%] m-auto p-[40px] flex flex-col items-center justify-center gap-[30px]" id="Pricing">
      <p className="text-[#000000] font-Work-Sans font-semibold text-[36px]">
        Our Top Destinations
      </p>
      <div className="flex flex-wrap justify-center gap-[40px] items-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-[6px] ">
            <Image src={item.image} width={300} height={300} alt={""} />
            <div className="flex justify-between items-center">
              <span className="text-[24px] text-[#000000] font-Work-Sans font-medium">
                {item.name}
              </span>
              <div className=" star">
                <Image src={item.star} alt={""} width={10} height={10} />
                <span className="text-[#000000] text-[24px] font-Work-Sans font-medium">
                  {item.point}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-[#1FC28B] text-[white] p-[15px] rounded-[8px]">
        View More
      </button>
    </div>
  );
}
