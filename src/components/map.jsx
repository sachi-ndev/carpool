import React, { useEffect } from 'react'
import { cit } from './city'

export default function Map() {
    let cities=cit

    // console.log(cities);

    useEffect(()=>{
        let map=cities.map((m)=>{
            return m.city
        })
        console.log(map);
            
    },[])

  return (
    <div>
        <h1>Saheer mandan</h1>
      
    </div>
  )
}
