import React from "react";
import Image from "next/image";
export function Hero() {
  const icons = [
    { ic: "/images/x.png" },
    { ic: "/images/whatsapp.png" },
    { ic: "/images/insta.png" },
  ];
  const information = [
    {
      name: "Top Destinations",
      content: ["Dubia", "Paris", "Santorini", "Las vegas", "Maldives"],
    },
    {
      name: "Company",
      content: ["Blog", "About us", "Services", "Furniture"],
    },
    {
      name: "Support",
      content: ["Contct us", "FAQ", "How its works"],
    },
  ];
  return (
    <div className="bg-[#1FC28B] p-[40px] ">
      <div className="w-[90%] m-auto flex justify-between flex-wrap">
        <div className="flex flex-col gap-[7px]">
          <p className="text-[#FFFFFF] text-[clamp(30px,3.2vw,40px)] font-Work-Sans font-medium">
            NaijaAir
          </p>
          <p className="text-[12px] text-[#FFFFFF] ">
            ...Making our customers happy is our first priority...
          </p>
          <div className="flex gap-[10px] items-center">
            {icons.map((icon, index) => (
              <Image
                src={icon.ic}
                alt={""}
                key={index}
                width={20}
                height={20}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-[40px] flex-wrap">
          {information.map((item, index) => (
            <div key={index} className="flex flex-col gap-[5px]">
              <p className="text-[white] text-[20px] font-medium font-Work-Sans">
                {item.name}
              </p>
              <div className="flex flex-col gap-[5px]">
                {item.content.map((con, index) => (
                  <div key={index} className="text-[white] text-[16px]">
                    {con}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
