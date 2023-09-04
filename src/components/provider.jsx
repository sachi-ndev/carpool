import React, { createContext, useState } from 'react'


const Hostpro=createContext()




const HostProvider=({children})=> {
    
    const [hostval,setHostval]=useState() 

    const hostarr=(val) =>{
        setHostval((prev)=>([...prev,val]))
    }
    const contectvals={hostval,hostarr}


    console.log(hostval);

  return (
<Hostpro.Provider value={contectvals}>
    {children}
</Hostpro.Provider>
  )
}

export { HostProvider,Hostpro}
