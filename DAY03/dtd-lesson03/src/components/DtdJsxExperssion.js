import React from 'react'
export default function DtdJsxExperssion() {
    // biến 
    const name="Đỗ Tùng Dương";
    // biến đối tượng
    const user = {
        firstName:"Dương",
        LastName:"Đỗ"
    }
    // Hàm 
    const  FullName=(user)=>{
        return user.FirstName + ' ' + user.LastName ;
    }
    // element
    const element =(
        <div>
            {/*Biểu thức jsx */}
            <h2>{FullName(user)} </h2>
            <hr/>
            <h3>Welcome to, {name}</h3>
        </div>
    );
    // Hàm 
    const sayWelcome = (name)=>{
        if(name){
            return <h3>Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Fit NEU - K23Cnt3</h3>

        }
    }
  return (
    <div>
        <h1> DTD - JSX expression</h1>
        {/* sử dụng biến element */}
        {element}
        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Đỗ Tùng Dương")}
        </div>
  )
}
