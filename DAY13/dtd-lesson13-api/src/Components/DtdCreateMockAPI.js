
// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function DtdCreateMockAPI() {
    // khởi tạo state
    const [dtdFullName,setDtdFullName] = useState('')
    const [dtdAge,setDtdAge] = useState(0)
    const [dtdActive,setDtdActive] = useState(true)

    // api post
    const dtdCreateUserApi = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/dtd_users";

    // khi submit form
    const dtdHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("dtdActive:",dtdActive);
        let dtdNewUser = {dtdFullName,dtdAge,dtdActive};
        console.log(dtdNewUser);

        // ghi dữ liệu vào api
        axios
            .post(dtdCreateUserApi, dtdNewUser)
            .then((dtd_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="dtdFullName">Full Name</label>
                <input type='text' name='dtdFullName' id="dtdFullName" 
                    value={dtdFullName}
                    onChange={(ev)=>setDtdFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="dtdAge">Age</label>
                <input type='number' name='dtdAge' id="dtdAge" 
                    value={dtdAge}
                    onChange={(ev)=>setDtdAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="dtdActive">Active</label>
                <input type='radio' name='dtdActive' id="dtdActive_hd" value={'true'} 
                    onChange={(ev)=>setDtdActive(ev.target.value)} />
                    <label for="dtdActive_hd"> Hoạt động</label>
                <input type='radio' name='dtdActive' id="dtdActive_kh" value={'false'} 
                    onChange={(ev)=>setDtdActive(ev.target.value)}/>
                    <label for="dtdActive_kh"> Khóa</label>
            </div>
            <button onClick={dtdHandleSubmit}>Create</button>
        </form>
    </div>
  )
}
