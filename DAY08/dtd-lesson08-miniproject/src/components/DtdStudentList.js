import React, { Component } from "react";
import DtdStudent from "./DtdStudent";

class DtdStudentList extends Component {

        // Hàm xử lý sự kiện xêm
    dtdHandleView = (dtdStudent)=>{
        // Chuyển dữ liệu lên DtdApp
        this.props.onDtdHandleView(dtdStudent);
    }


  render() {
    // lấy dữ liệu trong props từ DtdApp chuyển xuống
    let {renderDtdStudents} = this.props;
    console.log("List:",renderDtdStudents);
    
    // chuyển dữ liệu vào DtdStudent để hiển thị
    let dtdElementStudent = renderDtdStudents.map((dtdItem,index)=>{
        return <DtdStudent key={index} renderDtdStudent={dtdItem} onDtdHandleView={this.dtdHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {dtdElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DtdStudentList;
