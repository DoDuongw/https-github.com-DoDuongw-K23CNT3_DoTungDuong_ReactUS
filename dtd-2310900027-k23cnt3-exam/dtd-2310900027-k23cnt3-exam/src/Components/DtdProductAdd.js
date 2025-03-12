import React, { useState } from "react";
import "./DtdProductAdd.css";

const DtdProductAdd = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    pid: "",
    pName: "",
    pQuantity: "",
    pPrice: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.pid || !newProduct.pName || !newProduct.pQuantity || !newProduct.pPrice) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    addProduct({
      ...newProduct,
      pQuantity: Number(newProduct.pQuantity),
      pPrice: Number(newProduct.pPrice),
    });

    setNewProduct({ pid: "", pName: "", pQuantity: "", pPrice: "" });
  };

  return (
    <div className="product-add">
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="pid"
          placeholder="Mã sản phẩm"
          value={newProduct.pid}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pName"
          placeholder="Tên sản phẩm"
          value={newProduct.pName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="pQuantity"
          placeholder="Số lượng"
          min="0"
          value={newProduct.pQuantity}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="pPrice"
          placeholder="Giá"
          min="0"
          value={newProduct.pPrice}
          onChange={handleChange}
          required
        />
        <button type="submit">➕ Thêm</button>
      </form>
    </div>
  );
};

export default DtdProductAdd;
