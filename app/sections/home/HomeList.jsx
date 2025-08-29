import { Check } from 'lucide-react'
import React from 'react'

const HomeList = ({text}) => {
  return (
            <div className='leading-relaxed text-[14px] lg:text-[16px] opacity-70'> <div className='inline-flex '><Check className='text-white  bg-secondary rounded-full' size={16} /></div> {text}</div>

  )
}

export default HomeList
