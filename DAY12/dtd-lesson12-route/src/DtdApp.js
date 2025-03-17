import React, { Suspense, lazy } from 'react';
import {Link, Route, Routes, BrowserRouter  as Router, Navigate} from 'react-router-dom'
import DtdHome from './Components/DtdHome'
import DtdAbout from './Components/DtdAbout'
import DtdContact from './Components/DtdContact'
const DtdDashboard = lazy(() => import('./Components/DtdDashboard'));
const isAuthenticated = false;  // Giả sử người dùng chưa đăng nhập
const ProtectedRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/about" />;
};
export default function DtdApp() {
  return (
    <div className='container border my-5'>
        <h1>React Router Demo K23CNT3 Đỗ Tùng Dương</h1>
        <hr />
        <Router>
          <div className='alert alert-danger'> 
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
            <Suspense fallback={<div>Loading...</div>}> 
            <div className='alert alert-info'>
              <Routes>
                  <Route path="/" element={<DtdHome />} />
                  <Route path="/about" element={<DtdAbout />} />
                  <Route path="/contact" element={<DtdContact />} />
                  <Route path="/dashboard" element={<ProtectedRoute element={<DtdDashboard />} />} />

              </Routes>
            </div>
            </Suspense>
          </div>
        </Router>
    </div>
  )
}