import React, { Component } from 'react'

 class DtdRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state={
            dtdStudents :[
                {dtdId:1,dtdName:"Đỗ Tùng Dương",dtdAge:20},
                {dtdId:2,dtdName:"Đỗ Tát Tùng",dtdAge:27},
                {dtdId:3,dtdName:"Đỗ Dương Ngược",dtdAge:20},
            ],
            
        }
    }
    render() {
        // Hiển thị dữ liệu
        let {dtdStudents} = this.state;
        let dtdElement = dtdStudents.map((dtdItem)=>{
            return (
                <li>{dtdItem.dtdId} - {dtdItem.dtdName}</li>
            );
        })

        let dtdRenderElement = dtdStudents.map((dtdItem,index)=>{
            return (
                <tr key={index}>
                    <td>{dtdItem.dtdId}</td>
                    <td>{dtdItem.dtdName}</td>
                    <td>{dtdItem.dtdAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {dtdElement}
                <hr/>
                <h2> Add more form </h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>dtdID</th>
                            <th>dtdName</th>
                            <th>dtdAge</th>
                            <th>dtdAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {dtdRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default DtdRenderListObject;