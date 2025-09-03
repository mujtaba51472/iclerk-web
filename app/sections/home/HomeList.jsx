import { Check } from 'lucide-react'
import React from 'react'

const HomeList = ({text , className}) => {
  return (
            <div className={`leading-relaxed text-[14px] text-[#12141D] opacity-70 lg:text-[16px] ${className}`}> <div className='inline-flex '><Check className='text-white  bg-secondary rounded-full' size={16} /></div> {text}</div>

  )
}

export default HomeList
