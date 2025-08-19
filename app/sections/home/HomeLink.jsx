import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomeLink = ({text , redirect}) => {
  return (
    <Link href={redirect} className=' flex  gap-2 text-primary text-sm '>{text} <MoveRight /></Link>
  )
}

export default HomeLink