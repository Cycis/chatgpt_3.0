import React from 'react'
import SignUpForm from '@/app/components/form/signupForm'
import Logo from '@/app/contants/logo'

const signup = () => {
   return (
      <div className='relative w-full h-screen flex flex-col items-center'>
         <Logo classname='mt-6 sm:mt-8 text-4xl text-gray-800 md:mb-36 mb-20' />
         <SignUpForm />
      </div>
   )
}

export default signup