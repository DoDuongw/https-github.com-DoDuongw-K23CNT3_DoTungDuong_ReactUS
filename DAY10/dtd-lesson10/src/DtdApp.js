import React from 'react'
import DtdUseState from './Components/DtdUseState'
import DtdUseEffect from './Components/DtdUseEffect'

export default function DtdApp() {
  return (
    <div className='container border my-2'> 
      <h1>Demo ReactHook</h1>
      <DtdUseState/>
      <DtdUseEffect/>
    </div>
  )
}
