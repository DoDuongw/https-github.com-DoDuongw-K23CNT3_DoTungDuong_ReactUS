import React, { Component } from 'react';

export default class DtdCompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Do Tung Duong",
            studentId: "2310900027",
            birthDate: "16/04/2005",
            phoneNumber: "0375526086",
            className: "CNT3",
            address: "Hà Nội"
        };
    }

    render() {
        return (
            <div>
                <h2>DtdCompA</h2>
                <p> Dữ liệu trong state:</p>
                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Student ID: {this.state.studentId}</li>
                    <li>Birth Date: {this.state.birthDate}</li>
                    <li>Phone Number: {this.state.phoneNumber}</li>
                    <li>Class: {this.state.className}</li>
                    <li>Address: {this.state.address}</li>
                </ul>
                <h3> Hiển thị dữ liệu từ props:</h3>
                <p>Name: {this.props.dtdName}</p>
                <p>Address: {this.props.dtdAddress}</p>
            </div>
        );
    }
}
