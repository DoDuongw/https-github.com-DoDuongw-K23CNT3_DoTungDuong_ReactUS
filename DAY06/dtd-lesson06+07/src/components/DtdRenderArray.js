import React from 'react'

export default function DtdRenderArray() {
    const dtdNumbers = [10,20,30,40,50];
    const dtdElement = dtdNumbers.map((item)=>{
       return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {dtdElement}
    </div>
  )
}
