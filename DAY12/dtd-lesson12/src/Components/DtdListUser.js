import React, { useState } from "react";
import PropTypes from "prop-types";

export default function DtdListUser({ renderDtdUsers, onDeleteUser }) {
  const [showPasswords, setShowPasswords] = useState({});

  // Toggle ẩn/hiện mật khẩu
  const togglePassword = (id) => {
    setShowPasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="alert alert-primary">
      <h2 className="text-center mb-3">Danh sách tài khoản</h2>
      <table className="table table-bordered table-striped table-hover table-sm text-center">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderDtdUsers.length > 0 ? (
            renderDtdUsers.map((dtdItem, index) => (
              <tr key={dtdItem.id || index}>
                <td>{index + 1}</td>
                <td>{dtdItem.id}</td>
                <td>{dtdItem.dtdFullName}</td>
                <td>{dtdItem.dtdUserName}</td>
                <td>
                  {showPasswords[dtdItem.id] ? dtdItem.dtdPass : "●".repeat(8)}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => togglePassword(dtdItem.id)}
                  >
                    {showPasswords[dtdItem.id] ? "👁️" : "🙈"}
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDeleteUser(dtdItem.id)}
                  >
                    🗑 Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

DtdListUser.propTypes = {
  renderDtdUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      dtdFullName: PropTypes.string.isRequired,
      dtdUserName: PropTypes.string.isRequired,
      dtdPass: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};
