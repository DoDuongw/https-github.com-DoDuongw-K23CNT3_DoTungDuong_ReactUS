import React, {useState} from 'react'
export default function DtdUseState() {
      // tạo state là count và hàm cập nhật state là setCount
      const [count,setCount] = useState(0);
      //Hàm xử lý sự kiện tăng giá trị của count
      const dtdHandleTang =()=>{
        setCount(count+1);
      }
      //state là mảng (list
      const danh_sach = [100,120,150,200];
      // khởi tạo state
      const [list, setList] = useState(danh_sach);
      // Hàm xử lý sự kiện thêm phần tử ngẫu nhiên vào danh sách 
      const dtdHandleAddNewRandom = ()=>{
        // setList(prev =>{
        //     return [...prev,
        //         parseInt(Math.random()*1000)
        //     ]
        // })
        setList([
            ...list,
            parseInt(Math.random()*1000)

        ])
      }
  return (
    <div className='alert alert-info'>
        <h2> sử dụng useState</h2>
        <div>
            <b>Count: {count} </b>
            <button onClick={dtdHandleTang}>Tăng </button>
            <button onClick={()=>setCount(count-1)}>giảm </button>
            <button onClick={()=>setCount(0)}> đặt lại </button>
        </div>
        <div>
            <h3>List:{list.toString()}</h3> 
            <button onClick={dtdHandleAddNewRandom}> Add New (random)</button>
        </div>
    </div>
  )
}