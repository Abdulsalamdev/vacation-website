import React, { useState } from "react";
import Link from "next/link";
import { Hambuger } from "./closeButton";

// NavBar component
export function NavBar() {
  const [visible, setVisible] = useState(false);
  const items = [
    { name: "Home", link: "/#" },
    { name: "About", link: "/#" },
    { name: "Service", link: "/#" },
    { name: "Pricing", link: "/#" },
    { name: "Contact", link: "/#" },
    { name: "Login", link: "/#" },
    { name: "Sign Up", link: "/#" },
  ];

  return (
    <div className="w-[90%] m-auto flex justify-between py-[21px] items-center gap-[10px]">
      <div className="text-[#1FC28B] text-[clamp(25px,2.2vw,40px)] font-Work-Sans font-bold">
        NaijaAir
      </div>
      <div className="hidden gap-[clamp(30px,3vw,50px)] items-center lg:flex">
        {items.map((item, index) => (
          <Link
            className="text-[black] font-normal text-[22px] last:bg-[#1FC28B] last:p-[10px] last:text-[white] last:rounded-[8px] whitespace-nowrap"
            href={item.link}
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div
        onClick={() => setVisible(!visible)}
        className="flex lg:hidden relative"
      >
        {visible ? (
          <div className="absolute sideBar bg-[#1FC28B] flex flex-col items-center top-[50px] right-0  gap-[20px] p-[20px] ">
            {items.map((item, index) => (
              <Link
                className="text-[white] font-normal text-[22px]  whitespace-nowrap content w-full p-[10px]"
                href={item.link}
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
        ) : null}
        <Hambuger />
      </div>
    </div>
  );
}
