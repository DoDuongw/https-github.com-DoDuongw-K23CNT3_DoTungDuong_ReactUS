import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DtdListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://67d92fd200348dd3e2aa0b1b.mockapi.io/K23CNT3_Dotungduong/dtd_use").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2 className="text-center">Danh sách tài khoản</h2>
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Username</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit-user/${user.id}`} className="btn btn-sm btn-warning me-2">
                    ✏ Sửa
                  </Link>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)}>
                    🗑 Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
