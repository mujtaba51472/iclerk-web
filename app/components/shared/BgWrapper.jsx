import React from 'react'

const BgWrapper = ({children}) => {
  return (
    <div className='bg-[#F8FAFC]   lg:px-10  mx-auto container rounded-3xl'>
      {children}
    </div>
  )
}

export default BgWrapper