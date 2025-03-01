import React, { Component } from 'react';

class DtdEvenForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            dtdCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    dtdHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            dtdCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    dtdHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.dtdCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='dtdCourse' id='dtdCourse'
                            value={this.state.dtdCourse}
                            onChange={this.dtdHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.dtdHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}
export default  DtdEvenForm2 ;
