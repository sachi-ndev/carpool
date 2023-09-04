import React from 'react'
import bgimg from './../../assets/goimg2.jpg'
// import googleimg from './../assets/google_360.png'
// import fbimg from './../assets/facebook_480.png'
// import appleimg from './../assets/apple_480.png'
// import appleimg2 from './../assets/applewhite.png'
// import { DeviceMobile, EnvelopeSimple, Key, UserCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import Log from '../log'
import Signin from '../signin'


export default function Login() {
  const[hide,setHide]=useState(true)
  const[clk,setClk]=useState("Dont")

   const togglediv=()=>{
    setHide(!hide)
    
    // console.log(hide);
   }



  return (
    <div className='w-[100vw] h-[calc(100vh-4.5rem)] overflow-hidden'>

      <div className='absolute overflow-hidden inset-0 bg-slate-50/5 z-[-1]'>
        <img src={bgimg} className='absolute inset-0 -z-10 w-[100vw] aspect-[1/2]  md:aspect-auto md:h-[100vh] ' alt="" />
      </div>

      <div className=' w-[100vw] h-[calc(100vh-5rem)]  flex flex- items-center justify-center relative gap-5 ' >
      <div className= ' relative bg-[#544d4d41] px-[5rem] rounded-2xl py-[1.2rem]'>

{
  hide ?(
    <div className=' items-center justify-center'>
    <Signin/>
    <p className='text-center'>Already have  Account ?<button  className=' font-bold text-center' onClick={togglediv}> Login </button > </p>
    </div>
  )
  :
  (
    <div className='flex flex-col items-center justify-center'>
      <Log/>
      <p className=''>Don't have Account? <button  className='font-bold' onClick={togglediv}>Sign up</button > </p>

     </div>
  )
}

      {/* <button onClick={togglediv}></button> */}

        </div>

          <div className=' text-white ml-20' >
            <h1 className='font-Oleo  text-[3.3rem] mb-7'>Welcome to Amigos</h1>
            <p className='font-serif w-[24rem] text-[1.1rem]' >Amigos is here to help you to find your travel buddy for a long distance travel, with a safer and cheaper travel </p>
          </div>


      </div>

       
    </div>
  )
}

