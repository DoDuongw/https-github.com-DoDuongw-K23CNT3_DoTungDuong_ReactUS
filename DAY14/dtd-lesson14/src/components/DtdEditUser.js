import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DtdEditUser() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  useEffect(() => {
    axios.get(`hhttps://67d92fd200348dd3e2aa0b1b.mockapi.io/K23CNT3_Dotungduong/dtd_use/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cập nhật thành công!\n" + JSON.stringify(user, null, 2));
  };

  return (
    <div>
      <h2 className="text-center">Chỉnh sửa User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Họ tên:</label>
          <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-control" value={user.email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Cập nhật</button>
      </form>
    </div>
  );
}
