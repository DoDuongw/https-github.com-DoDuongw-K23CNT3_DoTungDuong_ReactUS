import React, { Component } from 'react'
 class DtdClassCompEven1 extends Component {
    // Hàm xử lý sự kiện
    dtdEvenHandleClick1 = () => {
        alert("Button 1 clicked");
    }
    dtdEvenHandleClick2 = () => {
        alert("Button 2 clicked");
    }
  render() {
    return (
      <div className='alert alert-success'>
        <button className='btn btn-primary mx-1' onClick={this.dtdEvenHandleClick1}>Button 1</button>
        <button className='btn btn-success mx-1'onClick={this.dtdEvenHandleClick2("Tùng Dương")}>Button 2</button>
      </div>
    );
  }
}
export default  DtdClassCompEven1;

