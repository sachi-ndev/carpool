import React, { useEffect } from 'react'
import { MapPin, User } from '@phosphor-icons/react'
import findimg from './../assets/travelfinderimg.png'
// import hostimg from './../assets/hostimg.jpg'
import { cit } from './city'

export default function Finde() {

  // let cities=cit
  // useEffect(()=>{
  //     let map=cities.map((m)=>{
  //         return m.city
  //     })
  //     console.log(map);
          
  // },[])




  return (

    
    <div className='w-[80vw] h-[76vh] rounded-b-2xl bg-[#e6cece]  relative overflow-hidden '>
        <form action="">


<img src={findimg} alt="" className='absolute bottom-0 left-0 h-[17rem]' />

<div className='w-[80vw] flex items-center justify-center '>
  <div className=' flex items-center   bg-white rounded-xl overflow-hidden mt-12'>

      <div  className=' flex items-center justify-center  border-solid border-r-2 ml-4'>
        <MapPin/>
          <input type="search" placeholder='Leaving from...' className='  py-2 text-center outline-none'/>
       </div>

      <div  className='px-5 flex items-center justify-center border-solid border-r-2'>
      <MapPin/>
      <input type="search" placeholder=' Going  to...'  className='  py-2 text-center outline-none'/>
      </div>

      <div  className='px-5 flex items-center justify-center border-solid border-r-2'>
      <input type="datetime-local" name="datetime" min="2023-08-15T08:00:00" max="2024-01-01T18:00:00"
       className=' py-2 text-center outline-none'/>
      </div>

      <div className='px-5 flex items-center justify-center border-solid border-r-2'>
        {/* <input type="number" value={1} />  */}
        <User size={20} />
        <input type="number" min="1" max="5" placeholder='1' className='  py-2 text-center outline-none'/>
      </div>

      <div className='bg-[#f85b5b] border-none py-3 px-9'>
      <button className=' '>Search</button>
      </div>

  </div>
</div>
</form>
</div>
  )
}
