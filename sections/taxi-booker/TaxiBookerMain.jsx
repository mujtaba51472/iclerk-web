import React from "react";
import TaxiBookerBanner from "./TaxiBookerBanner";
import ContainerWrapper from "@/components/shared/ContainerWrapper";
import SectionHeading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import HomeList from "../home/HomeList";
import HomeLink from "../home/HomeLink";
import Image from "next/image";
import BgWrapper from "@/components/shared/BgWrapper";
import Quote from "@/components/shared/Qoute";
import { taxibooker1 } from "./data";
import InterfaceComponent from "../home/InterfaceComponent";
import DesktopComp from "@/components/shared/DesktopComp";

const TaxiBookerMain = () => {
  return (
    <>
      <TaxiBookerBanner />
      <ContainerWrapper className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="place-content-center space-y-2 lg:space-y-4  max-w-[450px]   ">
            <Paragraph
              className="!text-secondary font-semibold"
              text="Dashboard"
            />
            <SectionHeading text="Lorem ipsum dolor sit amet, consecte" />
            <Paragraph text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </div>
           <DesktopComp className='!mt-16' right={true} img="/assets/taxibooker/taxipc.png"/>

        </div>
      </ContainerWrapper>

      <BgWrapper className={"mt-16"} rotate={true}>
        <ContainerWrapper className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16   ">
            <div className=" relative ">
              <Image
                src="/assets/taxibooker/qrcode.webp"
                alt="Choose Us"
                width={500}
                height={500}
                className="max-h-[400px] rounded-md"
              />
              <div className="absolute top-0 right-0">
                <Image
                  src="/assets/taxibooker/qr1.png"
                  alt="Choose Us"
                  width={200}
                  height={200}
                  className="max-h-[400px] rounded-md"
                />
              </div>
              <div className="absolute bottom-5 -left-8">
                <Image
                  src="/assets/taxibooker/qr2.png"
                  alt="Choose Us"
                  width={250}
                  height={150}
                  className="max-h-[400px] rounded-md"
                />
              </div>
            </div>
            <div className="place-content-center justify-self-end space-y-2 lg:space-y-4  max-w-[450px] ">
              <Paragraph
                className="!text-secondary font-semibold"
                text="Branded QR Code"
              />
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
          </div>
        </ContainerWrapper>
      </BgWrapper>
      <ContainerWrapper className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 ">
         
            <div className=" place-content-center  space-y-2 lg:space-y-4  max-w-[450px] ">
              <Paragraph
                className="!text-secondary font-semibold"
                text="Booking Receipt"
              />
              <SectionHeading text="With every successful booking on iClerk" />
              <Paragraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-6">
                  <HomeLink text="Learn More" redirect="#" />
                </div>
              </div>
            </div>

               <div className=" relative justify-self-end">
              <Image
                src="/assets/taxibooker/booking.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />
              <div className="absolute -left-15 -bottom-16">
                <Image
                  src="/assets/taxibooker/booking1.webp"
                  alt="Choose Us"
                  width={280}
                  height={200}
                  className="max-h-[400px] rounded-md"
                />
              </div>
            
            </div>
          </div>
        </ContainerWrapper>
                <InterfaceComponent data={taxibooker1} title='Payment Methods' heading='Enabling a variety of payment options' />



      <>
        <ContainerWrapper className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16  ">
            <div className=" relative ">
              <Image
                src="/assets/taxibooker/qronboard.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />

              <div className="absolute bottom-5 -right-0">
                <Image
                  src="/assets/taxibooker/qronboard1.png"
                  alt="Choose Us"
                  width={250}
                  height={150}
                  className="max-h-[400px] rounded-md"
                />
              </div>
            </div>
            <div className=" justify-self-end space-y-2 lg:space-y-4  max-w-[450px] ">
              <Paragraph
                className="!text-secondary font-semibold"
                text="QR Onboarding Feature"
              />
              <SectionHeading text="Contactless Card Payment Terminal" />
              <Paragraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-6">
                  <HomeLink text="Learn More" redirect="#" />
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      <BgWrapper className={"mt-16"} >

           <ContainerWrapper >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 ">
         
            <div className=" place-content-center  space-y-2 lg:space-y-4  max-w-[450px] ">
              <Paragraph
                className="!text-secondary font-semibold"
                text="Website Booker"
              />
              <SectionHeading text="Secure website booker into your site." />
              <Paragraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-6">
                  <HomeLink text="Learn More" redirect="#" />
                </div>
              </div>
            </div>

               <div className=" relative  justify-self-end mt-2">
              <Image
                src="/assets/taxibooker/webbooker.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />
            
            
            </div>
          </div>
        </ContainerWrapper>
              </BgWrapper>
                    <Quote />


      </>
    </>
  );
};

export default TaxiBookerMain;
