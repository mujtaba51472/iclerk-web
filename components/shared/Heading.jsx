import React from 'react'

const SectionHeading = ({text , className}) => {
  return (
<div className={`text-primary font-extrabold text-2xl  lg:text-4xl leading-[1.3]   ${className}`}>
    {text}
</div>
  )
}

export default SectionHeading