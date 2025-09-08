"use client";
import BannerParagraph from "@/app/components/shared/BannerParagraph";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  childBannerContainer,
  childBannerGradient,
  parentContainer,
} from "@/app/utils/animate";
import BookDemo from "@/app/components/shared/BookDemo";

const HomeBanner = () => {
  const [showGradient, setShowGradient] = useState(false);
  return (
    <motion.div
      variants={parentContainer}
      initial="hidden"
      animate="visible"
      className={`bg-[url('/assets/home/homebg.png')]
        } relative  bg-no-repeat bg-cover max-w-full bg-center    relative min-h-[650px] flex items-center z-10 `}
    >
      {showGradient && (
        <motion.div
          variants={childBannerGradient}
          className="h-full w-full bg-gradient-to-b from-tertiary to-transparent absolute inset-0"
        />
      )}
      <div className="container !px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8  relative z-10">
          <div className="place-content-center space-y-4 lg:space-y-8 max-w-[350px] md:max-w-[600px] xl:max-w-[800px]">
            <motion.div
              variants={childBannerContainer}
              className={`text-primary font-bold text-3xl sm:text-3xl lg:text-[50px] xl:[64px]  sm:leading-[1.3] lg:leading-[120%] `}
            >
              Secure & <br /> Contactless Payment acceptance
            </motion.div>

            <motion.div variants={childBannerContainer}>
              <BannerParagraph text="Easy to use payment acceptance from your customer with no hardware required" />
            </motion.div>
            <div className="   xl:hidden">
              <Image
                src="/assets/home/home3.webp"
                alt="Background Image"
                width={300}
                height={500}
                className=""
              />
            </div>
            <BookDemo />
            
          </div>
        </div>
      </div>
      <motion.div
        variants={childBannerContainer}
        onAnimationComplete={() => setShowGradient(true)}
        className="absolute top-0 right-0 hidden xl:block  lg:pt-10"
      >
        <Image
          src="/assets/home/home3.webp"
          alt="Background Image"
          width={780}
          height={700}
          className=""
        />
      </motion.div>
    </motion.div>
  );
};

export default HomeBanner;
