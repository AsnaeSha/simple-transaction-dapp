import React, { useState } from "react";
import Web3 from "web3";
const web3 = new Web3();

const Withdraw = ({accounts, contractInstance}) => {
  const [account, setAccount] = useState("");
  const [moneyWithdraw, setMoneyWithdraw] = useState("");

async function withdraw_fund(){
const amount = web3.utils.toWei("2", "ether");
let response = await contractInstance.methods.withdraw(amount).send({from:accounts});
console.log(response);
setMoneyWithdraw(response)
}

  return (
  <>
  <button type="button" class="btn btn-warning" onClick={withdraw_fund}>Withdraw</button>
  </>
  );
};

export default Withdraw;
