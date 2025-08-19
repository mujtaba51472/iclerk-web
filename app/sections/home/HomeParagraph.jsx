import React from 'react'

const HomeParagraph = ({text , className}) => {
  return (
    <div className={`text-grey text-base  ${className}`}>{text}</div>
  )
}

export default HomeParagraph