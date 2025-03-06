import React, { Component } from "react";

class DtdStudent extends Component {
 

    // Hàm xử lý chức năng xem
    dtdHandleView = (dtdStudent)=>{
        // Chuyển lên DtdStudentList
        this.props.onDtdHandleView(dtdStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ DtdStudentList
    let {renderDtdStudent, key} = this.props;
    console.log("Student:",renderDtdStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderDtdStudent.dtdId}</td>
          <td>{renderDtdStudent.dtdStudentName}</td>
          <td>{renderDtdStudent.dtdAge}</td>
          <td>{renderDtdStudent.dtdGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.dtdHandleView(renderDtdStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default DtdStudent;
