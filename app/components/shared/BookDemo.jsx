import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { childBannerContainer } from "@/app/utils/animate";

const BookDemo = () => {
  return (
    <motion.div variants={childBannerContainer} whileHover={{ y: -5 }}>
      <div className=" border-l-4 rounded-[75px] border-tertiary  pr-2 md:pr-4 lg:pr-0 max-w-[300px] md:mb-10 lg:mb-0 lg:max-w-[400px] ">
        <button
          className=" py-3 lg:py-6 flex cursor-pointer group items-center justify-between text-lg md:text-2xl lg:text-3xl font-bold rounded-[75px]  w-full shadow-2xl transition-all duration-300 group"
          style={{
            background:
              "linear-gradient(270deg, hsla(188, 81%, 52%, 1) 4.04%, hsla(0, 0%, 100%, 0) 84.39%)",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            borderRadius: "75px",
          }}
        >
          {" "}
          <span className="text-primary  px-2 lg:px-6 ">Book a Demo</span>
          <Image
            src="/assets/home/home1.png"
            alt="Arrow Right"
            width={40}
            height={40}
            className=" mx-2 "
          />
        </button>
      </div>
    </motion.div>
  );
};

export default BookDemo;
