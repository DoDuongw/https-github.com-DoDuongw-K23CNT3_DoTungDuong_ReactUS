import React, { Component } from 'react';

class DtdControl extends Component {
    render() {
        return (
            <div className="card-header">
                  <div className="row">
                    <div className="col-3 ">
                      <button
                        type="button"
                        className="btn btn-primary btn-icon-text"
                      >
                        Thêm mới sinh viên
                      </button>
                    </div>
                    <div className="col-6 ">
                      <form className="search-form" action="#">
                        <i className="icon-search" />
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search Here"
                          title="Search here"
                        />
                        <button className="btn btn-primary btn-icon-text">
                          Tìm kiếm
                        </button>
                      </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                      <select className="form-control">
                        <option value="">Sắp xếp</option>
                        <option value="">ABC1 def</option>
                        <option value="">ABC2 def</option>
                        <option value="">ABC 3def</option>
                      </select>
                    </div>
                  </div>
                </div>
        );
    }
}

export default DtdControl;