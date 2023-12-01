import React from "react";
import Image from "next/image";

export function Reviews() {
  const items = [
    {
      image: "/images/cos1.png",
      name: "Mary",
      star: "/images/star1.png",
      title: "The best agency to plan your summer.",
    },
    {
      image: "/images/cos2.png",
      name: "Grace",
      star: "/images/star1.png",
      title: "Very cheap and accomdating.",
    },
    {
      image: "/images/cos3.png",
      name: "Daniel",
      star: "/images/star1.png",
      title: "Highly recommend and stress free.",
    },
  ];
  return (
    <div className="w-[90%] m-auto p-[40px] flex flex-col items-center justify-center gap-[30px]">
      <p className="text-[#000000] font-Work-Sans font-semibold text-[36px]">
        Customer’s Review
      </p>
      <div className="flex flex-wrap justify-center gap-[30px] items-center ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-[20px] review gap-[10px]"
          >
            <Image src={item.image} alt={""} width={70} height={70} />
            <p className="text-[#000000] text-[20px] font-Work-Sans font-medium text-center">
              {item.title}
            </p>
            <p className="text-[#000000] text-[20px] font-Work-Sans font-medium">
              {item.name}
            </p>
            <div className="flex justify-center items-center gap-[3px]">
              <Image src={item.star} alt={""} width={15} height={15} />
              <Image src={item.star} alt={""} width={15} height={15} />
              <Image src={item.star} alt={""} width={15} height={15} />
              <Image src={item.star} alt={""} width={15} height={15} />
              <Image src={item.star} alt={""} width={15} height={15} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
