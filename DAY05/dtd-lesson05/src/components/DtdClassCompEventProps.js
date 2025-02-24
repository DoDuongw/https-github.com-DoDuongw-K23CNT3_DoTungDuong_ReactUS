import React, { Component } from 'react'

 class DtdClassCompEventProps extends Component {
    // Hàm xử lý sự kiện 
    dtdEvenHandleClick1 = () =>{
        alert("Helu...." + this.props.dtdRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-info'>
        <button className='btn btn-primary' onClick={this.dtdEvenHandleClick11}>Button1</button>

      </div>
    );
  }
}
export default DtdClassCompEventProps;
