import React from 'react'

const Paragraph = ({text , className , white}) => {
  return (
<div className={` leading-relaxed text-[14px] text-primary lg:text-[16px] ${className}`}>{text}</div>  )
}

export default Paragraph



// before 
    // <div className={` leading-relaxed text-[14px] text-[#12141D] opacity-70 lg:text-[16px] ${className}`}>{text}</div>
    