"use client";
import { useState } from "react";
import Image from "next/image";
import { home_data2 } from "./data";
import { motion, AnimatePresence } from "framer-motion";

const InterfaceComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default first item

  return (
    <div className="bg-[#edeff2] py-10 lg:py-20">
      <div className="container mx-auto px-4">
       <div className="py-10">
         <div className="text-sm text-center mb-5 font-semibold">
          130+ CUSTOMERS
        </div>
        <h2 className="text-center text-2xl md:text-4xl font-bold text-primary">
          A smart interface and strong backend control
        </h2>
       </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* LEFT SIDE LIST */}
          <div className="flex flex-col space-y-10">
            {home_data2.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)} 
                // onMouseEnter={() => setActiveIndex(index)} // 👈 set on hover
                className={`flex items-start space-x-4 hover:shadow-xl p-2 rounded-md  transition-all cursor-pointer ${
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
          <HomeImageDisplay data={home_data2[activeIndex]} index={activeIndex} />
        </div>
      </div>
    </div>
  );
};

// ✅ IMAGE DISPLAY COMPONENT with animation
const HomeImageDisplay = ({ data, index }) => {
  return (
    <div className="relative col-span-2 min-h-[400px] rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Background image */}
        <motion.div
          key={`bg-${index}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
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
          className="absolute top-[0%] right-0 z-10"
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
