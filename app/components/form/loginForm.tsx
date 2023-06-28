'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import { Button } from '../ui/button';
import Link from 'next/link';

const LoginForm = () => {
   const form = useForm()

   return (
      <div className='w-full xs:w-[350px] sm:w-[350px] h-screen mt-6 px-4'>
         <form className='flex flex-col gap-6'>
            <div className='relative w-full h-12 border-[1px] border-gray-400 rounded-sm'>
               <input type="text" id='email' className='w-full h-full outline-none p-2 text-[16px] text-basic rounded-sm' />
               <label id='email_id' htmlFor="email" className='absolute top-3 left-2 text-basic'>Email address</label>
            </div>
            <div className='relative w-full h-12 border-[1px] border-gray-400 rounded-sm'>
               <input type="text" id='email' className='w-full h-full outline-none p-2 text-[16px] text-basic rounded-sm' />
               <label htmlFor="email" id='password_id' className='absolute top-3 left-2 text-basic'>Password</label>
            </div>
            <Button className='bg-teal hover:bg-teal/80 tracking-wide py-6 rounded-sm capitalize text-sm text-white'>continue</Button>
            <p className='text-sm text-basic mt-2 self-center'>Don't have an account? <Link href='/u/signup' className='text-teal text-pops text-center'>Sign Up</Link></p>
         </form>
         <div className='w-full flex my-4 items-center justify-between'>
            <span className='w-[40%] h-[1px] bg-basic/40'></span>
            <p className='text-[12px] text-basic uppercase'>or</p>
            <span className='w-[45%] h-[1px] bg-basic/40'></span>
         </div>
      </div>
   )
}

export default LoginForm
