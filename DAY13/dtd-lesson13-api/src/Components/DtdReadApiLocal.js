
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DtdReadApiLocal() {
    // khởi tạo state
    const [dtdListUser, setDtdListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho dtdListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((dtdResponse)=>{
                setDtdListUser(dtdResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    dtdListUser.map((dtdItem, index)=>{
                        return (
                            <tr>
                                <td>{dtdItem.fullName}</td>
                                <td>{dtdItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
