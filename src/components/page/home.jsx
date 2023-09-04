import React from 'react'
import img1 from './../../assets/homeimg.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-[calc(100vh-4.5rem)] w-[100vw] flex items-center justify-center gap-3 overflow-hidden'>
      <div className='w-[49%] h-[calc(100vh-4rem)] grid place-items-center '>
        <img src={img1} className='w-[28rem]  ' alt="" />
      </div>

      <div className='w-[49%] h-[calc(100vh-4.5rem)]  bg-slate-200/30 grid place-items-center'>
        <div className=' bg-slate-200 p-[3rem] rounded-3xl  flex flex-col items-center justify-center gap-4'>
        <h1 className='font-Oleo w-[20rem] text-[3rem] '>Find your ride at low price......</h1>
        <p className='w-[18rem] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem labore ratione laboriosam nobis sequi odio vero molestiae perspiciatis eveniet eum consectetur beatae debitis, assumenda excepturi. Eveniet temporibus minus id maiores tempore deleniti cumque dolor magnam. Nihil dolore architecto voluptate.</p>
        <Link to='/log'>
        <button className='font-Kaushan text-[1.2rem] bg-[#647fd6dd]  px-6 py-3 rounded-full text-white'>Lets GO</button>
        </Link>
        </div>
      </div>
      
    </div>
  )
}
