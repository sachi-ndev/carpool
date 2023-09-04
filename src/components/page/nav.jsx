import React, { useState } from 'react'
import logo from './../../assets/logo5.png'
import { Link } from 'react-router-dom'
import { CaretDown, MapPin, SignIn, UserCircle, UserCirclePlus } from '@phosphor-icons/react'

export default function Nav() {

    const[modal,setModal]=useState(false)

    const toggleModal=()=>{
        setModal(!modal)
        // console.log(modal);
    }

  return (
    <div  className='bg-black w-screen h-[4.5rem] flex items-center text-white relative'>
        <div className='w-screen px-5 flex items-center justify-between '>
            <Link to='/'>
            <img src={logo} className='h-[3.5rem] pl-3' alt="" />
            </Link>

            
            <div className='flex'>
            {/* <h1 className='font-mono text-[1.2rem]'>Login  </h1> */}
            <Link to='/log'>
            <button onClick={toggleModal}><UserCircle size={32} /></button>
            </Link>

            </div>
 
        </div>
        {/* {modal &&( */}
          {/* <div className='absolute top-[3.5rem] right-4   flex flex-col gap-1 '> */}
            {/* <div className='w-[10rem] h-[2.9rem] rounded-lg text-white flex items-center gap-2 justify-center bg-slate-500/75'>Login <SignIn size={25} /></div> */}
            {/* <div className='w-[10rem] h-[2.9rem] rounded-lg text-white flex items-center gap-2 justify-center bg-slate-500/75'>Sign in <UserCirclePlus size={25} /> </div> */}
        {/* </div> */}
        {/* )} */}

    </div>
  )
}
