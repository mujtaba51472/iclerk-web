import React from 'react'

const BannerParagraph = ({ text, className }) => {
  return (
    <div className={`max-w-[500px] text-base md:text-lg  tracking-loose text-primary ${className}`}>
      {text}
    </div>
  )
}

export default BannerParagraph