import React, { Component } from 'react';
import axios from 'axios';
export default class CallSmartContract extends Component {
    state={
        ABI:null,
        deployed_address:null,
        contract_responce:null,
        number:0
      }
      callContract=(e)=>{
        e.preventDefault();
        this.callContractFromAPI();
      }
      callContractFromAPI=()=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/callRandomNumberContract`, {
            ABI: JSON.parse(this.state.ABI),
            deployed_address:this.state.deployed_address
          })
          .then((response)=> {
            console.log(response.data.contract_responce);
            this.setState({contract_responce:response.data.contract_responce})
          })
          .catch((error)=> {
            alert("Error : "+error);
          });
      }
    render() {
        return (
            <div className='container mt-5'>
                <h3 className='mb-3'>Call a smart contract</h3>
                <form method='post' onSubmit={this.callContract}>
                    <div className='form-group'>
                        <label>Enter contract ABI</label>
                        <textarea rows={7} className='w-50 form-control' name="ABI" onChange={(e)=>this.setState({ABI:e.target.value})}/>
                        <br></br>
                        <label>Deployed Address</label>
                        <input type="text" className='w-50 form-control' name="deployed_address" onChange={(e)=>this.setState({deployed_address:e.target.value})}/>
                        <br></br>
                        <label>Enter Number to Guess</label>
                        <input type="text" className='w-50 form-control' name="number" onChange={(e)=>this.setState({number:e.target.value})}/>
                        <br></br>
                        <button className='btn btn-primary'>Call Contract</button>
                    </div>
                    {this.state.contract_responce!=null?
                    <div className='mt-5'>
                        <p>Contract responce is with {this.state.number}: {JSON.stringify(this.state.contract_responce)}</p>
                    </div>
                    :''}
                </form>
            </div>
        );
    }
}