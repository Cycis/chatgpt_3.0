import React from 'react';
import Logo from '@/app/contants/logo';
import LoginForm from '@/app/components/form/loginForm';

const page = () => {
   return (
      <div className='relative w-full h-screen flex flex-col items-center'>
         <Logo classname='mt-10 text-gray-800' />
         <h1 className='text-3xl text-basic font-semibold mt-20 mb-3 tracking-wider' >Welcome Back</h1>
         <LoginForm />
      </div>
   )
}

export default page
