import React from 'react'

export default function DtdListUser({renderDtdUsers}) {

    const dtdElements = renderDtdUsers.map((dtdItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{dtdItem.id}</td>
                    <td>{dtdItem.dtdFullName}</td>
                    <td>{dtdItem.dtdUserName}</td>
                    <td>{dtdItem.dtdPass}</td>
                </tr>
            </>)
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {dtdElements}
            </tbody>
        </table>
    </div>
  )
}