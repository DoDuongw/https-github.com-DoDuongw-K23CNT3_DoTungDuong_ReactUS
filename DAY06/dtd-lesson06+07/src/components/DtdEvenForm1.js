import React, { Component } from 'react'

 class DtdEvenForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dtdStudentName:'Tung Duong',
        }
    }
    // ham xu ly su kien khi du lieu tren textbox (dtdStudentName) thay doi
    dtdHandleChange = (event)=>{
        // update tai state
        this.setState({
            dtdStudentName:event.target.value,
        })
    }
    // khi submit form lay du lieu va hien thi 
    dtdHandleSubmit = (ev)=>{
        alert('xin chao:'+this.state.dtdStudentName);
        ev.prevenDefault();
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2> Form Input</h2>
            <form onSubmit={this.dtdHandleSubmit}>
            <label htmlFor='dtdStudentName'>
                <input type='text' name='dtdStudentName' id='dtdStudentName' value={this.state.dtdStudentName} onChange={this.dtdHandleChange}/>

            </label>
            <button className='btn btn-primary'> Click here</button>
        </form>
      </div>
    )
  }
}
export default  DtdEvenForm1 ;
         