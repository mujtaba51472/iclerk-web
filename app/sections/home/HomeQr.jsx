import BgWrapper from '@/app/components/shared/BgWrapper'
import ContainerWrapper from '@/app/components/shared/ContainerWrapper'
import SectionHeading from '@/app/components/shared/Heading'
import Paragraph from '@/app/components/shared/Paragraph'
import React from 'react'
import HomeList from './HomeList'
import HomeLink from './HomeLink'
import Image from 'next/image'

const HomeQr = () => {
  return (
   <BgWrapper>
        <ContainerWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex py:5 lg:py-10  ">
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
 )
}

export default HomeQr