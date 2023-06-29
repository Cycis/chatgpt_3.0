import React from 'react';
import Logo from '@/app/contants/logo';
import LoginForm from '@/app/components/form/loginForm';

const login = () => {
   return (
      <div className='relative w-full h-screen flex flex-col items-center'>
         <Logo classname='mt-8 text-4xl text-gray-800' />
         <h1 className='text-3xl text-basic font-semibold mt-36 tracking-wider' >Welcome Back</h1>
         <LoginForm />
      </div>
   )
}

export default login
