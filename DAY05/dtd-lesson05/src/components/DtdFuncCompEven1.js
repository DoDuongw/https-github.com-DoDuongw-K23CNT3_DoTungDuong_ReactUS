import React from 'react';

export default function DtdFuncCompEven1() {
    // Hàm xử lý sự kiện
    const dtdEvenButton1Click = () => {
        alert("Button 1 - Clicked");
    };
    const dtdEvenButton2Click = () => {
      alert("Button 2 - Clicked");
    };

      const dtdEvenButton3Click = (name) => {
        alert("Name:" + name )
  }
  return (
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={dtdEvenButton1Click()}>button 1</button>
        <button className='btn btn-success mx-1' onClick={dtdEvenButton2Click}>button 2</button>
        <button className='btn btn-danger' onClick={dtdEvenButton3Click("Tùng Dương" )}>button 3</button>
        <button className='btn btn-danger' onClick={()=>dtdEvenButton3Click("Tùng Dương" )}>button 4</button>\

    </div>
  );
}
