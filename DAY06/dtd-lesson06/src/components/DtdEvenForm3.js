import React, { Component } from 'react'

 class DtdEvenForm3 extends Component {
    constructor(props){
        super(props);
        this.state={
            dtdGioiTinh:'Nam',
        }
    }
    // Ham xu ly su kien change
    dtdHandleChange = (event)=>{
        this.setState({
            dtdGioiTinh:event.target.value,
        })
    }
    // ham xu ly su kien submit form
    dtdHandleSubmit = (event)=>{
        event.prevenDefault();
        alert("Gioi tinh ban la:"+this.state.dtdGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2> Form input - radio </h2>
        <form>
            <div>
                <label htmlFor=''>Gioi tinh: </label>
                <input type='radio'name='dtdGioiTinh'  id='dtdNam' className='mx-2'
                value='Nam' checked={this.state.dtdGioiTinh === 'Nam'}onChange={this.dtdHandleChange}/>
                 <label htmlFor='dtdNam'>Nam</label>
                <input type='radio'name='dtdGioiTinh' id='dtdNu'className='mx-2'
                value='Nu'checked={this.state.dtdGioiTinh === 'Nu'}onChange={this.dtdHandleChange}/>
                <label htmlFor='dtdNu'>Nu</label>
                <input type='radio'name='dtdGioiTinh' id='dtdKhac'className='
                mx-2'value='Khac'checked={this.state.dtdGioiTinh === 'Khac'}onChange={this.dtdHandleChange}/>
                 <label htmlFor='dtdKhac'>Khac</label>
            </div>
            <button onClick={this.dtdHandlSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default  DtdEvenForm3;
