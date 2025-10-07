"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Hambuger } from "./closeButton";

export function NavBar() {
  const [visible, setVisible] = useState(false);

  const items = [
    { name: "Home", link: "/" },
    { name: "About", link: "#About" },
    { name: "Service", link: "#Service" },
    { name: "Pricing", link: "#Pricing" },
    { name: "Contact", link: "#Contact" },
  ];

  // Sidebar animation variants
  const sidebarVariants:Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <nav className="flex justify-between py-[21px] items-center gap-[10px] relative z-50 ">
      {/* Brand */}
      <div className="text-[#1FC28B] text-[clamp(25px,2.2vw,40px)] font-Work-Sans font-bold">
        NaijaAir
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-[clamp(30px,3vw,50px)] items-center">
        {items.map((item, index) => (
          <Link
            className="text-[black] hover:text-[#1FC28B] font-normal text-[22px] last:hover:text-white last:bg-[#1FC28B] last:p-[10px] last:text-[white] last:rounded-[8px] whitespace-nowrap transition-all duration-300"
            href={item.link}
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setVisible(!visible)}
        className="flex lg:hidden relative cursor-pointer"
      >
        <Hambuger />
      </div>

      {/* Animated Sidebar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="sidebar"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-screen w-[75%] sm:w-[50%] bg-[#1FC28B] shadow-2xl flex flex-col justify-center items-center gap-[30px] p-[30px] text-white backdrop-blur-xl"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  onClick={() => setVisible(false)}
                  href={item.link}
                  className="block text-[22px] font-medium hover:text-black transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Close Button */}
            <motion.button
              onClick={() => setVisible(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-5 right-5 text-white bg-black/30 hover:bg-black/50 p-2 rounded-full"
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
