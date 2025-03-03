import React, { Component } from "react";

class DtdEvenForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            dtdSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    dtdHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.dtdSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
       
        this.setState({
            dtdSelectCheckBox:selectedOptions
        });
    }

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.dtdSelectCheckBox.includes("Apple")}
              onChange={this.dtdHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.dtdSelectCheckBox.includes("Banana")}
              onChange={this.dtdHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.dtdSelectCheckBox.includes("Orange")}
              onChange={this.dtdHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default DtdEvenForm4;