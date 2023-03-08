import React, { useState } from "react";
import Web3 from "web3";
const web3 = new Web3();

const Transfer = ({accounts, contractInstance}) => {
  const [account, setAccount] = useState("");
  const [transfer, setTransfer] = useState("");

async function fund(){
let response = await contractInstance.methods.transfer().send({from:accounts, value: web3.utils.toWei('2','ether')});
console.log(response);
setTransfer(response)
}
  return (
  <>
  <button type="button" class="btn btn-danger" onClick={fund}>Transfer</button>
  </>
  );
};

export default Transfer;
