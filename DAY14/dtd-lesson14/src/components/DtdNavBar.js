import React from "react";
import { Link } from "react-router-dom";

export default function DtdNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mini Project
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list-user">
                Danh sách User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-user">
                Thêm mới User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
