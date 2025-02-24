import React, { Component } from 'react'
class DtdClassCompEventState1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dtdFullName:"Đỗ Tùng Dương",
            dtdAge:20,
        }
    
    }
    // Hàm xử lý sự kiện 
    dtdEvenHandleClick1 = ()=>{
        alert("FullName:" +this.state.dtdFullName + "\n Age:"+this.state.dtdAge);
    }
  render() {
    return (
      <div className='alert alert-success'>
        <button className='btn btn-primary'onClick={this.dtdEvenHandleClick1}>Button1 - Dữ liệu trong state</button>

      </div>
    )
  }
}
export default  DtdClassCompEventState1 ;
