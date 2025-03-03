import React from 'react'
import DtdLoginComp from './DtdLoginComp';
import DtdLogoutComp from './DtdLogoutComp';

export default function DtdLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var dtdLoginControl = isLoggedIn? <DtdLoginComp/>:<DtdLogoutComp/> 
  return (
    <div>
        {dtdLoginControl}
    </div>
  )
}
