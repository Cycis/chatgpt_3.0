import Link from "next/link";

import Logo from "@/app/contants/logo";
import { Button } from "@/app/components/ui/button";


const page = () => {
   return (
      <div className='relative w-full h-screen bg-basic flex flex-col items-center justify-center'>
         <Logo />
         <div className="text-center mt-6 text-white space-y-3">
            <p className=" text-mono">Welcome to ChatGPT</p>
            <p className="">Log in with your OpenAI account to continue</p>
         </div>
         <div className="flex gap-4 mt-3">
            <Link href='/u/login'>
               <Button className="bg-teal hover:bg-teal/75 rounded-sm">Login</Button>
            </Link>
            <Link href='/u/signup'>
               <Button className="bg-teal hover:bg-teal/75 rounded-sm">Signup</Button>
            </Link>
         </div>

         <footer className="absolute bottom-0 flex items-center justify-center gap-2 text-center text-xs text-gray-400 text-pops mb-4">Terms of use
            <div className="bg-gray-500 w-[2px] h-[10px]"></div>
            Privacy policy
         </footer>
      </div>
   )
}

export default page