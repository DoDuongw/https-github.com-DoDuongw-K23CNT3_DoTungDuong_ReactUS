import React, { useState } from "react";
import PropTypes from "prop-types";

export default function DtdFormUser({ onDtdAddNew }) {
  const [formData, setFormData] = useState({
    id: "",
    dtdFullName: "",
    dtdUserName: "",
    dtdPass: "",
  });

  const [errors, setErrors] = useState({});

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Kiểm tra hợp lệ trước khi gửi
  const validate = () => {
    let newErrors = {};
    if (!formData.id.trim()) newErrors.id = "Mã sinh viên không được để trống!";
    if (!formData.dtdFullName.trim()) newErrors.dtdFullName = "Họ và tên không được để trống!";
    if (!formData.dtdUserName.trim()) newErrors.dtdUserName = "Tài khoản không được để trống!";
    if (formData.dtdPass.length < 6) newErrors.dtdPass = "Mật khẩu phải có ít nhất 6 ký tự!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Hàm xử lý khi submit
  const dtdHandleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return; // Chặn gửi nếu có lỗi

    onDtdAddNew(formData);

    // Xóa dữ liệu sau khi submit thành công
    setFormData({ id: "", dtdFullName: "", dtdUserName: "", dtdPass: "" });
    setErrors({});
  };

  return (
    <div className="alert alert-info">
      <h2 className="text-center">Thêm Tài Khoản</h2>
      <form onSubmit={dtdHandleSubmit}>
        <div className="mb-3">
          <label className="form-label">Mã sinh viên:</label>
          <input
            type="text"
            name="id"
            className={`form-control ${errors.id ? "is-invalid" : ""}`}
            value={formData.id}
            onChange={handleChange}
          />
          {errors.id && <div className="invalid-feedback">{errors.id}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Họ và tên:</label>
          <input
            type="text"
            name="dtdFullName"
            className={`form-control ${errors.dtdFullName ? "is-invalid" : ""}`}
            value={formData.dtdFullName}
            onChange={handleChange}
          />
          {errors.dtdFullName && <div className="invalid-feedback">{errors.dtdFullName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Tài khoản:</label>
          <input
            type="text"
            name="dtdUserName"
            className={`form-control ${errors.dtdUserName ? "is-invalid" : ""}`}
            value={formData.dtdUserName}
            onChange={handleChange}
          />
          {errors.dtdUserName && <div className="invalid-feedback">{errors.dtdUserName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mật khẩu:</label>
          <input
            type="password"
            name="dtdPass"
            className={`form-control ${errors.dtdPass ? "is-invalid" : ""}`}
            value={formData.dtdPass}
            onChange={handleChange}
          />
          {errors.dtdPass && <div className="invalid-feedback">{errors.dtdPass}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Lưu tài khoản
        </button>
      </form>
    </div>
  );
}

DtdFormUser.propTypes = {
  onDtdAddNew: PropTypes.func.isRequired,
};
