import Web3 from 'web3';
import Lottery from './contracts/Funder.json';

//connect to web3
async function connectWeb3(){
const provider = new Web3.providers.HttpProviders("HTTP://127.0.0.1:8545")
const web3 = new Web3(provider);
const accounts = await web3.eth.getAccounts();
console.log(accounts);
const networkId = await web3.eth.net.getId();
const deployedNetwork = await Lottery.networks[networkId];
const instance = new web3.eth.Contract(Lottery.abi, deployedNetwork.address);
return(accounts, instance);
}


//connect with metamask
async function connectWeb3Metamask(){
const web3 = new Web3(Web3.givenProvider || 'http://127.0.0:8545');
await window.ethereum.enable();
const accounts = await web3.eth.getAccounts();
const networkId = await web3.eth.net.getId();
console.log("injected web3 detected", accounts, networkId);
const deployedNetwork = await Lottery.networks[networkId];
console.log(deployedNetwork)
const instance = new web3.eth.Contract(Lottery.abi, deployedNetwork.address);
const get_balance = await web3.eth.getBalance(deployedNetwork.address);
return{accounts, instance, deployedNetwork, get_balance};
}



export {connectWeb3, connectWeb3Metamask}
