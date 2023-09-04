import React from 'react'
import googleimg from './../assets/google_360.png'
import fbimg from './../assets/facebook_480.png'
// import appleimg from './../assets/apple_480.png'
import appleimg2 from './../assets/applewhite.png'
import {  EnvelopeSimple, Key } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'



export default function Log() {
  return (
    <div className='flex flex-col items-center justify-center'>
             


<h1 className='text-center font-Oleo  text-[2rem] '>USER LOGIN</h1>
{/* <label htmlFor="email" >Email</label> */}
 <br />
<div className='bg-slate-600/10 flex items-center w-[16rem] rounded-xl px-[.5rem]  mb-2'>
<EnvelopeSimple size={32} className='m-2 ' />
<input className='bg-transparent w-[16rem] overflow-hidden outline-none' type="email" placeholder='Enter your mail ID' />
</div>


{/* <label htmlFor="pass" >Password</label> */}
<br />
<div className='bg-slate-600/10 flex items-center w-[16rem] rounded-xl px-[.5rem]  mb-2'>
<Key size={32} className='m-2 ' />
<input className='bg-transparent w-[16rem] overflow-hidden outline-none' type="password" placeholder='Enter your Password' />
</div>
<p >Forgotten password?</p>
<Link to='/host'>
<button className='w-[16rem] rounded-xl px-[.5rem] py-[10px] mt-3 bg-black text-white'>Login</button>
</Link>
<p className='text-lg text-center'>-or-</p>
<div className=' flex flex-col gap-5'>
<button className='w-[16rem] rounded-xl px-[.5rem] py-[10px]  bg-slate-600/25 text-white flex gap-6 hover:bg-black'> <img src={googleimg} alt="" className='w-[1.5rem]' /> Continue with Google</button>
<button className='w-[16rem] rounded-xl px-[.5rem] py-[10px]  bg-slate-600/25 text-white flex gap-6 hover:bg-black'> <img src={fbimg} alt="" className='w-[1.5rem]' /> Continue with Facebook</button>
<button className='w-[16rem] rounded-xl px-[.5rem] py-[10px]  bg-slate-600/25 text-white flex gap-6 hover:bg-black'> <img src={appleimg2} alt="" className='w-[1.5rem]' />  Continue with Apple</button>
{/* <p>Don't have Account? <button  className='font-bold'>Sign up</button > </p> */}
</div>






    </div>
  )
}
