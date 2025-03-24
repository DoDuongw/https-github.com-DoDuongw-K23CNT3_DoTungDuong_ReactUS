import React, { useState } from "react";

export default function DtdCreateUser() {
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tạo tài khoản thành công!\n" + JSON.stringify(user, null, 2));
  };

  return (
    <div>
      <h2 className="text-center">Thêm mới User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Họ tên:</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input type="text" name="username" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Thêm</button>
      </form>
    </div>
  );
}
