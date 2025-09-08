import React from "react";
import PaylinkBanner from "./PaylinkBanner";
import ContainerWrapper from "@/app/components/shared/ContainerWrapper";
import Paragraph from "@/app/components/shared/Paragraph";
import SectionHeading from "@/app/components/shared/Heading";
import Image from "next/image";
import BgWrapper from "@/app/components/shared/BgWrapper";
import HomeList from "../home/HomeList";
import HomeLink from "../home/HomeLink";
import Quote from "@/app/components/shared/Qoute";
import DesktopComp from "@/app/components/shared/DesktopComp";

const PaylinkMain = () => {
  return (
    <>
      <PaylinkBanner />
      <ContainerWrapper className="mt-24 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          <div className="place-content-center space-y-2 lg:space-y-4  max-w-[450px]   ">
            <Paragraph
              className="!text-secondary font-semibold"
              text="Dashboard"
            />
            <SectionHeading text="Streamline financial processes with iClerk." />
            <Paragraph text="iClerk consolidates your payment data in one secure place, giving you an actionable view into all transactions. Refunds and pre-authorised payments can easily be managed from the convenient dashboard." />
          </div>

          <DesktopComp className='mt-10 ' right='true' img="/assets/paylink/paypc.png"/>

        </div>
      </ContainerWrapper>
      <BgWrapper rotate={true} className="mt-16">
        <ContainerWrapper >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16  ">
            <div className="relative">
              <Image
                src="/assets/taxibooker/qrcode.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />
            </div>
            <div className="place-content-center justify-self-end space-y-2 lg:space-y-4 max-w-[450px]">
              <Paragraph
                className="!text-secondary font-semibold"
                text="Automatic PayLink"
              />
              <SectionHeading text="Generate Automatic PayLink" />
              <Paragraph text="Let iClerk make payments easier than ever! When booking a job in iCabbi, just select 'iClerk' from the accounts list and save the booking as usual. This will trigger an invoice to be sent via email or SMS, which includes payment instructions - plus, the booking is put on hold until payment confirmation is received and the booking is released automatically once payment confirms." />
            </div>
          </div>
        </ContainerWrapper>
      </BgWrapper >
      <ContainerWrapper className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 ">
          <div className=" place-content-center  space-y-2 lg:space-y-4  max-w-[450px] ">
            <Paragraph
              className="!text-secondary font-semibold"
              text="Secure Payment Page"
            />
            <SectionHeading text="Mobile Responsive & Secure Payment Page" />
            <Paragraph text="Through our convenient, browser-based mobile responsive payment page, customers can securely and quickly pay for their journey with simple clicks - supported by services like Apple Pay & GooglePay. Payments are processed in a matter of minutes.After successful payment customer can track taxi from the same page." />
          </div>

          <div className=" relative justify-self-end">
            <Image
              src="/assets/paylink/securepay.webp"
              alt="Choose Us"
              width={600}
              height={300}
              className="max-h-[400px] rounded-md"
                          />

          </div>
        </div>
      </ContainerWrapper>
       <BgWrapper rotate={true} className="mt-16">
        <ContainerWrapper >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10  ">
            <div className="relative">
              <Image
                src="/assets/paylink/booking-recipet.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />
            </div>
            <div className="place-content-center justify-self-end space-y-2 lg:space-y-4 max-w-[450px]">
              <Paragraph
                className="!text-secondary font-semibold"
                text="Booking Receipt"
              />
              <SectionHeading text="With every successful booking on iClerk" />
              <Paragraph text="Customers receive an email confirmation with their receipt. This notification also contains links to track my taxi, rebook or book a return journey and provide your business with feedback in the form of a link to Google review." />
            </div>
          </div>
        </ContainerWrapper>
      </BgWrapper>
                          <Quote />

    </>
  );
};

export default PaylinkMain;
