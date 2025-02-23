import React, { Component } from 'react'

 class DtdClassComp extends Component {
    constructor(props){
        super(props);
        // khởi tạo state
        this.state ={
            fullName:"Gnoudz",
            age:20,
            phone:"0375526086"
        }
    }
    // Hàm xử lý sự kiện
    ChangeInfor = (ev)=>{
        //cập nhập state
        this.setState({
            fullName:"Đỗ Tùng Dương"
        });
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2> Trình bày dữ liệu từ State </h2>
        <p>infor state (fullName):{this.state.fullName}</p>
        <p>infor state (age):{this.state.age}</p>
        <p>infor state (phone):{this.state.phone}</p>
        <hr/>
        <button className='btn btn-primary'onClick={this.ChangeInfor}>Change Infor</button>
        <hr/>
        <h3>Lấy dữ liệu props</h3>
        <p>Name: {this.props.renderName}</p>

        <p>FullName:{this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
        <p>Age:{this.props.renderUsers?this.props.renderUsers.age:''}</p>
        <p>Phone:{this.props.renderUsers?this.props.renderUsers.phone:''}</p>
      </div>
    );
  }
}
export default DtdClassComp;    