"use client";
import { useState } from "react";
import Image from "next/image";
import { home_data2 } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import BgWrapper from "@/components/shared/BgWrapper";
import BannerHeading from "@/components/shared/BannerHeading";
import SectionHeading from "@/components/shared/Heading";

const InterfaceComponent = ({data, title, heading}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#F8FAFC] container mt-10 ">

      <div className="container mx-auto    py-10">
       <div className="py-10 max-w-3xl mx-auto">
         <div className="text-base text-secondary text-center  font-semibold">
           {title}
         </div>
        <div className="max-w-lg text-center mx-auto">
          <SectionHeading text={heading} />
        </div>

       </div>

        <div className="grid md:grid-cols-3 gap-8  bg-transparent py-5">
          {/* LEFT SIDE LIST */}
          <div className="flex flex-col space-y-10 ">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)} 
                // onMouseEnter={() => setActiveIndex(index)} // 👈 set on hover
                className={`max-w-[320px] flex items-start space-x-4 hover:shadow-xl p-2 lg:mt-10 rounded-md  transition-all cursor-pointer ${
                  activeIndex === index ? " shadow-lg " : ""
                }`}
              >
                <div
                  className="rounded-full h-10 w-10 flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}60` }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <div className="font-bold text-primary text-lg">
                    {item.title}
                  </div>
                  <p className="text-gray-600 max-w-[250px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE IMAGE DISPLAY */}
          <HomeImageDisplay data={data[activeIndex]} index={activeIndex} />
        </div>
      </div>
    </div>
  );
};

// ✅ IMAGE DISPLAY COMPONENT with animation
const HomeImageDisplay = ({ data, index }) => {
  return (
    <div className="relative col-span-2 min-h-[670px]   overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Background image */}
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className=""
        >
          <Image
            src={data.img1}
            alt="Main"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Floating images */}
        <motion.div
          key={`img2-${index}`}
          initial={{ opacity: 0, x: 100, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-[10%] right-0 z-10"
        >
          <Image src={data.img2} alt="Secondary" width={200} height={200} />
        </motion.div>

        <motion.div
          key={`img3-${index}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-[70%] left-[10%] z-10"
        >
          <Image src={data.img3} alt="Tertiary" width={200} height={200} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InterfaceComponent;
