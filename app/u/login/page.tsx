import React from 'react';
import Logo from '@/app/contants/logo';
import LoginForm from '@/app/components/form/loginForm';

const login = () => {
   return (
      <div className='relative w-full h-screen flex flex-col items-center'>
         <Logo classname='mt-6 sm:mt-8 text-4xl text-gray-800 md:mb-36 mb-20' />
         <LoginForm />
      </div>
   )
}

export default login
