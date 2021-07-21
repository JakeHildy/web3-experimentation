const { Buffer } = require("buffer");

// Step 1 - Configuration
const Web3 = require("web3");
const EthereumTransaction = require("ethereumjs-tx").Transaction;
const url = "http://127.0.0.1:7545";
const web3 = new Web3(url);

// Step 2 - Set the sending and receiving addresses for the transaction.
const sendingAddress = "0xe8766e70aFC602cd4Ac224f3AE8D8b17D565e756";
const receivingAddress = "0x3E8a3803a3850c2EB1260ad1a389422Ca33173Ca";

// Step 3 - Check the balances of each address
// web3.eth.getBalance(sendingAddress).then(console.log);
// web3.eth.getBalance(receivingAddress).then(console.log);

const amountETH = "2";
const amountWei = web3.utils.toWei(amountETH);

// === CREATE TRANSACTION ===
const rawTransaction = {
  nonce: "0x05",
  to: receivingAddress,
  gasPrice: "0x20000000",
  gasLimit: "0x30000",
  value: web3.utils.numberToHex(amountWei),
  data: "0x0000",
};

// === SIGN TRANSACTION ===
const privateKeySender =
  "e0f609479304c8732004d2ea8a21e97664cdf7f99a94cc9a47c538e4eadc38c0";

const privateKeySenderHex = Buffer.from(privateKeySender, "hex");
// good to here.
const transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

// === SEND THE TRANSACTION TO THE NETWORK ===
const serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
