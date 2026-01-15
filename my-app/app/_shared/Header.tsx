"use client"
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

function Header() {
  const {user} = useUser();
  return (
    //MAIN DIVISION
    <div className='flex items-center justify-between p-4'>
      {/* Logo aur logo name */}
      <div className='flex items-center gap-1 z-50'>
        <Image src={'/flower.png'} alt='logo'  width={40} height={40}/>
        <h2 className='text-xl font-semibold'> <span className='text-primary'>UI</span>Studio</h2>
      </div>
      {/* section div */}
      <ul className='flex gap-2 z-50 md:gap-5 items-center text-lg'>
        <li className='hover:text-primary cursor-pointer'>Home</li>
        <li className='hover:text-primary cursor-pointer'>Pricing</li>
      </ul>
      {/* Button  */}
      <div className='relative z-50'>
        {
          !user ?
          <SignInButton mode='modal'>
            <Button>Get Started</Button>
          </SignInButton>
          :
          <UserButton/>
        }
      </div>
    </div>
  )
}

export default Header;
