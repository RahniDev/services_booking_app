"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useSession, useUser } from '@descope/nextjs-sdk/client';

const Header = () => {
  const { isAuthenticated } = useSession()
  const { user } = useUser()

  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className='flex items-center gap-8'>
        <Image src='/logo.svg' alt='logo' width={30} height={30} />
        <ul className='md:flex items-center gap-6 hidden'>
          <li className='hover:scale-105 hover:text-primary'>
            <Link href="/">Home</Link></li>
        </ul>
      </div>
      {isAuthenticated ? (
        <div><Link href="/sign-in">Logout</Link></div>
      ) : (<div><Link href='/sign-in'>Log In / Sign Up</Link></div>)}
    </div>
  )
}

export default Header