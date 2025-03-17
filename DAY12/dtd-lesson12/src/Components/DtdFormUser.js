import React, { useState } from 'react'

export default function DtdFormUser({onDtdAddNew}) {

    const [id, setDtdId] = useState('')
    const [dtdFullName, setDtdFullName] = useState('')
    const [dtdUserName, setDtdUserName] = useState('')
    const [dtdPass, setDtdPass] = useState('')

   

    const dtdHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,dtdFullName,dtdUserName, dtdPass)
        
        onDtdAddNew({id,dtdFullName,dtdUserName, dtdPass})
    }
  return (
    <div className='alert alert-info'>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setDtdId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='dtdFullName' value={dtdFullName} onChange={(ev)=>setDtdFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='dtdUserName' value={dtdUserName} onChange={(ev)=>setDtdUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='dtdPass' value={dtdPass} onChange={(ev)=>setDtdPass(ev.target.value)} /> </p>

            <p>
                <button name='dtdSave' onClick={dtdHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}