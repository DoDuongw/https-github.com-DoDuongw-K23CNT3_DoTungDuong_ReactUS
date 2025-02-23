import React from "react";
import DtdFuncComp from "./Components/DtdFuncComp";
import DtdFuncComp1 from "./Components/DtdFuncCompObj";
import DtdClassComp from "./Components/DtdClassComp";



function DtdApp() {
  // Object
  const user = {
    fullName:'Đỗ Tùng Dương',
    age:20,
    phone:"0375526086"
  }
  return (
    <div className="container border mt-3">
        <h1> Đỗ Tùng Dương </h1>
        <hr/>
        <div className='alert alert-danger'>
          <DtdFuncComp name="Đỗ Tùng Dương" address ="T1 Seoul Korean " company =" T1 Academy" />
          <hr/>
          <DtdFuncComp name="AyaTsuki" address="Hà Nội" company="ATG"/>
        </div>
        <div className='alert alert-info'>
          <DtdFuncComp1 renderInfor={user} />
        </div>
        <DtdClassComp />
        {/* chuyển dữ liệu từ DtdApp -> xuống DtdClassComp */}
        <DtdClassComp renderName="AyaTsuki" renderUsers={user} />
    </div>
  );
}

export default DtdApp;
