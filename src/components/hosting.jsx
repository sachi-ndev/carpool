import React, { useState } from 'react'
import { MapPin, User } from '@phosphor-icons/react'
import seat from './../assets/seat.png'
// import hostimgs from './../assets/hostimg.jpg'
import hosti from './../assets/hosteii.png'
// import findimg from './../assets/travelfinderimg.png'
import { useForm } from 'react-hook-form'


export default function Hoste() {


  
  const hostdata=[]
  // const[host,setHost]=useState([])


  const form=useForm()
  const {register,handleSubmit}=form

  // const handleSubmit=(e)=>{
  //     e.preventDefault()
  // }
  const onSubmit=(data)=>{
    // console.log(data);
    hostdata.push(data)
    console.log(hostdata);

  }



  return (
    <div className='w-[80vw] h-[76vh] rounded-b-2xl bg-[rgb(226,234,236)] relative overflow-hidden shadow-2xl'>

    <img src={hosti} alt="" className='absolute bottom-0 left-0 h-[17rem]' />

      <div className='w-[80vw] flex flex-col items-center justify-center '>
        <form action="" onSubmit={handleSubmit(onSubmit)}>

        <div className='flex items-center justify-center bg-white px-5 rounded-xl h-[3rem] mt-7 gap-[1.8rem]'>
        <p>Full name:</p>
            <div  className=' flex items-center justify-center  border-solid border-r-2 '>
                <input type="text" 
                id='name'
                {...register('name',{
                  required:{
                    value:true,
                    message:"invalid Entry"
                  }
                })}
                
                placeholder='Enter Your Full Name' className='w-[15rem]  py-2 text-center outline-none'/>
             </div>
              <p>Vehicle Number:</p>
              <div  className=' flex items-center justify-center  border-solid border-r-2'>
                <input type="number" max={9999} 
                id='veh_no'
                {...register('veh_no',{
                  required:{
                    value:true,
                    message:"invalid Entry"
                  }
                })}
                
                placeholder='Last 4 Digit of vehicle No.  ' className='w-[15rem]  py-2 text-center outline-none'/>
             </div>
             <p>Vehicle Type:</p>
             <select name=""
                  id='veh_ty'
                  {...register('veh_ty.value  ',{
                    required:{
                      value:true,
                      message:"invalid Entry"
                    }
                  })}
                  
             className='w-[8rem] py-2 text-center'>
              <option value=""></option>
              <option value="car">Car</option>
              <option value="mini van">Mini Van</option>
              <option value="bus">Bus</option>
             </select>

        </div>
        <div className=' flex items-center   bg-white rounded-xl overflow-hidden mt-12'>

      

            <div  className=' flex items-center justify-center  border-solid border-r-2 ml-4'>
              <MapPin/>
                <input type="search" 
                id='from'
                {...register('from',{
                  required:{
                    value:true,
                    message:"invalid Entry"
                  }
                })}
                
                placeholder='Starting from...' className='  py-2 text-center outline-none'/>
             </div>

            <div  className='px-5 flex items-center justify-center border-solid border-r-2'>
            <MapPin/>
            <input type="search" 
            id='to'
            {...register('to',{
              required:{
                value:true,
                message:"invalid Entry"
              }
            })}
            
            placeholder=' Going  to...'  className='  py-2 text-center outline-none'/>
            </div>

            <div  className='px-5 flex items-center justify-center border-solid border-r-2'>
            <p className='text-slate-400'>Starting at:</p>
            <input type="datetime-local" name="datetime" min="2023-08-15T08:00:00" max="2024-01-01T18:00:00"
             id='date'
             {...register('date',{
              required:{
                value:true,
                message:"invalid Entry"
              }
            })}

             className=' py-2 text-center outline-none'/>
            </div>
            <div className='px-5 flex items-center justify-center border-solid border-r-2'>
            <p>Seats available</p>
              {/* <input type="number" value={1} />  */}
              {/* <User size={20} /> */}
              <img src={seat} alt="" className='w-5'/>
              <input type="number" min="1" max="5" 
              id='seat'
              {...register('seat',{
                required:{
                  value:true,
                  message:"invalid Entry"
                }
              })}
              
              placeholder='1' className='  py-2 text-center outline-none'/>
            </div>

            <div className='bg-[rgb(92,191,253)] border-none py-3 px-9'>
            <button className=' '>Host</button>
            </div>

        </div>
        </form>
      </div>


    </div>


  )
}




// heh8888888888888888888888888888888888888888888888888888888888888888888888




// import React, { useContext, useState } from 'react'
// import { MapPin, User } from '@phosphor-icons/react'
// import seat from './../assets/seat.png'
// // import hostimgs from './../assets/hostimg.jpg'
// import hosti from './../assets/hosteii.png'
// // import findimg from './../assets/travelfinderimg.png'
// import { useForm } from 'react-hook-form'
// import { Hostpro } from './provider'

// export default function Hoste() {

//   const {hostarr}=useContext(Hostpro)

//   const hostdata=[]

  
//   // const[host,setHost]=useState([])


//   const form=useForm()
//   const {register,handleSubmit}=form

//   // const handleSubmit=(e)=>{
//   //     e.preventDefault()
//   // }
//   const onSubmit=(data)=>{
//     // console.log(data);
//     hostdata.push(data)
//     console.log(hostdata);
//     hostarr(hostdata)

//   }



//   return (
//     <div className='w-[80vw] h-[76vh] rounded-b-2xl bg-[rgb(226,234,236)] relative overflow-hidden shadow-2xl'>

//     <img src={hosti} alt="" className='absolute bottom-0 left-0 h-[17rem]' />

//       <div className='w-[80vw] flex flex-col items-center justify-center '>
//         <form action="" onSubmit={handleSubmit(onSubmit)}>

//         <div className='flex items-center justify-center bg-white px-5 rounded-xl h-[3rem] mt-7 gap-[1.8rem]'>
//         <p>Full name:</p>
//             <div  className=' flex items-center justify-center  border-solid border-r-2 '>
//                 <input type="text" 
//                 id='name'
//                 {...register('name',{
//                   required:{
//                     value:true,
//                     message:"invalid Entry"
//                   }
//                 })}
                
//                 placeholder='Enter Your Full Name' className='w-[15rem]  py-2 text-center outline-none'/>
//              </div>
//               <p>Vehicle Number:</p>
//               <div  className=' flex items-center justify-center  border-solid border-r-2'>
//                 <input type="number" max={9999} 
//                 id='veh_no'
//                 {...register('veh_no',{
//                   required:{
//                     value:true,
//                     message:"invalid Entry"
//                   }
//                 })}
                
//                 placeholder='Last 4 Digit of vehicle No.  ' className='w-[15rem]  py-2 text-center outline-none'/>
//              </div>
//              <p>Vehicle Type:</p>
//              <select name=""
//                   id='veh_ty'
//                   {...register('veh_ty.value  ',{
//                     required:{
//                       value:true,
//                       message:"invalid Entry"
//                     }
//                   })}
                  
//              className='w-[8rem] py-2 text-center'>
//               <option value=""></option>
//               <option value="car">Car</option>
//               <option value="mini van">Mini Van</option>
//               <option value="bus">Bus</option>
//              </select>

//         </div>
//         <div className=' flex items-center   bg-white rounded-xl overflow-hidden mt-12'>

      

//             <div  className=' flex items-center justify-center  border-solid border-r-2 ml-4'>
//               <MapPin/>
//                 <input type="search" 
//                 id='from'
//                 {...register('from',{
//                   required:{
//                     value:true,
//                     message:"invalid Entry"
//                   }
//                 })}
                
//                 placeholder='Starting from...' className='  py-2 text-center outline-none'/>
//              </div>

//             <div  className='px-5 flex items-center justify-center border-solid border-r-2'>
//             <MapPin/>
//             <input type="search" 
//             id='to'
//             {...register('to',{
//               required:{
//                 value:true,
//                 message:"invalid Entry"
//               }
//             })}
            
//             placeholder=' Going  to...'  className='  py-2 text-center outline-none'/>
//             </div>

//             <div  className='px-5 flex items-center justify-center border-solid border-r-2'>
//             <p className='text-slate-400'>Starting at:</p>
//             <input type="datetime-local" name="datetime" min="2023-08-15T08:00:00" max="2024-01-01T18:00:00"
//              id='date'
//              {...register('date',{
//               required:{
//                 value:true,
//                 message:"invalid Entry"
//               }
//             })}

//              className=' py-2 text-center outline-none'/>
//             </div>
//             <div className='px-5 flex items-center justify-center border-solid border-r-2'>
//             <p>Seats available</p>
//               {/* <input type="number" value={1} />  */}
//               {/* <User size={20} /> */}
//               <img src={seat} alt="" className='w-5'/>
//               <input type="number" min="1" max="5" 
//               id='seat'
//               {...register('seat',{
//                 required:{
//                   value:true,
//                   message:"invalid Entry"
//                 }
//               })}
              
//               placeholder='1' className='  py-2 text-center outline-none'/>
//             </div>

//             <div className='bg-[rgb(92,191,253)] border-none py-3 px-9'>
//             <button className=' '>Host</button>
//             </div>

//         </div>
//         </form>
//       </div>


//     </div>


//   )
// }
