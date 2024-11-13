"use client"
import Image from 'next/image'
import {Button} from '@/components/ui/button'

const Header = () => {
  return (
    <div className="p-5 shadow-sm flex justify-between">
    <div className='flex items-center gap-8'>
        <Image src='/logo.svg' alt='logo' width={30} height={30} />
        <ul className='md:flex items-center gap-6 hidden'>
            <li className='hover:scale-105 hover:text-primary'>Home</li>
            <li className='hover:scale-105 hover:text-primary'>Services</li>
            <li className='hover:scale-105 hover:text-primary'>About Us</li>
        </ul>
    </div>
    <div><Button>Log In / Sign Up</Button></div>
    </div>
  )
}

export default Header