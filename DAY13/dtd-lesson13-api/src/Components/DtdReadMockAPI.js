import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DtdReadMockAPI() {
    // khởi tạo state 
    const [dtdListUser, setDtdListUser] = useState([])
    // api
    const dtdApiOnline = "https://67d92fd200348dd3e2aa0b1b.mockapi.io/K23CNT3_Dotungduong/dtd_use"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(dtdApiOnline)
            .then((dtd_response)=>{
                setDtdListUser(dtd_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const dtdElementUser = dtdListUser.map((dtd_item, index)=>{
        return(
            <tr>
                <td>{dtd_item.dtdId}</td>
                <td>{dtd_item.dtdFullName}</td>
                <td>{dtd_item.dtdAge}</td>
                <td>{dtd_item.dtdActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>DtdId</th>
                    <th>DtdFullName</th>
                    <th>DtdAge</th>
                    <th>DtdActive</th>
                    <th>DtdAction</th>
                </tr>
            </thead>
            <tbody>
                {
                   dtdElementUser
                }
            </tbody>
        </table>
    </div>
  )
}