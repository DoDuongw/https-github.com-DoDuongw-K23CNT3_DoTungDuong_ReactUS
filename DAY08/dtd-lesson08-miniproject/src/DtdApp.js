import React, { Component } from "react";
import DtdControl from "./components/DtdControl";
import DtdStudentList from "./components/DtdStudentList";
import DtdForm from "./components/DtdForm";

class DtdApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      dtdStudents:[
        {dtdId:"SV001",dtdStudentName:"Đỗ Tùng Dương",dtdAge:20,dtdGender:"Nam",dtdBirthday:"16/04/2005",dtdBirthPlace:"HN", dtdAddress:"Hà Nội"},
        {dtdId:"SV002",dtdStudentName:"Chu Nguyên Chương",dtdAge:188,dtdGender:"Nữ",dtdBirthday:"25/05/1179",dtdBirthPlace:"HP", dtdAddress:"Trung quốc"},
        {dtdId:"SV003",dtdStudentName:"Tần Thủy Hoàng",dtdAge:55,dtdGender:"Nam",dtdBirthday:"25/05/1079",dtdBirthPlace:"TpHCM", dtdAddress:"Trung Quốc"},
        {dtdId:"SV004",dtdStudentName:"Hoàng Thùy Linh",dtdAge:55,dtdGender:"Nam",dtdBirthday:"25/05/1079",dtdBirthPlace:"TpHCM", dtdAddress:"Hồ chí minh"},
      ],
      dtdStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  dtdHandleView = (dtdStudent)=>{
    this.setState({
      dtdStudent:dtdStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.dtdStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Trịnh Văn Chung - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
          <DtdControl/>
                {/* header */}
                <DtdControl  />
                <DtdStudentList/>
                {/* danh sách sinh vien  */}
                <DtdStudentList  renderDtdStudents={this.state.dtdStudents} onDtdHandleView={this.DtdHandleView}/>
              </div>
            </div>
        
            <div className="col-5 grid-margin">
              <DtdForm/>
              <DtdForm  renderDtdStudent = {this.state.dtdStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DtdApp;
