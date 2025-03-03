import React, { Component } from 'react'
import DtdEvenForm1 from './components/DtdEvenForm1';
import DtdEvenForm2 from './components/DtdEvenForm2';
import DtdEvenForm3 from './components/DtdEvenForm3';
import DtdEvenForm4 from './components/DtdEvenForm4';
import DtdEvenForm5 from './components/DtdEvenForm5';
import DtdRenderCondition from './components/DtdRenderCondition';
import DtdRenderArray from './components/DtdRenderArray';
import DtdRenderListObject from './components/DtdRenderListObject';
import DtdHomeWork from './components/DtdHomeWork';

 class DtdApp extends Component {
  // ham xu ly nhan du lieu tu form student
  dtdHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Even form - demoduong</h1>
        <hr/>
        <DtdEvenForm1/>
        <DtdEvenForm2/>
        <DtdEvenForm3/>
        <DtdEvenForm4/>
        <DtdEvenForm5 onDtdHandleSubmit={this.dtdHandleSubmitForm}/>

        <DtdRenderCondition/>
        <DtdRenderArray/>
        <DtdRenderListObject/>

        <DtdHomeWork/>
      </div>
    )
  }
}
export default  DtdApp;
