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
            <label
               className='relative w-full h-12  rounded-sm cursor-pointer'
            >
               <input
                  type="text"
                  id='email'
                  className='w-full h-full border-[1px] border-gray-400 outline-none p-2 text-[16px] text-basic px-2 focus:border-teal rounded-sm peer' placeholder=''
               />
               <span
                  className='absolute top-3 left-2 text-[16px] text-opacity-80 text-basic scale-100 bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:text-teal peer-focus:-top-3 peer-focus:-left-2 peer-focus:scale-75 peer-focus:text-teal transition-all duration-500'
               >
                  Email address
               </span>
            </label>
            <label className='relative w-full h-12  rounded-sm cursor-pointer'>
               <input type="password" id='email' className='w-full h-full border-[1px] border-gray-400 outline-none text-[16px] text-basic px-2 focus:border-teal rounded-sm peer' placeholder='' />
               <span
                  className='absolute top-3 left-2 text-[16px] text-opacity-80 text-basic scale-100 bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:text-teal peer-focus:-top-3 peer-focus:-left-2 peer-focus:scale-75 peer-focus:text-teal  transition-all duration-500'>
                  Password
               </span>
            </label>
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
