import React from 'react'

const BannerParagraph = ({ text, className }) => {
  return (
    <div className={`text-base md:text-lg lg:text-xl text-grey ${className}`}>
      {text}
    </div>
  )
}

export default BannerParagraph