import React, { useState } from "react";
import DtdProductList from "./Components/DtdProductList";
import DtdProductAdd from "./Components/DtdProductAdd";
import "./DtdApp.css";

const DtdApp = () => {
  // Mock data
  const [products, setProducts] = useState([
    { pid: "2310900027", pName: "Đỗ Tùng Dương", pQuantity: 1, pPrice: "Vô hạn" },
    { pid: "SV01", pName: "EM Dương đẹp trai", pQuantity: 10, pPrice: 15000000 },
    { pid: "SV02", pName: "Dương ít nói", pQuantity: 5, pPrice: 25000000 },
    { pid: "SP01", pName: "IPHONE16PRX", pQuantity: 10, pPrice: 15000000 },
    { pid: "SP02", pName: "GTR6 Nissan", pQuantity: 5, pPrice: 25000000 }
  ]);

  // Hàm thêm sinh viên sản phẩm mới
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Quản lý Sinh viên & Sản phẩm</h1>
      <div className="app-content">
        <DtdProductAdd addProduct={addProduct} />
        <DtdProductList products={products} />
      </div>
    </div>
  );
};

export default DtdApp;
