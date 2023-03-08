import React,{useEffect, useState} from 'react';
import Web3 from 'web3';
import './App.css';
import Lottery from './contracts/Funder.json';
import {connectWeb3, connectWeb3Metamask} from './web3_functions.js';
import Transfer from './components/transfer.js';
import  Withdraw from './components/withdraw.js';



function App() {
const[contractInstance, setContract] = useState(null)
const[accounts, setAccounts] = useState()
const[address, setAddress] = useState(null)
const [balance, setBalance] = useState(null)


useEffect(()=>{
async function connect(){
try{
let{accounts, instance, deployedNetwork, get_balance} = await connectWeb3Metamask();
setAccounts(accounts[0]);
setContract(instance);
setAddress(deployedNetwork.address);
setBalance(get_balance);
}catch(error){
alert("failed to load accounts, contracts......");
console.log(error);
}
}
connect()
})

  return (
    <div className="App">
    <h2>Transaction Portal</h2>
    <br></br>
    <p>Account : <b>{accounts ? accounts : "Not Connected"}</b></p>
    <p>Balance: <b>{balance} ETH </b></p>
    <Transfer contractInstance={contractInstance} accounts={accounts}/>
    <Withdraw contractInstance={contractInstance} accounts={accounts}/>


    </div>
  );
}

export default App;
