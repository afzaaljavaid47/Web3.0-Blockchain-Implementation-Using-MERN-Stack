import React, { Component } from 'react';
import axios from 'axios';
class GetBalance extends Component {
    state={
        wallet_address:null,
        wallet_balance:null
      }
      getBalance=(e)=>{
        e.preventDefault();
        console.log("hello");
        this.getBalanceFromAPI();
      }
      getBalanceFromAPI=()=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/getBalance`, {
            walletAddress: this.state.wallet_address
          })
          .then((response)=> {
            console.log(response.data.walletBalance);
            this.setState({wallet_balance:response.data.walletBalance})
          })
          .catch((error)=> {
            alert("Error : "+error);
          });
      }
    render() {
        return (
            <div className='container mt-5'>
                <h3 className='mb-3'>Get Balance</h3>
                <form method='post' onSubmit={this.getBalance}>
                    <div className='form-group'>
                        <label>Enter Wallet Address</label>
                        <input type="text" className='w-50 form-control' name="wallet_address" onChange={(e)=>this.setState({wallet_address:e.target.value})}/>
                        <br></br>
                        <button className='btn btn-primary'>Get Balance</button>
                    </div>
                    {this.state.wallet_balance!=null?
                    <div className='mt-5'>
                        <h5>Your wallet balance is : {this.state.wallet_balance} Ether</h5>
                    </div>
                    :''}
                </form>
            </div>
        );
    }
}

export default GetBalance;