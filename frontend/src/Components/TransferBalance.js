import React, { Component } from 'react';
import axios from 'axios';
export default class TransferBalance extends Component {
    state={
        from_wallet_address:null,
        to_wallet_address:null,
        ethers:null,
        transfer_balance_object:null
      }
      transferBalance=(e)=>{
        e.preventDefault();
        this.transferBalanceFromAPI();
      }
      transferBalanceFromAPI=()=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/sendBalance`, {
            fromWalletAddress: this.state.from_wallet_address,
            toWalletAddress: this.state.to_wallet_address,
            ethers:this.state.ethers
          })
          .then((response)=> {
            console.log(response.data.transfer_object);
            this.setState({transfer_balance_object:response.data.transfer_object})
          })
          .catch((error)=> {
            alert("Error : "+error);
          });
      }
    render() {
        return (
            <div className='container mt-5'>
                <h3 className='mb-3'>Transfer Balance</h3>
                <form method='post' onSubmit={this.transferBalance}>
                    <div className='form-group'>
                        <label>From Wallet Address</label>
                        <input type="text" className='w-50 form-control' name="from_wallet_address" onChange={(e)=>this.setState({from_wallet_address:e.target.value})}/>
                        <br></br>
                        <label>To Wallet Address</label>
                        <input type="text" className='w-50 form-control' name="to_wallet_address" onChange={(e)=>this.setState({to_wallet_address:e.target.value})}/>
                        <br></br>
                        <label>Ethers</label>
                        <input type="text" className='w-50 form-control' name="ethers" onChange={(e)=>this.setState({ethers:e.target.value})}/>
                        <br></br>
                        <button className='btn btn-primary'>Transfer Balance</button>
                    </div>
                    {this.state.transfer_balance_object!=null?
                    <div className='mt-5'>
                        <h5>Block Hash : {this.state.transfer_balance_object.blockHash}</h5>
                        <h5>Transaction Hash : {this.state.transfer_balance_object.transactionHash}</h5>
                        <h5>Gas Used : {this.state.transfer_balance_object.gasUsed}</h5>
                    </div>
                    :''}
                </form>
            </div>
        );
    }
}