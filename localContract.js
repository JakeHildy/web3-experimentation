const Web3 = require("web3");
const url = "http://127.0.0.1:7545";
const web3 = new Web3(url);

web3.eth
  .getTransactionCount("0xe8766e70aFC602cd4Ac224f3AE8D8b17D565e756")
  .then(console.log);
