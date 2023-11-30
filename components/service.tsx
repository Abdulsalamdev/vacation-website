import Image from "next/image";
import React from "react";

export function Service() {
  const items = [
    {
      image: "/images/car.png",
      name: "Cab Service",
      description: " We provide cab services for your stay to explore more...",
      check: "Read More",
    },
    {
      image: "/images/ticket.png",
      name: "Ticket Booking",
      description:
        "We book all kinds of national and internatiol tickets to your destination...",
      check: "Read More",
    },
    {
      image: "/images/home.png",
      name: "Hotel Booking",
      description:
        "You can easily book according to your budget hotel in our website...",
      check: "Read More",
    },
  ];
  return (
    <div className="flex justify-center py-[70px] bg-[#E5FBF3] items-center">
      <div className="flex flex-col gap-[40px] w-[90%] items-center">
        <p className="text-[#000000] font-semibold font-Work-Sans text-[35px]">
          Our Services
        </p>
        <div className="flex justify-between gap-[30px] flex-wrap-reverse items-center">
          {items.map((item, index) => (
            <div
              className="bg-[#FFFFFF] p-[30px] flex flex-col gap-[20px]"
              key={index}
            >
              <Image src={item.image} alt={""} width={50} height={50} />
              <p className="text-[#000000] text-[20px] font-Work-Sans font-medium">
                {item.name}
              </p>
              <p className="text-[15px] text-[#484848] font-Work-Sans font-medium max-w-[280px]">
                {item.description}
              </p>
              <button className="bg-[#1FC28B] text-[white] rounded-[8px] p-[10px]">
                {item.check}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
