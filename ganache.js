const Web3 = require("web3");
const url = "http://127.0.0.1:8545";
const web3 = new Web3(url);

// console.log(web3);
// web3.eth.getAccounts().then((accounts) => {
//   console.log(accounts[0]);
//   web3.eth.getBalance(accounts[0]).then((bal) => {
//     console.log(web3.utils.fromWei(bal, "ether"), "ETH");
//   });
// });

const findAccountBalance = async (accountNum) => {
  const accounts = await web3.eth.getAccounts();
  const balance = await web3.eth.getBalance(accounts[accountNum]);
  const ethBal = web3.utils.fromWei(balance, "ether");
  console.log(`Account ${accountNum} has ${ethBal} ETH`);
  return ethBal;
};
findAccountBalance(0);
