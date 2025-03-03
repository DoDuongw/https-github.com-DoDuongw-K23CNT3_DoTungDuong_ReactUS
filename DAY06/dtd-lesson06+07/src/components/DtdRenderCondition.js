import React, { Component } from 'react'
import DtdLoginControl from './DtdLoginControl';

class DtdRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
    // Hàm xử lý sự kiện login
    dtdHandleLogin =()=>{
        this.setState({
            isLoggedIn:true

        })
    }

    dtdHandleLogout =()=>{
        this.setState({
            isLoggedIn:false

        })
    }
  render() {
    let flag = this.state.isLoggedIn;
    return (
      <div className='alert alert-info'>
        <h2>Render Condition</h2>
        <hr/>
        <DtdLoginControl isLoggedIn={flag} />
        <hr/>
        {
            flag?<button onClick={this.dtdHandleLogout}>Logout</button>
            :<button onClick={this.dtdHandleLogin}>Login</button>
        }
      </div>
    )
  }
}
export default DtdRenderCondition ;
