import React from "react";
import "./DtdProductList.css";

const DtdProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Danh sách Sinh viên & Sản phẩm</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá (VND)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.pid}</td>
              <td>{product.pName}</td>
              <td>{product.pQuantity}</td>
              <td>{product.pPrice.toLocaleString()} VND</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DtdProductList;
