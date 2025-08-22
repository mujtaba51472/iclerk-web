import React from 'react'

const SectionHeading = ({text , className}) => {
  return (
<div className={`text-primary  text-lg  lg:text-4xl   font-bold ${className}`}>
    {text}
</div>
  )
}

export default SectionHeading