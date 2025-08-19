import { Check } from 'lucide-react'
import React from 'react'

const HomeList = ({text}) => {
  return (
            <div className='text-grey text-sm flex gap-2 items-center'> <div className='inline-flex  rounded-full bg-primary p-[1px]'><Check className='text-white' size={14} /></div> {text}</div>

  )
}

export default HomeList
