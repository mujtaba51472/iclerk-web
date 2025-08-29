"use client";
import BannerHeading from "@/app/components/shared/BannerHeading";
import BannerParagraph from "@/app/components/shared/BannerParagraph";
import BgWrapper from "@/app/components/shared/BgWrapper";
import ContainerWrapper from "@/app/components/shared/ContainerWrapper";
import {
  animateImage,
  animateTextChild,
  animateTextParent,
  fadeInGradient,
} from "@/app/utils/animate";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import HomeSectionHeading from "../../components/shared/Heading";
import HomeParagraph from "../../components/shared/Paragraph";
import TestimonialCards from "./CustomerReview";
import { clients, home_data1 } from "./data";
import HomeLink from "./HomeLink";
import HomeList from "./HomeList";
import InterfaceComponent from "./InterfaceComponent";
import Paragraph from "../../components/shared/Paragraph";
import SectionHeading from "../../components/shared/Heading";
import HomeChoose from "./HomeChoose";
import HomeQr from "./HomeQr";

const Home = () => {
  return (
    <>
      <div
        className={`bg-[url('/assets/home/homebg.png')]
        } relative  bg-no-repeat bg-cover max-w-full bg-center    relative min-h-[640px] flex items-center z-10 `}
      >
        <div className="container !px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8  relative z-10">
            <div className="place-content-center space-y-4 lg:space-y-8 max-w-[350px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[800px]">
              <div
                className={`text-primary font-bold text-3xl sm:text-3xl lg:text-[50px] xl:[64px]  sm:leading-[1.3] lg:leading-[120%] `}
              >
                Secure & <br /> Contactless Payment acceptance
              </div>

              <div>
                <BannerParagraph text="Easy to use payment acceptance from your customer with no hardware required." />
              </div>
              <div className="   xl:hidden">
                <Image
                  src="/assets/home/home3.webp"
                  alt="Background Image"
                  width={400}
                  height={500}
                  className=""
                />
              </div>
              <div>
                <div className="pr-0 md:pr-4 lg:pr-0 max-w-[500px]">
                  <button
                    className=" py-3 lg:py-6 flex cursor-pointer group items-center justify-between text-lg md:text-2xl lg:text-3xl font-bold rounded-[75px]  w-full hover:shadow-2xl transition-all duration-300 group"
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
                    <span className="text-primary  px-2 lg:px-6 group-hover:-translate-y-1 transition-all duration-300">
                      Book a Demo
                    </span>
                    <Image
                      src="/assets/home/home1.png"
                      alt="Arrow Right"
                      width={40}
                      height={40}
                      className=" mx-2 group-hover:translate-x-1 group-hover:scale-125 transition-all duration-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden xl:block  lg:pt-10">
          <Image
            src="/assets/home/home3.webp"
            alt="Background Image"
            width={780}
            height={700}
            className=""
          />
        </div>
      </div>

      <div className="bg-[#F8FAFC]">
        <ContainerWrapper>
          <div
            className="flex items-center justify-between flex-wrap  py-8"
            viewport={{ once: true }}
          >
            {home_data1.map((item, index) => (
              <div
                key={index}
                className="flex items-start  space-x-4  "
                variants={animateTextChild}
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
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </ContainerWrapper>
      </div>
 <ContainerWrapper className='mt-24'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          <div className="">
            <Image
              src="/assets/home/chooseus.png"
                  alt="Choose Us"
                width={550}
                  height={600}
                  className="z-10"
                />
              </div>

          <div className="place-content-center justify-self-end space-y-2 lg:space-y-4 max-w-[550px] ">

            <div className="text-primary text-2xl lg:text-4xl font-bold">
              Why Choose <br /> iClerk?
            </div>

            <Paragraph className='!text-[#0E2057]' text="iClerk is a comprehensive, cloud-based dispatch and booking system designed to simplify operations for taxi businesses." />

            <div className="mt-6">
              <HomeLink text="Learn More" redirect="#" />
            </div>
          </div>
        </div>
      </ContainerWrapper>    
      
<BgWrapper>
 <ContainerWrapper className='mt-24'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex py-10  ">
            <div className="place-content-center  space-y-2 lg:space-y-4  max-w-[500px]   ">
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
      <ContainerWrapper className='mt-24'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <Image
              src="/assets/home/paysol.webp"
              alt="payment solution"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="place-content-center  justify-self-end  space-y-2 lg:space-y-4  max-w-[500px]  ">
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

      <InterfaceComponent />

      <ContainerWrapper className='mt-24 '>
        <div className="text-center  text-lg font-bold mb-10 capitalized shadow-x-lg text-gray-400">
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

      <ContainerWrapper className='mt-24'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="">
            <Image
              src="/assets/home/payterminal.webp"
              alt="payment solution"
              width={550}
              height={500}
              className=""
            />
          </div>
          <div className="place-content-center justify-self-end space-y-2 lg:space-y-4 max-w-[500px] ">
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

      <BgWrapper>
      <ContainerWrapper className='mt-24'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 ">
            <div className="place-content-center  space-y-2 lg:space-y-4  max-w-[500px]  ">
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

            <div className="justify-self-end">
              <Image
                src="/assets/home/paylink.webp"
                alt="Choose Us"
                width={550}
                height={300}
                className="max-h-[400px] rounded-md"
              />
            </div>
          </div>
        </ContainerWrapper>
      </BgWrapper>

      <ContainerWrapper className='mt-24'>
        <TestimonialCards />
      </ContainerWrapper>

      <ContainerWrapper className='mt-24'>
        <div className="rounded-md overflow-hidden">
          <div className="bg-[url('/assets/home/bghome1.webp')] rounded-md bg-cover bg-center bg-no-repeat min-h-[500px]  flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-5xl mx-auto  ">
              <SectionHeading
                className="!text-white !uppercase"
                text="Start accepting payments online, in-store or remote in minutes"
              />
              <Paragraph
                className="!text-white !text-base"
                text="Simple and transparent pricing plan give you access a complete payments and invoicing solutions."
              />
              <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition mb-5">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Home;
