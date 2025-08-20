import React from 'react'

const HomeSectionHeading = ({text , className}) => {
  return (
<div className={`text-primary  text-lg  lg:text-3xl  font-bold ${className}`}>
    {text}
</div>
  )
}

export default HomeSectionHeading