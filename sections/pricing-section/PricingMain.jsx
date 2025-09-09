import ContainerWrapper from '@/components/shared/ContainerWrapper'
import SectionHeading from '@/components/shared/Heading'
import Paragraph from '@/components/shared/Paragraph'
import PricingCards from '@/components/shared/PriceCards'
import React from 'react'
import { plans } from './data'

const PricingMain = () => {
  return (
    <div className='py-10 lg:py-28 '>

        <div className='text-center max-w-3xl mx-auto px-4  space-y-2 '>
              <Paragraph
              className="!text-secondary font-semibold"
              text="30-days rolling contract"
            />
            <SectionHeading text="Start accepting payments online, in-store or remote in minutes." />
            <Paragraph text='Simple and transparent pricing plan give you access a complete payments and invoicing solutions.' />
        </div>

    <ContainerWrapper className="mt-16">
       <PricingCards data={plans} />
    </ContainerWrapper>
        </div>

  )
}

export default PricingMain