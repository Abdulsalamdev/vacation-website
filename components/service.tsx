// import Image from "next/image";
// import React from "react";

// export function Service() {
//   const items = [
//     {
//       image: "/images/car.png",
//       name: "Cab Service",
//       description: " We provide cab services for your stay to explore more...",
//       check: "Read More",
//     },
//     {
//       image: "/images/ticket.png",
//       name: "Ticket Booking",
//       description:
//         "We book all kinds of national and internatiol tickets to your destination...",
//       check: "Read More",
//     },
//     {
//       image: "/images/home.png",
//       name: "Hotel Booking",
//       description:
//         "You can easily book according to your budget hotel in our website...",
//       check: "Read More",
//     },
//   ];
//   return (
//     <div className="flex justify-center py-[70px] bg-[#E5FBF3] items-center" id="Service">
//       <div className="flex flex-col gap-[40px] w-[90%] items-center">
//         <p className="text-[#000000] font-semibold font-Work-Sans text-[35px]">
//           Our Services
//         </p>
//         <div className="flex justify-center gap-[30px] flex-wrap-reverse items-center">
//           {items.map((item, index) => (
//             <div
//               className="bg-[#FFFFFF] p-[30px] flex flex-col gap-[20px] rounded-[10px]"
//               key={index}
//             >
//               <Image src={item.image} alt={""} width={50} height={50} />
//               <p className="text-[#000000] text-[20px] font-Work-Sans font-medium">
//                 {item.name}
//               </p>
//               <p className="text-[15px] text-[#484848] font-Work-Sans font-medium max-w-[280px]">
//                 {item.description}
//               </p>
//               <button className="bg-[#1FC28B] text-[white] rounded-[8px] p-[10px] w-[130px]">
//                 {item.check}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export function Service() {
  const items = [
    {
      image: "/images/car.png",
      name: "Cab Service",
      description:
        "We provide cab services for your stay to explore more...",
      check: "Read More",
    },
    {
      image: "/images/ticket.png",
      name: "Ticket Booking",
      description:
        "We book all kinds of national and international tickets to your destination...",
      check: "Read More",
    },
    {
      image: "/images/home.png",
      name: "Hotel Booking",
      description:
        "You can easily book a hotel according to your budget on our website...",
      check: "Read More",
    },
  ];

  return (
    <div
      className="flex justify-center py-[70px] bg-[#E5FBF3] items-center"
      id="Service"
    >
      <div className="flex flex-col gap-[40px] w-[90%] items-center">
        <p className="text-[#000000] font-semibold font-Work-Sans text-[35px]">
          Our Services
        </p>

        <div className="flex justify-center gap-[30px] flex-wrap items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
                boxShadow:
                  "0px 12px 25px rgba(0, 0, 0, 0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
              }}
              className="bg-white p-[30px] flex flex-col gap-[20px] rounded-[15px] items-start cursor-pointer 
                         shadow-md hover:shadow-xl hover:bg-gradient-to-br hover:from-[#f0fffa] hover:to-[#e6fdf5]
                         transform-gpu duration-300"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="transition-transform duration-500 group-hover:scale-110"
              />

              <p className="text-[#000000] text-[20px] font-Work-Sans font-medium">
                {item.name}
              </p>

              <p className="text-[15px] text-[#484848] font-Work-Sans font-medium max-w-[280px]">
                {item.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1FC28B] text-white rounded-[8px] py-[10px] px-[20px] font-semibold 
                           transition-all duration-300 hover:bg-[#17a874]"
              >
                {item.check}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
