import React, { Component } from 'react'

 class DtdClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }
    // Hàm xử lý sự kiện
    dtdEvenHandleClick = ()=>{
        // Chuyển dữ liệu lên app thông qua props
        this.props.onDtdDataToApp("Dữ liệu từ component con - DtdClassCompEventPostData");
    }
  render() {
    return (
      <div className="alert alert-danger">
        <button className="btn btn-danger"onClick={this.dtdEvenHandleClick}>Button 1 - chuyển dữ liệu lên App</button>
      </div>
    )
  }
}
export default  DtdClassCompEventPostData;
