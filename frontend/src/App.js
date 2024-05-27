import React, { Component } from 'react';
import GetBalance from './Components/GetBalance';
import TransferBalance from './Components/TransferBalance';
import CallSmartContract from './Components/CallSmartContract';
import LotteryGame from './Components/LotteryGame';
import {BrowserRouter as Router, Routes ,Route,Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
  <nav className="navbar navbar-expand-md bg-dark navbar-dark">
     <div className="container">
  <Link className="navbar-brand" to="/">Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/" active="true">Get Balance</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/TransferBalance">Transfer Balance</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/CallSmartContract">Call a Smart Contract</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/LotteryGame">Lottery Game</Link>
      </li>    
    </ul>
  </div> 
  </div> 
</nav>

 <Routes>
  <Route path="/" element={<GetBalance />} />
  <Route path="/TransferBalance" element={<TransferBalance />} />
  <Route path="/CallSmartContract" element={<CallSmartContract />} />
  <Route path="/LotteryGame" element={<LotteryGame />} />
 </Routes>
 </Router>
</div>
    );
  }
}

export default App;