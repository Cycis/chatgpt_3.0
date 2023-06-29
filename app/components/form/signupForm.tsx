'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import { Button } from '../ui/button';
import Link from 'next/link';

const SignUpForm = () => {
   const form = useForm()

   return (
      <div className='w-full xs:w-[350px] sm:w-[350px] h-screen mt-6 px-4'>
         <form className='flex flex-col gap-6'>
            <div className="relative h-12">
               <input
                  type="email"
                  className="peer w-full border-b placeholder:text-transparent h-full border-[1px] border-gray-400 outline-none text-[16px] text-basic px-4 focus:border-teal rounded-sm"
                  placeholder=" "
               />
               <label
                  htmlFor='email'
                  className="absolute top-3 left-1 ml-2 -translate-y-6 bg-white text-sm duration-500 text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:focus:text-teal peer-focus:ml-1 peer-focus:-translate-y-6 peer-focus:text-teal peer-focus:px-1 peer-focus:text-sm"
               >
                  Email Address
               </label>
            </div>

            <div className="relative h-12">
               <input
                  type="password"
                  className="peer w-full border-b placeholder:text-transparent h-full border-[1px] border-gray-400 outline-none text-[16px] text-basic px-4 focus:border-teal rounded-sm"
                  placeholder=" "
               />
               <label
                  htmlFor='password'
                  className="absolute top-3 left-1 ml-2 -translate-y-6 bg-white text-sm duration-500 text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:focus:text-teal peer-focus:ml-1 peer-focus:-translate-y-6 peer-focus:text-teal peer-focus:px-1 peer-focus:text-sm"
               >
                  Password
               </label>
            </div>

            <Button
               className='bg-teal w-full hover:bg-teal/80 tracking-wide py-6 rounded-sm capitalize text-md font-normal text-inter text-white'
            >
               continue
            </Button>
            <p className='text-[13px] text-basic font-base self-center'>Don't have an account? {" "}
               <Link href='/u/signup' className='text-teal text-inter text-center'>Sign Up</Link>
            </p>
         </form>
         <div className='w-full flex my-4 items-center justify-between'>
            <span className='w-[40%] h-[1px] bg-basic/40'></span>
            <p className='text-[12px] text-basic uppercase'>or</p>
            <span className='w-[45%] h-[1px] bg-basic/40'></span>
         </div>
      </div>
   )
}

export default SignUpForm
