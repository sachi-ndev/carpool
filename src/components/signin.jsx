import { DeviceMobile, EnvelopeSimple, Key, UserCircle } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

export default function Signin() {
  const[datas,setDatas]=useState()

  const form=useForm()
  const {register,control,handleSubmit,formState}=form;
  const{errors}=formState
  
 const onsubmit =(data)=>{
   setDatas(data)
  //  console.log(data);
   
}

console.log(datas);

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)} noValidate>



      <h2 className='text-center font-Oleo  text-[2rem]'>Register your Account</h2>
      <div className='text-white '>
      <div className='   flex flex-col  items-center justify-center'>
    <div className='' >
    <label htmlFor="fullname">Full name</label>
    {/* <p>fullname</p> */}
    <br />
    <div className='bg-slate-600/10 flex items-center w-[20rem] rounded-xl px-[.5rem] mb-2'>
    <UserCircle size={28} className='m-1   ' />
    
    <input id='name'
    {...register('name',{
      required:{
        value:true,
        message:"Enter Your Name"
      },minLength:2
      
    })}
     className='bg-transparent w-[16rem] overflow-hidden outline-none' type="text" placeholder='Enter your name' />
    </div>
    <p className='text-red-600 w-[15rem] text-[.9rem]'>{errors.name?.message}</p>

    <label htmlFor="mob">Mobile Number</label>
    <br />
    <div className='bg-slate-600/10 flex items-center w-[20rem] rounded-xl px-[.5rem] mb-2'>
    <DeviceMobile size={28} className='m-1 ' />
    
    <input id='phone'
    {...register('phone',{
      required:{
        value:true,
        message:'Enter Number'
      },
      pattern:{
        value:/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
        message:"Invalid Number"
      }
    }
    )}

     className='bg-transparent w-[16rem] overflow-hidden outline-none' type="number" placeholder='Enter your Phone no' />
    </div>
    <p className='text-red-600 w-[15rem] text-[.9rem]'>{errors.phone?.message}</p>



    <label htmlFor="email" >Email</label>
    <br />
    <div className='bg-slate-600/10 flex items-center w-[20rem] rounded-xl px-[.5rem] mb-2'>
    <EnvelopeSimple size={28} className='m-1 ' />
    
    <input id='email'
    {...register('email',{
    required:{
      value:true,
      message:"Enter Your Mail ID"
    },
    pattern:{
      value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message:"invalid email Format"
    }
  })}


     className='bg-transparent w-[16rem] overflow-hidden outline-none' type="email" placeholder='Enter your mail ID' />
    </div>
    <p className='text-red-600 w-[15rem] text-[.9rem]'>{errors.email?.message}</p>



    <label htmlFor="pass" >Password</label>
    <br />
    <div className='bg-slate-600/10 flex items-center w-[20rem] rounded-xl px-[.5rem]  mb-2'>
    <Key size={28} className='m-1 ' />
    
    <input id='password'
    {...register('password',{
      required:{
      value:true,
      message:'Enter Password'
    },
    pattern:{
      value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message:"Password should contain Minimum eight characters, at least one letter and one number"
    }
  }
    
    )}

     className='bg-transparent w-[16rem] overflow-hidden outline-none' type="password" placeholder='Enter your Password' />
    </div>
    <p className='text-red-600 w-[19rem] text-[.9rem]'>{errors.password?.message}</p>


    <label htmlFor="repass" >Confirm Password</label>
    <br />
    <div className='bg-slate-600/10 flex items-center w-[20rem] rounded-xl px-[.5rem] mb-2'>
    <Key size={28} className='m-1 ' />
    
    <input id='repassword'
    {...register('repassword'
    ,{required:{
        value:true,
        message:"Reenter your Password" 
      },
    validate:(fieldvalue)=>{
        return(
          fieldvalue==password.value||"Password Doesn't Match"
        )
      }})}
     className='bg-transparent w-[16rem] overflow-hidden  outline-none' type="password" placeholder='Enter your Password' />
    </div>
    <p className= 'text-red-600 w-[18rem] text-[.9rem] text-left'>{errors.repassword?.message}</p>


          </div>
         <button className='bg-[rgb(36,217,241)] text-[1.2rem] px-4 py-2 font-mono  rounded-lg '>Register</button>
        <div className=' flex items-baseline '>
        <input id='chbox'
        {...register('chbox',{
          required:{
            value:true,
            message:"Please agree the T&C "
          }
        })}
        
        type="checkbox" />

         <p className=' text-center'>I agree with Amigos <span className='text-blue-600'> the Terms and Conditions</span>
          {/* and <span className='text-blue-600'>Privacy policy.</span> */}
          </p>
        </div>
        <p className= 'text-red-600 w-[18rem] text-[.9rem] text-left'>{errors.chbox?.message}</p>

        
       </div>    
    </div>





    </form>
    <DevTool control={control}/>


    </div>
  )
}
