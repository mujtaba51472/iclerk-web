"use client";
import ContainerWrapper from "@/app/components/shared/ContainerWrapper";
import MainHeading from "@/app/components/shared/MainHeading";
import {
  animateCircleLoop,
  animateHomeBackgroundImage,
  animateHomeForegroundImage,
  animateImage,
  animateTextChild,
  animateTextParent,
} from "@/app/utils/animate";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import TestimonialCards from "./CustomerReview";
import { clients, home_data1, home_data2 } from "./data";
import HomeLink from "./HomeLink";
import HomeList from "./HomeList";
import HomeParagraph from "../../components/shared/Paragraph";
import HomeSectionHeading from "../../components/shared/Heading";
import BannerHeading from "@/app/components/shared/BannerHeading";
import BannerParagraph from "@/app/components/shared/BannerParagraph";
import InterfaceComponent from "./InterfaceComponent";
import BgWrapper from "@/app/components/shared/BgWrapper";

const Home = () => {
  return (
    <>
      <div className="pt-5  overflow-hidden h-[650px] relative">
        <div className="container px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <motion.div
              // variants={animateTextParent}
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true }}
              className="place-content-center space-y-8 max-w-[700px]"
            >
              <motion.div variants={animateTextChild}>
                <BannerHeading text="Secure & Contactless Payment acceptance" />
              </motion.div>

              <motion.div variants={animateTextChild}>
                <BannerParagraph text="Easy to use payment acceptance from your customer with no hardware required." />
              </motion.div>
              <motion.div variants={animateTextChild}>
                <div className="pr-0 md:pr-4 lg:pr-0 max-w-[500px]">
                  <button
                    className="flex cursor-pointer items-center justify-between text-lg md:text-2xl lg:text-4xl font-bold rounded-[75px]  py-5 w-full hover:shadow-lg transition-all duration-300 group"
                    style={{
                      background:
                        "linear-gradient(270deg, #1FCCE8 4.04%, rgba(255, 255, 255, 0) 84.39%)",
                    }}
                  >
                    {" "}
                    <span className="text-primary font-bold px-2">
                      Book a Demo
                    </span>
                    <Image
                      src="/assets/home/home1.png"
                      alt="Arrow Right"
                      width={40}
                      height={40}
                      className="animate-pulse mx-2"
                    />
                  </button>
                </div>
              </motion.div>
            </motion.div>

         

        
          </div>
          <motion.div
  className="absolute top-0  hidden lg:block  -right-90 w-[60%] h-full overf" 
  // {...animateHomeBackgroundImage}
>
  <motion.div
  //  {...animateHomeForegroundImage}
    className="relative w-full h-full">
    <Image
      src="/assets/home/home2.png"
      alt="Home Background"
      fill={true}
      style={{ objectFit: 'cover' }} 
      className="w-full z-10"
    />
    
    <Image
      src="/assets/home/home3.png"
      alt="Home Foreground"
      height={500}
      width={500}
      className="z-30 absolute top-14 left-4 w-[90%] h-[80%] object-contain drop-shadow-2xl"
    />
  </motion.div>
</motion.div>
        </div>
      </div>

      <BgWrapper>
        <ContainerWrapper>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={animateTextParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {home_data1.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start lg:items-center space-x-4"
                variants={animateTextChild}
                custom={index}
              >
                <div className="bg-tertiary rounded-full p-3">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={30}
                    height={25}
                  />
                </div>
                <HomeParagraph text={item.title} />
              </motion.div>
            ))}
          </motion.div>
        </ContainerWrapper>
      </BgWrapper>

      <ContainerWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <motion.div {...animateImage}>
              <Image
                src="/assets/home/chooseus.png"
                alt="Choose Us"
                width={400}
                height={500}
              />
            </motion.div>
          </div>
          <motion.div
            variants={animateTextParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="place-content-center space-y-4"
          >
            <motion.div variants={animateTextChild}>
              <HomeSectionHeading text="Why Choose iClerk?" />
            </motion.div>
            <motion.div variants={animateTextChild}>
              <HomeParagraph text="iClerk is a comprehensive, cloud-based dispatch and booking system designed to simplify operations for taxi businesses." />
            </motion.div>
            <motion.div variants={animateTextChild} className="mt-5">
              <HomeLink text="Learn More" redirect="#" />
            </motion.div>
          </motion.div>
        </div>
      </ContainerWrapper>

      <BgWrapper>
        <ContainerWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={animateTextParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="place-content-center space-y-4 "
            >
              <motion.div variants={animateTextChild}>
                <HomeSectionHeading text="Branded QR Code in Your Customer location" />
              </motion.div>
              <motion.div variants={animateTextChild}>
                <HomeParagraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              </motion.div>
              <motion.div variants={animateTextChild}>
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-5">
                  <HomeLink text="Learn More" redirect="#" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div {...animateImage} className="justify-self-center">
              <Image
                src="/assets/home/homeqr.png"
                alt="Choose Us"
                width={400}
                height={300}
                className="max-h-[400px] rounded-md w-full h-auto"
              />
            </motion.div>
          </div>
        </ContainerWrapper>
      </BgWrapper>

      <ContainerWrapper>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={animateTextParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={animateTextChild}>
            <Image
              src="/assets/home/paysol.webp"
              alt="payment solution"
              width={400}
              height={300}
              className="rounded-md"
            />
          </motion.div>
          <motion.div
            variants={animateTextChild}
            className="place-content-center space-y-4"
          >
            <HomeSectionHeading text="Intelligent in-car payment solutions" />
            <HomeParagraph text="Accept all major credit/debit in-car using QR Code, our Intelligent QR Code" />
            <div className="space-y-2">
              <HomeList text="Lorem Ipsum has been the industry " />
              <HomeList text="Standard dummy text ever since the" />
            </div>
            <div className="mt-5">
              <HomeLink text="Test Qr Booker" redirect="#" />
            </div>
          </motion.div>
        </motion.div>
      </ContainerWrapper>

      <InterfaceComponent />

      <div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-primary text-lg font-bold mb-4 capitalized"
        >
          Trusted by the world's leading businesses
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Marquee pauseOnHover={true} speed={50} className="cursor-pointer">
            {clients.map((client, index) => (
              <div key={index} className="mx-10">
                <Image src={client} alt="home image" width={150} height={100} />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>

      <BgWrapper>
        <ContainerWrapper>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={animateTextParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={animateTextChild}>
              <Image
                src="/assets/home/payterminal.webp"
                alt="payment solution"
                width={400}
                height={300}
                className="rounded-md"
              />
            </motion.div>
            <motion.div
              variants={animateTextChild}
              className="place-content-center space-y-4"
            >
              <HomeSectionHeading text="Contactless Card Payment Terminal" />
              <HomeParagraph text="Accept all major credit/debit in-car using QR Code, our Intelligent QR Code" />
              <div className="space-y-2">
                <HomeList text="Lorem Ipsum has been the industry  " />
                <HomeList text="Standard dummy text ever since the" />
              </div>
              <div className="mt-5">
                <HomeLink text="Taxi QR Booker" redirect="#" />
              </div>
            </motion.div>
          </motion.div>
        </ContainerWrapper>
      </BgWrapper>

      <ContainerWrapper>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={animateTextParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={animateTextChild}
            className="place-content-center space-y-4"
          >
            <HomeSectionHeading text="Generate Automatic PayLink " />
            <HomeParagraph text="Send personalized payment links via SMS, email, or messaging apps. Customers can pay instantly without registration" />
            <div>
              <HomeList text="Compatible with all major browsers" />
              <HomeList text="Fully integrated with iCabbi dispatch system" />
            </div>
            <div className="mt-5">
              <HomeLink text="Learn More" redirect="#" />
            </div>
          </motion.div>
          <motion.div
            variants={animateTextChild}
            className="justify-self-center"
          >
            <Image
              src="/assets/home/paylink.webp"
              alt="Choose Us"
              width={400}
              height={300}
              className="max-h-[400px] rounded-md"
            />
          </motion.div>
        </motion.div>
      </ContainerWrapper>

      <ContainerWrapper>
        <TestimonialCards />
      </ContainerWrapper>

      <ContainerWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-md overflow-hidden"
        >
          <div className="bg-[url('/assets/home/bghome1.webp')] bg-cover bg-center bg-no-repeat min-h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto px-4">
              <HomeSectionHeading
                className="!text-white !uppercase"
                text="Start accepting payments online, in-store or remote in minutes"
              />
              <HomeParagraph
                className="!text-white !text-base"
                text="Simple and transparent pricing plan give you access a complete payments and invoicing solutions."
              />
              <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition">
                Contact us
              </button>
            </div>
          </div>
        </motion.div>
      </ContainerWrapper>
    </>
  );
};

export default Home;
