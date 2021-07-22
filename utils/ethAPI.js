const EthereumTransaction = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");
const url = "http://127.0.0.1:7545";
const ropstenUrl =
  "https://ropsten.infura.io/v3/0eed1fcfd57c445796f1cbb23fbb2a44";
const mainnetUrl =
  "https://mainnet.infura.io/v3/0eed1fcfd57c445796f1cbb23fbb2a44";
const web3 = new Web3(mainnetUrl);

/* ===== Get Account Balance ====================
|  Gets the account Balance                     |
/* ============================================*/
exports.getAccountBalance = async (address) => {
  //   return new Promise((resolve, reject) => {
  //     web3.eth.getBalance(address, (err, bal) => {
  //       if (err) reject(err);
  //       resolve(web3.utils.fromWei(bal, "ether"));
  //     });
  //   });
  web3.eth.getBalance(address, (err, bal) => {
    if (err) console.log(err);
    else console.log(web3.utils.fromWei(bal, "ether"));
  });
};

/* ===== Get Gas Price ==========================
|  Gets gas price                               |
/* ============================================*/
exports.getGasPrice = async () => {
  const rawPrice = await web3.eth.getGasPrice();
  console.log(web3.utils.fromWei(rawPrice, "gwei"), "gwei");
};

/* ===== Send Transaction =======================
|  Sends a transaction on local blockchain      |
/* ============================================*/
exports.sendTransaction = async (
  sendingAddress,
  receivingAddress,
  eth,
  privateKey
) => {
  const amountWei = web3.utils.toWei(eth.toString());

  // Get Transaction Count
  const rawTxCount = await web3.eth.getTransactionCount(sendingAddress);
  const txCount = web3.utils.numberToHex(rawTxCount);

  // === CREATE TRANSACTION ===
  const rawTransaction = {
    nonce: txCount,
    to: receivingAddress,
    gasPrice: "0x20000000",
    gasLimit: "0x30000",
    value: web3.utils.numberToHex(amountWei),
    data: "0x0000",
  };

  // === SIGN TRANSACTION ===
  const privateKeyHex = Buffer.from(privateKey, "hex");
  const transaction = new EthereumTransaction(rawTransaction);
  transaction.sign(privateKeyHex);

  // === SEND TRANSACTION ===
  const serializedTransaction = transaction.serialize();
  web3.eth.sendSignedTransaction(serializedTransaction);
};
