import ContainerWrapper from '@/app/components/shared/ContainerWrapper'
import Paragraph from '@/app/components/shared/Paragraph'
import React from 'react'
import HomeLink from './HomeLink'
import Image from 'next/image'

const HomeChoose = () => {
  return (
 <ContainerWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 lg:py-10 ">
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
      </ContainerWrapper>  )
}

export default HomeChoose