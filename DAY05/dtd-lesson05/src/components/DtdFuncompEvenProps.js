import React from 'react'

export default function DtdFuncCompEven1(props) {
    // Hàm xử lý sự kiện
    const dtdHandleButtonClick1 =() =>{
        alert("Dữ liệu từ props:"+ props.dtdRenderName);
        console.log("Xin chào:",props.dtdRenderName);
    }
    const dtdHandleButtonClick2 = (param) =>{
        //lấy dữ liệu từ props
        alert("Dữ liệu từ props (button2 click ):"+props.dtdRenderName);
        //dữ liệu từ tham số 
        console.log('==================================');
        console.log("Hi:",aram);
        console.log('==================================');

    } 
  return (
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1'onClick={dtdHandleButtonClick1}>Button1</button>
        <button className='btn btn-success mx-1'onClick={()=>dtdHandleButtonClick2}>Button2</button>
    </div>
  )
}
