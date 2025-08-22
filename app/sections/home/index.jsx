"use client";
import BannerHeading from "@/app/components/shared/BannerHeading";
import BannerParagraph from "@/app/components/shared/BannerParagraph";
import BgWrapper from "@/app/components/shared/BgWrapper";
import ContainerWrapper from "@/app/components/shared/ContainerWrapper";
import {
  animateImage,
  animateTextChild,
  animateTextParent,
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

const Home = () => {
  return (
    <>
      <div className="pt-5  overflow-hidden h-[650px] relative">
        <div className="container px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 ">
            <div className="place-content-center space-y-8 max-w-[700px] lg:pt-28">
              <div>
                <BannerHeading text="Secure & Contactless Payment acceptance" />
              </div>

              <div variants={animateTextChild}>
                <BannerParagraph text="Easy to use payment acceptance from your customer with no hardware required." />
              </div>
              <div variants={animateTextChild}>
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
              </div>
            </div>
          </div>
          <div className="absolute top-0  hidden lg:block  -right-80 w-[60%] h-full overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/assets/home/home2.webp"
                alt="Home Background"
                fill={true}
                style={{ objectFit: "cover" }}
                className="w-full z-10"
              />

              {/* <Image
                src="/assets/home/home3.webp"
                alt="Home Foreground"
                height={500}
                width={700}
                className="z-30 absolute top-14 left-4 w-[100%] h-[80%] object-contain"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <BgWrapper>
        <ContainerWrapper >
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:py-14"

            viewport={{ once: true }}
          >
            {home_data1.map((item, index) => (
              <div
                key={index}
                className="flex items-start   space-x-4"
                variants={animateTextChild}
                custom={index}
              >
                <div className="bg-tertiary rounded-full p-3">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                </div>
                <div className="max-w-[300px] pt-2 ">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </ContainerWrapper>
      </BgWrapper>

        <ContainerWrapper  >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 lg:py-24 xl:py-28">
          <div className="relative">
            <div {...animateImage}>
              <Image
                src="/assets/home/chooseus.png"
                alt="Choose Us"
                width={500}
                height={600}
              />
            </div>
          </div>
          <div className="place-content-center max-w-[500px] space-y-8">
              <div className={`text-primary  text-lg  lg:text-4xl   font-bold `}>
                Why Choose <br /> iClerk?
                            </div>

              <Paragraph text="iClerk is a comprehensive, cloud-based dispatch and booking system designed to simplify operations for taxi businesses." />
            <div className="mt-5">
              <HomeLink text="Learn More" redirect="#" />
            </div>
          </div>
        </div>
      </ContainerWrapper>

      <BgWrapper>
        <ContainerWrapper >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 lg:pt-24 lg:pb-8 xl:pt-28 xl:pb-10">
            <div className="place-content-center space-y-8 max-w-[550px] ">
                <SectionHeading text="Branded QR Code in Your Customer location" />
                <Paragraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-5">
                  <HomeLink text="Learn More" redirect="#" />
                </div>
              </div>
            </div>

            <div className="">
              <Image
                src="/assets/home/homeqr.png"
                alt="Choose Us"
            width={550}
                height={600}
                className=""
              />
            </div>
          </div>
        </ContainerWrapper>
      </BgWrapper>

        <ContainerWrapper >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 lg:py-24 xl:py-28"
          viewport={{ once: true }}
        >
          <div>
            <Image
              src="/assets/home/paysol.webp"
              alt="payment solution"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="place-content-center space-y-8 max-w-[550px] ">
            <div className="max-w-[500px]  space-y-8">
              <SectionHeading text="Intelligent in-car payment solutions" />
              <Paragraph text="Accept all major credit/debit in-car using QR Code, our Intelligent QR Code" />
            </div>
            <div className="space-y-2">
              <HomeList text="Lorem Ipsum has been the industry " />
              <HomeList text="Standard dummy text ever since the" />
            </div>
            <div className="mt-5">
              <HomeLink text="Test Qr Booker" redirect="#" />
            </div>
          </div>
        </div>
      </ContainerWrapper>

      <InterfaceComponent />

      <div className="my-32 ">
        <div className="text-center text-primary text-lg font-bold mb-4 capitalized">
          Trusted by the world's leading businesses
        </div>
        <div
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
        </div>
      </div>

      <BgWrapper>
        <ContainerWrapper >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 lg:pt-24 lg:pb-8 xl:pt-28 xl:pb-10"
     
          >
            <div >
              <Image
                src="/assets/home/payterminal.webp"
                alt="payment solution"
                width={500}
                height={500}
                className=""
              />
            </div>
            <div
              className="place-content-center space-y-8"
            >
                           <div className="max-w-[500px]  space-y-8">

              <SectionHeading text="Contactless Card Payment Terminal" />
              <Paragraph text="Accept all major credit/debit in-car using QR Code, our Intelligent QR Code" />
              </div>
              
              <div className="space-y-2">
                <HomeList text="Lorem Ipsum has been the industry  " />
                <HomeList text="Standard dummy text ever since the" />
              </div>
              <div className="mt-5">
                <HomeLink text="Taxi QR Booker" redirect="#" />
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </BgWrapper>

        <ContainerWrapper >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 lg:py-24 xl:py-28"
  
        >
          <div
            className="place-content-center space-y-8 max-w-[500px]"
          >
            <SectionHeading text="Generate Automatic PayLink " />
            <Paragraph text="Send personalized payment links via SMS, email, or messaging apps. Customers can pay instantly without registration" />
            <div className="space-y-2">
              <HomeList text="Compatible with all major browsers" />
              <HomeList text="Fully integrated with iCabbi dispatch system" />
            </div>
            <div className="mt-5">
              <HomeLink text="Learn More" redirect="#" />
            </div>
          </div>
          <div variants={animateTextChild} className="justify-self-center">
            <Image
              src="/assets/home/paylink.webp"
              alt="Choose Us"
              width={400}
              height={300}
              className="max-h-[400px] rounded-md"
            />
          </div>
        </div>
      </ContainerWrapper>

      <ContainerWrapper>
        <TestimonialCards />
      </ContainerWrapper>

      <ContainerWrapper className={"mb-20"}>
        <div className="rounded-md overflow-hidden">
          <div className="bg-[url('/assets/home/bghome1.webp')] rounded-md bg-cover bg-center bg-no-repeat min-h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-5xl mx-auto px-4">
              <SectionHeading
                className="!text-white !uppercase"
                text="Start accepting payments online, in-store or remote in minutes"
              />
              <Paragraph
                className="!text-white !text-base"
                text="Simple and transparent pricing plan give you access a complete payments and invoicing solutions."
              />
              <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition">
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
