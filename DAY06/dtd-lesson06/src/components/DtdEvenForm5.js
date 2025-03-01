import React, { Component } from 'react';

class DtdEvenForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dtdName:'Duong',
            dtdAge:20,
            dtdGender:'Male',
            dtdCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    dtdHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    dtdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.dtdName + "\n" + this.state.dtdAge);

        // Chuyển dữ liệu trên form lên App component (DtdApp);
        this.props.onDtdHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='dtdName'>Student Name:</label>
                        <input type='text' name='dtdName' id='dtdName'
                            value={this.state.dtdName}
                            onChange={this.dtdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='dtdAge'>Student Age:</label>
                        <input type='text' name='dtdAge' id='dtdAge'
                            value={this.state.dtdAge}
                            onChange={this.dtdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='dtdGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='dtdGender' id='dtdMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.dtdGender === 'Male'}
                                onChange={this.dtdHandleChange} />
                            <label htmlFor='dtdMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='dtdGender' id='dtdFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.dtdGender === 'Female'}
                                onChange={this.dtdHandleChange} />
                            <label htmlFor='dtdFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='dtdGender' id='dtdNone' className='mx-2'
                                value={'None'}
                                checked={this.state.dtdGender === 'None'}
                                onChange={this.dtdHandleChange} />
                            <label htmlFor='dtdNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='dtdCourse'>
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
                    </div>
                    <button onClick={this.dtdHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default DtdEvenForm5;