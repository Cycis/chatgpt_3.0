import React from 'react'

const page = () => {
   return (
      <div className="w-full">
         <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
         </div>
         <div className="selection:mt-5 max-w-md">
            <form action="">
               <div className="relative mt-6">

                  <label htmlFor='email' className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">EMAIL</label>
               </div>
               <input type="email" className="peer w-full border-b placeholder:text-transparent" placeholder="name" />

               <div className="relative mt-6">
                  <input type="password" className="peer w-full border-b placeholder:text-transparent" placeholder="name" />
                  <label htmlFor="password" className="absolute left-0 ml-1 px-1 -translate-y-3 bg-white text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm">PASSWORD</label>
               </div>
               <button className="mt-10 w-full rounded-md bg-slate-600 py-2 px-5 text-white">Submit</button>
            </form>
         </div>
      </div>
   )
}

export default page