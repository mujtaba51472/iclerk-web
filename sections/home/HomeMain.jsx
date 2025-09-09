"use client";
import BgWrapper from "@/components/shared/BgWrapper";
import ContainerWrapper from "@/components/shared/ContainerWrapper";
import DesktopComp from "@/components/shared/DesktopComp";
import Quote from "@/components/shared/Qoute";
import { childBannerContainer, parentContainer } from "@/utils/animate";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionHeading from "../../components/shared/Heading";
import Paragraph from "../../components/shared/Paragraph";
import TestimonialCards from "./CustomerReview";
import { clients, home_data1, home_data2 } from "./data";
import HomeBanner from "./HomeBanner";
import HomeLink from "./HomeLink";
import HomeList from "./HomeList";
import InterfaceComponent from "./InterfaceComponent";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <div className="bg-[#F8FAFC]">
        <ContainerWrapper>
          <motion.div
            variants={parentContainer}
                initial="hidden"
      animate="visible"
            className="flex items-center justify-between flex-wrap  py-8"
          >
            {home_data1.map((item, index) => (
              <motion.div
               
                key={index}
                className="flex items-start  space-x-4  "
                variants={childBannerContainer}
                custom={index}
              >
                <div className="bg-tertiary rounded-full p-4 ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={25}
                    height={25}
                  />
                </div>
                <div className="max-w-[300px] pt-2 ">
                  <Paragraph text={item.title} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ContainerWrapper>
      </div>
      <ContainerWrapper className=" mt-28 lg:mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          <DesktopComp img="/assets/home/chooseus.png" />

          <div className="place-content-center justify-self-end space-y-2 lg:space-y-4 max-w-[400px] ">
            <div className="text-primary text-2xl lg:text-4xl font-bold">
              Why Choose <br /> iClerk?
            </div>

            <Paragraph
              white={true}
              text="iClerk is a comprehensive, cloud-based dispatch and booking system designed to simplify operations for taxi businesses."
            />

            <div className="mt-6">
              <HomeLink text="Learn More" redirect="#" />
            </div>
          </div>
        </div>
      </ContainerWrapper>

      <BgWrapper className="mt-16">
        <ContainerWrapper >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex py-10  ">
            <div className="place-content-center  space-y-2 lg:space-y-4  max-w-[400px]   ">
              <SectionHeading text="Branded QR Code in Your Customer location" />
              <Paragraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-6">
                  <HomeLink text="Learn More" redirect="#" />
                </div>
              </div>
            </div>

            <div className="justify-self-end mt-4">
              <Image
                src="/assets/home/homeqr.png"
                alt="Choose Us"
                width={500}
                height={600}
              />
            </div>
          </div>
        </ContainerWrapper>
      </BgWrapper>
      <ContainerWrapper className="!mt-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
          <div className="">
            <Image
              src="/assets/home/paysol.webp"
              alt="payment solution"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="place-content-center  justify-self-end  space-y-2 lg:space-y-4  max-w-[400px]  ">
            <SectionHeading text="Intelligent in-car payment solutions" />
            <Paragraph text="Accept all major credit/debit in-car using QR Code, our Intelligent QR Code" />
            <div className="space-y-2">
              <HomeList text="Lorem Ipsum has been the industry " />
              <HomeList text="Standard dummy text ever since the" />
              <div className="mt-6">
                <HomeLink text="Learn More" redirect="#" />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>

      <InterfaceComponent
        data={home_data2}
        title="130+ CUSTOMERS"
        heading="A smart interface and strong backend control"
      />

      <ContainerWrapper className="mt-16 pt-16 ">
        <div className="text-center  text-lg font-bold mb-10  capitalized shadow-x-lg text-gray-400">
          Trusted by the world's leading businesses
        </div>
        <div className="overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-white via-white-10 to-transparent z-10 pointer-events-none"></div>

            <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-white via-white-10 to-transparent z-10 pointer-events-none"></div>

            <Marquee
              gradient={false}
              pauseOnHover={true}
              speed={50}
              className="cursor-pointer "
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="mx-10 hover:scale-125 transition-all duration-300"
                >
                  <Image src={client} alt="home image" width={90} height={60} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </ContainerWrapper>

      <ContainerWrapper className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 ">
          <div className="">
            <Image
              src="/assets/home/payterminal.webp"
              alt="payment solution"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="place-content-center justify-self-end space-y-2 lg:space-y-4 max-w-[400px] ">
            <SectionHeading text="Contactless Card Payment Terminal" />
            <Paragraph text="Accept all major credit/debit in-car using QR Code, our Intelligent QR Code" />
            <div className="space-y-2">
              <HomeList text="Lorem Ipsum has been the industry  " />
              <HomeList text="Standard dummy text ever since the" />
              <div className="mt-6">
                <HomeLink text="Learn More" redirect="#" />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>

      <BgWrapper className={"mt-16"}>
        <ContainerWrapper >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 ">
            <div className="place-content-center  space-y-2 lg:space-y-4  max-w-[400px]  ">
              <SectionHeading text="Generate Automatic PayLink" />
              <Paragraph text="Send personalized payment links via SMS, email, or messaging apps. Customers can pay instantly without registration" />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-6">
                  <HomeLink text="Learn More" redirect="#" />
                </div>
              </div>
            </div>

            <div className="justify-self-end mt-2">
              <Image
                src="/assets/home/paylink.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />
            </div>
          </div>
        </ContainerWrapper>
      </BgWrapper>

      <ContainerWrapper className="mt-32">
        <TestimonialCards />
      </ContainerWrapper>
      <Quote />
    </>
  );
};

export default Home;
