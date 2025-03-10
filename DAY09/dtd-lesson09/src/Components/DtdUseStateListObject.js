import React, { useState } from 'react'

export default function DtdUseStateListObject() {
    //mockdata
    const listStudent = [
        {dtdId:"SV001",dtdStudentName:"Đỗ Tùng Dương",dtdAge:20, dtdClass:"K23CNT3"},
        {dtdId:"SV002",dtdStudentName:"Đỗ Tùng Dươn2g",dtdAge:20, dtdClass:"K23CNT3"},
        {dtdId:"SV003",dtdStudentName:"Đỗ Tùng Dư3ơ2ng",dtdAge:20, dtdClass:"K23CNT3"},
        {dtdId:"SV005",dtdStudentName:"Đỗ Tùng Dư3ơng",dtdAge:20, dtdClass:"K23CNT3"},
      ];
      //tạo state với hook 
      const[dtdStudents, setDtdStudents] = useState(listStudent);

      let dtdElementStudent = dtdStudents.map((dtdItem, index)=>{
        return(
            <tr>
              <td>{index+1}</td>
              <td>{dtdItem.dtdId}</td>
              <td>{dtdItem.dtdName}</td>
              <td>{dtdItem.dtdAge}</td>
              <td>{dtdItem.dtdClass}</td>
              <td>
                <button>Sửa </button>
                <button>Xóa</button>
              </td>
            </tr>
        )
      })
    return (

        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Stt</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Lớp</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>

             {dtdElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    )
     }



