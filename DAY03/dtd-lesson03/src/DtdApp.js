import DtdClassComp from "./components/DtdClassComp";
import DtdFuncComp from "./components/DtdFuncComp";
import DtdJsxExperssion from "./components/DtdJsxExperssion";

function DtdApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1> React JS lesson03 - Đỗ Tùng Dương </h1>

    <DtdJsxExperssion/>
    <hr/>
    {/* Sử dụng function components */ }
    <DtdFuncComp/>
    {/*sử dụng class components*/}
    <DtdClassComp></DtdClassComp>  
    </div>
  );
}

export default DtdApp;
