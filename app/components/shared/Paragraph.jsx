import React from 'react'

const HomeParagraph = ({text , className}) => {
  return (
    <div className={`text-grey text-lg tracking-loose ${className}`}>{text}</div>
  )
}

export default HomeParagraph