import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DtdNavBar from "./components/DtdNavBar";
import DtdHome from "./components/DtdHome";
import DtdListUser from "./components/DtdListUser";
import DtdCreateUser from "./components/DtdCreateUser";
import DtdEditUser from "./components/DtdEditUser";

export default function DtdApp() {
  return (
    <Router>
      <div className="container">
        <DtdNavBar />
        <Routes>
          <Route path="/" element={<DtdHome />} />
          <Route path="/list-user" element={<DtdListUser />} />
          <Route path="/create-user" element={<DtdCreateUser />} />
          <Route path="/edit-user/:id" element={<DtdEditUser />} />
        </Routes>
      </div>
    </Router>
  );
}
