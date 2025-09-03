import React from 'react'
import CardReaderBanner from './CardReaderBanner'
import ContainerWrapper from '@/app/components/shared/ContainerWrapper'
import Paragraph from '@/app/components/shared/Paragraph'
import SectionHeading from '@/app/components/shared/Heading'
import HomeList from '../HomeList'
import HomeLink from '../HomeLink'
import Image from 'next/image'
import BgWrapper from '@/app/components/shared/BgWrapper'
import Quote from '@/app/components/shared/Qoute'

const CardReaderMain = () => {
  return (
    <>
    <CardReaderBanner />
       <ContainerWrapper className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 ">
         
            <div className=" place-content-center  space-y-2 lg:space-y-4  max-w-[450px] ">
              <Paragraph
                className="!text-secondary font-semibold"
                text="BBPOS WisePad™ 3"
              />
              <SectionHeading text="The WisePad 3, Manufactured by BBPOS" />
              <Paragraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-6">
                  <HomeLink text="Taxi QR Booker" redirect="#" />
                </div>
              </div>
            </div>

               <div className=" relative justify-self-end">
              <Image
                src="/assets/card-reader/1.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />
            
            
            </div>
          </div>
        </ContainerWrapper>
        <BgWrapper>

             <ContainerWrapper className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 ">
           <div className=" relative ">
              <Image
                src="/assets/card-reader/2.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />
            
            
            </div>
            <div className=" place-content-center justify-self-end  space-y-2 lg:space-y-4  max-w-[450px] ">
              <Paragraph
                className="!text-secondary font-semibold"
                text="BBPOS WisePOS™ E"
              />
              <SectionHeading text="The WisePOS E, Manufactured by BBPOS" />
              <Paragraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-6">
                  <HomeLink text="Taxi QR Booker" redirect="#" />
                </div>
              </div>
            </div>

             
          </div>
        </ContainerWrapper>
                </BgWrapper>

                 <ContainerWrapper className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 ">
         
            <div className=" place-content-center  space-y-2 lg:space-y-4  max-w-[450px] ">
              <Paragraph
                className="!text-secondary font-semibold"
                text="BBPOS WisePOS™ E Dock"
              />
              <SectionHeading text="The BBPOS WisePOS™ E Dock" />
              <Paragraph text="Instantly book a taxi or get a quote with your company's branded QR code - no app or tablet required." />
              <div className="space-y-2">
                <HomeList text="Compatible with all major browsers" />
                <HomeList text="Fully integrated with iCabbi dispatch system" />
                <div className="mt-6">
                  <HomeLink text="Taxi QR Booker" redirect="#" />
                </div>
              </div>
            </div>

               <div className=" relative justify-self-end">
              <Image
                src="/assets/card-reader/3.webp"
                alt="Choose Us"
                width={500}
                height={300}
                className="max-h-[400px] rounded-md"
              />
            
            
            </div>
          </div>
        </ContainerWrapper>
        <Quote />

    </>
  )
}

export default CardReaderMain