'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const DesktopComp = ({img , right , className}) => {
  return (
    <div className={`relative ${right ? 'justify-self-end' : ''}`}>
      <motion.div 
        className="absolute -top-5 blur-[50px] -z-10 rounded-full -left-5 h-50 w-50 bg-[#1FCCE8]"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ 
          opacity: [1, 0.3, 1],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className={`absolute bottom-16 ${right ? 'right-0' : 'right-30'} blur-[50px] -z-10 rounded-full h-50 w-50 bg-[#501EFA]`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <Image
        src={img}
        alt="Choose Us"
        width={500}
        height={600}
        className={`z-10 ${className}`}
      />
    </div>
  )
}

export default DesktopComp