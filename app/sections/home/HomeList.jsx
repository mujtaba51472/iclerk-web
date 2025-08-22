import { Check } from 'lucide-react'
import React from 'react'

const HomeList = ({text}) => {
  return (
            <div className='text-grey text-base flex gap-2 items-center'> <div className='inline-flex'><Check className='text-white p-[2px] bg-secondary rounded-full' size={20} /></div> {text}</div>

  )
}

export default HomeList
