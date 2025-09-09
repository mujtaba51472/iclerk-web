import React from 'react'

const BgWrapper = ({children, className , rotate=false}) => {
  return (
    <div className={` relative bg-white shadow-md container mx-auto rounded-3xl overflow-hidden ${className}`}>
      <div
        style={{
          backgroundImage: "url('/assets/taxibooker/taxibanner.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform:  rotate && 'rotate(180deg)',
        }}
        className="absolute inset-0  "
      />
      <div className="relative z-10 h-full w-full lg:px-10 ">
        {children}
      </div>
    </div>
  )
}

export default BgWrapper