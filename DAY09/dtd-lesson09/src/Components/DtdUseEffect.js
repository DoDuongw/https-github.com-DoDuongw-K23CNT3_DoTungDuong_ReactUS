import React, {useEffect, useState} from 'react'

export default function DtdUseEffect() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect (callback)");
    })
    useEffect(()=>{
        console.log("useEffect(callback,[]); chỉ 1 lần duy nhất");
    },[]) 
    useEffect(()=>{
        console.log('Count has been changed:',count);
    },
)
  return (
    <div className='alert alert-success'>
        <h2>useEffect</h2>
    </div>
  )
}
