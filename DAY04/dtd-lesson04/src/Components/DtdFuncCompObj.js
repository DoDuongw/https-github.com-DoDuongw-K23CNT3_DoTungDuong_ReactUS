import React from 'react'

export default function DtdFuncComp1(props) {
  return (
    <div>
        <h2>Props is Object</h2>
        <p><b>Infor:</b></p>
        <p>FullName:{props.renderInfor.fullName}</p>
        <p>Age:{props.renderInfor.age}</p>
        <p>Phone:{props.renderInfor.phone}</p>
    </div>
  )
}
