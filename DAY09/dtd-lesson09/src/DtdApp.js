import React from 'react'
import DtdUseState from './Components/DtdUseState'
import DtdUseStateListObject from './Components/DtdUseStateListObject'
import DtdUseEffect from './Components/DtdUseEffect'

export default function DtdApp() {

  return (
    <div className='container border mt-3 '>
      <h1> React hook</h1>
      <hr/>
      <DtdUseState/>
      <hr/>
      <DtdUseStateListObject/>
      <DtdUseEffect/>
    </div>

  )
}
