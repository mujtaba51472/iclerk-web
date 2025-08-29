import React from 'react'

const Paragraph = ({text , className}) => {
  return (
    <div className={` leading-relaxed text-[14px] lg:text-[16px] opacity-70  ${className}`}>{text}</div>
  )
}

export default Paragraph