import React, { Component } from "react";
import PropTypes from "prop-types";

class StudentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatorName: "Do Tung Duong",
        };
    }

    render() {
        const { fullName, studentId, birthDate, phone, className, address } = this.props;
        const { creatorName } = this.state;

        return (
            <div style={styles.container}>
                <h2 style={styles.heading}>Thông Tin Sinh Viên</h2>
                <div style={styles.infoContainer}>
                    <p style={styles.info}><strong>Họ và Tên:Do Tung Duong </strong>{fullName}</p>
                    <p style={styles.info}><strong>Mã Sinh Viên: 2310900027</strong>{studentId}</p>
                    <p style={styles.info}><strong>Ngày Sinh: 16/04/2005</strong>{birthDate}</p>
                    <p style={styles.info}><strong>Số Điện Thoại: 037526086</strong>{phone}</p>
                    <p style={styles.info}><strong>Lớp: CNT3</strong>{className}</p>
                    <p style={styles.info}><strong>Địa Chỉ: Ha Noi</strong>{address}</p>
                </div>

                <h3 style={styles.subHeading}>Thông Tin Người Tạo</h3>
                <p style={styles.creator}><strong>Người tạo component:</strong> {creatorName}</p>
            </div>
        );
    }
}

// Kiểm tra kiểu dữ liệu của props
StudentInfo.propTypes = {
    fullName: PropTypes.string.isRequired,
    studentId: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};

// CSS Styles
const styles = {
    container: {
        textAlign: "center",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Font hiện đại
        border: "1px solid #f0f0f0", // Viền sáng nhẹ
        borderRadius: "12px", // Góc bo tròn mượt mà
        maxWidth: "550px",
        margin: "40px auto",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)", // Bóng đổ nhẹ và hiện đại
        backgroundColor: "#f5f7fa", // Nền sáng nhẹ
    },
    heading: {
        fontSize: "28px",
        color: "#2c3e50", // Màu tối trung tính, dễ đọc
        marginBottom: "20px",
        fontWeight: "bold", // Làm tiêu đề đậm để nổi bật
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)", // Tạo bóng nhẹ cho tiêu đề
    },
    subHeading: {
        fontSize: "22px",
        color: "#34495e", // Màu xám nhạt, dễ nhìn
        marginTop: "30px",
    },
    infoContainer: {
        marginBottom: "25px",
    },
    info: {
        fontSize: "18px",
        margin: "14px 0",
        color: "#34495e", // Màu chữ xám nhạt, dễ đọc
        backgroundColor: "#ffffff", // Nền trắng sáng
        padding: "14px 18px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Bóng đổ nhẹ
    },
    creator: {
        fontSize: "18px",
        fontStyle: "italic",
        color: "#7f8c8d", // Màu sáng cho phần thông tin người tạo
        marginTop: "15px",
        fontWeight: "bold",
    }
};

export default StudentInfo;
