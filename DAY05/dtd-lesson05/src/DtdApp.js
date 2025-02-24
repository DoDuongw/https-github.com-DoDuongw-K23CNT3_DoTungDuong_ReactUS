import React, { Component } from 'react'
import DtdFuncCompEven1 from './components/DtdFuncCompEven1';
import DtdClassCompEven1 from './components/DtdClassCompEven1';
import DtdClassCompEventProps from './components/DtdClassCompEventProps';
import DtdClassCompEventState1 from './components/DtdClassCompEventState1';
import DtdClassCompEventPostData from './components/DtdClassCompEventPostData';
 class DtdApp extends Component {
  constructor (props){
    super(props);
    this.state={
      dtdNoidung:"Ko có gì",
    }
  }
  // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
  dtdHandleDataToApp = (content)=>{
    alert(content);
  }
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-info my-2'> K23CNT3 - Đỗ Tùng Dương</h1>
        <hr/>
      <div>
          <h2> Function Component - event</h2>
        <DtdFuncCompEven1/>
      </div>
      <hr/>
      <div>
        <h2> class components- event</h2>
        <DtdClassCompEven1/>
      </div>
      <hr/>
      <div>
        <h2>function components - event; this.props</h2>
        <DtdFuncCompEven1 dtdRenderName="Đỗ Tùng Goundz"/>
      </div>
      <div>
        <h2>Class components - event;props</h2>
        <DtdClassCompEventProps dtdRenderTitle = "helu ... welcome to dương"/>
      </div>
      <div>
        <h2> Class Component - event; state</h2>
        <DtdClassCompEventState1/>
      </div>
      <div>
        <h1>{this.state.dtdNoidung}</h1>
        <h2> Class Component - event; Post Data to App</h2>
        <DtdClassCompEventPostData onDtdDataToApp={this.dtdHandleDataToApp} />
      </div>
      </div>
    );
  }
}
export default DtdApp;