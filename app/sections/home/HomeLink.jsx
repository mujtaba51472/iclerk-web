import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomeLink = ({ text, redirect }) => {
  return (
    <div className="inline-flex items-center group gap-1  cursor-pointer">
      <Link 
        href={redirect} 
        className="
          inline-flex items-center gap-3 
          px-6 py-3 
          font-semibold text-base
          rounded-l-lg 
          bg-secondary text-white
          transition-all duration-300 ease-in-out
          hover:bg-opacity-90
          focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
          shadow-lg hover:shadow-xl
          transform group-hover:scale-105 group-hover:-translate-y-0.5
        "
      >
        {text}
      </Link>
      
      <div className="
        flex items-center justify-center
        w-12 h-12
        bg-secondary text-white
        rounded-full
        transition-all duration-300 ease-in-out
        shadow-lg hover:shadow-xl
        transform group-hover:scale-105 group-hover:-translate-y-0.5
        group-hover:bg-opacity-90
      ">
        <MoveRight 
          size={20} 
          className="transition-transform duration-300 group-hover:translate-x-1" 
        />
      </div>
    </div>
  )
}

export default HomeLink