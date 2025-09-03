import React from 'react'

const BgWrapper = ({children}) => {
  return (
    <div className='bg-[#0106580a]    mx-auto container rounded-3xl'>
      {children}
    </div>
  )
}

export default BgWrapper