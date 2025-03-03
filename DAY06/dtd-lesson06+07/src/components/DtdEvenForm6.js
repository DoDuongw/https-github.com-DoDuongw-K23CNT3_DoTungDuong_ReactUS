import React, { Component } from 'react'

class DtdEvenForm6 extends Component {
    constructor(props){
        super(props);
        this.studentName = React.createRef();
        this.age = React.createRef();
        this.course = React.createRef();
    };
    handleSubmit = (event) => {
        alert('thông tin sinh viên khi submit: '+this.studentName.current.value+'-'+this.age.current.valeu+'-'+this.course.current.value);
        event.preventDefault();
    }
  render() {
    return (
        <form onSubmit= { this.handleSubmit}>
            <label>
            Tên sinh viên :<input type="text" ref={this.studentName}/>
            </label> <br/>
            <label>
                Tuổi:<input type="text" ref={this.age}/>
            </label> <br/>
            <label>

            </label>
        </form>
    )
  }
}
export default DtdEvenForm6;

