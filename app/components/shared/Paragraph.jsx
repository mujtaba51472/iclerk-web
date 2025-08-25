import React from 'react'

const Paragraph = ({text , className}) => {
  return (
    <div className={`text-grey text-base lg:text-[18px]  ${className}`}>{text}</div>
  )
}

export default Paragraph