import React, { Component } from 'react'

class DtdHomeWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [
            { productId: "DtdP001", productName: "DtdIPhone 16prx", quantity: 1000, price: 99999 },
            { productId: "DtdP002", productName: "DtdIPhone 12", quantity: 20, price: 1250 },
            { productId: "DtdP003", productName: "DtdIPhone 13", quantity: 10, price: 1500 },
            { productId: "DtdP004", productName: "DtdIPhone 14", quantity: 15, price: 2000 },
          ],
        };
      }
    
      // 🗑 Xóa sản phẩm theo productId
      handleDelete = (productId) => {
        const newProducts = this.state.products.filter(product => product.productId !== productId);
        this.setState({ products: newProducts });
      };
    
      // 📝 Chỉnh sửa sản phẩm (giả lập, có thể thay bằng form nhập liệu)
      handleEdit = (productId) => {
        const newProducts = this.state.products.map(product => 
          product.productId === productId ? { ...product, productName: product.productName + " (Updated)" } : product
        );
        this.setState({ products: newProducts });
      };
    
      render() {
        return (
          <div>
            <h2>Danh sách sản phẩm</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th> Dtd Mã sản phẩm</th>
                  <th>Dtd Tên sản phẩm</th>
                  <th>Dtd Số lượng</th>
                  <th>Dtd Giá</th>
                  <th>Dtd Hành động</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product) => (
                  <tr key={product.productId}>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}$</td>
                    <td>
                      <button className="btn btn-success mx-1" onClick={() => this.handleEdit(product.productId)}>
                        Sửa
                      </button>
                      <button className="btn btn-danger mx-1" onClick={() => this.handleDelete(product.productId)}>
                        Xóa
                      </button>
                      <button className="btn btn-info mx-1" onClick={() => this.handleDelete(product.productId)}>
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
    
export default  DtdHomeWork ;
