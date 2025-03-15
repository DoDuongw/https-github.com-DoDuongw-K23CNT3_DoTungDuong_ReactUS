import React, { useEffect, useState } from 'react'

export default function DtdUseEffect() {
    //state
    const [dtdCount, setDtdCount] = useState(0);
    // use Effect sử dụng 1 tham số: Được thực hiện mỗi khi render / re-render
    useEffect(()=>{
        console.log("Đây là useEffect 1 tham số");
    });
    // useEffect sử dụng 2 tham số; tham số thứ 2 là mang mảng rỗng => được gọi duy nhất 1 lần khi render
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng []");
    },[]);
    //useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối tượng phụ thuộc 
    // => Được gọi mỗi khi đổi số thay đổi
    // khởi tạo state là một mảng
    const dtdArr = [10,12,20,22];
    const [dtdArray, setDtdArray] = useState(dtdArr);
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng đối số phụ thuộc [dtdArray]");
    },[dtdArray]);
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng [dtdCount]");
    },{dtdCount});
    //hàm xử lý sự kiện khi thêm mới phần tử mảng
    const dtdHandleAddList=()=>{
        setDtdArray([
            ...dtdArray,
            parseInt(Math.random()*100),
        ])
    }
  return (
    <div className='alert alert-info'>
        <h2>Demo useEffect</h2>
        <h3>Count: {dtdCount}</h3>
        <button onClick={()=>setDtdCount(dtdCount+1)}>Click here +1</button>

        <div>
            <h3>Array:{dtdArray.toString()}</h3>
            <button onClick={dtdHandleAddList}>Thêm</button>
        </div>
    </div>
  )
}
