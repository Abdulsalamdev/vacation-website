
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export function About() {
  return (
    <section
      id="About"
      className="flex flex-wrap-reverse justify-between gap-[50px] md:flex items-center pb-[50px] px-[20px]"
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -80, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative group"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="overflow-hidden rounded-[16px] shadow-lg"
        >
          <Image
            src="/images/about.png"
            alt="About illustration"
            width={380}
            height={300}
            className="rounded-[16px] transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>

        {/* subtle glow behind image */}
        <div className="absolute inset-0 rounded-[16px] bg-[#1FC28B]/20 blur-3xl opacity-0 group-hover:opacity-70 transition-all duration-700" />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[20px]"
      >
        <p className="text-[#1FC28B] font-Work-Sans font-medium text-[24px]">
          About Us
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col text-[clamp(30px,3vw,48px)] text-[#25332E] font-Work-Sans font-bold leading-tight"
        >
          <span>We Recommend</span>
          <span>Beautiful Destination</span>
          <span>Every Month</span>
        </motion.div>

        <p className="text-[#626262] font-Work-Sans text-[18px] max-w-[400px]">
          Let’s plan your destination here — we offer the best destination every week.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#17a874" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="bg-[#1FC28B] text-white flex justify-center items-center w-[170px] p-[10px] rounded-[8px] shadow-md hover:shadow-lg"
        >
          Read More
        </motion.button>
      </motion.div>
    </section>
  );
}

