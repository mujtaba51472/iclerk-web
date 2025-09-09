import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import SectionHeading from './Heading'
import Paragraph from './Paragraph'

const Quote = () => {
  return (
  <ContainerWrapper className='mt-2'>
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
      </ContainerWrapper>  )
}

export default Quote