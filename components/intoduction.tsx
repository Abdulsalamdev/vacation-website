"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export function Introduction() {
  return (
    <section className="flex-wrap pb-[20px] gap-[30px] items-center justify-between md:flex">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-[20px]"
      >
        <p className="text-[24px] text-black font-Work-Sans font-medium">
          Explore the world{" "}
          <span className="w-[70px] h-[3px] bg-black inline-block"></span>
        </p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col text-[clamp(30px,3vw,48px)] text-[#25332E] font-Work-Sans font-bold"
        >
          <span>Plan Your Beautiful</span>
          <span>
            <span className="text-[#1FC28B]">Memories</span> With Us
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-[#626262] font-Work-Sans text-[18px] max-w-[400px]"
        >
          Making our customers happy has been our first priority. We provide all
          facilities, and your satisfaction is our 100% happiness.
        </motion.p>

        <Link href={"#Service"}>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#17a874",
              boxShadow: "0 8px 20px rgba(31,194,139,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="bg-[#1FC28B] text-white flex justify-center items-center w-[170px] p-[10px] rounded-[8px] font-medium"
          >
            Discover More
          </motion.button>
        </Link>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative group"
      >
        {/* Floating hover effect */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-fit"
        >
          <Image
            src="/images/bross.png"
            alt="Traveler illustration"
            width={400}
            height={300}
            className="rounded-[12px] transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-[16px] bg-[#1FC28B]/20 blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-700" />
      </motion.div>
    </section>
  );
}
