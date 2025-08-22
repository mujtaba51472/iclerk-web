import React from 'react'

const Paragraph = ({text , className}) => {
  return (
    <div className={`text-grey text-[20px] tracking-loose ${className}`}>{text}</div>
  )
}

export default Paragraph