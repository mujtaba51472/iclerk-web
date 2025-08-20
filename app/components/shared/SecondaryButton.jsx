import React, { Children } from 'react'

const SecondaryButton = ({children}) => {
  return (
    <div className='btn btn-secondary rounded-md px-4 py-2 text-white hover:bg-secondary-dark transition-colors duration-300'>
        {children}
    </div>
  )
}

export default SecondaryButton