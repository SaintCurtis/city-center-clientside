import React from 'react'
import { loginBg, logo } from '../assets/img'

const Login = () => {
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
    {/* background image*/}
    <img
    src={loginBg}
    className='w-full h-full object-cover absolute top-0 left-0'
    alt=''
    />
    {/* content box*/}
    <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
     {/* top logo section*/}
     <div className="flex items-center justify-start gap-4 w-full">
     <img src={logo} className='w-8' alt=''/>
     <p className='text-headingColor font-semibold text-3xl'>City</p> 
     </div>
      {/* welcome box*/}
      <p className='text-3xl font-semibold text-headingColor'> Welcome Back </p>
      <p className='text-xl text-textColor -mt-6'>Sign In with the following</p>

       {/* input box*/}
       <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
       </div>
    </div>
    </div>
  )
}

export default Login