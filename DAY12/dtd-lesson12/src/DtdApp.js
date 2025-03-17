import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DtdNavNar from './Components/DtdNavNar'
import DtdHome from './Components/DtdHome'
import DtdAbout from './Components/DtdAbout'
import DtdContact from './Components/DtdContact'
import DtdListUser from './Components/DtdListUser'
import DtdFormUser from './Components/DtdFormUser'
export default function DtdApp() {

  const listUsers  = [
    {id:"SV001", dtdFullName:"Đỗ Tùng Dương", dtdUserName:"Dương", dtdPass:"thinhquang1"},
    {id:"SV002", dtdFullName:"Dương Ngược", dtdUserName:"Gnoudz", dtdPass:"khuongthuong12"},
    {id:"SV003", dtdFullName:"Dương 1", dtdUserName:"1duong", dtdPass:"hanoitoday12"},
  ]

  const[dtdUsers, setDtdUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const dtdHandleAdd = (dtdParam)=>{
    console.log("dtdHandleAdd:", dtdParam);
    
    setDtdUsers(prev =>{ 
      return [
        ...prev,
        dtdParam
      ]
    })
  }
  return (
    <div className='container border my-5'>
        <h1>React Router Dom - Demo - [Đỗ Tùng Dương - K23CNT3]</h1>
        <hr/>
        <Router>
            <DtdNavNar />
            <Routes>
                <Route path='/' element = {<DtdHome />} />
                <Route path='/about' element = {<DtdAbout />} />
                <Route path='/contact' element = {<DtdContact />} />
                <Route path='/list-user' element = {<DtdListUser  renderDtdUsers={dtdUsers}/>} />
                <Route path='/create-user' element = {<DtdFormUser  onDtdAddNew={dtdHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}