import React from 'react'
import DtdReadApiLocal from './Components/DtdReadApiLocal'
import DtdReadMockAPI from './Components/DtdReadMockAPI'
import DtdCreateMockAPI from './Components/DtdCreateMockAPI'

export default function DtdApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Trịnh Văn Chung</h1>
        <hr/>
        <DtdReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <DtdReadMockAPI />

        <DtdCreateMockAPI />
    </div>
  )
}