import React, { useState} from 'react'

export default function DtduseState() {
    //Khởi tạo State
    const [DtdCount, setDtdCount] = useState(0);

    //Khởi tạo state là một mảng 
    const dtdArr = [10,12,20,22];
    const[dtdArray, setDtdArray] = useState(dtdArr);

    //Khỏi tạo state với mảng object
    const dtdStudents = [
        {dtdId:"SV01",dtdName:"Đỗ Tùng Dương",dtdAge:19},
        {dtdId:"SV02",dtdName:"Đỗ Tất Tùng",dtdAge:19},
    ];
    const [dtdStudentList, setDtdStudentList]= useState(dtdStudents)

    //Hàm xử lý sự kiện khi thêm mới phần tử vào mảng 
       const dtdHandleAddList=()=>{
        setDtdArray([
            ...dtdArray,
            parseInt(Math.random()*100),
        ])
    }
    //Hàm xử lý sự kiện thêm mới sinh viên 
    const dtdHandleAddNewStudent = ()=>{
        let dtdStudents = {
            dtdId:"SV03",
            dtdName:"Đỗ Tùng A",
            dtdAge:20
        };
        // thêm state dtdStudentList
        setDtdStudentList([
            ...dtdStudentList,
            dtdStudents
        ])
    }

  return (
    <div className='alert alert-danger'>
       <h2>useState demo</h2>
        <div>    
            <h3>Count: {dtdArray}</h3>
            <button onClick={()=>setDtdCount(DtdCount+1)}>Tăng+</button>
            <button onClick={()=>setDtdCount(DtdCount-1)}>giảm-</button>
         </div>
    <div>
        <h3>Array:{dtdArray.toString()}</h3>
        <button onClick={dtdHandleAddList}>Thêm phần tử</button>
        </div>
        <h3>Danh sách sinh viên </h3>
        <table className='table table-bordered'>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    dtdStudentList.map((dtdStudents,index)=>{
                        return<>
                        <tr>
                            <td>{dtdStudents.dtdId}</td>
                            <td>{dtdStudents.dtdName}</td>
                            <td>{dtdStudents.dtdAge}</td>
                            </tr>
                            </>
                    })
                }
            </tbody>
            <tfoot>
                <button onClick={dtdHandleAddNewStudent}>Thêm mới sinh viên</button>
            </tfoot>
        </table>
        </table>
    </div>
  )
}
