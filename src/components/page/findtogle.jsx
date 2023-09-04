import React, { useEffect, useState } from 'react'
import  './../style/finder.css'
// import Host from './host'
import Hoste from '../hosting'
// import Find from './hosting'
import Finde from '../find'
import { data } from 'autoprefixer'

export default function Finder() {

  const[tab,setTab]=useState(1)
  const[cities,setCity]=useState([])




  const cit= ()=>{
    fetch ('http://localhost:3000/city')
    .then((data)=>{
      console.log(data);
      return data.json()
    })
    .then((res)=>{
      console.log(res);
      setCity(res)
    })
  }
  useEffect(()=>{
    cit()
  },[])

//   useEffect(()=>{
//   fetch('http://localhost:3000/city')
//   .then((response)=>{
//     // console.log(data);
//     response.json()
//   })
//   .then((json)=>{
//     console.log(res);
//     // setVal(res)
//   })

  
// },[])

  const toggletab=(index)=>{
    setTab(index)
  }
  console.log(tab);



  return (
    <div className='w-[100vw] h-[calc(100vh-4.5rem)] bg-slate-700 flex  flex-col items-center justify-center '>
      
      {/* {cities.map((e=>( */}
          {/* <h1>{e.city}</h1> */}
        {/* )))} */}
        
      <div className='flex   w-[80vw] h-[3rem] rounded-t-2xl   bg-[rgb(133,199,231)]' id={tab===2?"navcol":""}>

          <h1 className=' p-[1.5rem] flex items-center select-none' id={tab===1?"active":""} onClick={()=>toggletab(1)}>Offer a Ride </h1>

          <h1 className=' p-[1.5rem] flex items-center select-none' id={tab===2?"nactive":""} onClick={()=>toggletab(2)}>Find a Ride </h1>

      </div>

      <div className='' id={tab===1?"showtab":"hid"}>
        <Hoste/>
      </div>

     <div className='' id={tab===2?"showtab":"hid"}>
      <Finde/>
     </div>




    </div>
      
  )
}



//heheeh********************************************************************************

// import React, { useEffect, useState } from 'react'
// import  './../style/finder.css'
// // import Host from './host'
// import Hoste from '../hosting'
// // import Find from './hosting'
// import Finde from '../find'
// import { data } from 'autoprefixer'
// import {HostProvider} from '../provider' 

// export default function Finder() {

//   const[tab,setTab]=useState(1)
//   const[cities,setCity]=useState([])




//   const cit= ()=>{
//     fetch ('http://localhost:3000/city')
//     .then((data)=>{
//       console.log(data);
//       return data.json()
//     })
//     .then((res)=>{
//       console.log(res);
//       setCity(res)
//     })
//   }
//   useEffect(()=>{
//     cit()
//   },[])

//   const toggletab=(index)=>{
//     setTab(index)
//   }
//   console.log(tab);
  
//   return (
//     <div className='w-[100vw] h-[calc(100vh-4.5rem)] bg-slate-700 flex  flex-col items-center justify-center '>
//       <HostProvider>

      
//       {/* {cities.map((e=>( */}
//           {/* <h1>{e.city}</h1> */}
//         {/* )))} */}
        
//       <div className='flex   w-[80vw] h-[3rem] rounded-t-2xl   bg-[rgb(133,199,231)]' id={tab===2?"navcol":""}>

//           <h1 className=' p-[1.5rem] flex items-center select-none' id={tab===1?"active":""} onClick={()=>toggletab(1)}>Offer a Ride </h1>

//           <h1 className=' p-[1.5rem] flex items-center select-none' id={tab===2?"nactive":""} onClick={()=>toggletab(2)}>Find a Ride </h1>

//       </div>

//       <div className='' id={tab===1?"showtab":"hid"}>
//         <Hoste/>
//       </div>

//      <div className='' id={tab===2?"showtab":"hid"}>
//       <Finde/>
//      </div>


//      </HostProvider>





//     </div>
      
//   )
// }
