var express = require('express');
var router = express.Router();
var Web3=require("web3");
var web3=new Web3("HTTP://127.0.0.1:7545");

router.get('/', function(req, res, next) {
    res.render('index', { title: "Express",balanceData: "0",totalBalance:"0" });
});

router.post("/getBalance",(req,res)=>{
  web3.eth.getBalance(req.body.walletAddress)
  .then(data=>{
	res.send({walletBalance:web3.utils.fromWei(data,"ether")})
    console.log("Data is : "+web3.utils.fromWei(data,"ether"));
    // res.render('index', { title: web3.utils.fromWei(data,"ether"),balanceData: "0",totalBalance:"0" });
   })
})
router.post("/Manager",(req,res)=>{
  contract.methods.manager().call().then((manager)=>{
    res.send({manager});
})})
router.post("/sendBalance",(req,res)=>{
  web3.eth.sendTransaction({from:req.body.fromWalletAddress,to:req.body.toWalletAddress,value:web3.utils.toWei(req.body.ethers,"ether")})
  .then(data=>{
    res.send({transfer_object:data});
	console.log("Send Transaction Data is : "+data);
    // res.render('index', { balanceData: data,title: "Express",totalBalance:"0" });
   }).catch(error=>{
	   console.log("Error : "+error);
   })
})
router.post("/selectWInner",(req,res)=>{
  contract.methods.selectWinner().send({from:"0xD23F2256Fe018eB8fEFf51A720b4f019A4e0ECb2"}).then((winnerData)=>{
    res.send({winnerData});
  }).catch((err)=>{
    res.send({err});
  })
})
router.post("/callContract",(req,res)=>{
  let contract=new web3.eth.Contract(req.body.ABI,req.body.deployed_address);
  contract.methods.getBalance().call().then((totalBalance)=>{
	res.send({contract_responce:totalBalance});
});
})

router.post("/callRandomNumberContract",(req,res)=>{
  let contract=new web3.eth.Contract(req.body.ABI,req.body.deployed_address);
  // contract.methods.random().send({from:"0x4BCa9C07a2B75A858C185d7eD41472cd7d8500C9"}).then((data)=>{
  //   res.send({data});
  // }).catch((err)=>{
  //   console.log(err);
  // })
  contract.methods.random().send({from: "0x4BCa9C07a2B75A858C185d7eD41472cd7d8500C9"})
  .on('receipt', function(hash){
    console.log(hash);
  });
  contract.methods.random().call().then((number)=>{
    console.log(number);
	res.send({contract_responce:number});
});
});

module.exports = router;