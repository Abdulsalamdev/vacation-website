"use client";
import Image from "next/image";
import React from "react";
import { motion, Variant, Variants } from "framer-motion";

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

  // parent container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // each card animation
  const card:Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-[90%] m-auto p-[40px] flex flex-col items-center justify-center gap-[30px]"
      id="Pricing"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p
        className="text-[#000000] font-Work-Sans font-semibold text-[36px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Top Destinations
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-[40px] items-center"
        variants={container}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="flex flex-col gap-[6px] cursor-pointer bg-white rounded-[10px] shadow-md hover:shadow-lg transition-all duration-300 p-[10px]"
          >
            <Image
              src={item.image}
              width={300}
              height={300}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="flex justify-between items-center mt-[10px]">
              <span className="text-[22px] text-[#000000] font-Work-Sans font-medium">
                {item.name}
              </span>
              <div className="flex items-center gap-1">
                <Image src={item.star} alt="star" width={16} height={16} />
                <span className="text-[#000000] text-[18px] font-Work-Sans font-medium">
                  {item.point}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="bg-[#1FC28B] text-[white] p-[15px] rounded-[8px] mt-[20px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        View More
      </motion.button>
    </motion.div>
  );
}
